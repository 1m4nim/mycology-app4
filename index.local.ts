// ローカル環境向けのNode.jsアダプタ
import { serve } from "@hono/node-server";
import { app } from "./app";

serve({
  fetch: app.fetch,
  port: 3000,
});
