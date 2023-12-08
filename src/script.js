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
        noteTextArea.setAttribute("readonly", "");
        noteTextArea.textContent = "".concat(el.text);
        noteCard.appendChild(noteTextArea);
        notesWrap.appendChild(noteCard);
        // our eventlinsters within the dynamic dom creating
        deleteBtn.addEventListener("click", function (e) {
            var thisTextNote = e.target.parentElement.parentElement.nextElementSibling.textContent.trim();
            if (thisTextNote) {
                deleteNote(thisTextNote);
                notesWrap.removeChild(noteCard);
                console.log("tested in if block");
            }
            else {
                console.log("nothing here");
            }
            console.log("tested");
        });
    });
};
// // delete notes from object dynamclly :
var deleteNote = function (thisTextNote) {
    console.log("the text in delete Note", thisTextNote);
    notesObject = notesObject.filter(function (note) { return note.text.trim().toLowerCase() !== thisTextNote.toLowerCase(); });
    console.log(notesObject);
};
// event linsters
addNoteBtn.addEventListener("click", createNote);
