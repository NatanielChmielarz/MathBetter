<script>
  import GameSection from "../Components/GameComponents/GameSection.svelte";
import Navbar from "../Components/DefaultComponents/Navbar.svelte";

</script>
<div class="Game">
<Navbar  isSticky={false} />
<GameSection/>
</div>

<style>
.Game{
  background-image: url("../images/ttten.svg");
  background-repeat: no-repeat;

background-size: cover;
  height: 100vh;
width:100%;
}
</style>