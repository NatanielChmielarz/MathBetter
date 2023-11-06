<script>
  export let Data;
  import Chart from "./Chart.svelte";
  import OwnBestTime from "./OwnBestTime.svelte";
  const minTimesByDifficulty = Data.results.reduce((result, entry) => {
    const { difficult_level, time } = entry;

    if (!(difficult_level in result) || time < result[difficult_level].time) {
      result[difficult_level] = { time, entry };
    }

    return result;
  }, {});

  // Teraz masz obiekt minTimesByDifficulty, który zawiera najmniejsze czasy dla każdego trybu trudności
  console.log(minTimesByDifficulty);
  const gameCountByDifficulty = {};

  Data.results.forEach((entry) => {
    const { difficult_level } = entry;

    if (!gameCountByDifficulty[difficult_level]) {
      gameCountByDifficulty[difficult_level] = 1;
    } else {
      gameCountByDifficulty[difficult_level]++;
    }
  });

  console.log(gameCountByDifficulty);
</script>

<div class="container">
  <div class="row">
    <div class="col-12 d-flex justify-content-start">
      <h1>Statystyki</h1>
    </div>
    <div class="col-lg-12">
      <Chart
        data={[
          {
            ages: "Łatwy",
            count: String(
              gameCountByDifficulty.Easy ? gameCountByDifficulty.Easy : 0
            ),
          },
          {
            ages: "Średni",
            count: String(
              gameCountByDifficulty.Medium ? gameCountByDifficulty.Medium : 0
            ),
          },
          {
            ages: "Trudny",
            count: String(
              gameCountByDifficulty.Hard ? gameCountByDifficulty.Hard : 0
            ),
          },
        ]}
      />
    </div>

    <div class="row">
      <div class="col-lg-12 mx-auto">
        <h2>Ilość wszystkich wyzwań: {Data.results.length}</h2>
        <OwnBestTime
          desc="Poziom łatwy"
          gameCount={gameCountByDifficulty.Easy
            ? gameCountByDifficulty.Easy
            : 0}
          value={minTimesByDifficulty.Easy ? minTimesByDifficulty.Easy.time : 0}
        />
        <OwnBestTime
          desc="Poziom średni"
          gameCount={gameCountByDifficulty.Medium
            ? gameCountByDifficulty.Medium
            : 0}
          value={minTimesByDifficulty.Medium
            ? minTimesByDifficulty.Medium.time
            : 0}
        />
        <OwnBestTime
          desc="Poziom trudny"
          gameCount={gameCountByDifficulty.Hard
            ? gameCountByDifficulty.Hard
            : 0}
          value={minTimesByDifficulty.Hard ? minTimesByDifficulty.Hard.time : 0}
        />
      </div>
    </div>
  </div>
</div>

<style>
  h1 {
    font-size: 48px;
    font-weight: 700;
  }
  h2 {
    font-size: 32px;
  }
  .container {
    padding: 50px;
    font-family: Arial, Helvetica, sans-serif;
  }
  @media (max-width: 425px) {
    .justify-content-start {
      justify-content: center !important;
    }
  }
</style>
