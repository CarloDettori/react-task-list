function CompletedTasks() {
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
};

export default CompletedTasks;