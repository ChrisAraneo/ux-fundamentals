# Systemy projektowe

## Czym jest system projektowy?

**System projektowy** (ang. *design system*) to zbiór elementów wielokrotnego użytku i wytycznych, który pomaga zespołom projektować i budować produkty według wspólnych standardów. Zamiast żeby każdy projektant na nowo decydował, jak ma wyglądać przycisk, system projektowy odpowiada na to pytanie raz, za wszystkich.

Możesz myśleć o systemie projektowym jak o zestawie klocków z instrukcją. Klocki to kolory, typografia, ikony i komponenty. Instrukcja wyjaśnia, kiedy i jak ich używać, żeby wszystko, co zbuduje zespół, do siebie pasowało.

System projektowy to coś więcej niż **przewodnik stylu** (ang. *style guide*), czyli dokument opisujący styl wizualny. Zawiera też gotowe komponenty, zasady ich używania, a często również kod, którego potrzebują programiści.

## Co zawiera system projektowy?

### Style wizualne

Podstawowe decyzje wizualne: palety kolorów, typografia, ikonografia, odstępy, siatki układu, kształty (na przykład zaokrąglenie rogów), uniesienie (ang. *elevation*), czyli to, jak wysoko elementy wydają się unosić nad tłem, oraz ruch. Zdefiniowanie ich raz pomaga, żeby marka wszędzie wyglądała tak samo.

### Wytyczne

Zasady używania stylów i komponentów: zasady projektowe, wytyczne dotyczące pisania (ton wypowiedzi, gramatyka i nazewnictwo), wymagania dostępności oraz instrukcje, kiedy używać którego komponentu.

### Wzorce interfejsu

Elementy interfejsu wielokrotnego użytku, zwykle uporządkowane od najmniejszych do największych:

1. **Elementy** - najmniejsze części, na przykład kolor, ikona albo styl tekstu.
2. **Komponenty** - elementy połączone w coś użytecznego, na przykład przycisk złożony z kształtu, etykiety i ikony.
3. **Moduły** - grupy komponentów, na przykład nagłówek strony z logo, tytułem i ikoną menu.
4. **Szablony** - moduły ułożone w kompletny układ strony lub ekranu.

### Kod

Wiele systemów projektowych zawiera kod każdego komponentu, dzięki czemu programiści mogą zbudować dokładnie to, co zaprojektowali projektanci. Niektóre zawierają też **tokeny projektowe** (ang. *design tokens*), czyli nazwane wartości, na przykład „color-accent” albo „spacing-16”, z których korzystają wspólnie projektanci i programiści.

## Dlaczego zespoły korzystają z systemów projektowych

- **Spójność** - kiedy wszyscy używają tych samych części, produkt wszędzie wygląda i działa tak samo, a użytkownicy szybciej uczą się z niego korzystać.
- **Tożsamość marki** - kolory, typografia i kształty pozostają rozpoznawalne we wszystkich produktach firmy.
- **Skalowalność** - system projektowy jest **skalowalny** (ang. *scalable*): dalej dobrze działa, kiedy rośnie produkt, zespół albo ilość pracy. Nowe ekrany i nowe osoby w zespole mogą korzystać z istniejącego systemu, zamiast zaczynać od zera.
- **Wydajność** - projektanci spędzają mniej czasu na powtarzalnych decyzjach, a więcej na prawdziwych problemach, co oszczędza czas i pieniądze.
- **Lepsza współpraca** - projektanci i programiści mają wspólny język i jedno źródło prawdy, więc przy przekazywaniu projektu jest mniej nieporozumień.

Nie każdy zespół ma kompletny system projektowy. W dużej firmie prawdopodobnie będziesz pracować z systemem, który już istnieje. W małej firmie albo startupie możesz pomagać budować go od zera. W obu przypadkach warto umieć stosować się do systemu i proponować jego ulepszenia.

## Publiczne systemy projektowe

Kilka firm udostępnia swoje systemy projektowe publicznie. Możesz je przeglądać za darmo i to jeden z najlepszych sposobów, żeby nauczyć się dobrego projektowania interfejsów, bo każdy komponent ma wyjaśnienia, przykłady i wskazówki dotyczące dostępności:

- **Material Design** - system projektowy Google, używany w Androidzie oraz w wielu stronach internetowych i aplikacjach.
- **Human Interface Guidelines** - wytyczne Apple dla iOS, iPadOS, macOS, watchOS i innych platform.
- **Fluent** - system projektowy Microsoftu dla Windowsa i produktów Microsoftu.
- **Polaris** - system projektowy Shopify dla narzędzi, z których korzystają sprzedawcy internetowi.
- **U.S. Web Design System** - używany do budowania stron internetowych rządu federalnego Stanów Zjednoczonych.

Wiele z nich oferuje **zestawy UI** (ang. *UI kits*) dla Figmy, czyli pliki z gotowymi komponentami, które możesz skopiować do swoich projektów. Znajdziesz je, podobnie jak zestawy przygotowane przez innych projektantów, w społeczności Figmy (Figma Community).

## Korzystanie z systemu projektowego w makietach

Z istniejącego systemu projektowego możesz korzystać na różne sposoby:

- **Używaj komponentów bez zmian** - w przypadku standardowych części, takich jak pola tekstowe albo okna dialogowe.
- **Dostosowuj komponenty** - zmieniaj kolory, typografię albo ikony, żeby pasowały do twojej marki.
- **Łącz różne źródła** - zestawiaj zapożyczone komponenty z własnymi.

W Figmie możesz kopiować komponenty z zestawu UI albo przeciągać je z panelu **Assets**. Skopiowany komponent to **instancja** (ang. *instance*) połączona z oryginałem. Jeśli musisz zmienić jej strukturę, na przykład podmienić ikonę, której zestaw nie pozwala podmienić, kliknij ją prawym przyciskiem myszy i wybierz **Detach instance** (odłącz instancję). Uważaj: odłączona kopia nie aktualizuje się już, kiedy zmienia się oryginał.

Kiedy zapożyczasz komponenty, zawsze dostosuj je do swojego projektu: używaj własnych stylów kolorów zamiast kolorów z zestawu, własnych stylów tekstu zamiast jego fontów i własnej skali odstępów. Zapożyczony komponent, którego nie dostosujesz, wygląda, jakby pochodził z innej aplikacji.

*Przykład z WashSlot:* projektant nie ma pełnego systemu projektowego, więc korzysta z Material Design. Dolny pasek nawigacji, przełącznik przypomnień i wybór daty na ekranie „Moje rezerwacje” pochodzą z zestawu Material UI. Projektant nakłada na nie własne style kolorów i tekstu WashSlot, zastępuje domyślne ikony wybranym zestawem ikon i sprawdza, czy każdy zapożyczony komponent nadal spełnia minimalne wymagania kontrastu.

## Systemy projektowe a dostępność

Systemy projektowe działają na poziomie komponentów, więc dostępność trzeba wbudować w każdy komponent. Dobrze zaprojektowany przycisk ma na przykład jasną etykietę, którą odczytują czytniki ekranu, taką jak „Zarezerwuj termin, przycisk”, widoczny stan fokusu dla osób korzystających z klawiatury, wystarczający kontrast i odpowiednio duży obszar dotyku. Kiedy komponent w systemie projektowym jest dostępny, korzysta na tym każdy ekran, który go używa.

Najlepszy sposób, żeby zrozumieć, czego potrzebują dostępne komponenty, to dowiedzieć się, jak ludzie naprawdę korzystają z technologii wspomagających. Rozmawiaj z osobami z niepełnosprawnościami, zapraszaj je do badań i myśl o dostępności od samego początku, a nie jako o łatce dodanej tuż przed premierą. Rozwiązania projektowane razem z osobami z niepełnosprawnościami często pomagają znacznie większej liczbie użytkowników.

::: tip Najważniejsze
System projektowy to zbiór stylów, komponentów, wytycznych i kodu wielokrotnego użytku, który utrzymuje spójność produktów i wydajność zespołów. Jest skalowalny, wzmacnia tożsamość marki i pomaga projektantom współpracować z programistami. Przeglądaj publiczne systemy, takie jak Material Design i Human Interface Guidelines, dostosowuj zapożyczone komponenty do własnych stylów i zadbaj o dostępność każdego komponentu.
:::
