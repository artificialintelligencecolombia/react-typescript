import './styles.css'

const InputField = () => {
  return (
    <div>
        <form className="input">
            <input type="text" placeholder="Task" className="input__box"/>
            <button className="input_submit" type="submit">Go</button>
        </form>
    </div>
  )
}

export default InputField