const Counter = ({counter,increment,decrase})=>{
    // or (props)
// const {counter, increment, decrase} = props;
    return(
        <div>
            <h1>Contador: {counter}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrase}> - </button>

            {/* or <h1>Contador: {props.counter}</h1>
            <button onClick={props.increment}>+</button>
            <button onClick={props.decrase}> - </button> */}
        </div>
    )
}

export default Counter;
