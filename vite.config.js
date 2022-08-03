const path = require("path")

module.exports = {
    // root: path.join(__dirname, "./src"),
    // root: "/",
    alias: {
        "/@/": path.resolve(__dirname, "./src"),
        "/@static/": path.resolve(__dirname, "./static")
    },
    port: 9999,
    externals: [
        "element-plus"
    ],
    proxy: {
        "/yuanyiPC": "http://192.168.31.191:8082/"
    }
}