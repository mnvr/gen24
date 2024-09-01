import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, "index.html"),
                "1": resolve(__dirname, "src/1/index.html"),
            },
        },
    },
});
