const { fetcher } = require('../fetcher.js');

const parse = async (url) => {
    const visitedRoutes = new Set();
    const routes = [url];

    for await (const route of routes) {
        if (visitedRoutes.has(route)) {
            continue;
        }

        visitedRoutes.add(route);

        try {
            const { status, text } = await fetcher(route);

            if (status === 200) {
                const html = await text();

                const hrefs = html.match(/href="([^\'\"]+)/g);
                hrefs.forEach((href) => {
                    routes.push(href.slice(6));
                })
            }
        } catch (err) {
        }
    }

    return Array.from(visitedRoutes);
};

module.exports = { parse };