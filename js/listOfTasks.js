import {tasks} from './taskArray.js';

const searchInput = document.getElementById("searchInput");
const statusSelect = document.getElementById("statusSelect");
const taskList = document.getElementById("taskList");

function renderTasks(filteredTasks) {
    taskList.innerHTML = "";

    if (filteredTasks.length === 0) {
        taskList.innerHTML = "<li>No tasks found</li>";
        return;
    }

    filteredTasks.forEach(task => {
        const li = document.createElement("li");

        li.classList.add("task-item");

        li.innerHTML = `
        <div class="task-main">
            <span class="task-title">${task.title}</span>
            <span class="task-status task-status--${task.status}">
                ${task.status}
            </span>
        </div>
        <a href="task.html?id=${task.id}" class="task-link">Details</a>
        `;

        taskList.appendChild(li);
    });
}

function applyFilters(pushState = true) {
    const search = searchInput.value.toLowerCase();
    const status = statusSelect.value;

    let filtered = tasks.filter(task =>
        task.title.toLowerCase().includes(search)
    );

    if (status !== "all") {
        filtered = filtered.filter(task => task.status === status);
    }

    renderTasks(filtered);

    if (pushState) updateURL();
}

function updateURL() {
    const url = new URL(window.location.href);

    if (searchInput.value) {
        url.searchParams.set("search", searchInput.value);
    } else {
        url.searchParams.delete("search");
    }

    if (statusSelect.value !== "all") {
        url.searchParams.set("status", statusSelect.value);
    } else {
        url.searchParams.delete("status");
    }

    history.replaceState({}, "", url);
}

function loadFiltersFromURL() {
    const url = new URL(window.location.href);

    searchInput.value = url.searchParams.get("search") || "";
    statusSelect.value = url.searchParams.get("status") || "all";
}

loadFiltersFromURL();
applyFilters(false);

searchInput.addEventListener("input", () => applyFilters(true));
statusSelect.addEventListener("change", () => applyFilters(true));


window.addEventListener("popstate", () => {
    loadFiltersFromURL();
    applyFilters(false);
});
