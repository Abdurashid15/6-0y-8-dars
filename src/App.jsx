import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import SignUpForm from './components/SignupForm'
import LoginForm from './components/LoginForm'

function App() {
  return (
    <>
      <header>
        <div className="pages">
          <NavLink className='link' to='/login'>Login</NavLink>
          <NavLink className='link' to='/'>SignUP</NavLink>
        </div>

      </header>
      <Routes>
        <Route path='/' element={<SignUpForm></SignUpForm>}></Route>
        <Route path='/login' element={<LoginForm></LoginForm>}></Route>
      </Routes>
    </>
  )
}

export default App
