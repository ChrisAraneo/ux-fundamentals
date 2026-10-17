# Arkusze naklejek i komponenty

## Czym jest arkusz naklejek?

**Arkusz naklejek** (ang. *sticker sheet*), nazywany też **zestawem projektowym** (ang. *design kit*), to zbiór elementów i komponentów, których projekt używa najczęściej, zebranych w jednym miejscu. Nazwa pochodzi od dziecięcych arkuszy z naklejkami: możesz „odkleić” dowolny element i „nakleić” go w swoim projekcie, kopiując go i wklejając.

Arkusz naklejek jest częścią systemu projektowego albo pierwszym krokiem w jego stronę. Zwykle zawiera:

- **Typografię** - style tekstu, od największego nagłówka po najmniejszą etykietę.
- **Kolory** - paletę w postaci podpisanych próbek, łącznie z kolorami semantycznymi.
- **Przyciski** - każdy styl przycisku w każdym stanie.
- **Ikony** - zestaw ikon w standardowych rozmiarach.
- **Inne komponenty** - pola tekstowe, karty, chipy, paski nawigacji i wszystko inne, co się powtarza.

### Po co tworzyć arkusz naklejek?

- **Szybkość** - kopiujesz gotowe części, zamiast budować je od nowa.
- **Spójność** - wszyscy używają tych samych części, więc nikt przez przypadek nie stworzy przycisku z ostrymi rogami, kiedy wszystkie inne są zaokrąglone.
- **Jedno miejsce na zmiany** - zmieniasz komponent raz, a aktualizuje się każda jego kopia.
- **Łatwiejsza praca zespołowa** - nowi projektanci mogą od razu zacząć pracę, a programiści widzą każdy komponent, który muszą zbudować.

## Komponenty i instancje

**Komponent** (ang. *component*) to element projektu wielokrotnego użytku. W codziennym języku projektantów komponentem można nazwać każdą część wielokrotnego użytku, na przykład przycisk albo kartę. W Figmie to słowo ma też konkretne znaczenie: element zapisany za pomocą funkcji „Create component”.

Oryginał nazywa się **komponentem głównym** (ang. *main component*). Każda jego kopia to **instancja** (ang. *instance*). Kiedy zmieniasz komponent główny, na przykład jego kolor albo zaokrąglenie rogów, wszystkie instancje aktualizują się automatycznie. W instancji nadal możesz zmienić niektóre rzeczy, na przykład tekst etykiety, bez zrywania połączenia.

Żeby utworzyć komponent w Figmie, nadaj warstwie jasną nazwę, zaznacz ją i użyj jednego z tych sposobów: kliknij prawym przyciskiem myszy i wybierz „Create component”, kliknij ikonę „Create component” na pasku narzędzi albo naciśnij **Ctrl + Alt + K** (Windows) lub **Option + Command + K** (Mac). Twoje komponenty pojawią się wtedy w panelu **Assets**.

## Stany i warianty

Wiele komponentów nie zawsze wygląda tak samo. **Stan** (ang. *state*) to wizualna wersja komponentu, która pokazuje, w jakiej sytuacji się on teraz znajduje. Typowe stany to:

- **Domyślny** (ang. *enabled*, *default*) - zwykły wygląd komponentu.
- **Najechanie kursorem** (ang. *hover*) - wygląd, kiedy nad komponentem znajduje się kursor myszy (na komputerach).
- **Zaznaczony fokusem** (ang. *focused*) - wygląd, kiedy komponent jest wybrany za pomocą klawiatury albo innej technologii wspomagającej.
- **Wciśnięty** (ang. *pressed*) - wygląd w chwili stuknięcia lub kliknięcia.
- **Nieaktywny** (ang. *disabled*) - wygląd, kiedy komponentu nie można jeszcze użyć.
- **Wybrany** (ang. *selected*, *active*) - wygląd, kiedy komponent jest wybrany, na przykład bieżąca karta.

Pokazywanie stanów daje użytkownikom informację zwrotną: widzą, że aplikacja zareagowała na ich działanie. W Figmie możesz zgrupować wszystkie stany komponentu w jeden zestaw za pomocą funkcji **wariantów** (ang. *variants*), dzięki czemu w instancji przełączasz się między stanami jednym kliknięciem.

## Jak zbudować arkusz naklejek w Figmie

1. **Dodaj stronę** - utwórz nową stronę w pliku projektu i nazwij ją „Arkusz naklejek” albo „Zestaw projektowy”.
2. **Dodaj ramkę** - narysuj dużą ramkę, na przykład w rozmiarze ekranu komputera, żeby mieć dużo miejsca.
3. **Wybierz zasoby** - zbieraj elementy i komponenty w trakcie projektowania. Wszystko, co tworzysz i czego użyjesz ponownie, powinno trafić do arkusza naklejek.
4. **Zapisz je jako komponenty** - nazwij każdy zasób w panelu Layers i zamień go w komponent.
5. **Dodaj stany** - w komponentach interaktywnych dodaj każdy stan i połącz je w warianty.
6. **Uporządkuj według kategorii** - zgrupuj razem wszystkie kolory, wszystkie przyciski i tak dalej, z wyraźnymi nagłówkami sekcji. Do tych nagłówków użyj neutralnego, standardowego kroju pisma, żeby nie myliły się z typografią, którą pokazujesz.
7. **Rozmieść wszystko starannie** - stosuj te same zasady co w makietach: siatki, wydzielanie treści, przestrzeń negatywną i zasady Gestalt.

### Jak pokazać kolory i typografię?

Dla każdego koloru narysuj mały kwadrat albo koło, wypełnij go stylem koloru i podpisz nazwą oraz kodem hex, na przykład „Akcent, #00695C”. W przypadku typografii napisz przykładową linijkę w każdym stylu tekstu i podpisz ją nazwą stylu, krojem pisma, rozmiarem i grubością, na przykład „Nagłówek, Atkinson Hyperlegible Bold, 28 px”.

*Przykład z WashSlot:* arkusz naklejek WashSlot ma pięć sekcji. **Kolory** pokazują paletę 60-30-10, trzy kolory stanów i wersje dla trybu ciemnego. **Typografia** pokazuje style nagłówka, śródtytułu, tekstu głównego i etykiety. **Przyciski** pokazują przyciski wypełnione i konturowe w stanach domyślnym, wciśniętym, zaznaczonym fokusem i nieaktywnym. **Etykiety stanu** pokazują „Wolna”, „Zajęta” i „Nieczynna”, każdą z jej ikoną. **Karty** pokazują kartę pralki i kartę rezerwacji. Kiedy późniejsze testy pokazują, że „Zajęta” potrzebuje innej ikony, projektant zmienia ją raz w arkuszu naklejek, a aktualizuje się każdy ekran.

## Zachowuj materiały do portfolio

Figma automatycznie zapisuje twoją pracę, ale do portfolio potrzebujesz czegoś więcej niż końcowego pliku. Zapisuj zrzuty ekranu swojej pracy na różnych etapach, łącznie z wczesnymi szkicami, wersjami arkusza naklejek i porównaniami „przed i po”. Przechowuj je w folderze na komputerze albo w chmurze. Wykorzystasz je później w studium przypadku.

::: tip Najważniejsze
Arkusz naklejek zbiera kolory, typografię, przyciski, ikony i inne komponenty, których projekt używa najczęściej. Zapisuj każdą część wielokrotnego użytku jako komponent, żeby zmiana komponentu głównego aktualizowała każdą instancję. Uwzględnij wszystkie stany, zgrupuj je jako warianty i przejrzyście uporządkuj arkusz. Dzięki temu pracujesz szybciej i spójniej, a twoją pracę łatwiej udostępnić innym.
:::
