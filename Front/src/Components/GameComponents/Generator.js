import {generateExpression} from "./MathCombinationGenerator.js"
import axios from "axios";
export async function Generator(Liczba1, Liczba2, Liczba3,difficult) {
  let Range=0;
  [Liczba1, Liczba2, Liczba3] = shuffle([Liczba1, Liczba2, Liczba3]);
  if(difficult==="Łatwy")
  {
    Range=3
  }
  else {Range=15}

  return await generateExpression(Liczba1, Liczba2, Liczba3,Range);
}
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

export async function addResult(User, time, difficult_level) {
  if(difficult_level==="Łatwy")
  {
    difficult_level="Easy"
  }else if(difficult_level==="Średni")
  {
    difficult_level="Medium"
  }
  else{difficult_level="Hard"}
 const userData={
  "time": time,
    "difficult_level": difficult_level,
    "user": User
 }

  try {
    await axios.post(`http://127.0.0.1:8000/api/AddResult/`, userData);
  } catch (error) {
    throw error;
  }
}
  