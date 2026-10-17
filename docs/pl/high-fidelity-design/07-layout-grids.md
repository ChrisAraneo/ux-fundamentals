# Siatki układu

## Dlaczego warto używać siatek?

**Układ** (ang. *layout*) to sposób rozmieszczenia elementów na ekranie. Siatka to niewidoczna struktura, na której opiera się dobry układ, podobnie jak linie w szkolnym zeszycie, dzięki którym pismo jest równe. Siatki pomagają ci:

- **Zaprowadzić porządek** - elementy są wyrównane, więc ekran wygląda spokojnie i łatwo go przejrzeć.
- **Pracować szybciej** - nie musisz od zera decydować o położeniu każdego elementu.
- **Współpracować** - inni projektanci i programiści mogą trzymać się tej samej struktury.
- **Dopasować się do ekranu** - treść mieści się w granicach ekranu i dostosowuje do różnych rozmiarów.

## Rodzaje siatek

- **Siatka podstawowa** (ang. *basic grid*) - linie, które przecinają się w równych odstępach i dzielą ekran na małe kwadraty, jak papier milimetrowy. W Figmie nazywa się ona **siatką jednolitą** (ang. *uniform grid*). Przydaje się do rysowania ikon i precyzyjnego umieszczania małych elementów.
- **Siatka układu** (ang. *layout grid*) - zestaw pionowych **kolumn** oddzielonych przerwami, które nazywamy **odstępami międzykolumnowymi** (ang. *gutters*, czasem *alleys*). Elementy umieszcza się tak, żeby ich krawędzie pokrywały się z kolumnami. Z tej siatki projektanci najczęściej korzystają przy projektowaniu ekranów.
- **Siatka wierszy** (ang. *row grid*) - poziome wiersze zamiast kolumn. Pomaga zachować spójne odstępy w pionie.

Siatka układu ma też **marginesy** (ang. *margins*), czyli pustą przestrzeń między skrajnymi kolumnami a krawędziami ekranu.

### Typowe siatki na różne urządzenia

Popularne punkty wyjścia to 4 kolumny na telefonach, 8 kolumn na tabletach i 12 kolumn na komputerach, z marginesami i odstępami międzykolumnowymi 16 px na telefonach i szerszymi na większych ekranach. Te liczby nie są sztywnymi regułami. To konwencje, z których korzysta wiele systemów projektowych, bo pozwalają równo podzielić przestrzeń.

## Dodawanie siatki w Figmie

1. **Zaznacz ramkę** - kliknij nazwę ramki na obszarze roboczym lub w panelu **Layers**. Upewnij się, że zaznaczasz samą ramkę, a nie element w jej wnętrzu.
2. **Dodaj siatkę układu** - w prawym panelu znajdź sekcję **Layout grid** (w nowszych wersjach Figmy **Layout guide**) i kliknij ikonę plusa. Figma domyślnie dodaje siatkę jednolitą.
3. **Otwórz ustawienia siatki** - kliknij ikonę siatki obok niej, żeby zmienić jej typ na **Columns** (kolumny), **Rows** (wiersze) albo **Grid** (siatka).
4. **Ustaw wartości** - wybierz liczbę kolumn, typ (na przykład „Stretch”, dzięki któremu kolumny wypełniają ramkę), odstęp międzykolumnowy i margines. Możesz też zmienić kolor siatki, żeby była widoczna, ale nie rozpraszała.
5. **Łącz siatki** - do jednej ramki możesz dodać więcej niż jedną siatkę, na przykład kolumny i siatkę jednolitą 8 px, a każdą z nich włączać i wyłączać.

*Przykład z WashSlot:* każda makieta WashSlot korzysta z siatki 4-kolumnowej z marginesami 16 px i odstępami międzykolumnowymi 16 px oraz z siatki jednolitej 8 px do odstępów. Wszystkie odstępy w projekcie są wielokrotnościami 8 (8, 16, 24, 32 px), dzięki czemu ekrany są spójne, a programistom łatwo je zbudować.

## Wyrównywanie elementów do siatki

Gdy siatka jest już gotowa, wyrównaj do niej elementy:

- **Wyrównanie do krawędzi** - dopasuj krawędzie przycisków, kart i obrazów do krawędzi kolumn.
- **Wyrównanie do środka** - umieść mniejsze elementy na środku jednej lub kilku kolumn.
- **Wyrównanie mieszane** - łącz obie metody tam, gdzie ma to sens.

Pomogą ci w tym **narzędzia wyrównywania** (ang. *alignment controls*) u góry prawego panelu Figmy. Pozwalają wyrównać zaznaczone elementy do lewej, do prawej, do góry, do dołu lub do środka, rozmieścić je w równych odstępach w poziomie lub w pionie oraz uporządkować grupę funkcją „Tidy up”, tak żeby odstępy były równe we wszystkich kierunkach.

*Przykład z WashSlot:* karty pralek na ekranie głównym zajmują wszystkie cztery kolumny, przycisk „Zarezerwuj termin” na dole też zajmuje wszystkie cztery kolumny, a siedem kart dni na ekranie rezerwacji tworzy przewijany rząd, w którym każda karta ma szerokość jednej kolumny.

## Auto Layout

**Auto Layout** to funkcja Figmy, dzięki której ramka sama się powiększa lub zmniejsza, gdy zmienia się jej zawartość, a ustawione odstępy pozostają bez zmian. Na przykład przycisk z Auto Layout robi się szerszy, gdy wpiszesz dłuższą etykietę, a lista z Auto Layout automatycznie robi miejsce na nowy element.

Auto Layout możesz dodać na trzy sposoby: zaznacz element i naciśnij **Shift + A**, użyj przycisku plusa w sekcji „Auto layout” w prawym panelu albo kliknij prawym przyciskiem myszy i wybierz „Add auto layout”. W ustawieniach Auto Layout wybierasz kierunek (poziomy lub pionowy), odstęp między elementami i odstęp wewnętrzny.

*Przykład z WashSlot:* etykieta stanu na każdej karcie pralki korzysta z Auto Layout. Gdy „Wolna” zmienia się na dłuższe „Zajęta, wolna za 25 min”, tło etykiety rośnie razem z tekstem, a odstęp wewnętrzny pozostaje taki sam.

::: tip Najważniejsze
Siatki wprowadzają do projektu porządek, przyspieszają pracę i zapewniają spójność. Siatki podstawowe dzielą ekran na kwadraty, a siatki układu korzystają z kolumn, odstępów międzykolumnowych i marginesów. Wyrównuj elementy do siatki za pomocą narzędzi wyrównywania w Figmie, trzymaj się spójnej skali odstępów, na przykład wielokrotności 8, i używaj Auto Layout, żeby elementy dopasowywały się do swojej zawartości.
:::
