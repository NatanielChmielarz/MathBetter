<script>
    export let value = "";
  </script>
  
  <style>
    .input-container {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    }
  
    
  
    .input-wrapper {
      position: relative;
    }

  
    .input {
      width: 300px;
      font-size: 16px;
      background-color: #f0f0f0;
      color: #555;
      cursor: not-allowed;
      background-color: #fff;
    border: 1px solid #ccc;
    color: #333;
    font-size: 16px;
    padding: 10px;
    margin: 5px;
    }
  </style>
  
  <div class="input-container">
   
    <div class="input-wrapper">
      <input
        class="input"
        type="text"
        value={value}
        placeholder="Wpisz swoje wyrażanie."
        disabled
      />
    </div>
  </div>