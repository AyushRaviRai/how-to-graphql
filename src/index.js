const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generate/prisma-client')
const Query = require("./resolvers/Query")
const Link = require("./resolvers/Link")
const Mutation = require("./resolvers/Mutations")
const User = require("./resolvers/User")
const Subscription = require("./resolvers/Subscription")
const Vote = require("./resolvers/Vote")


const resolvers = {
    Query,
    Link,
    Mutation,
    User,
    Subscription,
    Vote
}

// 3
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: (request) => {
        return {...request, prisma }
    }
})
server.start(() => console.log(`Server is running on http://localhost:4000`));