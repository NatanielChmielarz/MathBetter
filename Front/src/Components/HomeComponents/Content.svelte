<script>
  import Box from "./Box.svelte";
</script>

<main class="position-relative">
  <div class="container-fluid ">
    <div class="row">
      <div class="col-xl-6 col-lg-12 p-2 ">
        <Box/>
      </div>
      <div class="col-xl-6 col-lg-12 pl-3  d-flex align-items-center justify-content-center">
        
        <img src="./images/Background.jpg" alt="Designed by pch.vector" class="img-fluid" id="MainPhoto" loading="lazy"></div>
      
    </div>
  </div>
</main>

<style>
  main {
    display: block;
  }

  #MainPhoto {
    max-width: 100%;
    display: block;
  
  }

  /* For smaller screens, adjust the photo size */
 
  
</style>