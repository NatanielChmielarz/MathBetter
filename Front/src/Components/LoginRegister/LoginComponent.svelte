<script>
  import {push} from 'svelte-spa-router'
  import axios from "axios";
    let Email
    let Password;
    let Error=""
    async function SubmitLogin(){
        const JsonData ={
   "email":Email,
   "password":Password
}
try {
    const response = await axios.post(`http://127.0.0.1:8000/api/login/`, JsonData);

    if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        Error = "Zalogowano pomyślnie.";
        push('/Profil')
      } else {
        // Tutaj możesz obsłużyć inne rodzaje odpowiedzi od serwera
        Error = "Błędne dane logowania.";
      }
    } catch (error) {
      Error = "Wystąpił błąd podczas logowania.";
    }
  }
    
</script>
<div class="container">
  <div class="row">
   
    <div class="col-md-4 my-auto">
      <div class="login ">
        <h1>Zaloguj się</h1>
        
        
        
          <input
          bind:value={Email}
            type="email"
            name="Email"
            placeholder="Email"
            required="true"
          />
          <input
          bind:value={Password}
            type="password"
            name="Password"
            placeholder="Hasło"
            required="true"
          />
          <button on:click={SubmitLogin}>Zaloguj się!</button>
          <p>{Error}</p>
      </div>
    </div>
    <div class="col-md-8">
      <img src="./images/LoginPhoto.jpg" alt="">
    </div>
    <div class="col-md-12">
      <a href="/#/Register">Nie masz konta? Utwórz nowe!</a>
    </div>
  </div>
</div>

<style>
  /* Stylizacja głównego kontenera */
  .container {
    margin-top: 3%;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
      padding: 40px;
      
    }
    .login{
      padding: 20px;
    }
    h1{
      font-size: 32px;
      font-weight: bold;
      display: block;
      margin-bottom: 20px;
      text-align: center;
    }

    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 20px;
      font-size: 16px;

    }

    input::placeholder {
      color: #999;
    }

    button {
      background-color: #007bff;
      color: #fff;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
      font-size: 18px;
      width: 100%;
      border-radius: 20px;
    }

    button:hover {
      background-color: #0056b3;
    }

    img {
      width: 100%;
      border-radius: 5px;
    }
</style>
