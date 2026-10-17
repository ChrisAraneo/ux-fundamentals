# Typografia

## Dlaczego typografia ma znaczenie

**Typografia** (ang. *typography*) to umiejętność takiego układania liter i tekstu, żeby był czytelny, jasny i przyjemny dla oka. Większość tego, co użytkownicy robią w aplikacji, wiąże się z czytaniem: etykiet, przycisków, komunikatów i instrukcji. Dobra typografia pomaga na trzy sposoby:

- **Hierarchia** - pokazuje, co jest najważniejsze i gdzie spojrzeć najpierw.
- **Dostępność** - sprawia, że tekst jest łatwy do przeczytania dla jak największej liczby osób.
- **Marka** - nadaje produktowi rozpoznawalną osobowość, niezależnie od tego, czy jest przyjazna, poważna czy zabawna.

## Krój pisma, font i klasyfikacja krojów

Ludzie często używają słów „krój pisma” i „font” zamiennie, ale projektanci je rozróżniają:

- **Krój pisma** (ang. *typeface*) - ogólny wygląd liter: kształt kresek, ich grubość i to, czy mają szeryfy. Roboto, Georgia i Atkinson Hyperlegible to kroje pisma.
- **Font** (ang. *font*) - jedna konkretna odmiana kroju pisma, określona przez rozmiar, grubość i styl. „Roboto, pogrubiony, 16 px” to font.
- **Klasyfikacja krojów pisma** (ang. *type classification*) - szerokie rodziny stylów. Najczęstsze grupy to kroje **szeryfowe** (ang. *serif*, z małymi kreskami na końcach liter), **bezszeryfowe** (ang. *sans serif*, bez tych kresek), **pisane** (ang. *script*, przypominające pismo odręczne) i **ozdobne** (ang. *display*, dekoracyjne, przeznaczone do dużych nagłówków).

Prosta zasada dla aplikacji: używaj najwyżej jednego lub dwóch krojów pisma. Krój bezszeryfowy to bezpieczny wybór na małe ekrany, bo jego proste kształty pozostają czytelne nawet w małych rozmiarach. Kroje ozdobne sprawdzą się w logo albo w dużym nagłówku, ale nie w tekście głównym.

## Hierarchia typograficzna

**Hierarchia typograficzna** (ang. *typographic hierarchy*) to kolejność ważności, którą tworzysz za pomocą różnych fontów. Podpowiada czytelnikom, na co spojrzeć najpierw i gdzie znaleźć poszczególne rodzaje informacji. Budujesz ją głównie za pomocą **rozmiaru** i **grubości**: większy i grubszy tekst zauważa się najpierw.

Wybierz co najmniej dwa poziomy: większy rozmiar dla tytułów i mniejszy dla tekstu głównego. Większość aplikacji używa ich więcej:

- **Nagłówek** - tytuł ekranu, na przykład 28 px, pogrubiony (bold).
- **Śródtytuł** - tytuły sekcji, na przykład 20 px, półgruby (semibold).
- **Tekst główny** - zwykły tekst, na przykład 16 px, regularny (regular).
- **Etykieta** - mały tekst na przyciskach i chipach, na przykład 14 px, średni (medium).

## Rozpoznawalność znaków i czytelność

**Rozpoznawalność znaków** (ang. *legibility*) to łatwość odróżniania od siebie pojedynczych liter, na przykład wielkiej litery I, małej litery l i cyfry 1. **Czytelność** (ang. *readability*) to łatwość czytania całych słów, zdań i akapitów. Rozpoznawalność znaków zależy głównie od kroju pisma; czytelność zależy też od rozmiaru, długości wiersza, interlinii i kontrastu.

Żeby tekst był czytelny, w aplikacjach mobilnych używaj dla tekstu głównego co najmniej 16 px, pisz krótkie wiersze i zostawiaj wystarczająco dużo miejsca między nimi. Jeśli produkt ma **wytyczne marki** (ang. *brand guidelines*), trzymaj się ich, bo opisują, jak typografia marki powinna wyglądać we wszystkich produktach.

*Przykład z WashSlot:* projektant wybiera **Atkinson Hyperlegible**, darmowy krój pisma zaprojektowany tak, żeby podobne litery łatwo było od siebie odróżnić. To pomaga Grace, która czyta z powiększonym tekstem, i Kofiemu, który wciąż uczy się czytać w miejscowym języku. Nagłówki mają 28 px i są pogrubione, nazwy pralek 20 px w odmianie półgrubej, tekst główny 16 px w odmianie regularnej, a etykiety stanu 16 px i są pogrubione. Projekt jest testowany przy rozmiarze tekstu w telefonie ustawionym na 200%, żeby mieć pewność, że nic się nie psuje u Grace.

## Praca z tekstem w Figmie

1. **Utwórz blok tekstu** - wybierz narzędzie Text (ikona T) albo naciśnij T, kliknij na obszarze roboczym i zacznij pisać.
2. **Zaznacz tekst** - jeśli w ramce jest kilka bloków tekstu, zaznacz ten, którego potrzebujesz, w panelu **Layers** (warstwy) po lewej stronie, a potem kliknij go dwukrotnie na obszarze roboczym, żeby edytować słowa.
3. **Zmień font** - w prawym panelu wybierz krój pisma, grubość i rozmiar. Możesz tam też ustawić wysokość linii, odstępy między literami i odstępy między akapitami.
4. **Wyrównaj i ustaw położenie** - użyj przycisków wyrównywania u góry prawego panelu oraz pól X, Y, W i H, żeby ustawić dokładne położenie i rozmiar bloku tekstu.
5. **Ustaw ograniczenia** - **ograniczenia** (ang. *constraints*) decydują, jak element zachowuje się przy zmianie rozmiaru ramki, na przykład czy pozostaje przypięty do lewej krawędzi, czy do środka. Pomagają dopasować jeden projekt do różnych rozmiarów ekranu.

### Jak zapisać styl tekstu?

Gdy już masz ustalone poziomy typografii, zapisz każdy z nich jako **styl tekstu** (ang. *text style*). Zaznacz warstwę tekstową, otwórz menu stylów w sekcji tekstu w prawym panelu (ikona z czterema kropkami), kliknij ikonę plusa i nadaj stylowi nazwę, na przykład „Nagłówek” albo „Tekst główny”. Od tej chwili stosujesz styl, zamiast ręcznie ustawiać font, a gdy zmienisz styl, zaktualizuje się każdy tekst, który z niego korzysta.

## Tekst zastępczy czy docelowy tekst?

**Tekst** (ang. *copy*) to wszystkie słowa zapisane w projekcie. Projektanci spierają się, czy projektować z **tekstem zastępczym** (ang. *placeholder text*), takim jak **lorem ipsum**, czy z docelowym tekstem.

### Kiedy pomaga tekst zastępczy?

- **Wczesne opinie** - możesz pokazać układ interesariuszom, zanim słowa będą gotowe.
- **Skupienie na układzie** - podczas generowania pomysłów i tworzenia wireframe'ów sztuczny tekst utrzymuje uwagę na strukturze.
- **Czas na pisanie** - osoby piszące teksty mogą nad nimi pracować, gdy ty dalej projektujesz.

Wadą jest to, że sztuczny tekst może zdezorientować interesariuszy, a układ zbudowany wokół lorem ipsum może się rozsypać, gdy pojawi się prawdziwy tekst, który często jest dłuższy.

### Kiedy pomaga docelowy tekst?

- **Mniej niespodzianek** - od razu widzisz, czy etykieta mieści się na przycisku.
- **Lepsze opinie** - projekt i słowa tworzą jedno doświadczenie, a ludzie mogą zareagować na jedno i drugie.

Wadą jest to, że docelowy tekst zmienia się równie często jak projekt, a podczas wczesnych przeglądów ludzie częściej komentują słowa niż układ.

Praktyczny kompromis: używaj tekstu zastępczego w projektach niskiej wierności, a docelowego tekstu w makietach. Wielu projektantów łączy oba podejścia, na przykład stosuje prawdziwe etykiety w nawigacji i tekst zastępczy w długich opisach.

*Przykład z WashSlot:* makiety wszędzie zawierają docelowy tekst: „Zarezerwuj termin”, „Pralka 2 jest wolna”, „Zajęta, wolna za 25 min”. Te krótkie etykiety to dokładnie to, co będą czytać mieszkańcy, a opinie Kofiego podczas testów pokażą, czy są łatwe do zrozumienia.

::: tip Najważniejsze
Krój pisma to ogólny wygląd liter; font to jedna jego odmiana o określonym rozmiarze i grubości. Używaj jednego lub dwóch czytelnych krojów pisma, zbuduj jasną hierarchię typograficzną za pomocą rozmiaru i grubości, stosuj w tekście głównym co najmniej 16 px i zapisuj swoje wybory jako style tekstu. W projektach niskiej wierności używaj tekstu zastępczego, a w makietach docelowego tekstu.
:::
