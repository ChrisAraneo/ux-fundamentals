# Struktury stron internetowych

## Architektura informacji stron internetowych

Zanim naszkicujesz choćby jedną podstronę, zdecyduj, jak będą uporządkowane treści strony internetowej. Jak wiesz z [rozdziału 3](../wireframes-and-prototypes/05-information-architecture), **architektura informacji (IA)** (ang. *information architecture*) porządkuje treści tak, żeby ludzie wiedzieli, gdzie są i gdzie znaleźć to, czego potrzebują. Dobra architektura informacji wynika z badań: persony i mapy ścieżki użytkownika mówią ci, czego szukają użytkownicy, a audyt konkurencji pokazuje, jak są uporządkowane podobne strony.

W przypadku stron internetowych architektura informacji jest ważna dla całego zespołu, nie tylko dla użytkowników:

- **Określa strukturę** - po uporządkowanej stronie łatwiej się poruszać i łatwiej ją później rozbudować.
- **Daje szerszą perspektywę** - widzisz, jak wszystkie podstrony są ze sobą powiązane, zanim zaprojektujesz którąkolwiek z nich.
- **Ułatwia ocenę interesariuszom** (ang. *stakeholders*) - mogą oni sprawdzić, czy właściwe treści są we właściwych miejscach, żeby osiągnąć cele biznesowe.
- **Pomaga programistom** - mogą uporządkować dane i kod w sposób zgodny z projektem, co oszczędza czas pracy.
- **Wspiera iterowanie** - przy jasnej strukturze łatwiej dodawać, łączyć albo przenosić podstrony, kiedy projekt się zmienia.

## Cztery typowe struktury stron internetowych

Większość stron internetowych opiera się na jednym z czterech dobrze znanych wzorców albo na ich połączeniu. Ludzie korzystają z tych wzorców od lat, więc już wiedzą, jak się w nich poruszać.

### Model hierarchiczny

**Model hierarchiczny** (ang. *hierarchical model*) porządkuje podstrony od ogólnych do szczegółowych, jak drzewo genealogiczne. Na górze jest strona główna. Pod nią są główne kategorie, nazywane **stronami nadrzędnymi** (ang. *parent pages*), które zwykle pojawiają się w głównej nawigacji. Pod każdą stroną nadrzędną są bardziej szczegółowe **strony podrzędne** (ang. *child pages*). **Hierarchia** (ang. *hierarchy*) oznacza tu po prostu układanie treści według ważności: najbardziej ogólne i najważniejsze treści są najwyżej.

To najczęściej stosowana struktura. Pomyśl o księgarni internetowej: strona główna prowadzi do kategorii „Beletrystyka”, „Literatura faktu” i „Książki dla dzieci”, a „Beletrystyka” prowadzi do kategorii „Kryminał”, „Fantastyka” i „Romans”.

### Model sekwencyjny

**Model sekwencyjny** (ang. *sequential model*) prowadzi użytkowników przez kolejne kroki w ustalonej kolejności, od pierwszej do ostatniej podstrony. Użytkownicy przechodzą dalej przyciskiem „Dalej”, a czasem wracają przyciskiem „Wstecz”, ale nie mogą przeskoczyć do przodu ani pominąć kroków. Struktury sekwencyjne sprawdzają się w zadaniach, w których kolejność ma znaczenie, na przykład w internetowym formularzu podatkowym, podaniu o pracę albo quizie. Każda podstrona ma jeden cel: przenieść użytkownika do następnego kroku.

### Model macierzowy

**Model macierzowy** (ang. *matrix model*) łączy treści w wielu kierunkach, więc użytkownicy sami wybierają swoją ścieżkę. Z każdej podstrony mogą dotrzeć do wielu innych przez linki w tekście, powiązane elementy i menu. Ponieważ wszystko łączy się ze wszystkim, ten model nazywa się czasem **modelem sieciowym** (ang. *web model*). Tak działa wiki albo encyklopedia internetowa: artykuł o wulkanach zawiera linki do artykułów o trzęsieniach ziemi, wyspach i geologii.

Model macierzowy zachęca do odkrywania, ale może być trudny w nawigacji, jeśli użytkownicy nie wiedzą jeszcze, czego szukają. Z tego powodu niektórzy projektanci uważają go za przestarzały. Wciąż jednak dobrze się sprawdza, kiedy celem jest pozwolić ludziom przeglądać dużo treści, a nie prowadzić ich przez konkretne zadanie.

### Model bazodanowy

**Model bazodanowy** (ang. *database model*) łączy **bazę danych** (ang. *database*), czyli uporządkowany zbiór informacji, z wyszukiwaniem i filtrowaniem. Zamiast przeglądać stałe drzewo podstron, użytkownicy wyszukują, filtrują albo oznaczają treści tagami, a strona sama tworzy dla nich wyniki. Strona z przepisami, na której filtrujesz według składnika, czasu gotowania i diety, korzysta z modelu bazodanowego, podobnie jak mapa internetowa, w której wyszukujesz „apteka w pobliżu”.

## Po co korzystać z typowej struktury?

1. **Użytkownicy je znają** - ludzie przenoszą oczekiwania z innych stron, więc znajoma struktura wydaje się naturalna od pierwszej wizyty.
2. **Ułatwiają nawigację** - jasna struktura daje logiczne miejsca na menu, linki i wskazówki, które pomagają użytkownikom się zorientować.
3. **Są sprawdzone** - projektanci i użytkownicy testowali i dopracowywali te wzorce przez wiele lat.
4. **Oszczędzają czas** - zaczynasz od działających ram, zamiast wymyślać strukturę od zera.

## Wybieranie i łączenie struktur

Nie ma jednej najlepszej struktury. Właściwa zależy od twoich treści i od tego, co chcą robić użytkownicy. W praktyce większość stron **łączy** struktury: strona hierarchiczna może zawierać sekwencyjny proces zamówienia i wyszukiwanie w stylu bazy danych. Traktuj cztery modele jako punkty wyjścia. Niektóre marki celowo łamią te wzorce, żeby stworzyć coś niezwykłego, ale bez względu na to, co wybierzesz, użytkownicy muszą łatwo odnajdywać drogę.

*Przykład z WashSlot:* projektant łączy na stronie WashSlot trzy struktury:

- **Hierarchiczną** - strona główna prowadzi do głównych sekcji: „Zarezerwuj termin”, „Moje rezerwacje”, „Przewodnik po pralni”, „Ogłoszenia” i „Zgłoś problem”.
- **Sekwencyjną** - rezerwacja to ścisła sekwencja: wybór dnia i godziny, sprawdzenie podsumowania i potwierdzenie. Mieszkańcy mogą cofnąć się o krok, ale nie dotrą do podsumowania, jeśli najpierw nie wybiorą godziny.
- **Bazodanową** - „Przewodnik po pralni” ma pole wyszukiwania i filtry, bo mieszkańcy zadają bardzo konkretne pytania, na przykład „Który program jest bezpieczny dla wełny?” albo „Co można wrzucić do suszarki?”.

Projektant rozważa strukturę macierzową dla przewodnika, z artykułami, które linkują do siebie nawzajem, ale z niej rezygnuje: w badaniach mieszkańcy szukali szybkiej odpowiedzi, a nie czegoś do przeglądania.

::: tip Najważniejsze
Architektura informacji porządkuje treści strony internetowej i pomaga zarówno użytkownikom, jak i interesariuszom oraz programistom. Cztery typowe struktury to model hierarchiczny (od ogólnego do szczegółowego), sekwencyjny (ustalone kroki), macierzowy (wszystko połączone) i bazodanowy (wyszukiwanie i filtry). Większość stron łączy je ze sobą, a właściwe połączenie zależy od twoich treści i celów użytkowników.
:::
