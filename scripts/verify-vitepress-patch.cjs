/**
 * 校验 VitePress 构建优化补丁是否真的落在 node_modules 里。
 *
 * 背景：patch 由 pnpm 的 `patchedDependencies` 在 install 时应用（见 patches/）。
 * 该配置的 key 是精确版本 vitepress@1.6.4 —— 一旦升级 VitePress，pnpm 会
 * 静默跳过补丁，CI 构建会悄悄变慢。此脚本作为 postinstall 兜底，失败即报错。
 */
const fs = require('node:fs')
const path = require('node:path')

const root = path.resolve(__dirname, '..')
const chunkPath = path.join(root, 'node_modules/vitepress/dist/node/chunk-D3CUZ4fa.js')
const pkgPath = path.join(root, 'node_modules/vitepress/package.json')

function fail(message) {
  console.error(`\n[vitepress-patch] ${message}`)
  console.error(
    '[vitepress-patch] 请确认使用 pnpm install，且 package.json 中 pnpm.patchedDependencies 指向 patches/vitepress@1.6.4.patch。\n'
  )
  process.exit(1)
}

if (!fs.existsSync(chunkPath) || !fs.existsSync(pkgPath)) {
  fail('未找到 vitepress，依赖可能未安装。')
}

const version = JSON.parse(fs.readFileSync(pkgPath, 'utf8')).version
if (version !== '1.6.4') {
  fail(
    `VitePress 版本为 ${version}，补丁只对 1.6.4 生效。` +
      ' 升级后需重新执行 pnpm patch / pnpm patch-commit 生成新补丁，并更新 package.json 的 patchedDependencies key。'
  )
}

const source = fs.readFileSync(chunkPath, 'utf8')
const checks = [
  ['git 时间戳批量预取', 'function preloadGitTimestamps()'],
  ['Markdown LRU 上限 5000', 'new LRUCache({ max: 5000 })'],
  ['SSR 跳过重复搜索索引', 'if (ssr || siteConfig.site.themeConfig?.search?.provider !== "local")'],
  ['SSR 参数透传', 'await localSearchPlugin(siteConfig, ssr),'],
]

const missing = checks.filter(([, needle]) => !source.includes(needle)).map(([name]) => name)
if (missing.length) {
  fail(`补丁未生效，缺少：${missing.join('、')}。`)
}

console.log(`[vitepress-patch] OK: vitepress@${version} 的三项构建优化补丁已生效。`)
