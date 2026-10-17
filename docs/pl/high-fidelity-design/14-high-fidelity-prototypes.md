# Prototypy wysokiej wierności

## Od makiet do działającego modelu

**Prototyp** (ang. *prototype*) to działający podgląd produktu, przygotowany, zanim powstanie prawdziwa wersja. W rozdziale 3 powstał **prototyp niskiej wierności** (ang. *low-fidelity prototype*): interaktywny, ale z prostymi treściami zastępczymi. **Prototyp wysokiej wierności** (ang. *high-fidelity prototype*) to szczegółowy, interaktywny model, który wygląda i działa prawie dokładnie tak jak gotowy produkt. Krótko mówiąc, to twoje makiety, które ożyły.

Makiety skupiają się na tym, jak produkt **wygląda**, a prototypy na tym, jak **działa**. Prototyp wysokiej wierności testujesz z użytkownikami i pokazujesz interesariuszom do zatwierdzenia, więc powinien sprawiać jak najbardziej realne wrażenie.

## Czego potrzebuje prototyp wysokiej wierności

### Ostateczne elementy wizualne

Na każdym ekranie powinny być prawdziwe treści: docelowy tekst, obrazy, ikony, ilustracje i linki. Najlepiej współpracuj z autorami tekstów i innymi osobami z zespołu, żeby zdobyć realistyczne treści. Jeśli coś nie jest jeszcze gotowe, użyj realistycznych treści zastępczych, na przykład wiarygodnych imion i dat, a nie „Imię 1” albo linii.

### Nawigacja

Użytkownicy muszą móc przejść przez główny przepływ, który chcesz przetestować, często nazywany **kluczową ścieżką użytkownika** (ang. *critical user journey*). Sprawdź, czy każdy ekran ma przyciski i ikony potrzebne, żeby przejść dalej i wrócić. Zadaj sobie pytania: **Czy użytkownicy zawsze wiedzą, jak dotrzeć do następnego ekranu? Czy strzałki wstecz i ikony zamykania łatwo zauważyć? Czy jasne jest, gdzie ścieżka się kończy?**

### Interaktywność

**Interaktywność** (ang. *interactivity*) sprawia, że prototyp działa: to połączenia między ekranami i sposób, w jaki prototyp reaguje na stuknięcia, przesunięcia palcem i inne działania. W Figmie dodajesz interaktywność, **tworząc połączenia**. Jak wiesz z rozdziału 3, połączenie składa się z trzech części:

1. **Obszar aktywny** (ang. *hotspot*) - element, od którego zaczyna się interakcja, na przykład przycisk, ikona albo karta.
2. **Połączenie** (ang. *connection*) - strzałka (czasem nazywana „makaronem”, ang. *noodle*), która łączy obszar aktywny z celem. Tworzysz ją, przeciągając **węzeł połączenia** (ang. *connection node*), czyli małe kółko z plusem, które pojawia się na krawędzi zaznaczonego elementu.
3. **Cel** (ang. *destination*) - ramka albo nakładka, która się otwiera. Połączenie zawsze kończy się na ramce, a nie na pojedynczym elemencie wewnątrz ramki.

## Sześć kroków do prototypu wysokiej wierności w Figmie

1. **Rozmieść makiety** - utwórz stronę „Prototyp” i skopiuj na nią swoje ostateczne makiety. Ułóż ramki w kolejności przepływu użytkownika, od lewej do prawej.
2. **Połącz ekrany** - przełącz się na kartę **Prototype** w prawym panelu. Zaznacz obszar aktywny i przeciągnij jego węzeł połączenia do ramki docelowej. Pierwsze połączenie, które utworzysz, ustawia **ramkę startową** (ang. *starting frame*) prototypu, więc zacznij od pierwszego działania, które mają wykonać użytkownicy.
3. **Dodaj szczegóły interakcji** - dla każdego połączenia ustaw **wyzwalacz**, **akcję** i **cel** (zobacz niżej).
4. **Dopasuj animację** - wybierz, jak jeden ekran zmienia się w następny, i ustaw szybkość. Więcej dowiesz się o tym na stronie [Gesty, ruch i dźwięk](./15-gestures-motion-and-sound).
5. **Dokończ wszystkie ekrany** - powtarzaj te kroki, aż każdy ekran w przepływie będzie połączony, łącznie z drogami powrotu i możliwością anulowania.
6. **Udostępnij swoją pracę** - najpierw samodzielnie przetestuj prototyp, a potem udostępnij go osobom z zespołu, interesariuszom i uczestnikom badania.

## Wyzwalacze, akcje i miejsca docelowe

Kiedy tworzysz połączenie, Figma otwiera panel **szczegółów interakcji** (ang. *interaction details*). Ma on trzy główne ustawienia:

- **Wyzwalacz** (ang. *trigger*) - to, co robi użytkownik, żeby rozpocząć interakcję. Przykłady to **On tap** (nazywany też on click), **On drag**, **While hovering**, **While pressing**, **Key/Gamepad** i **After delay**, który automatycznie uruchamia interakcję po określonym czasie.
- **Akcja** (ang. *action*) - to, co dzieje się w efekcie. **Navigate to** otwiera inną ramkę i jest najczęściej używaną akcją. Inne to **Back** (powrót do poprzedniego ekranu), **Open overlay** (pokazanie czegoś nad bieżącym ekranem, na przykład menu albo okna dialogowego), **Swap overlay**, **Close overlay**, **Scroll to** i **Open link**.
- **Cel** (ang. *destination*) - ramka albo nakładka, która się pojawia.

Akcja **Back** jest szczególnie przydatna: jeśli użytkownicy mogą dotrzeć do ekranu z kilku miejsc, jedno połączenie „Back” przenosi ich tam, skąd przyszli.

*Przykład z WashSlot:* projektant łączy ekrany WashSlot w taki sposób:

| Obszar aktywny | Wyzwalacz | Akcja | Cel | Animacja |
| --- | --- | --- | --- | --- |
| Przycisk „Zarezerwuj termin” na ekranie głównym | On tap | Navigate to | 02 Rezerwacja | Push, z prawej |
| Wolny termin | On tap | Navigate to | 03 Podsumowanie | Push, z prawej |
| Strzałka wstecz na ekranie podsumowania | On tap | Back | Poprzedni ekran | Push, w prawo |
| Przycisk „Potwierdź rezerwację” | On tap | Navigate to | 04 Potwierdzenie | Dissolve |
| Ikona „Informacje o pralce” na karcie | On tap | Open overlay | Panel informacji o pralce | Move in, od dołu |
| Przycisk „Gotowe” na ekranie potwierdzenia | On tap | Navigate to | 05 Moje rezerwacje | Instant |

## Testowanie i udostępnianie prototypu

Żeby przetestować prototyp, kliknij przycisk **Present** (ikona odtwarzania) w prawym górnym rogu Figmy. Prototyp otworzy się w nowej karcie przeglądarki, w ramce urządzenia, jeśli twoje ramki mają rozmiar urządzenia. Przeklikaj cały przepływ tak, jak zrobiłby to użytkownik. Gdy dodasz co najmniej jedno połączenie, **tryb prezentacji** (ang. *presentation view*) pokazuje tylko ramki, które są częścią połączonego przepływu.

Żeby udostępnić prototyp, kliknij **Share** i zaproś osoby przez e-mail albo skopiuj link i ustaw jego dostęp, na przykład „Anyone with the link can view” (każdy, kto ma link, może wyświetlać). Osoby z dostępem do wyświetlania mogą otworzyć prototyp, przeklikać go i zostawić **komentarze** (ang. *comments*) bezpośrednio na ekranach. Dzięki komentarzom wszystkie opinie są w jednym miejscu, a każdy z nich możesz oznaczyć jako rozwiązany, kiedy już się nim zajmiesz. Podczas zdalnego badania użyteczności możesz nawet śledzić ruchy uczestnika w prototypie.

## Lista kontrolna prototypu

Przed testami sprawdź, czy twój prototyp ma co najmniej cztery połączone ekrany w realistycznym przepływie, pozwala użytkownikom przechodzić dalej i wracać, da się do niego wejść z więcej niż jednego punktu startowego, ma wyraźne wskazówki nawigacyjne, używa krótkich i płynnych animacji, wyraźnie pokazuje, że zadanie zakończyło się sukcesem, i pozwala użytkownikom wrócić do ekranu startowego po wykonaniu zadania.

*Przykład z WashSlot:* prototyp WashSlot obejmuje cały przepływ rezerwacji i można do niego wejść także z ekranu „Moje rezerwacje”, gdzie mieszkańcy mogą otworzyć istniejącą rezerwację. Po potwierdzeniu mieszkańcy widzą komunikat potwierdzający i jednym stuknięciem mogą wrócić na ekran główny.

::: tip Najważniejsze
Prototyp wysokiej wierności zamienia makiety w realistyczny, interaktywny model. Potrzebuje ostatecznych elementów wizualnych, kompletnej nawigacji i interaktywności. W Figmie rozmieść makiety, połącz ekrany, ustaw wyzwalacze, akcje i cele, dopasuj animacje, połącz wszystkie ekrany, a potem przetestuj i udostępnij swoją pracę.
:::
