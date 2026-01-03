import './styles.css'

// 3. Props interface: defines what InputField expects
interface Props {
  todo: string; // text value
  setTodo: React.Dispatch<React.SetStateAction<string>>; // Function to  update state
  handleAdd: () => void;
}

// 4. Destructuring the props. Recieves props from parent to make use of them
const InputField = ({ todo, setTodo, handleAdd}: Props) => {
  return (
    <div>
        <form className="input" onSubmit={handleAdd}>
            <input type="text"
            value={todo}
            onChange={
              (e) =>setTodo(e.target.value)
            } 
            placeholder="Task" 
            className="input__box"/>
            <button className="input_submit" type="submit">Go</button>
        </form>
    </div>
  )
}

export default InputField