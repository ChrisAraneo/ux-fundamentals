# Zasady projektowania wizualnego

Elementy projektowania wizualnego, takie jak tekst, kolor i kształt, to twoje materiały. **Zasady projektowania wizualnego** (ang. *visual design principles*) to reguły ich łączenia. Pomagają zdecydować, co powinno się wyróżniać, w jakiej kolejności ludzie powinni zauważać poszczególne rzeczy i jak zachować spójność projektu, żeby przy tym nie był nudny.

## Wyróżnienie

**Wyróżnienie** (ang. *emphasis*) oznacza sprawienie, że coś przyciąga uwagę. Wyobraź sobie ucznia, który na stronie podręcznika zaznacza zakreślaczem jedno kluczowe zdanie: gdy znów otworzy książkę, wzrok trafi najpierw właśnie na nie. W projektowaniu wyróżnienie mówi użytkownikom, co jest najważniejsze na ekranie.

Wyróżnienie tworzysz, nadając elementowi większą **wagę wizualną** (ang. *visual weight*), czyli siłę, z jaką element przyciąga do siebie wzrok. Każdy element ma jakąś wagę wizualną, a zwiększyć ją możesz na kilka sposobów:

- **Rozmiar** - większe elementy zauważamy najpierw. Tytuł ekranu powinien być większy niż reszta tekstu.
- **Kontrast** - element, który różni się od otoczenia, się wyróżnia, na przykład jaskrawy przycisk na spokojnym tle albo pogrubione, kolorowe lub podkreślone słowa w akapicie.
- **Faktura** - wzór lub detal wewnątrz elementu, na przykład paski na jednym fragmencie wykresu, sprawia, że element odróżnia się od reszty. Używaj faktury oszczędnie.

Żeby zdecydować, co wyróżnić, zadaj sobie dwa pytania: **Gdzie użytkownicy mają spojrzeć najpierw?** i **Co użytkownicy próbują zrobić?** Zwykle odpowiedzią jest główne działanie albo najważniejsza informacja. Jeśli uczestnicy badania użyteczności nie mogą znaleźć kluczowej funkcji, prawdopodobnie trzeba ją bardziej wyróżnić.

*Przykład z WashSlot:* na ekranie głównym największą wagę wizualną ma przycisk „Zarezerwuj termin”: to jedyny element w głębokim morskim kolorze, jest duży i otacza go wolna przestrzeń. Następne w kolejności są stany pralek, z pogrubionym tekstem i ikonami. Cała reszta jest spokojniejsza.

## Hierarchia

**Hierarchia** (ang. *hierarchy*) porządkuje elementy według ważności, żeby użytkownicy wiedzieli, od czego zacząć i dokąd przejść dalej. Jest związana z wyróżnieniem, ale jest między nimi różnica: wyróżnienie sprawia, że **jeden** element się wyróżnia, a hierarchia porządkuje **całą grupę** elementów od najważniejszego do najmniej ważnego.

Dobrą ilustracją jest tablica odjazdów na dworcu kolejowym. Stacja docelowa jest pokazana największymi literami, potem godzina odjazdu, a numer peronu i lista przystanków są mniejsze. Podróżni znajdują swój pociąg w kilka sekund, bo tablica bez żadnych instrukcji prowadzi ich wzrok we właściwej kolejności.

Żeby zbudować hierarchię, zacznij od głównego celu użytkownika i umieść informacje, które mu służą, na pierwszym miejscu i w najbardziej widoczny sposób. Najlepszym punktem wyjścia jest zwykle rozmiar, a potem grubość, kolor i położenie.

### Hierarchia i technologie wspomagające

Hierarchia nie jest tylko wizualna. Czytniki ekranu odczytują ekran w określonej kolejności i pozwalają użytkownikom przeskakiwać między nagłówkami. Jeśli nagłówki są oznaczone we właściwej kolejności (nagłówek poziomu 1, potem poziomu 2 i tak dalej), osoby korzystające z czytników ekranu mogą zrozumieć strukturę ekranu tak samo jak osoby widzące. Używaj w makietach **adnotacji dostępności** (ang. *accessibility annotations*), żeby pokazać programistom poziomy nagłówków oraz kolejność, w jakiej elementy powinny być odczytywane i otrzymywać fokus.

*Przykład z WashSlot:* na ekranie rezerwacji hierarchia wygląda tak: tytuł ekranu „Zarezerwuj termin” (największy), potem wybrany dzień, następnie lista wolnych godzin, a na końcu mała uwaga „Możesz rezerwować do 7 dni naprzód”. Adnotacje oznaczają tytuł jako nagłówek poziomu 1, a dzień jako nagłówek poziomu 2.

## Skala i proporcja

**Skala** (ang. *scale*) to rozmiar elementu w stosunku do innych elementów projektu. **Proporcja** (ang. *proportion*) to równowaga między elementami, których rozmiary się zmieniły.

### Jak korzystać ze skali?

- **Żeby wyróżnić element** - jeśli jeden element jest większy od pozostałych, przyciąga uwagę.
- **Żeby pokazać podobieństwo lub różnicę** - elementy tej samej wielkości wyglądają na równorzędne lub powiązane, a elementy o bardzo różnej wielkości wyglądają na różne.
- **Żeby zbudować hierarchię** - **skala typograficzna** (ang. *type scale*) to zestaw rozmiarów tekstu, które rosną krok po kroku, od małych etykiet aż do największego nagłówka (często nazywanego H1). Internetowe kalkulatory skali typograficznej proponują całą skalę na podstawie jednego rozmiaru bazowego.

### Jak zachować proporcje?

Proporcja dotyczy tego, czy relacje między rozmiarami mają sens. Jeśli powiększysz jeden element w rzędzie, inne też mogą wymagać zmiany, inaczej rząd będzie wyglądał na niezrównoważony. Po każdej zmianie skali spójrz jeszcze raz na cały ekran. Określenie rozmiarów w systemie projektowym, na przykład stałych rozmiarów ikon i skali typograficznej, pozwala zachować spójne proporcje.

*Przykład z WashSlot:* cztery karty pralek na ekranie głównym mają dokładnie ten sam rozmiar, co mówi mieszkańcom, że pralki są równorzędne. Gdy projektant na chwilę powiększył kartę wolnej pralki, ekran wyglądał na niezrównoważony i sugerował, że pozostałe pralki są mniej ważne, a nawet niedostępne, więc karty wróciły do równych rozmiarów. Żeby wyróżnić wolną pralkę, projektant wykorzystał zamiast tego jej etykietę stanu.

## Jedność i różnorodność

**Jedność** (ang. *unity*) opisuje, jak dobrze elementy projektu współgrają ze sobą, żeby wyrazić jedną myśl. Spójny projekt przyjemnie się ogląda i łatwo go zrozumieć. Jedność tworzysz dzięki spójnej palecie kolorów, dobrze dobranym krojom pisma, spójnym odstępom, wyrównanym elementom, podobnym kształtom i stylom tekstu, których wszędzie używasz w ten sam sposób.

**Różnorodność** (ang. *variety*) oznacza używanie różnych elementów, żeby przełamać monotonię i wzbudzić zainteresowanie. Różne kształty, kolory, rozmiary, faktury i wzory dodają projektowi energii. Wyobraź sobie miskę zielonych jabłek z jednym czerwonym: to właśnie je wszyscy zauważają.

Ani jedność, ani różnorodność nie są same w sobie dobre ani złe. Zbyt duża jedność sprawia, że wszystko wygląda tak samo, więc użytkownicy nie potrafią rozpoznać, co jest ważne. Zbyt duża różnorodność sprawia, że projekt jest chaotyczny i trudno się go czyta. Celem jest równowaga: spójna podstawa i odrobina różnorodności tam, gdzie chcesz przyciągnąć uwagę.

Różnorodność działa najlepiej na tle jedności. W aplikacji kalendarza, w której każde wydarzenie ma ten sam spokojny kolor, jedno wydarzenie pokazane na jaskrawopomarańczowo, bo jego termin mija dzisiaj, od razu się wyróżnia, ale tylko dlatego, że cała reszta jest spójna.

Dobry test jedności: przy każdym elemencie zapytaj, jak pomaga użytkownikom osiągnąć cel produktu. Jeśli nie znasz odpowiedzi, ten element może nie pasować do projektu.

*Przykład z WashSlot:* wszystkie karty mają ten sam promień zaokrąglenia rogów, odstęp wewnętrzny i fonty, a wszystkie ikony pochodzą z jednego zestawu. To jest jedność. Jedyną różnorodnością jest głęboki morski kolor akcentujący i trzy kolory stanów, dlatego mieszkańcy zauważają właśnie te rzeczy.

## Inne elementy wizualne, które warto wziąć pod uwagę

Kilka dodatkowych właściwości pomaga dopracować projekt:

- **Orientacja** (ang. *orientation*) - kierunek układu. Telefonów i tabletów można używać w orientacji pionowej lub poziomej, komputery mają przeważnie orientację poziomą, a smartwatche często mają kwadratowe lub okrągłe ekrany. Zaplanuj układ pod kształty urządzeń, z których korzystają twoi użytkownicy.
- **Naturalna atrakcyjność** (ang. *intrinsic interest*) - to, jak bardzo element sam w sobie przyciąga wzrok. Zdjęcia, ilustracje, logo i animacje są z natury ciekawsze niż tekst, więc używaj ich do tego, co ważne, a mniej istotnym elementom pozwól wtopić się w tło.
- **Postrzegana waga fizyczna** (ang. *perceived physical weight*) - złudzenie, że element jest ciężki lub lekki. Duże, ciemne, gęste elementy wydają się cięższe niż małe i jasne. Zachowuj proporcje między tymi wrażeniami, żeby ekran wydawał się zrównoważony.

## Stosowanie zasad w makietach

1. **Przejrzyj jeden ekran** - spójrz na niego po kolei przez pryzmat każdej zasady i zanotuj, co można poprawić.
2. **Wprowadź dwie poprawki** - na przykład mocniej wyróżnij główne działanie i uporządkuj hierarchię na liście.
3. **Powtórz to dla każdego ekranu** - wykorzystaj każdą zasadę co najmniej raz w swoim głównym przepływie użytkownika.
4. **Zachowaj elastyczność** - te decyzje nie są ostateczne. Testy i opinie mogą je zmienić.

::: tip Najważniejsze
Używaj wyróżnienia i wagi wizualnej, żeby pokazać, co jest najważniejsze, hierarchii, żeby uporządkować informacje od najważniejszych do najmniej ważnych, skali i proporcji, żeby pokazać relacje i zachować równowagę, a jedności i różnorodności, żeby stworzyć spójny projekt z kilkoma przemyślanymi akcentami. Pamiętaj, że hierarchia ma znaczenie także dla osób korzystających z czytników ekranu.
:::
