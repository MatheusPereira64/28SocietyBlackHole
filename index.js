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

// function to remove a link from localStorage
function removeLink(index) {
    // get the links from localStorage
    var links = JSON.parse(localStorage.getItem("links")) || [];

    // remove the link at the specified index
    links.splice(index, 1);

    // save the updated links to localStorage
    localStorage.setItem("links", JSON.stringify(links));

    // update the link list
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

        // add a remove button to each link item
        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.setAttribute("data-index", i);
        removeButton.addEventListener("click", function() {
            var index = this.getAttribute("data-index");
            removeLink(index);
        });
        li.appendChild(removeButton);
    }
}

// update the link list when the page loads
updateLinkList();
