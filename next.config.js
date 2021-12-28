const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';

module.exports = {
    basePath: basePath,
    assetPrefix: `${basePath}/`,
    experimental: {
        urlImports: [
            "https://framer.com/m/",
            "https://framerusercontent.com/",
            "https://fonts.gstatic.com/",
            "https://ga.jspm.io/",
            "https://jspm.dev/",
        ],
    },
}
