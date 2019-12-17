// Had to clear up syntax in a different html (reason for copy paste)
const ClearAll = {
    checkboxes: document.querySelectorAll('.table td input[type="checkbox"]'),
    selectAllTarget: document.querySelector('.select-all'),
    clearBtn: document.querySelector('.js-clear'),
    // setting all html elements to line up with js
  
    initialize() {
      this.shiftToSelect();
      this.selectAll();
      this.clearChecked();
      this.showRemoveCheckedButton();
    },
  
    shiftToSelect() {
      const checkboxes = this.checkboxes;
      let lastChecked;
  
      function handleCheck(event) {
        // Check if shift key is down and check if checkbox is checked
        let inBetween = false;
        if (event.shiftKey && this.checked) {
          checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
              inBetween = !inBetween;
            }
  
            if (inBetween) {
              checkbox.checked = true;
            }
          });
        }
        lastChecked = this;
      }
  
  
      checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck, false));
    },
  
    selectAll() {
        // this will select all the buttons with the click of the unchecked button at the top
      function handleSelectAll(event) {
        this.checkboxes.forEach(checkbox => {
          checkbox.checked ? (checkbox.checked = false) : (checkbox.checked = true)
        })
      }
  
      this.selectAllTarget.addEventListener('click', handleSelectAll.bind(this), false)
    },
  
    showRemoveCheckedButton() {
        // this will remove all the checked buttons once you click the "clear checked" button
      this.clearBtnDisplay('none')
      document.addEventListener('change', this.showBtn.bind(this))
    },
  
    showBtn(event) {
        // 
      const checkboxesChecked = document.querySelectorAll('.table td input[type="checkbox"]:checked').length;
  
      if (checkboxesChecked > 0) {
        this.clearBtn.querySelector('span').textContent = checkboxesChecked;
        this.clearBtnDisplay('block');
      } else {
        this.clearBtn.querySelector('span').textContent = '';
        this.clearBtnDisplay('none');
      }
    },
  
    clearBtnDisplay(state) {
      this.clearBtn.style.display = state;
    },

    // used to check if box is checked, if so, clear check
    clearChecked() {
      this.clearBtn.addEventListener('click', removeChecked.bind(this), false);
  
      function removeChecked() {
        this.checkboxes.forEach(checkbox => (checkbox.checked = false));
        this.selectAllTarget.checked = false;
        this.clearBtnDisplay('none');
      }
    }
  
};

ClearAll.initialize();


const collegeForm = document.querySelector('#college-form');

collegeForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    // function to click the button to display all the deadlines

    var checkboxes = document.getElementsByName('uni');

    for (var i=0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            var row = checkboxes[i].parentNode.parentNode.parentNode;
            row.cells[2].style.display = 'block';
            // row 2 being used throughout
        }
    }
    
}

