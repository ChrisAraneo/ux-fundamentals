# Dostępne kolory

## Dlaczego kolor wymaga szczególnej uwagi

Kolor pomaga przyciągać uwagę i wyrażać markę, ale nie wszyscy widzą kolory tak samo. Jeśli ważna informacja zależy wyłącznie od koloru, część użytkowników ją przeoczy. Projektowanie z myślą o dostępności pomaga nie tylko osobom z niepełnosprawnościami. Wyraźny kontrast pomaga też komuś, kto czyta z telefonu w ostrym słońcu albo w słabo oświetlonej pralni w piwnicy.

Głównym punktem odniesienia dla dostępnego projektowania cyfrowego są **wytyczne WCAG** (ang. *Web Content Accessibility Guidelines*), publikowane przez World Wide Web Consortium (W3C). WCAG obejmują wiele rodzajów niepełnosprawności, w tym wzrokowe, słuchowe, ruchowe, związane z mową, poznawcze i neurologiczne. Ta strona skupia się na trzech kwestiach, które dotyczą koloru: daltonizmie, obniżonej wrażliwości na kontrast i nadwrażliwości na światło.

## Daltonizm

**Daltonizm** (ang. *color blindness*), nazywany też zaburzeniami widzenia barw, utrudnia odróżnianie niektórych kolorów. Najczęstszym rodzajem jest daltonizm czerwono-zielony; daltonizm niebiesko-żółty występuje rzadziej, a całkowita ślepota barw, przy której człowiek w ogóle nie widzi kolorów, jest rzadka.

### Jak projektować z myślą o daltonizmie?

1. **Nigdy nie polegaj wyłącznie na kolorze** - łącz kolor z ikoną, etykietą tekstową lub wzorem. Pole z błędem powinno mieć czerwony obrys **i** ikonę ostrzeżenia **i** komunikat, na przykład „Wpisz prawidłowy adres e-mail”.
2. **Dodaj wzory lub faktury** - na wykresach nadaj słupkom lub fragmentom różne wzory, na przykład paski i kropki, żeby dało się je odróżnić bez koloru.
3. **Unikaj ryzykownych par obok siebie** - połączenia takie jak czerwony i zielony, zielony i brązowy, niebieski i fioletowy, zielony i niebieski, jasnozielony i żółty oraz niebieski lub zielony z szarym są dla wielu osób trudne do odróżnienia. Nadal możesz używać tych kolorów, ale nie umieszczaj ich obok siebie, gdy przekazują kluczowe informacje.
4. **Testuj w symulatorze** - symulatory daltonizmu i wtyczki do Figmy pokazują, jak twój projekt wygląda przy różnych rodzajach widzenia barw.

*Przykład z WashSlot:* w pierwszej makiecie stan pralki był pokazany tylko kolorową kropką: zieloną dla wolnej, bursztynową dla zajętej i czerwoną dla nieczynnej. W symulatorze daltonizmu czerwono-zielonego stany „wolna” i „nieczynna” wyglądały prawie tak samo. Projektant dodał do każdego stanu etykietę tekstową i ikonę: ptaszek z napisem „Wolna”, zegar z napisem „Zajęta, wolna za 25 min” i trójkąt ostrzegawczy z napisem „Nieczynna”.

## Obniżona wrażliwość na kontrast

**Wrażliwość na kontrast** (ang. *contrast sensitivity*) to zdolność odróżniania obiektu od jego tła. Osoby z **obniżoną wrażliwością na kontrast** widzą obiekty jako przygaszone lub rozmazane. Zdarza się to coraz częściej z wiekiem, a każdy doświadcza tego w trudnych warunkach, na przykład patrząc na ciemny ekran w jasnym świetle.

**Współczynnik kontrastu** (ang. *contrast ratio*) mierzy różnicę jasności (luminancji) między tekstem a jego tłem. Wynosi od 1:1 (brak kontrastu, na przykład biały na białym) do 21:1 (czarny na białym). WCAG określają następujące minimalne wartości dla poziomu AA, do którego dąży większość organizacji:

- **Zwykły tekst** - potrzebuje współczynnika co najmniej **4,5:1**.
- **Duży tekst** - co najmniej **3:1**. „Duży” oznacza mniej więcej 24 px w odmianie regularnej lub 19 px pogrubiony i więcej.
- **Ikony, obramowania pól tekstowych i inne ważne grafiki** - co najmniej **3:1** względem otoczenia.

Bardziej rygorystyczny poziom AAA wymaga 7:1 dla zwykłego tekstu. Nie musisz samodzielnie obliczać współczynników: robią to internetowe narzędzia do sprawdzania kontrastu i wtyczki do Figmy, gdy wpiszesz dwa kody hex.

*Przykład z WashSlot:* pierwsza etykieta „Zajęta” miała jaskrawy bursztynowy kolor #F2B705 na bladej morskiej karcie. Narzędzie do sprawdzania kontrastu pokazało tylko 1,55:1, daleko poniżej minimum. Projektant przyciemnił kolor do #8A5A00, który osiąga 5,05:1. Zieloną etykietę „Wolna” na tej samej karcie również sprawdzono i przyciemniono z #1B7F3B (4,32:1, czyli tuż poniżej progu) do #146C2E (5,57:1). Biały tekst na głębokim morskim przycisku „Zarezerwuj termin” osiąga 6,61:1.

## Nadwrażliwość na światło

**Nadwrażliwość na światło** (ang. *light sensitivity*), czyli światłowstręt, oznacza, że jasne światło i jaskrawe kolory wywołują dyskomfort, a nawet ból. Osoby z nadwrażliwością na światło często przyciemniają ekrany albo korzystają z **trybu ciemnego** (ang. *dark mode*). Większość systemów operacyjnych pozwala wybrać tryb jasny, tryb ciemny lub tryb wysokiego kontrastu, a dobrze zaprojektowane aplikacje szanują ten wybór.

Żeby wspierać osoby z nadwrażliwością na światło, zaprojektuj jasną i ciemną wersję palety kolorów, unikaj dużych obszarów bardzo nasyconego koloru i upewnij się, że kontrast spełnia minimalne wymagania w obu trybach.

*Przykład z WashSlot:* Kofi często rezerwuje pralki późno w nocy po swojej zmianie, więc projektant tworzy ciemną wersję każdej makiety. Tło w kolorze złamanej bieli zmienia się w ciemny grafit, blade morskie karty stają się ciemnoszaro-morskie, a kontrast całego tekstu i wszystkich kolorów stanów jest sprawdzany ponownie.

## Dostępność pomaga wszystkim

Dostępne wybory kolorów opierają się na jednej prostej idei: każdą ważną informację przekazuj **więcej niż jednym sygnałem**. Kolor i ikona, kolor i tekst, kolor i wzór. Wtedy przekaz dotrze do odbiorcy niezależnie od jego wzroku, ekranu i otoczenia.

::: tip Najważniejsze
Nigdy nie używaj koloru jako jedynego sposobu przekazania informacji; dodawaj ikony, etykiety lub wzory. Spełniaj minimalne wymagania WCAG dotyczące kontrastu: 4,5:1 dla zwykłego tekstu i 3:1 dla dużego tekstu i ważnych grafik. Zapewnij tryb ciemny dla osób z nadwrażliwością na światło i sprawdzaj projekty za pomocą narzędzi do sprawdzania kontrastu i symulatorów daltonizmu.
:::
