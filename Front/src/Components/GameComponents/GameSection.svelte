<script>
  import { Generator } from "./Generator.js";
  import { addResult } from "./Generator.js";
  import Modal from "../DefaultComponents/modal.svelte";
  import axios from "axios";
  import { onMount } from "svelte";
  let userId
  onMount(async () => {
    if (!token) {
    return null; // Jeśli brakuje tokenu, funkcja zwraca null.
  }

  let response; // Deklarujemy zmienną do przechowania odpowiedzi z zapytania HTTP.

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  try {
    response = await axios.get(`https://math-better-backend.vercel.app/api/user/`, {
      headers,
    });
    userId = response.data.user.id;
  }
  catch(Error){
    console.log(Error)
  }
	});
  let LW;
  let Liczba_1, Liczba_2, Liczba_3;
  let l_range = 10;
  let isNormalMode = true;
  let currentLevel = 1;
  let startTime;
  let button1Disabled = false;
  let button2Disabled = false;
  let button3Disabled = false;
  let button4Disabled = false;
  let InputValue = "Zacznij klikając Start!";
  let levelInfo = "MathBetter";
  let LevelDifficult = "Łatwy";
  let PlayerTime;
  const token = localStorage.getItem("token");
  async function getUserDetails() {
    if (!token) {
      return null;
    }

    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/user/`, {
        headers,
      });
      return response.data.user.id;
    } catch (error) {
      console.error("Błąd podczas wykonywania zapytania HTTP:", error);
    }
  }

  async function GenerujLiczby() {
    Liczba_1 = generateRandomValue(l_range);
    Liczba_2 = generateRandomValue(l_range);
    Liczba_3 = generateRandomValue(l_range);
    LW = await Generator(Liczba_1, Liczba_2, Liczba_3, LevelDifficult);
  }
  function generateRandomValue(range) {
    return Math.floor(Math.random() * range + 1);
  }
  function losujLiczby() {
    clearInput();

    if (isNormalMode) {
      GenerujLiczby();
      button4Disabled = false;
      levelInfo = "MathBetter";
      stopTimer();
      startTimer();
    } else {
      button4Disabled = true;
      GenerujLiczby();
      levelInfo = `Poziom: ${currentLevel}/5`;

      if (currentLevel === 6) {
        PlayerTime = formattedTime;
        timerValue = elapsedMilliseconds;
        openChallengeCompleteModal();
        return;
      }
    }

    button1Disabled = false;
    button2Disabled = false;
    button3Disabled = false;
  }

  let isRunning = false;
  let elapsedMilliseconds = 0;
  let formattedTime;
  let timerValue = 0;
  function startTimer() {
    if (!isRunning) {
      startTime = Date.now() - elapsedMilliseconds;
      requestAnimationFrame(updateTimer);
      isRunning = true;
    }
  }

  function updateTimer() {
    const currentTime = Date.now();
    elapsedMilliseconds = currentTime - startTime;

    const elapsedMinutes = Math.floor(elapsedMilliseconds / (1000 * 60));
    const elapsedSeconds = Math.floor(
      (elapsedMilliseconds % (1000 * 60)) / 1000
    );
    const milliseconds = elapsedMilliseconds % 1000;

    timerValue = elapsedMilliseconds; // Aktualizuj timerValue

    // Formatowanie czasu
    formattedTime = `${elapsedMinutes}:${elapsedSeconds}:${milliseconds}`;

    if (isRunning) {
      requestAnimationFrame(updateTimer); // Kontynuuj aktualizację
    }
  }

  function stopTimer() {
    isRunning = false;
    resetTimer();
  }

  function resetTimer() {
    isRunning = false;
    elapsedMilliseconds = 0;
    //timerElement.textContent = "Czas: 0.0 s";
  }

  function setEasy() {
    l_range = 10;
    LevelDifficult = "Łatwy";
    losujLiczby();
  }

  function setMedium() {
    l_range = 10;
    LevelDifficult = "Średni";
    losujLiczby();
  }

  function setHard() {
    l_range = 15;
    LevelDifficult = "Trudny";
    losujLiczby();
  }

  let isChallengeInfoModalOpen = false;
  let isChallengeCompleteModalOpen = false;

  function openChallengeInfoModal() {
    isChallengeInfoModalOpen = true;
  }

  function closeChallengeInfoModal() {
    isChallengeInfoModalOpen = false;
  }

  function openChallengeCompleteModal() {
    isChallengeCompleteModalOpen = true;
  }

  function closeChallengeCompleteModal() {
    isChallengeCompleteModalOpen = false;
  }

  function switchToChallengeMode() {
    isNormalMode = false;
    currentLevel = 1;
    losujLiczby();
    resetTimer();
    startTimer();
    closeChallengeInfoModal(); // Close the info modal when switching to challenge mode
  }

  async function finishChallenge() {
 
    addResult(userId, timerValue, LevelDifficult);
     isNormalMode = true;
    losujLiczby();
    startTimer();
    timerValue = 0;
    closeChallengeCompleteModal(); // Close the completion modal
  } 
  function Giveup() {
    isNormalMode = true;
    losujLiczby();
    startTimer();
  }
  function Buttonl(buttonNumber) {
    if (buttonNumber === 1) {
      button1Disabled = true;
      addToExpression(Liczba_1);
    } else if (buttonNumber === 2) {
      button2Disabled = true;
      addToExpression(Liczba_2);
    } else if (buttonNumber === 3) {
      button3Disabled = true;
      addToExpression(Liczba_3);
    }
  }

  let LastAdd = "";
  let RedoHistory = [""];

  function redo() {
    if (InputValue.length > 0) {
      InputValue = InputValue.slice(0, -LastAdd.length);
      clearButton(Number(LastAdd));
      RedoHistory.pop();
      LastAdd = String(RedoHistory[RedoHistory.length - 1]);
      console.log(LastAdd);
    } else {
      clearInput();
    }
  }

  function clearButton(value) {
    switch (value) {
      case Liczba_1:
        button1Disabled = false;
        break;
      case Liczba_2:
        button2Disabled = false;
        break;
      case Liczba_3:
        button3Disabled = false;
        break;
    }
  }
  function addToExpression(value) {
    if (
      (value == Liczba_1 || value == Liczba_2 || value == Liczba_3) &&
      (LastAdd == Liczba_1 || LastAdd == Liczba_2 || LastAdd == Liczba_3)
    ) {
      clearButton(value);
    } else if (!(isOperator(LastAdd) && isOperator(value))) {
      InputValue += value;
      LastAdd = String(value);
      RedoHistory.push(LastAdd);
    }
  }

  function isOperator(value) {
    return /^[+\-*/]$/.test(value);
  }

  function clearInput() {
    InputValue = "";
    LastAdd = " ";
    RedoHistory = [""];
    button1Disabled = false;
    button2Disabled = false;
    button3Disabled = false;
  }

  function check() {
    const wynik = math.evaluate(InputValue);
    if (wynik === LW && button1Disabled && button2Disabled && button3Disabled) {
      if (isNormalMode) {
        stopTimer();
        InputValue = `zgadles w ${formattedTime}`;
        setTimeout(losujLiczby, 1500);
      } else {
        currentLevel++;
        InputValue = "Poprawna odpowiedz";
        setTimeout(losujLiczby, 1000);
      }
    } else {
      InputValue = "Zla odpowiedz";
      setTimeout(clearInput, 1000);
    }
  }
</script>

<main>
  <div id="Calculator">
    <div id="Header1" class="container">
      <div class="row justify-content-center align-items-center">
        <div class="col-xl-2 col-lg-3 col-md-3">
          <button on:click={losujLiczby} disabled={button4Disabled} id="start">
            Start
          </button>
        </div>
        <div class="col-xl-4 col-lg-9 col-md-9">
          <div class="dropdown">
            <button
              class="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="true"
            >
              Poziom: {LevelDifficult}
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <button class="dropdown-item" on:click={setEasy}>Łatwy</button>
              </li>
              <li>
                <button class="dropdown-item" on:click={setMedium}
                  >Średni</button
                >
              </li>
              <li>
                <button class="dropdown-item" on:click={setHard}>Trudny</button>
              </li>
            </ul>
          </div>
        </div>
        {#if userId}
          <div class="col-xl-3 col-lg-5 col-md-5">
            <button on:click={isNormalMode ? openChallengeInfoModal : Giveup}>
              {isNormalMode ? "Zacznij Wyzwanie" : "Poddaj się"}
            </button>
          </div>
        {/if}
        <div class="col-xl-3 col-lg-7 col-md-7">
          <h2
            style="color:#fff;font-weight: 900;font-family: Arial, sans-serif;"
          >
            {levelInfo}
          </h2>
        </div>
      </div>
    </div>
    <div class="GameControl">
      <div class="equation-container">
        <input
          type="text"
          id="wyrazenie"
          placeholder="Wpisz wyrażenie"
          readonly
          bind:value={InputValue}
        />
        <span id="LW" style="color:#808080;">=</span>
        <span id="LW" data-value={LW}>{LW === undefined ? "?" : LW}</span>
      </div>

      <div class="buttons">
        <button
          on:click={() => Buttonl(1)}
          disabled={button1Disabled}
          style="font-weight: 900;background-color: #acc4fb; font-family: Arial, sans-serif;"
          >{Liczba_1 === undefined ? "?" : Liczba_1}</button
        >
        <button
          on:click={() => Buttonl(2)}
          disabled={button2Disabled}
          style="font-weight: 900;background-color: #acc4fb;font-family: Arial, sans-serif;"
          >{Liczba_2 === undefined ? "?" : Liczba_2}</button
        >
        <button
          on:click={() => Buttonl(3)}
          disabled={button3Disabled}
          style="font-weight: 900;background-color: #acc4fb;font-family: Arial, sans-serif;"
          >{Liczba_3 === undefined ? "?" : Liczba_3}</button
        >
        <button
          on:click={() => clearInput()}
          style="font-weight: 900;background-color: #EA3030;">C</button
        >
        <button on:click={() => addToExpression("+")}
          ><i class="fas fa-plus" /></button
        >
        <button on:click={() => addToExpression("-")}
          ><i class="fas fa-minus" /></button
        >
        <button on:click={() => addToExpression("*")}
          ><i class="fas fa-times" /></button
        >
        <button on:click={() => addToExpression("/")}
          ><i class="fas fa-divide" /></button
        >
        <button on:click={() => addToExpression("(")} style="font-weight: 900;"
          >(</button
        >
        <button on:click={() => addToExpression(")")} style="font-weight: 900;">
          )</button
        >
        {#if LevelDifficult === "Średni" || LevelDifficult === "Trudny"}
          <button
            on:click={() => addToExpression("^2")}
            style="font-weight: 900;">x<sup>2</sup></button
          >
          <button on:click={() => addToExpression("sqrt(")}
            ><i class="fas fa-square-root-alt" /></button
          >
          <button on:click={() => addToExpression("!")}
            ><i class="fas fa-exclamation" /></button
          >
        {/if}
        <button on:click={() => check()}><i class="fas fa-equals" /></button>
        <button
          on:click={() => redo()}
          disabled={RedoHistory.length > 1 ? true : false}
          ><i class="fas fa-redo" /></button
        >
      </div>
    </div>
  </div>
  {#if isChallengeInfoModalOpen}
    <Modal
      Header="Tryb wyzwania"
      paragraph=" Czeka cię 5 poziomów które musisz ukończyć w jak najkrótszym czasie."
      ButtonFunc={switchToChallengeMode}
      ButtonText="Rozpocznij wyzwanie"
    />
  {/if}

  {#if isChallengeCompleteModalOpen}
    <Modal
      Header="Gratulacje!"
      paragraph="Ukończyłeś wyzwanie w czasie {PlayerTime}. Sprawdź swój wynik w profilu oraz sprawdz czy udało ci się zająć miejsce w rankingu!"
      ButtonFunc={finishChallenge}
      ButtonText="Zakończ"
    />
  {/if}
</main>

<style>
  #Calculator {
    border: #f99248 30px solid;
    border-radius: 45px;
    background-color: #fff;
    -webkit-box-shadow: inset 1px 1px 14px -4px rgba(66, 68, 90, 1);
    -moz-box-shadow: inset 1px 1px 14px -4px rgba(66, 68, 90, 1);
    box-shadow: inset 1px 1px 14px -4px rgba(66, 68, 90, 1);
  }

  .GameControl {
    margin: 3% 5%;
  }

  main {
    margin: 5% 20%;
  }

  #Header1 {
    background-color: #f99248; /* Nowy kolor tła */

    background: #f99248; /* Gradient background */
    padding: 10px; /* Increase padding for better visibility */
    text-align: center; /* Center align text */
  }

  #Header1 button {
    background-color: #f99248; /* Nowy kolor przycisków */
    color: white;
    border: none;
    font-size: 18px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s, transform 0.2s;
  }

  #Header1 button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  #Header1 button:hover {
    background-color: #e87020; /* Nowy kolor przycisków po najechaniu */
  }

  .dropdown {
    position: relative;
  }

  .dropdown-toggle {
    color: white;
    font-size: 18px;
    background-color: #f99248; /* Nowy kolor przycisków */
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
  }

  .dropdown-menu {
    min-width: 100%;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #f99248; /* Nowy kolor tła */
    border: 1px solid #e87020;
    border-top: none;
    border-radius: 0 0 10px 10px; /* Zaokrąglenie rogów dolnej krawędzi menu */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .dropdown-toggle:hover + .dropdown-menu {
    display: block;
  }

  .dropdown-item {
    color: #e87020; /* Kolor tekstu w elementach menu */
    padding: 10px 20px;
    font-size: 18px;
    transition: background-color 0.3s, color 0.3s;
  }

  .dropdown-item:hover {
    background-color: #fff; /* Białe tło po najechaniu */
    color: #f99248; /* Nowy kolor tekstu po najechaniu */
  }

  .dropdown-item:focus,
  .dropdown-item:hover {
    background-color: #fff;
    color: #f99248; /* Nowy kolor tekstu po najechaniu */
    text-decoration: none;
  }

  /* Main content styles */
  .equation-container {
    font-family: Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 18px;
    margin-top: 10px;
    padding: 10px;
    background-color: #cfffee;
    border: #c6c1c1 5px solid;
    border-radius: 15px;
    -webkit-box-shadow: inset 0px 0px 13px -8px rgba(66, 68, 90, 1);
    -moz-box-shadow: inset 0px 0px 13px -8px rgba(66, 68, 90, 1);
    box-shadow: inset 0px 0px 13px -8px rgba(66, 68, 90, 1);
  }

  #LW {
    color: #f99248;
    margin: 0px 15px;
    font-weight: 900;
    font-size: 32px;
    font-family: "Arial", sans-serif;
  }

  #wyrazenie {
    flex-grow: 1;
    color: #808080;
    font-weight: 900;
    padding: 8px;
    font-size: inherit;
    background-color: transparent;
    border: none;
    text-align: right;
    font-size: 24px;
    width: 70%;
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 25px 0px;
  }

  .buttons button {
    background-color: #f99248; /* Nowy kolor przycisków */
    color: white;
    border: none;
    padding: 10px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
  }

  .buttons button:disabled {
    background-color: #ccc !important;
    cursor: not-allowed;
  }

  .buttons button:hover {
    background-color: #e87020; /* Nowy kolor przycisków po najechaniu */
    transform: scale(1.05);
  }
  @media (max-width: 890px) {
    #LW {
      margin: 0 5px;
      font-size: 22px;
    }
    #wyrazenie {
      font-size: 20px !important;
    }
  }
  @media (max-width: 699px) {
    main {
      margin: 5% 8%;
    }
    .buttons {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      padding: 25px 0px;
    }
    #LW {
      margin: 0 5px;
      font-size: 20px;
    }
    #wyrazenie {
      font-size: 18px !important;
    }
  }
</style>
