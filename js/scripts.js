function TaskList() {
  this.tasks ={};
}

TaskList.prototype.addTask = function(task) {
  this.tasks[task.taskName] = task;
  console.log(task);
};

function Task(taskName, description, priority) {
  this.taskName = taskName;
  this.description = description;
  this.priority = priority;
}

Task.prototype.display = function() {
 
  return "<ul class='status-incomplete'><li>Task: "+ this.taskName + "</li><li>Description: " + this.description + "</li><li>Priority: " + this.priority + "</li>"+ "</ul>";
};

let taskList = new TaskList();

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    const taskName = $("#task-name").val();
    const description = $("#task-desc").val();
    const priority = $("#task-status").val();


    let task = new Task(taskName, description, priority);
    taskList.addTask(task);

    $("#to-do").append(task.display());
  });

  $("ul").click(function() {
      $(this).toggleClass("status-incomplete").toggleClass("status-complete");
    console.log("success");
    
  });
});