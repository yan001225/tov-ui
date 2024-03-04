import classNames from 'classnames'
import { computed } from 'vue'

interface ClassNames {
  c: (...arg: BemType[]) => BemType
  cx: (arg: () => Record<string, boolean>) => any
  ce: (arg: string) => BemType
  cm: (arg: string) => BemType
}
type BemType = string | [string, 'B' | 'E' | 'M' | undefined]
export function useClassNames(componentName: string): ClassNames {
  // 前缀 + 组件名 + 自定义名称
  const prefix = 'tov'
  const componentClass = `${prefix}-${componentName}`

  const c = (...arg: BemType[]): BemType => {
    if (arg.length) {
      return arg.reduce((prev, cur) => {
        if (Array.isArray(cur)) {
          const arg1 = cur[0]
          const arg2 = cur[1]
          if (arg2 === 'E')
            return `${prev}__${arg1}`
          else if (arg2 === 'M')
            return `${prev}--${arg1}`
        }
        return `${prev}-${cur}`
      }, componentClass)
    }
    return componentClass
  }
  const ce = (e: string) => [e, 'E'] as BemType
  const cm = (m: string) => [m, 'M'] as BemType
  const cx = (cls: () => Record<string, boolean>) => {
    return computed(() => classNames(cls()))
  }

  return {
    c,
    cx,
    ce,
    cm,
  }
}
