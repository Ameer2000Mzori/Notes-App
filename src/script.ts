// selecting elements
const addNoteBtn = document.getElementsByClassName("add-Note")[0];

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
