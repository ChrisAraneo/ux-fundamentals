# Przekazanie projektu i studium przypadku

## Kiedy projekt jest gotowy?

Projekt można ulepszać w nieskończoność. W pewnym momencie trzeba jednak przestać i pozwolić programistom go zbudować. Powodem zakończenia pracy nie powinien być brak czasu ani pieniędzy. Zamiast tego zadaj sobie te pytania:

1. **Czy projekt pokazuje zamierzone doświadczenie?** - ekrany i przepływy odpowiadają temu, czego potrzebują użytkownicy i co miał osiągnąć projekt.
2. **Czy cała treść jest ostateczna?** - tekst zastępczy, ikony i obrazy zastąpiono ostatecznymi materiałami.
3. **Czy da się z niego korzystać bez pomocy?** - uczestnicy rozumieją i wykonują główne zadania bez wyjaśnień.
4. **Czy jest zgodny z systemem projektowym?** - komponenty, style i odstępy są spójne z systemem, z którego korzysta produkt.
5. **Czy jest zgodny z konwencjami platformy?** - interakcje odpowiadają temu, czego użytkownicy oczekują na Androidzie, iOS lub w internecie.
6. **Czy jest wyjście, gdy coś pójdzie nie tak?** - stany błędów wskazują użytkownikom jasny kolejny krok.
7. **Czy jest dostępny?** - projekt spełnia wytyczne dostępności i działa z technologiami wspomagającymi.

Gdy na każde pytanie odpowiedź brzmi „tak”, projekt jest gotowy do przekazania. Pamiętaj, że „gotowy” nie znaczy „niezmienny”. Kiedy z produktu zaczną korzystać prawdziwi ludzie, odkryją nowe problemy i potrzeby, a projekt będzie aktualizowany po wdrożeniu, czasem po kilku tygodniach, czasem po kilku miesiącach. Produkt nigdy nie jest naprawdę skończony. Z doświadczeniem łatwiej zdecydować, kiedy przestać.

## Przekazanie projektu programistom

**Przekazanie projektu** (ang. *handoff*) to moment, w którym projektanci przekazują swoją pracę programistom (nazywanym też inżynierami), którzy zamieniają ją w działający produkt. Projektanci dostarczają makiety, prototyp, specyfikacje projektowe (często nazywane po prostu specyfikacjami, ang. *specs*) oraz system projektowy lub arkusz naklejek.

### Dwa sposoby przekazania projektu

- **Przekazanie sekwencyjne** (ang. *sequential handoff*) - projektanci kończą wszystko, a potem przekazują pracę programistom, jak biegacze, którzy przekazują sobie pałeczkę w sztafecie. Tak często pracuje się w agencjach i małych firmach. To jasne i proste podejście, ale problemy wykryte w trakcie programowania mogą być kosztowne do naprawienia, bo projektanci zajmują się już czymś innym.
- **Przekazanie oparte na współpracy** (ang. *collaborative handoff*) - projektanci i programiści pracują razem przez cały projekt. Programiści mogą budować jedną część, na przykład ekran profilu, podczas gdy projektanci wciąż pracują nad inną, na przykład ekranem głównym. To podejście jest szybsze i pozwala wcześnie wychwycić problemy, ale gdy projekt się zmienia, część pracy trzeba czasem wykonać ponownie.

Jako początkujący projektant nie zdecydujesz, z którego podejścia korzysta twój zespół, ale będziesz jego częścią. Dobre relacje z programistami ułatwiają każde przekazanie projektu: angażuj ich wcześnie, pytaj, czego potrzebują, i odpowiadaj na ich pytania.

### Co udokumentować

Figma pokazuje programistom większość tego, czego potrzebują, na przykład rozmiary, kolory, fonty i odstępy. Dodaj notatki o tym, czego makiety nie pokazują:

- **Przypadki brzegowe** - nietypowe sytuacje, na przykład pusta lista, bardzo długa nazwa, utrata połączenia z internetem albo błąd.
- **Szczegóły dostępności** - kolejność czytania i kolejność fokusu, etykiety, które mają odczytywać czytniki ekranu, poziomy nagłówków oraz to, jak projekt zachowuje się przy dużym tekście lub włączonej opcji „ogranicz ruch”.
- **Interakcje i ruch** - które gesty co robią oraz czas trwania i wygładzanie ruchu (ang. *easing*) animacji.

## Przygotowanie pliku w Figmie do przekazania

1. **Utwórz okładkę** - dodaj ramkę z miniaturą (zalecany rozmiar to 1920 × 960 px), która pokazuje nazwę projektu, jego status, na przykład „Gotowe do wdrożenia”, zespół i linki do ważnych stron. Kliknij ramkę prawym przyciskiem myszy i wybierz „Set as thumbnail” (ustaw jako miniaturę).
2. **Posprzątaj** - nadaj wszystkim warstwom i ramkom jasne nazwy, usuń nieużywane elementy i przenieś stare wersje na stronę archiwum.
3. **Zaproś współpracowników** - udostępnij plik programistom. Dzięki **dostępowi do wyświetlania** (ang. *view access*) mogą zaznaczać warstwy, przeglądać ramki, dodawać komentarze, sprawdzać projekt i eksportować zasoby, ale nie mogą niczego zmienić.
4. **Wskaż panel inspekcji** - w widoku dla programistów w Figmie można zaznaczyć dowolny element, żeby zobaczyć jego właściwości, nazwy stylów, których używa, i fragmenty kodu do skopiowania.
5. **Przygotuj zasoby do eksportu** - oznacz ikony i obrazy do eksportu. Figma potrafi eksportować pliki w formatach PNG, JPG, SVG i PDF, w kilku rozmiarach (na przykład 1x, 2x i 3x) dla ekranów o różnej gęstości pikseli. Ikony zwykle eksportuje się jako SVG.

*Przykład z WashSlot:* spółdzielnia zatrudniła dwóch niezależnych programistów, więc projektant wybiera w większości **sekwencyjne** przekazanie projektu, z cotygodniową rozmową w trakcie programowania. Notatki do przekazania opisują przypadki brzegowe: co się dzieje, gdy dwoje mieszkańców próbuje zarezerwować ten sam termin w tej samej chwili, gdy pralka zepsuje się w trakcie rezerwacji i gdy w piwnicy nie ma zasięgu. Notatki o dostępności opisują kolejność fokusu na każdym ekranie, etykiety czytnika ekranu dla każdego stanu („Pralka 2, zajęta, wolna za 25 minut”) oraz zachowanie przy rozmiarze tekstu 200% i włączonej opcji „ogranicz ruch”.

## Tworzenie studium przypadku

**Studium przypadku** (ang. *case study*) to krótka, wizualna opowieść o projekcie. Zwykle zawiera cel projektu, twoją rolę, zastosowany proces i rezultat. Rekruterzy i osoby zatrudniające szukają studiów przypadku w twoim portfolio, bo pokazują, jak myślisz, jak współpracujesz z innymi i czy potrafisz przeprowadzić pomysł od początku do końca.

### Co zawrzeć w studium przypadku

1. **Przegląd projektu** - tytuł projektu, przyciągający uwagę **obraz główny** (ang. *hero image*, duży obraz u góry strony) i podsumowanie w jednym zdaniu.
2. **Twoja rola** - zakres twojej pracy. W tym kursie wszystko robisz samodzielnie; w zespole opisz swoje konkretne obowiązki i wspomnij, kto jeszcze brał udział w projekcie.
3. **Problem i użytkownicy** - dla kogo projektujesz i jaki problem mieli ci ludzie, na podstawie badań.
4. **Wyzwania** - ograniczenia, takie jak czas, budżet lub technologia.
5. **Badania** - jakich metod użyto i dlaczego oraz najważniejsze wnioski. Pokazuj wnioski, a nie każdy materiał, który powstał.
6. **Proces projektowania** - droga od pomysłów do szkiców, wireframe'ów i prototypów oraz to, jak badania wpłynęły na twoje decyzje.
7. **Wyniki badania użyteczności** - czego dowiedziano się z testów i jak zmienił się projekt, najlepiej z obrazami „przed” i „po”.
8. **Dostępność** - zastosowane rozwiązania z zakresu dostępności, takie jak kontrast, etykiety i alternatywy dla gestów.
9. **Ostateczny projekt** - twoje makiety i link do prototypu wysokiej wierności albo krótki animowany GIF z głównym przepływem. Upewnij się, że link działa dla każdego.
10. **Wnioski z projektu i kolejne kroki** - czego udało ci się nauczyć, co było zaskoczeniem, co warto zrobić inaczej i co mogłoby być dalej. W prawdziwych projektach możesz też dodać wyniki, na przykład liczbę aktywnych użytkowników.

### Wskazówki, jak napisać mocne studium przypadku

- **Opowiedz historię** - proces projektowy (empatia, definiowanie, generowanie pomysłów, prototypowanie, testowanie) to prosta i jasna struktura.
- **Pisz krótko i przejrzyście** - używaj nagłówków, krótkich akapitów i wielu elementów wizualnych. Czytelnicy powinni zrozumieć projekt w kilka minut.
- **Pokaż swoje iteracje** - pracodawcy chcą zobaczyć, jak radzisz sobie z opiniami użytkowników i interesariuszy.
- **Linkuj do szczegółów** - jeśli masz więcej do pokazania, dodaj link do prezentacji lub pliku PDF, zamiast umieszczać wszystko na jednej stronie.
- **Zbierz opinie** - przed publikacją pokaż wersję roboczą znajomym, innym projektantom albo internetowej społeczności UX.
- **Aktualizuj na bieżąco** - dodawaj nowe materiały do portfolio w trakcie całego projektu, a nie tylko na jego końcu.

*Przykład z WashSlot:* studium przypadku WashSlot otwiera obraz główny z ekranem głównym na telefonie, trzymanym na tle pralni. Problem jest opisany w jednym zdaniu: mieszkańcy budynku z 60 mieszkaniami niepotrzebnie chodzili do piwnicy i kłócili się o to, kto jest następny. Potem studium podsumowuje badania, trzy persony, mapę witryny, papierowe wireframe'y, dwa badania użyteczności i najważniejsze zmiany, każdą z obrazem „przed” i „po”. Kończy się ostatecznymi makietami, linkiem do prototypu i kolejnymi krokami: funkcją „Dodaj do kalendarza” i wspólnym tabletem w pralni.

::: tip Najważniejsze
Projekt jest gotowy do przekazania, gdy pokazuje zamierzone doświadczenie, zawiera ostateczne treści, da się z niego korzystać bez pomocy, jest zgodny z systemem projektowym i konwencjami platformy, obsługuje błędy i jest dostępny. Przekazując projekt, dołącz jasną dokumentację przypadków brzegowych, dostępności i interakcji oraz przygotuj plik w Figmie dla programistów. Potem opowiedz historię projektu w krótkim, wizualnym studium przypadku.
:::
