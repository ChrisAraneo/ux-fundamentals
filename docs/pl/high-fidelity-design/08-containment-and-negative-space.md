# Wydzielanie treści i przestrzeń negatywna

Siatki decydują o tym, gdzie co się znajduje. Wydzielanie treści i przestrzeń negatywna decydują o tym, co do siebie należy, a co jest osobno. Jedno i drugie pomaga użytkownikom zrozumieć ekran na pierwszy rzut oka.

## Wydzielanie treści

**Wydzielanie treści** (ang. *containment*) polega na używaniu wizualnych granic, żeby projekt był uporządkowany i przejrzysty. Linie, kształty i kolor pokazują, gdzie kończy się jedna sekcja, a zaczyna następna. Są cztery główne metody.

### Separatory

**Separator** (ang. *divider*) to jedna cienka linia, która oddziela od siebie sekcje lub elementy, na przykład wiersze na liście ustawień. Separatory są proste i lekkie, więc używaj ich, gdy treść jest powiązana, ale potrzebuje drobnej przerwy.

Żeby utworzyć separator w Figmie, wybierz narzędzie **Line** z menu narzędzi kształtów (lub naciśnij L), przytrzymaj **Shift** podczas przeciągania, żeby linia była prosta, i ustaw jej kolor oraz grubość w sekcji **Stroke**.

### Obramowania

**Obramowania** (ang. *borders*) to ciągłe linie, które tworzą kształt, zwykle prostokąt, wokół elementu lub grupy elementów. Obramowanie wyróżnia treść i pokazuje, że wszystko w jego wnętrzu do siebie należy. Obramowania przycisków i kart pomagają też ludziom zauważyć, że można je stuknąć.

Żeby utworzyć obramowanie w Figmie, narysuj prostokąt wokół treści, usuń jego wypełnienie i dodaj obrys o wybranej grubości.

### Wypełnienie

**Wypełnienie** (ang. *fill*) oznacza pokolorowanie tła kształtu lub sekcji. Kolorowe tło oddziela treść wyraźniej niż separator. Sugeruje, że sekcja to osobny obszar, a nie po prostu kolejny element listy.

Żeby dodać wypełnienie w Figmie, zaznacz warstwę, kliknij ikonę plusa w sekcji **Fill** i wybierz kolor lub styl koloru.

### Cień

**Cienie** (ang. *shadows*) dają wrażenie głębi. Często działają razem z obramowaniem lub wypełnieniem. Są dwa rodzaje cieni:

- **Cień zewnętrzny** (ang. *drop shadow*) - pada na zewnątrz elementu, więc element wygląda, jakby był uniesiony nad stroną. Często stosuje się go przy kartach i pływających przyciskach.
- **Cień wewnętrzny** (ang. *inner shadow*) - pada do wnętrza elementu, więc element wygląda na wciśnięty. Może sugerować, że przycisk jest w tej chwili wciśnięty.

Żeby dodać cień w Figmie, zaznacz warstwę, kliknij ikonę plusa w sekcji **Effects** i wybierz „Drop shadow” albo „Inner shadow”. Kliknij ikonę ustawień efektu, żeby dopasować położenie, rozmycie i kolor cienia. Subtelne cienie zwykle wyglądają lepiej niż mocne.

*Przykład z WashSlot:* w pierwszej makiecie cztery pralki były zwykłymi wierszami tekstu na białym tle i nie było jasne, gdzie kończą się informacje o jednej pralce. Projektant stopniowo wprowadził wydzielanie treści: każda pralka dostała kartę z bladym morskim **wypełnieniem** i delikatnym **cieniem zewnętrznym**, dzięki czemu każda karta wygląda na taką, którą można stuknąć; cienki **separator** oddziela nazwę pralki od pozostałego czasu wewnątrz karty, a nagłówek sekcji „Dzisiaj” dostał jasne **obramowanie** u dołu. Potem to samo zastosowano do kart w „Moich rezerwacjach”, żeby oba ekrany wyglądały jak części jednego produktu.

## Przestrzeń negatywna

**Przestrzeń negatywna** (ang. *negative space*, nazywana też białą przestrzenią, nawet jeśli nie jest biała) to pusty obszar wokół elementów i między nimi. To nie jest zmarnowane miejsce. To jedno z najskuteczniejszych narzędzi, dzięki którym ekran jest spokojny i przejrzysty.

### Dlaczego przestrzeń negatywna jest ważna

1. **Pokazuje, co do siebie należy** - elementy blisko siebie wydają się powiązane, a elementy z większym odstępem wydają się osobne. To zasada Gestalt **bliskości**, którą znasz z [rozdziału 3](../wireframes-and-prototypes/08-gestalt-principles).
2. **Kieruje uwagą** - element otoczony wolną przestrzenią się wyróżnia. Przestrzeń wokół głównego przycisku przyciąga do niego wzrok.
3. **Daje odpocząć oczom** - zatłoczony ekran męczy i przytłacza, a wolna przestrzeń pozwala wygodnie przeglądać treść.
4. **Ułatwia czytanie tekstu** - odstępy między wierszami i akapitami sprawiają, że tekst nie zlewa się w jeden blok.

### Rodzaje przestrzeni negatywnej

- **Interlinia** (ang. *line spacing*) - pionowy odstęp między wierszami tekstu. W tekście głównym wygodna jest wysokość linii wynosząca około 1,4–1,6 rozmiaru fontu.
- **Odstęp wewnętrzny** (ang. *padding*) - przestrzeń między zawartością elementu a jego krawędzią, na przykład między obramowaniem karty a tekstem w jej wnętrzu.
- **Marginesy** - przestrzeń na zewnątrz elementu, między nim a sąsiednimi elementami lub krawędzią ekranu.

### Jak poprawić przestrzeń negatywną

1. **Znajdź zatłoczone miejsca** - szukaj miejsc, w których elementy się stykają, tekst wydaje się ściśnięty albo sekcje na siebie nachodzą.
2. **Zdecyduj, czemu ma służyć każda przestrzeń** - pogrupowaniu powiązanych elementów, wyróżnieniu głównego działania albo ułatwieniu czytania tekstu.
3. **Zacznij od jednego ekranu** - popraw odstępy na jednym ekranie, korzystając ze spójnej skali, na przykład wielokrotności 8 px.
4. **Stosuj te same zasady wszędzie** - powtórz zmiany na każdym ekranie, żeby odstępy były spójne.

*Przykład z WashSlot:* na ekranie rezerwacji terminy były ciasno upakowane i podczas szybkiego sprawdzenia kciuk projektanta ciągle trafiał w niewłaściwy termin. Projektant zwiększył odstęp między terminami do 8 px, dał każdemu terminowi odstęp wewnętrzny 16 px i dodał 24 px wolnej przestrzeni nad przyciskiem „Potwierdź rezerwację”. Teraz na ekranie widać naraz mniej terminów, ale każdy łatwo przeczytać i stuknąć.

::: tip Najważniejsze
Wydzielanie treści korzysta z separatorów, obramowań, wypełnienia i cieni, żeby oddzielać treść i pokazywać, co do siebie należy. Przestrzeń negatywna grupuje powiązane elementy, kieruje uwagą, daje odpocząć oczom i poprawia czytelność. Najpierw popraw odstępy na jednym ekranie, a potem stosuj te same zasady wszędzie.
:::
