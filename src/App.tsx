import "./global.scss"
import { Route, Routes } from 'react-router'
import Homepage from './pages/Homepage/Homepage'
import Header from './componenets/Header/Header'

function App() {
  return (
    <>
      <Header />
      <div className='main-content'>
        <Routes>
          <Route path='/' element={<Homepage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
