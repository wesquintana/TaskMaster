import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.name = data.name;
    this.tasks = data.tasks;
  }
  get Template() {
    return `
    <div class="col-lg-4 col-md-6 col-sm-12 mt-3 p-3 border rounded bg-info">
          <h4 class="text-center border-bottom d-flex justify-content-between">${
            this.name
          } <i class="fa fa-times exiter" onclick="app.listController.deleteList('${
      this.id
    }')"></i></h4>
          <ul class="p-0 ">
            ${this.getTaskTemplates()}
          </ul>
          <form onsubmit="app.listController.addTask(event, '${this.id}')">
        <div class="form-group">
          <label for="task">Task</label>
          <input type="text" class="form-control" id="name" placeholder="New item..." />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
        </div>
    `;
  }
  getTaskTemplates() {
    let template = "";
    this.tasks.forEach((task, index) => {
      template += `
      <li class="d-flex justify-content-between">${task}<i class="fa fa-times exiter" onclick="app.listController.deleteTask('${this.id}',${index})"></i></li>
      `;
    });
    return template;
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you
}
