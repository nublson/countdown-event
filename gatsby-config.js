require("dotenv/config")

module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
        {
            resolve: "gatsby-plugin-firebase",
            options: {
                features: {
                    auth: false,
                    database: true,
                    firestore: true,
                    storage: true,
                    messaging: false,
                    functions: false,
                    performance: false,
                },
            },
        },
    ],
}
