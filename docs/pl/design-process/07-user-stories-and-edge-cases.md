# Historie użytkowników i przypadki brzegowe

## Historie użytkowników

**Historia użytkownika** (ang. *user story*) to jedno wymyślone zdanie, napisane z perspektywy persony. Wskazuje typ użytkownika, to, co chce zrobić, i powód, dla którego tego chce. Niektóre zespoły nazywają historie użytkowników „scenariuszami” lub „przypadkami użycia”. Podstawowa idea pojawiła się już w [rozdziale 1](../foundations/08-empathize-and-define). Tutaj nauczysz się pisać dobre historie użytkowników.

### Szablon historii użytkownika

Historie użytkowników mają prosty szablon, który odpowiada na trzy pytania:

> Jako **typ użytkownika** (kto) chcę **działanie** (co), aby **korzyść** (dlaczego).

- **Kto** - typ użytkownika, dla którego projektujesz.
- **Co** - działanie, które użytkownik chce wykonać, albo to, co ma się wydarzyć.
- **Dlaczego** - korzyść, jaką użytkownik odnosi z tego działania.

### Po co pisać historie użytkowników?

Historie użytkowników są krótkie, ale wykonują mnóstwo pracy:

- **Pomagają ustalić priorytety** - kiedy masz wiele potrzeb użytkowników, historie pomagają zdecydować, które są najważniejsze.
- **Jednoczą zespół** - wszyscy pracują nad tym samym, jasno opisanym celem.
- **Utrzymują projekt skoncentrowany na użytkowniku** - każdą funkcję da się powiązać z prawdziwą potrzebą.
- **Przekonują interesariuszy** - możesz pokazać, jak zmiana w projekcie pomaga konkretnemu typowi osoby, a nie po prostu „użytkownikom” w ogóle.
- **Służą jako lista kontrolna** - na późniejszym etapie projektu możesz sprawdzić, czy twój projekt faktycznie wspiera każdą historię.

### Historie użytkowników WashSlot

Oto historie użytkowników dla trzech person WashSlot:

- **Tomasz** - Jako rodzic, który codziennie robi pranie, chcę widzieć w telefonie, które pralki są wolne, aby nie chodzić na próżno do piwnicy.
- **Grace** - Jako mieszkanka, która nie słyszy sygnału pralki, chcę dostawać widoczne powiadomienie, kiedy kończy się mój cykl, aby odbierać pranie na czas i unikać konfliktów z sąsiadami.
- **Kofi** - Jako student, który pracuje na wieczorne zmiany, chcę zarezerwować pralkę późno w nocy, aby robić pranie wtedy, kiedy pasuje mi to do grafiku.

### Jak sprawdzić historie użytkowników

Porównaj swoje historie z tymi pytaniami:

- **Różnorodność** - czy twoje historie obejmują zróżnicowany i reprezentatywny zestaw person?
- **Kto** - czy każda historia jasno opisuje typ użytkownika, łącznie z jego najważniejszą sytuacją?
- **Co** - czy każda historia wskazuje konkretne działanie, powiązane z prawdziwym problemem użytkownika?
- **Dlaczego** - czy każda historia pokazuje istotną korzyść, a nie tylko brak problemu?
- **Długość** - czy każda historia jest krótka, jasna i konkretna?

## Ścieżki idealne i przypadki brzegowe

### Ścieżka idealna

**Ścieżka idealna** (ang. *happy path*) to idealna droga przez produkt: wszystko działa zgodnie z oczekiwaniami, a użytkownik osiąga cel bez żadnych trudności. Projektanci w naturalny sposób najpierw skupiają się na ścieżce idealnej, ale prawdziwe życie rzadko przebiega tak gładko.

### Przypadki brzegowe

**Przypadek brzegowy** (ang. *edge case*) to rzadka lub nieoczekiwana sytuacja, która zakłóca zwykłe doświadczenie użytkownika. Często jej przyczyna leży poza kontrolą użytkownika, więc nie może on sam rozwiązać problemu i utyka w miejscu.

*Przykład:* osoba mieszkająca za granicą próbuje kupić prezent w sklepie internetowym. Formularz adresu wymaga kodu pocztowego w określonym, krajowym formacie. Jej zagraniczny kod pocztowy zostaje odrzucony, nie da się pominąć tego pola, więc musi zrezygnować z zakupu. Projektanci wyobrażali sobie tylko klientów z kraju.

Dobry projekt UX przewiduje przypadki brzegowe i pomaga użytkownikom **wrócić na ścieżkę idealną**, kiedy coś pójdzie nie tak.

### Przypadki brzegowe w WashSlot

Projektant WashSlot wypisuje sytuacje, które mogłyby zepsuć doświadczenie:

- **Pralka psuje się w zarezerwowanym terminie** - aplikacja powinna oznaczyć ją jako niedziałającą i zaproponować inną pralkę lub inny termin.
- **Mieszkaniec nie ma smartfona** - rezerwacji powinno się dać dokonać także na tablecie w pralni albo u dozorcy budynku.
- **Ktoś zapomina o swoim praniu** - kolejna osoba potrzebuje jasnej i sprawiedliwej zasady, co w takiej sytuacji zrobić, a właściciel prania potrzebuje przypomnienia.
- **Połączenie z internetem przestaje działać** - stan pralek powinien nadal być widoczny w pralni.

### Jak znaleźć przypadki brzegowe przed wdrożeniem

1. **Twórz zróżnicowane persony i historie użytkowników** - im szerszy zakres użytkowników i sytuacji bierzesz pod uwagę, tym mniej osób wypadnie ze ścieżki idealnej.
2. **Przejrzyj cały produkt z perspektywy użytkownika** - przed wdrożeniem przejdź przez każdy proces i na każdym kroku pytaj: „Co, jeśli…?”.
3. **Korzystaj z wireframe'ów** - proste szkice ekranów (ang. *wireframes*) ułatwiają zauważenie, w którym miejscu proces może się zepsuć.
4. **Obserwuj prawdziwych użytkowników** - przypadki brzegowe często ujawniają się dopiero wtedy, gdy prawdziwi ludzie korzystają z produktu w swoim prawdziwym życiu. To, czego się spodziewasz, nie zawsze jest tym, co faktycznie się dzieje.

::: tip Najważniejsze
Historia użytkownika opisuje w jednym zdaniu, kim jest użytkownik, co chce zrobić i dlaczego. Projektując ścieżkę idealną, przewiduj też przypadki brzegowe, czyli rzadkie sytuacje, które mogą zablokować użytkowników, i zaplanuj sposoby, aby pomóc im wrócić na właściwy tor.
:::
