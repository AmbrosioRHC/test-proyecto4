import injectContext from './store/appContext'
import './App.css'
import Home from './views/home'

function App() {


  return (
    <>
      <Home/>
     
    </>
  )
}


export default injectContext(App);