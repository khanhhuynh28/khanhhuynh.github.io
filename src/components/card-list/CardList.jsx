
import { TodoList } from "./components/todo-list/TodoList";
import "./style.scss";
const todoList = [
    {
        number: "1",
        image: "https://thuthuatnhanh.com/wp-content/uploads/2020/12/hinh-anh-dep-xuat-sac-nhat-viet-nam-2020.jpg",
        title: "Family Safari Vacation To The Home Of The Gods",
        author: "Noman Clark",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime impedit ipsum neque molestiae laboriosam modi"
    },
    {
        number: "2",
        image: "https://cdn.baogiaothong.vn/upload/2-2022/images/2022-05-25/1-1653445668-308-width740height476.jpg",
        title: "Travelagent India",
        author: "Florence Keller",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime impedit ipsum neque molestiae laboriosam modi"
    },
    {
        number: "3",
        image: "https://vaithuhayho.com/wp-content/uploads/2021/03/hinh-anh-dep-51.jpg",
        title: "Family Safari Vacation",
        author: "Noman Clark",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime impedit ipsum neque molestiae laboriosam modi"
    },
    {
        number: "4",
        image: "https://thuthuatnhanh.com/wp-content/uploads/2020/12/hinh-anh-dep-xuat-sac-nhat-viet-nam-2020.jpg",
        title: "The Home Of The Gods",
        author: "Noman Clark",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime impedit ipsum neque molestiae laboriosam modi"
    }
]
export function CardList() {
    return (
        <div className="card-list-container">
            <div className="card-list">
                {todoList.map((list) => (
                    <TodoList
                        number={list.number}
                        image={list.image}
                        title={list.title}
                        author={list.author}
                        content={list.content}
                    />
                ))}
            </div>
        </div>
    )
}