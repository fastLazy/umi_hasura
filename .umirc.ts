import { defineConfig } from "umi";

export default defineConfig({
  define: {
    "process.env.URI": "http://localhost:8080/v1/graphql",
    "process.env.SECRET": "myadminsecretkey",
  },
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: "pnpm",
});
