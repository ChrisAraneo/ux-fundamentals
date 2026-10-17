# Więcej zasad Gestalt

## Krótkie przypomnienie

**Zasady Gestalt** (ang. *Gestalt principles*) opisują, jak ludzie automatycznie grupują elementy, dostrzegają wzory i upraszczają to, co widzą, do sensownych całości. W [rozdziale 3](../wireframes-and-prototypes/08-gestalt-principles) wykorzystywaliśmy trzy z nich w wireframe'ach:

- **Podobieństwo** - elementy, które wyglądają podobnie, są postrzegane jako działające podobnie.
- **Bliskość** - elementy umieszczone blisko siebie wyglądają na powiązane, a elementy oddalone wyglądają na osobne.
- **Wspólny obszar** - elementy w tym samym zamkniętym obszarze wydają się do siebie należeć.

W makietach te zasady stają się jeszcze skuteczniejsze, bo masz już do dyspozycji kolor, typografię i cienie. Zasady Gestalt dają ci też dobry sposób, żeby oderwać się od szczegółów i sprawdzić, czy cały projekt ma sens.

*Przykład z WashSlot:* wszystkie elementy, które można stuknąć, mają w WashSlot głęboki morski kolor akcentujący: przycisk „Zarezerwuj termin”, wybrana karta dnia i przycisk „Potwierdź rezerwację”. Dzięki **podobieństwu** mieszkańcy szybko się uczą, że głęboki morski oznacza „tu możesz coś zrobić”. Każda rezerwacja w „Moich rezerwacjach” znajduje się na osobnej karcie (**wspólny obszar**), a w każdej karcie pralka, dzień i godzina są ciasno zgrupowane (**bliskość**).

## Domknięcie

**Domknięcie** (ang. *closure*) opisuje, jak ludzie uzupełniają brakujące części, gdy patrzą na niepełny kształt. Jeśli w kole jest mała przerwa, nadal widzisz koło. Mózg woli pełne, znajome kształty.

Projektanci wykorzystują domknięcie w logo i ikonach, w których kilka linii wystarczy, żeby zasugerować cały obiekt. Domknięcie wyjaśnia też, dlaczego rząd kart ucięty przy krawędzi ekranu sugeruje, że za nią są kolejne karty.

*Przykład z WashSlot:* logo WashSlot to koło złożone z trzech łuków z przerwami między nimi. Ludzie i tak widzą okrągłe drzwiczki pralki, a przerwy sprawiają, że logo wydaje się lżejsze.

## Ciągłość

**Ciągłość** (ang. *continuity*) opisuje, jak elementy ułożone wzdłuż linii lub krzywej wydają się bardziej powiązane niż elementy, które tak nie są ułożone. Wzrok podąża wzdłuż linii od jednego elementu do następnego.

Ciągłość przydaje się w procesach krok po kroku, osiach czasu i listach powiązanych elementów. Pomaga też w menu: jeśli pozycje są wyrównane w wyraźnej pionowej linii, ludzie bez wysiłku przesuwają wzrok w dół.

*Przykład z WashSlot:* ekran potwierdzenia pokazuje rezerwację jako trzy kroki połączone cienką linią: „Zarezerwowano”, „Przypomnienie 30 min wcześniej” i „Pralka gotowa”. Linia prowadzi wzrok od pierwszego kroku do ostatniego.

## Symetria i asymetria

**Symetria** (ang. *symmetry*) oznacza, że części projektu są swoimi lustrzanymi odbiciami albo są zrównoważone wokół środka. Symetryczne układy wydają się stabilne, spokojne i uporządkowane, a symetryczne elementy są postrzegane jako należące do siebie.

**Asymetria** (ang. *asymmetry*) to brak równowagi lub równości. Nie jest błędem: asymetryczny element przełamuje wzór i przyciąga uwagę, dlatego przydaje się do wyróżnienia czegoś ważnego albo dodania projektowi wyrazu.

## Równowaga wizualna

**Równowaga wizualna** (ang. *visual balance*) to wrażenie, że waga wizualna projektu jest równomiernie rozłożona wokół jego centrum uwagi. Zrównoważony projekt wydaje się kompletny. Ekran możesz zrównoważyć symetrycznie, z podobnymi elementami po obu stronach, albo asymetrycznie, na przykład jednym dużym elementem po jednej stronie i kilkoma mniejszymi po drugiej.

*Przykład z WashSlot:* ekran główny jest w większości symetryczny: cztery jednakowe karty w kolumnie, wyśrodkowany tytuł i przycisk na całą szerokość. Jedynym asymetrycznym elementem jest mała plakietka „1 wolna” na prawym końcu nagłówka sekcji „Dzisiaj”, która przyciąga uwagę dokładnie tam, gdzie chce projektant.

## Krok w tył: przejrzyj makiety na czterech poziomach

Nawet doświadczeni projektanci regularnie się zatrzymują, żeby przejrzeć swoje postępy. Przydatna lista kontrolna prowadzi od drobnych szczegółów do szerszej perspektywy:

1. **Poziom szczegółów** - sprawdź pojedyncze elementy: typografię, kolory i ikony. Czy wszędzie są spójne? Łatwo przez przypadek użyć nieco innego odcienia lub rozmiaru fontu.
2. **Poziom ekranu** - spójrz na każdy ekran jako całość. Czy jest zrównoważony i spójny? Czy skala i proporcje elementów mają sens?
3. **Poziom funkcji** - sprawdź, czy każdy ekran działa. Czy na każdym ekranie da się przejść dalej i wrócić? Czy każdy ekran ma wyraźny przycisk głównego działania? Czy użytkownicy mogą cofnąć lub anulować działanie?
4. **Poziom aplikacji** - oddal widok w Figmie, żeby zobaczyć wszystkie ekrany naraz. Czy produkt wygląda spójnie? Czy powtarzające się elementy, takie jak pasek nawigacji, są na każdym ekranie w tym samym miejscu?

*Przykład z WashSlot:* na poziomie szczegółów projektant zauważa, że tytuł „Moje rezerwacje” ma 26 px zamiast 28 px ze stylu nagłówka, więc stosuje styl tekstu. Na poziomie funkcji zauważa, że na ekranie podsumowania nie da się wrócić i zmienić pralki, więc dodaje strzałkę wstecz. Na poziomie aplikacji widzi, że na jednym ekranie dolny pasek nawigacji jest o 8 px wyżej, i to poprawia.

::: tip Najważniejsze
Podobieństwo, bliskość i wspólny obszar są w makietach jeszcze bardziej przydatne. Domknięcie, ciągłość i symetria dają kolejne sposoby na prowadzenie wzroku, a równowaga wizualna sprawia, że projekt wydaje się kompletny. Regularnie przeglądaj makiety na czterech poziomach: szczegółów, ekranów, funkcji i całej aplikacji.
:::
