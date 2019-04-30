async function feed(root, args, context, info) {
    const where = args.filter ? {
        OR: [
            { description_contains: args.filter },
            { url_contains: args.filter }
        ]
    } : {}

    const links = await context.prisma.links({
        where,
        skip: args.skip ? args.skip : null,
        first: args.first ? args.first : null,
        orderBy: args.orderBy
    })

    const count = links.length
    return {
        links: links,
        count: count
    }
}

module.exports = {
    feed
}