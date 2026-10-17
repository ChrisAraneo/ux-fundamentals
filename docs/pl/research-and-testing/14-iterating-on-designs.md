# Iterowanie projektu

## Od wniosków do zmian w projekcie

Wnioski zostały przedstawione, a zespół uzgodnił, którymi z nich się zajmie. Teraz czas ulepszyć projekt. Każdy problem użytkowników znaleziony w badaniach to szansa, żeby poprawić doświadczenie przed premierą produktu, kiedy zmiany są jeszcze tanie.

## Ustalanie priorytetów wniosków

Badanie może ujawnić wiele problemów, a nie da się naprawić wszystkiego naraz. Ustal priorytety wniosków razem z interesariuszami, na przykład innymi projektantami, menedżerem produktu albo liderem zespołu programistów, od najpilniejszych do najmniej pilnych. Wiele zespołów korzysta z poziomów priorytetu:

### Priorytet 0 (P0): trzeba naprawić

Problemy P0 trzeba naprawić, żeby produkt działał poprawnie. Zapytaj:

- **Czy coś uniemożliwia użytkownikom przejście przez główny przepływ?** - na przykład użytkownicy nie mogą dokończyć rezerwacji.
- **Czy użytkownicy w którymś miejscu poczuli się oszukani?** - to może wskazywać na [zwodniczy wzorzec projektowy](../wireframes-and-prototypes/12-deceptive-patterns) (ang. *deceptive pattern*), nawet niezamierzony, na przykład opłatę bez wyraźnego potwierdzenia.
- **Czy coś jest niesprawiedliwe lub niedostępne?** - z produktu muszą móc korzystać ludzie o różnych możliwościach, tożsamościach i doświadczeniach.

### Priorytet 1 (P1) i priorytet 2 (P2)

Problemy **P1** znacznie poprawiają doświadczenie, ale użytkownicy mogą przejść przez główny przepływ także bez ich rozwiązania. To dobrzy kandydaci do następnego prototypu. Jeśli masz wiele problemów P1, podziel je dalej: te, którymi zajmiesz się teraz, zostają w **P1**, a te na później przechodzą do **P2**. Dzięki temu małe zespoły mogą najpierw skupić się na najważniejszych zmianach.

### Priorytety w WashSlot

| Wniosek | Priorytet | Powód |
| --- | --- | --- |
| Czytniki ekranu nie odczytują ikon stanu, a tekst jest za mały | **P0** | Projekt jest niedostępny dla części mieszkańców |
| Zmiana dnia jest prawie niemożliwa do znalezienia | **P0** | Blokuje główny przepływ przy każdej rezerwacji, która nie jest na dziś |
| Zajęte pralki nie pokazują, ile czasu zostało | **P1** | Użytkownicy nadal mogą rezerwować, ale trudniej im planować |
| Przełącznik przypomnienia łatwo przeoczyć | **P1** | Nie blokuje rezerwacji, ale sprawia, że ludzie zapominają o praniu |
| Regulamin domu jest ukryty w ustawieniach | **P2** | Dotyczy mniejszej liczby użytkowników i może poczekać do następnej iteracji |

## Poznaj ograniczenia swojego badania

Badanie użyteczności z udziałem od pięciu do ośmiu uczestników ujawnia najczęstsze problemy, ale nie powie ci wszystkiego. Nawet po ustaleniu priorytetów możesz mieć otwarte pytania. To, czy możesz przeprowadzić dodatkowe badania, zależy od zespołu, harmonogramu i budżetu. Szczególnie zadbaj o uwzględnienie grup, których potrzeby często są pomijane, bo to właśnie projektanci i badacze UX często muszą się o nie upominać.

## Badania to pętla, a nie prosta linia

Badania, synteza i iteracja powtarzają się wiele razy. Testujesz prototyp, uczysz się, ulepszasz projekt i testujesz ponownie. Kursy często przedstawiają ten proces jako prostą linię, ale w prawdziwych projektach będziesz przechodzić przez tę pętlę wciąż od nowa.

## Edytuj wireframe'y, a nie prototyp

Wprowadzaj zmiany w **wireframe'ach** (ang. *wireframes*), a nie w połączeniach prototypu. Pomyśl o próbie w teatrze: kiedy scena nie działa, reżyser najpierw zmienia scenariusz i inscenizację, a dopiero potem jeszcze raz przechodzi przez całą sztukę. Tak samo ty najpierw aktualizujesz wireframe'y, a kiedy wszystkie zmiany są gotowe, ponownie łączysz je w nowy prototyp niskiej wierności do następnej rundy testów.

## Przykład: iteracja WashSlot

Na podstawie wniosków P0 i P1 projektant aktualizuje wireframe'y:

1. **Karty dni** - ekran rezerwacji pokazuje teraz na górze kolejne siedem dni jako karty, a dzisiejszy dzień jest domyślnie zaznaczony.
2. **Dostępny stan pralek** - każdy wiersz z pralką pokazuje jej stan dużym tekstem („Wolna”, „Zajęta”, „Nieczynna”), a każda ikona ma etykietę tekstową dla czytników ekranu.
3. **Pozostały czas** - zajęte pralki pokazują, ile minut zostało, na przykład „Zajęta, wolna za 25 min”.
4. **Przypomnienie domyślnie włączone** - przypomnienie włącza się automatycznie, a wyraźnie opisany przełącznik pozwala je wyłączyć.

Potem projektant ponownie łączy wireframe'y w nowy prototyp i planuje krótkie drugie badanie z trojgiem nowych mieszkańców, żeby sprawdzić, czy zmiany rozwiązały problemy.

::: tip Najważniejsze
Ustalaj priorytety wniosków razem z interesariuszami: problemy P0 blokują główny przepływ, oszukują użytkowników albo wykluczają ludzi; problemy P1 i P2 poprawiają doświadczenie i można je zaplanować na później. Najpierw zaktualizuj wireframe'y, potem ponownie połącz je w nowy prototyp i znowu go przetestuj. Badania to pętla, a nie prosta linia.
:::
