import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Knowledges from "./pages/Knowledges";
import NotFound from "./pages/NotFound";
import Portefolio from "./pages/Portefolio";

function App() {
  return (
    <div className="App">
          <Home> Home </Home>
       <Contact>Contact</Contact>
       <Knowledges>Knowlegges</Knowledges>
       <Portefolio>Portfolio</Portefolio>
       <NotFound>Not Found</NotFound>
   
    </div>
  );
}

export default App;
