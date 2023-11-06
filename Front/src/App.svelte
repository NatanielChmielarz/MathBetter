<script>
	
	import Game from "./Pages/Game.svelte";
	import Router, {location, link} from 'svelte-spa-router';
  import Ranking from "./Pages/Ranking.svelte";
  import About from "./Pages/About.svelte";
	import Home from "./Pages/Home.svelte"
  import Login from "./Pages/Login.svelte";
  import Register from "./Pages/Register.svelte";
  import MyProfileComponent from "./Pages/MyProfileComponent.svelte";

  
	
  </script>
  
  <main>
	
	
	<Router routes={{
		'/': Home,
		'/Game': Game,
		'/Ranking':Ranking,
		'/About':About,
		'/Login':Login,
		'/Register':Register,
		'/Profil':MyProfileComponent,
		
	}} />
  </main>
  

  <style>
	main {
	  text-align: center;
	  background-color: #fff;
	}
  
	
  
	
  </style>