// select elements from the DOM
const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);

});

function displayList(item){
    let li = document.createElement("li");
    li.textContent = item;
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete");// references CSS rule .delete; controls button size
    li.appendChild(deleteBtn);
    listElement.append(li);
    deleteBtn.addEventListener('click', function() {
        listElement.removeChild(li);
    });
};

function setChapterList(){
    localStorage.setItem("top10BOM", JSON.stringify(chaptersArray));
};

function getChapterList(chapter){
    return JSON.parse(localStorage.getItem("top10BOM"));
};

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter((item) => item !==chapter);
    setChapterList();
};

let li = document.createElement("li");
// wait for button clicks
buttonElement.addEventListener("click",  () => {
	// Check if the user entered something
	if (inputElement.value != "") {
        displayList(inputElement.value); 
        chaptersArray.push(inputElement.value);
        setChapterList(); //updates local storage with new array
        inputElement.value ='';
        inputElement.focus();
        deleteChapter(li.textContent);
        inputElement.focus();
    }
});


// const li = document.createElement("li");
// 		li.textContent = inputElement.value;
// 		// create a button and add a click event listener
// 		const deleteBtn = document.createElement("button");
// 		deleteBtn.textContent = "❌";
// 		deleteBtn.addEventListener("click", function () {
// 			listElement.removeChild(li);
// 			inputElement.focus();
// 		});
// 		// add the button to the list item
// 		li.appendChild(deleteBtn);
// 		// OUTPUT: finally display the completed list item to the unordered list
// 		listElement.appendChild(li);
// 		// clear the user input field
// 		inputElement.value = "";