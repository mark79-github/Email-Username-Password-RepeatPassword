const credentials = {
    development: {
        username: "",
        password: "",
        db: "exam",
        server: "127.0.0.1",
        privateKey: "very-secret-private-key",
    },
    production: {
        username: "admin",
        password: "admin",
        db: "exam",
        server: "cluster.*****.mongodb.net",
        privateKey: "very-secret-private-key",
    }
}

module.exports = credentials[process.env.NODE_ENV.trim()];