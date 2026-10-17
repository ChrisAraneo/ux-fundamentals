# Dostępność stron internetowych

## Wytyczne WCAG i rola projektanta

Zanim przetestujesz albo przekażesz stronę internetową, upewnij się, że mogą z niej korzystać osoby z niepełnosprawnościami. Głównym punktem odniesienia są **wytyczne WCAG** (ang. *Web Content Accessibility Guidelines*), publikowane przez World Wide Web Consortium (W3C). Wytyczne WCAG wyjaśniają, jak sprawić, żeby treści w sieci, na przykład tekst, obrazy, dźwięk i elementy interaktywne, były dostępne dla jak największej liczby osób. Nie musisz znać wszystkich wytycznych na pamięć, ale warto znać główne założenia i w razie potrzeby sprawdzać szczegóły.

Kod piszą programiści, ale wiele decyzji dotyczących dostępności to decyzje projektowe. Najlepiej przekazać je za pomocą **adnotacji** (ang. *annotations*), czyli notatek dodanych do makiet i prototypów, które wyjaśniają to, czego nie da się pokazać wizualnie. Najważniejsze są trzy rodzaje adnotacji: kolejność fokusu, poziomy nagłówków i etykiety.

## Kolejność fokusu

**Kolejność fokusu** (ang. *focus order*), nazywana też **kolejnością przechodzenia** (ang. *traversal order*) albo kolejnością nawigacji, to kolejność, w jakiej ludzie przechodzą przez elementy interaktywne strony, na przykład linki, przyciski i pola formularza. Według tej kolejności poruszają się użytkownicy czytników ekranu, a także osoby, które zamiast myszy albo ekranu dotykowego używają klawiatury i przechodzą od jednego elementu do następnego klawiszem Tab.

Standardowa kolejność biegnie od lewego górnego do prawego dolnego rogu, tak jak osoba czytająca od lewej do prawej przegląda stronę. Oznacz kolejność **numerami w kółkach** przy każdym elemencie interaktywnym. Szczególnie ważne jest oznaczenie elementów, które łamią standardową kolejność, oraz podstron, na których **fokus początkowy** (ang. *initial focus*) powinien zaczynać się gdzie indziej niż na pierwszym elemencie w lewym górnym rogu. Programiści korzystają z tych numerów, żeby zapisać właściwą kolejność w kodzie.

## Poziomy nagłówków

**Hierarchia** (ang. *hierarchy*) układa elementy według ich ważności, a nagłówki to najczytelniejszy sposób, żeby ją pokazać. Tekst nagłówków jest większy niż treść główna, a najważniejsze nagłówki są największe. Jak wiesz ze strony [Dopracowywanie wireframe'ów](./09-refining-wireframes), HTML używa znaczników nagłówków od H1 do H6: H1 dla tytułu strony, H2 dla głównych sekcji albo wyróżnionych ramek z informacjami, a H3 i niższych dla podsekcji. Czytniki ekranu odczytują te poziomy i pozwalają użytkownikom przeskakiwać między nagłówkami, więc w swoich makietach oznacz poziom każdego nagłówka.

## Etykiety

**Etykieta** (ang. *label*), nazywana też tekstem odczytywanym przez czytnik ekranu (ang. *screen reader verbalization*), to tekst, który technologie wspomagające odczytują dla elementu interaktywnego. Dobra etykieta nie zostawia wątpliwości, do czego służy przycisk, menu albo pole wyboru. Najbardziej potrzebuje jej przycisk, który ma tylko ikonę: ikona lupy powinna zostać odczytana jako „Szukaj”, a nie „Przycisk”.

Kiedy dodajesz adnotacje etykiet, opisz trzy rzeczy:

- **Etykietę** - słowa, które wypowiada czytnik ekranu, na przykład „Otwórz menu” albo „Zarezerwuj Pralkę 2 na 9:00”.
- **Rolę** - rodzaj elementu sterującego, na przykład przycisk, link, pole wyboru albo karta. Programiści nazywają to **rolą semantyczną** (ang. *semantic role*).
- **Grupowanie** - które elementy sterujące należą do siebie. Zgrupowanie zestawu pól wyboru albo terminów pozwala użytkownikom czytników ekranu zrozumieć, jak są ze sobą powiązane, i szybko przez nie przejść.

Programiści korzystają z tych adnotacji, żeby wybrać właściwe elementy HTML i w razie potrzeby dodatkowe atrybuty **ARIA** (ang. *Accessible Rich Internet Applications*), czyli zestawu atrybutów, które dodają do elementów strony informacje o dostępności.

## Kolor i kontrast

Zasady dotyczące kontrastu ze strony [Dostępne kolory](../high-fidelity-design/04-accessible-color) obowiązują przy każdym rozmiarze ekranu. Wybieraj ciemny tekst na jasnym tle albo jasny tekst na ciemnym tle i sprawdzaj każdą parę kolorów narzędziem do sprawdzania kontrastu, na przykład tym od **WebAIM** (ang. *Web Accessibility in Mind*), w odniesieniu do minimów WCAG: 4,5:1 dla zwykłego tekstu i 3:1 dla dużego tekstu i ważnych grafik. Unikaj par kolorów, które mylą osoby z daltonizmem, na przykład czerwonego i zielonego, oraz par zbyt do siebie podobnych dla osób z obniżoną wrażliwością na kontrast, na przykład jasnoszarego na białym.

## Powiększenie i duży tekst

Responsywna strona internetowa musi pozostać użyteczna, kiedy ludzie **ją powiększają** albo **zwiększają rozmiar tekstu**, a wiele osób słabowidzących robi to codziennie. Kiedy strona jest powiększona, układ powinien się ponownie rozmieścić (ang. *reflow*): elementy powinny się przestawić tak samo jak na mniejszym ekranie, zamiast na siebie nachodzić, być ucinane albo zmuszać ludzi do przewijania w bok, żeby przeczytać każdy wiersz. Wytyczne WCAG oczekują, że tekst będzie działał przy rozmiarze 200%, a treść ponownie się rozmieści bez przewijania w bok nawet przy powiększeniu 400% w przeglądarce na komputerze.

Pokaż programistom, jak ma to działać. Przygotuj dodatkową wersję najważniejszych makiet, która pokazuje widok powiększony obok domyślnego, i dodaj notatki o tym, co gdzie się przesuwa.

*Przykład z WashSlot:* projektant dodaje adnotacje do desktopowej podstrony rezerwacji:

| # | Element | Etykieta | Rola |
| --- | --- | --- | --- |
| 1 | Link „Przejdź do głównej treści” | Przejdź do głównej treści | Link (widoczny po otrzymaniu fokusu) |
| 2 | Karty dni od poniedziałku do niedzieli | „Sobota, 3 wolne terminy” | Karta, w grupie „Wybierz dzień” |
| 3 | Terminy w wybranym dniu | „9:00, Pralka 2, wolna” | Przycisk, w grupie „Wolne godziny w sobotę” |
| 4 | Link „Wstecz” | Wróć do strony głównej | Link |
| 5 | Przycisk „Dalej” | Przejdź do podsumowania | Przycisk |

Nagłówek H1 to „Zarezerwuj termin”, a wybrany dzień to nagłówek H2. Projektant przygotowuje też powiększoną wersję strony głównej: przy powiększeniu 400% strona desktopowa pokazuje układ na telefon, z kartami urządzeń w jednej kolumnie i nawigacją w menu „hamburger”, i nic nie jest ucięte. Na koniec projektant sprawdza nowe karty ogłoszeń: szary tekst daty na bladym morskim tle ma kontrast tylko 3,1:1, więc zostaje przyciemniony do grafitowego.

::: tip Najważniejsze
Wytyczne WCAG wyjaśniają, jak sprawić, żeby treści w sieci były dostępne. Projektanci wspierają to adnotacjami: ponumerowaną kolejnością fokusu, poziomami nagłówków od H1 do H6 oraz etykietami z ich rolami i grupowaniem. Sprawdzaj kontrast kolorów narzędziem, na przykład tym od WebAIM, i upewnij się, że układ ponownie się rozmieszcza, kiedy ludzie powiększają stronę albo tekst. Pokaż widok powiększony na dodatkowych makietach, żeby programiści wiedzieli, co zbudować.
:::
