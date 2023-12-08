// selecting elements
const addNoteBtn = document.getElementsByClassName("add-Note")[0];
const notesWrap = document.getElementsByClassName("notes-Wrap")[0];

// global variables
let storageData = localStorage.getItem("notesObject");
///__/// Ensure that notesObject is parsed from a string if it exists in localStorage.
let notesObject = storageData ? JSON.parse(storageData) : [];

let newCreatedNote: any = [
  {
    text: "ADD YOUR TEXT HERE!",
  },
];

// functions
const listNotes = () => {
  notesObject.forEach((el, index) => {
    const noteCard: Element = document.createElement("div");
    noteCard.classList.add("note-Card");

    const upperNoteSide: Element = document.createElement("div");
    upperNoteSide.classList.add("upper-Note-Side");
    noteCard.appendChild(upperNoteSide);

    const editBtn: any = document.createElement("button");
    editBtn.classList = "edit-Btn";
    upperNoteSide.appendChild(editBtn);

    const iEl = document.createElement("i");
    iEl.classList.add("fa-solid", "fa-pen-to-square");
    editBtn.appendChild(iEl);

    const deleteBtn: any = document.createElement("button");
    deleteBtn.classList = "delete-Btn";
    upperNoteSide.appendChild(deleteBtn);

    const deleteIEl = document.createElement("i");
    deleteIEl.classList.add("fa-solid", "fa-trash");

    deleteBtn.appendChild(deleteIEl);

    const noteTextArea = document.createElement("textarea");
    noteTextArea.classList.add("note-Text-Area");
    noteTextArea.setAttribute("readonly", "");
    noteTextArea.textContent = `${el.text}`;
    noteCard.appendChild(noteTextArea);
    notesWrap.prepend(noteCard);

    // our eventlinsters within the dynamic dom creating
    deleteBtn.addEventListener("click", (e) => {
      // Use el.text directly from the notesObject array
      const thisTextNote: string = el.text;

      if (thisTextNote) {
        notesWrap.removeChild(noteCard);
        console.log("tested in if block");
      } else {
        console.log("nothing here");
      }
      console.log("tested");

      // Call deleteNote with the correct parameters
      deleteNote(thisTextNote, index);
    });

    // our edit text eventlinster
    editBtn.addEventListener("click", (e) => {
      let editNote = e.target.parentElement.parentElement.nextElementSibling;
      let newText = editNote.value;
      if (editNote.readOnly) {
        console.log("read only removed");
        editNote.readOnly = false;
        iEl.classList.replace("fa-pen-to-square", "fa-check");
        iEl.style.color = "red";
      } else if (!editNote.readOnly) {
        console.log("read only added");
        editNote.readOnly = true;
        iEl.classList.replace("fa-check", "fa-pen-to-square");
        iEl.style.removeProperty("color");

        if (!notesObject.some((note) => note.text === newText)) {
          // Delete the older note
          deleteNote(el.text, index);

          // Update the notesObject with the edited text
          notesObject.push({
            text: newText,
          });
          notesWrap.innerHTML = ``;
          // Update localStorage
          localStorage.setItem("notesObject", JSON.stringify(notesObject));
          listNotes();
        } else {
          console.log("nothing happened");
        }
      }
    });
  });
};

// // createNote dynamclly
const createNote = () => {
  newCreatedNote.forEach((el, index) => {
    const noteCard: Element = document.createElement("div");
    noteCard.classList.add("note-Card");

    const upperNoteSide: Element = document.createElement("div");
    upperNoteSide.classList.add("upper-Note-Side");
    noteCard.appendChild(upperNoteSide);

    const editBtn: any = document.createElement("button");
    editBtn.classList = "edit-Btn";
    upperNoteSide.appendChild(editBtn);

    const iEl = document.createElement("i");
    iEl.classList.add("fa-solid", "fa-pen-to-square");
    editBtn.appendChild(iEl);

    const deleteBtn: any = document.createElement("button");
    deleteBtn.classList = "delete-Btn";
    upperNoteSide.appendChild(deleteBtn);

    const deleteIEl = document.createElement("i");
    deleteIEl.classList.add("fa-solid", "fa-trash");

    deleteBtn.appendChild(deleteIEl);

    const noteTextArea = document.createElement("textarea");
    noteTextArea.classList.add("note-Text-Area");
    noteTextArea.setAttribute("readonly", "");
    noteTextArea.textContent = `${el.text}`;
    noteCard.appendChild(noteTextArea);
    notesWrap.prepend(noteCard);

    // our eventlinsters within the dynamic dom creating
    deleteBtn.addEventListener("click", (e) => {
      // Use el.text directly from the notesObject array
      const thisTextNote: string = el.text;

      if (thisTextNote) {
        notesWrap.removeChild(noteCard);
        console.log("tested in if block");
      } else {
        console.log("nothing here");
      }
      console.log("tested");

      // Call deleteNote with the correct parameters
      deleteNote(thisTextNote, index);
    });

    // our edit text eventlinster
    editBtn.addEventListener("click", (e) => {
      let editNote = e.target.parentElement.parentElement.nextElementSibling;
      let newText = editNote.value;
      if (editNote.readOnly) {
        console.log("read only removed");
        editNote.readOnly = false;
        iEl.classList.replace("fa-pen-to-square", "fa-check");
        iEl.style.color = "red";
      } else if (!editNote.readOnly) {
        console.log("read only added");
        editNote.readOnly = true;
        iEl.classList.replace("fa-check", "fa-pen-to-square");
        iEl.style.removeProperty("color");

        if (!notesObject.some((note) => note.text === newText)) {
          // Delete the older note
          deleteNote(el.text, index);

          // Update the notesObject with the edited text
          let newTexta = {
            text: newText,
          };
          notesObject.push(newTexta);
          console.log(`notesObject object`, notesObject);
          notesWrap.innerHTML = ``;
          // Update localStorage
          localStorage.setItem("notesObject", JSON.stringify(notesObject));

          listNotes();
        } else {
          console.log("nothing happened");
        }
      }
    });
  });
};

// // delete notes from object dynamclly :
const deleteNote = (thisTextNote, index) => {
  console.log("the text in delete Note", thisTextNote);

  notesObject = notesObject.filter(
    (note) => note.text.trim().toLowerCase() !== thisTextNote.toLowerCase()
  );
  console.log(notesObject);
  // Update localStorage
  localStorage.setItem("notesObject", JSON.stringify(notesObject));
};

// event linsters
addNoteBtn.addEventListener("click", createNote);
listNotes();
