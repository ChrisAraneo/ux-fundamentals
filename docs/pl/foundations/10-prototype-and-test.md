# Prototypowanie i testowanie

Ta strona omawia dwie ostatnie fazy design thinking (myślenia projektowego). W fazie **prototypowania** (ang. *prototype*) budujesz wczesne modele swojego rozwiązania. W fazie **testowania** (ang. *test*) sprawdzasz je z użytkownikami. Te dwie fazy są ze sobą ściśle powiązane i zwykle powtarzają się w cyklach.

## Faza 4: Prototypowanie

Celem prototypowania **nie** jest zbudowanie gotowego produktu. **Prototyp** (ang. *prototype*) to wczesny model, który pokazuje, jak rozwiązanie będzie wyglądać i działać. Dzięki niemu możesz przetestować je z użytkownikami i pokazać interesariuszom. Projektanci korzystają z kilku narzędzi, żeby przejść od pomysłu do prototypu.

### Architektura informacji i mapy witryny

**Architektura informacji (IA)** (ang. *information architecture*) to sposób, w jaki informacje w produkcie są uporządkowane, pogrupowane i ustrukturyzowane, tak aby użytkownicy łatwo się w nim odnajdywali. Planując IA, projektanci często rysują **mapę witryny** (ang. *sitemap*), czyli diagram, który pokazuje strony produktu i połączenia między nimi.

Dobra mapa witryny pokazuje dwie rzeczy:

- **Hierarchię** (ang. *hierarchy*) - które tematy są główne, a które są ich podtematami. Na przykład „Katalog” to główna sekcja, która zawiera mniejsze sekcje, takie jak „Kryminały” i „Książki dla dzieci”.
- **Sekwencję** (ang. *sequence*) - kolejność, w jakiej użytkownicy poruszają się po hierarchii, na przykład od „Strony głównej” przez „Katalog” i „Kryminały” do konkretnej książki.

*Przykład z biblioteką:* badania pokazały, że większość czytelników chce jednego: szybko zarezerwować książkę. Dlatego projektant umieszcza duże pole wyszukiwania i ścieżkę „Zarezerwuj książkę” od razu na stronie głównej. Mapa witryny wygląda tak:

```
Strona główna
├── Katalog
│   └── Szczegóły książki
│       └── Rezerwacja i wybór miejsca odbioru (wypożyczalnia lub książkomat)
├── Moje konto
│   ├── Moje rezerwacje
│   └── Kody odbioru
└── Odwiedź nas
    ├── Godziny otwarcia
    └── Jak działa książkomat 24/7
```

### Wireframe'y

**Wireframe'y** (ang. *wireframes*) to proste szkice ekranów, które ożywiają mapę witryny. Pokazują układ każdej strony, miejsce poszczególnych elementów i sposób, w jaki użytkownicy przechodzą z jednej strony na drugą. Wireframe'y są celowo bardzo proste: to głównie prostokąty, linie i trochę tekstu.

Są dwa rodzaje wireframe'ów:

1. **Papierowe wireframe'y** - szybkie szkice na papierze. Poziome linie oznaczają tekst, prostokąty z „X” oznaczają obrazy, a proste kształty oznaczają przyciski. Są tanie i szybkie, więc możesz wypróbować wiele wersji.
2. **Cyfrowe wireframe'y** - wireframe'y zrobione w narzędziu projektowym, takim jak Figma czy Penpot. Wykorzystują odcienie szarości, proste kształty i tekst zastępczy, żeby dokładniej pokazać strukturę ekranu.

### Wierność

W UX **wierność** (ang. *fidelity*) opisuje, jak bardzo projekt przypomina gotowy produkt. Prototypy zwykle dzieli się na prototypy niskiej i wysokiej wierności.

### Prototypy niskiej wierności

**Prototyp niskiej wierności (lo-fi)** (ang. *low-fidelity prototype*) to prosty, interaktywny model, który daje ogólne wyobrażenie o tym, jak produkt będzie wyglądał i jak użytkownicy będą się po nim poruszać. Projektanci często tworzą go, łącząc swoje wireframe'y tak, aby kliknięcie przycisku otwierało kolejny ekran. Prototypy lo-fi pozwalają testować pomysły wcześnie, zanim poświęcisz czas na szczegóły.

### Prototypy wysokiej wierności

**Prototyp wysokiej wierności (hi-fi)** (ang. *high-fidelity prototype*) wygląda i działa możliwie podobnie do gotowego produktu. Zawiera prawdziwe kolory, typografię, obrazy, treści i interakcje, choć część treści może nadal być realistycznym wypełnieniem. Prototyp hi-fi nie jest gotowym produktem, ale pozwala testerom i interesariuszom doświadczyć produktu prawie tak, jakby był prawdziwy. Dzięki temu można zebrać bogatsze opinie.

### Wracaj do wcześniejszej pracy podczas prototypowania

Podczas prototypowania regularnie wracaj do tego, co udało się ustalić wcześniej. Zastanów się, czy układ, przepływ i wygląd prototypu rozwiązują problemy opisane w fazie definiowania. *Przykład z biblioteką:* czy Leo może zarezerwować książkę na telefonie podczas krótkiej przerwy? Czy Irena może wygodnie przeczytać każdy ekran przy dużym rozmiarze tekstu i nadal czuć osobistą więź z biblioteką?

## Faza 5: Testowanie

Testowanie pokazuje, jak prawdziwi ludzie **myślą, czują i zachowują się**, kiedy korzystają z twojego projektu. Testowanie zwykle przeplata się z prototypowaniem w cyklach: testujesz szkic, poprawiasz go, testujesz prototyp lo-fi, znowu go poprawiasz, a potem testujesz prototyp hi-fi. Nie czekaj, aż prototyp będzie idealny, bo ludzie szczerzej oceniają projekty, które wyglądają na niedokończone.

### Zaplanuj testy

Dobre testowanie zaczyna się od planu. Prosty sposób na jego przygotowanie to odpowiedź na sześć pytań:

1. **Kto weźmie udział?** - na początku wystarczą znajomi, współpracownicy lub inni nieformalni testerzy. Później warto testować z prawdziwymi osobami, które pasują do twoich person.
2. **Jakie testy przeprowadzisz?** - na przykład **badanie użyteczności** (ang. *usability study*), w którym uczestnicy próbują wykonać konkretne zadania.
3. **Kiedy i gdzie odbędą się testy?** - na żywo lub online, w laboratorium, w biurze albo w otoczeniu użytkownika. Wybierz to, co pasuje zarówno do twoich potrzeb, jak i do wymagań biznesowych.
4. **Po co testujesz?** - dwa najczęstsze powody to **potwierdzenie decyzji** podjętych we wcześniejszych fazach oraz **znalezienie problemów z użytecznością** (punktów bólu, ang. *pain points*), które przeszkadzają użytkownikom w osiągnięciu celów.
5. **Jak uczestnicy będą korzystać z prototypu?** - zadbaj o to, żeby sam test był inkluzywny i dostępny, także dla osób korzystających z technologii wspomagających.
6. **Jak zbierzesz informacje?** - na przykład obserwując uczestników, przeprowadzając z nimi wywiad po teście albo zbierając dane z samego prototypu.

*Przykład z biblioteką:* projektant testuje prototyp lo-fi z pięcioma czytelnikami, wśród których są dwie osoby pracujące na zmiany i jedna osoba na emeryturze, która korzysta z dużego rozmiaru tekstu. Prawie wszyscy przeoczają kod odbioru, bo jest wyświetlany małym tekstem na dole potwierdzenia. Projektant przenosi kod na górę i znacznie go powiększa, a potem testuje ponownie z prototypem hi-fi.

### Od prototypu do produktu

Kiedy testy pokazują, że projekt jest łatwy w użyciu i rozwiązuje zdefiniowany problem, prototyp zostaje dopracowany i przekazany **programistom** (ang. *developers*), którzy budują prawdziwy produkt.

::: tip Najważniejsze
Prototypowanie zamienia pomysły w modele, które można przetestować: od architektury informacji i map witryny, przez wireframe'y, aż po prototypy niskiej i wysokiej wierności. Testy z prawdziwymi użytkownikami, oparte na jasnym planie, pokazują, co warto poprawić. Powtarzaj obie fazy, aż projekt rozwiąże problem użytkowników.
:::
