AOS.init({
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 1500, // values from 0 to 3000, with step 50ms
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

const fullName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("thank_you");

const msgCheck = () => {
  if (fullName.value === "" || email.value === "" || message.value === "") {
    successMsg.style.display = "none";
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";
    successMsg.style.display = "block";
  }
};
