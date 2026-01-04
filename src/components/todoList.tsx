import './styles.css'
import type { Todo } from '../model'

interface Props {
    todos: Todo[];
}

const TodoList = ({todos}: Props) => {
    return (
        <div className="todos">
            {todos.map((t) => (
                <li key={t.id}>{t.todo}</li>
                ))}
        </div>
    )
}

export default TodoList