# Prototyp strony wysokiej wierności

## Czego potrzebuje prototyp wysokiej wierności

**Prototyp wysokiej wierności** (ang. *high-fidelity prototype*) zamienia twoje makiety w coś, z czego ludzie mogą korzystać. Makiety skupiają się na tym, jak strona wygląda, a prototyp na tym, jak działa. Jak wiesz z [rozdziału 5](../high-fidelity-design/14-high-fidelity-prototypes), potrzebuje on trzech rzeczy:

1. **Ostateczne elementy wizualne** - zatwierdzony tekst, obrazy, ikony, ilustracje i linki. W praktyce część treści może nie być jeszcze gotowa. W miejscach, które ludzie będą czytać podczas testu, użyj wtedy realistycznych treści zastępczych, na przykład wiarygodnych imion i cen, a nie „Imię 1” albo lorem ipsum.
2. **Nawigacja** - przyciski, linki i ikony, które przenoszą użytkowników między podstronami, łącznie z linkami powrotu i przyciskami zamykania. Zadaj sobie pytania: jak użytkownicy przechodzą z jednej podstrony na następną, jak łatwo znaleźć drogę powrotną i gdzie kończy się ścieżka?
3. **Interaktywność** - połączenia, interakcje i animacje, dzięki którym prototyp reaguje na kliknięcia, stuknięcia i gesty.

## Budowanie prototypu w Figmie

Sześć kroków z rozdziału 5 sprawdza się także przy stronach internetowych:

1. **Rozmieść makiety** - utwórz stronę „Prototyp” w tym samym pliku co wireframe'y i makiety, skopiuj na nią makiety i ułóż je w kolejności przepływu użytkownika.
2. **Połącz ekrany** - na karcie **Prototype** zaznacz **obszar aktywny** (ang. *hotspot*), czyli element, z którym użytkownicy wchodzą w interakcję, i przeciągnij niebieski węzeł z plusem na ramkę będącą **celem** (ang. *destination*). Połączenie musi kończyć się na ramce, a nie na elemencie wewnątrz ramki. Pierwsze połączenie, które utworzysz, ustawia ramkę startową, więc zacznij od pierwszego kroku przepływu.
3. **Dodaj szczegóły interakcji** - dla każdego połączenia ustaw wyzwalacz (na przykład **On click**), akcję (na przykład **Navigate to** albo **Open overlay**) i cel.
4. **Dopasuj animację** - wybierz, jak jedna podstrona zmienia się w następną i jak szybko.
5. **Dokończ wszystkie ekrany** - połącz każdą podstronę w przepływie, łącznie z drogami powrotu i wyjścia.
6. **Udostępnij swoją pracę** - najpierw samodzielnie przetestuj prototyp, a potem udostępnij go osobom z zespołu, interesariuszom i uczestnikom badania.

## Co się zmienia przy responsywnej stronie internetowej?

### Jeden przepływ na każdy rozmiar ekranu

Zbuduj osobny przepływ dla każdego rozmiaru ekranu, który chcesz przetestować, na przykład „Desktop: rezerwacja terminu” i „Telefon: rezerwacja terminu”. W Figmie każdy przepływ ma własny punkt startowy, więc możesz udostępnić link dokładnie do tej wersji, którą ludzie mają wypróbować. Testuj każdą wersję na urządzeniu, dla którego jest przeznaczona: przepływ desktopowy otwórz na komputerze, a przepływ telefoniczny na prawdziwym telefonie, na przykład w aplikacji mobilnej Figmy.

### Menu jako nakładki

W układzie na telefon menu wysuwane nie powinno być osobną podstroną. Połącz ikonę menu „hamburger” z ramką menu wysuwanego za pomocą akcji **Open overlay**, ustaw nakładkę przy lewej krawędzi i dodaj animację „Move in” z lewej strony. Przycisk zamykania połącz za pomocą **Close overlay** i włącz opcję zamykania nakładki, kiedy użytkownicy klikną poza nią. Ta sama technika sprawdza się przy wyskakującym polu wyszukiwania albo oknie potwierdzenia.

### Najechanie kursorem i przewijanie

Osoby odwiedzające stronę na komputerze używają myszy, więc użyj wyzwalacza **While hovering**, żeby pokazać stany najechania na linkach i przyciskach. Najlepiej zrób to za pomocą interaktywnych komponentów, które zawierają te stany. Długie podstrony powinny przewijać się naturalnie wewnątrz ramki. Jeśli nagłówek strony ma zostać na miejscu, kiedy podstrona się przewija, ustaw w Figmie jego zachowanie przy przewijaniu na **Fixed** (albo **Sticky**).

### Gesty tam, gdzie pomagają

Wersje na telefon mogą reagować na gesty, na przykład przesuwanie palcem po karuzeli. Tak jak w aplikacji, gest powinien być skrótem, a nigdy jedynym sposobem na wykonanie czegoś, więc zawsze dodaj też widoczny przycisk.

*Przykład z WashSlot:* projektant buduje z tych samych makiet dwa przepływy: „Desktop: rezerwacja terminu” i „Telefon: rezerwacja terminu”. W przepływie na telefon ikona menu „hamburger” otwiera menu wysuwane jako nakładkę, która wsuwa się z lewej strony w 200 milisekund. Zamyka ją zarówno przycisk zamykania, jak i kliknięcie przyciemnionej strony za nią. Na komputerze każdy link i przycisk ma stan najechania, a nagłówek strony pozostaje na miejscu, kiedy przewija się długa podstrona „Regulamin domu”. Treści są prawdziwe: rzeczywiste nazwy urządzeń, realistyczne godziny i trzy najnowsze ogłoszenia z prawdziwej tablicy ogłoszeń spółdzielni, więc testerzy reagują na stronę, a nie na treści zastępcze. Potem projektant sprawdza przepływ na telefon na starym telefonie Kofiego, a przepływ desktopowy na laptopie Tomasza. Dodaje też trzeci przepływ dla układu na tablet, żeby wypróbować go na tablecie w pralni, który wisi w uchwycie na ścianie.

::: tip Najważniejsze
Prototyp wysokiej wierności potrzebuje ostatecznych elementów wizualnych, kompletnej nawigacji i interaktywności. W przypadku responsywnej strony internetowej zbuduj osobny przepływ dla każdego rozmiaru ekranu, otwieraj menu i okna wyskakujące jako nakładki, dodaj stany najechania i stały nagłówek strony w wersji desktopowej, a gesty traktuj jako opcjonalne skróty. Testuj każdy przepływ na urządzeniu, dla którego został zaprojektowany.
:::
