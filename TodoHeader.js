class TodoHeader extends React.Component {
    render() {
        let {title, username, todoCount} = this.props;

        return (
            <div>
                <h1>{title}</h1>
                <div>哈囉，{username}：你有{todoCount + 1}項未完成代辦事項</div>
            </div>
        )
    }
}

// 1. 使用 propTypes 定義參數的型別
TodoHeader.propTypes = {
    title: React.PropTypes.string,
    username: React.PropTypes.string,
    todoCount: React.PropTypes.number
};

// 2. 使用 defaultProps 定義參數的預設值
TodoHeader.defaultProps = {
    title: '我的待辦清單',
    username: 'Guest',
    todoCount: 0
};

window.App.TodoHeader = TodoHeader;