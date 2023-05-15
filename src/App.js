import Informacoes from './pages/Informacoes';
import Trabalhos from './pages/Trabalhos';
import Footer from './pages/Footer';
import Navbar from './pages/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <div className="conteudo">
        <div>
        <Informacoes/>
        <Trabalhos/>
        </div>
      </div>
      <footer>
          <Footer/>
      </footer>
    </div>
  );
}

export default App;
