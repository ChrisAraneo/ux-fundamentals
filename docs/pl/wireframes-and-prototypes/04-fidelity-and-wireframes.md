# Wierność i wireframe'y

## Czym jest projekt?

W tym kursie **projekt** (ang. *design*) to rozwiązanie prawdziwego problemu, który mają użytkownicy. Dobry projekt zawsze stawia użytkownika w centrum, na każdym poziomie szczegółowości.

## Wierność

**Wierność** (ang. *fidelity*) opisuje, jak bardzo projekt przypomina gotowy produkt wyglądem i działaniem. Możesz wyobrazić ją sobie jako pokrętło, które przekręcasz w górę lub w dół:

- **Niska wierność (lo-fi)** (ang. *low fidelity*) - prosto, z grubsza i bez dopracowania. Sięgnij po nią, kiedy chcesz szybko naszkicować wiele pomysłów i zostawić sobie otwarte możliwości.
- **Wysoka wierność (hi-fi)** (ang. *high fidelity*) - szczegółowo i starannie, blisko prawdziwego produktu. Sięgnij po nią, kiedy chcesz, żeby użytkownicy zareagowali na coś, co wydaje się prawdziwe, i przekazali ci konkretne uwagi.

Pomyśl o planowaniu ogrodu. Szybki szkic ołówkiem z kółkami w miejscu drzew i prostokątami w miejscu rabat to niska wierność. Szczegółowy plan z nazwami roślin, kolorami i ścieżkami narysowanymi w skali to wysoka wierność. Oba są przydatne, tylko w różnych momentach.

Ten rozdział skupia się na projektach niskiej wierności. Z wysoką wiernością popracujesz w jednym z kolejnych rozdziałów.

## Czym jest wireframe?

**Wireframe** (ang. *wireframe*) to prosty szkielet ekranu cyfrowego, na przykład widoku aplikacji albo strony internetowej. Składa się głównie z linii, prostych kształtów i odrobiny tekstu, przez co wygląda, jakby był zbudowany z drutu.

### Po co tworzyć wireframe'y?

Wireframe'y mają trzy główne cele:

1. **Ustalają podstawową strukturę** - pokazują, jak zorganizowana jest strona, zanim zostaną dodane kolory, obrazy i czcionki. Zadaj sobie pytanie: „Jak mogę ułożyć te informacje, żeby miały sens dla użytkowników?”
2. **Pokazują zamierzoną funkcję** - przeznaczenie każdego elementu powinno wynikać ze sposobu, w jaki go narysowano. Przycisk powinien wyglądać jak coś, co można nacisnąć.
3. **Oszczędzają czas i pieniądze** - sprawdzanie różnych układów za pomocą wireframe'ów idzie szybko, a uzgodniony wireframe później prowadzi cały zespół.

### Zalety tworzenia wireframe'ów

Niektóre zespoły chcą pominąć wireframe'y, żeby zaoszczędzić czas, ale zwykle kosztuje to później więcej czasu. Wireframe'y:

- **Pokazują, które elementy powinny znaleźć się na stronie** - kiedy zespół widzi je rozmieszczone, łatwiej mu zdecydować, czy czegoś brakuje albo czy coś jest zbędne.
- **Pozwalają wcześnie wychwycić problemy** - można zauważyć brakujące, źle umieszczone lub chaotycznie ułożone elementy oraz mylącą nawigację między stronami.
- **Pomagają interesariuszom skupić się na strukturze** - bez kolorów i obrazów do omawiania rozmowa dotyczy układu i funkcji.
- **Ograniczają poprawki** - kiedy inżynierowie i interesariusze wcześnie uzgodnią wireframe'y, później potrzeba mniej zmian.
- **Ułatwiają iterowanie** - można szybko sprawdzić wiele wariantów projektu.

## Jak narysować wireframe

Nie musisz być artystą. Rysowanie to umiejętność, która rozwija się dzięki praktyce, a w UX dobry wireframe polega na **jasnym przekazywaniu informacji**, a nie na pięknie. Niektórzy projektanci rysują swobodne, niechlujne szkice, inni używają linijki. Oba sposoby są w porządku.

### Elementy

**Elementy** (ang. *elements*) to części składowe projektu. Prawie każdy wireframe składa się tylko z trzech z nich: linii, kształtów (prostokątów i kół) i tekstu.

### Standardy branżowe

Żeby wireframe'y były łatwe do odczytania dla każdego, projektanci przestrzegają kilku powszechnych konwencji, czyli **standardów branżowych** (ang. *industry standards*):

- **Tekst** - akapity rysuj jako poziome linie, a wypisuj tylko krótkie etykiety i nagłówki.
- **Obrazy** - każdy obraz, zdjęcie, ilustrację czy ikonę rysuj jako prostokąt (albo koło) przekreślony znakiem X.
- **Wezwania do działania** (ang. *calls to action*, CTA) - przyciski rysuje się jako prostokąty albo koła, w zależności od kształtu przycisku.

### Typowe części interfejsu

Te części pojawiają się na wielu ekranach aplikacji i warto znać ich nazwy:

- **Górny pasek** (ang. *top bar*) - pasek na górze ekranu z tytułem ekranu i związanymi z nim działaniami.
- **Ikona menu nawigacji** (ang. *navigation menu icon*) - trzy poziome linie (często nazywane ikoną „hamburgera”, ang. *hamburger*), które otwierają menu główne.
- **Awatar** (ang. *avatar*) - koło z prostą ikoną postaci, które reprezentuje profil użytkownika.
- **Separator** (ang. *divider*) - cienka linia, która oddziela pozycje na liście albo grupuje treści.
- **Karuzela** (ang. *carousel*) - zestaw obrazów lub kart, które użytkownicy mogą przewijać przesunięciem palca, jeden po drugim.
- **Wskaźnik paginacji** (ang. *pagination indicator*) - małe kropki, które pokazują, ile elementów ma karuzela i który z nich jest widoczny.
- **Pływający przycisk akcji** (ang. *floating action button*) - okrągły przycisk, zwykle w dolnym rogu, do głównego działania na ekranie.
- **Dolny pasek nawigacji** (ang. *bottom navigation bar*) - pasek na dole z ikonami głównych sekcji aplikacji.

### Przykład: ekran główny WashSlot

Oto jak krok po kroku możesz narysować ekran główny WashSlot:

1. **Ramka** - narysuj wysoki prostokąt jako ekran telefonu, na tyle duży, żeby dało się w nim rysować.
2. **Górny pasek** - narysuj pasek na górze. Dodaj ikonę menu nawigacji po lewej, tytuł „WashSlot” na środku i awatar po prawej.
3. **Lista pralek** - pod górnym paskiem narysuj cztery wiersze oddzielone separatorami. W każdym wierszu narysuj po lewej koło z X (ikona pralki), etykietę od „Pralka 1” do „Pralka 4” i krótką poziomą linię w miejscu tekstu ze stanem pralki.
4. **Główne działanie** - przy dolnej krawędzi narysuj szeroki prostokąt z etykietą „Zarezerwuj termin”.
5. **Dolna nawigacja** - narysuj na dole pasek z trzema małymi kwadratami w miejscu ikon i krótkimi etykietami pod nimi: „Pralki”, „Zgłoś” i „Moje rezerwacje”.

To wszystko: linie, kształty i kilka słów.

## Ćwiczenie: narysuj wireframe istniejącej aplikacji

Świetnym sposobem na naukę jest praca od końca. Otwórz aplikację, z której często korzystasz, na przykład aplikację pogodową albo muzyczną, i narysuj wireframe jej głównego ekranu:

1. **Narysuj ramkę** - jej rozmiar powinien mniej więcej odpowiadać proporcjom ekranu, żeby elementy zmieściły się w podobnych miejscach.
2. **Dodaj kluczowe elementy** - używaj linii i prostych kształtów i stosuj opisane wyżej standardy branżowe.
3. **Przejrzyj cały rysunek** - spójrz na niego z dystansu i sprawdź, czy wszystkie kluczowe elementy mieszczą się w ramce, czy nie brakuje czegoś ważnego i czy tekst, obrazy i przyciski są narysowane zgodnie ze standardami.

To końcowe przejrzenie całego rysunku jest ważne. W pracy w ten sam sposób będziesz też przeglądać wireframe'y innych projektantów.

::: tip Najważniejsze
Wierność opisuje, jak blisko projekt jest gotowego produktu. Wireframe'y to szkice niskiej wierności złożone z linii, kształtów i tekstu. Ustalają strukturę, pokazują funkcję każdego elementu i oszczędzają czas. Stosuj proste standardy: linie zamiast tekstu, prostokąty z X zamiast obrazów oraz prostokąty lub koła zamiast przycisków.
:::
