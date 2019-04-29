function links(root, args, context, info) {
    return context.prisma.user({ id: root.id }).links()
}

module.exports = { links }