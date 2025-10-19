import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// ⚠️ thay <repo-name> bằng tên repo của bạn
export default defineConfig({
    plugins: [react()],
    base: "test_japanese",
});
