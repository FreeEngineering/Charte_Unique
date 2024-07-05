import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Charte unique",
  description: "La charte unique propose de standardiser les descriptions et représentations des ouvrages et installations techniques.",
  base: "/Charte_Unique/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Charte', link: '/cartouche' }
    ],

    sidebar: [
      {
        text: 'Charte',
        items: [
          { text: 'Cartouche', link: '/cartouche' },
         // { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FreeEngineering/Charte_Unique' }
    ]
  }
})
