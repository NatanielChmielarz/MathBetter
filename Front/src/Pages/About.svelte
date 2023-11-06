<script>
  import Accordion from "../Components/HowToPlayComponents/Accordion.svelte";
  import Navbar from "../Components/DefaultComponents/Navbar.svelte";
  import LearnDescription from "../Components/HowToPlayComponents/LearnDescription.svelte";
  import Bar from "../Components/DefaultComponents/Bar.svelte";
  import Footer from "../Components/DefaultComponents/Footer.svelte";

  import AccordionComponent from "../Components/HowToPlayComponents/AccordionComponent.svelte";

  let show = null;

  const showCollapse = (i) => {
    i === show ? (show = null) : (show = i);
  };
</script>

<Navbar isSticky={true} />

<LearnDescription />
<Bar Text="Sprawdz kilka porad które przygotowaliśmy!" />
<div class="AccordionSection">
  <Accordion i="1" {show} {showCollapse} item="Kolejność działań">
    <AccordionComponent
      Header="W matematyce istnieje określona kolejność działań, która jest kluczowa dla poprawności obliczeń. Poniżej znajdziesz podstawową hierarchię działań matematycznych: "
      List={[
        "Działania w nawiasach",
        "Potęgowanie i pierwiastkowanie",
        "Mnożenie i dzielenie (w kolejności ich występowania, tj. od lewej do prawej)",
        "Dodawanie i odejmowanie (w kolejności ich występowania, tj. od lewej do prawej)",
      ]}
    />
  </Accordion>
  <Accordion i="2" {show} {showCollapse} item="Łatwiejsze mnożenie">
    <AccordionComponent
      Header="Oto kilka porad, które pomogą Ci mnożyć szybciej w głowie:"
      List={[
        "Zrozum, że mnożenie jest przemienną i łączną operacją. Na przykład, 3 x 4 to to samo, co 4 x 3. To pozwoli Ci na bardziej elastyczne myślenie.",
        "Użyj przybliżenia: Jeśli masz trudności z mnożeniem dużych liczb, zaokrąglaj je do liczb bardziej zaokrąglonych, a potem przelicz wynik. Na przykład, dla 47 x 18, zaokrągl 47 do 50 i 18 do 20. Teraz oblicz 50 x 20 (czyli 1000) i dostosuj wynik o różnicę (47 - 50) x (18 - 20), czyli -6. Ostateczny wynik to 1000 - 6, czyli 994.",
        "Użyj strategii podwajania i połowy: Dla większych liczb, możesz podzielić mnożenie na mniejsze kroki. Na przykład, aby obliczyć 7 x 8, możesz zacząć od 4 x 8 = 32, a potem dodać 3 x 8 = 24, co daje razem 56.",
      ]}
    />
  </Accordion>
  <Accordion i="3" {show} {showCollapse} item=" Reguła 11 na mnożenie">
    <AccordionComponent
      Header="Aby pomnożyć dowolną dwucyfrową liczbę przez 11, możesz zastosować tę prostą technikę:"
      List={[
        "Rozważmy przykład, gdzie chcemy pomnożyć 23 przez 11.",
        "Rozdziel dwie cyfry w liczbie 23 (2 i 3), aby uzyskać przestrzeń na wynik. Wynik będziemy umieszczać między nimi.",
        "Teraz dodajmy te dwie cyfry: 2 + 3 = 5. Wynik (5) umieszczamy między cyframi 2 i 3.",
        "Oto wynik: 253. To jest wynik mnożenia 23 przez 11.",
      ]}
    />
  </Accordion>
  <Accordion i="4" {show} {showCollapse} item="Podzielność liczb">
    <AccordionComponent
      Header="Aby pomnożyć dowolną dwucyfrową liczbę przez 11, możesz zastosować tę prostą technikę:"
      List={[
        "Liczba jest podzielna przez 2, jeśli jej ostatnia cyfra jest parzysta (0, 2, 4, 6, lub 8). Na przykład, 24 jest podzielne przez 2, ale 33 nie jest.",
        "Liczba jest podzielna przez 3, jeśli suma jej cyfr jest podzielna przez 3. Na przykład, 369 jest podzielne przez 3, ponieważ 3 + 6 + 9 = 18, a 18 jest podzielne przez 3",
        "Liczba jest podzielna przez 4, jeśli ostatnie dwie cyfry tworzą liczbę podzielną przez 4. Na przykład, 1,236 jest podzielne przez 4, ponieważ 36 jest liczbą podzielną przez 4.",
        "Liczba jest podzielna przez 5, jeśli jej ostatnia cyfra to 0 lub 5. Na przykład, 45 jest podzielne przez 5.",
        "Liczba jest podzielna przez 6, jeśli jest zarówno podzielna przez 2, jak i 3. Na przykład, 72 jest podzielne przez 6, ponieważ jest zarówno podzielne przez 2 (72 / 2 = 36) jak i 3 (72 / 3 = 24).",
        "Liczba jest podzielna przez 9, jeśli suma jej cyfr jest podzielna przez 9. Na przykład, 945 jest podzielne przez 9, ponieważ 9 + 4 + 5 = 18, a 18 jest podzielne przez 9.",
        "Liczba jest podzielna przez 10, jeśli kończy się cyfrą 0. Na przykład, 350 jest podzielne przez 10.",
      ]}
    />
  </Accordion>
  <Accordion i="5" {show} {showCollapse} item="Własności silni">
    <AccordionComponent
      Header="Obliczanie silni w głowie może być wyzwaniem, szczególnie dla dużych liczb. Jednak istnieją techniki, które mogą pomóc w szybszym wykonywaniu tych obliczeń"
      List={[
        "Jeśli liczba jest parzysta, to jej silnia będzie również liczbą parzystą. Jeśli liczba jest nieparzysta, to jej silnia będzie liczbą nieparzystą. Na przykład, 6! = 720, a 7! = 5040.",
        "Jeśli liczba jest wielokrotnością 10, to jej silnia zakończy się zerami. Na przykład, 5! = 120, 10! = 3,628,800.",
        "Silnia liczby 0 jest zawsze równa 1 (0! = 1).",
        "Jeśli liczba jest duża, możesz rozłożyć ją na mniejsze czynniki, co ułatwi obliczenia. Na przykład, 8! = 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1.",

      ]}
    />
  </Accordion>
  
</div>
<Footer />

<style>
  .AccordionSection {
    margin: 5% 0%;
  }
</style>
