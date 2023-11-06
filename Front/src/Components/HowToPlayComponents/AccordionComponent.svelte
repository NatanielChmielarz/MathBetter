<script>
    export let Header;
    export let List;
</script>
<div class="Container">
    <div class="List">
        <h4>{Header}</h4>
        <ol>
            {#each List as item (item)}
            <li>{item}</li>
          {/each}

        </ol>
  
    </div>
  </div>
  <style>
    .Container {
      display: flex;
      justify-content: center;
      align-items: center;
    margin-top: 40px;
    
    }
  
    .List {
        width: 600px;
      background-color: #f9f9f9;
      border-radius: 20px;
      padding: 20px;
      box-shadow: -30px -30px 0px #f99248; /* Ustawienie cienia w lewo i w górę */
      font-family: Arial, sans-serif;
    }
    ol {
      list-style-type: decimal;
      margin-left: 20px;
      padding-left: 0;
      text-align: left;
      font-family: Arial, sans-serif;
    }
  
    li {
      font-size: 18px;
      margin-bottom: 12px;
      line-height: 1.6;
      font-family: Arial, sans-serif;
    }
    @media (max-width: 880px)
    {
      .List{
        box-shadow: none;
      }
      .Container{
        margin-top: 10px;
      }
    }
</style>