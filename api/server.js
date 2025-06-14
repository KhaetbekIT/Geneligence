const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// 🔐 Авторизация для PATCH/POST/DELETE к /posts
server.use((req, res, next) => {
    if (req.method === "GET") {
        return next(); // разрешаем все GET-запросы
    }

    // Ограничиваем только /posts (можно добавить другие пути)
    const protectedRoutes = ["/posts"];

    const isProtectedRoute = protectedRoutes.some((route) =>
        req.path.startsWith(route)
    );

    if (isProtectedRoute && ["PATCH", "DELETE", "POST"].includes(req.method)) {
        const accessKey = req.headers["x-access-key"];
        if (accessKey !== process.env.ACCESS_KEY) {
            return res.status(401).json({ error: "Unauthorized" });
        }
    }

    if (req.method === "POST") {
        req.body.created_at = Date.now();
    }

    if (req.method === "PATCH") {
        req.body.updated_at = Date.now();
    }

    next();
});

server.use(router);

server.listen(8000, () => {
    console.log("✅ JSON Server running on http://localhost:8000");
});

module.exports = server;
