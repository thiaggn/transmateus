import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
	build: {
		rolldownOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				admin: resolve(__dirname, "admin.html"),
			},
		},
	},
});
