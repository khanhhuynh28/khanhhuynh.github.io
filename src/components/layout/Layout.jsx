import "./style.scss";
import { CardList } from "../card-list/CardList";
import { CardItem } from "../card-item/CardItem";
export function Layout() {
    return <div className="container">
        <div className="layout">
            {/* <CardItem /> */}
            <CardList />
        </div>
    </div>
}