module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/lstheart/55790580a6c44449bd16d23ff26ca54c?v=5e5349acb8944ad2bc94f829dd432c0b"   //主要修改此
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/lstheart/79d4ae8cc315408cad227e2f193e804a?v=3883465a30c449019b172a893b70caf9" //主要修改此处
            }
        }
    ],
}
