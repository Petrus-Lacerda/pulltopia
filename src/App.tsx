import "./global.scss"
import { Route, Routes } from 'react-router'
import Homepage from './pages/Homepage/Homepage'
import Header from './componenets/Header/Header'
import UserPanel from "./componenets/UserPanel/UserPanel"

function App() {
  return (
    <>
      <Header />
      <div className='main-content'>
        <UserPanel />
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
