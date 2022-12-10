import "./style.scss";
import { CardList } from "../card-list/CardList";
export function Layout() {
    return <div className="container">
        <div className="layout">
            <CardList />
        </div>
    </div>
}