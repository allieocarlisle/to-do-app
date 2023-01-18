//jQuery
function newItem() {
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
    li.on('dblclick', function () {
      li.addClass('strike');
    });
  
    //3rd action - delete an item on list
    li.append(deleteButton);
  
    deleteButton.on('click', deleteListItem);
  
    function deleteListItem() {
      li.addClass('delete');
    }
  
    //4th action - change the order of items on list
    $('#list').sortable();
  }
  