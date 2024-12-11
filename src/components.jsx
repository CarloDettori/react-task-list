import tasks from "../models/tasks"
//mostra title, pryority e estimatedTime

const HeaderComponent = () => (
    <header>
        <h1>Task Menager</h1>
    </header>
);

function BacklogProgressTasksComponent() {
    let BacklogProgressTasks = [];
    BacklogProgressTasks = task.filter((element) => {
        return element.state.includes("backlog" || "progress")
    }).map((element) => {
        return <li key={element.id}>
            <h3>{element.title}</h3>
            <p>Priority: {element.priority}</p>
            <p>Estimated Time: {element.estimatedTime}</p>
        </li>
    })
    const template = <>
        <h2>Backlog or in Progress Task {BacklogProgressTasks.lenght}</h2>
        <ul>{BacklogProgressTasks}</ul>
    </>
}

function CompletedTasksComponent() {
    let CompletedTasks = [];
    CompletedTasks = task.filter((element) => {
        return element.state.includes("")
    }).map((element) => {
        return <li key={element.id}>
            <h3>{element.title}</h3>
            <p>Priority: {element.priority}</p>
            <p>Estimated Time: {element.estimatedTime}</p>
        </li>
    })
    const template = <>
        <h2>Backlog or in Progress Task {CompletedTasks.lenght}</h2>
        <ul>{CompletedTasks}</ul>
    </>
}


module.exports = HeaderComponent;
module.exports = BacklogProgressTasksComponent();
module.exports = CompletedTasks();