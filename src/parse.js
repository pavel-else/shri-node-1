const { fetcher } = require('../fetcher.js');

const retryedFetch = async (route) => {
    const result = await fetcher(route);

    if (result.status === 500) {
        return fetcher(route);
    }

    return result;
};

const parse = async (url) => {
    const visitedRoutes = new Set();
    const routes = [url];

    // Похоже, в итоговый список должны попадать только те роуты, которые отдают 200
    const resultRoutes = [];

    for await (const route of routes) {
        if (visitedRoutes.has(route)) {
            continue;
        }

        visitedRoutes.add(route);

        try {
            const { status, text } = await retryedFetch(route);

            if (status === 200) {
                resultRoutes.push(route);
                const html = await text();

                const hrefs = html.match(/href="([^\'\"]+)/g);

                if (!hrefs) {
                    continue;
                }

                hrefs.forEach((href) => {
                    routes.push(href.slice(6));
                })
            }
        } catch (err) {
            console.error(err);
        }
    }

    return resultRoutes;
};

module.exports = { parse };