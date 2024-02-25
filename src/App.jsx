import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { ExpenseTracker } from './pages/ExpenseTracker'
import { Calculator } from './pages/Calculator'
import { Todo } from './pages/Todo'
import { NotFound } from './pages/NotFound'
import { PwReset } from './pages/PwReset'
import { Profile } from './pages/Profile'
import { NavBar } from './components/Navbar'
import { SignInUp } from './pages/SignInUp'
import { UserProvider } from './context/UserContext'

function App() {
  return (
      <BrowserRouter>
      <UserProvider>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="expensetracker" element={<ExpenseTracker/>}/>
          <Route path="calculator" element={<Calculator/>}/>
          <Route path="todo" element={<Todo/>}/>
          <Route path="signinup/:type" element={<SignInUp/>}/>
          <Route path="pwreset" element={<PwReset/>}/>
          <Route path="profile" element={<Profile/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        </UserProvider>
      </BrowserRouter>
  )
}

export default App
