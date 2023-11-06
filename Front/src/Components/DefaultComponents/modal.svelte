<script>
    export let Header
    export let paragraph
    export let ButtonFunc
    export let ButtonText
</script>
<div class="modal">
    <div class="modal-content">
        <h2>{Header}</h2>
        <p>{paragraph}</p>
        <slot/>
        <button on:click={ButtonFunc}>{ButtonText}</button>
        
    </div>
</div>
<style>
     .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal .modal-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    text-align: center;
    max-width: 400px;
  }

  .modal .modal-content h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .modal .modal-content p {
    font-size: 16px;
    margin-bottom: 20px;
  }

  .modal .modal-content button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
  }

  .modal .modal-content button:hover {
    background-color: #0056b3;
  }

</style>