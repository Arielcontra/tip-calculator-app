import './index.sass'
import Slider from './components/slider'
import Display from './components/display'
import gitHub from './assets/images/github-mark.png'

function App() {

  return (
    <>
      <div className='wrapperApp'>
        <header className='header'>
          <h1>SPLIT THE BILL</h1>
        </header>
        <div className='modal'>
          <div className='wrapperSlider-Display'>
            <Slider />
            <Display />
          </div>
        </div>
        <footer className='attribution'>
          <p className='link'>
            Challenge by&nbsp;
            <a href='https://www.frontendmentor.io?ref=challenge' target={'_blank'} rel='noreferrer'>
              Frontend Mentor
            </a>.
            Coded by&nbsp;
            <a href='https://www.linkedin.com/in/ariel-contreras-599ab921b' target={'_blank'} rel='noreferrer'>
              Ariel Contreras.
            </a>
            <a href='https://github.com/Arielcontra/tip-calculator-app' target={'_blank'} rel='noreferrer'>
              <img src={gitHub} alt='Logo github' className='logoGitHub' />
            </a>
          </p>
        </footer>
      </div>
    </>
  )
}

export default App
