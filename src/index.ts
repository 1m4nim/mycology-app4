// 本番環境向けのAWS Lambda向けアダプタ
import { handle } from "hono/aws-lambda";
import { app } from "./app";

export const handler = handle(app);
