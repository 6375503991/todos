const dialogBox = document.getElementById("dialog");
const addBtn = document.getElementById("addBtn");
const closeBtn = document.getElementById("close");
const todocontainer = document.getElementById("todo_container");
const error = document.querySelector(".error");
const title = document.getElementById("title");
const todo__text = document.getElementById("todo__text");

// console.log(del)

let counter = 0;

let data = JSON.parse(localStorage.getItem("todos")) || [];

counter = data.length;

for (let i = 0; i < data.length; i++) {
    // let todo = data[i];
    let todotext = `<div class="todo-list" todo-id='${i}'>
    <div class="todo-header">${data[i].title}
        <button>X</button>
    </div>
     <div class="todo-text">${data[i].text}</div>
</div>`;
    todocontainer.innerHTML = todocontainer.innerHTML + todotext;
    //     dialogBox.style.display = "none";
    //     todo__text.value = "";
    // title.value = "";   
}


function deletelisteners() {
    const delarr = document.querySelectorAll(".todo-header button");
    for (let i = 0; i < delarr.length; i++) {
        delarr[i].addEventListener("click", function (e) {
            let todo = e.target.closest(".todo-list");
            console.log(todo);
            let id = todo.getAttribute("todo-id");
            let data = JSON.parse(localStorage.getItem("todos"));
            let newData = [];
            for (let i = 0; i < data.length; i++) {
                if (data[i].id != id) {
                    newData.push(data[i]);
                }
            }
            localStorage.setItem("todos", JSON.stringify(newData));
            todo.classList.add("gayab");
        });
    }
}

deletelisteners()



// del.addEventListener("click", function(e){
//     let todo = e.target.closest(".todo-list")
//     console.log(todo)
//     todo.classList.add("gayab");
// });

addBtn.addEventListener("click", function () {
    dialogBox.style.display = "flex";
});

closeBtn.addEventListener("click", function () {
    dialogBox.style.display = "none";
    error.classList.add("gayab");
});

function addTodo() {
    if (todo__text.value !== "" && title.value !== "") {
        let todotext = `<div class="todo-list" todo-id='${counter}'>
                            <div class="todo-header">${title.value}
                            <i class="fa fa-edit" style="font-size:24px";margin-right:20px></i>
                                <button>X</button>
                            </div>
                             <div class="todo-text">${todo__text.value}</div>
                        </div>`;
        todocontainer.innerHTML = todocontainer.innerHTML + todotext;
        deletelisteners();


        let todos = JSON.parse(localStorage.getItem("todos")) || [];

        todos.push({
            id: counter,
            title: title.value,
            text: todo__text.value
        });
        counter += 1

        localStorage.setItem("todos", JSON.stringify(todos));
        dialogBox.style.display = "none";
        todo__text.value = "";
        title.value = "";
    } else {
        error.classList.remove("gayab");
    }
}


// let obj = {
//     "key" : "value"
//     name : "deepak"
//     city : "ajmer"
// }

// console.log(obj);


// localStorage.setItem("todos", "hello");

// console.log(localStorage.getItem("todos"));


// let arr = [1,2,3,4,5];

// arr.push(6);
// console.log(arr);

// arr.pop();
// console.log(arr);

