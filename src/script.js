// selecting elements
var addNoteBtn = document.getElementsByClassName("add-Note")[0];
var notesWrap = document.getElementsByClassName("notes-Wrap")[0];
// global variables / getting data from local storage if there is
var storageData = localStorage.getItem("notesObject");
var notesObject = [];
if (storageData) {
    notesObject = JSON.parse(storageData).filter(function (note) { return note.text !== undefined; });
}
// object data for our newly created note
var newCreatedNote = [
    {
        text: "ADD YOUR TEXT HERE!",
    },
];
// our list Notes from local storage if there is any
var listNotes = function () {
    notesObject.forEach(function (el, index) {
        var noteCard = document.createElement("div");
        noteCard.classList.add("note-Card");
        var upperNoteSide = document.createElement("div");
        upperNoteSide.classList.add("upper-Note-Side");
        noteCard.appendChild(upperNoteSide);
        var editBtn = document.createElement("button");
        editBtn.classList = "edit-Btn";
        upperNoteSide.appendChild(editBtn);
        var iEl = document.createElement("i");
        iEl.classList.add("fa-solid", "fa-pen-to-square");
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
        notesWrap.prepend(noteCard);
        // our eventlinsters within the dynamic dom creating (delete btn)
        deleteBtn.addEventListener("click", function (e) {
            // getting value from objects
            var thisTextNote = el.text;
            if (thisTextNote) {
                notesWrap.removeChild(noteCard);
                console.log("tested in if block");
            }
            else {
                console.log("nothing here");
            }
            console.log("tested");
            // Call deleteNote with the correct parameters
            deleteNote(thisTextNote, index);
        });
        // our eventlinsters within the dynamic dom creating (edit btn)
        editBtn.addEventListener("click", function (e) {
            //targeting the text within the textarea
            var editNote = e.target.parentElement.parentElement.nextElementSibling;
            var newText = editNote.value;
            if (editNote.readOnly) {
                console.log("read only removed");
                editNote.readOnly = false;
                iEl.classList.replace("fa-pen-to-square", "fa-check");
                iEl.style.color = "red";
            }
            else if (!editNote.readOnly) {
                console.log("read only added");
                editNote.readOnly = true;
                iEl.classList.replace("fa-check", "fa-pen-to-square");
                iEl.style.removeProperty("color");
                if (!notesObject.some(function (note) { return note.text === newText; })) {
                    // Delete the older note
                    deleteNote(el.text, index);
                    // Update the notesObject with the edited text
                    notesObject.push({
                        text: newText,
                    });
                    notesWrap.innerHTML = "";
                    // Update localStorage
                    localStorage.setItem("notesObject", JSON.stringify(notesObject));
                    listNotes();
                }
                else {
                    console.log("nothing happened");
                }
            }
        });
    });
};
// create new note
var createNote = function () {
    newCreatedNote.forEach(function (el, index) {
        var noteCard = document.createElement("div");
        noteCard.classList.add("note-Card");
        var upperNoteSide = document.createElement("div");
        upperNoteSide.classList.add("upper-Note-Side");
        noteCard.appendChild(upperNoteSide);
        var editBtn = document.createElement("button");
        editBtn.classList = "edit-Btn";
        upperNoteSide.appendChild(editBtn);
        var iEl = document.createElement("i");
        iEl.classList.add("fa-solid", "fa-pen-to-square");
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
        notesWrap.prepend(noteCard);
        // our eventlinsters within the dynamic dom creating
        deleteBtn.addEventListener("click", function (e) {
            // Use el.text directly from the notesObject array
            var thisTextNote = el.text;
            if (thisTextNote) {
                notesWrap.removeChild(noteCard);
                console.log("tested in if block");
            }
            else {
                console.log("nothing here");
            }
            console.log("tested");
            // Call deleteNote with the correct parameters
            deleteNote(thisTextNote, index);
        });
        // our edit text eventlinster
        editBtn.addEventListener("click", function (e) {
            var editNote = e.target.parentElement.parentElement.nextElementSibling;
            var newText = editNote.value;
            if (editNote.readOnly) {
                console.log("read only removed");
                editNote.readOnly = false;
                iEl.classList.replace("fa-pen-to-square", "fa-check");
                iEl.style.color = "red";
            }
            else if (!editNote.readOnly) {
                console.log("read only added");
                editNote.readOnly = true;
                iEl.classList.replace("fa-check", "fa-pen-to-square");
                iEl.style.removeProperty("color");
                if (!notesObject.some(function (note) { return note.text === newText; })) {
                    // Delete the older note
                    deleteNote(el.text, index);
                    // Update the notesObject with the edited text
                    var newTexta = {
                        text: newText,
                    };
                    notesObject.push(newTexta);
                    console.log("notesObject object", notesObject);
                    notesWrap.innerHTML = "";
                    // Update localStorage
                    localStorage.setItem("notesObject", JSON.stringify(notesObject));
                    listNotes();
                }
                else {
                    console.log("nothing happened");
                }
            }
        });
    });
};
// // delete notes from object dynamclly :
var deleteNote = function (thisTextNote, index) {
    console.log("the text in delete Note", thisTextNote);
    notesObject = notesObject.filter(function (note) { return note.text.trim() !== thisTextNote; });
    console.log(notesObject);
    // Update localStorage
    localStorage.setItem("notesObject", JSON.stringify(notesObject));
};
// event linsters
addNoteBtn.addEventListener("click", createNote);
listNotes();
