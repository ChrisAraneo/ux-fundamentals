# Prototyp strony niskiej wierności

## Krótkie przypomnienie o prototypach

**Prototyp** (ang. *prototype*) to wczesny, działający model produktu, który pokazuje, jak produkt funkcjonuje. Masz już za sobą dwa rodzaje prototypów:

- **Prototyp niskiej wierności** (ang. *low-fidelity prototype*) - prosta, interaktywna wersja z elementami zastępczymi zamiast ostatecznych elementów wizualnych i treści. Przekazuje główną ideę i pozwala sprawdzić, czy struktura i przepływ działają.
- **Prototyp wysokiej wierności** (ang. *high-fidelity prototype*) - dopracowana, interaktywna wersja, która wygląda i działa prawie jak gotowy produkt.

Cyfrowy prototyp niskiej wierności może wyglądać bardzo podobnie do zestawu cyfrowych wireframe'ów, ale jest między nimi ważna różnica. Wireframe'y to plany poszczególnych podstron. Prototyp **łączy** je ze sobą, dzięki czemu ludzie mogą je przeklikać i spróbować wykonać zadanie. Pozwala to przetestować nawigację i przepływ strony z prawdziwymi użytkownikami, zanim ktokolwiek poświęci czas na projekt wizualny. Jeśli chcesz sobie przypomnieć, jak wyglądają prototypy aplikacji, zajrzyj do [rozdziału 3](../wireframes-and-prototypes/09-low-fidelity-prototypes).

## Najpierw zaplanuj przepływ użytkownika

Prototyp buduje się wokół jednego zadania, które rozwiązuje problem użytkownika. Zanim cokolwiek połączysz, zdecyduj, co użytkownicy powinni móc zrobić, i narysuj idealną ścieżkę. Zadaj sobie pytania:

- **Co użytkownicy mają osiągnąć?** - na przykład „kupić koszulkę we właściwym rozmiarze” albo „zarezerwować salę na piątek”.
- **Gdzie zaczynają?** - **punkt wejścia** (ang. *entry point*) to podstrona, na której zaczyna się przepływ. Wiele przepływów zaczyna się na stronie głównej, ale użytkownicy mogą też trafić na stronę z wyszukiwarki, z linku w e-mailu albo z innej sekcji.
- **Jak przechodzą między podstronami?** - wypisz przyciski i linki, które prowadzą ich z jednej podstrony na następną.

### Co dobry prototyp pozwala robić użytkownikom

1. **Przechodzić dalej i wracać** - użytkownicy mogą przejść do następnego kroku i wrócić do poprzedniego.
2. **Wejść od punktu startowego** - a tam, gdzie ma to sens, także z innych punktów wejścia.
3. **Rozpoznać koniec** - wyraźny komunikat albo podstrona pokazuje, że zadanie zostało wykonane.
4. **Wrócić na początek** - po zakończeniu użytkownicy mogą wrócić do punktu wejścia, gotowi do kolejnego zadania.

## Budowanie prototypu w Figmie

1. **Otwórz plik z wireframe'ami** - i ułóż ramki w kolejności przepływu użytkownika.
2. **Przełącz się na kartę Prototype** - znajdziesz ją u góry prawego panelu.
3. **Połącz pierwszy element** - zaznacz element, który klikają użytkownicy, na przykład przycisk. Na jego krawędzi pojawi się małe niebieskie kółko (**węzeł połączenia**, ang. *node*). Przeciągnij węzeł do ramki docelowej i puść.
4. **Powtórz dla każdego kroku** - połącz każdy element w przepływie, łącznie z linkami wstecz i drogą powrotu na początek.
5. **Wyświetl podgląd** - kliknij przycisk odtwarzania w prawym górnym rogu, a potem przeklikaj cały przepływ tak, jak zrobiłby to użytkownik. Popraw każde połączenie, które prowadzi na niewłaściwą podstronę albo donikąd.
6. **Sprawdź wszystko jeszcze raz** - zanim pokażesz prototyp komukolwiek, przejdź całe doświadczenie jeszcze raz od początku do końca.

W przypadku responsywnej strony internetowej zbuduj prototyp dla rozmiaru ekranu, który chcesz przetestować najpierw, zwykle dla wersji desktopowej. Drugi przepływ, na telefony, możesz dodać później na podstawie wireframe'ów na telefon.

## Lista kontrolna prototypu strony niskiej wierności

Twój prototyp jest gotowy do testów, kiedy łączy co najmniej cztery wireframe'y w kompletny przepływ użytkownika, pozwala użytkownikom przechodzić dalej i wracać, ma wyraźne wskazówki nawigacyjne, jasno sygnalizuje, kiedy zadanie jest wykonane, i po wszystkim przenosi użytkowników z powrotem do punktu startowego.

## Przykład: przepływ rezerwacji w WashSlot

Projektant tworzy prototyp najważniejszego zadania: **„Zarezerwuj wolną pralkę na sobotę rano”.** Idealny przepływ na komputerze ma pięć kroków:

1. **Strona główna** - mieszkaniec widzi stan pralek i klika „Zarezerwuj termin”.
2. **Wybór dnia i godziny** - mieszkaniec klika „Sobota”, a potem wolną godzinę, na przykład 9:00 na Pralce 2.
3. **Podsumowanie** - mieszkaniec sprawdza szczegóły i klika „Potwierdź rezerwację” albo klika „Wstecz”, żeby zmienić godzinę.
4. **Potwierdzenie** - komunikat brzmi „Zarezerwowano: sobota, 9:00, Pralka 2” i zawiera link do „Moich rezerwacji”.
5. **Powrót na stronę główną** - logo „WashSlot” i link „Strona główna” przenoszą mieszkańca z powrotem na stronę główną.

Prototyp ma trzy punkty wejścia: przycisk „Zarezerwuj termin” na stronie głównej, link „Zarezerwuj termin” w głównej nawigacji i przycisk „Zarezerwuj ponownie” przy wcześniejszej rezerwacji w „Moich rezerwacjach”. W szybkim teście z dwojgiem mieszkańców jedna osoba nie potrafiła znaleźć sposobu na zmianę pralki na podstronie podsumowania. Zanim projektant zbuduje wersję wysokiej wierności, dodaje link „Zmień” obok nazwy pralki.

::: tip Najważniejsze
Prototyp niskiej wierności łączy wireframe'y, żeby ludzie mogli spróbować wykonać zadanie. Najpierw zaplanuj przepływ użytkownika i jego punkty wejścia. Potem połącz ramki na karcie **Prototype** w Figmie i upewnij się, że użytkownicy mogą przechodzić dalej i wracać, rozpoznać koniec i wrócić na początek. Zanim przetestujesz prototyp z użytkownikami, wyświetl podgląd i sprawdź cały przepływ.
:::
