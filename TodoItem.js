/**
 * Created by mosluce on 2016/7/19.
 */
class TodoItem extends React.Component {
    render() {
        return (
            <li>
                <input type="checkbox" />
                <span>Item 1</span>
                <button>x</button>
            </li>
        )
    }
}

window.App.TodoItem = TodoItem;