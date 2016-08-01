/**
 * Created by mosluce on 2016/7/19.
 */
const {
    InputField,
    TodoHeader,
    TodoList
} = window.App;

class TodoApp extends  React.Component {
    render() {
        return (
            <div>
                <TodoHeader appName="我的代辦事項" userName="Jason" todoCount="99" />
                <InputField placeholder={"輸入代辦事項"} />
                <TodoList/>
            </div>
        )
    }
}

window.App.TodoApp = TodoApp;