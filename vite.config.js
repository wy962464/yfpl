import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from "path";
import autoprefixer from "autoprefixer";

const alias = {
  "@": resolve(__dirname, ".", "src"),
};
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  return {
    plugins: [vue()],
    resolve: {
      alias,
    },
    base: "/yfpl",
    build: {
      target: "modules", //设置最终构建的浏览器兼容目标  //es2015(编译成es5) | modules
      outDir: `dist/${env.VITE_APP_BASE_API}`, // 构建得包名  默认：dist
      assetsDir: "static", // 静态资源得存放路径文件名 static
      sourcemap: false, //构建后是否生成 source map 文件
      minify: "esbuild", // 项目压缩 :boolean | 'terser' | 'esbuild'
      chunkSizeWarningLimit: 1000, //chunk 大小警告的限制（以 kbs 为单位）默认：500
      cssTarget: "chrome61", //防止 vite 将 rgba() 颜色转化为 #RGBA 十六进制符号的形式  (要兼容的场景是安卓微信中的 webview 时,它不支持 CSS 中的 #RGBA 十六进制颜色符号)
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
          }
        },
      },
    },
    css: {
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: [
              "Android 4.1",
              "iOS 7.1",
              "Chrome > 31",
              "ff > 31",
              "ie >= 8",
              "last 10 versions", // 所有主流浏览器最近10版本用
            ],
            grid: false,
          }),
        ],
      },
    },
    server: {
      // 服务器主机名，如果允许外部访问，可设置为 "0.0.0.0"
      host: "0.0.0.0",
      port: 6061,
      open: false,
      cors: true,
      hmr: true, //开启热加载
      // 代理跨域
      // proxy: {
      //   "/api": {
      //     target: 'http://localhost:3000',
      //     changeOrigin: true,
      //     // rewrite: (path) => path.replace(new RegExp(`^/api`), ''),
      //   },
      // },
    },
    esbuild: {
      pure: ["console.log", "debugger"],
    },
  }
})
