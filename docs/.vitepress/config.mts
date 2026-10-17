import { defineConfig, type DefaultTheme } from 'vitepress'

const foundationsPages = [
  '01-what-is-ux',
  '02-ux-roles',
  '03-product-development-life-cycle',
  '04-user-centered-design',
  '05-assistive-technology',
  '06-platforms',
  '07-design-thinking',
  '08-empathize-and-define',
  '09-ideate',
  '10-prototype-and-test',
  '11-design-sprints',
  '12-ux-research',
  '13-bias-in-research',
  '14-glossary'
]

function foundationsSidebar(
  prefix: string,
  chapterTitle: string,
  overviewTitle: string,
  pageTitles: string[]
): DefaultTheme.SidebarItem[] {
  return [
    {
      text: chapterTitle,
      items: [
        { text: overviewTitle, link: `${prefix}/foundations/` },
        ...foundationsPages.map((page, index) => ({
          text: pageTitles[index],
          link: `${prefix}/foundations/${page}`
        }))
      ]
    }
  ]
}

export default defineConfig({
  title: 'UX Fundamentals',
  cleanUrls: true,
  lastUpdated: true,

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wght@0,200..900;1,200..900&display=swap'
      }
    ]
  ],

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      description: 'UX guides and knowledge for beginners',
      themeConfig: {
        nav: [{ text: 'Chapter 1: Foundations', link: '/foundations/' }],
        sidebar: {
          '/foundations/': foundationsSidebar('', 'Chapter 1: Foundations of UX design', 'Chapter overview', [
            'What is user experience?',
            'Roles and responsibilities in UX',
            'Product development life cycle',
            'User-centered and inclusive design',
            'Assistive technology',
            'Designing for different platforms',
            'Design thinking framework',
            'Empathize and define',
            'Ideate',
            'Prototype and test',
            'Design sprints',
            'UX research',
            'Bias in UX research',
            'Glossary'
          ])
        }
      }
    },
    pl: {
      label: 'Polski',
      lang: 'pl-PL',
      description: 'Poradniki i wiedza o UX dla początkujących',
      themeConfig: {
        nav: [{ text: 'Rozdział 1: Podstawy', link: '/pl/foundations/' }],
        sidebar: {
          '/pl/foundations/': foundationsSidebar('/pl', 'Rozdział 1: Podstawy projektowania UX', 'Przegląd rozdziału', [
            'Czym jest doświadczenie użytkownika?',
            'Role i obowiązki w UX',
            'Cykl rozwoju produktu',
            'Projektowanie zorientowane na użytkownika i inkluzywne',
            'Technologie wspomagające',
            'Projektowanie na różne platformy',
            'Framework design thinking',
            'Empatia i definiowanie',
            'Generowanie pomysłów',
            'Prototypowanie i testowanie',
            'Sprinty projektowe',
            'Badania UX',
            'Błędy poznawcze w badaniach UX',
            'Słowniczek'
          ])
        },
        outline: { label: 'Na tej stronie' },
        docFooter: { prev: 'Poprzednia strona', next: 'Następna strona' },
        lastUpdated: { text: 'Ostatnia aktualizacja' },
        langMenuLabel: 'Zmień język',
        returnToTopLabel: 'Powrót na górę',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Motyw',
        lightModeSwitchTitle: 'Przełącz na jasny motyw',
        darkModeSwitchTitle: 'Przełącz na ciemny motyw',
        notFound: {
          title: 'NIE ZNALEZIONO STRONY',
          quote: 'Ta strona nie istnieje lub została przeniesiona.',
          linkLabel: 'przejdź do strony głównej',
          linkText: 'Wróć na stronę główną'
        }
      }
    }
  },

  themeConfig: {
    outline: 'deep',
    socialLinks: [{ icon: 'github', link: 'https://github.com/ChrisAraneo/ux-fundamentals' }],
    search: {
      provider: 'local',
      options: {
        locales: {
          pl: {
            translations: {
              button: { buttonText: 'Szukaj', buttonAriaLabel: 'Szukaj' },
              modal: {
                displayDetails: 'Pokaż szczegóły',
                resetButtonTitle: 'Wyczyść wyszukiwanie',
                backButtonTitle: 'Zamknij wyszukiwanie',
                noResultsText: 'Brak wyników dla',
                footer: {
                  selectText: 'wybierz',
                  navigateText: 'nawiguj',
                  closeText: 'zamknij'
                }
              }
            }
          }
        }
      }
    }
  }
})
