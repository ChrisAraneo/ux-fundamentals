# Przepływy użytkownika

## Czym jest przepływ użytkownika?

**Przepływ użytkownika** (ang. *user flow*) to mapa drogi, jaką typowy użytkownik przechodzi w aplikacji lub na stronie internetowej, żeby wykonać jedno zadanie, od pierwszego do ostatniego kroku. Pokazuje każde działanie, które wykonuje użytkownik, każdy ekran, który widzi, i każdą decyzję, którą podejmuje po drodze.

Pomyśl o dobrym kelnerze. Zanim o to poprosisz, przynosi wodę do kawy, bo wie, że tego właśnie większość gości chce w następnej kolejności. Projektanci robią coś podobnego: na podstawie badań przewidują, czego użytkownicy będą potrzebować na każdym kroku, i planują wokół tego produkt. Przepływ użytkownika to sposób na zapisanie tego planu.

Przepływy użytkownika tworzy się **przed** projektowaniem ekranów. Dają zespołowi ogólny obraz tego, jak działa cały produkt, dzięki czemu wiadomo, jakie ekrany są potrzebne i jak się ze sobą łączą. Przepływ użytkownika nie zawiera gotowych treści. Używa prostych kształtów i krótkich etykiet.

## Na jakie pytania odpowiada przepływ użytkownika

Podczas rysowania przepływu użytkownika decydujesz o trzech rzeczach:

- **Działania** (ang. *actions*) - kroki, które użytkownicy wykonują w produkcie.
- **Decyzje** (ang. *decisions*) - wybory, przed którymi użytkownicy stają po drodze.
- **Ekrany** (ang. *screens*) - to, co użytkownicy widzą po każdym działaniu lub wyborze.

## Kształty w przepływie użytkownika

W przepływach użytkownika zwykle używa się tych samych kształtów co w klasycznych schematach blokowych. Znaczenie kształtów nie jest uniwersalne, więc udostępniając przepływ, zawsze dodawaj legendę. Większość zespołów stosuje jednak taką konwencję:

| Kształt | Znaczenie | Przykład |
| --- | --- | --- |
| **Koło** | Działanie, które wykonuje użytkownik | „Otwórz aplikację”, „Stuknij Zarezerwuj termin” |
| **Prostokąt** | Ekran, który widzi użytkownik | „Ekran główny”, „Ekran potwierdzenia” |
| **Romb** | Decyzja, którą podejmuje użytkownik | „Czy ten termin pasuje?” |
| **Strzałka** | Kierunek przepływu | Ciągłe strzałki prowadzą dalej, a przerywane wracają do wcześniejszego kroku |

## Jak stworzyć przepływ użytkownika

### 1. Określ główne zadanie

Zacznij od swojego [opisu celu](../design-process/13-ideation-and-goal-statements) (ang. *goal statement*). Mówi on, co najważniejszego użytkownicy powinni móc zrobić. Zamień go w jedno jasne zadanie użytkownika. Dobre zadanie mówi też, kiedy użytkownikowi się udało.

*Przykład z WashSlot:* opis celu mówi o sprawdzaniu dostępności i rezerwowaniu z wyprzedzeniem, więc główne zadanie brzmi: **„Zarezerwuj wolną pralkę na konkretną godzinę”.** Zadanie jest wykonane, gdy użytkownik zobaczy potwierdzenie rezerwacji.

### 2. Wypisz kroki

Zapisz każdy krok od **punktu wejścia** (ang. *entry point*), czyli miejsca, w którym użytkownicy zaczynają (zwykle jest to otwarcie aplikacji), do wykonania zadania.

*Przykład z WashSlot:*

1. Otwórz aplikację.
2. Zobacz ekran główny z aktualnym stanem wszystkich pralek.
3. Stuknij „Zarezerwuj termin”.
4. Zobacz ekran rezerwacji z pralkami i godzinami.
5. Wybierz pralkę i godzinę.
6. Zdecyduj: czy ten termin pasuje? Jeśli nie, wybierz ponownie.
7. Zobacz ekran podsumowania.
8. Zdecyduj: dodać przypomnienie przed końcem prania? Tak czy nie.
9. Stuknij „Potwierdź”.
10. Zobacz ekran potwierdzenia.

### 3. Narysuj diagram

Zamień listę w diagram, używając opisanych wyżej kształtów. Postaw na prostotę. Celem jest pokazanie najkrótszej i najjaśniejszej drogi od punktu wejścia do celu.

```
(Otwórz aplikację) ──▶ [Ekran główny: stan pralek] ──▶ (Stuknij „Zarezerwuj termin”)
                                                             │
                                                             ▼
            ┌┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄ nie ┄┄┄┄┄┄┄┄┄┄ [Rezerwacja: pralki i godziny]
            ┆                                                │
            ▼                                                ▼
   (Wybierz pralkę i godzinę) ────────────────▶ <Termin pasuje?> ── tak ──▶ [Podsumowanie]
                                                                                   │
                                                                                   ▼
   [Potwierdzenie] ◀── (Stuknij „Potwierdź”) ◀── <Dodać przypomnienie?> ◀──────────┘
```

W tej tekstowej wersji `( )` oznacza koło (działanie), `[ ]` prostokąt (ekran), a `< >` romb (decyzję). Linia przerywana pokazuje drogę powrotną, gdy użytkownik uzna, że termin mu nie pasuje.

### 4. Sprawdź przepływ

Dobry przepływ użytkownika ma:

- **Wyraźny początek i koniec** - punkt wejścia i wykonane zadanie łatwo znaleźć.
- **Kroki, które łatwo śledzić** - każdy krok logicznie prowadzi do następnego.
- **Poprawne kształty i etykiety** - każdy krok ma właściwy kształt i krótką, jasną nazwę.
- **Połączone kroki** - strzałki łączą wszystkie kroki: linie ciągłe prowadzą dalej, a przerywane wracają.

## Przepływy użytkownika się zmieniają

Przepływ użytkownika nigdy nie jest ostateczny. Jeśli zmienią się twoje badania albo **opis problemu** (ang. *problem statement*), zmieni się też przepływ. Jeśli na przykład testy pokażą, że wielu użytkowników WashSlot najpierw chce przeczytać regulamin domu, możesz dodać boczną gałąź z ekranu głównego do ekranu „Regulamin domu” i z powrotem.

Nie potrzebujesz osobnego przepływu dla każdej możliwej sytuacji. Skup się na przepływach, którymi pójdzie większość użytkowników, i weź pod uwagę najważniejsze [przypadki brzegowe](../design-process/07-user-stories-and-edge-cases) (ang. *edge cases*).

W prawdziwej pracy często zajmiesz się istniejącymi produktami z ustalonymi przepływami. Tam badania mogą pokazać, że ekrany trzeba przeorganizować, połączyć albo usunąć. Niezależnie od tego, czy produkt jest nowy, czy już istnieje, potrzeby użytkowników są zawsze najważniejsze.

::: tip Najważniejsze
Przepływ użytkownika to mapa drogi, którą typowy użytkownik przechodzi, żeby wykonać jedno zadanie. Używaj kół dla działań, prostokątów dla ekranów, rombów dla decyzji i strzałek dla kierunku. Zacznij od opisu celu, wypisz kroki, narysuj diagram i zadbaj o to, żeby był jak najprostszy.
:::
