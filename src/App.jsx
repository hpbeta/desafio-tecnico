import { MugCard } from "./componentes/mugCard"
import { NewRelease } from "./componentes/newRelease"
import { Contact } from "./pages/contact"
import { Header } from "./pages/header"
import { Hero } from "./pages/hero"
import { MugDetailCard } from "./pages/mugDetailCard"


function App() {

  return (
   <>
     <Header />
     <Hero />
     <NewRelease />
     <MugCard />
     <MugDetailCard />
     <MugCard />
     <NewRelease />
     <Contact />
   </>
  )
}

export default App
