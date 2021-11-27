import { useState, useRef } from 'react';

const UseThemes = () => {
    
    const refToScrollSkills = useRef(null);
    const refToScrollFaq = useRef(null);
    const refToScrollBriefcase = useRef(null);
    const refToScrollExperience = useRef(null);

    const [toggleMenu, setToggleMenu ] = useState(true);

    const handleToggleMenu = () => {
        console.log(toggleMenu);
        setToggleMenu(!toggleMenu);
    }
    
    const executeScroll = (whatScroll) => {
        switch (whatScroll) {
            case 'skills':
                refToScrollSkills.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            case 'faq':
                refToScrollFaq.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            case 'briefcase':
                refToScrollBriefcase.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            case 'experience':
                refToScrollExperience.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                break;
            default:
                break;
        }
        
    }   
    
    
    return {
        toggleMenu,
        handleToggleMenu,
        executeScroll,
        refToScrollSkills,
        refToScrollFaq,
        refToScrollBriefcase,
        refToScrollExperience
    }
}

export {UseThemes};
