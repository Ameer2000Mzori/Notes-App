// selecting elements
var addNoteBtn = document.getElementsByClassName("add-Note")[0];
var notesWrap = document.getElementsByClassName("notes-Wrap")[0];
// global varibales
var notesObject = [
    {
        text: "This Is Test Note",
    },
];
var newCreatedNote = [
    {
        text: "ADD YOUR TEXT HERE!",
    },
];
// functions
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
            }
            if (!notesObject.some(function (note) { return note.text === newText; })) {
                // Delete the older note
                notesObject.splice(index, 1);
                // Update the notesObject with the edited text
                notesObject.push({
                    text: newText,
                });
                console.log("notesObject object", notesObject);
                notesWrap.innerHTML = "";
                listNotes();
            }
            else {
                console.log("nothing happened");
            }
        });
    });
};
// // createNote dynamclly
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
            }
            if (!notesObject.some(function (note) { return note.text === newText; })) {
                // Delete the older note
                notesObject.splice(index, 1);
                // Update the notesObject with the edited text
                var newTexta = {
                    text: newText,
                };
                notesObject.push(newTexta);
                console.log("notesObject object", notesObject);
                notesWrap.innerHTML = "";
                listNotes();
            }
            else {
                console.log("nothing happened");
            }
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
listNotes();
