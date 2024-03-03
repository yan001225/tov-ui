import { fileURLToPath } from 'node:url'
import path from 'node:path'
import fs from 'node:fs'
import { gold, green, purple, red } from '@ant-design/colors'

let colors = ''
purple.forEach((color, index) => {
  // css variable  css变量
  colors += `--tov-color-primary-${index + 1}: ${color};\n`
})
colors += `\n`
green.forEach((color, index) => {
  // css variable  css变量
  colors += `--tov-color-success-${index + 1}: ${color};\n`
})
colors += `\n`
red.forEach((color, index) => {
  // css variable  css变量
  colors += `--tov-color-warning-${index + 1}: ${color};\n`
})
colors += `\n`
gold.forEach((color, index) => {
  // css variable  css变量
  colors += `--tov-color-error-${index + 1}: ${color};\n`
})
const baseUrl = fileURLToPath(new URL('../', import.meta.url))
const cssFile = path.resolve(baseUrl, 'packages/tov-ui/styles/theme/colors.css')
// console.log(cssFile)
fs.writeFileSync(cssFile, `:root{\n${colors}\n}`)
// console.log(`successfully`, colors)
