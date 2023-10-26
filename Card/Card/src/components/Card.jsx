import Image from "./Image.jsx";
import Title from "./Title.jsx";
import Text from "./Text.jsx";
import Buttons from "./Buttons.jsx";
import  './Card.css';

const Card =({image,title,text,button1,button2})=>{
    return(
        <div  className='card'>
            <div className='cardTop'>
                <Image image={image} />
            </div>
            <div className='cardBottom'>
                <Title  title={title}/>
                <Text  text={text}/>

            </div>
                <Buttons  button1={button1} button2={button2} />
        </div>
    )
}
export default Card;