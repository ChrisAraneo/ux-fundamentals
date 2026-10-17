# Układy responsywne i punkty przerwania

## Jedna strona, kilka układów

Spróbuj tego: otwórz na komputerze dowolny serwis informacyjny i powoli zwężaj okno przeglądarki. W pewnym momencie kolumny przeskoczą w nowy układ, linki nawigacji schowają się za ikoną menu, a obrazy się zmniejszą. Otwórz tę samą stronę na telefonie, a zobaczysz jeszcze trzeci układ. Tak działa **układ responsywny** (ang. *responsive layout*).

Nie musisz projektować osobnej wersji dla każdego urządzenia, bo rozmiarów ekranów jest o wiele za dużo. Zamiast tego projektujesz kilka **kluczowych rozmiarów** (ang. *key sizes*) i opisujesz, jak treść przesuwa się między nimi. Programiści budują potem elastyczny układ, który rozciąga się pomiędzy tymi rozmiarami.

## Punkty przerwania

**Punkt przerwania** (ang. *breakpoint*) to szerokość ekranu, przy której układ się zmienia, bo dotychczasowe rozmieszczenie elementów przestaje dobrze pasować. Poniżej punktu przerwania obowiązuje jeden układ, powyżej - inny. Punkty przerwania zapisuje się w kodzie strony, ale decyzja, gdzie się znajdą i co dzieje się przy każdym z nich, należy do projektanta.

Większość zespołów projektuje dla trzech grup ekranów:

| Grupa | Typowe szerokości | Typowa siatka układu |
| --- | --- | --- |
| Telefon | do około 600 px | 4 kolumny |
| Tablet | od około 600 do 1024 px | 8 kolumn |
| Komputer stacjonarny i laptop | powyżej około 1024 px | 12 kolumn |

Te liczby to popularne punkty wyjścia, a nie zasady. Niektóre systemy projektowe używają więcej punktów przerwania, a najlepsze punkty przerwania to te szerokości, przy których **twoja** treść zaczyna wyglądać na ściśniętą albo rozciągniętą. Pamiętaj też, że tablet trzymany poziomo albo laptop z oknem przeglądarki na pół ekranu może trafić do innej grupy, niż się spodziewasz.

## Rozrysowanie układu na papierze w kratkę

Projektowanie responsywne też zaczyna się na papierze. Weź wireframe desktopowy, który wcześniej powstał z połączenia najlepszych pomysłów, i przerysuj go dla mniejszych ekranów na **papierze w kratkę** (ang. *grid paper*), czyli papierze z nadrukiem równomiernie rozmieszczonych kropek albo kratek. Siatka pomaga zachować spójne proporcje, kiedy zmniejszasz, układasz jeden pod drugim albo przesuwasz elementy.

1. **Zacznij od gotowego wireframe'u desktopowego** - traktuj go jako największą wersję.
2. **Narysuj mniejsze obrysy** - narysuj obrys tabletu i obrys telefonu. Telefon jest dużo węższy, mniej więcej o jedną trzecią szerokości wersji desktopowej, i jest wyższy niż szerszy. Jeśli długa strona na telefon nie mieści się na jednej kartce, sklej taśmą dwie kartki.
3. **Przenieś elementy** - korzystając z siatki, umieść i przeskaluj każdy element z wersji desktopowej w mniejszych obrysach.
4. **Uwzględnij rozmiary pośrednie** - pomyśl o małym laptopie, tablecie trzymanym poziomo i oknie przeglądarki, które nie zajmuje całego ekranu.
5. **Powtórz dla kluczowych podstron** - rozrysuj stronę główną i każdą podstronę z głównego przepływu użytkownika, a nie tylko stronę główną.

### Pytania, które warto zadać podczas rozrysowywania

- **Co musi się przesunąć?** - zdecyduj, które elementy muszą zostać **nad linią zgięcia** (ang. *above the fold*), czyli w części strony widocznej bez przewijania, na mniejszych ekranach, a które mogą przesunąć się niżej.
- **Jak powinny skalować się obrazy?** - zdecyduj, czy **obraz główny** (ang. *hero image*) zostaje duży na każdym ekranie, zostaje przycięty do innego kształtu, czy zastępuje go mniejszy.
- **Jak zmienia się nawigacja?** - rząd linków u góry strony desktopowej zwykle wymaga innego rozwiązania na telefonie, na przykład ikony menu.
- **Co można usunąć?** - niektóre ozdobne elementy i dodatkowy tekst można usunąć na małych ekranach, o ile nikt nie traci dostępu do ważnych treści albo funkcji.
- **Ile kolumn się zmieści?** - na przykład cztery kolumny na komputerze, trzy na tablecie i dwie albo jedna na telefonie.

## Najpierw desktop czy najpierw mobile?

Są dwa popularne punkty wyjścia. **Podejście „najpierw desktop”** (ang. *desktop first*) oznacza, że najpierw projektujesz duży układ, a potem upraszczasz go dla mniejszych ekranów. Tak właśnie postępujemy w tym rozdziale, bo dodajesz stronę internetową do istniejącej aplikacji. **Podejście „najpierw mobile”** (ang. *mobile first*) oznacza, że zaczynasz od najmniejszego ekranu i dodajesz treści i kolumny, w miarę jak przybywa miejsca. Zaczynanie od małego ekranu zmusza do skupienia się na tym, co naprawdę niezbędne, dlatego wiele zespołów woli to podejście przy nowych produktach. Oba się sprawdzają; ważne, żeby zaprojektować i sprawdzić każdy kluczowy rozmiar, zanim zacznie się programowanie.

## Układy responsywne poprawiają doświadczenie

Układ, który się nie dostosowuje, powoduje problemy, które pewnie znasz z własnego doświadczenia: przycisk ucięty na krawędzi ekranu, tekst, który trzeba powiększać palcami, żeby go przeczytać, albo strona, którą przewija się na boki. Zaplanowanie punktów przerwania zapobiega tym problemom, zanim ktokolwiek napisze kod. Podczas planowania sprawdź, jak strony twoich konkurentów i strony, które podziwiasz, zmieniają się na różnych urządzeniach, i zanotuj, co działa, a co nie.

*Przykład z WashSlot:* projektant rozrysowuje stronę główną WashSlot w trzech rozmiarach na papierze w kropki:

| Element | Komputer | Tablet | Telefon |
| --- | --- | --- | --- |
| Główna nawigacja | Linki w nagłówku strony | Linki w nagłówku strony, a „Przewodnik po pralni” i „Ogłoszenia” przeniesione do menu „Więcej” | Ikona menu |
| Karty pralek | 6 w jednym rzędzie | Po 3 w 2 rzędach | Po 2 w 3 rzędach |
| Następna rezerwacja i CTA | 2 kolumny obok siebie | 2 kolumny obok siebie | Jedno pod drugim: najpierw CTA, potem następna rezerwacja |
| Ogłoszenia | 3 karty w rzędzie | 2 karty i link „Zobacz wszystkie” | 1 karta i link „Zobacz wszystkie” |
| Stopka | 3 kolumny linków | 3 kolumny linków | 1 kolumna |

Na telefonie przycisk „Zarezerwuj termin” przesuwa się nad następną rezerwację, bo Kofi zwykle otwiera stronę na telefonie, żeby szybko coś zarezerwować przed zmianą w pracy. Projektant szkicuje też układ dla tabletu w pralni, który wisi na ścianie w orientacji poziomej: korzysta on z układu tabletowego, ale z bardzo dużymi kartami pralek, które da się odczytać z odległości dwóch metrów.

::: tip Najważniejsze
Układ responsywny zmienia się w punktach przerwania, czyli przy szerokościach ekranu, przy których dotychczasowe rozmieszczenie elementów przestaje działać. Zaprojektuj kilka kluczowych rozmiarów, zwykle telefon, tablet i komputer, i rozrysuj je na papierze w kratkę, decydując, co się przesuwa, skaluje, zmienia albo znika. Niezależnie od tego, czy zaczynasz od desktopu, czy od mobile, sprawdź każdy kluczowy rozmiar, zanim zacznie się programowanie.
:::
