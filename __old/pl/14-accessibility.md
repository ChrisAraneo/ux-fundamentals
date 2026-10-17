# Dostępność

## Wytyczne dotyczące dostępności treści internetowych (WCAG)

Dokumenty WCAG wyjaśniają, jak sprawić, by treści internetowe były bardziej dostępne dla osób z niepełnosprawnościami. Większość standardów dotyczy takiego wykorzystania tekstu, dźwięków i obrazów, aby wspierały jak najwięcej użytkowników.

Istnieją **trzy sposoby na zwiększenie dostępności projektów stron internetowych**.

## Adnotacje

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

## Hierarchiczne nagłówki

**Hierarchia** to zasada projektowania wizualnego, która porządkuje elementy na stronie według ważności.

**Nagłówki** to nazwane sekcje, wyróżnione różnymi rozmiarami czcionki (większymi niż tekst główny), które pokazują hierarchię i pomagają użytkownikom poruszać się po stronie.

**Znaczniki nagłówków w HTML**:
- **H1** - najważniejszy nagłówek (często używany jako tytuł)
- **H2** - podtytuły lub wyróżnione bloki
- **H3, H4 itd.** - kolejne poziomy hierarchii

**Dlaczego są ważne**: Odpowiednie znaczniki nagłówków pozwalają czytnikom ekranu zrozumieć hierarchię strony i ułatwiają użytkownikom nawigację za pomocą menu czytnika ekranu.

## Etykiety dostępności

**Etykiety** (nazywane też komunikatami czytnika ekranu) dodają opisowy tekst do interaktywnych elementów interfejsu na stronie.

**Co powinny wskazywać etykiety**:
- Przeznaczenie kontrolki
- Typ lub rolę kontrolki

**Przykład**: Pływający przycisk akcji w Gmailu ma etykietę „compose” (utwórz), a jego typ to „button” (przycisk).

**Grupowanie podobnych kontrolek**:
- Grupuj powiązane kontrolki (np. pola wyboru), aby użytkownicy technologii wspomagających rozumieli zależności między nimi
- Pomaga to użytkownikom szybko przechodzić do zgrupowanych elementów i z nich wychodzić

**Kto z nich korzysta**: Programiści wykorzystują etykiety, aby wybrać najlepszy sposób wdrożenia zamierzonego doświadczenia użytkownika.

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
