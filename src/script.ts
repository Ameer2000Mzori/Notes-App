// selecting elements
const addNoteBtn = document.getElementsByClassName("add-Note")[0];
const notesWrap = document.getElementsByClassName("notes-Wrap")[0];

// global varibales
const notesObject = [
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
const createNote = () => {
  notesObject.forEach((el) => {
    const noteCard: Element = document.createElement("div");
    noteCard.classList.add("note-Card");

    const upperNoteSide: Element = document.createElement("div");
    upperNoteSide.classList.add("upper-Note-Side");
    noteCard.appendChild(upperNoteSide);

    const editBtn: any = document.createElement("button");
    editBtn.classList = "edit-Btn";
    upperNoteSide.appendChild(editBtn);

    const iEl = document.createElement("i");
    iEl.classList.add("fa", "fa-solid", "fa-pen-to-square");
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
    notesWrap.appendChild(noteCard);
  });
};

// event linsters
addNoteBtn.addEventListener("click", createNote);
