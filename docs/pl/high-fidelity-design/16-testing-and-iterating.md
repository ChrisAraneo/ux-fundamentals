# Testowanie i iterowanie

## Przetestuj ponownie z prototypem wysokiej wierności

Twój prototyp wysokiej wierności wygląda i działa prawie jak prawdziwy produkt, więc czas znowu przetestować go z użytkownikami. Proces jest taki sam jak w przypadku prototypu niskiej wierności w [rozdziale 4](../research-and-testing/), więc oto krótkie przypomnienie czterech kroków:

1. **Zaplanuj badanie** - napisz plan badania z kontekstem projektu, celami badawczymi, pytaniami badawczymi, KPI, metodologią, uczestnikami i scenariuszem. Zobacz [Plan badania](../research-and-testing/03-research-plan).
2. **Przeprowadź badanie** - poprowadź moderowane albo niemoderowane sesje badania użyteczności i rób staranne notatki. Zobacz [Moderowanie badania użyteczności](../research-and-testing/09-moderating-a-usability-study) i [Robienie notatek](../research-and-testing/11-taking-notes).
3. **Przeanalizuj i zsyntetyzuj** - zamień obserwacje w tematy i wnioski. Zobacz [Od obserwacji do wniosków](../research-and-testing/12-from-observations-to-insights).
4. **Przedstaw wnioski i działaj** - zaprezentuj wnioski i zaktualizuj projekt.

Testowanie prototypu wysokiej wierności często ujawnia inne problemy niż testowanie prototypu niskiej wierności. Uczestnicy reagują teraz na kolory, sformułowania, ikony, animacje i szczegóły, a nie tylko na strukturę. Zachowują się też bardziej naturalnie, bo prototyp wydaje się prawdziwy.

*Przykład z WashSlot:* w drugim badaniu prototyp wysokiej wierności testuje pięcioro mieszkańców, którzy nie brali udziału w pierwszym badaniu, w tym starsza osoba korzystająca z czytnika ekranu i osoba, która używa aplikacji w trybie ciemnym. Każda sesja trwa 20 minut i odbywa się w pralni, z tym samym głównym zadaniem co wcześniej („Zarezerwuj wolną pralkę na sobotę rano”) i dwoma nowymi: „Anuluj swoją rezerwację na piątek” oraz „Sprawdź, która pralka jest największa”.

## Od obserwacji do wniosków

Żeby zrozumieć wyniki, wykonaj te same cztery kroki co w rozdziale 4: zbierz wszystkie dane, uporządkuj je, znajdź tematy i zapisz wnioski.

### Uporządkuj notatki

Zacznij od policzenia, ilu uczestników pasuje do każdej obserwacji, na przykład „3 z 5 nie znalazło sposobu na anulowanie”. Zapisz każdą obserwację razem z tą liczbą na osobnej karteczce samoprzylepnej, w papierowym albo cyfrowym diagramie pokrewieństwa. Potem pogrupuj karteczki. Jeden prosty sposób to podzielić je na trzy obszary:

- **Wypowiedzi** - to, co mówili uczestnicy, łącznie z tonem głosu, na przykład „W głosie słychać niepewność przy wyborze pralki”.
- **Działania** - to, co robili uczestnicy, na przykład „Przesunięcie palcem w lewo po karcie rezerwacji w poszukiwaniu opcji”.
- **Odczucia** - oznaki tego, jak uczestnicy się czuli, na przykład „Ulga na widok potwierdzenia”.

### Zamień tematy we wnioski

Użyj szablonu tematu z rozdziału 4: „Zaobserwowano, że [liczba] z [łączna liczba] uczestników [wzorzec]. Oznacza to, że [co to mówi o projekcie]”. Potem zamień każdy temat we wniosek za pomocą prostego zdania: „Ponieważ [temat], musimy [co powinien robić projekt]”.

*Przykład z WashSlot:* analiza daje cztery tematy i wnioski.

1. **Anulowanie** - 3 z 5 uczestników nie udało się anulować rezerwacji, bo jedynym sposobem było przesunięcie palcem w lewo po karcie rezerwacji. Ponieważ anulowanie jest ukryte za gestem, potrzebujemy widocznego przycisku „Anuluj rezerwację”.
2. **Animacja** - 2 z 5 uczestników rozpraszała animacja obracającego się bębna na ekranie głównym, która nigdy się nie zatrzymuje. Jedna z tych osób powiedziała, że kręciło jej się od niej w głowie. Ponieważ zapętlona animacja rozprasza i może źle wpływać na samopoczucie, musimy zatrzymywać ją po kilku sekundach i respektować ustawienie „ogranicz ruch”.
3. **Rozmiar pralki** - 4 z 5 uczestników chciało wiedzieć, która pralka mieści najwięcej prania, i zgadywało na podstawie obrazka. Ponieważ mieszkańcy wybierają pralki według pojemności, musimy pokazywać pojemność na każdej karcie.
4. **Kalendarz** - 2 z 5 uczestników zapytało, czy można dodać rezerwację do kalendarza w telefonie. Ponieważ część mieszkańców planuje tydzień w kalendarzu, moglibyśmy zaoferować opcję „Dodaj do kalendarza”.

## Ustalanie priorytetów wniosków

Tak jak w rozdziale 4, uporządkuj wnioski według pilności, najlepiej razem z interesariuszami, takimi jak inni projektanci, menedżerowie produktu i programiści. Przygotuj się, żeby wyjaśnić, dlaczego najważniejsze wnioski mają znaczenie dla użytkowników.

- **Priorytet 0 (P0)** - trzeba to naprawić przed premierą, bo produkt nie działa poprawnie, użytkownicy czują się oszukani lub wprowadzeni w błąd albo niektóre osoby nie mogą z niego korzystać. Problemy z dostępnością to zwykle P0.
- **Priorytet 1 (P1)** - nie blokuje głównego zadania, ale naprawienie go wyraźnie poprawiłoby doświadczenie.
- **Priorytet 2 (P2)** - miło byłoby to mieć; może poczekać, aż P0 i P1 będą gotowe, albo do późniejszego etapu.

*Przykład z WashSlot:*

| Wniosek | Priorytet | Dlaczego |
| --- | --- | --- |
| Dodać widoczny przycisk „Anuluj rezerwację” | P0 | Działania dostępne tylko za pomocą gestu wykluczają ludzi i blokują kluczowe zadanie. |
| Zatrzymać zapętloną animację i respektować ustawienie „ogranicz ruch” | P0 | Niekończący się ruch to problem z dostępnością. |
| Pokazywać pojemność pralki na każdej karcie | P1 | Mieszkańcy mogą rezerwować bez tego, ale łatwiej byłoby im wybierać. |
| Zaoferować opcję „Dodaj do kalendarza” | P2 | Przydatne, ale niepotrzebne do rezerwacji; zaplanowane na późniejszą wersję. |

## Iterowanie makiet

Gdy priorytety są jasne, przygotuj **plan działania** (ang. *action plan*): najpierw wypisz zmiany dla każdego wniosku P0, potem P1, a potem P2, jeśli starczy czasu. Staraj się szybko przetestować zmiany P0 i P1, żeby sprawdzić, czy rozwiązały problemy.

Zmienianie połączeń w prototypie jest czasochłonne, więc najpierw wprowadzaj zmiany w **makietach**, tak samo jak w rozdziale 4 edytowało się wireframe'y. Potem zaktualizuj prototyp:

1. **Zduplikuj ekrany, które zmienisz** - zachowaj stare wersje, dopóki nowe nie będą gotowe, żeby móc je porównać.
2. **Wprowadź zmiany** - zaktualizuj makiety, a jeśli zmienia się komponent, zaktualizuj też arkusz naklejek.
3. **Korzystaj z tego, co już istnieje** - w przypadku złożonych komponentów, takich jak kalendarz, użyj komponentu z systemu projektowego albo z pliku społeczności Figmy i dostosuj go do swoich stylów, zamiast rysować go od zera.
4. **Odbuduj przepływ** - ułóż nowe ekrany we właściwej kolejności i połącz je ponownie.
5. **Zarchiwizuj stare wersje** - przenieś nieaktualne ekrany na stronę „Archiwum”, żeby nie były częścią przepływu, ale nadal były dostępne do studium przypadku.
6. **Przetestuj cały prototyp ponownie** - przeklikaj cały przepływ, żeby upewnić się, że każde połączenie działa.

*Przykład z WashSlot:* projektant dodaje konturowy przycisk „Anuluj rezerwację” do ekranu szczegółów rezerwacji (przesunięcie palcem nadal działa jako skrót), zastępuje obracający się bęben nieruchomą ilustracją, która animuje się raz przez dwie sekundy, i dodaje „7 kg” albo „9 kg” pod nazwą każdej pralki. Zaktualizowana karta rezerwacji zostaje zmieniona w arkuszu naklejek, więc ekran „Moje rezerwacje” aktualizuje się automatycznie. Pomysł z opcją „Dodaj do kalendarza” trafia na listę do wersji 2. Szybki test z trojgiem mieszkańców potwierdza, że teraz każdy potrafi anulować rezerwację.

::: tip Najważniejsze
Przetestuj prototyp wysokiej wierności, wykonując te same cztery kroki badawcze co wcześniej; realistyczne projekty ujawniają nowe problemy. Zamień obserwacje w tematy i wnioski, nadaj im priorytety P0, P1 i P2 i najpierw napraw problemy P0. Wprowadzaj zmiany w makietach, ponownie połącz prototyp, zarchiwizuj stare wersje i przetestuj go znowu.
:::
