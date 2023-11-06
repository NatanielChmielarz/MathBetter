<script>

</script>
<div class="MainContainer">
    <div class="content">
      <img src="./images/LearnBanner.jpg" alt="photo" loading="lazy">
      <h1> Jak liczyć lepiej ?</h1>
      
    </div>
  </div>
<style>
  .MainContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #fff; /* Dodałem tło, aby wyizolować zawartość od reszty strony */
    margin-bottom: 45px;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .MainContainer h1 {
    position: absolute;
    bottom: 0;
    font-size: 72px;
    font-weight: 900;
    color:#f99248;
    
  
 
  }

  img {
    width: 55%;
    max-width: 100%;
    height: auto;
  }
  @media (max-width: 900px) {
    img{
      width: 100%;
    }
  }
  @media (max-width: 616px) {
    .MainContainer h1 { font-size: 48px;}
  }
  @media (max-width: 420px) {
    .MainContainer h1 { font-size: 42px;}
  }
</style>