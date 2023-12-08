// selecting elements
var addNoteBtn = document.getElementsByClassName("add-Note")[0];
var notesWrap = document.getElementsByClassName("notes-Wrap")[0];
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
        var upperNoteSide = document.createElement("div");
        upperNoteSide.classList.add("upper-Note-Side");
        noteCard.appendChild(upperNoteSide);
        var editBtn = document.createElement("button");
        editBtn.classList = "edit-Btn";
        upperNoteSide.appendChild(editBtn);
        var iEl = document.createElement("i");
        iEl.classList.add("fa", "fa-solid", "fa-pen-to-square");
        editBtn.appendChild(iEl);
        var deleteBtn = document.createElement("button");
        deleteBtn.classList = "delete-Btn";
        upperNoteSide.appendChild(deleteBtn);
        var deleteIEl = document.createElement("i");
        deleteIEl.classList.add("fa-solid", "fa-trash");
        deleteBtn.appendChild(deleteIEl);
        var noteTextArea = document.createElement("textarea");
        noteTextArea.classList.add("note-Text-Area");
        noteTextArea.textContent = "".concat(el.text);
        noteCard.appendChild(noteTextArea);
        notesWrap.appendChild(noteCard);
    });
};
// event linsters
addNoteBtn.addEventListener("click", createNote);
