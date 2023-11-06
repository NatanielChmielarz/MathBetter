<script>
    export let Header;
    export let text;
    export let PhotoName;
    export let isReverse;
    
</script>

<style>
    
    .BoxContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }


  
  .DirectoryRow{    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(var(--bs-gutter-y) * -1);
    margin-right: calc(var(--bs-gutter-x) * -.5);
    margin-left: calc(var(--bs-gutter-x) * -.5);
flex-direction: row-reverse;}
  /* Optional: Add styles to h2 and p elements */
  .BoxContent h2 {
    font-size: 52px;font-weight: 700;color:#f99248;padding: 10px;
    
    margin-bottom: 15px;
  }

  .BoxContent p {
    font-size: 16px;text-align: center;
    padding:0px 20px;
    line-height: 1.5;
  }

    .square {
      box-sizing: border-box;
      border: 8px solid #acc4fb;
      border: 8px 4px 8px 4px;
      padding: 20px;
      text-align: center;
      margin: 0;
      height: 100%;
    }
    .col-lg-6{
        padding: 0px;
        
    }
   
    @media (max-width: 768px) {
      .square {
        margin-bottom: 10px; /* Create a small gap between the squares on smaller screens */
      }
    }
  </style>
  
  <div class="container">
    <div class=" no-gutters {isReverse===true ? 'DirectoryRow' : 'row'}">
      <div class="col-lg-6 col-12  ">
        <div class="square">
          <div data-aos="fade-down">
          <img src="./images/{PhotoName}.jpg" alt="Zdjęcie" class="img-fluid" loading="lazy"></div>
        </div>
      </div>
      <div class="col-lg-6 col-12 ">
        <div class="square">
            <div class="BoxContent">
              <div data-aos="fade-down">
          <h2>{Header}</h2>
          <p>{text}</p></div></div>
        </div>
      </div>
    </div>
  </div>

  
  
  
  
  
