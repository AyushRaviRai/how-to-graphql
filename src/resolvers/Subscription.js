function newLinkSubscribe(root, args, context, info) {
    return context.prisma.$subscribe.link({ mutation_in: ['CREATED'] }).node()
}

function newVoteSubscribe(root, args, context, info) {
    return context.prisma.$subscribe.vote({ mutation_in: ['CREATED'] }).node()
}

const newLink = {
    subscribe: newLinkSubscribe,
    resolve: payload => {
        return payload
    }
}

const newVote = {
    subscribe: newVoteSubscribe,
    resolve: payload => {
        return payload
    }
}

module.exports = { newLink, newVote }