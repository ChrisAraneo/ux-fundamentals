# Komponenty na małe ekrany

## Mniej miejsca, te same funkcje

Kiedy strona desktopowa kurczy się do rozmiaru telefonu, zostaje dużo mniej miejsca na linki, obrazy i tekst. Nadal chcesz, żeby odwiedzający mogli dotrzeć do każdej funkcji, więc potrzebujesz komponentów, które oszczędzają miejsce, ale nie ukrywają ważnych rzeczy. Pomagają w tym znane komponenty, bo ludzie już wiedzą, jak działają. Elementy muszą też pozostać na tyle duże, żeby dało się je przeczytać i stuknąć, a to może oznaczać skrócenie tekstu zamiast jego zmniejszania.

Na tej stronie poznasz pięć komponentów, które pojawiają się prawie na każdej responsywnej stronie internetowej.

## Menu „hamburger”

**Menu „hamburger”** (ang. *hamburger menu*) ukrywa linki nawigacji za ikoną z trzema poziomymi kreskami, które wyglądają trochę jak burger między dwiema połówkami bułki. Kiedy użytkownik stuknie albo kliknie ikonę, menu wysuwa się z boku albo zakrywa cały ekran i pokazuje listę linków. Znasz je już jako menu nawigacyjne z [rozdziału 5](../high-fidelity-design/09-common-screens-and-navigation).

Na stronie desktopowej główna nawigacja zwykle biegnie w jednym rzędzie przez nagłówek strony (ang. *header*). Na telefonie ten rząd się nie mieści, więc linki przenoszą się do menu „hamburger”. Dzięki temu strona jest uporządkowana i skupiona na głównej treści.

Ceną jest widoczność. Pozycji w menu „hamburger” nie widać, a z ukrytych pozycji ludzie korzystają rzadziej. Jedno albo dwa najważniejsze miejsca zostaw widoczne na stronie, a resztę umieść w menu.

## Menu wysuwane

**Menu wysuwane** (ang. *flyout menu*) to panel, który wysuwa się z krawędzi ekranu, kiedy użytkownik stuknie ikonę menu, albo pojawia się obok pozycji menu po najechaniu na nią kursorem lub kliknięciu. Na telefonie ikona „hamburgera” zwykle otwiera menu wysuwane z linkami nawigacji, polem wyszukiwania albo opcjami konta. Menu wysuwane potrzebuje oczywistego sposobu zamknięcia, zwykle **przycisku zamykania** (ang. *close button*) z ikoną X, i powinno się też zamykać, kiedy użytkownik stuknie poza nim.

Podobnym sposobem na oszczędzenie miejsca jest **wyskakujące pole wyszukiwania** (ang. *pop-up search bar*): zamiast pełnego pola wyszukiwania w nagłówku strony układ na telefon pokazuje tylko ikonę lupy, a pole pojawia się po jej stuknięciu.

## Karty

**Karty** (ang. *cards*) to niewielkie powierzchnie, które zawierają treści i działania dotyczące jednego tematu, tak jak karta do gry ma jedną wartość. Znasz je jako zapowiedzi artykułów, kafelki produktów i profile w aplikacjach. Karta ma mało miejsca, więc pokazuje tylko tyle, żeby wzbudzić ciekawość, i zachęca, żeby stuknąć i dowiedzieć się więcej.

Karty są szczególnie przydatne w projektowaniu responsywnym, bo przestawiają się w przewidywalny sposób. Strona desktopowa może pokazywać pięć kolumn kart, a telefon tylko dwie, a każda karta zachowuje podobną treść. W każdej karcie utrzymuj wyraźną hierarchię, na przykład obraz, potem tytuł, potem jeden krótki szczegół, żeby ludzie mogli szybko przejrzeć wiele kart.

## Karuzele

**Karuzela** (ang. *carousel*), nazywana też pokazem slajdów, to pasek obrazów albo kart, które użytkownicy przewijają, klikając strzałki, przesuwając palcem albo czekając, aż same się przewiną w pętli. Karuzele oszczędzają miejsce, bo w obszarze jednego elementu pokazują kilka. Często spotkasz je w galeriach zdjęć, mediach społecznościowych i sklepach internetowych, które pokazują w nich popularne albo polecane produkty. Na komputerze karuzela może pokazywać kilka elementów naraz albo wypełniać całą szerokość; na telefonie często pokazuje jeden element naraz, czasem przycięty do kwadratu.

Karuzele wymagają jednak ostrożności. Wielu odwiedzających ogląda tylko pierwszy slajd, a automatyczny ruch może rozpraszać, sprawiać trudności osobom z niepełnosprawnościami poznawczymi lub wzrokowymi i dezorientować użytkowników czytników ekranu. Jeśli używasz karuzeli, unikaj automatycznego przewijania w pętli albo dodaj przycisk pauzy, wyraźnie pokaż, że jest więcej elementów, i zadbaj o to, żeby do każdego slajdu dało się dotrzeć za pomocą klawiatury.

## Przyciski wezwania do działania

**Przycisk wezwania do działania (CTA)** (ang. *call-to-action button*) zachęca użytkowników do wykonania konkretnego działania, na przykład „Kup teraz”, „Zarejestruj się” albo „Potwierdź”. Zwykle wyróżnia się na tle otoczenia kolorem, rozmiarem albo krojem pisma. Przycisk CTA może też prowadzić do innej podstrony, na przykład z krótkiej zapowiedzi na stronie głównej do szczegółowej podstrony, na której jest miejsce na wszystkie informacje.

Przyciski CTA pojawiają się na ekranach każdego rozmiaru, ale mogą się zmieniać. Na telefonie przycisk CTA często staje się szerszy, czasem na całą szerokość ekranu, żeby łatwo było w niego trafić kciukiem. Ekrany dotykowe pozwalają też na gesty wykraczające poza zwykłe kliknięcie. Niezależnie od rozmiaru ekranu każdy element, który można stuknąć, powinien mieć co najmniej około 44-48 px w obu kierunkach i wystarczająco dużo wolnego miejsca wokół, żeby nikt nie stuknął niewłaściwej rzeczy.

*Przykład z WashSlot:* projektant używa wszystkich pięciu komponentów w układzie telefonicznym strony WashSlot:

- **Menu „hamburger”** - zawiera „Przewodnik po pralni”, „Ogłoszenia”, „Zgłoś problem” i „Konto”.
- **Widoczny skrót** - „Moje rezerwacje” zostają widoczne jako ikona kalendarza obok menu „hamburger”, bo mieszkańcy korzystają z nich prawie tak często jak z rezerwowania.
- **Menu wysuwane** - wysuwa się z lewej strony, zawiera linki i pole wyszukiwania w przewodniku, a u góry ma duży przycisk zamykania.
- **Karty** - sześć pralek pojawia się jako karty w dwóch kolumnach, a każda karta pokazuje nazwę urządzenia, jego stan i pozostały czas.
- **Karuzela** - na telefonach ogłoszenia zmieniają się w karuzelę, ale nigdy nie przesuwa się ona sama. Na krawędzi widać kawałek następnej karty, a karuzela ma widoczne przyciski ze strzałkami, więc Grace nie musi zgadywać, że może przesunąć palcem.
- **CTA** - „Zarezerwuj termin” staje się przyciskiem na całą szerokość, o wysokości 56 px, w głębokim morskim kolorze akcentującym, tak samo jak w aplikacji.

::: tip Najważniejsze
Małe ekrany potrzebują komponentów, które oszczędzają miejsce, ale nie ukrywają ważnych funkcji. Menu „hamburger” i menu wysuwane mieszczą nawigację, karty łatwo przestawiają się na ekranach różnych rozmiarów, karuzele pokazują kilka elementów na małej przestrzeni, ale wymagają starannego i dostępnego projektu, a przyciski CTA muszą pozostać wyraźne i łatwe do stuknięcia na każdym urządzeniu.
:::
