
import { Main } from '../components/main/Main';
import GlobalContext from '../contexts/globalContext';
import { UseThemes } from '../hooks/useThemes';
import MainFaq from '../pages/main-faq/Main-Faq';
import MainSkills from '../pages/main-skills/Main-Skills';
import Briefcase from '../pages/briefcase/briefcase';
import Experience from '../pages/experience/experience';
import '../styles/App.css';


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
      <GlobalContext.Provider
        value={{  toggleMenu,
                  handleToggleMenu,
                  executeScroll,
                  refToScrollSkills,
                  refToScrollFaq,
                  refToScrollExperience,
                  refToScrollBriefcase
              }}>
          <Main>
            <MainFaq />
            <Briefcase />
            <MainSkills />
            <Experience />
          </Main>
            
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
