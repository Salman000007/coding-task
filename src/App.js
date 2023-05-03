import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componets/Header';
import FirstCompo from './Componets/FirstCompo';
import Explore from './Componets/Explore';
import Footer from './Componets/Footer';


function App() {
  return (
    <div className="App">
    <Header/>
    <FirstCompo/>
    <Explore/>
    <Footer/>
    </div>
  );
}

export default App;
