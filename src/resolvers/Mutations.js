const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const { getUserId, APP_SECRET } = require("../utils");

function post(root, args, context, info) {
    const userId = getUserId(context)
    return context.prisma.createLink({
        url: args.url,
        description: args.description,
        postedBy: { connect: { id: userId } }
    });
}

/**
 * Method to do some awsome sheeeez
 * @param {*} root 
 * @param {*} args 
 * @param {*} context 
 * @param {*} info 
 */
async function signup(root, args, context, info) {
    const password = await bcrypt.hash(args.password, 10);

    const user = await context.prisma.createUser({...args, password })

    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return { user, token }
}

async function login(root, args, context, info) {
    // check if user exists or not
    const user = await context.prisma.user({ email: "ironman@avengers.com" });
    if (!user) {
        throw new Error("No Such User Found");
    }

    // check if user password is valid
    const valid = await bcrypt.compare(args.password, user.password)
    if (!valid) {
        throw new Error("User password is invalid")
    }

    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return { user, token }
}


module.exports = {
    post,
    login,
    signup
}