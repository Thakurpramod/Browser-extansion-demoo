document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');
  
    addTaskButton.addEventListener('click', function () {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
          <input type="checkbox" class="taskCheckbox">
          <span>${taskText}</span>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
      }
    });
  
    taskList.addEventListener('click', function (event) {
      if (event.target.classList.contains('taskCheckbox')) {
        const taskSpan = event.target.nextElementSibling;
        taskSpan.classList.toggle('completed');
      }
    });

    const person = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      city: 'New York'
    };
    
    // Object destructuring
    const { firstName, lastName, age } = person;
    
    console.log(`test ${person}`); // Output: John
    //console.log(lastName);  // Output: Doe
    //console.log(age);  
  });
  