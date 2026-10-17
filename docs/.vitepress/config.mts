import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'UX Fundamentals',
  cleanUrls: true,
  lastUpdated: true,

  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      description: 'UX guides and knowledge for beginners'
    },
    pl: {
      label: 'Polski',
      lang: 'pl-PL',
      description: 'Poradniki i wiedza o UX dla początkujących',
      themeConfig: {
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
