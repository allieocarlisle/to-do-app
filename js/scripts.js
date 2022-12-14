//jQuery 
function newItem(){

    //1st action - add a new item to list
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    let text = document.createTextNode(inputValue);
    let deleteButton = $('<button>X</button>');
    li.append(text);

    if (inputValue === '') {
        alert('Please add an item to your to-do list!');
    } else {
        let list = $('#list');
        list.append(li);
    }

    //2nd action - cross out an item on list  
    li.on('dblclick', function() {
        li.addClass("strike");
    });

    //3rd action - delete an item on list 
    li.append(deleteButton);

    deleteButton.on('click', deleteListItem);

    function deleteListItem() {
        li.addClass("delete");
    }

    //4th action - change the order of items on list
    $('#list').sortable();
}


//     //original scripts.js in javascript

// function newItem(){

//     //1. Adding a new item to the list of items: 
//        let li = document.createElement("li");
//        let inputValue = document.getElementById("input").value;
//        let text = document.createTextNode(inputValue);
//        li.appendChild(text);
    
//        if (inputValue === '') {
//          alert("You must write something!");
//        } else {
//          let list = document.querySelector('#list');
//          list.appendChild(li);
//        }
    
//      //2. Crossing out an item from the list of items:
//        function crossOut() {
//              li.classList.toggle("strike");
//          }
    
//          li.addEventListener("dblclick",crossOut);
    
//      //3(i). Adding the delete button "X": 
//        let crossOutButton = document.createElement("crossOutButton");
//          crossOutButton.appendChild(document.createTextNode("X"));
//          li.appendChild(crossOutButton);
    
//          crossOutButton.addEventListener("click", deleteListItem);
//      //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
//        function deleteListItem(){
//              li.classList.add("delete")
//          }
//      // 4. Reordering the items: 
//        $('#list').sortable();
    
//     }