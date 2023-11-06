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
    <AccordionComponent Header="W matematyce istnieje określona kolejność działań, która jest kluczowa dla poprawności obliczeń. Poniżej znajdziesz podstawową hierarchię działań matematycznych: "
     List={["Działania w nawiasach","Potęgowanie i pierwiastkowanie","Mnożenie i dzielenie (w kolejności ich występowania, tj. od lewej do prawej)","Dodawanie i odejmowanie (w kolejności ich występowania, tj. od lewej do prawej)"]}/>
  </Accordion>
  <Accordion i="2" {show} {showCollapse} item="Łatwiejsze mnożenie" >
      <AccordionComponent Header="Oto kilka porad, które pomogą Ci mnożyć szybciej w głowie:" List={["Zrozum, że mnożenie jest przemienną i łączną operacją. Na przykład, 3 x 4 to to samo, co 4 x 3. To pozwoli Ci na bardziej elastyczne myślenie.",
    "Użyj przybliżenia: Jeśli masz trudności z mnożeniem dużych liczb, zaokrąglaj je do liczb bardziej zaokrąglonych, a potem przelicz wynik. Na przykład, dla 47 x 18, zaokrągl 47 do 50 i 18 do 20. Teraz oblicz 50 x 20 (czyli 1000) i dostosuj wynik o różnicę (47 - 50) x (18 - 20), czyli -6. Ostateczny wynik to 1000 - 6, czyli 994."
    ,"Użyj strategii podwajania i połowy: Dla większych liczb, możesz podzielić mnożenie na mniejsze kroki. Na przykład, aby obliczyć 7 x 8, możesz zacząć od 4 x 8 = 32, a potem dodać 3 x 8 = 24, co daje razem 56."]}/>
    </Accordion>
</div>
<Footer />

<style>
  .AccordionSection {
    margin: 5% 0%;
  }
</style>
