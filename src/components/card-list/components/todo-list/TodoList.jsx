import "./style.scss";
import { CardItem } from "../card-item/CardItem";
export function TodoList(props) {
    return <div className="todo-list">
        <div className="number">{props.number}</div>
        <div className="todo-list-image">
            <img src={props.image} alt="" />
            <div className="todo-list-icon" >
                <div className="icon-messenger">{props.icon}</div>
                <span className="num-messenger">58</span>
            </div>
            <div className="todo-list-icon" >
                <div className="icon-eye">{props.icon}</div>
                <span className="num-eye">3,4K</span>
            </div>
            <div className="todo-list-icon" >
                <div className="icon-time">{props.icon}</div>
                <span className="num-time">10 Sep</span>
            </div>
        </div>
        <div>
            <h2 className="todo-list-title">
                <b>{props.title}</b></h2>
            <p className="todo-list-author">By
                <b className="todo-list-author-color">{props.author}</b></p>
            <p className="todo-list-content">{props.content}</p>
        </div>
    </div>
}