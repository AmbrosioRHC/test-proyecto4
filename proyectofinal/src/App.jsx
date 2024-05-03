import injectContext from './store/appContext'
import './App.css'
import Home from './views/home'
import Login from './components/login'
import  getState from './store/flux'

function App() {


  return (
    <>
      <Home/>
      <Login/>
      
     
    </>
  )
}


export default injectContext(App);