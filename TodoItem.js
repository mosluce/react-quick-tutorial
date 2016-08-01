/**
 * Created by mosluce on 2016/7/19.
 */
class TodoItem extends React.Component {
    render() {

        let {title, completed} = this.props;

        return (
            <li>
                <input type="checkbox" checked={completed} />
                <span>{title}</span>
                <button>x</button>
            </li>
        )
    }
}

TodoItem.propTypes = {
    title: React.PropTypes.string,
    completed: React.PropTypes.boolean
};

TodoItem.defaultProps = {
    title: 'Item Label',
    completed: false
};

window.App.TodoItem = TodoItem;