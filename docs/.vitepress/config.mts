import { defineConfig, type DefaultTheme } from 'vitepress'

type Locale = 'en' | 'pl'

interface Chapter {
  folder: string
  title: Record<Locale, string>
  navTitle: Record<Locale, string>
  // [file name, English title, Polish title]
  pages: [string, string, string][]
}

const overviewTitle: Record<Locale, string> = { en: 'Chapter overview', pl: 'Przegląd rozdziału' }

const chapters: Chapter[] = [
  {
    folder: 'foundations',
    title: { en: 'Chapter 1: Foundations of UX design', pl: 'Rozdział 1: Podstawy projektowania UX' },
    navTitle: { en: 'Chapter 1: Foundations', pl: 'Rozdział 1: Podstawy' },
    pages: [
      ['01-what-is-ux', 'What is user experience?', 'Czym jest doświadczenie użytkownika?'],
      ['02-ux-roles', 'Roles and responsibilities in UX', 'Role i obowiązki w UX'],
      ['03-product-development-life-cycle', 'Product development life cycle', 'Cykl rozwoju produktu'],
      ['04-user-centered-design', 'User-centered and inclusive design', 'Projektowanie zorientowane na użytkownika i inkluzywne'],
      ['05-assistive-technology', 'Assistive technology', 'Technologie wspomagające'],
      ['06-platforms', 'Designing for different platforms', 'Projektowanie na różne platformy'],
      ['07-design-thinking', 'Design thinking framework', 'Framework design thinking'],
      ['08-empathize-and-define', 'Empathize and define', 'Empatia i definiowanie'],
      ['09-ideate', 'Ideate', 'Generowanie pomysłów'],
      ['10-prototype-and-test', 'Prototype and test', 'Prototypowanie i testowanie'],
      ['11-design-sprints', 'Design sprints', 'Sprinty projektowe'],
      ['12-ux-research', 'UX research', 'Badania UX'],
      ['13-bias-in-research', 'Bias in UX research', 'Błędy poznawcze w badaniach UX'],
      ['14-glossary', 'Glossary', 'Słowniczek']
    ]
  },
  {
    folder: 'design-process',
    title: { en: 'Chapter 2: The UX design process', pl: 'Rozdział 2: Proces projektowania UX' },
    navTitle: { en: 'Chapter 2: Design process', pl: 'Rozdział 2: Proces projektowania' },
    pages: [
      ['01-ux-portfolio', 'Building a UX portfolio', 'Tworzenie portfolio UX'],
      ['02-empathy', 'Empathy in UX', 'Empatia w UX'],
      ['03-user-interviews', 'User interviews', 'Wywiady z użytkownikami'],
      ['04-empathy-maps', 'Empathy maps', 'Mapy empatii'],
      ['05-pain-points', 'Pain points', 'Problemy użytkowników'],
      ['06-personas', 'Personas', 'Persony'],
      ['07-user-stories-and-edge-cases', 'User stories and edge cases', 'Historie użytkowników i przypadki brzegowe'],
      ['08-user-journey-maps', 'User journey maps', 'Mapy ścieżki użytkownika'],
      ['09-accessibility-in-research', 'Accessibility in research', 'Dostępność w badaniach'],
      ['10-problem-and-hypothesis-statements', 'Problem and hypothesis statements', 'Opisy problemów i hipotezy'],
      ['11-value-propositions', 'Value propositions', 'Propozycje wartości'],
      ['12-human-factors-and-psychology', 'Human factors and psychology', 'Czynniki ludzkie i psychologia'],
      ['13-ideation-and-goal-statements', 'Ideation and goal statements', 'Generowanie pomysłów i opisy celów'],
      ['14-competitive-audits', 'Competitive audits', 'Audyty konkurencji'],
      ['15-how-might-we-and-crazy-eights', 'How might we and Crazy Eights', '„Jak moglibyśmy…?” i Crazy Eights'],
      ['16-glossary', 'Glossary', 'Słowniczek']
    ]
  },
  {
    folder: 'wireframes-and-prototypes',
    title: {
      en: 'Chapter 3: Wireframes and low-fidelity prototypes',
      pl: "Rozdział 3: Wireframe'y i prototypy niskiej wierności"
    },
    navTitle: { en: 'Chapter 3: Wireframes', pl: "Rozdział 3: Wireframe'y" },
    pages: [
      ['01-from-ideas-to-prototypes', 'From ideas to prototypes', 'Od pomysłów do prototypów'],
      ['02-user-flows', 'User flows', 'Przepływy użytkownika'],
      ['03-storyboards', 'Storyboards', 'Storyboardy'],
      ['04-fidelity-and-wireframes', 'Fidelity and wireframes', "Wierność i wireframe'y"],
      ['05-information-architecture', 'Information architecture', 'Architektura informacji'],
      ['06-paper-wireframes', 'Paper wireframes', "Papierowe wireframe'y"],
      ['07-digital-wireframes', 'Digital wireframes', "Cyfrowe wireframe'y"],
      ['08-gestalt-principles', 'Gestalt principles', 'Zasady Gestalt'],
      ['09-low-fidelity-prototypes', 'Low-fidelity prototypes', 'Prototypy niskiej wierności'],
      ['10-digital-prototypes-in-figma', 'Digital prototypes in Figma', 'Prototypy cyfrowe w Figmie'],
      ['11-bias-in-design', 'Bias in design', 'Błędy poznawcze i uprzedzenia w projektowaniu'],
      ['12-deceptive-patterns', 'Deceptive patterns', 'Zwodnicze wzorce projektowe'],
      ['13-ethical-and-inclusive-design', 'Ethical and inclusive design', 'Projektowanie etyczne i inkluzywne'],
      ['14-glossary', 'Glossary', 'Słowniczek']
    ]
  }
]

function localePrefix(locale: Locale): string {
  return locale === 'pl' ? '/pl' : ''
}

function chaptersNav(locale: Locale): DefaultTheme.NavItem[] {
  return chapters.map((chapter) => ({
    text: chapter.navTitle[locale],
    link: `${localePrefix(locale)}/${chapter.folder}/`
  }))
}

// One sidebar with every chapter, so the "next page" link continues into the following chapter
function chaptersSidebar(locale: Locale): DefaultTheme.SidebarMulti {
  const prefix = localePrefix(locale)
  const items: DefaultTheme.SidebarItem[] = chapters.map((chapter) => ({
    text: chapter.title[locale],
    collapsed: false,
    items: [
      { text: overviewTitle[locale], link: `${prefix}/${chapter.folder}/` },
      ...chapter.pages.map(([file, en, pl]) => ({
        text: locale === 'pl' ? pl : en,
        link: `${prefix}/${chapter.folder}/${file}`
      }))
    ]
  }))
  return Object.fromEntries(chapters.map((chapter) => [`${prefix}/${chapter.folder}/`, items]))
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
        nav: chaptersNav('en'),
        sidebar: chaptersSidebar('en')
      }
    },
    pl: {
      label: 'Polski',
      lang: 'pl-PL',
      description: 'Poradniki i wiedza o UX dla początkujących',
      themeConfig: {
        nav: chaptersNav('pl'),
        sidebar: chaptersSidebar('pl'),
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
