/**
 * Created by mosluce on 2016/7/19.
 */
class TodoHeader extends React.Component {
    render() {
        let {appName, userName, todoCount} = this.props;

        return (
            <div>
                <h1>{appName}</h1>
                <div>哈囉，{userName}：你有{todoCount}項未完成代辦事項</div>
            </div>
        )
    }
}

window.App.TodoHeader = TodoHeader;