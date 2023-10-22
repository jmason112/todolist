const textInput=document.getElementById("input-box");
const itemList=document.getElementById("list-container");

function addValue()
{
    if(textInput.value==='')
    {
        alert('Please enter a value');
    }
    else{
        var li = document.createElement("li");
        li.innerHTML=textInput.value;
        itemList.appendChild(li);
    }
    textInput.value=""
    
}

function toggleChecked(event) {
    var listItem = event.target;
    if (listItem.tagName.toLowerCase() === 'li') {  // Ensure the clicked element is a list item
        if (listItem.classList.contains('checked')) {
            listItem.classList.remove('checked');  // Uncheck if already checked
        } else {
            listItem.classList.add('checked');  // Check if not already checked
        }
        saveListState();
    }
}

function saveListState() {
    var listItems = document.querySelectorAll('#list-container li')
    var listState = Array.from(listItems).map(li => li.classList.contains('checked'));
    localStorage.setItem('listState', JSON.stringify(listState));
}

function restoreListState() {
    var listState = JSON.parse(localStorage.getItem('listState'));
    if (listState) {
        var listItems = document.querySelectorAll('#list-container li');
        listItems.forEach((li, index) => {
            if (listState[index]) {
                li.classList.add('checked');
            }
        });
    }
}

// Set up the event listener on the parent list
var myList = document.getElementById('list-container');
myList.addEventListener('click', toggleChecked);

// Restore the list state when the page is loaded
window.addEventListener('load', restoreListState);


