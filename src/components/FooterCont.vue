<template>
    <footer class="footer">
      <div class="footer-content">
        <a href="https://www.instagram.com/..." target="_blank" rel="noopener noreferrer">
          <i class="bi bi-instagram"></i>
        </a>
        <a href="https://t.me/..." target="_blank" rel="noopener noreferrer">
          <i class="bi bi-telegram"></i>
        </a>
        <a href="https://www.linkedin.com/in/..." target="_blank" rel="noopener noreferrer">
          <i class="bi bi-linkedin"></i>
        </a>
        <a href="https://docs.google.com/forms/..." target="_blank" rel="noopener noreferrer">
          <i class="bi bi-envelope"></i>
        </a>
        <p>Todos los derechos reservados</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'FooterCont',
  };
  </script>

  
  <style>
  
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    position: static;
  }
  
  .footer-content {
    text-align: center;
  }
  
  .footer-content a {
    margin-right: 0.5rem;
    
  }
  
  </style>