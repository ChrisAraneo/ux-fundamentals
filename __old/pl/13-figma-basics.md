# Podstawy Figmy

## Przegląd

Ten przewodnik pokazuje, jak korzystać ze **stylów** i **komponentów** w Figmie, aby zachować spójność projektów i oszczędzać czas. Nauczysz się tworzyć elementy wielokrotnego użytku i budować kompletne mockupy swojej strony.

## Zapisywanie stylów

### Czym są style?

**Style** to zapisane kolory, ustawienia tekstu i efekty, których możesz używać wielokrotnie. Zmień styl raz, a zaktualizuje się automatycznie wszędzie.

### Dlaczego warto zapisywać style?

- **Spójność:** - projekt wygląda jednolicie na wszystkich stronach
- **Wydajność:** - zmieniasz styl raz, a aktualizuje się automatycznie wszędzie
- **Współpraca:** - członkowie zespołu mogą korzystać z tych samych stylów
- **Profesjonalizm:** - pokazuje, że myślisz o projektowaniu w sposób systemowy
- **Skalowalność:** - łatwiej utrzymać projekt, gdy się rozrasta
- **Dostępność:** - pomaga zachować odpowiedni kontrast i czytelność

### Jak zapisać style kolorów

1. **Zaznacz** element projektu z kolorem, który chcesz zapisać
2. Spójrz na zakładkę **Design** w prawym panelu bocznym
3. Znajdź sekcję **Fill**
4. Kliknij **ikonę czterech kwadratów** po prawej stronie sekcji Fill
5. Kliknij **znak plusa (+)**, aby dodać kolor i nadać mu nazwę
6. Nadaj mu opisową nazwę (np. „Primary Blue”, „Accent Orange”, „Background Gray”)

**Przykładowa konwencja nazewnictwa:**
- Primary Button Color
- Heading Text Color
- Background White
- Border Light Gray
- Accent Red

**Wskazówka:** Używaj opisowych nazw, które mówią, gdzie lub jak dany kolor jest używany, a nie tylko „Blue 1” czy „Red 2”. Dzięki temu ty (i twój zespół) łatwo zrozumiecie przeznaczenie każdego koloru.

### Jak zapisać style tekstu

1. **Zaznacz** element tekstowy, który chcesz zapisać jako styl
2. W zakładce **Design** (prawy panel boczny) znajdź właściwości tekstu
3. Kliknij **ikonę czterech kwadratów** obok właściwości tekstu
4. Kliknij **znak plusa (+)**, aby dodać styl tekstu i nadać mu nazwę
5. Nadaj mu opisową nazwę

**Popularne style tekstu, które warto utworzyć:**
- Nagłówek 1 (H1)
- Nagłówek 2 (H2)
- Nagłówek 3 (H3)
- Tekst główny (body)
- Tekst przycisku
- Podpis
- Tekst linku
- Tekst nawigacji

**Co zapisuje się w stylu tekstu:**
- Krój pisma (np. Roboto, Helvetica)
- Grubość pisma (regular, bold, light)
- Rozmiar pisma
- Interlinia
- Odstępy między literami
- Wyrównanie tekstu
- Kolor

**Uwaga:** Tworzenie stylów tekstu wymusza **hierarchię typograficzną**, dzięki czemu projekty są bardziej profesjonalne i przyjazne dla użytkownika.

### Jak zapisać style efektów

Efekty to m.in. cienie (cienie zewnętrzne, cienie wewnętrzne), rozmycia (rozmycie warstwy, rozmycie tła) i inne efekty wizualne.

1. Zaznacz element z efektem, który chcesz zapisać
2. Przejdź do zakładki **Design**
3. Znajdź sekcję **Effects**
4. Kliknij **ikonę czterech kwadratów**
5. Kliknij **znak plusa (+)**, aby dodać efekt i nadać mu nazwę

**Popularne efekty, które warto zapisać:**
- Cień przycisku
- Cień karty
- Poświata w stanie hover
- Nakładka na obraz

### Jak zapisać style obramowania

**Obramowania** (strokes) to linie wokół elementów.

1. Zaznacz element z obramowaniem, które chcesz zapisać
2. W zakładce **Design** znajdź sekcję **Stroke**
3. Kliknij **ikonę czterech kwadratów**
4. Kliknij **znak plusa (+)**, aby dodać obramowanie i nadać mu nazwę

**Popularne style obramowania:**
- Obramowanie pola formularza
- Linia oddzielająca
- Obrys karty

## Tworzenie komponentów

### Czym są komponenty?

**Komponenty** to elementy projektu wielokrotnego użytku, takie jak przyciski, ikony czy karty. Działają jak szablony, które możesz kopiować w całym projekcie.

### Jak utworzyć komponent

1. **Zaznacz warstwy**, które mają wejść w skład komponentu
   - Dla przycisku: prostokątne tło + tekst + ikona
   - Dla karty: kontener + obraz + tekst + przycisk
2. Kliknij **Create component** na pasku narzędzi
3. Figma utworzy specjalną ramkę komponentu z **fioletową ikoną** w panelu Layers

**Wskaźnik wizualny:** Ramki komponentów mają w panelu Layers fioletowe ikony rombu (◆), które odróżniają je od zwykłych ramek.

### Jak działa system komponentów

#### Komponent główny a instancja

**Komponent główny (Main component):**
- Oryginalny komponent, który utworzyłeś
- Fioletowa ikona rombu ◆
- Zmiany w nim wpływają na WSZYSTKIE instancje
- Traktuj go jak „szablon główny”

**Instancja (kopia):**
- Kopia komponentu głównego
- Ikona konturu fioletowego rombu ◇
- Powiązana z komponentem głównym
- Otrzymuje aktualizacje, gdy zmienia się komponent główny
- Może mieć drobne indywidualne zmiany (nadpisania, overrides)

**Zaktualizuj komponent główny** raz, a wszystkie instancje zaktualizują się automatycznie w całym projekcie.

### Jak korzystać z komponentów

**Dostęp do komponentów:**
1. Otwórz panel **Assets** (lewy panel boczny)
2. Znajdź swój komponent
3. Przeciągnij go na obszar roboczy
4. W ten sposób powstaje **instancja** komponentu

**Umieszczanie instancji:**
- Kliknij i przeciągnij z panelu Assets
- Instancje możesz umieszczać w dowolnym miejscu dokumentu
- Używaj tylu instancji, ile potrzebujesz

### Popularne komponenty, które warto utworzyć

**W projekcie strony internetowej utwórz komponenty dla:**

**Elementów nawigacji:** pasek nawigacji, pozycje menu i okruszki (breadcrumbs).

**Elementów interaktywnych:** przyciski główne, przyciski drugorzędne, linki tekstowe i przyciski z ikonami.

**Kontenerów treści:** karty produktów, karty wpisów na blogu, karty członków zespołu i bloki z opiniami.

**Elementów formularzy:** pola tekstowe, pola wyboru (checkboxy), przyciski opcji (radio) i menu rozwijane.

**Elementów multimedialnych:** miejsca na obrazy, kontenery wideo i zestawy ikon.

**Elementów układu:** nagłówki stron, stopki, paski boczne i sekcje siatki.

### Warianty komponentów

Warianty komponentów pozwalają grupować powiązane komponenty o różnych stanach lub opcjach. Dzięki wariantom komponenty są uporządkowane, a przełączanie między stanami jest łatwe.

**Przykład: komponent przycisku z wariantami**
- Stan domyślny
- Stan hover
- Stan aktywny/wciśnięty
- Stan nieaktywny

**Przykład: komponent karty z wariantami**
- Układ poziomy
- Układ pionowy
- Z obrazem
- Bez obrazu

### Korzyści z używania komponentów

- **Spójność** - zachowuje znajome wzorce na wszystkich stronach
- **Wydajność** - nie musisz tworzyć elementów od zera
- **Łatwe aktualizacje** - zmieniasz raz, a aktualizuje się wszędzie
- **Profesjonalna jakość** - pokazuje systemowe podejście do projektowania

## Dobre praktyki

### Praca ze stylami

**RÓB:**
- Twórz style na wczesnym etapie projektowania
- Używaj opisowych nazw, które wskazują przeznaczenie
- Porządkuj style według kategorii (kolory, nagłówki, tekst główny)
- Dokumentuj paletę kolorów i wybory typograficzne
- Ogranicz paletę kolorów (zwykle 3-5 głównych kolorów)
- Ogranicz liczbę krojów pisma (zwykle wystarczą 1-2)

**NIE RÓB:**
- Nie twórz zbyt wielu podobnych stylów (to prowadzi do chaosu)
- Nie używaj ogólnikowych nazw, takich jak „Style 1” czy „Blue”
- Nie pomijaj tworzenia stylów, „żeby zaoszczędzić czas” (później kosztuje to więcej czasu)
- Nie zmieniaj kolorów i krojów pisma ręcznie zamiast korzystać ze stylów

### Praca z komponentami

**RÓB:**
- Twórz komponenty dla każdego elementu, którego użyjesz więcej niż raz
- Nazywaj komponenty jasno i opisowo
- Porządkuj komponenty w panelu Assets
- Przetestuj komponenty, zanim utworzysz wiele instancji
- Aktualizuj komponent główny, gdy chcesz zmienić wszystkie instancje
- Używaj wariantów komponentów dla różnych stanów

**NIE RÓB:**
- Nie twórz komponentów dla elementów jednorazowych
- Nie odłączaj instancji bez potrzeby (zrywa to powiązanie)
- Nie zapominaj o aktualizacji komponentu głównego, gdy potrzebne są zmiany
- Nie twórz zduplikowanych komponentów zamiast korzystać z wariantów

### Dopracowywanie mockupów

**RÓB:**
- Pracuj systematycznie (od góry do dołu)
- Opieraj się na wireframe'ach, ale zostaw miejsce na ulepszenia
- Zachowaj spójność na wszystkich stronach
- Używaj siatki do wyrównywania elementów
- Dokładnie sprawdzaj odstępy i wyrównanie
- Regularnie przeglądaj swoją pracę
- Zbierz opinie, zanim przejdziesz do prototypowania

**NIE RÓB:**
- Nie zaniedbuj treści poniżej linii zgięcia (below the fold)
- Nie twórz różnych stylów przycisków na różnych stronach
- Nie ignoruj niespójności w odstępach
- Nie pomijaj mockupów ważnych stron
- Nie zapominaj o używaniu przygotowanych stylów i komponentów
