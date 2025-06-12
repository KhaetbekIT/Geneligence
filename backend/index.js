const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server
    .use(middlewares)
    .use((req, res, next) => {
        if (req.method === "GET") return next();

        const accessKey = req.headers["x-access-key"];
        if (
            ["PATCH", "DELETE"].includes(req.method) &&
            accessKey !== "SECRET123"
        ) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        next();
    })
    .use(router);

server.listen(8000, () => {
    console.log("JSON Server running on http://localhost:8000");
});
