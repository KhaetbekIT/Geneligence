require("dotenv").config({ path: ".env.development" });

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// Подключаем middleware
server.use(middlewares);
server.use(jsonServer.bodyParser);

// 🔐 Авторизация и обработка дат
server.use((req, res, next) => {
    const protectedRoutes = ["/posts", "/works"];
    const method = req.method;

    const isProtectedRoute = protectedRoutes.some((route) =>
        req.path.startsWith(route)
    );

    // 🔒 Запретить доступ к другим endpoint'ам кроме защищённых
    const isModifyingMethod = ["POST", "PATCH", "DELETE"].includes(method);
    if (!isProtectedRoute && isModifyingMethod) {
        return res.status(403).json({ error: "Forbidden" });
    }

    // 🔐 Авторизация
    if (isProtectedRoute && isModifyingMethod) {
        const accessKey = req.headers["x-access-key"];
        if (accessKey !== process.env.ACCESS_KEY) {
            return res.status(401).json({ error: "Unauthorized" });
        }
    }

    // ⏱ Автоматические поля
    if (isProtectedRoute && method === "POST" && req.body) {
        req.body.created_at = new Date();
        req.body.updated_at = new Date();
        req.body.id = crypto.randomUUID();
    }

    if (isProtectedRoute && method === "PATCH" && req.body) {
        req.body.updated_at = new Date();
    }

    next();
});

// Подключаем маршруты
server.use(router);

// Запускаем сервер
server.listen(8000, () => {
    console.log("✅ JSON Server running on http://localhost:8000");
});

module.exports = server;
