import { tasks } from './taskArray.js';

const params = new URLSearchParams(location.search);
const taskId = Number(params.get("id"));


const taskInfo = tasks.find(task => task.id === taskId);


if (taskInfo) {
    document.getElementById("task-title").textContent = taskInfo.title;
    document.getElementById("task-status").textContent = taskInfo.status;
} else {
    document.body.innerHTML = "<h2>Task not found</h2>";
}
