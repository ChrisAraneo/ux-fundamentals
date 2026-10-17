# Mapy witryn dla stron internetowych

## Dlaczego strona internetowa potrzebuje mapy witryny

**Mapa witryny** (ang. *sitemap*) przedstawia wszystkie podstrony strony internetowej albo aplikacji na jednym diagramie. Pokazuje, które z nich są najważniejsze, jak się ze sobą łączą i jak się nazywają. Mapa witryny aplikacji WashSlot powstała już w [rozdziale 3](../wireframes-and-prototypes/05-information-architecture). W przypadku strony internetowej mapa witryny jest równie przydatna, a często nawet ważniejsza, bo strony internetowe mają zwykle więcej podstron niż aplikacje.

Mapa witryny pomaga na kilka sposobów:

- **Ujawnia luki i powtórzenia** - kiedy widzisz wszystkie podstrony naraz, zauważasz podstrony, o których łatwo zapomnieć, te, których nie potrzebujesz, i te, które możesz połączyć.
- **Pokazuje ścieżki użytkowników** - możesz sprawdzić, czy do każdej ważnej podstrony łatwo dotrzeć, i zobaczyć, gdzie przydałyby się dodatkowe linki.
- **Pomaga wyszukiwarkom** - uporządkowana lista podstron pomaga wyszukiwarkom, takim jak Google, zrozumieć i **indeksować** (ang. *index*) stronę, dzięki czemu nowi odwiedzający mogą ją znaleźć przez wyszukiwanie.
- **Wspiera dostępność** - jasna, przewidywalna struktura pomaga wszystkim, a zwłaszcza osobom korzystającym z czytników ekranu albo klawiatury, sprawnie poruszać się po stronie.

Dodanie brakującej podstrony na diagramie zajmuje kilka minut. Poprawienie tego po zbudowaniu strony zajmuje dni, więc mapa witryny oszczędza zespołowi czas i pieniądze.

## Części hierarchicznej mapy witryny

Większość stron internetowych zaczyna od hierarchicznej mapy witryny, zbudowanej z prostokątów i linii:

1. **Strona główna** - prostokąt na samej górze. Ma ją prawie każda strona internetowa i zwykle to tam odwiedzający trafiają najpierw.
2. **Strony nadrzędne** - rząd prostokątów bezpośrednio pod stroną główną. To główne kategorie, które zwykle stają się pozycjami w głównym pasku nawigacji.
3. **Strony podrzędne** - kolumny prostokątów pod każdą stroną nadrzędną. To podkategorie. Strony nadrzędne nie muszą mieć tej samej liczby stron podrzędnych.

## Jak zbudować mapę witryny

1. **Przyjrzyj się typowym podstronom** - pomyśl o podstronach, które ma większość stron tego rodzaju, takich jak strona główna, wyniki wyszukiwania, strona produktu, koszyk albo konto. Świetnym źródłem jest audyt konkurencji: zapisz, które podstrony pojawiają się na stronie prawie każdego konkurenta.
2. **Wróć do swoich badań** - przejrzyj persony, historie użytkowników i mapy ścieżki użytkownika. Wypisz działania, które użytkownicy wykonują, żeby osiągnąć swoje cele, i upewnij się, że każde działanie ma swoją podstronę.
3. **Wybierz strukturę** - zdecyduj, czy strona będzie hierarchiczna, sekwencyjna, macierzowa, bazodanowa, czy będzie połączeniem kilku z nich. Jeśli zaczynasz od typowej struktury, możesz skorzystać z gotowego szablonu mapy witryny.
4. **Zacznij od strony głównej** - umieść ją na górze. To punkt wejścia i pierwsze wrażenie, jakie robi twój produkt.
5. **Dodaj główne kategorie** - dodaj strony nadrzędne w rzędzie pod stroną główną. Nadawaj im krótkie i jasne nazwy, bo staną się linkami nawigacji.
6. **Dodaj podkategorie** - dodaj strony podrzędne pod każdą stroną nadrzędną. Potem spójrz na całość z dystansu i poszukaj podstron, które można połączyć, przemianować, przenieść albo usunąć.

Spodziewaj się, że mapa witryny będzie się zmieniać. To narzędzie do planowania, a nie umowa, i będziesz ją dopracowywać w trakcie szkicowania i testowania.

## Płaskie i głębokie mapy witryn

Wielkość strony internetowej wpływa na kształt jej mapy witryny:

- **Płaska mapa witryny** (ang. *flat sitemap*) - ma najwyżej cztery poziomy od góry do dołu. Jest typowa dla małych stron, które mają mniej niż około 100 podstron.
- **Głęboka mapa witryny** (ang. *deep sitemap*) - ma pięć lub więcej poziomów. Jest typowa dla bardzo dużych stron z tysiącem podstron albo więcej, takich jak duże sklepy internetowe albo serwisy informacyjne.

Płaska struktura jest zwykle wygodniejsza dla użytkowników, bo do każdej podstrony docierają w kilku kliknięciach. Jeśli twoja mapa witryny robi się głęboka, sprawdź, czy da się połączyć niektóre poziomy.

## Przykład: mapa witryny strony WashSlot

Projektant buduje mapę witryny w sześciu krokach.

1. **Typowe podstrony** - wszystkie strony konkurentów mają podstronę ze stanem pralek na żywo, kalendarz rezerwacji, sekcję konta i podstronę z zasadami. Dwie z nich mają też podstronę z aktualnościami.
2. **Badania** - mapy ścieżki użytkownika pokazują, że mieszkańcy najpierw sprawdzają stan pralek, potem rezerwują, a później sprawdzają swoje rezerwacje. Grace często pyta dozorcę o regulamin domu, a Kofi ma trudności z nazwami programów wydrukowanymi na pralkach.
3. **Struktura** - hierarchiczna, z sekwencyjnym procesem rezerwacji i przewodnikiem z wyszukiwarką, tak jak opisano na stronie [Struktury stron internetowych](./02-website-structures).
4. **Strona główna** - strona główna pokazuje stan wszystkich urządzeń na żywo, bo to pierwsza rzecz, którą chce poznać każda persona.
5. **Główne kategorie** - „Zarezerwuj termin”, „Moje rezerwacje”, „Przewodnik po pralni”, „Ogłoszenia”, „Zgłoś problem” i „Konto”.
6. **Podkategorie** - dodane pod każdą kategorią, tak jak poniżej.

```
Strona główna (stan urządzeń na żywo)
├── Zarezerwuj termin
│   ├── Wybór dnia i godziny
│   ├── Podsumowanie
│   └── Potwierdzenie
├── Moje rezerwacje
│   ├── Nadchodzące
│   └── Wcześniejsze
├── Przewodnik po pralni
│   ├── Urządzenia i programy
│   ├── Regulamin domu
│   └── Szukaj w przewodniku
├── Ogłoszenia
├── Zgłoś problem
└── Konto
    ├── Profil i numer mieszkania
    ├── Przypomnienia
    └── Wyświetlanie i język
```

Stopka, która pojawia się na każdej podstronie, zawiera linki do stron „Kontakt z zarządem”, „Deklaracja dostępności” i „Prywatność”.

Mapa ma tylko trzy poziomy, więc jest płaska. Podczas jej rysowania projektant zauważa dwa problemy. Po pierwsze, „Ogłoszenia” nie miały jak dotrzeć do mieszkańców, którzy rzadko odwiedzają stronę, więc najnowsze ogłoszenie pojawi się też na stronie głównej. Po drugie, we wczesnej wersji były osobne podstrony „Pralki” i „Suszarki”, które projektant łączy w „Urządzenia i programy”, bo mieszkańcy traktują je jako jeden temat.

::: tip Najważniejsze
Mapa witryny pokazuje, jak podstrony strony internetowej są uporządkowane według ważności, połączone i nazwane. Wcześnie ujawnia brakujące albo niepotrzebne podstrony, pomaga wyszukiwarkom indeksować stronę i wspiera dostępność. Buduj ją na podstawie typowych podstron i swoich badań: zacznij od strony głównej, dodaj strony nadrzędne, a potem strony podrzędne. Małe strony mają zwykle płaskie mapy witryn z najwyżej czterema poziomami.
:::
