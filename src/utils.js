const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const APP_SECRET = "graphql-is-awsome";

function getUserId(context) {
    const authorization = context.request.get("Authorization");

    if (authorization && authorization.length > 0) {
        const token = authorization.replace("Bearer", '').trim();
        console.log(jwt.verify(token, APP_SECRET));
        const { userId } = jwt.verify(token, APP_SECRET);
        return userId
    }

    throw new Error("Not Authenticated");
}

module.exports = {
    getUserId,
    APP_SECRET
}