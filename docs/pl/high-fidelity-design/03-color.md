# Kolor

## Co kolor robi w projekcie

Kolor to często pierwsza rzecz, którą ludzie zauważają. Pomyśl, jak czerwone światło na skrzyżowaniu sprawia, że zatrzymujesz się, zanim w ogóle o tym pomyślisz. W projektowaniu UX kolor ma kilka zadań:

- **Wyróżnienie** - jaskrawy przycisk przyciąga wzrok i pokazuje użytkownikom, co zrobić dalej.
- **Znaczenie** - wiele osób kojarzy zielony z „można” lub „dostępne”, a czerwony ze „stop” lub „błąd”.
- **Marka** - spójne kolory sprawiają, że produkt jest rozpoznawalny.
- **Nastrój** - delikatne, spokojne kolory dają inne odczucie niż wyraziste, energetyczne.
- **Dostępność** - właściwe połączenia sprawiają, że treść jest czytelna dla wszystkich; niewłaściwe sprawiają, że znika.

Pamiętaj, że znaczenie kolorów zależy od kultury. W niektórych miejscach biel kojarzy się ze ślubem, w innych z żałobą. Sprawdź, co twoje kolory znaczą dla ludzi, dla których projektujesz.

## Właściwości koloru

- **Barwa** (ang. *hue*) - rodzina koloru, na przykład czerwony, zielony lub niebieski.
- **Jasność** (ang. *value*) - jak jasny lub ciemny jest kolor. Jeśli do dowolnego koloru dodasz wystarczająco dużo bieli, otrzymasz biel; jeśli dodasz wystarczająco dużo czerni, otrzymasz czerń. Różnice w jasności tworzą kontrast.
- **Nasycenie** (ang. *saturation*) - jak intensywny lub czysty jest kolor. Mocno nasycone kolory są wyraziste i przyciągają uwagę, jak zakreślacz. Mniej nasycone kolory wyglądają na przygaszone, a przy zerowym nasyceniu zostają tylko odcienie szarości.
- **Krycie** (ang. *opacity*) - jak bardzo kolor jest pełny lub przezroczysty. Przy 100% kolor jest całkowicie pełny; przy 50% widać to, co jest pod nim; przy 0% jest niewidoczny.

## Tworzenie palety kolorów

**Paleta kolorów** (ang. *color palette*) to ograniczony zestaw kolorów, których używasz w całym produkcie. Jeśli ustalisz ją, zanim zaczniesz kolorować ekrany, zaoszczędzisz czas i zachowasz spójność projektu: dla tego samego rodzaju elementu zawsze używasz tego samego koloru.

Popularną wskazówką, jak zrównoważyć paletę, jest **zasada 60-30-10** (ang. *60-30-10 rule*):

- **60% kolor neutralny** - spokojny kolor główny, często biały, złamana biel lub jasnoszary, na tła.
- **30% kolor drugorzędny** - kolor uzupełniający na karty, sekcje i nagłówki.
- **10% kolor akcentujący** - mocny kolor dla najważniejszych elementów, takich jak przyciski główne.

Wiele aplikacji ma też **kolory semantyczne** (ang. *semantic colors*) o stałym znaczeniu, na przykład zielony dla sukcesu, bursztynowy dla ostrzeżeń i czerwony dla błędów.

*Przykład z WashSlot:* projektant wybiera spokojną, czystą paletę, która pasuje do aplikacji do prania:

| Rola | Kolor | Zastosowanie |
| --- | --- | --- |
| Neutralny (60%) | Złamana biel #F7F9FA | Tła ekranów |
| Drugorzędny (30%) | Blady morski #DDF1EF | Karty pralek i tła sekcji |
| Akcentujący (10%) | Głęboki morski #00695C | Przycisk „Zarezerwuj termin” i wybrana karta dnia |
| Tekst | Grafitowy #1F2933 | Nagłówki i tekst główny |
| Stan: wolna | Zielony #146C2E | Etykieta „Wolna” z ikoną ptaszka |
| Stan: zajęta | Ciemny bursztynowy #8A5A00 | Etykieta „Zajęta” z ikoną zegara |
| Stan: nieczynna | Czerwony #B3261E | Etykieta „Nieczynna” z ikoną ostrzeżenia |

Głęboki morski kolor akcentujący pojawia się tylko przy działaniach, których mieszkańcy potrzebują najczęściej, więc w naturalny sposób przyciąga do nich wzrok.

## Praca z kolorem w Figmie

1. **Dodaj wypełnienie** - zaznacz kształt, znajdź sekcję **Fill** (wypełnienie) w prawym panelu i kliknij próbkę koloru, żeby otworzyć próbnik kolorów.
2. **Wybierz rodzaj wypełnienia** - u góry próbnika wybierz **solid** (jednolite), **gradient**, **image** (obraz) lub **video** (wideo). Gradient płynnie przechodzi między kolorami i może być liniowy (w jednym kierunku), radialny (od środka na zewnątrz), kątowy (wokół punktu) lub rombowy.
3. **Dostosuj kolor** - przeciągnij kursor w polu koloru, użyj suwaka barwy, wpisz kod hex albo użyj pipety, żeby skopiować kolor z innego elementu.
4. **Ustaw krycie** - użyj suwaka krycia albo wpisz wartość procentową.
5. **Dodaj obrys** - w sekcji **Stroke** (obrys) dodaj kontur, wybierz jego kolor i grubość oraz zdecyduj, czy ma leżeć wewnątrz krawędzi kształtu, na jej środku czy na zewnątrz.

### Jak zapisać styl koloru?

Zaznacz kształt, który ma wybrany kolor, otwórz menu stylów w sekcji Fill (ikona z czterema kropkami), kliknij ikonę plusa i nazwij styl, na przykład „Akcent” albo „Status/Zajęta”. Żeby użyć go ponownie, zaznacz inny kształt i wybierz styl z listy. Jeśli później zmienisz styl, zaktualizuje się każdy element, który z niego korzysta.

Wybory kolorów nie są ostateczne. Jeśli testy pokażą problem, zmień kolor, a potem zaktualizuj styl i paletę, żeby twoje główne źródło odniesienia zawsze było aktualne.

::: tip Najważniejsze
Kolor tworzy wyróżnienie, znaczenie, nastrój i rozpoznawalność marki, ale jego znaczenie zależy od kultury. Barwa, jasność, nasycenie i krycie to właściwości, które możesz zmieniać. Ustal ograniczoną paletę, zrównoważ ją zasadą 60-30-10 i zapisuj kolory jako style, żeby pozostały spójne.
:::
