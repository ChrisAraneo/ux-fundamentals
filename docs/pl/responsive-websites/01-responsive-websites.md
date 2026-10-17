# Responsywne strony internetowe

## Czym jest responsywne projektowanie stron?

**Responsywne projektowanie stron** (ang. *responsive web design*) to podejście, w którym strona internetowa automatycznie zmienia układ, żeby dopasować się do ekranu urządzenia, na którym ją otwarto. To pojęcie pojawiło się już w [rozdziale 1](../foundations/06-platforms). Na szerokim monitorze responsywna strona może pokazywać treści w czterech kolumnach obok siebie. Na telefonie te same treści układają się w jedną kolumnę, którą się przewija.

Responsywne projektowanie to coś więcej niż zmniejszanie wszystkiego. Mniejszy ekran oznacza mniej miejsca, więc elementy mogą zmieniać nie tylko rozmiar, ale też **formę**:

- **Nawigacja** - rząd linków u góry strony na desktopie często zamienia się na telefonie w ikonę menu.
- **Kolumny** - kilka kolumn z treścią zamienia się w mniej kolumn albo w jedną.
- **Obrazy** - duże zdjęcia zostają pomniejszone, przycięte do innego kształtu albo są pokazywane pojedynczo.
- **Tekst** - nagłówki mogą się zmniejszyć, a długie opisy mogą zostać skrócone albo przeniesione niżej.

Chodzi o to, żeby ludzie mogli robić te same rzeczy w podobny sposób, bez względu na to, jakie urządzenie akurat trzymają w ręku. Jeśli mieszkaniec może sprawdzić stan pralki na laptopie w domu, powinien móc zrobić to samo na telefonie na klatce schodowej.

## Dlaczego responsywne projektowanie jest ważne

Ludzie przez cały dzień przełączają się między urządzeniami: laptop w pracy, telefon w autobusie, tablet na kanapie. Strona, która dobrze działa tylko na jednym z nich, wyklucza wszystkich pozostałych. Responsywne projektowanie daje kilka korzyści:

- **Lepsza użyteczność** - treści mieszczą się na ekranie, więc nic nie jest ucięte, zbyt małe, żeby to przeczytać, ani schowane za krawędzią.
- **Zasięg na każdym urządzeniu** - osoby odwiedzające stronę na telefonie mają dobre doświadczenie, zamiast przechodzić do konkurencji.
- **Niższe koszty** - projektujesz i utrzymujesz jedną elastyczną stronę zamiast osobnej wersji na każde urządzenie.
- **Lepsza dostępność** - układy, w których treść może się ponownie rozmieścić (ang. *reflow*), radzą sobie też z powiększeniem i dużym tekstem, od których zależy wiele osób słabowidzących.

Responsywne strony to także bardzo częste zadanie w pracy UX. Wiele firm częściej potrzebuje stron albo narzędzi internetowych niż aplikacji natywnych, więc responsywny projekt w portfolio pokazuje pracodawcom, że poradzisz sobie z takim zadaniem.

## Dedykowane aplikacje mobilne a responsywne aplikacje internetowe

Kiedy projektujesz na telefony, masz dwie możliwości. **Dedykowaną aplikację mobilną** (ang. *dedicated mobile app*), nazywaną też **aplikacją natywną** (ang. *native app*), instaluje się ze sklepu z aplikacjami i otwiera ikoną na ekranie głównym. **Responsywna aplikacja internetowa** (ang. *responsive web app*) to strona, która dopasowuje się do urządzenia i otwiera się w przeglądarce telefonu. Obie mogą pokazywać te same informacje, ale korzysta się z nich inaczej i mają inne koszty.

### Dedykowane aplikacje mobilne

| Zalety | Wady |
| --- | --- |
| Po instalacji działają offline, przynajmniej częściowo | Ich zbudowanie i utrzymanie kosztuje więcej |
| Korzystają z wbudowanych funkcji urządzenia, takich jak aparat, mikrofon, lokalizacja i powiadomienia | Zwykle wymagają osobnych wersji na Androida i iOS |
| Pozwalają na bogatsze interakcje, takie jak złożone gesty i animacje | Przed każdym wydaniem muszą przejść weryfikację w sklepie z aplikacjami |
| Można je personalizować na podstawie ustawień i nawyków użytkownika | Zajmują miejsce w pamięci, co jest realnym problemem w tańszych telefonach |

### Responsywne aplikacje internetowe

| Zalety | Wady |
| --- | --- |
| Szybciej i taniej się je buduje | Wymagają połączenia z internetem albo zasięgu sieci komórkowej |
| Niczego nie trzeba pobierać, więc nie zajmują pamięci | Trudniej je znaleźć, bo nie ma ich w sklepach z aplikacjami |
| Działają na każdym urządzeniu z przeglądarką | Trzeba je testować i utrzymywać na wielu rozmiarach ekranu |
| Jeden link otwiera te same treści wszędzie | Mają bardziej ograniczony dostęp do funkcji urządzenia |

Żadna z tych możliwości nie jest zawsze lepsza. Wiele produktów oferuje obie, a wybór zależy od tego, czego potrzebują użytkownicy, gdzie są i na co stać firmę. Dla osób z ograniczonym pakietem danych albo niepewnym połączeniem możliwość pracy offline w aplikacji może mieć duże znaczenie. Dla osób z małą ilością wolnej pamięci albo starymi urządzeniami strona internetowa może być jedyną możliwością, która działa.

*Przykład z WashSlot:* aplikacja WashSlot zostaje, bo jej przypomnienia i zapisany offline stan pralek dobrze sprawdzają się w piwnicy, gdzie zasięg jest słaby. Strona internetowa obejmuje mieszkańców, do których aplikacja nie dociera: Grace, która nie chce niczego instalować; Kofiego, którego telefon nie ma już wolnej pamięci; Tomasza, który chce rezerwować na laptopie; i wspólny tablet w pralni, który korzysta z Wi-Fi budynku.

## Co zaprojektujesz w tym rozdziale

Proces projektowania strony internetowej już znasz: empatia, definiowanie, generowanie pomysłów, prototypowanie i testowanie. Możesz wykorzystać większość wcześniejszych badań, takich jak persony, historie użytkowników, mapy ścieżki użytkownika i audyty konkurencji, bo użytkownicy i ich problemy się nie zmienili. Nowe jest medium. Zaplanujesz strukturę strony internetowej, układ jej podstron i to, jak każdy układ zmienia się od desktopu przez tablet po telefon.

*Przykład z WashSlot:* projektant wraca do audytu konkurencji z rozdziału 2 i tym razem przygląda się stronom internetowym tych samych konkurentów. Dwóch z nich ma stronę, która dobrze działa tylko na desktopie: na telefonie kalendarz rezerwacji wychodzi poza prawą krawędź ekranu. Projektant zapisuje to jako wyraźną szansę.

::: tip Najważniejsze
Responsywna strona internetowa dopasowuje układ do każdego ekranu, więc ludzie mogą wykonywać te same zadania na każdym urządzeniu. Dedykowane aplikacje działają offline i korzystają z funkcji urządzenia, ale kosztują więcej i zajmują pamięć. Responsywne aplikacje internetowe są tańsze i nie trzeba ich pobierać, ale wymagają połączenia. Wiele produktów oferuje obie możliwości, a wybór zależy od potrzeb twoich użytkowników.
:::
