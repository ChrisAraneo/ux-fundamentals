# Dopracowywanie wireframe'ów

## Dostępność zaczyna się już w wireframe'ie

O wiele łatwiej jest uwzględnić dostępność od samego początku, niż dodawać ją na końcu. Osoby z niepełnosprawnościami, a zwłaszcza osoby korzystające z **technologii wspomagających** (ang. *assistive technology*), takich jak czytniki ekranu, potrzebują przejrzystej struktury strony, żeby się po niej poruszać. W twoich cyfrowych wireframe'ach dużą różnicę robią trzy elementy: nagłówki, punkty orientacyjne i fokus początkowy. Potem szybkie sprawdzenie według zasad Gestalt upewni cię, że układ jest łatwy do zrozumienia dla wszystkich.

## Nagłówki

**Nagłówki** (ang. *headings*) to tytuły i śródtytuły na początku strony, sekcji albo grupy treści. Zwykle są większe i grubsze niż treść główna i oznaczają tytuły podstron, sekcje i menu.

Nagłówki pomagają jednocześnie dwóm grupom osób. Osoby widzące używają ich, żeby przejrzeć stronę i zobaczyć jej **hierarchię** (ang. *hierarchy*), czyli kolejność ważności. Użytkownicy czytników ekranu używają ich do nawigacji: czytniki ekranu potrafią wyświetlić listę wszystkich nagłówków na stronie i przeskoczyć bezpośrednio do dowolnego z nich, podobnie jak w spisie treści.

Na stronie internetowej nagłówki zapisuje się w **HTML**, czyli języku, który nadaje strukturę stronom internetowym. HTML ma sześć poziomów nagłówków:

- **H1** - główny tytuł strony. Używaj jednego na stronę.
- **H2** - główne sekcje strony.
- **H3 do H6** - podsekcje w tych sekcjach, używane po kolei, bez pomijania poziomów.

Programiści nie zawsze potrafią odgadnąć właściwy poziom na podstawie projektu wizualnego, więc **dodawaj adnotacje** (ang. *annotate*) do swoich wireframe'ów: obok każdego nagłówka napisz „H1”, „H2” albo „H3”. Jeśli nie znasz jeszcze ostatecznego brzmienia, użyj słów zastępczych, takich jak „Tytuł strony” albo „Nagłówek sekcji”.

## Punkty orientacyjne

**Punkty orientacyjne** (ang. *landmarks*) oznaczają główne obszary strony, takie jak nagłówek strony, nawigacja, główna treść, obszar wyszukiwania, pasek boczny i stopka. Tak jak prawdziwe punkty orientacyjne w terenie wyróżniają się i pomagają ludziom się zorientować. Technologie wspomagające używają ich, żeby przeskakiwać z obszaru do obszaru. Czytniki ekranu oferują na przykład listę punktów orientacyjnych, więc użytkownicy mogą przejść prosto do głównej treści bez wysłuchiwania najpierw całej nawigacji. Nagłówki i punkty orientacyjne działają razem: punkty orientacyjne dzielą stronę na obszary, a nagłówki opisują treść wewnątrz nich.

Oznacz te obszary także w swoich wireframe'ach, na przykład podpisanym obrysem wokół nawigacji, głównej treści i stopki.

## Fokus początkowy

**Fokus początkowy** (ang. *initial focus*) to miejsce, na które kierujesz uwagę użytkownika, kiedy strona się otwiera, żeby pomóc mu zacząć zadanie. Na stronie z jednym głównym zadaniem, takiej jak strona wyszukiwania, fokus może trafić prosto do kluczowego elementu: na stronie głównej wyszukiwarki pole wyszukiwania stoi samotnie na środku ekranu, więc nie ma wątpliwości, co zrobić. Na stronie z kilkoma zadaniami fokus zwykle trafia na górę strony albo do nagłówka H1.

Fokus początkowy wiąże się też z prostotą. Każdy dodatkowy element konkuruje o uwagę. Zbyt wiele informacji albo zbyt wiele zadań naraz powoduje **przeciążenie poznawcze** (ang. *cognitive overload*), a wtedy ludziom trudno cokolwiek dokończyć. Im mniej bałaganu, tym łatwiej korzystać ze strony.

*Przykład z WashSlot:* projektant dodaje adnotacje do strony głównej WashSlot. „Pralnia teraz” to H1. „Twoja następna rezerwacja” i „Ogłoszenia” to H2, a tytuł każdego ogłoszenia to H3. Punkty orientacyjne to nagłówek strony z nawigacją, obszar główny i stopka. Na podstronie rezerwacji fokus początkowy trafia do nagłówka H1 „Zarezerwuj termin”, a pierwszą rzeczą po nim jest lista dni. Tablet w pralni ma jedno zadanie, więc fokus trafia prosto do przycisku „Zarezerwuj termin”.

## Sprawdzanie wireframe'ów według zasad Gestalt

**Zasady Gestalt** (ang. *Gestalt principles*) wyjaśniają, jak ludzie postrzegają to, co widzą: grupujemy rzeczy, które wyglądają podobnie, zauważamy wzorce i upraszczamy skomplikowane obrazy, a całość widzimy przed częściami. Znasz je z [rozdziału 3](../wireframes-and-prototypes/08-gestalt-principles); trzy z nich szczególnie przydają się podczas przeglądania wireframe'ów:

1. **Podobieństwo** (ang. *similarity*) - elementy, które wyglądają podobnie pod względem kształtu, rozmiaru albo koloru, wydają się pełnić tę samą funkcję. Elementy o tym samym przeznaczeniu powinny wyglądać tak samo, a różne elementy - różnie.
2. **Bliskość** (ang. *proximity*) - elementy położone blisko siebie wydają się powiązane, a elementy oddalone od siebie - niepowiązane. Używaj odstępów, żeby pokazać, które części do siebie należą.
3. **Wspólny obszar** (ang. *common region*) - elementy w tej samej granicy, na przykład w ramce albo na wspólnym tle, wydają się tworzyć grupę. Używaj kontenerów, żeby grupować powiązane informacje.

Przejrzyj każdy wireframe i zapytaj: czy coś wygląda na powiązane, choć nie jest, albo na niepowiązane, choć jest? Czy niektóre elementy powinny znaleźć się bliżej siebie albo we wspólnym kontenerze?

*Przykład z WashSlot:* przegląd pokazuje trzy rzeczy do poprawienia:

- **Podobieństwo** - w wireframe'ie desktopowym karty suszarek były szersze niż karty pralek, przez co wyglądały jak inny rodzaj elementu. Projektant nadaje wszystkim sześciu kartom ten sam rozmiar i zamiast tego dodaje etykietę „Suszarka”.
- **Bliskość** - na podstronie rezerwacji etykiety dni znajdowały się bliżej godzin z poprzedniego dnia niż swoich własnych. Projektant dodaje więcej miejsca nad każdą etykietą dnia, żeby było jasne, które godziny należą do którego dnia.
- **Wspólny obszar** - data, godzina i pralka następnej rezerwacji były luźno rozrzucone po stronie. Projektant umieszcza je w jednej ramce z obramowaniem, żeby mieszkańcy odczytywali je jako jedną rezerwację.

::: tip Najważniejsze
Uwzględniaj dostępność w wireframe'ach od samego początku. Dodawaj adnotacje z poziomami nagłówków (od H1 do H6), oznaczaj punkty orientacyjne, takie jak nawigacja, główna treść i stopka, i decyduj, gdzie na każdej podstronie trafia fokus początkowy. Unikaj bałaganu na podstronach, żeby nie powodować przeciążenia poznawczego. Potem przejrzyj układ według zasad Gestalt: podobieństwa, bliskości i wspólnego obszaru.
:::
