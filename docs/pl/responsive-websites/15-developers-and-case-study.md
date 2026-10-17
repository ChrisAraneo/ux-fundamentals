# Programiści i studium przypadku

## Kto buduje stronę internetową?

Kiedy twój projekt jest gotowy, programiści (nazywani też inżynierami) zamieniają go w działający kod. Przekazujesz makiety, prototyp, specyfikacje i adnotacje, a potem zaczyna się programowanie. Ogólny przebieg tego procesu omówiliśmy na stronie [Przekazanie projektu i studium przypadku](../high-fidelity-design/17-handoff-and-case-study). Zespoły, które tworzą strony internetowe, zwykle mają dwa rodzaje programistów:

- **Programiści front-endu** (ang. *front-end developers*) - na podstawie specyfikacji projektanta piszą kod wszystkiego, co użytkownicy widzą w przeglądarce i z czym wchodzą w interakcję. Często nazywa się ich po prostu web developerami. Układy, punkty przerwania, stany najechania i fokusu oraz animacje to ich terytorium.
- **Programiści back-endu** (ang. *back-end developers*) - na podstawie mapy witryny i wymaganych funkcji piszą kod, który działa za kulisami: architekturę strony i sposób zapisywania i pobierania danych. Użytkownicy rzadko widzą ich pracę, ale ją odczuwają: strona, która szybko się ładuje, to często efekt dobrej pracy back-endu.

Będziesz współpracować z jednymi i drugimi. Programiści front-endu będą pytać o odstępy, stany i to, co dzieje się przy każdym punkcie przerwania. Programiści back-endu będą pytać o dane, na przykład o to, co powinno zwrócić wyszukiwanie albo co się dzieje, kiedy dwie osoby zapisują coś w tym samym momencie.

### Czy projekt jest gotowy?

Zanim cokolwiek przekażesz, zapytaj:

1. **Czy projekt pokazuje zamierzone doświadczenie?** - na każdym zaplanowanym rozmiarze ekranu.
2. **Czy treści są ostateczne?** - tekst zastępczy, ikony i obrazy zostały zastąpione ostatecznymi zasobami.
3. **Czy ludzie mogą z niego korzystać bez pomocy?** - uczestnicy testów rozumieją projekt i wykonują zadania bez wskazówek.

Kiedy na wszystkie trzy pytania odpowiedź brzmi „tak”, projekt jest gotowy do wdrożenia. Każdy zespół pracuje na swój sposób, więc porozmawiaj z programistami wcześnie, uzgodnijcie sposób współpracy i pozostań do dyspozycji, kiedy pojawią się pytania. Dobra komunikacja jest ważniejsza niż jakikolwiek konkretny proces.

*Przykład z WashSlot:* stronę internetową budują ci sami dwaj niezależni programiści, którzy zbudowali aplikację. Programista front-endu pyta, jak sześć kart urządzeń zachowuje się między punktami przerwania dla tabletu i komputera, więc projektant dodaje notatki dla szerokości pośrednich. Programista back-endu korzysta z tych samych danych o rezerwacjach co aplikacja, więc termin zarezerwowany na stronie od razu znika z aplikacji i na odwrót.

## Dodawanie strony internetowej do portfolio

Twoje portfolio zyskuje teraz drugi projekt. Jak wiesz z [rozdziału 2](../design-process/01-ux-portfolio), sercem portfolio są **studia przypadku** (ang. *case studies*). Studium przypadku to krótka, wizualna prezentacja projektu, która obejmuje jego cel, twoją rolę, zastosowany proces i rezultat. Rekruterzy i osoby zatrudniające czytają studia przypadku, żeby poznać twoją wiedzę projektową, sposób, w jaki współpracujesz z innymi, i to, czy potrafisz doprowadzić pomysł od początku do końca mimo przeszkód. Niech twoje studium będzie zwięzłe, wizualne i łatwe do przejrzenia.

Responsywna strona internetowa pozwala ci pokazać coś, czego nie mogło pokazać studium przypadku aplikacji: że potrafisz projektować na różne rozmiary ekranów i urządzenia. Wykorzystaj to w pełni i pokaż tę samą podstronę na komputerze, tablecie i telefonie.

### Sekcje studium przypadku strony internetowej

1. **Przegląd** - krótki opis produktu, czasu trwania projektu, problemu i celów.
2. **Twoja rola** - twój zakres odpowiedzialności, a przy pracy zespołowej także to, kto jeszcze był zaangażowany.
3. **Zrozumienie użytkowników** - twoje badania, persony, opisy problemu, mapy ścieżki użytkownika i mapa witryny. Jeśli korzystasz z badań z projektu aplikacji, napisz o tym i wyjaśnij, co nowego dodano.
4. **Początek projektowania** - papierowe i cyfrowe wireframe'y, rozrysowane układy dla różnych rozmiarów ekranów i prototyp niskiej wierności, z notatkami, które uzasadniają najważniejsze decyzje.
5. **Badanie użyteczności** - krótki opis twojej metody prostym językiem, najważniejsze wnioski i droga, która do nich doprowadziła.
6. **Dopracowanie projektu** - przykłady makiet przed zmianami i po zmianach wprowadzonych na podstawie badania, a po nich najważniejsze ostateczne makiety we wszystkich rozmiarach ekranu.
7. **Prototyp** - link do działającego prototypu wysokiej wierności i krótki opis głównego przepływu. Sprawdź, czy link działa dla osób spoza twojego zespołu.
8. **Dostępność** - przykłady tego, jak projekt wspiera osoby z niepełnosprawnościami, na przykład kolejność fokusu, etykiety, kontrast i powiększenie.
9. **Wnioski i kolejne kroki** - wpływ twojej pracy, lekcje z projektu i plan dalszych działań, gdyby projekt był kontynuowany.
10. **Kontakt** - ułatw czytelnikom skontaktowanie się z tobą.

Wielu projektantów najpierw przygotowuje studium przypadku jako prezentację, którą łatwo dołączyć do zgłoszeń o pracę, a później publikuje je na swojej stronie z portfolio. Zachowaj swoje najwcześniejsze szkice: pokazują twój proces, a pracodawcy chcą zobaczyć, jak myślisz, a nie tylko ostateczne ekrany.

*Przykład z WashSlot:* studium przypadku strony internetowej zaczyna się od jednego obrazu: strony głównej na laptopie, tablecie w pralni i telefonie, obok siebie. Wyjaśnia, dlaczego obok aplikacji potrzebna była strona internetowa, pokazuje mapę witryny i rozrysowane układy dla trzech rozmiarów ekranu i zawiera dwie pary „przed i po”: strzałki karuzeli, które nie przeszły sprawdzenia kontrastu, i link „Zgłoś”, który po krytyce trafił na karty zepsutych urządzeń. Sekcja o dostępności pokazuje adnotacje kolejności fokusu i widok przy powiększeniu 400%. Kolejne kroki to automatyczne wylogowanie na wspólnym tablecie i wersja strony w dwóch językach, które oprócz miejscowego są najczęściej używane wśród mieszkańców.

::: tip Najważniejsze
Programiści front-endu budują to, co użytkownicy widzą w przeglądarce, a programiści back-endu budują architekturę i dane, które za tym stoją. Przekaż projekt, kiedy pokazuje zamierzone doświadczenie, zawiera ostateczne treści i działa bez pomocy. Potem dodaj stronę internetową do portfolio jako drugie studium przypadku i pokaż dzięki niej, że potrafisz projektować na wiele rozmiarów ekranów.
:::
