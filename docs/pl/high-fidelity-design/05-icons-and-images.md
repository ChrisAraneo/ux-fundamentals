# Ikony i obrazy

## Czym są ikony?

**Ikony** (ang. *icons*) to małe obrazki lub symbole, które oznaczają działanie, narzędzie albo miejsce w aplikacji. **Ikonografia** (ang. *iconography*) to system ikon, z którego korzysta produkt, i to, jak ikony są ze sobą powiązane. Dobrze użyte ikony:

- **Oszczędzają miejsce** - jeden mały symbol może zastąpić słowo lub całe wyrażenie.
- **Przyciągają uwagę** - ludzie zauważają obrazki szybciej niż tekst.
- **Pomagają się poruszać** - ikony na pasku nawigacji pokazują, dokąd prowadzi każde stuknięcie.
- **Wyrażają markę** - spójny styl ikon jest częścią wyglądu produktu.
- **Pokonują bariery językowe** - dobrze znany symbol można zrozumieć bez czytania.

Niektóre ikony są prawie uniwersalne na stronach internetowych i w aplikacjach: **domek** oznacza „ekran główny”, a **lupa** - „wyszukiwanie”. Inne, na przykład serce dla „ulubionych” albo dzwonek dla „powiadomień”, też są powszechnie znane. W twoich projektach niemal na pewno pojawi się kilka z nich.

## Skąd brać ikony

Rzadko trzeba rysować ikony od zera. Darmowe zestawy ikon open source są dostępne w wielu systemach projektowych, na przykład Material Symbols w Material Design od Google i SF Symbols w Human Interface Guidelines od Apple. Biblioteki takie jak Font Awesome również oferują tysiące ikon. Wiele z nich jest dostępnych jako wtyczki do Figmy lub pliki społeczności, więc możesz wstawiać je bezpośrednio.

Jeśli żadna istniejąca ikona nie pasuje, możesz zaprojektować własną. Postaraj się, żeby była prosta, i narysuj ją w tym samym stylu co resztę zestawu ikon: z tą samą grubością linii, tym samym stylem narożników i w tym samym rozmiarze.

## Jak dodawać i dostosowywać ikony w Figmie

1. **Użyj właściwego formatu** - ikony najlepiej sprawdzają się jako pliki **SVG**, czyli w formacie wektorowym, który pozostaje ostry w każdym rozmiarze.
2. **Wstaw ikonę** - przeciągnij plik na obszar roboczy, użyj wtyczki albo wybierz „Place image” (umieść obraz) z menu narzędzi kształtów.
3. **Zmieniaj rozmiar proporcjonalnie** - przytrzymaj **Shift** podczas przeciągania narożnika, żeby szerokość i wysokość zmieniały się razem. Typowe rozmiary ikon to 20 px, 24 px i 32 px.
4. **Dopasuj kolory** - zastosuj styl koloru z twojej palety, żeby ikona wyglądała jak część projektu.
5. **Dodaj etykietę** - umieść krótką etykietę tekstową pod ikoną lub obok niej, korzystając ze swoich stylów tekstu.
6. **Zapisz ją jako komponent** - zamień ikonę w komponent, żeby móc używać jej wszędzie i aktualizować w jednym miejscu. Więcej o komponentach dowiesz się na stronie [Arkusze naklejek i komponenty](./13-sticker-sheets-and-components).

## Projektowanie ikon dla wszystkich

### Czy ikona jest uniwersalna?

Niektóre symbole znaczą co innego w różnych regionach. Skrzynka pocztowa, gest dłoni albo znak oznaczający „tak” mogą być jasne w jednym kraju, a mylące, a nawet obraźliwe w innym. Wybieraj ikony, które rozpoznają ludzie z różnych środowisk.

### Czy ikona ma etykietę?

Krótka etykieta tekstowa sprawia, że ikona jest zrozumiała dla wszystkich, także dla osób, które dopiero poznają technologię albo nie znają danego symbolu. Dla użytkowników czytników ekranu każda ikona, która coś znaczy, potrzebuje też **tekstu alternatywnego** (ang. *alternative text, alt text*), czyli krótkiego opisu, który czytnik ekranu odczytuje na głos. Czytniki ekranu nie potrafią zinterpretować obrazka; mogą odczytać tylko jego opis.

### Czy ikona pasuje do marki?

Wszystkie ikony w produkcie powinny mieć jeden styl: te same kolory, tę samą grubość linii i podobny poziom szczegółowości. Pojedyncza ikona w innym stylu wygląda nie na miejscu i sprawia, że produkt wydaje się niedokończony.

*Przykład z WashSlot:* dolny pasek nawigacji zawiera trzy ikony Material Symbols, każdą z etykietą: domek dla „Pralki” (ekran główny), flagę dla „Zgłoś” i kalendarz dla „Moje rezerwacje”. Projektant rozważał ikonę pralki dla „Zarezerwuj termin”, ale w szybkim teście na korytarzu dwie osoby uznały, że oznacza ona „ustawienia pralki”. Przycisk pokazuje teraz ikonę plusa **i** tekst „Zarezerwuj termin”, a projektant zapisuje ikonę jako rzecz do ponownego sprawdzenia w następnym badaniu użyteczności.

## Podstawowe elementy wizualne

Oprócz tekstu, koloru i ikon każdy projekt składa się z kilku podstawowych elementów. Nie potrzebujesz talentu artystycznego, żeby dobrze z nich korzystać.

- **Linie** - linia łączy dwa punkty. Może oddzielać sekcje, łączyć powiązane ze sobą treści albo coś podkreślać, na przykład jako cienka linia pod nagłówkiem.
- **Rozmiar** - rozmiar elementu zawsze ocenia się w odniesieniu do innych elementów i do ekranu. Na telefonie rozmiar ma duże znaczenie: zbyt mały przycisk trudno stuknąć, co prowadzi do pomyłek.
- **Kształt** - linie, które zamykają przestrzeń, tworzą kształt, na przykład prostokąt, koło albo kartę z zaokrąglonymi rogami. Kształty pomagają ludziom rozpoznać, do czego służą elementy; na przykład koło z X często zamyka okno.
- **Obraz** - zdjęcie, ilustracja, animacja lub GIF. Obrazy opowiadają historie i wywołują emocje bez słów, więc wybieraj takie, które pasują do twoich użytkowników i ich sytuacji.

## Korzystanie z obrazów

Obrazy w produkcie powinny wspierać cel użytkownika, a nie tylko wypełniać miejsce. Kilka praktycznych wskazówek:

- **Szukaj darmowych obrazów** - serwisy ze zdjęciami stockowymi, takie jak Unsplash i Pexels, oraz biblioteki ilustracji oferują obrazy, których możesz używać w makietach. Zanim użyjesz obrazu w prawdziwym produkcie, zawsze sprawdź licencję.
- **Pokazuj prawdziwą różnorodność** - jeśli na twoich obrazach są ludzie, pokaż osoby w różnym wieku, o różnym kolorze skóry, różnej budowie ciała i różnych możliwościach.
- **Dodaj tekst alternatywny** - każdy obraz, który coś znaczy, potrzebuje krótkiego opisu dla czytników ekranu. Obrazy czysto dekoracyjne można oznaczyć jako dekoracyjne, żeby czytniki ekranu je pomijały.
- **Sprawdź szczegóły** - upewnij się, że obrazy nie są rozciągnięte, rozmazane ani niezręcznie przycięte i że poprawnie się wczytują.

*Przykład z WashSlot:* **pusty stan** (ang. *empty state*) ekranu „Moje rezerwacje” pokazuje prostą ilustrację stosu złożonych ręczników z tekstem „Nie masz jeszcze rezerwacji. Zarezerwuj termin, żeby zacząć.”. Ilustracja jest oznaczona jako dekoracyjna, więc czytniki ekranu ją pomijają, bo tekst obok niej mówi już wszystko, czego potrzebują użytkownicy.

::: tip Najważniejsze
Ikony oszczędzają miejsce, przyciągają uwagę i pomagają w nawigacji, ale tylko wtedy, gdy wszyscy je rozumieją. Wybieraj powszechnie rozpoznawalne ikony, dodawaj etykiety tekstowe i tekst alternatywny oraz trzymaj się jednego spójnego stylu. Świadomie korzystaj z linii, rozmiaru, kształtu i obrazów i dbaj o to, żeby każdy obraz był adekwatny, pokazywał różnorodność i miał opis dla czytników ekranu.
:::
