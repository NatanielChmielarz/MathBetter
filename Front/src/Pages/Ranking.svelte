<script>
  import LeaderboardEasy from "../Components/RankingComponents/LeaderboardEasy.svelte";
  import LeaderboardMedium from "../Components/RankingComponents/LeaderboardMedium.svelte";
  import LeaderboardHard from "../Components/RankingComponents/LeaderboardHard.svelte";
  import Navbar from "../Components/DefaultComponents/Navbar.svelte";
  let results = {
    Easy: [],
    Medium: [],
    Hard: []
  };
 
const getResults = async () => {
  try {
    const response = await fetch(
      `https://math-better-backend.vercel.app/api/BestResults/`,
      {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
      }
    );

    if (response.ok) {
      
      results = await response.json();
      
    } else {
      console.error("Błąd podczas pobierania wyników.");
    }
  } catch (error) {
    console.error("Błąd pobierania danych:", error);
  }
};

getResults(); // Automatycznie pobierz wyniki po załadowaniu strony
</script>

<Navbar  isSticky={true} />


  

  <main>
  <div class="container">
    <div class="row gx-10">
      <div class="col-xl-4 col-lg-12 col-12 ">
        <div class="position-relative" style="min-height: 600px;">
          <LeaderboardEasy data={results.Easy}  />
        </div>
      </div>
      <div class="col-xl-4 col-lg-12  col-12 ">
        <div class="position-relative" style="min-height: 600px;">
          <LeaderboardMedium data={results.Medium}/>
        </div>
      </div>
      <div class="col-xl-4 col-lg-12  col-12 ">
        <div class="position-relative" style="min-height: 600px;">
          <LeaderboardHard data={results.Hard}/>
        </div>
      </div>
    </div>
  </div>
</main>

<style>
main{
  background-image: url("../images/RankingBackground.svg");
  background-repeat: no-repeat;

background-size: cover;
  height: 100vh;
width:100%;
}
@media(max-width :1200px){
  main{ background-image:none}
}

 
</style>
