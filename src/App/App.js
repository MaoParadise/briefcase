
import { Main } from '../components/main/Main';
import GlobalContext from '../contexts/globalContext';
import { UseThemes } from '../hooks/useThemes';
import { BrowserRouter} from 'react-router-dom';
import '../styles/App.css';
import MainFaq from '../pages/main-faq/Main-Faq';
import MainSkills from '../pages/main-skills/Main-Skills';
//import NotFound from '../pages/not-found/Not-Found';
import Briefcase from '../pages/briefcase/briefcase';
import Experience from '../pages/experience/experience';

function App() {

  const { toggleMenu,
          handleToggleMenu,
          executeScroll,
          refToScrollSkills,
          refToScrollFaq,
          refToScrollExperience,
          refToScrollBriefcase
  } = UseThemes();

  return (
    <div className="App">
      {/* <Particlesbackground /> */}
      <GlobalContext.Provider
        value={{  toggleMenu,
                  handleToggleMenu,
                  executeScroll,
                  refToScrollSkills,
                  refToScrollFaq,
                  refToScrollExperience,
                  refToScrollBriefcase
              }}>
        <BrowserRouter>
          
          <Main>
            <MainFaq />
            <Briefcase />
            <MainSkills />
            <Experience />
          </Main>
            
          
        </BrowserRouter>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
