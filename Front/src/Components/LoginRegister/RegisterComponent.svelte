<script>
 import axios from "axios";

  let Name;
  let Email;
  let Password;
  let Error=""
  async function SubmitRegister() {
    const JsonData = {
      name: Name,
      email: Email,
      password: Password,
    };
    try {
    const response = await axios.post(`https://math-better-backend.vercel.app/api/register/`, JsonData);
    Error="Zarejestrowano pomyślnie , zaloguj się!"
  } catch (error) {
    Error = "Wystąpił błąd podczas rejestracji"; // Ustaw komunikat błędu
    throw error;
  }
  }
  
</script>

<div class="container">
  <div class="row">
   
    <div class="col-md-4 my-auto">
      <div class="signup ">
        <h1>Zalóż nowe konto</h1>
        
          
          <input
          bind:value={Name}
            type="text"
            name="Name"
            placeholder="Nazwa użytkownika"
            required="true"
          />
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
          <button on:click={SubmitRegister}>zarejestruj się!</button>
          <p>{Error}</p>
      </div>
    </div>
    <div class="col-md-8">
      <img src="./images/RegisterPhoto.jpg" alt="">
    </div>
    <div class="col-md-12">
      <a href="/#/Login">Masz już konto? Zaloguj się!</a>
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
    .signup{
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
