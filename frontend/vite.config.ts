import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	server: {
		host: true,
		port: 3000,
	},
	optimizeDeps: {
		include: ["@pbe/react-yandex-maps"],
	},
	build: {
		commonjsOptions: {
			include: [/node_modules/, /@pbe\/react-yandex-maps/],
		},
	},
});
