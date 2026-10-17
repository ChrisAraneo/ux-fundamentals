# Prototypy cyfrowe w Figmie

## Wireframe'y a prototypy

Wireframe'y pokazują **strukturę** każdego ekranu. Prototypy pokazują, **jak użytkownicy wchodzą w interakcję** z projektem: co się dzieje po stuknięciu przycisku albo otwarciu menu. Cyfrowy **prototyp niskiej wierności** (ang. *low-fidelity prototype*) łączy twoje cyfrowe wireframe'y, tak żeby działały jak prawdziwa aplikacja.

W Figmie możesz zarówno projektować, jak i prototypować w jednym miejscu, ale umiejętności z tej strony przydadzą ci się też w innych narzędziach.

## Zanim zaczniesz

Zastanów się, jak ludzie będą korzystać z twojego produktu:

- **Przepływy** - jakie są najczęstsze przepływy użytkownika?
- **Interakcje** - które przyciski użytkownicy będą naciskać i w jakiej kolejności?
- **Oczekiwania** - czego użytkownicy się spodziewają po stuknięciu przycisku albo wysłaniu formularza?

Twoje odpowiedzi, razem z wireframe'ami i prototypem papierowym, są planem twojego prototypu cyfrowego. Pamiętaj, że projekt będzie się dalej zmieniał. To normalne, że jeszcze nie wiesz dokładnie, gdzie co powinno się znaleźć.

## Jak stworzyć prototyp niskiej wierności w Figmie

### 1. Stwórz wireframe'y

Stwórz **ramkę** (ang. *frame*) dla każdego ekranu z przepływu użytkownika. Użyj narzędzi do kształtów i tekstu, tak jak opisano na stronie o [cyfrowych wireframe'ach](./07-digital-wireframes). Ułóż ramki na **obszarze roboczym** (ang. *canvas*) w logicznej kolejności, od lewej do prawej. Dzięki temu łatwiej będzie ci prototypować.

**Długie ekrany rób wysokie.** Jeśli ekran ma się przewijać, na przykład gdy zawiera długą listę terminów, zrób ramkę wyższą niż ekran telefonu. Figma pozwoli użytkownikom przewijać ją w prototypie.

### 2. Nazwij ramki

Zmień nazwę każdej ramki w panelu warstw. Użyj numeru i jasnej nazwy, na przykład „1 Ekran główny”, „2 Rezerwacja”, „3 Podsumowanie”, „4 Potwierdzenie”. Jasne nazwy ułatwiają tworzenie połączeń i wyjaśniają, do czego służy każdy ekran.

### 3. Przejdź na kartę Prototype

U góry prawego panelu przełącz się z karty **Design** na kartę **Prototype**. W tym trybie tworzysz połączenia, a nie edytujesz kształty. Zawsze sprawdzaj, na której karcie jesteś, bo wiele działań działa na każdej z nich inaczej.

### 4. Utwórz połączenia

Każde połączenie w prototypie składa się z trzech części:

1. **Obszar aktywny** (ang. *hotspot*) - element, od którego zaczyna się interakcja, na przykład przycisk.
2. **Połączenie** (ang. *connection*) - strzałka, która zapisuje, co się dzieje, na przykład „po stuknięciu przejdź do”.
3. **Cel** (ang. *destination*) - ramka docelowa, na którą trafia użytkownik. Celem musi być ramka, a nie element wewnątrz ramki.

Kiedy w trybie Prototype najedziesz kursorem na element, na jego krawędzi pojawi się małe kółko z plusem. To **węzeł połączenia** (ang. *connection node*). Przeciągnij od węzła do ramki docelowej i puść. Strzałka pokazuje teraz połączenie.

*Przykład z WashSlot:* projektant łączy przycisk „Zarezerwuj termin” na ekranie głównym z ekranem rezerwacji, wybrany termin z podsumowaniem, a przycisk „Potwierdź” z ekranem potwierdzenia.

### 5. Połącz każdy element interaktywny

Przejdź przez wszystkie elementy interaktywne **po kolei** i przy każdym zapytaj: „Dokąd ten element powinien zaprowadzić użytkownika?”. Potraktuj to jak przegląd swojego projektu. Jeśli jakiś element nie ma celu, stwórz brakujący ekran albo usuń ten element. Nie zapomnij o:

- **Powtarzających się elementach** - na liście połącz każdą pozycję, a nie tylko pierwszą. W prototypie niskiej wierności wszystkie mogą prowadzić do tego samego przykładowego ekranu.
- **Przyciskach powrotu** - każda strzałka wstecz powinna wracać do poprzedniego ekranu. Figma ma też akcję **Back**, która przenosi użytkownika tam, skąd przyszedł.
- **Przyciskach anulowania** - „Anuluj” zwykle powinno przenosić użytkownika do bezpiecznego punktu startowego, na przykład na ekran główny.
- **Alternatywnych ścieżkach** - elementy drugorzędne, takie jak awatar czy link „Regulamin domu”, też potrzebują swoich ekranów.

### 6. Wybierz interakcje i animacje

Dla każdego połączenia możesz wybrać **wyzwalacz** (ang. *trigger*), na przykład stuknięcie, kliknięcie albo najechanie kursorem, **akcję** (ang. *action*), na przykład przejście do ekranu, otwarcie nakładki albo powrót, oraz **animację** (ang. *animation*). „Instant” zmienia ekran od razu. Animacje takie jak „Move in” albo „Push” pokazują, jak ekrany są ze sobą powiązane, na przykład gdy menu wysuwa się z boku. W prototypach niskiej wierności używaj prostych animacji.

### 7. Przetestuj w trybie prezentacji

Kliknij przycisk **Play** (prezentuj) w prawym górnym rogu, żeby otworzyć prototyp. Przejdź przez główny przepływ tak, jak zrobiłby to użytkownik, a potem wypróbuj inne ścieżki: wybierz inną pozycję z listy, naciśnij przycisk powrotu, naciśnij „Anuluj”, stuknij elementy drugorzędne. Za każdym razem, gdy coś nie działa, wróć do edytora, popraw połączenie i przetestuj ponownie.

### 8. Udostępnij i zbierz opinie

Użyj przycisku **Share**, żeby wysłać link członkom zespołu albo uczestnikom testów. Z dostępem do podglądu mogą klikać prototyp i zostawiać **komentarze** bezpośrednio na ekranach. Możesz też otworzyć prototyp w aplikacji mobilnej Figmy, żeby zobaczyć, jak wygląda na prawdziwym telefonie. Zobaczenie projektu we właściwym rozmiarze, na urządzeniu, dla którego jest przeznaczony, jest bardzo cenne.

## Sprawdź swój prototyp

Dobry prototyp niskiej wierności:

- **Pozwala przejść cały główny przepływ** - łączy co najmniej cztery ekrany i pozwala użytkownikom wykonać główne zadanie.
- **Pozwala iść dalej i wracać** - użytkownicy mogą przejść do następnego kroku i wrócić do poprzednich.
- **Ma jasne wskazówki nawigacyjne** (ang. *navigation cues*) - przyciski wyglądają jak przyciski, a tytuły sekcji jak tytuły, więc użytkownicy wiedzą, co mogą stuknąć.
- **Pokazuje sukces** - po wykonaniu zadania pojawia się jasny komunikat, na przykład „Pralka 2 jest twoja o 19:00”.
- **Prowadzi z powrotem na początek** - po zakończeniu użytkownicy mogą wrócić na ekran główny.

::: tip Najważniejsze
Cyfrowy prototyp niskiej wierności łączy wireframe'y, tak żeby użytkownicy mogli je przeklikać. W Figmie nazwij ramki, przejdź na kartę Prototype i przeciągnij połączenia od obszarów aktywnych do ramek docelowych. Połącz każdy element interaktywny, przetestuj wszystkie ścieżki w trybie prezentacji i udostępnij link, żeby zebrać opinie.
:::
