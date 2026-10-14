const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});
// this function is to meant to display different form options depending on the choice the reviewer chooses
function selectedChoice(selectedSectionID,unselectedSectionID, shouldShow) {
	// const selectedChoice = document.querySelector('input[name="set-up"]:checked').value;

	//hide the sections until one is selected
	const selectedSection = document.getElementById(selectedSectionID);
	const unselectedSection = document.getElementById(unselectedSectionID);

	if (shouldShow){
		selectedSection.style.display = 'block';
		unselectedSection.style.display = 'none';
	} else {
		selectedSection.style.display = 'none';
		unselectedSection.style.display = 'block';
	};
};

// this section is used to capture the submissions and place them into local storage

function setSubmissionsList(array){
	localStorage.setItem('resultsSubmissions', JSON.stringify(array));
};


document.addEventListener('DOMContentLoaded', () => {
	const experimentalForm = document.querySelector(".exp-submit");

	if(experimentalForm){
		experimentalForm.addEventListener('submit',(event) => {
			 event.preventDefault();
			const resultsFile = document.querySelector("#results");
			
			// checking to see if a file was selected. 
			if(resultsFile && resultsFile.files.length > 0){
				// this line below was suggested by ATM to call the file
				const fileName= resultsFile.files[0].name;
				let resultsArray = JSON.parse(localStorage.getItem("resultsSubmissions")) || [];

				resultsArray.push(fileName);

				setSubmissionsList(resultsArray);


			};
		});
		
	

	};

});

// This is for retrieving the submissions for the peer review page. 
document.addEventListener("DOMContentLoaded", () => {
	const select = document.querySelector('#submission');

	if(select){
		let resultsArray = JSON.parse(localStorage.getItem("resultsSubmissions"))|| [];

		if(resultsArray.length == 0){
			const noOption = document.createElement('option');
			noOption.textContent = "No submissions have been made."
			noOption.disabled = true;
			select.appendChild(noOption);
		}else {
			let selectHTML = resultsArray.map(submission => `<option value="${submission}">${submission}</option>`).join('');
			select.innerHTML = selectHTML;
		};
	};
});


