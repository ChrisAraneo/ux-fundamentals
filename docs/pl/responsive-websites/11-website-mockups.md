# Makiety strony internetowej

## Od wireframe'ów do makiet

**Makieta** (ang. *mockup*) to szczegółowy obraz projektu, który się nie porusza i nie reaguje na działania użytkownika; pokazuje dokładnie, jak będzie wyglądał gotowy produkt. Wireframe'y pokazują strukturę, a makiety dodają warstwę wizualną: typografię, kolor, ikony, obrazy i prawdziwe treści. Makiet nie da się klikać, więc łatwo je zmieniać. Dzięki temu możesz wypróbować kilka kierunków wizualnych i zbierać informacje zwrotne między kolejnymi rundami.

Zamiana wireframe'u w makietę nie przypomina malowania według numerów. Rzeczy, których nie było widać w odcieniach szarości, często stają się oczywiste, kiedy pojawią się prawdziwe kolory i obrazy. Możesz bez obaw przesunąć obraz, zmienić sekcję albo wypróbować nowy układ. Wireframe jest wskazówką, a nie zasadą.

## Krótkie przypomnienie o projektowaniu wizualnym

Wszystko, co wiesz z [rozdziału 5](../high-fidelity-design/), dotyczy także stron internetowych:

- **Podstawowe elementy** - [typografia](../high-fidelity-design/02-typography), [kolor](../high-fidelity-design/03-color) oraz [ikony i obrazy](../high-fidelity-design/05-icons-and-images).
- **Rozmieszczanie elementów** - [siatki układu](../high-fidelity-design/07-layout-grids) oraz [wydzielanie treści i przestrzeń negatywna](../high-fidelity-design/08-containment-and-negative-space), czyli separatory, obramowania, wypełnienia, cienie i wolna przestrzeń, która pozwala treści oddychać.
- **Zasady projektowania wizualnego** - [wyróżnienie, hierarchia, jedność, różnorodność, skala i proporcja](../high-fidelity-design/10-visual-design-principles), a także [więcej zasad Gestalt](../high-fidelity-design/11-more-gestalt-principles).

## Systemy projektowe i arkusze naklejek

**System projektowy** (ang. *design system*) to zbiór elementów wielokrotnego użytku i wytycznych, dzięki któremu zespół może projektować i budować produkt według wspólnych standardów. Większość systemów projektowych zawiera **style wizualne** (palety kolorów, typografię, ikony), **wytyczne** dotyczące ich używania, **komponenty interfejsu**, takie jak przyciski i okna dialogowe, oraz **kod** dla programistów. Systemy projektowe utrzymują spójność produktu, wzmacniają markę, pomagają produktowi się rozwijać i oszczędzają czas. Wyzwanie polega na tym, że duże systemy mogą przytłaczać, więc nauczenie się poruszania po nich wymaga czasu.

W projekcie do portfolio nie potrzebujesz dużego systemu. **Arkusz naklejek** (ang. *sticker sheet*), czyli ramka z twoimi kolorami, stylami tekstu i komponentami gotowymi do skopiowania, działa jak twój własny mały system projektowy. Możesz też zacząć od istniejącego systemu projektowego albo od **zestawu UI** (ang. *UI kit*), czyli gotowej kolekcji komponentów i stylów dla narzędzia projektowego. Więcej szczegółów znajdziesz na stronach [Systemy projektowe](../high-fidelity-design/12-design-systems) i [Arkusze naklejek i komponenty](../high-fidelity-design/13-sticker-sheets-and-components).

## Tworzenie makiet desktopowych

1. **Otwórz plik z wireframe'ami** - trzymaj wireframe'y w pobliżu jako punkt odniesienia.
2. **Utwórz ramkę desktopową** - użyj tej samej szerokości 1440 px co w wireframe'ach. Strony są zwykle dłuższe niż jeden ekran, więc przeciągnij dolną krawędź ramki w dół, aż zmieści się cała treść. Inne popularne rozmiary ekranów komputerowych to 1920 × 1080, 1536 × 864, 1366 × 768 i 1280 × 800 px; sprawdź, czy na niższych ekranach najważniejsza treść nadal jest nad linią zgięcia.
3. **Zduplikuj albo zacznij od nowa** - niektórzy projektanci duplikują wireframe i zastępują każdy element zastępczy, a inni budują makietę od zera obok niego. Oba sposoby są dobre.
4. **Umieść główne elementy** - dodaj pasek nawigacji, ramki tekstowe i przyciski, zwykle od góry do dołu. Używaj narzędzi do rysowania kształtów i ustawiaj kolory za pomocą wartości hex ze swojej palety.
5. **Dodaj obrazy i logo** - narysuj prostokąt albo elipsę o rozmiarze obrazu, a potem przeciągnij do niego plik obrazu, a obraz wypełni kształt. Używaj własnych zdjęć, obrazów, na których użycie masz zgodę, albo darmowych zdjęć stockowych. Na górze strony głównej często znajduje się duży **obraz główny** (ang. *hero image*).
6. **Dodaj tekst** - używaj ograniczonej liczby fontów i wyraźnej hierarchii typograficznej. Teksty na stronę często piszą inne osoby, więc lorem ipsum nadal może zastępować długą treść główną, która nie wpływa na nawigację.
7. **Zapisz style i komponenty** - każdy kolor, styl tekstu i efekt, którego używasz więcej niż raz, zapisz jako **styl** (ang. *style*), a każdy element wielokrotnego użytku, taki jak przycisk albo karta, jako **komponent** (ang. *component*). Kopie komponentu, nazywane **instancjami** (ang. *instances*), aktualizują się automatycznie, kiedy zmieniasz komponent główny.
8. **Dokończ podstronę i powtórz** - uzupełnij treść pod linią zgięcia, a potem utwórz makiety pozostałych podstron, wykorzystując zapisane style i komponenty.

## Tworzenie makiet mobilnych

Większość problemów z układem masz już rozwiązaną w wireframe'ach na telefon, więc makiety mobilne powstają szybciej.

1. **Skopiuj makiety desktopowe** - wklej je na tę samą stronę albo do nowego pliku i nazwij je jasno, na przykład „Makiety / Telefon”.
2. **Utwórz ramki telefonu** - wybierz gotowy rozmiar telefonu i w kwestii układu kieruj się swoimi wireframe'ami na telefon.
3. **Zdecyduj, co zostaje** - zachowaj wszystko, co niezbędne, usuń to, co się nie mieści, i nastaw się na to, że niektóre rzeczy poprawisz po drodze.
4. **Dostosuj nawigację** - dodaj menu „hamburger” i zbuduj menu wysuwane jako osobną ramkę z panelem w tle, pozycjami nawigacji, logo i przyciskiem zamykania. W ten sam sposób zbuduj inne elementy pojawiające się na żądanie, takie jak wyskakujące pole wyszukiwania.
5. **Zmień rozmiar dużych elementów** - zmniejsz obraz główny i **zestawy obrazu i tekstu** (ang. *lockups*), czyli grupy obrazu i tekstu działające jako jedna całość, na przykład zdjęcie produktu z jego nazwą i ceną.
6. **Przebuduj stopkę** - ułóż jej kolumny jedna pod drugą i na nowo wyrównaj treść do wąskiego ekranu.
7. **Zapisz nowe style i komponenty** - na przykład zapisz menu wysuwane jako komponent w panelu **Assets**.

## Szczegóły typowe dla stron internetowych

Strony internetowe mają kilka stanów, których nie mają aplikacje na telefon. Zaprojektuj je w swoich makietach:

- **Stany najechania** (ang. *hover states*) - na komputerze linki i przyciski powinny wyraźnie się zmieniać, kiedy znajduje się nad nimi kursor myszy.
- **Stany fokusu** (ang. *focus states*) - osoby korzystające z klawiatury potrzebują wyraźnie widocznego obrysu wokół elementu, który właśnie ma fokus.
- **Aktywna strona** (ang. *active page*) - nawigacja powinna pokazywać, w której sekcji jest użytkownik, na przykład za pomocą podkreślenia.
- **Szerokie ekrany** - zdecyduj, co się dzieje na monitorach szerszych niż twoja ramka: zwykle treść przestaje się poszerzać po osiągnięciu maksymalnej szerokości i pozostaje wyśrodkowana.

*Przykład z WashSlot:* projektant wykorzystuje arkusz naklejek z aplikacji: font Atkinson Hyperlegible dla całego tekstu, paletę ze złamaną bielą, bladym morskim i głębokim morskim, trzy etykiety stanu z ikonami i kartę pralki. Do arkusza dochodzą nowe komponenty internetowe: nagłówek strony z nawigacją, stopka, karta ogłoszenia i menu wysuwane. Każdy link i przycisk dostaje cztery stany: domyślny, najechania, fokusu i wciśnięty. Głęboki morski obrys fokusu ma grubość 3 px, więc pozostaje widoczny na bladych morskich kartach. Na komputerze treść przestaje się poszerzać przy 1280 px i na szerszych ekranach pozostaje wyśrodkowana, dzięki czemu karty pralek nie rozciągają się w cienkie paski na dużym monitorze Tomasza.

::: tip Najważniejsze
Makiety dodają do wireframe'ów warstwę wizualną, a wireframe jest wskazówką, a nie zasadą. Korzystaj ze swoich umiejętności projektowania wizualnego, arkusza naklejek albo systemu projektowego oraz zapisanych stylów i komponentów, żeby podstrony były spójne. Najpierw zbuduj makiety desktopowe, a potem dostosuj je do telefonów: dodaj menu „hamburger” i menu wysuwane, zmniejsz obrazy główne i zestawy obrazu i tekstu oraz ułóż kolumny stopki jedna pod drugą. Nie zapomnij o stanach typowych dla stron internetowych, takich jak stan najechania i stan fokusu.
:::
