<script>
    import axios from "axios";
    let OldPassword
    let NewPassword
    let Error=""
    async function SubmitChangePassword() {
        if(OldPassword===NewPassword)
        {
            Error="Nowe hasło nie może być takie samo jak stare"
        }
        else{
    const JsonData = {
        "old_password": OldPassword,
        "new_password":NewPassword
    };
    try {
        const token = localStorage.getItem("token");
        const headers = {
          Authorization: `Bearer ${token}`,
        };
    const response = await axios.put(`http://127.0.0.1:8000/api/ChangePassword/`, JsonData,{
        headers,
    });
    Error="Hasło zostało zmienione"
   
  } catch (error) {
    Error = "Wystąpił błąd podczas zmiany hasła"; // Ustaw komunikat błędu
    throw error;
  }}
  }
</script>


<main>
    <h1>Zmień hasło</h1>
    <p>Wpisz swoje obecne hasło</p>
    <input type="password" bind:value={OldPassword} required>
    <p>Wpisz nowe hasło hasło</p>
    <input type="password" bind:value={NewPassword} required>
    <button on:click={SubmitChangePassword}>Zmień hasło</button>
    <p>{Error}</p>
    
</main>
<style>
    main {
  text-align: center;
  margin: 20px auto;
  padding: 20px;
 max-width: 400px;
}

h1 {
  font-size: 32px;
  margin: 0;
  color: #333;
  text-align: left;
}

p {
    text-align: left;
  font-size: 16px;
  margin: 10px 0;
  color: #666;
}

input {
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>