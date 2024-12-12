import tasks from "../../data/tasks"





//mostra title, pryority e estimatedTime dei Backlog e In_progress
function BacklogProgressTasks() {
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
};






export default BacklogProgressTasks;
