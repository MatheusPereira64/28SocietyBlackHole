// function to save a link to localStorage
function saveLink() {
	// get the link input field and its value
	var linkInput = document.getElementById("linkInput");
	var link = linkInput.value;

	// get the existing links from localStorage or create an empty array
	var links = JSON.parse(localStorage.getItem("links")) || [];

	// add the new link to the array and save it to localStorage
	links.push(link);
	localStorage.setItem("links", JSON.stringify(links));

	// clear the input field and update the link list
	linkInput.value = "";
	updateLinkList();
}

// function to update the link list on the page
function updateLinkList() {
	// get the link list element and the links from localStorage
	var linkList = document.getElementById("linkList");
	var links = JSON.parse(localStorage.getItem("links")) || [];

	// clear the link list
	linkList.innerHTML = "";

	// loop through the links and add them to the list
	for (var i = 0; i < links.length; i++) {
		var link = links[i];
		var li = document.createElement("li");
		li.textContent = link;
		linkList.appendChild(li);
	}
}

// update the link list when the page loads
updateLinkList();
