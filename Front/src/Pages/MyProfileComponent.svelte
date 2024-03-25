<script>
  import { onMount } from "svelte";
  import { push } from "svelte-spa-router";
  import axios from "axios";
  import Navbar from "../Components/DefaultComponents/Navbar.svelte";
  import Statictics from "../Components/LoginRegister/Statictics.svelte";
  import ChangePassword from "../Components/LoginRegister/ChangePassword.svelte";
  let Data 
  let StatsOrPass="stats"
  async function getUserDetails() {
    const token = localStorage.getItem("token");
    if (!token) {
      push("/Login");
    } else {
      try {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        const response = await axios.get(`http://127.0.0.1:8000/api/user/`, {
          headers,
        });
        return response.data;
      } catch (error) {
        localStorage.removeItem("token")
        push("/Login");
        throw error;
      }
    }
  }

  async function fetchData() {
    try {
      Data = await getUserDetails();
    } catch (error) {
      push("/Login");
    }
  }

  onMount(() => {
    fetchData(); // Call fetchData when the component is mounted
  });
  
</script>

<Navbar />
{#if Data}
  <div class="container">
    <div class="row">
      <div class="col-lg-3 UserPanel  ">
        <div class="row d-flex justify-content-start mb-5">
            <div class="col-12 d-flex align-item-center">
                <i class="bi bi-person-circle icon-left" /> 
                <div class="user-details"> 
                    <h1>{Data.user.name}</h1> 
                    <p>{Data.user.email}</p> 
                </div>
            </div>
                <div class="col-12 d-flex Options">
        <ul>
            <li><i class="bi bi-bar-chart icons"></i><button on:click={() => StatsOrPass = "stats"}> Statystyki</button></li>
            <li><i class="bi bi-lock icons"></i> <button on:click={() => StatsOrPass = "pass"}>Hasło</button></li>
            <li><i class="bi bi-box-arrow-right icons"></i> <button on:click={()=>{localStorage.removeItem("token");fetchData()}}>Wyloguj</button></li>
        </ul>
        </div>
      </div></div>

      <div class="col-lg-9">
        {#if StatsOrPass==="stats"}
          <Statictics Data={Data}/>
          {:else}
          <ChangePassword/>
        {/if}
       
        
      </div>
    </div>
  </div>
{/if}

<style>
    

.icon-left {
    display: flex;
    justify-content: center;
    margin-right: 10px; /* Odstęp między ikoną a danymi użytkownika */
}

.user-details {
    flex: 1; /* Rozciągnięcie kontenera na Nick i email, aby wypełnić dostępną przestrzeń */
    text-align: left; /* Wyrównanie tekstu (Nick i email) do prawej strony */
    margin-bottom: 25px;
}
.UserPanel {
            padding:50px 30px;
            background-color: #F1F1FB;
        }

        .UserPanel h1 {
            display: flex;
            align-items: center;
            font-size: 24px;
        }

        .UserPanel ul {
            list-style: none;
            padding: 0;
        }

        .UserPanel li {
            margin-bottom: 10px;
            font-size: 16px;
            display: flex;
            align-items: center;
        }
        .UserPanel button{
            background-color: transparent;
            border: none;
            font-size: 18px;
        }
        .icons {
            
            font-size: 24px;
        }
        @media(max-width:991px){
          .UserPanel ul {
            display: flex;
        }
        .Options{
          justify-content: space-between;
        }
        
       
        }
       
  i {
    font-size: 60px;
    margin-right: 10px;
  }
  .container {
    margin-top: 3%;
    background-color: #fff;
    border-radius: 35px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  h1 {
    font-size: 40px;
    font-weight: bold;
    display: block;
    text-align: center;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
  }



 
</style>
