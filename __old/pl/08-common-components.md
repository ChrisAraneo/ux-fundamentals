# Popularne komponenty

![Popularne komponenty](/images/common-website-components.png)

## Tabela w skrócie

| Element | Opis | Zastosowanie |
|---------|-------------|----------|
| **Nagłówki** | Tytuły lub podtytuły, które dzielą treść na przejrzyste sekcje za pomocą poziomów hierarchii (H1-H6). Są większe i grubsze niż tekst główny i mają większe odstępy, co buduje hierarchię wizualną i strukturę treści | Porządkują treść, ułatwiają jej szybkie skanowanie wzrokiem i pozwalają przechodzić do konkretnych sekcji za pomocą czytnika ekranu |
| **Menu hamburgerowe** | Zwijana nawigacja z ikoną trzech linii. Ukrywa pełną listę nawigacji za klikalną ikoną i pokazuje ją tylko wtedy, gdy jest potrzebna (zamiast wyświetlać wszystkie linki naraz) | Kondensuje listy nawigacji na małych ekranach |
| **Karty** | Powierzchnie zawierające treść na jeden temat. Mieszczą powiązane informacje w zwartych jednostkach, które można wygodnie układać jedna pod drugą w kolumnach na wąskich ekranach | Porządkują informacje w łatwe do przejrzenia jednostki, które można układać w stosy |
| **Karuzele** | Przewijane zestawy obrazów lub kart. Pozwalają wielu obrazom lub elementom zajmować tę samą przestrzeń w poziomie, bo użytkownik przesuwa je po kolei (zamiast wyświetlać wszystkie obok siebie) | Wyświetlają wiele elementów na ograniczonej przestrzeni w poziomie |
| **Przyciski CTA** | Przyciski wezwania do działania (call to action, CTA), które zachęcają użytkowników do wykonania konkretnej czynności. Wyróżniają się wyrazistym stylem i tekstem nastawionym na działanie (np. „Zacznij teraz”, „Kup teraz”, „Zarejestruj się”), co zwiększa konwersję i prowadzi użytkowników do pożądanego celu | Skłaniają do działania i zwiększają konwersję dzięki jasnym, dobrze widocznym zachętom |
| **Ikony** | Proste symbole graficzne zastępujące etykiety tekstowe w interfejsach mobilnych. Są zwartymi skrótami do typowych czynności (wyszukiwanie, koszyk, konto, menu) i zamiast słów wykorzystują powszechnie rozpoznawalne obrazy | Pozwalają w pełni wykorzystać ograniczoną przestrzeń ekranu bez utraty funkcjonalności |

## Nagłówki

### Cel

Nagłówki to tytuły lub podtytuły, które dzielą treść strony na przejrzyste sekcje i budują hierarchię wizualną. Pomagają wszystkim użytkownikom sprawnie poruszać się po treści i ją skanować, a użytkownikom czytników ekranu pozwalają przechodzić bezpośrednio do konkretnych sekcji bez słuchania całej strony po kolei.

### Cechy wizualne

- Większy rozmiar czcionki niż tekst główny (H1: 32-48px, H2: 24-32px, H3: 20-24px)
- Grubsza czcionka niż otaczający tekst (600-700)
- Większe odstępy nad i pod nagłówkiem (marginesy 16-32px)
- Wyraźna hierarchia wizualna pokazująca poziomy ważności

### Funkcjonalność

**Wsparcie hierarchii wizualnej:**
- Tworzy przejrzystą strukturę dla osób widzących
- Prowadzi wzrok przez treść strony
- Umożliwia szybkie skanowanie i zrozumienie treści

**Nawigacja za pomocą czytnika ekranu:**
- Czytniki ekranu pozwalają poruszać się po stronie za pomocą menu nagłówków
- Użytkownicy słuchają listy wszystkich nagłówków naraz
- Użytkownicy przechodzą bezpośrednio do wybranego nagłówka
- To znacznie szybsze niż słuchanie całej strony

### Rozmieszczenie i zastosowanie

**Hierarchia nagłówków:**
- **H1** - główny tytuł strony (jeden na stronę)
- **H2** - nagłówki głównych sekcji
- **H3** - podsekcje w ramach sekcji H2
- **H4-H6** - kolejne zagnieżdżone podsekcje w razie potrzeby

**Dobre praktyki:**
- Nigdy nie pomijaj poziomów nagłówków (H1 → H2 → H3, a nie H1 → H3)
- Nie używaj nagłówków wyłącznie do stylizowania tekstu
- Zachowaj logiczny konspekt dokumentu
- Pisz zwięzłe nagłówki (maksymalnie 5-10 słów)
- Oznaczaj poziomy nagłówków na wireframe'ach (makietach szkieletowych), aby ułatwić przekazanie projektu programistom
- Testuj z czytnikami ekranu, aby sprawdzić, czy nawigacja działa poprawnie

## Ikona menu hamburgerowego

### Cel

Ikona menu hamburgerowego pokazuje i ukrywa menu nawigacji, głównie w projektowaniu responsywnym. Oszczędza miejsce na ekranie, pomaga utrzymać przejrzysty interfejs i jest powszechnie rozpoznawalnym symbolem zwiniętej nawigacji na urządzeniach mobilnych i małych ekranach.

### Cechy wizualne

- Trzy poziome linie ułożone jedna pod drugą w równych odstępach
- Jednakowa grubość i długość linii
- Minimalistyczny, jednoznaczny wygląd
- Jeden kolor, dopasowany do kolorystyki strony
- Kwadratowe proporcje (ok. 1:1)
- Typowy rozmiar: od 24x24px do 48x48px

### Funkcjonalność

**Podstawowa interakcja:**
- Dotknięcie lub kliknięcie otwiera ukryte menu nawigacji
- Po aktywacji ikona często zmienia wygląd (np. obraca się w „X”)
- Wywołuje wysuwany panel, menu rozwijane, nakładkę lub nawigację na pełnym ekranie
- Ponowne dotknięcie lub kliknięcie zamyka menu

**Dostępność:**
- Dodaj etykiety ARIA (`aria-label="Menu"` lub `aria-label="Toggle navigation"`)
- Ikona musi być dostępna z klawiatury (Tab + Enter/Spacja)
- Informuj czytniki ekranu o zmianach stanu
- Minimalny obszar dotyku: 44x44px

### Rozmieszczenie i zastosowanie

**Optymalne rozmieszczenie:**
- **Urządzenia mobilne** - lewy górny róg (najczęściej) lub prawy górny róg (interfejsy RTL)
- **Komputery i tablety** - rzadziej; w nagłówku, gdy pełna nawigacja się nie mieści
- **Stała pozycja** - często pozostaje widoczna podczas przewijania

**Kiedy używać:**
- Responsywne strony projektowane w podejściu mobile-first
- Aplikacje z rozbudowaną nawigacją
- Interfejsy, w których treść jest ważniejsza niż nawigacja

**Dobre praktyki:**
- Umieszczaj ikonę w tym samym miejscu na wszystkich stronach
- Zadbaj o wystarczający kontrast kolorów (minimum 4.5:1)
- Rozważ dodanie etykiety „Menu” dla większej czytelności
- Zapewnij wizualną informację zwrotną po najechaniu lub dotknięciu
- Otwieraj menu szybko (< 300ms) z płynną animacją

## Karty

### Cel

Karty to komponenty-kontenery, które grupują powiązane treści i działania w łatwe do przyswojenia jednostki. Porządkują informacje w sekcje, które łatwo przejrzeć, stanowią klikalne powierzchnie do nawigacji i dopasowują się do różnych rozmiarów ekranu.

Typowe zastosowania: listy produktów, zapowiedzi artykułów, profile użytkowników, widżety na dashboardach i wyróżnione funkcje.

### Cechy wizualne

**Kontener:** wyraźne granice z białym lub jasnym tłem, delikatne cienie (uniesienie 1-8dp), zaokrąglone rogi (2-8px), wewnętrzny odstęp (16-24px)

**Struktura:** nagłówek (tytuł, ikona), obszar multimediów (obraz/wideo, opcjonalnie), treść (tekst, dane), stopka (przyciski, metadane)

**Typografia:** tytuł (18-24px), treść (14-16px), metadane (12-14px)

**Stany:** domyślny, najechanie (większy cień), aktywny (lekkie zmniejszenie), fokus (widoczny obrys), nieaktywny (zmniejszona nieprzezroczystość)

### Funkcjonalność

**Rodzaje interakcji:**
- **Klikalne** - cała karta prowadzi do strony ze szczegółami
- **Oparte na działaniach** - kilka przycisków do konkretnych czynności
- **Informacyjne** - służą do wyświetlania treści, mogą zawierać elementy interaktywne
- **Rozwijane** - po interakcji pokazują dodatkową treść
- **Do zaznaczania** - wielokrotny wybór za pomocą pól wyboru

**Funkcje:** dynamiczne aktualizacje, leniwe ładowanie (lazy loading), filtrowanie i sortowanie, nawigacja z klawiatury, obsługa czytników ekranu, semantyczny HTML z etykietami ARIA, minimalne obszary dotyku (44x44px)

### Rozmieszczenie i zastosowanie

**Wzorce układu:**
- **Siatka** - responsywne kolumny (1 na telefonie, 2-3 na tablecie, 3-4 na komputerze) z odstępami 16-32px
- **Lista/kanał** - jedna kolumna, karty na pełną szerokość ułożone jedna pod drugą
- **Masonry** - różne wysokości kart w dynamicznych układach
- **Dashboard** - różne rozmiary (1x1, 2x1, 2x2) do prezentowania wskaźników

**Dobre praktyki:**
- Pisz zwięzłe treści, które łatwo przejrzeć
- Używaj wysokiej jakości, zoptymalizowanych obrazów
- Zachowaj spójny styl (odstępy, cienie, typografia)
- Na telefonach układaj karty jedna pod drugą, stosując odpowiednie breakpointy
- Zapewnij kontrast kolorów 4.5:1 ze względu na dostępność

**Kiedy używać:**
zbiory podobnych treści, katalogi do przeglądania, zapowiedzi treści

**Kiedy unikać:**
proste listy, gęste tabele z danymi, formularze wypełniane krok po kroku, długie teksty do czytania

**Popularne rodzaje:**
karty produktów, karty artykułów, karty profili, karty multimediów, karty statystyk, karty akcji

## Karuzela

### Cel

Karuzele to interaktywne komponenty, które wyświetlają wiele elementów treści w formie obracającego się pokazu slajdów. Pozwalają w pełni wykorzystać miejsce na ekranie, pokazując jeden element naraz, a użytkownicy mogą przeglądać kolekcję po kolei lub automatycznie.

Typowe zastosowania: wyróżnione treści, prezentacje produktów, galerie zdjęć, opinie klientów i banery promocyjne.

### Cechy wizualne

**Kontener:** obszar o stałej szerokości lub wysokości z ukrytym nadmiarem treści, wyświetlający jeden slajd naraz

**Struktura:** slajdy z treścią (obrazy, tekst lub jedno i drugie), strzałki nawigacji (lewo/prawo), kropki wskaźników lub miniatury, opcjonalne sterowanie autoodtwarzaniem

**Przejścia:** przesunięcie, przenikanie lub własne animacje (zwykle trwające 300-600ms)

**Stany:** aktywny slajd (w pełni widoczny), nieaktywne slajdy (ukryte lub częściowo widoczne), najechanie (pokazuje elementy sterujące), fokus (wskaźniki nawigacji z klawiatury)

### Funkcjonalność

**Sposoby nawigacji:**
- **Przyciski strzałek** - przejście do poprzedniego/następnego slajdu przy lewej i prawej krawędzi
- **Kropki wskaźników** - klikalne znaczniki pozycji pod karuzelą
- **Gesty dotykowe** - przesunięcie w lewo/prawo na urządzeniach mobilnych
- **Klawiatura** - klawisze strzałek do nawigacji, Tab do przenoszenia fokusu
- **Autoodtwarzanie** - automatyczne przewijanie z konfigurowalnym odstępem czasu (zwykle 3-5 sekund)

**Funkcje:** nieskończona pętla (powrót do początku), wstrzymanie po najechaniu lub interakcji, leniwe ładowanie dla lepszej wydajności, responsywna zmiana rozmiaru, opcjonalny podgląd miniatur

**Dostępność:** role ARIA (`role="region"`, `aria-roledescription="carousel"`), nawigacja z klawiatury, przyciski wstrzymania, komunikaty czytnika ekranu o zmianie slajdu

### Rozmieszczenie i zastosowanie

**Wzorce układu:**
- **Sekcja hero** - na pełną szerokość u góry strony, z wyróżnionymi treściami
- **Galeria produktu** - strony produktów z karuzelą zdjęć
- **Prezentacja treści** - sekcje strony głównej wyróżniające funkcje lub ofertę
- **Opinie klientów** - rotacja recenzji lub cytatów

**Dobre praktyki:**
- Ogranicz się do 3-7 slajdów, aby utrzymać zaangażowanie
- Używaj wyraźnych, dobrze widocznych elementów nawigacji
- Zapewnij przyciski pauzy/odtwarzania ze względu na dostępność
- Zadbaj o obszary dotyku o rozmiarze co najmniej 44x44px
- Zapewnij alternatywną nawigację (nie tylko przez karuzelę)
- Unikaj autoodtwarzania w przypadku treści z dużą ilością tekstu

**Kiedy używać:**
rotacja wyróżnionych treści, galerie zdjęć, prezentacje przy ograniczonej przestrzeni

**Kiedy unikać:**
kluczowe informacje (mogą zostać przeoczone), treści wymagające porównania, formularze lub elementy interaktywne na slajdach, więcej niż 7-10 slajdów

**Popularne rodzaje:**
karuzela zdjęć, karuzela treści, karuzela produktów, karuzela opinii, karuzela banerów

## Przyciski wezwania do działania

### Cel

Przyciski wezwania do działania (CTA) zachęcają użytkowników do wykonania konkretnych, pożądanych czynności, które zwiększają konwersję i pomagają osiągnąć cele biznesowe. Prowadzą użytkowników przez ścieżkę klienta, wskazując jasne kolejne kroki i ograniczając paraliż decyzyjny.

Typowe zastosowania: rejestracje, zakupy, pobieranie plików, subskrypcje, wysyłanie formularzy, przechodzenie do kluczowych stron i pozyskiwanie leadów.

### Cechy wizualne

**Kontener:** prostokątny kształt z zaokrąglonymi rogami (4-8px), jednolity kolor tła (wysoki kontrast ze stroną), wyraźny wewnętrzny odstęp (12-16px w pionie, 24-48px w poziomie)

**Typografia:** czcionka pogrubiona lub średnia (500-700), większa niż tekst główny (minimum 16-18px), zapis zdaniowy lub tytułowy, czasowniki nastawione na działanie

**Kolory:** główny kolor marki dla głównego CTA, wysoki kontrast z tłem (minimum 4.5:1), drugorzędne i trzeciorzędne CTA z obrysem lub w stonowanych kolorach

**Stany:** domyślny (jednolity kolor), najechanie (ciemniejszy odcień lub uniesienie), aktywny (efekt wciśnięcia), fokus (widoczny obrys), nieaktywny (wyszarzony, zmniejszona nieprzezroczystość)

### Funkcjonalność

**Główne działania:**
- **Wysyłanie formularzy** - finalizowanie zakupów, rejestracji lub przesyłania danych
- **Nawigacja** - kierowanie użytkowników na strony docelowe, strony produktów lub do kluczowych sekcji
- **Pobieranie** - uruchamianie pobierania plików lub instalacji aplikacji
- **Udostępnianie/zapisywanie** - udostępnianie w mediach społecznościowych lub dodawanie treści do zakładek
- **Kontakt** - otwieranie formularzy kontaktowych, czatu lub programu pocztowego

**Zachowanie przy interakcji:** jedno kliknięcie lub dotknięcie uruchamia działanie, natychmiastowa informacja zwrotna (stany ładowania, komunikaty potwierdzające), ochrona przed podwójnym wysłaniem, dostęp z klawiatury (Enter/Spacja)

**Funkcje:** jasny tekst działania (2-5 słów), poczucie pilności, gdy to stosowne („Zacznij już teraz”, „Oferta ograniczona”), podpowiedź po najechaniu z dodatkowym kontekstem, ikony wzmacniające przekaz wizualny

### Rozmieszczenie i zastosowanie

**Strategiczne rozmieszczenie:**
- **Sekcja hero** - główne CTA powyżej linii zgięcia (above the fold), aby było jak najlepiej widoczne
- **Koniec treści** - po przedstawieniu propozycji wartości lub opisie produktu
- **Pasek nawigacji** - prawy górny róg, aby był stale dostępny
- **Okna modalne/formularze** - prawy dolny róg lub środek, do wysyłania formularza
- **Karty** - na dole lub w prawym górnym rogu karty

**Dobre praktyki:**
- Jedno główne CTA na sekcję, aby uniknąć dezorientacji
- Używaj czasowników oznaczających działanie („Kup”, „Zacznij”, „Dołącz”, „Pobierz”, „Dowiedz się”)
- Buduj hierarchię wizualną (rozmiar, kolor, położenie)
- Zapewnij minimalny rozmiar obszaru dotyku (44x44px)
- Umieszczaj CTA tam, gdzie użytkownicy naturalnie patrzą (wzorzec F, wzorzec Z)
- Sprawdzaj skuteczność za pomocą testów A/B

**Kiedy używać:** zwiększanie konwersji, prowadzenie przepływu użytkownika (user flow), wyróżnianie głównych działań, finalizowanie transakcji

**Kiedy unikać:** nadmiar CTA rywalizujących o uwagę, niejasna propozycja wartości, przedwczesne prośby, zanim zbudujesz zaufanie

**Popularne rodzaje:** główne CTA (najważniejsze działanie), drugorzędne CTA (działanie alternatywne), trzeciorzędne CTA (działanie o niskim priorytecie), pływające/przyklejone CTA (stale widoczne)

## Ikony

### Cel

Ikony zastępują etykiety tekstowe w interfejsach mobilnych, aby w pełni wykorzystać ograniczoną przestrzeń ekranu bez utraty funkcjonalności. Są zwartymi skrótami wizualnymi, które łatwo rozpoznać i użyć. Zmniejszają bałagan i usprawniają nawigację na małych ekranach.

### Cechy wizualne

**Struktura:**
- Proste, rozpoznawalne symbole przedstawiające działania lub pojęcia
- Minimalna złożoność wizualna, aby szybko je zrozumieć
- Spójny styl wizualny w całym interfejsie
- Jeden kolor lub ograniczona paleta kolorów
- Typowy rozmiar: od 24x24px do 48x48px

**Warianty:** styl wypełniony lub konturowy, stan aktywny lub nieaktywny, ikony z etykietą (ikona + krótki tekst), plakietki na ikonach (liczniki powiadomień)

### Funkcjonalność

**Oszczędność miejsca:**
- Zajmują o 60-80% mniej miejsca w poziomie niż etykiety tekstowe
- Pozwalają zmieścić więcej opcji nawigacji na ograniczonej szerokości ekranu
- Zwalniają miejsce w pionie na główną treść

**Korzyści dla użytkowników:**
- Szybsze skanowanie wzrokiem niż czytanie tekstu
- Komunikacja niezależna od języka
- Natychmiastowe rozpoznawanie typowych działań
- Mniejsze obciążenie poznawcze dzięki znanym symbolom

**Typowe zamienniki tekstu:** wyszukiwanie zastępuje lupa, koszyk – ikona koszyka, konto użytkownika – sylwetka lub awatar, menu – ikona hamburgera, udostępnianie – strzałka udostępniania, ulubione – serce, ustawienia – koło zębate, a stronę główną – domek.

### Rozmieszczenie i zastosowanie

**Optymalne rozmieszczenie:**
- **Górna nawigacja** - główne działania (wyszukiwanie, koszyk, konto) wyrównane do prawej
- **Dolna nawigacja** - 3-5 głównych sekcji jako zakładki z samymi ikonami
- **Pływające przyciski akcji** - wyraźnie widoczna ikona głównego działania

**Kiedy używać ikon:** szerokość ekranu poniżej 768px, powszechnie rozpoznawalne działania, działania powtarzające się na wielu ekranach, wskaźniki stanu, które muszą zajmować mało miejsca

**Kiedy zostawić tekst:** główne CTA (liczy się konwersja), nieznane działania, złożone pojęcia, pierwsze korzystanie z produktu, działania kluczowe dla dostępności

**Dobre praktyki:**
- Używaj standardowych, powszechnie rozpoznawalnych ikon
- Zachowaj minimalny obszar dotyku 44x44px
- Dodaj aria-label dla czytników ekranu
- Sprawdź z użytkownikami, czy rozpoznają ikony
- Zapewnij kontrast kolorów co najmniej 3:1

**Strategia responsywna:**
komputer (tekst + ikony), tablet (wybiórcze połączenie), telefon (same ikony dla działań drugorzędnych, etykiety dla głównych CTA)

## Wybór komponentów do projektu

1. **Potrzeby nawigacyjne**
   - Ile jest elementów nawigacji?
   - Czy zmieszczą się w poziomie na telefonie?
   - Rozważ: menu hamburgerowe

2. **Ilość treści**
   - Dużo podobnych elementów do wyświetlenia?
   - Potrzebujesz układu, który łatwo przejrzeć?
   - Rozważ: karty

3. **Treści wizualne**
   - Wiele obrazów do zaprezentowania?
   - Ograniczona przestrzeń na ekranie?
   - Rozważ: karuzelę

4. **Działania użytkowników**
   - Jakie kluczowe działania powinni wykonać użytkownicy?
   - Chcesz zwiększyć konwersję?
   - Rozważ: przyciski CTA

## Menu wysuwane

### Cel

Menu wysuwane (flyout menu) to ukryty panel nawigacji, który po aktywacji wysuwa się z krawędzi ekranu – zwykle po kliknięciu ikony menu hamburgerowego. Pokazuje opcje nawigacji bez zaśmiecania głównego ekranu.

### Cechy wizualne

- Pionowy panel wysuwany z krawędzi ekranu
- Szerokość: 250-350px na komputerze, 70-85% na telefonie
- Inny kolor tła niż główna treść
- Cień lub rozmycie oddzielające panel od strony
- Ciemna nakładka na pozostałej części ekranu (opcjonalnie)
- Płynna animacja wysuwania

### Funkcjonalność

**Podstawowa interakcja:**
- Otwiera się po dotknięciu ikony menu hamburgerowego
- Wysuwa się z lewej lub prawej krawędzi
- Pokazuje linki nawigacji w pionowej liście
- Zamyka się przyciskiem zamknięcia (X), dotknięciem poza panelem lub po wybraniu linku

**Dostępność:**
- Dodaj etykiety ARIA (`role="navigation"`, `aria-label="Main menu"`)
- Zapewnij dostęp z klawiatury (Tab + Enter/Spacja)
- Umożliw zamykanie klawiszem Escape
- Minimalny obszar dotyku: 44x44px

### Rozmieszczenie i zastosowanie

**Optymalne rozmieszczenie:**
- **Urządzenia mobilne** - wysuwa się z lewej krawędzi (najczęściej) lub z prawej
- **Komputery i tablety** - rzadziej; gdy nawigacja się nie mieści
- **Stała pozycja** - pozostaje widoczne podczas przewijania

**Kiedy używać:**
- Strony mobilne z wieloma elementami nawigacji
- Przejrzyste układy z ukrytą nawigacją
- Serwisy z wieloma opcjami menu

**Dobre praktyki:**
- Menu nie powinno zajmować więcej niż 85% szerokości ekranu
- Umieść wyraźny przycisk zamknięcia (X) w górnym rogu
- Dodaj ciemną nakładkę, aby oddzielić menu od strony
- Stosuj płynną animację (200-300ms)
- Zapewnij obszary dotyku o rozmiarze co najmniej 44x44px

## Problemy i rozwiązania

### Problem 1: „Za dużo elementów nawigacji, żeby zmieściły się w menu wysuwanym”

**Rozwiązania:**
- Pogrupuj powiązane elementy pod nagłówkami kategorii
- Zastosuj wzorzec akordeonu (zwijane sekcje)
- Ustal priorytety – usuń elementy, które naprawdę nie są potrzebne
- Rozważ drugi poziom menu wysuwanego dla podkategorii
- Dodaj wyszukiwarkę, aby ograniczyć widoczną nawigację

### Problem 2: „Obraz hero źle wygląda po zmniejszeniu”

**Rozwiązania:**
- Użyj innego kadru lub proporcji na telefonach
- W razie potrzeby wybierz osobny obraz hero na urządzenia mobilne
- Skup się na innym fragmencie obrazu (zmień kadr, a nie tylko skalę)
- Rozważ mniejszy obraz z wyraźniejszym motywem
- Testuj z prawdziwą treścią, a nie tylko z zaślepkami

### Problem 3: „Układ na komputer ma 4 kolumny – jak go dostosować?”

**Rozwiązania:**
- **Opcja 1:** ułóż elementy jeden pod drugim (1 kolumna)
- **Opcja 2:** użyj 2 kolumn, jeśli elementy są małe
- **Opcja 3:** użyj karuzeli/slidera do przeglądania w poziomie
- **Opcja 4:** pokaż mniej elementów z opcją „zobacz więcej”
- Wybierz rozwiązanie na podstawie rodzaju treści i potrzeb użytkowników

### Problem 4: „Po zmniejszeniu tekst staje się nieczytelny”

**Rozwiązania:**
- Nie skaluj tekstu – ustal rozmiary od nowa dla telefonów
- Używaj osobnych stylów tekstu dla urządzeń mobilnych
- Zwiększ interlinię, aby poprawić czytelność
- Ogranicz ilość tekstu (pisz zwięźlej)
- Zwiększ kontrast, aby tekst był lepiej widoczny
- Testuj na ekranach prawdziwych urządzeń

### Problem 5: „Komponenty z wersji na komputer nie działają na telefonie”

**Rozwiązania:**
- Stwórz warianty komponentów przeznaczone na urządzenia mobilne
- Wykorzystaj właściwości komponentów (component properties) do zachowań responsywnych
- Zbuduj osobną bibliotekę komponentów mobilnych
- W razie potrzeby odłącz instancje (detach) i dostosuj je do wersji mobilnej
- Udokumentuj różnice między komponentami na komputer i na telefon

## Źródła obrazów

- https://www.pexels.com/pl-pl/zdjecie/burger-z-plasterkami-warzyw-z-bliska-fotografia-2702674/
