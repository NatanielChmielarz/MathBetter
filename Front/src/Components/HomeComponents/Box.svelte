<!-- Hero.svelte -->
<script>
  export let header = "Odkryj magię matematyki w zupełnie nowy sposób!";
export let description = "Przygotuj się do wciągającej gry matematycznej, która sprawi, że zapomnisz o nudnych wzorach. Rywalizuj z innymi graczami, rozwiązuj zagadki i ciekawe zadania matematyczne. Czekają na Ciebie nie tylko niesamowite odkrycia, ale również emocjonująca rywalizacja, która pozwoli Ci udowodnić swoje umiejętności.";
export let buttonText = "Dołącz do wyzwania";
  </script>
  
  <style>
    .hero-section {
     
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40em;
      overflow: hidden;
    }
  
    .containers {
     
      
      padding: 100px 0px 100px 80px;
      
      
      text-align: left;
      z-index: 1;
      
    }
    @media (max-width: 991px)
    {
      .hero-section {
      height: auto; /* Usuń stałą wysokość dla urządzeń o szerokości mniejszej niż 992px */
    }
    .containers {
      padding: 20px; /* Zmniejsz wcięcie wewnętrzne */
      text-align: center;
    }
<<<<<<< Updated upstream
    button{
      display: flex;
    }
=======
    
>>>>>>> Stashed changes
    }

    h1 {
      color: #f99248;
      font-size: 48px;
      margin-bottom: 25px;
      font-weight: 700px;
    }
  
    p {
      color: #333;
      font-size: 16px;
      margin-bottom: 25px;
      line-height: 1.6;
    }
  
    a {
      display: inline-block;
      text-decoration: none;
      background-color: #f99248;
      color: #fff;
      font-weight: bold;
      border: none;
      padding: 15px 30px;
      font-size: 16px;
      cursor: pointer;
      border-radius: 15px;
      transition: background-color 0.3s ease;
    }
  
    a:hover {
      background-color: #ad6734;
    }
    

  </style>
  
  <section class="hero-section">
    <div class="containers">
      <h1>{header}</h1>
      <p>{description}</p>
      <a href="/#/Game">{buttonText}</a>
    </div>
  </section>