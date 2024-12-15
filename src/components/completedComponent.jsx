import tasks from "../../data/tasks";

function CompletedTasks() {
    let CompletedTasks = [];

    CompletedTasks = tasks.filter((element) => {
        return element.state.includes("completed")
    }).map((element) => {
        return <li key={element.id}>
            <div className="d-flex">
                <h3>{element.title}</h3>
                <p className="state-tag">{element.state}</p>
            </div>
            <p className="infos">Priority: {element.priority}</p>
            <p className="infos">Estimated Time: {element.estimatedTime}</p>
        </li>
    })
    const template = <>
        <h2>Backlog or in Progress Task {CompletedTasks.lenght}</h2>
        <ul>{CompletedTasks}</ul>
    </>
    return template
};

export default CompletedTasks;