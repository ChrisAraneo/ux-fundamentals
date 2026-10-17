# Projektowanie responsywne

![Projektowanie responsywne](/images/responsive-design.png)

## Czym jest projektowanie responsywne?

Projektowanie responsywne (responsive design) sprawia, że strona internetowa automatycznie dopasowuje swój wygląd do rozmiaru ekranu urządzenia. Nie chodzi tylko o zmianę rozmiaru elementów. Komponenty mogą zmieniać położenie i sposób ułożenia, aby zapewnić jak najlepsze doświadczenie użytkownika (user experience) na różnych urządzeniach.

## Dlaczego projektowanie responsywne jest ważne?

Projektowanie responsywne jest ważne, ponieważ większość ludzi korzysta z kilku urządzeń (74% ma komputer, 81% ma smartfon) i oczekuje, że strony będą dobrze działać na każdym z nich. Zdecydowana większość projektantów UX (90%) pracuje nad projektami webowymi, dlatego opanowanie projektowania responsywnego jest kluczowe dla rozwoju zawodowego w tej branży. Oszczędza też czas i pieniądze, bo wystarczy zbudować jedną stronę, która działa na każdym urządzeniu, zamiast tworzyć osobne wersje dla każdego rozmiaru ekranu.

## Aplikacje natywne i responsywne aplikacje webowe

Oba podejścia mają swoje miejsce w projektowaniu UX. Zrozumienie ich zalet i wad pomaga projektantom wybrać właściwe rozwiązanie na podstawie potrzeb użytkowników, ograniczeń projektu i celów biznesowych.

### Aplikacje natywne

**Aplikacja natywna** (native app) to aplikacja pobierana na urządzenie i uruchamiana z ikony na ekranie głównym.

**Zalety**:
- Działa offline po pobraniu i instalacji
- Integruje się z funkcjami urządzenia (aparat, mikrofon, usługi lokalizacji)
- Daje większą swobodę projektową (gesty, animacje)
- Oferuje więcej możliwości personalizacji

**Wady**:
- Jest droższa w budowie
- Wymaga osobnych wersji na iOS i Androida
- Musi przejść proces zatwierdzania w sklepie z aplikacjami
- Zajmuje miejsce w pamięci urządzenia
- Stanowi problem na urządzeniach z małą ilością pamięci

### Responsywne aplikacje webowe

**Responsywna aplikacja webowa** (responsive web app) to strona internetowa otwierana w przeglądarce mobilnej, która dopasowuje się do urządzenia.

**Zalety**:
- Jest szybsza i tańsza w budowie
- Nie wymaga pobierania, więc oszczędza pamięć urządzenia
- Jest dostępna bez sklepu z aplikacjami
- Treść można przeglądać na wszystkich urządzeniach
- Oszczędza czas, zasoby i pieniądze

**Wady**:
- Wymaga połączenia z internetem lub zasięgu sieci komórkowej (brak dostępu offline)
- Użytkownikom trudniej ją znaleźć (nie ma jej w sklepach z aplikacjami)
- Trudno ją utrzymać na wszystkich rozmiarach ekranów
- Może być trudno dostępna dla użytkowników w odległych regionach

## Błędy w projektowaniu responsywnym

- Przyciski, których nie widać
- Grafiki wychodzące poza krawędź ekranu
- Ucięta lub niedostępna treść
- Słaba użyteczność na niektórych urządzeniach

Przykładem złego UX jest obraz, na którym treść wychodzi poza granice ekranu, co powoduje problemy z użytecznością.

## Breakpointy

**Breakpointy** (punkty przełamania) to wizualne granice, które określają, kiedy układ responsywny powinien się zmienić, aby wszystkie elementy i komponenty dobrze się mieściły.

Przykład na żywo:
- Zmień kształt okna przeglądarki na komputerze na pionowy prostokąt
- W pewnym momencie strona **przełączy się na wersję mobilną**
- Zmiana następuje automatycznie po osiągnięciu breakpointu
- Odpowiada za nią kod strony

Dzięki breakpointom **nie musisz** tworzyć osobnego projektu dla każdego możliwego urządzenia i rozmiaru ekranu. Projektujesz dla **kilku kluczowych rozmiarów**.

## Popularne rozmiary ekranów mobilnych

Popularne rozmiary ekranów to m.in. iPhone 14 Pro (393px × 852px), iPhone 14 Pro Max (430px × 932px), Android Large (360px × 800px) i Android Small (360px × 640px).

**Wskazówka:** Zacznij od popularnego rozmiaru, np. 375px × 667px (iPhone SE) lub 360px × 800px (Android). Później możesz dostosować projekt do konkretnych urządzeń.

## Powyżej linii zgięcia

**Powyżej linii zgięcia** (above the fold) to treść strony, którą widać bez przewijania.

## Kluczowe pytania projektowe

Projektując dla różnych rozmiarów ekranów, zastanów się nad:

1. **Położeniem elementów**
   - Czy elementy na stronie muszą zmienić położenie?
   - Które części muszą pozostać **powyżej linii zgięcia** na mniejszych ekranach?
   - Które można przenieść **poniżej linii zgięcia**?
2. **Skalowaniem obrazów**
   - Jak trzeba skalować obrazy?
   - Czy niektóre obrazy (np. **obrazy hero**) muszą pozostać duże na wszystkich rozmiarach ekranów?
   - Jaki jest minimalny akceptowalny rozmiar dla każdego typu obrazu?
3. **Dostosowaniem nawigacji**
   - Jak elementy nawigacji zmienią się wraz z rozmiarem ekranu?
   - Przykład: przejście z **górnego paska nawigacji** na **menu hamburgerowe**
   - Które elementy interaktywne muszą zmienić formę?

## Źródła obrazów

- https://www.pexels.com/pl-pl/zdjecie/szary-telefon-obrotowy-209716/
- https://www.pexels.com/pl-pl/zdjecie/staroswiecki-vintage-klasyczny-ekran-12752566/
