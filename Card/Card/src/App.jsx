
import Card from './components/Card.jsx'
import image from '../public/0x0.webp'
function App() {


  return (
      <div>
         <Card  image={image} title='Lizard' text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam' button1='SHARE ME ' button2='LEARN MORE'/>
      </div>
  )
}

export default App
