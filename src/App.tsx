import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routes from './config/routes'
import Navbar from './components/Navbar'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          {
            routes.map((route, index) => (
              <Route key={index} path={route.path} element={<route.component/>}/>
            ))
          }
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
