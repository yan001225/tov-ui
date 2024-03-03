import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Tov-Ui',
  description: 'This is a vue components library',
  rewrites: {
    'docs/(.*)': '(.*)',
    'packages/tov-ui/src/components/:comp/(.*)': 'components/:comp/(.*)',
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '组件', link: '/components/' },
      { text: '工具', link: '/utils/' },
    ],
    sidebar: {
      '/components': [
        {
          text: '按钮',
          link: '/components/button/',
        },
        {
          text: '输入框',
          link: '/components/input/',
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
})
