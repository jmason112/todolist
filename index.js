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
    if (listItem.tagName.toLowerCase() === 'li') {
        if (listItem.classList.contains('checked')) {
            listItem.classList.remove('checked');
        } else {
            listItem.classList.add('checked');
        }
        saveListState();
    }
}

function saveListState() {
    var listItems = document.querySelectorAll('#list-container li');
    var listState = Array.from(listItems).map(li => ({
        text: li.textContent,
        checked: li.classList.contains('checked')
    }));
    localStorage.setItem('listState', JSON.stringify(listState));
}

function restoreListState() {
    var listState = JSON.parse(localStorage.getItem('listState'));
    var myList = document.getElementById('list-container');
    if (listState) {
        myList.innerHTML = '';  // Clear the current list
        listState.forEach(item => {
            var li = document.createElement('li');
            li.textContent = item.text;
            if (item.checked) {
                li.classList.add('checked');
            }
            myList.appendChild(li);
        });
    }
}

// Set up the event listener on the parent list
var myList = document.getElementById('list-container');
myList.addEventListener('click', toggleChecked);

// Restore the list state when the page is loaded
window.addEventListener('load', restoreListState);

