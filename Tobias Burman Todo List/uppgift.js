let input = document.getElementById("inputField");
let addButton = document.querySelector(".addButton");
let resetButton = document.querySelector(".resetButton");
let inputContainer = document.querySelector(".input-container");
let completeToDoList = document.getElementById("done-tasks");
let toDoList = document.getElementById("todo-list-container");

let errorMessage = document.createElement("p");
    errorMessage.classList.add("error-message");
    errorMessage.innerText = "Får ej skapa tomma sysslor";
    errorMessage.style.color = "white";
//Lägga till knappen
addButton.addEventListener("click", function (e) {
  if (input.value.length == 0){
    errorMessage.style.color = "red";
    inputContainer.appendChild(errorMessage);
    resetButton.addEventListener("click", function (e) { //Tar bort felmeddelanden vid första inputen
      errorMessage.remove();
    }); 
  } 
  else {
    errorMessage.remove()
    var toDoItem = document.createElement("li");   //Li
    toDoItem.classList.add("todo-item");
    let toDoInput = document.createElement("input");//Text input
    toDoInput.value = input.value;  // Få input value till ny input
    toDoInput.disabled = true;   
    toDoInput.classList.add("todo-input");
    toDoList.appendChild(toDoItem);
    toDoItem.appendChild(toDoInput);
    //Göra ett Objekt till knapparna
    const buttonObject = {
      buttonName: "Ändra",
      createButton: function () {
        button = document.createElement("button");
        button.innerText = this.buttonName;
        toDoItem.appendChild(button);
        return button;
      },
    };
    buttonObject.init = function (buttonName) {     //Init function till knappens namn
      this.buttonName = buttonName;
    };

    let editButton = buttonObject.createButton();
    buttonObject.init("Färdig"); //Skapa ny knapp med "färdig"
    let completeButton = buttonObject.createButton();
    buttonObject.init("Radera"); // Skapa ny knapp med "Radera"
    let deleteButton = buttonObject.createButton();
    //error messages
    let errorMessage2 = document.createElement("p");
        errorMessage2.classList.add("error-message2");
        errorMessage2.innerText = "Får ej ändras till tom syssla";
        errorMessage2.style.color = "red";

    let errorMessage3 = document.createElement("p");
        errorMessage3.classList.add("error-message3");
        errorMessage3.innerText = "Får ej vara en tom  färdig syssla";
        errorMessage3.style.color = "red";
    //Ändra knappen
    editButton.addEventListener("click", function (e) {
      if (toDoInput.value.length == 0) {
        toDoItem.appendChild(errorMessage2);
        toDoInput.disabled = true;
      }
      if (toDoInput.disabled) {
        toDoInput.disabled = false;
        editButton.innerText = "Spara";
      }
       else {
        toDoInput.disabled = true;
        editButton.innerText = "Ändra";
        errorMessage2.remove();  // ta bort error messages när det blir true
        errorMessage3.remove()
      }
      
    });
    //Radera knappen
    deleteButton.addEventListener("click", function (e) {
      e.target.parentNode.remove();
    });
    //Färdig knappen
    completeButton.addEventListener("click", function (e) {
      if (toDoInput.value.length == 0) {
        toDoItem.appendChild(errorMessage3);
      } 
      if (toDoItem.disabled = true){}
       else {
        completeToDoList.append(toDoItem)  //För över värderna i Item till Färdiga listan
        completeButton.remove(); 
        errorMessage2.remove();            // Ta bort felmeddelanden
        errorMessage3.remove()
      }

    }); 
    //Återställ knappen
    resetButton.addEventListener("click", function (e) {
    toDoItem.remove();
    completeItem.remove();
  });
 }
});