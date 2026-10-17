# Rozdział 6: Responsywne strony internetowe

W [rozdziale 5](../high-fidelity-design/) powstała gotowa aplikacja mobilna: dopracowane makiety, przetestowany prototyp wysokiej wierności i studium przypadku. W tym rozdziale przenosisz ten sam projekt do internetu. Zaprojektujesz **responsywną stronę internetową** (ang. *responsive website*), czyli stronę, której układ dopasowuje się do ekranu, na którym jest wyświetlana: od szerokiego monitora po wąski ekran telefonu. Po drodze przejdziesz jeszcze raz przez każdy etap procesu projektowego, tym razem z dodatkowym wyzwaniem w postaci wielu rozmiarów ekranu. Rozdział kończy się ludzką stroną pracy projektanta: krytyką projektu, współpracą z programistami, portfolio i szukaniem pierwszej pracy.

## Czego się nauczysz

1. **Co sprawia, że strona jest responsywna** - czym responsywne aplikacje internetowe różnią się od aplikacji, które się instaluje, i dlaczego firmy potrzebują obu.
2. **Jak zaplanować strukturę strony internetowej** - cztery typowe struktury stron, mapy witryn i układy strony głównej.
3. **Jak tworzyć wireframe'y na wiele ekranów** - papierowe wireframe'y, rozplanowanie układów na papierze w kratkę, punkty przerwania i komponenty, które oszczędzają miejsce.
4. **Jak przejść do wersji cyfrowej** - cyfrowe wireframe'y, poprawki dostępności i sprawdzanie zasad Gestalt.
5. **Jak ożywić stronę internetową** - prototyp niskiej wierności, makiety na desktop i telefon oraz prototyp wysokiej wierności.
6. **Jak zadbać o dostępność stron** - wytyczne WCAG, kolejność fokusu, znaczniki nagłówków, etykiety i powiększenie.
7. **Jak współpracować z innymi** - krytyka projektu, współpraca z programistami front-endu i back-endu oraz studium przypadku do portfolio.
8. **Jak zacząć karierę** - nazwy stanowisk w UX, rodzaje pracodawców i CV projektanta.

## Przykład przewodni: WashSlot trafia do internetu

Aplikacja **WashSlot** wystartowała. Mieszkańcy budynku z 60 mieszkaniami sprawdzają i rezerwują teraz cztery pralki i dwie suszarki na telefonach, a kłótnie o to, czyja jest kolej, w większości ucichły.

Nie wszyscy jednak są przekonani. Część mieszkańców nie ma smartfona, inni mają w telefonach za mało miejsca na kolejną aplikację, a kilka osób po prostu woli większy ekran. Spółdzielnia mieszkaniowa chce też powiesić na ścianie pralni wspólny tablet, tak jak zapowiedziano w studium przypadku aplikacji. Dlatego zarząd prosi projektanta o **stronę internetową WashSlot**, która działa w każdej przeglądarce i na każdym urządzeniu.

Strona musi robić wszystko to, co aplikacja (pokazywać stan pralek na żywo, umożliwiać rezerwację terminu i zarządzanie rezerwacjami), a do tego kilka rzeczy, które lepiej pasują do strony internetowej: regulamin domu, przewodnik po urządzeniach, ogłoszenia spółdzielni i stronę do zgłaszania problemów.

Persony z wcześniejszych rozdziałów wciąż pomagają przy każdej decyzji:

- **Tomasz, 41 lat** - samotny ojciec, który pracuje z domu i chce teraz rezerwować pralki na laptopie między rozmowami wideo.
- **Grace, 74 lata** - bibliotekarka na emeryturze z aparatem słuchowym, która korzysta z dużego tekstu i czyta na tablecie; nigdy nie zainstalowała aplikacji.
- **Kofi, 23 lata** - student, który pracuje na wieczorne zmiany i wciąż uczy się miejscowego języka; jego stary telefon jest prawie pełny, więc woli korzystać ze strony internetowej niż instalować kolejną aplikację.

## Strony w tym rozdziale

| Strona | Temat |
| --- | --- |
| [Responsywne strony internetowe](./01-responsive-websites) | Czym jest responsywne projektowanie oraz aplikacje internetowe a dedykowane aplikacje |
| [Struktury stron internetowych](./02-website-structures) | Modele hierarchiczny, sekwencyjny, macierzowy i bazodanowy |
| [Mapy witryn dla stron internetowych](./03-sitemaps-for-websites) | Planowanie stron witryny krok po kroku |
| [Układy strony głównej](./04-homepage-layouts) | Typowe układy i wzorce śledzenia wzroku |
| [Papierowe wireframe'y stron internetowych](./05-paper-wireframes-for-websites) | Szkicowanie, porównywanie i łączenie pomysłów na stronę główną |
| [Układy responsywne i punkty przerwania](./06-responsive-layouts-and-breakpoints) | Rozplanowanie układów na desktop, tablet i telefon |
| [Komponenty na małe ekrany](./07-components-for-small-screens) | Menu „hamburger” i menu wysuwane, karty, karuzele i wezwania do działania |
| [Cyfrowe wireframe'y stron internetowych](./08-digital-wireframes-for-websites) | Tworzenie wireframe'ów na desktop i telefon w Figmie |
| [Dopracowywanie wireframe'ów](./09-refining-wireframes) | Nagłówki, punkty orientacyjne, fokus początkowy i sprawdzanie zasad Gestalt |
| [Prototyp strony niskiej wierności](./10-low-fidelity-website-prototype) | Łączenie wireframe'ów w przepływ, który można przetestować |
| [Makiety strony internetowej](./11-website-mockups) | Makiety na desktop i telefon, style i systemy projektowe |
| [Prototyp strony wysokiej wierności](./12-high-fidelity-website-prototype) | Dodawanie interaktywności do makiet na każdym rozmiarze ekranu |
| [Dostępność stron internetowych](./13-web-accessibility) | Wytyczne WCAG, adnotacje, znaczniki nagłówków, etykiety i powiększenie |
| [Krytyka projektu](./14-design-critiques) | Dawanie i przyjmowanie informacji zwrotnej oraz zamienianie jej w działania |
| [Programiści i studium przypadku](./15-developers-and-case-study) | Programiści front-endu i back-endu oraz drugi projekt do portfolio |
| [Praca w UX i CV](./16-ux-jobs-and-resumes) | Nazwy stanowisk, ścieżki kariery, pracodawcy i projektowanie CV |
| [Słowniczek](./17-glossary) | Najważniejsze pojęcia z tego rozdziału |

::: tip Jak korzystać z tego rozdziału
Wybierz aplikację zaprojektowaną we wcześniejszych rozdziałach i podczas lektury tego rozdziału projektuj jej stronę internetową. Miej otwarte okno przeglądarki i zmieniaj jego rozmiar w trakcie czytania: obserwowanie, jak prawdziwe strony same się przestawiają, to najszybszy sposób, żeby zrozumieć responsywne projektowanie.
:::
