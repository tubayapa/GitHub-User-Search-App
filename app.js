import Github from "./github.js";
import UI from "./ui.js";

// github ve ui classlarinin bir ornegini olusturuyoruz asagida

const github = new Github();
const ui = new UI();

console.log(ui);

const searchUser = document.getElementById("search-user");
const searchButton = document.getElementById("search-button");

// console.log(searchButton, searchUser)

searchButton.addEventListener("click", getInput);
searchUser.addEventListener("keypress", (e) => {
 
  if (e.code === "Enter") {
    getInput();
  }
});

function getInput() {
  if (searchUser.value !== "") {
    github.getUser(searchUser.value).then((data) => {
      if (data.profile.message === "Not Found") {
        //hata mesaji goster
        ui.showAlert("User is not found", "alert alert-danger");
      }
      //kullaniciyi goster
      else {
        ui.showAlert("User is found successfully", "alert alert-success");
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    ui.showAlert("Form field cannot be empty ", "alert alert-info");
    ui.clearProfile();
  }
  searchUser.value = '';
}
