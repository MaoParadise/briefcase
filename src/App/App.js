
import { Main } from '../components/main/Main';
import GlobalContext from '../contexts/globalContext';
import { UseThemes } from '../hooks/useThemes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../styles/App.css';
import MainFaq from '../pages/main-faq/Main-Faq';
import MainSkills from '../pages/main-skills/Main-Skills';
import NotFound from '../pages/not-found/Not-Found';

function App() {

  const { toggleMenu, handleToggleMenu } = UseThemes();

  return (
    <div className="App">
      {/* <Particlesbackground /> */}
      <GlobalContext.Provider value={{ toggleMenu, handleToggleMenu }}>
        <BrowserRouter>
          
          <Main>
            <Switch>
              <Route exact path="/" component={MainFaq} />
              <Route exact path="/skills" component={MainSkills} />
              <Route exact path='*' component={NotFound} />
            </Switch>
          </Main>
        </BrowserRouter>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
