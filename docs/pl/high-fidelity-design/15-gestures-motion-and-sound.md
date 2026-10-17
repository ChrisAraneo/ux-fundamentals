# Gesty, ruch i dźwięk

Prototyp, który tylko przeskakuje z ekranu na ekran, wydaje się sztywny. Gesty, ruch i dźwięk sprawiają, że przypomina prawdziwą aplikację, i pomagają użytkownikom zrozumieć, co się dzieje. Wiążą się też jednak z nowymi obowiązkami w zakresie dostępności.

## Gesty

**Gest** (ang. *gesture*) to sposób korzystania z urządzenia przez dotykanie ekranu palcem albo rysikiem. Najczęstsze gesty to:

- **Stuknięcie** (ang. *tap*) - szybkie dotknięcie ekranu. Jeden palec zwykle coś wybiera; niektóre aplikacje używają stuknięcia dwoma palcami jako skrótu, na przykład żeby otworzyć menu kontekstowe.
- **Podwójne stuknięcie** (ang. *double tap*) - dwa szybkie stuknięcia, często używane do powiększania albo do „polubienia” czegoś.
- **Długie przytrzymanie** (ang. *long press*) - dotknięcie i przytrzymanie palca, często używane do otwierania dodatkowych opcji.
- **Przesunięcie palcem** (ang. *swipe*) - szybkie przesunięcie palca po ekranie, poziomo albo pionowo. Służy do przechodzenia między ekranami, przeglądania karuzeli albo odsłaniania dodatkowych działań na elemencie listy.
- **Przewijanie** (ang. *scroll*) - wolniejsze przesuwanie, które przenosi treść w górę, w dół albo na boki.
- **Przeciąganie** (ang. *drag*) - dotknięcie elementu, przytrzymanie go i przesunięcie palca, żeby przenieść element. Ściąganie panelu powiadomień w telefonie to przeciąganie.
- **Zsunięcie lub rozsunięcie palców** (ang. *pinch*) - przybliżanie do siebie albo oddalanie dwóch palców, żeby pomniejszyć lub powiększyć widok, na przykład na mapie albo zdjęciu.

### Gesty różnią się między platformami

Android i iOS stosują różne wytyczne projektowe: Android korzysta z **Material Design**, a iOS z **Human Interface Guidelines (HIG)** Apple. Niektóre gesty działają w każdym z nich inaczej. Na przykład w iOS zwykle wraca się, przesuwając palcem od lewej krawędzi ekranu albo stukając przycisk powrotu w lewym górnym rogu, a Android ma dodatkowo systemowy gest albo przycisk powrotu. Dlatego każdy, kto pożyczy telefon znajomego z innym systemem, może nagle poczuć się zagubiony. Poznaj wytyczne platform, na które projektujesz, i testuj swoje projekty na prawdziwych urządzeniach z różnymi systemami.

## Ruch

**Ruch** (ang. *motion*) to animowanie elementów projektu, żeby kierować uwagę i wyjaśniać, co się dzieje. Małe animacje pomagają użytkownikom zauważyć zmiany, które inaczej mogliby przeoczyć, i zrozumieć, jak ekrany są ze sobą powiązane.

Na przykład kiedy dodajesz produkt do koszyka, ikona koszyka może na chwilę podskoczyć i pokazać nową liczbę. Bez tej animacji łatwo byłoby nie zauważyć, że cokolwiek się wydarzyło. Stuknięcie to gest, a podskok to ruch, który daje ci informację zwrotną.

Ruch może:

- **Dawać informację zwrotną** - potwierdzać, że działanie się udało, jak ptaszek, który sam się rysuje po rezerwacji.
- **Pokazywać powiązania** - ekran wsuwający się z prawej strony sugeruje „dalej”, a wysuwający się w prawo sugeruje „wstecz”.
- **Kierować uwagę** - delikatny ruch przyciąga wzrok do czegoś nowego, na przykład do powiadomienia.
- **Pomagać w orientacji w aplikacji** - spójne przejścia pomagają użytkownikom zbudować w głowie mapę aplikacji.

### Animacje w Figmie

Dla każdego połączenia Figma pozwala wybrać animację: **Instant** (bez przejścia), **Dissolve** (przenikanie), **Smart animate** (płynnie animuje warstwy, które występują na obu ekranach), **Move in** i **Move out** (nowy ekran wsuwa się nad bieżący albo zsuwa się z niego), **Push** (nowy ekran wypycha stary) oraz **Slide in** i **Slide out** (podobnie jak move, z lekkim przesunięciem bieżącego ekranu). Możesz też ustawić **kierunek**, **czas trwania** w milisekundach i **wygładzanie ruchu** (ang. *easing*), które określa, czy ruch przyspiesza, czy zwalnia, żeby wydawał się naturalny, a nie mechaniczny.

Dobra zasada mówi, że przeciwne działania dostają przeciwne animacje. Jeśli ekran otwiera się, wsuwając się od dołu, powinien zamykać się, zsuwając się z powrotem w dół. Większość przejść utrzymuj krótką (od 200 do 400 milisekund) i prostą. Często wystarczy „Instant” albo krótki push.

*Przykład z WashSlot:* kiedy mieszkaniec stuka „Potwierdź rezerwację”, projektant używa **Smart animate**: przycisk zmniejsza się do koła, a w jego środku w ciągu 400 milisekund rysuje się ptaszek. Na ekranie rezerwacji mieszkańcy mogą **przesuwać palcem** w lewo i w prawo, żeby przechodzić między dniami, a karta wybranego dnia przesuwa się z krótką animacją.

## Dźwięk i wideo

### Dźwięk

Dźwięk może dawać przydatną informację zwrotną: krótki sygnał, kiedy przychodzi wiadomość, ciche kliknięcie po naciśnięciu przycisku albo inny sygnał, kiedy przesyłanie pliku się nie uda. Dźwięki mogą sprawić, że interakcja wydaje się bardziej ludzka. Ale dźwięk może też irytować albo zawstydzać użytkowników, na przykład w cichym biurze. Używaj dźwięku tylko wtedy, kiedy przekazuje informację, i zawsze pozwól go łatwo wyłączyć.

### Wideo

Wideo może przyciągnąć uwagę i wyjaśnić rzeczy, które trudno opisać, na przykład jak korzystać z jakiejś funkcji. Daj użytkownikom kontrolę: powinni móc odtworzyć, wstrzymać, obejrzeć ponownie i wyciszyć wideo oraz wyłączyć jego autoodtwarzanie.

## Dostępność gestów, ruchu i dźwięku

1. **Gest nigdy nie może być jedynym sposobem** - niektóre osoby nie mogą wykonać pewnych gestów, na przykład z powodu ograniczonej sprawności rąk albo dlatego, że nie widzą ekranu. Wszystko, co da się zrobić gestem, powinno też działać po zwykłym stuknięciu widocznego przycisku.
2. **Ruch powinien być spokojny i krótki** - bardzo szybki ruch może niepokoić, a długi rozprasza. Wytyczne WCAG wymagają, żeby wszystko, co porusza się, miga albo przewija się automatycznie dłużej niż pięć sekund, dało się wstrzymać, zatrzymać albo ukryć. Treść nie powinna też nigdy błyskać częściej niż trzy razy na sekundę, bo błyski mogą wywołać napady padaczkowe.
3. **Pozwól wyłączyć ruch** - u niektórych osób animacje wywołują zawroty głowy albo mdłości. Respektuj ustawienie systemu operacyjnego „ogranicz ruch” i zaoferuj własne ustawienie, które wyłącza animacje, zapętlone efekty i autoodtwarzanie.
4. **Zapewnij alternatywy dla dźwięku i wideo** - dodawaj do filmów napisy i transkrypcje, a każdemu dźwiękowi zapewnij alternatywę wizualną albo wibracje, żeby informacja docierała do osób głuchych, słabosłyszących albo po prostu z wyłączonym dźwiękiem.

*Przykład z WashSlot:* przesuwanie palcem między dniami to tylko skrót; mieszkańcy mogą też stuknąć kartę dowolnego dnia. Kiedy włączone jest ustawienie „ogranicz ruch”, animację ptaszka zastępuje proste przenikanie. Przypomnienie przed rezerwacją może mieć postać dźwięku, wibracji, błysku lampki telefonu albo wszystkich trzech naraz, co ma znaczenie dla Grace, która nie zawsze słyszy swój telefon.

::: tip Najważniejsze
Gesty takie jak stuknięcie, przesunięcie palcem, przeciąganie i zsunięcie palców pozwalają użytkownikom korzystać z urządzenia dotykiem i różnią się między platformami. Ruch daje informację zwrotną, pokazuje powiązania i kieruje uwagę; niech będzie krótki i spójny. Używaj dźwięku i wideo tylko wtedy, kiedy pomagają, i zawsze zapewniaj alternatywy: przycisk dla każdego gestu, sposób na wyłączenie ruchu oraz napisy albo sygnały wizualne dla dźwięku.
:::
