
import './App.css'
import Ejemplo from './Ejemplo'
function App() {
const alumnos=[
  {
    nombre:'Carlos',
    edad:23
  },
  {
    nombre:'Ana',
    edad:22
  }
]

  return (
   <Ejemplo alumnos={alumnos}/>
  )
}

export default App
