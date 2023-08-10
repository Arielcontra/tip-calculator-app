import './index.sass'
import Slider from './components/slider'
import Display from "./components/display"

function App() {

  return (
    <>
      <div className='wrapperApp'>
        <header>
          <h2 className="title">SPLI TTER</h2>
        </header>
        <div className='modal'>
          <div className="wrapperSlider-Display">
            <Slider />
            <Display />
          </div>
        </div>
        <footer className="attribution">
          <p> Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target={"_blank"} rel="noreferrer">Frontend Mentor</a>.
            Coded by <a href="https://github.com/Arielcontra/tip-calculator-app" target={"_blank"} rel="noreferrer">Ariel Contreras</a>.</p>
        </footer>
      </div>


    </>
  )
}

export default App
