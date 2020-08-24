// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    // px 转 vw 适配方案
    "postcss-px-to-viewport": {
      viewportWidth: 750, // 基础准则
      viewportHeight: 1334,
      unitPrecision: 3, // 精度
      viewportUnit: 'vw',
      selectorBlackList: ['.ignore', '.hairlines'],
      minPixelValue: 1,
      mediaQuery: false
    }
  }
}
