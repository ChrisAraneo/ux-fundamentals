# Cyfrowe wireframe'y stron internetowych

## Czy możesz już przejść do wersji cyfrowej?

Papier jest szybki i tani, a cyfrowe wireframe'y wymagają więcej pracy, więc nie przechodź do nich za wcześnie. Możesz zaczynać, kiedy na te pytania możesz odpowiedzieć „tak”:

1. **Czy wiesz, jakiego układu chcesz?** - masz wybrany układ strony głównej i rozrysowane kluczowe rozmiary ekranu.
2. **Czy masz za sobą iteracje na papierze?** - masz kilka wersji szkiców i połączone w nich najlepsze pomysły.
3. **Czy masz już informacje zwrotne?** - osoby z zespołu albo przełożony obejrzeli twoje szkice, a ty wykorzystujesz ich uwagi.
4. **Czy możesz już myśleć o szczegółach?** - możesz zająć się rozmiarami, tekstem i tym, jak elementy wizualne, takie jak krój pisma, kolor i obrazy, zmieszczą się później w projekcie.

## Wireframe'y desktopowe w Figmie

### 1. Utwórz ramkę desktopową

Utwórz nowy plik Figmy dla strony internetowej. Wybierz narzędzie **Frame** (skrót F) i w prawym panelu wybierz gotowy rozmiar desktopowy. Szerokość **1440 px** to popularny wybór w projektowaniu stron na komputery; wśród gotowych rozmiarów Figmy jest ramka 1440 × 1024 px. Nazwij ramkę jasno, na przykład „Desktop / 01 Strona główna”.

Obok ramki wgraj zdjęcia swoich papierowych wireframe'ów, żeby mieć je przed oczami podczas pracy.

### 2. Dodaj siatkę układu

Twoje papierowe szkice korzystały z siatki, żeby zachować spójne odstępy; cyfrowe wireframe'y też jej potrzebują. Zaznacz ramkę i dodaj **siatkę układu** (ang. *layout grid*) w prawym panelu, a potem zmień jej typ z siatki jednolitej na **Columns**. **Siatka kolumnowa** (ang. *column grid*) ma trzy ustawienia:

- **Kolumny** (ang. *columns*) - liczba równomiernie rozmieszczonych pionowych kolumn. Układy desktopowe często mają 12 kolumn, bo 12 dzieli się bez reszty na połowy, trzecie, czwarte i szóste części.
- **Odstępy międzykolumnowe** (ang. *gutters*) - wolna przestrzeń między kolumnami.
- **Marginesy** (ang. *margins*) - odstęp od zewnętrznej krawędzi ramki do pierwszej i ostatniej kolumny.

Ustawianie siatek dla aplikacji znasz już z [rozdziału 5](../high-fidelity-design/07-layout-grids); w przypadku stron internetowych kroki są takie same, tylko kolumn jest więcej.

### 3. Wypełnij ramkę elementami zastępczymi

Za pomocą prostokątów, kół i linii, czyli **elementów zastępczych** (ang. *placeholders*), rozplanuj stronę zgodnie z papierowym wireframe'em. Pamiętaj o **linii zgięcia** (ang. *the fold*): na typowym laptopie bez przewijania widać tylko mniej więcej górne 700-800 px.

- **Nad linią zgięcia** (ang. *above the fold*) - nagłówek strony (ang. *header*) z logo, nawigacją i ważnymi działaniami, takimi jak wyszukiwanie albo logowanie, a także początek głównej treści i główne wezwanie do działania (CTA).
- **Pod linią zgięcia** (ang. *below the fold*) - reszta głównej treści i stopka z danymi kontaktowymi, linkami do mediów społecznościowych i pełnym logo.

Nie ma tu sztywnych zasad, ale jeśli umieścisz nawigację i główne CTA nad linią zgięcia, odwiedzający od razu zobaczą najważniejsze rzeczy.

### 4. Dodaj tekst zastępczy

Zastąp linie ze szkiców tekstem. W nagłówkach, nawigacji i na przyciskach używaj krótkich, prawdziwych etykiet, bo te słowa wpływają na to, jak ludzie odnajdują drogę. Do długiej treści głównej użyj **lorem ipsum**, czyli pozbawionego sensu tekstu zastępczego (ang. *placeholder text*) przypominającego łacinę, który pokazuje, gdzie znajdzie się treść, i nikogo nie rozprasza.

### 5. Powtórz dla wszystkich podstron

Zbuduj wireframe dla każdej podstrony z głównego przepływu użytkownika, zaczynając od strony głównej. Kompletny zestaw powinien obejmować co najmniej trzy podstrony, umożliwiać przejście całego przepływu użytkownika, wyraźnie pokazywać elementy interfejsu, takie jak nawigacja, przyciski, obrazy i pola tekstowe, oraz pokazywać hierarchię treści na każdej podstronie.

## Wireframe'y na mniejsze ekrany

Kiedy wireframe'y desktopowe są gotowe, utwórz pozostałe rozmiary na podstawie rozrysowanych papierowych szkiców.

1. **Utwórz nową ramkę** - w narzędziu Frame wybierz gotowy rozmiar telefonu albo tabletu, na przykład telefon z Androidem 360 × 800 px albo tablet 768 × 1024 px, i nazwij ramkę jasno, na przykład „Telefon / 01 Strona główna”.
2. **Dodaj pasującą siatkę** - na przykład 8 kolumn na tablecie i 4 kolumny na telefonie, z mniejszymi marginesami i odstępami międzykolumnowymi.
3. **Skopiuj i dostosuj elementy desktopowe** - wklej elementy z wireframe'u desktopowego, a potem zmień rozmiar niektórych, przestaw inne i usuń te, które się nie mieszczą. Kieruj się papierowym szkicem dla mniejszego ekranu.
4. **Dodaj elementy oszczędzające miejsce** - zastąp linki w nagłówku strony menu „hamburger” i dodaj dodatkowe ramki, które pojawiają się na żądanie, takie jak menu wysuwane i wyskakujące pole wyszukiwania.
5. **Powtórz dla każdej podstrony** - tak żeby mieć pełny zestaw dla każdego rozmiaru ekranu.

### Budowanie menu „hamburger” i menu wysuwanego w Figmie

1. **Narysuj ikonę** - narzędziem Rectangle narysuj krótki, wąski prostokąt, zduplikuj go dwa razy i rozmieść trzy paski w równych odstępach.
2. **Zgrupuj i nazwij** - zaznacz wszystkie trzy prostokąty z wciśniętym klawiszem Shift, zgrupuj je (Ctrl/Cmd + G) i w panelu **Layers** nazwij grupę „Menu hamburger”.
3. **Utwórz ramkę menu wysuwanego** - zduplikuj ramkę strony głównej na telefon i nazwij kopię „Menu wysuwane”. Narysuj na niej panel i przenieś do niego linki nawigacji.
4. **Dodaj przycisk zamykania** - narysuj dwa cienkie prostokąty, obróć je tak, żeby utworzyły X, zgrupuj je i nazwij grupę „Zamknij”.
5. **Użyj elementów zastępczych zamiast ikon** - koła narysowane narzędziem Ellipse mogą zastępować ikony wyszukiwania, konta albo kalendarza, dopóki nie dodasz prawdziwych ikon na etapie makiet.

Ikonę „hamburgera” połączysz z ramką menu wysuwanego później, kiedy będziesz budować prototyp.

## Przykład: wireframe'y WashSlot

Projektant przygotowuje trzy rozmiary:

| Rozmiar | Ramka | Siatka |
| --- | --- | --- |
| Komputer | szerokość 1440 px | 12 kolumn, marginesy 80 px, odstępy międzykolumnowe 24 px |
| Tablet | szerokość 768 px | 8 kolumn, marginesy 32 px, odstępy międzykolumnowe 16 px |
| Telefon | szerokość 360 px | 4 kolumny, marginesy 16 px, odstępy międzykolumnowe 16 px (tak samo jak w aplikacji) |

Na desktopowej stronie głównej każda z sześciu kart pralek zajmuje dwie z dwunastu kolumn, a pole „Twoja następna rezerwacja” i panel „Zarezerwuj termin” zajmują po sześć kolumn. Linia zgięcia przebiega tuż pod przyciskiem CTA, więc stan pralek, następna rezerwacja i CTA są widoczne na typowym laptopie bez przewijania.

W wersji na telefon projektant zmienia rozmiar kart pralek, nagłówków i kart ogłoszeń, zamienia linki w nagłówku strony na menu „hamburger” z osobną ramką menu wysuwanego i umieszcza następną rezerwację pod przyciskiem CTA. Nazwy urządzeń zostają pełne („Pralka 3”, a nie „P3”), bo podczas badania aplikacji krótkie kody zdezorientowały Kofiego.

::: tip Najważniejsze
Przejdź do cyfrowych wireframe'ów, kiedy twój układ jest jasny, a ty masz za sobą iteracje na papierze i informacje zwrotne. W Figmie utwórz ramkę desktopową, dodaj siatkę kolumnową z marginesami i odstępami międzykolumnowymi, rozplanuj stronę za pomocą elementów zastępczych, pamiętając o linii zgięcia, i dodaj tekst zastępczy. Potem utwórz ramki na tablet i telefon, wykorzystaj i dostosuj elementy desktopowe i dodaj komponenty oszczędzające miejsce, takie jak menu „hamburger” i menu wysuwane.
:::
