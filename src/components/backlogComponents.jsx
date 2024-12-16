import tasks from "../../data/tasks";

//mostra title, pryority e estimatedTime dei Backlog e In_progress
function BacklogProgressTasks() {
    const backProgressTasks = tasks.filter((element) => {
        return (element.state.includes("backlog") || element.state.includes("in_progress"))
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
    //estraggo la property length per non farle fare interferenza con il return della funzione map
    console.log('tot filtered', backProgressTasks);
    const totalTasks = backProgressTasks.length


    const template = <>
        <h2>Backlog or in Progress Task {totalTasks}</h2>
        <ul>{backProgressTasks}</ul>
    </>
    return template
};

export default BacklogProgressTasks;
