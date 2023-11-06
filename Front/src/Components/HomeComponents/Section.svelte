<script>
  import { onMount } from 'svelte';
  let showDescription = false;

  onMount(() => {
    setTimeout(() => {
      showDescription = true;
    }, 500);
  });
</script>

<style>
  /* Aktualizowane style CSS */
  .container {
    background-color: #acc4fb;
    padding: 2rem;
    transition: background-color 0.3s ease;
    cursor: pointer;
    overflow: hidden;
    position: relative;
  }

  .container > .row {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  h3 {
    font-size: 32px;
    color: #fff;
    font-weight: 700;
  }

  .column {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    animation: bounce 1s infinite;
  }

  .description {
    color: white;
    font-size: 1.1rem;
    line-height: 1.6;
    opacity: 0;
    transform: translateY(20px);
    animation: slideIn 1s forwards 0.5s;
  }

  .bi {
    color: #fff;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }

  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>

<div class="container">
  <div class="row">
    <div class="col-12 col-md-4" data-aos="fade-down">
      <div class="column">
        <span class="icon">
          <i class="bi bi-pencil"></i>
        </span>
        <h3>Interaktywne Lekcje</h3>
        <p class="description">Odkryj fascynujący świat matematyki dzięki interaktywnym lekcjom, które sprawią, że nauka stanie się przyjemnością.</p>
      </div>
    </div>
    <div class="col-12 col-md-4" data-aos="fade-down">
      <div class="column">
        <span class="icon">
          <i class="bi bi-award"></i>
        </span>
        <h3>Ciekawe Quizy</h3>
        <p class="description">Rozwijaj swoje umiejętności matematyczne, biorąc udział w różnorodnych quizach i sprawdzaj swoją wiedzę.</p>
      </div>
    </div>
    <div class="col-12 col-md-4" data-aos="fade-down">
      <div class="column">
        <span class="icon">
          <i class="bi bi-puzzle"></i>
        </span>
        <h3>Wyzwania Matematyczne</h3>
        <p class="description">Stawiaj czoła trudnym zadaniom matematycznym, które pozwolą Ci pogłębić swoje zrozumienie tej nauki.</p>
      </div>
    </div>
  </div>
</div>
