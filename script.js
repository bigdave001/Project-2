document.querySelector('form').addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  let email = document.getElementById("email").value; 
  let password = document.getElementById("password").value;
  let error = document.getElementById("error");

  if (!email || !password) {
    alert("Please fill in the form");
  } else {
    // Proceed with form submission or further validation
  }
});