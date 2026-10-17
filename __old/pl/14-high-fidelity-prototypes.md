# Prototypy wysokiej wierności

## Prototypy wysokiej wierności

Prototyp to wczesny model produktu, który pokazuje jego działanie. **Prototypy wysokiej wierności** (hi-fi) to szczegółowe, interaktywne wersje projektów, które wyglądem i działaniem bardzo przypominają finalny produkt.

## Interaktywne mockupy

Prototypy wysokiej wierności wykorzystują pracę wykonaną już przy mockupach i czynią ją interaktywną. Pamiętaj, że mockupy skupiają się na warstwie wizualnej, a **prototypy skupiają się na funkcjonalności**.

## Kiedy prototyp jest gotowy - dobre praktyki

Prototyp wysokiej wierności jest gotowy, gdy dopracowane są wszystkie poniższe elementy:

1. **Elementy wizualne** - zastąp wszystkie treści zastępcze realistycznymi, dopracowanymi elementami wizualnymi, aby wiernie odwzorować działanie prawdziwej aplikacji.
2. **Nawigacja** - zadbaj o to, by użytkownicy mogli płynnie przejść główny przepływ użytkownika (user flow). Dodaj czytelne, dostępne elementy nawigacji, które pozwalają przechodzić między ekranami i wskazują początek oraz koniec ścieżki.
3. **Interaktywność** - połącz interaktywne elementy między ekranami za pomocą hotspotów i połączeń, aby dodać gesty i ruch, dzięki którym prototyp działa.
4. **Dostępność** - wdróż standardy dostępności: dodaj adnotacje z kolejnością nawigacji, hierarchiczne znaczniki nagłówków (H1-H3), opisowe etykiety, kontrast kolorów zgodny z WCAG i udokumentowane zachowanie responsywne.

## Elementy wizualne

**Dopracuj wszystkie elementy wizualne** w prototypie, w tym kolory, zdjęcia, ikony, typografię, treści tekstowe, ilustracje, grafiki i linki zewnętrzne.

Używaj **realistycznych treści** zamiast treści zastępczych, aby odwzorować działanie prawdziwej aplikacji.

Upewnij się, że wszystkie treści zastępcze zostały zastąpione realistycznymi, zdjęcia, ikony i grafiki są dopracowane, typografia jest spójna w całym projekcie, a linki zewnętrzne działają.

## Nawigacja

Dopracuj nawigację dla przepływu użytkownika, który chcesz przetestować. Nawigacja pomaga użytkownikom odkrywać produkt i czerpać z niego przyjemność. Bez dobrej nawigacji użytkownicy będą mieć trudności albo przestaną korzystać z produktu.

**Główny przepływ użytkownika** powinien być już ustalony w prototypach niskiej wierności.

**Pytania, które warto sobie zadać**:
- Jak użytkownik przechodzi z jednego ekranu na następny?
- Jak łatwo znaleźć ikony nawigacyjne (strzałki wstecz, przyciski X)?
- W którym momencie kończy się ścieżka użytkownika?
- Czy na każdym ekranie są odpowiednie przyciski lub ikony?

Sprawdź, czy użytkownicy mogą przechodzić między ekranami, ikony nawigacyjne są dobrze widoczne, ścieżka użytkownika ma wyraźny początek i koniec, a strzałki wstecz i przyciski wyjścia są na swoim miejscu.

## Interaktywność

Dodaj interakcje między wszystkimi ekranami, aby prototyp działał. Interaktywność obejmuje gesty i ruch.

**Tworzenie połączeń w Figmie**:
1. **Wybierz hotspot** - element, z którym użytkownik wchodzi w interakcję (przycisk, ikona, nagłówek itp.)
2. **Utwórz połączenie** - strzałkę (nazywaną też „noodle”), która łączy hotspot z miejscem docelowym
3. **Wskaż miejsce docelowe** - punkt, w którym kończy się połączenie (musi to być ramka (frame) lub ekran, a nie element wewnątrz ramki)

Upewnij się, że wszystkie przyciski i elementy interaktywne są połączone, hotspoty są poprawnie zdefiniowane, połączenia prowadzą do właściwych miejsc, a ramka startowa odpowiada pierwszej akcji użytkownika.

## Dostępność

### Wytyczne dotyczące dostępności treści internetowych (WCAG)

Dokumenty WCAG wyjaśniają, jak sprawić, by treści internetowe były bardziej dostępne dla osób z niepełnosprawnościami. Większość standardów dotyczy takiego wykorzystania tekstu, dźwięków i obrazów, aby wspierały jak najwięcej użytkowników.

Istnieją **trzy sposoby na zwiększenie dostępności projektów stron internetowych**.

### Adnotacje

**Adnotacje** to znaczniki umieszczane obok interaktywnych elementów interfejsu (np. przycisków z wezwaniem do działania (CTA)), które pokazują kolejność nawigacji.

**Cel**:
- Wskazują **liniową kolejność fokusu** (focus order), czyli **kolejność przechodzenia** po elementach, dla technologii wspomagających, takich jak czytniki ekranu
- Określają kolejność, w jakiej użytkownik przechodzi między elementami klawiszem Tab na klawiaturze zamiast ekranu dotykowego lub myszy

**Jak ich używać**:
- Oznaczaj kolejność nawigacji numerami w kółkach
- Pokaż liczbę naciśnięć klawiszy lub klawisza Tab potrzebną, by przejść od jednego elementu do następnego
- Standardowa kolejność nawigacji: od lewego górnego do prawego dolnego rogu
- Oznacz adnotacjami wszystkie elementy, które nie mieszczą się w standardowej kolejności

**Kto z nich korzysta**: Programiści wykorzystują adnotacje, aby wdrożyć poprawną kolejność nawigacji.

### Hierarchiczne nagłówki

**Hierarchia** to zasada projektowania wizualnego, która porządkuje elementy na stronie według ważności.

**Nagłówki** to nazwane sekcje, wyróżnione różnymi rozmiarami czcionki (większymi niż tekst główny), które pokazują hierarchię i pomagają użytkownikom poruszać się po stronie.

**Znaczniki nagłówków w HTML**:
- **H1** - najważniejszy nagłówek (często używany jako tytuł)
- **H2** - podtytuły lub wyróżnione bloki
- **H3, H4 itd.** - kolejne poziomy hierarchii

**Dlaczego są ważne**: Odpowiednie znaczniki nagłówków pozwalają czytnikom ekranu zrozumieć hierarchię strony i ułatwiają użytkownikom nawigację za pomocą menu czytnika ekranu.

### Etykiety dostępności

**Etykiety** (nazywane też komunikatami czytnika ekranu) dodają opisowy tekst do interaktywnych elementów interfejsu na stronie.

**Co powinny wskazywać etykiety**:
- Przeznaczenie kontrolki
- Typ lub rolę kontrolki

**Przykład**: Pływający przycisk akcji w Gmailu ma etykietę „compose” (utwórz), a jego typ to „button” (przycisk).

**Grupowanie podobnych kontrolek**:
- Grupuj powiązane kontrolki (np. pola wyboru), aby użytkownicy technologii wspomagających rozumieli zależności między nimi
- Pomaga to użytkownikom szybko przechodzić do zgrupowanych elementów i z nich wychodzić

**Kto z nich korzysta**: Programiści wykorzystują etykiety, aby wybrać najlepszy sposób wdrożenia zamierzonego doświadczenia użytkownika.

## Dodatkowe kwestie dotyczące dostępności

### Dostępne kolory i kontrast

**Współczynnik kontrastu luminancji**: miara kontrastu między kolorem tła a kolorem tekstu.

**Dobre praktyki**:
- Jasne tło z ciemnym tekstem LUB
- Ciemne tło z jasnym tekstem

**Połączenia kolorów, których należy unikać**:
- Czerwony z zielonym (problematyczne dla osób z daltonizmem)
- Podobne kolory, np. jasnoszary i biały (problem dla osób z obniżoną wrażliwością na kontrast)

### Dostępność responsywna

Projektując responsywne strony internetowe:
- Zadbaj o dostępność na wszystkich rozmiarach ekranu
- Strony powinny automatycznie zmieniać rozmiar i układ, gdy użytkownik powiększa widok lub zwiększa rozmiar czcionki
- Unikaj nakładania się elementów po powiększeniu sekcji
- Przygotuj kilka wersji mockupu: widok domyślny i widok powiększony

**Dlaczego to ważne**: Przekaż programistom różne zachowania responsywne, aby wymagania dotyczące powiększania i dostępności zostały uwzględnione przed rozpoczęciem pełnego wdrożenia.

## Zasoby i standardy dotyczące dostępności

- **WCAG** - Web Content Accessibility Guidelines (wytyczne dotyczące dostępności treści internetowych)
- **ARIA** - Accessible Rich Internet Applications (dostępne bogate aplikacje internetowe)
- **HTML** - HyperText Markup Language (używany do znaczników nagłówków i struktury)
- **Material Design** - wytyczne Google dotyczące projektowania dostępnego
- **The A11Y Project** - zasoby społeczności poświęcone dostępności cyfrowej
- **WebAIM** - wytyczne dotyczące wymagań w zakresie kontrastu i kolorów

## Lista kontrolna dostępności

Upewnij się, że kolejność nawigacji jest oznaczona adnotacjami, hierarchiczne nagłówki (H1, H2, H3) są oznaczone, elementy interaktywne mają etykiety, kontrast kolorów spełnia standardy WCAG, a zachowanie responsywne jest udokumentowane.

## Tworzenie prototypów wysokiej wierności w Figmie

### Krok 1: rozmieść mockupy

- Skopiuj i wklej mockupy na stronę z prototypem hi-fi
- Ułóż ekrany zgodnie z przepływem użytkownika
- Rozmieść je w kolejności, w jakiej użytkownicy będą przechodzić przez aplikację

**Wskazówka**: Utwórz prototyp hi-fi w tym samym pliku, w którym masz już projekty (wireframe'y i mockupy), dodając nową stronę.

### Krok 2: połącz ekrany

1. Przełącz się na tryb **Prototype** w prawym panelu bocznym
2. Zaznacz element, który ma być hotspotem
3. Kliknij **węzeł prototypu** (niebieskie kółko ze znakiem plusa)
4. Przeciągnij strzałkę do ramki docelowej

**Ważne**: Pierwsze utworzone połączenie wyznacza ramkę startową prototypu. Upewnij się, że pierwsze połączenie odpowiada pierwszej akcji, jaką ma wykonać użytkownik.

### Krok 3: dodaj szczegóły interakcji

Dodaj do połączeń konkretne interakcje i zachowania (omówione w tematach zaawansowanych).

### Krok 4: dostosuj animację

Dopracuj ruch i przejścia między ekranami.

### Krok 5: uzupełnij wszystkie ekrany

Kontynuuj tworzenie połączeń na wszystkich ekranach w przepływie użytkownika.

### Krok 6: udostępnij swoją pracę

Wyeksportuj lub udostępnij prototyp do testów i zbierania opinii.
