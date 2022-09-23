import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  output: {
    path: path.resolve(ROOT_DIRECTORY, "dev")
  },
});
