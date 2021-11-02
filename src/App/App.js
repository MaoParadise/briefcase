import { Header } from '../components/header/Header';
import { Main } from '../components/main/Main';
import { SideRightMenu } from '../components/side-right-menu/Side-right-menu';
import Particlesbackground from '../assets/particlesBackground/particlesBackground';
import '../styles/App.css';

function App() {
  return (
    
    <div className="App">
      <Particlesbackground />
      <Header />
      <SideRightMenu />
      <Main />
      
    </div>
  );
}

export default App;
