import {generateExpression} from "./MathCombinationGenerator.js"
<<<<<<< Updated upstream
export async function Generator(Liczba1, Liczba2, Liczba3, difficult) {
  let Range = [];
  if (difficult === "Łatwy") {
      Range = [3, 0];
  } else if (difficult === "Średni") {
      Range = [15, 0];
  } else {
      Range = [12, 3];
  }

  // Losowa zamiana kolejności liczb
  const numbers = [Liczba1, Liczba2, Liczba3];
  shuffleArray(numbers);
  
  // Przekazujemy przetasowane liczby do generateExpression
  return await generateExpression(numbers[0], numbers[1], numbers[2], Range);
}

// Funkcja do losowej zamiany kolejności elementów w tablicy
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
=======
import axios from "axios";
export async function Generator(Liczba1, Liczba2, Liczba3,difficult) {
  let Range=0;
  if(difficult==="Łatwy")
  {
    Range=3
>>>>>>> Stashed changes
  }
}


export async function addResult(user_name, time, difficult_level) {
  if(difficult_level==="Łatwy")
  {
    difficult_level="Easy"
  }else if(difficult_level==="Średni")
  {
    difficult_level="Medium"
  }
  else{difficult_level="Hard"}
  try {
<<<<<<< Updated upstream
    const response = await fetch(
      'http://127.0.0.1:8000/results/',
      {
        method: 'POST', // Metoda POST, aby utworzyć nowy wynik
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json', // Ustawienie nagłówka Content-Type
        },
        body: JSON.stringify({ user_name, time, difficult_level }), // Przekształcenie danych na format JSON i wysłanie ich w ciele żądania
      }
    );

    if (response.ok) {
      console.log('Dodano nowy wynik!');
    } else {
      console.error('Błąd podczas dodawania wyniku.');
    }
=======
    await axios.post(`http://127.0.0.1:8000/api/AddResult/`, userData);
    console.log("dodano użytkownika")
>>>>>>> Stashed changes
  } catch (error) {
    console.error('Błąd podczas wysyłania danych:', error);
  }
}
  