import tasks from "../models/tasks"


const HeaderComponent = () => (
    <header>
        <h1>Task Menager</h1>
    </header>
);



//mostra title, pryority e estimatedTime dei Backlog e In_progress
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
    return template
}



//mostra title, pryority e estimatedTime dei Completed
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
    return template
}



module.exports = HeaderComponent;
module.exports = BacklogProgressTasksComponent();
module.exports = CompletedTasksComponent();