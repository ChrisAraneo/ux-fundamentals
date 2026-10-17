# Linki, przyciski i pola tekstowe

Makiety to coś więcej niż tekst, kolor i ikony. Użytkownicy muszą też w coś stukać i coś wpisywać. Ta strona omawia trzy elementy interaktywne, których użyjesz niemal na każdym ekranie: linki, przyciski i pola tekstowe.

## Linki

**Hiperłącze** (ang. *hyperlink*), czyli po prostu link, przenosi użytkowników z jednej strony, ekranu lub pliku do innego. W internecie klasyczny styl linku to niebieski, podkreślony tekst i wiele osób nadal rozpoznaje linki właśnie po tym wyglądzie.

### Jak projektować dobre linki?

1. **Nie zaśmiecaj stron** - linki pomagają się poruszać, ale gdy jest ich za dużo, stronę trudno się czyta. Linkuj tylko to, co przydatne.
2. **Trzymaj się konwencji** - jeśli tekst jest podkreślony, ludzie spodziewają się, że to link. Nie podkreślaj tekstu tylko po to, żeby go wyróżnić.
3. **Licz się z różnorodnością** - marka może używać innego koloru linków, a linkami mogą być też obrazy. Na przykład większość osób spodziewa się, że logo firmy przeniesie je na stronę główną.
4. **Opisz miejsce docelowe** - tekst linku powinien mówić, dokąd prowadzi. Zamiast „Kliknij tutaj” napisz „Przeczytaj regulamin domu”. Opisowe linki pomagają też osobom korzystającym z czytników ekranu, które często przeskakują od linku do linku.

## Przyciski

**Przyciski** (ang. *buttons*) pozwalają użytkownikom wykonać działanie, na przykład „Zapisz”, „Anuluj” albo „Zarezerwuj termin”.

### Jak projektować dobre przyciski?

1. **Niech przyciski wyglądają jak przyciski** - ludzie rozpoznają przyciski po kształcie, rozmiarze i kolorze. Prostokąty, prostokąty z zaokrąglonymi rogami i kształty pigułki się sprawdzają, a przycisk w kształcie gwiazdy wprowadzałby w błąd. Popularne style to przyciski wypełnione z prostymi lub zaokrąglonymi rogami, przyciski wypełnione z cieniem oraz **przyciski konturowe** (ang. *outlined buttons*, czasem nazywane *ghost buttons*), które mają obramowanie, ale nie mają wypełnienia.
2. **Pokaż, co jest ważne** - używaj przycisku wypełnionego do głównego działania na ekranie, a przycisku konturowego lub tekstowego do działań drugorzędnych. Dobra zasada to jedno główne działanie na ekran.
3. **Bądź konsekwentny** - używaj tych samych stylów przycisków w całym produkcie, żeby ludzie szybko nauczyli się, co można stuknąć.
4. **Zostaw miejsce** - dodaj **odstęp wewnętrzny** (ang. *padding*), czyli przestrzeń wewnątrz przycisku wokół etykiety, i przestrzeń negatywną wokół przycisku. Dzięki temu łatwiej go stuknąć i rzadziej trafia się przypadkiem w niewłaściwy. Wytyczne platform zalecają obszar dotyku o wymiarach co najmniej 44 × 44 punkty na iOS i 48 × 48 dp na Androidzie.
5. **Używaj jasnych etykiet** - zaczynaj od czasownika, który mówi, co się stanie: „Zarezerwuj termin”, a nie „OK”.

*Przykład z WashSlot:* na ekranie podsumowania jest jeden wypełniony przycisk „Potwierdź rezerwację” w głębokim morskim kolorze, umieszczony na dole, na całą szerokość ekranu i o wysokości 56 px, więc łatwo sięgnąć do niego kciukiem. Nad nim jest przycisk konturowy „Zmień godzinę”, dzięki czemu od razu widać, że to mniej ważna opcja.

## Pola tekstowe

**Pola tekstowe** (ang. *inputs*, *text fields*) to miejsca, w których użytkownicy wpisują informacje, na przykład imię, adres e-mail albo datę. Dobre pole tekstowe jasno pokazuje, co należy w nie wpisać, i jest wystarczająco duże na te informacje.

### Jak projektować dobre pola tekstowe?

1. **Używaj widocznej etykiety** - nad każdym polem umieść krótką etykietę, na przykład „Numer mieszkania”. Etykiety pozostają widoczne podczas pisania, co pomaga osobom z trudnościami z pamięcią lub koncentracją.
2. **Dawaj podpowiedzi** - **tekst podpowiedzi** (ang. *hint text*, nazywany też *ghost text*) pokazuje przykład oczekiwanego formatu, na przykład „np. 4B” albo „DD/MM/RRRR”. Zwykle jest jaśniejszy niż pozostały tekst i znika, gdy użytkownik zaczyna pisać, więc nigdy nie powinien zastępować etykiety.
3. **Wybierz właściwą klawiaturę** - na urządzeniach mobilnych pokazuj klawiaturę numeryczną przy numerach telefonu i klawiaturę do adresów e-mail przy adresach e-mail.
4. **Grupuj długie formularze** - jeśli ekran ma więcej niż około sześć pól, podziel je na sekcje z nagłówkami, na przykład „Dane osobowe” i „Dane kontaktowe”. Dzięki grupom długie formularze wydają się krótsze, a użytkownicy widzą, ile już za nimi.
5. **Jasno wyjaśniaj błędy** - pokaż, co poszło nie tak i jak to naprawić, obok pola, za pomocą tekstu i ikony, a nie tylko czerwonego obramowania.

*Przykład z WashSlot:* przy rejestracji aplikacja prosi mieszkańców tylko o trzy rzeczy: imię, numer mieszkania i adres e-mail. Pole na numer mieszkania ma etykietę „Numer mieszkania” i tekst podpowiedzi „np. 4B”. Jeśli mieszkaniec wpisze numer, którego nie ma w budynku, pod polem pojawia się komunikat „Nie znaleźliśmy tego mieszkania. Sprawdź numer na drzwiach.” z ikoną ostrzeżenia.

::: tip Najważniejsze
Linki powinny wyglądać jak linki i mówić, dokąd prowadzą. Przyciski powinny wyglądać na takie, które można stuknąć, pokazywać, które działanie jest najważniejsze, mieć wystarczający odstęp wewnętrzny i jasne etykiety zaczynające się od czasownika. Pola tekstowe potrzebują widocznych etykiet, pomocnych podpowiedzi, właściwej klawiatury, logicznych grup i jasnych komunikatów o błędach.
:::
