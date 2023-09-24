 
      const hamburger = document.getElementById('hamburger');
      const menu = document.getElementById('menu');
      const hLink = document.querySelectorAll('#hLink');
      const faSolid = document.querySelector(".fa-solid");
   
      hamburger.addEventListener('click', () => {
          menu.classList.toggle('hidden');
          faSolid.classList.toggle('fa-xmark');
      })

      hLink.forEach(link => {
          link.addEventListener('click', () => {
              menu.classList.toggle('hidden');
              faSolid.classList.toggle('fa-xmark');
          })
      })

