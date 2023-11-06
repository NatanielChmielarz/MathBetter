<script>
  import LeaderboardEasy from "../Components/RankingComponents/LeaderboardEasy.svelte";
  import LeaderboardMedium from "../Components/RankingComponents/LeaderboardMedium.svelte";
  import LeaderboardHard from "../Components/RankingComponents/LeaderboardHard.svelte";
  import Navbar from "../Components/DefaultComponents/Navbar.svelte";
<<<<<<< Updated upstream
 
=======
  let results = {
    Easy: [],
    Medium: [],
    Hard: []
  };
>>>>>>> Stashed changes
 
</script>

<Navbar  isSticky={true} />


  

  <main>
  <div class="container">
    <div class="row gx-10">
      <div class="col-xl-4 col-lg-12 col-12 ">
        <div class="position-relative" style="min-height: 600px;">
          <LeaderboardEasy />
        </div>
      </div>
      <div class="col-xl-4 col-lg-12  col-12 ">
        <div class="position-relative" style="min-height: 600px;">
          <LeaderboardMedium />
        </div>
      </div>
      <div class="col-xl-4 col-lg-12  col-12 ">
        <div class="position-relative" style="min-height: 600px;">
          <LeaderboardHard />
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
  main{ height: max-content;}
}

 
</style>
