import ListService from "../Services/ListService.js";
import store from "../store.js";

//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let listsTemplate = "";
  let lists = store.Lists;
  lists.forEach(list => {
    listsTemplate += list.Template;
  });
  document.querySelector("#lists").innerHTML = listsTemplate;
}

//Public
export default class ListController {
  constructor() {
    //NOTE: After the store loads, we can automatically call to draw the lists.
    _drawLists();
  }
  addList(event) {
    event.preventDefault();
    let formData = event.target;
    let newList = {
      name: formData.name.value,
      tasks: []
    };
    ListService.addList(newList);
    formData.reset();
    _drawLists();
  }
  deleteList(id) {
    if (!window.confirm("Are you sure you want to delete this?")) return;
    ListService.deleteList(id);
    _drawLists();
  }
  addTask(event, id) {
    event.preventDefault();
    let formData = event.target;
    let newTask = formData.name.value;
    ListService.addTask(newTask, id);
    formData.reset();
    _drawLists();
  }
  deleteTask(id, index) {
    if (!window.confirm("Are you sure you want to delete this?")) return;
    ListService.deleteTask(id, index);
    _drawLists();
  }
  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
