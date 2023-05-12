import ImgUno from './assets/images/img-1.jpg'
import ButtonState from './components/ButtonState'
import MyButton from './components/MyButton'
import WelcomeText from './components/WelcomeText'
import ListFruits from './components/fuits/ListFruits'

const App = () => {
    const title = "titulo desde una constante";
    const classTitle = "text-center";
    const pathImg = "src/assets/images/img-1.jpg";
    const user = true;
    const fruits = ['🍎', '🍐', '🍌'];
    return (
        <>
            <ButtonState />
            <h1 className={classTitle}>{title.toUpperCase()}</h1>
            <img src={ImgUno} alt={`imagen-${title}`} />
            <MyButton text='boton 1' />
            <MyButton text='boton 2' />
            <MyButton text='boton 3' />
            <WelcomeText user={user} />
            <ListFruits fruits={fruits}/>
        </>
    )
}

export default App;