// selecting elements
var addNoteBtn = document.getElementsByClassName("add-Note")[0];
// global varibales
var notesObject = [
    {
        text: "text one",
    },
    {
        text: "text two",
    },
    {
        text: "text three",
    },
];
// functions
var createNote = function () {
    notesObject.forEach(function (el) {
        var noteCard = document.createElement("div");
        noteCard.classList.add("note-Card");
    });
};
// event linsters
addNoteBtn.addEventListener("click", createNote);
// our note html tree :
// <div class="note-Card">
// <div class="upper-Note-Side">
//   <button class="edit-Btn">
//     <i class="fa-solid fa-pen-to-square"></i>
//   </button>
//   <button class="delete-Btn">
//     <i class="fa-solid fa-trash"></i>
//   </button>
// </div>
// <textarea class="note-Text-Area"></textarea>
// </div>
