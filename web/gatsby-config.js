module.exports = {
    siteMetadata: {
        siteUrl: "https://www.yourdomain.tld",
        title: "Angela Knits Now",
    },
    plugins: [
        {
            resolve: "gatsby-source-sanity",
            options: {
                projectId: "fuzghlhq",
                dataset: "production",
                graphqlTag: "default",
            },
        },
        "gatsby-plugin-image",
    ],
};
