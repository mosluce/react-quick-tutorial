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
                <TodoHeader/>
                <div>哈囉，Jason：你有99項未完成代辦事項</div>
                <InputField/>
                <TodoList/>
            </div>
        )
    }
}

window.App.TodoApp = TodoApp;