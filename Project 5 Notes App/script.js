const createBtn = document.querySelector('.create-btn');
const notesContainer = document.querySelector('.notes-container');
let notes = document.querySelectorAll(".notes")


window.addEventListener('load', () => {
    notesContainer.innerHTML = localStorage.getItem('notes') || '';
});


function updateStorage(){
    localStorage.setItem(".notes", notesContainer.innerHTML)
}
// Event listener to create a new note
createBtn.addEventListener("click", () =>{
    let inputBox = document.createElement("p");
    let img = document.createElement('img');
    inputBox.className = 'notes';
    inputBox.setAttribute('contenteditable', 'true');
    img.src = "./images/delete.png";
    img.className = 'delete';
    notesContainer.appendChild(inputBox).appendChild(img);

    updateStorage();
})

// to delete a note
notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
})

notesContainer.addEventListener("input", updateStorage);
