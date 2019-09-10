module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/lstheart/4d93135d756c4c7094bca0b756922004?v=e6f8711a4aef4cb88cabdcbfbf2b7781"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/lstheart/de4a785cae784abd9f7811a5be5f5c49?v=099bfa1d32684e92a58c0f0fc2620bf1" //主要修改此处
            }
        }
    ],
}
