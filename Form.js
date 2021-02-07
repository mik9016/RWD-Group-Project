const submitBtn = document.getElementById("submit-button");
const forms = document.querySelectorAll(".needs-validation");
const inputs = document.querySelectorAll("input");
const textArea = document.querySelector("textarea");
const closeBtn = document.getElementById('close');
submitBtn.disabled = true;

function validate() {
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener("keyup", (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      } else {
        submitBtn.disabled = false;
        
      }
      
      form.classList.add("was-validated");
    });
  });
}

function scrollToTop() { 
    closeBtn.addEventListener('click', ()=>{
        window.scrollTo(0, 0); 
        submitBtn.disabled=true
    })
    
} 

function clearInputs() {
  submitBtn.addEventListener("click", () => {
    inputs.forEach((input) => {
      input.value = "";
      
    });
    textArea.value = "";
    
  });
  
  
}

validate();
clearInputs();
scrollToTop();

