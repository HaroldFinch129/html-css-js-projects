const taskList = document.querySelector("#list")
// console.log(taskList);

const newTask = document.querySelector("#task")

const myList = document.querySelector("#list")
// console.log(myList);


const newElement = () => {
    const liDOM = document.createElement("li")
    let info = newTask.value
    if (info != ""){
        liDOM.innerHTML = info
        taskList.appendChild(liDOM);
        console.log(taskList);
        localStorage.setItem("myTasks", JSON.stringify(taskList))
        console.log(taskList)
        let myTasks = JSON.parse(localStorage.getItem("myTasks"))
        console.log(myTasks)
        
       
    }else {
        return alert("giriş yapmadınız")
        }

}

