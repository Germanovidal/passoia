import Header from "./components/Header"
import Lancamentos from "./components/Lancamentos"
import Hero from "./components/Hero"
import Makeup from "./components/Makeup"
import Novidades from "./components/Novidades"
// Arquivo principal
// Para escrita do nome do componente funcional usamos sempre a primeira letra maiuscula, PascalCase
function App() {
  return(
    <>
      <Header/>
      <Hero/>
      <Makeup/>
      <Lancamentos/>
      <Novidades/>
    </>
  )
}

export default App