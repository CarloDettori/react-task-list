import tasks from "../../data/tasks";

//mostra title, pryority e estimatedTime dei Backlog e In_progress
function BacklogProgressTasks() {
    let BacklogProgressTasks = [];

    BacklogProgressTasks = tasks.filter((element) => {
        return element.state.includes("backlog" || "in_progress")
    }).map((element) => {
        return <li key={element.id}>
            <div className="d-flex align-items-center">
                <h3>{element.title}</h3>
                <p className="state-tag">{element.state}</p>
            </div>
            <p className="infos">Priority: {element.priority}</p>
            <p className="infos">Estimated Time: {element.estimatedTime}</p>
        </li>
    })
    const template = <>
        <h2>Backlog or in Progress Task {BacklogProgressTasks.lenght}</h2>
        <ul>{BacklogProgressTasks}</ul>
    </>
    return template
};

export default BacklogProgressTasks;
