// The default theme without its bundled Inter font; Metrophobic and Krona One are loaded from Google Fonts in config.mts
import DefaultTheme from 'vitepress/theme-without-fonts'
import type { Theme } from 'vitepress'
import { h } from 'vue'
import HomeBackground from './HomeBackground.vue'
import SidebarBackground from './SidebarBackground.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  // The symmetric line art: animated behind the home page, drawn once behind the sidebar
  Layout: () =>
    h(DefaultTheme.Layout, null, {
      'home-hero-before': () => h(HomeBackground),
      'sidebar-nav-before': () => h(SidebarBackground)
    })
} satisfies Theme
