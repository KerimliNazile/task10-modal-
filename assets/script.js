const openModalButton = document.createElement("button");
const a = document.createElement('a')
openModalButton.textContent = "Open Modal";
document.body.appendChild(openModalButton);

// modal element
const modal = document.createElement("div");
modal.style.display = "none";
modal.style.position = "fixed";
modal.style.top = "0";
modal.style.left = "0%";
modal.style.width = "30%";
modal.style.height = "30%";
a.textContent = "HELLO WORLD!"
a.classList = ("text")
modal.append(a)
modal.style.backgroundColor = "#F3A8DF";
modal.style.zIndex = "1";

//  modal content
const modalContent = document.createElement("div");
modalContent.style.position = "absolute";
modalContent.style.top = "50%";
modalContent.style.left = "50%";
modalContent.style.transform = "translate(-50%, -50%)";
modalContent.style.backgroundColor = "#802969";
modalContent.style.padding = "10px";
modalContent.style.border = "2px solid black";
modal.appendChild(modalContent);


const cancelButton = document.createElement("button");
cancelButton.textContent = "Cancel";

cancelButton.addEventListener("click", function () {
    modal.style.display = "none";
});
modalContent.appendChild(cancelButton);


document.body.appendChild(modal);


openModalButton.addEventListener("click", function () {
    modal.style.display = "block";
});
