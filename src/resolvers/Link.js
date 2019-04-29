function postedBy(root, args, context, info) {
    return context.prisma.links({ id: root.id }).postedBy()
}

module.exports = { postedBy }