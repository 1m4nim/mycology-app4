// 環境に依存しないアプリケーションのエントリーポイント
const app = new Hono().basePath("/api").use("*", cors());
const routes = app.route("/", employeesRoute);
type AppType = typeof routes;

export { app, type AppType };
