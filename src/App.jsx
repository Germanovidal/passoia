import Header from "./components/Header"
import Lancamentos from "./components/Lancamentos"
import Hero from "./components/Hero"
// Arquivo principal
// Para escrita do nome do componente funcional usamos sempre a primeira letra maiuscula, PascalCase
function App() {
  return(
    <>
      <Header/>
      <Hero/>
      <Lancamentos/>
    </>
  )
}

export default App