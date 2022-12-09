import "./style.scss";

export function TodoList(props) {
    return <div className="todo-list">
        <div className="number">{props.number}</div>
        <div className="todo-list-image">
            <img src={props.image} alt=""/></div>
        <div>
            <h2 className="todo-list-title">
                <b>{props.title}</b></h2>
            <p className="todo-list-author">By
                <b className="todo-list-author-color">{props.author}</b></p>
            <p className="todo-list-content">{props.content}</p>
        </div>
    </div>
}