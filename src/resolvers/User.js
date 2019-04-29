function links(root, args, context, info) {
    return context.prisma.user({ id: root.id }).links()
}

function votes(root, args, context, info) {
    return context.prisma.user({ id: root.id }).votes()
}

module.exports = { links, votes }