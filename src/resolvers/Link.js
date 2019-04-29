function postedBy(root, args, context, info) {
    return context.prisma.links({ id: root.id }).postedBy()
}

function votes(root, args, contest, info) {
    return context.prisma.link({ id: root.id }).votes()
}

module.exports = { postedBy, votes }