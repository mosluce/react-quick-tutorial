/**
 * Created by mosluce on 2016/7/19.
 */
class TodoHeader extends React.Component {
    render() {
        let {appName, userName, todoCount} = this.props;

        return (
            <div>
                <h1>{appName}</h1>
                <div>哈囉，{userName}：你有{todoCount + 1}項未完成代辦事項</div>
            </div>
        )
    }
}

TodoHeader.propTypes = {
    appName: React.PropTypes.string,
    userName: React.PropTypes.string,
    todoCount: React.PropTypes.number
};

TodoHeader.defaultProps = {
    appName: '我的代辦清單',
    userName: 'Guest',
    todoCount: 0
};

window.App.TodoHeader = TodoHeader;