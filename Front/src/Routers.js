import Game from "./Pages/Game.svelte";
  import Ranking from "./Pages/Ranking.svelte";
  import About from "./Pages/About.svelte";
	import Home from "./Pages/Home.svelte"
const routes = [
    {
      name: '/',
      component: Home,
    },
    {
        name:'/Ranking',
        component:Ranking,
    },
    {
        name:'/Game',
        component:Game
    },
    {
        name:'/About',
        component:About

    }
]