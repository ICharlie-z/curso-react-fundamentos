const MyButton = (props) => {
    const handleClickButton = (title) => {
        console.log(`handle click ${title}`)
    }
    return (
        <button onClick={() => handleClickButton(props.text)}>{props.text}</button>
    )
}

export default MyButton;