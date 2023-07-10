let calculation = localStorage.getItem('calculation') || '';
      
      // display calculation on page instead of console
      displayCalculation();

      function updateCalculation (value) {
        calculation += value;
        
        // display calculation on page instead of console
        displayCalculation();

        localStorage.setItem('calculation', calculation);
      }

      function displayCalculation () {
        document.querySelector('.js-calculation')
          .innerHTML = calculation;
      }