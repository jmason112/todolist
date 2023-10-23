const textInput = document.getElementById("input-box");
const itemList = document.getElementById("list-container");

// Set up the event listener on the parent list
var myList = document.getElementById('list-container');
myList.addEventListener('click', toggleChecked);

function addValue() {
    if (textInput.value === '') {
        alert('Please enter a value');
    } else {
        var li = document.createElement("li");
        li.innerHTML = textInput.value;
        itemList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    textInput.value = "";
    saveListState();  // Save the state when a new item is added
}



function toggleChecked(event) {
    var listItem = event.target;
    if (listItem.tagName.toLowerCase() === 'li') {
        if (listItem.classList.contains('checked')) {
            listItem.classList.remove('checked');
        } else {
            listItem.classList.add('checked');
            saveListState();  // Save the state when a new item is added
        }
    }
    else if(listItem.tagName.toLowerCase() === 'span'){
        listItem.parentElement.remove();
        saveListState();  // Save the state when a new item is added
    }
}   

function saveListState() {
    localStorage.setItem("data", myList.innerHTML);
}


function restoreListState() {
    myList.innerHTML = localStorage.getItem("data");
}

restoreListState()




