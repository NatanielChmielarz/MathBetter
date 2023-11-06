<script>
    export let desc;
    export let value;
    export let gameCount;
</script>

<div class="best-time">
    <div class="desc-cell">{desc}</div>
    <div class="game-count-cell">Ilość gier: {gameCount}</div>
    <div class="value-cell">Najlepszy czas:{ Math.floor(value / (1000 * 60))}m {Math.floor((value % (1000 * 60)) / 1000)}s {(Math.floor((value % (1000 * 60)) / 1000))%1000}ms</div>
</div>

<style>
    .best-time {
        display: flex;
        justify-content: space-between;
        border: 1px solid #ccc;
        border-radius: 15px;
        padding: 10px;
        margin: 5px 0;
        transition: background-color 0.3s, transform 0.2s;
        cursor: pointer;
    }

    .best-time:hover {
        background-color: #9292AE;
        transform: scale(1.02);
    }

    .desc-cell, .value-cell, .game-count-cell {
        flex: 1;
        text-align: center;
    }

    .desc-cell {
        font-weight: bold;
    }
</style>