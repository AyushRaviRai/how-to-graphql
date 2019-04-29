function link(root, args, context, info) {
    return context.prisma.vote({ id: root.id }).link()
}

function user(root, args, context, info) {
    return context.prisma.vote({ id: root.id }).user()
}

module.exports = { link, user }