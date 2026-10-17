# Architektura informacji

## Czym jest architektura informacji?

**Architektura informacji (IA)** (ang. *information architecture*) to sposób uporządkowania treści w produkcie, dzięki któremu użytkownicy wiedzą, gdzie są i gdzie znaleźć to, czego potrzebują. Ten termin pojawił się już w [rozdziale 1](../foundations/10-prototype-and-test). Kiedy ludzie uważają produkt za łatwy w użyciu, rzadko jest to kwestia szczęścia. Zwykle to efekt dobrej IA.

Pomyśl o IA jak o **mapie** swojego produktu. Żeby stworzyć dobrą mapę, korzystaj z kilku źródeł: badań z użytkownikami, swojej wiedzy o ich celach i zachowaniach oraz tego, jak zbudowane są podobne produkty.

## Trzy części IA

1. **Organizacja** (ang. *organization*) - jak poszczególne elementy treści są ze sobą powiązane.
2. **Hierarchia** (ang. *hierarchy*) - kolejność od ogólnego do szczegółowego, często nazywana „strukturą drzewa”. Szerokie kategorie są na górze, bardziej szczegółowe pod nimi, a elementy o tym samym znaczeniu stoją obok siebie na tym samym poziomie.
3. **Sekwencja** (ang. *sequence*) - kolejność, w jakiej użytkownicy krok po kroku poruszają się po treści, żeby wykonać zadanie.

## Dlaczego IA jest ważna

Dobra architektura informacji:

- **Określa ogólną strukturę** - porządkuje całą aplikację lub stronę internetową.
- **Daje ogólny obraz** - pokazuje, jak wszystkie części produktu do siebie pasują. Musisz to zrozumieć, zanim zaczniesz projektować ekrany.
- **Pomaga interesariuszom oceniać projekty** - mogą sprawdzić, czy właściwe treści są we właściwych miejscach, tak aby produkt realizował cele biznesowe.
- **Pomaga inżynierom** - mogą uporządkować dane w sposób zgodny z projektem.
- **Pozwala na rozwój** - elastyczna struktura zostawia miejsce na nowe kategorie w przyszłości.
- **Prowadzi do czytelniejszych wireframe'ów** - kiedy wiesz, jak łączą się ekrany, dużo łatwiej je narysować.

## Mapy witryny

**Mapa witryny** (ang. *sitemap*) to diagram architektury informacji produktu. Rysuje się ją z prostokątów połączonych liniami:

- **Górny prostokąt** - strona główna lub ekran główny, od którego zaczyna większość użytkowników.
- **Rząd poniżej** - główne sekcje, każda połączona ze stroną główną.
- **Kolumny pod każdą sekcją** - podstrony danej sekcji.

Zależność między stroną a stronami pod nią często nazywa się relacją **rodzic–dziecko** (ang. *parent and child*): strona wyżej jest stroną **nadrzędną**, a strony pod nią są **podrzędne**. Strony na tym samym poziomie to **strony równorzędne** (ang. *peers*).

### Przykład: mapa witryny WashSlot

```
Ekran główny (aktualny stan pralek)
├── Zarezerwuj termin
│   ├── Wybór pralki i godziny
│   ├── Podsumowanie
│   └── Potwierdzenie
├── Moje rezerwacje
│   ├── Nadchodzące rezerwacje
│   └── Wcześniejsze rezerwacje
├── Zgłoś problem
└── Ustawienia
    ├── Powiadomienia (wibracje i sygnały świetlne)
    ├── Język
    ├── Rozmiar tekstu
    └── Regulamin domu
```

„Zarezerwuj termin” to strona nadrzędna dla „Wyboru pralki i godziny”, a „Zarezerwuj termin”, „Moje rezerwacje”, „Zgłoś problem” i „Ustawienia” to strony równorzędne.

### Aplikacje webowe a aplikacje mobilne

W przypadku strony internetowej lub aplikacji webowej mapa witryny zwykle zaczyna się od strony głównej albo strony powitalnej, po której następują pozostałe główne sekcje i ich podstrony. Na przykład strona powitalna może mieć strony podrzędne „Zaloguj się”, „Utwórz konto” i „Kontynuuj z istniejącym kontem”.

Aplikacje mobilne działają według tej samej logiki, ale zwykle mają **mniej kategorii**, bo na małym ekranie nie da się pokazać wielu opcji naraz. Typowe sekcje najwyższego poziomu w aplikacjach to ekran główny, najważniejsze funkcje, profil lub ustawienia oraz pomoc.

Małe ekrany stawiają przed IA aplikacji mobilnych trzy dodatkowe wyzwania:

1. **Skup się na tym, co najważniejsze** - zostaw najważniejsze treści, a resztę przenieś albo usuń.
2. **Zaplanuj obszary dotyku** (ang. *touch targets*) - przyciski i linki muszą być wystarczająco duże i oddalone od siebie, żeby łatwo było w nie stuknąć.
3. **Zadbaj o czytelność tekstu** - tekst musi być na tyle duży, żeby dało się go wygodnie przeczytać na małym ekranie.

## Osiem zasad architektury informacji

Architekt informacji Dan Brown opisał osiem zasad, które pomagają projektantom podejmować decyzje dotyczące struktury. W skrócie:

1. **Zasada obiektów** (ang. *objects*) - traktuj treść jak coś żywego, co ma własny cykl życia i zmienia się z czasem.
2. **Zasada wyboru** (ang. *choices*) - oferuj mniej, ale dobrze uporządkowanych opcji zamiast wielu; zbyt duży wybór przytłacza ludzi.
3. **Zasada stopniowego ujawniania** (ang. *disclosure*) - pokazuj tylko tyle informacji, żeby ludzie rozumieli, co znajdą, jeśli pójdą dalej, a resztę odsłaniaj krok po kroku.
4. **Zasada przykładów** (ang. *exemplars*) - wyjaśniaj kategorie, pokazując przykłady tego, co się w nich znajduje.
5. **Zasada drzwi wejściowych** (ang. *front doors*) - zakładaj, że wielu użytkowników nie wejdzie przez stronę główną, na przykład gdy trafią na stronę z wyszukiwarki. Dlatego każda strona musi pomagać im się zorientować.
6. **Zasada wielokrotnej klasyfikacji** (ang. *multiple classification*) - oferuj kilka sposobów dotarcia do tej samej treści, bo ludzie szukają na różne sposoby.
7. **Zasada ukierunkowanej nawigacji** (ang. *focused navigation*) - nie mieszaj różnych rodzajów nawigacji w jednym menu; każde menu powinno mieć jasny cel.
8. **Zasada wzrostu** (ang. *growth*) - spodziewaj się, że treści będzie przybywać, i zaprojektuj strukturę, która sobie z tym poradzi.

Pamiętaj, że każdą decyzję dotyczącą struktury powinny kierować cel twojego produktu i potrzeby jego użytkowników.

::: tip Najważniejsze
Architektura informacji porządkuje treści tak, żeby użytkownicy wiedzieli, gdzie są i gdzie co znaleźć. Składa się z organizacji, hierarchii i sekwencji, a zwykle przedstawia się ją w formie mapy witryny. Dobra IA sprawia, że produkty są łatwiejsze w użyciu, pomaga całemu zespołowi i prowadzi do czytelniejszych wireframe'ów.
:::
