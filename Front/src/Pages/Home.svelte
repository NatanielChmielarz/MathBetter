<script>
  import Navbar from "../Components/DefaultComponents/Navbar.svelte";

  import Content from "../Components/HomeComponents/Content.svelte";
  import DualBox from "../Components/HomeComponents/DualBox.svelte";
  import Bar from "../Components/DefaultComponents/Bar.svelte";
  import Section from "../Components/HomeComponents/Section.svelte";
  import Footer from "../Components/DefaultComponents/Footer.svelte";
  AOS.init();
  let isPageLoaded = false;


function handlePageLoad() {
  isPageLoaded = true;
}

window.addEventListener('load', handlePageLoad);
</script>

<main>
  {#if isPageLoaded}
  <Navbar  isSticky={true} />
  <div data-aos="fade-up">
  <Content /></div>
  <Bar Text="Dlaczego warto korzystać z Math Better?" />
  <DualBox
    Header="Edukacja"
    text="Czy zastanawiałeś się kiedyś, jak szybko możesz obliczyć te skomplikowane równania? Aplikacja Math Better jest tutaj, by Ci w tym pomóc! Oferując unikalne narzędzia i techniki, ta aplikacja edukacyjna pomoże Ci w osiągnięciu nowego poziomu umiejętności matematycznych. Nie tylko szybciej rozwiązywać zadania, ale również zrozumieć głębsze aspekty matematyki. Rozpocznij podróż ku odkrywaniu magii liczb z Math Better już dziś!"
    PhotoName="Edukacja"
    isReverse={false}
  />
  <DualBox
    Header="Rywalizacja"
    text="Czujesz w sobie ducha rywalizacji? Math Better oferuje tryb wyzwań, który przekształci naukę matematyki w ekscytującą grę! Staw czoła innym użytkownikom i zmierz się z różnorodnymi zadaniami matematycznymi. Nasz ranking jest otwarty dla każdego, kto odważy się podjąć wyzwanie. Zdobądź najlepszy czas i zdobywaj punkty, aby zająć miejsce na podium. Z Math Better, nauka staje się zabawą, a rywalizacja dostarcza dodatkowej motywacji do osiągania sukcesów matematycznych. Zaczynaj już teraz i zobacz, czy możesz zdobyć czołową pozycję!
"
    PhotoName="Rywalizacja"
    isReverse={true}
  />
  <Section/>
  <Footer/>
  {:else}
  <!-- Tutaj możesz umieścić informację lub animację ładowania -->
  <p>Strona jest w trakcie ładowania...</p>
{/if}

</main>

<style>
 

 
</style>
