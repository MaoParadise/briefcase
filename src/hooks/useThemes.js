import { useState } from 'react';

const UseThemes = () => {
    
    const [toggleMenu, setToggleMenu ] = useState(true);

    const handleToggleMenu = () => {
        console.log(toggleMenu);
        setToggleMenu(!toggleMenu);
    }
    
    
    return {
        toggleMenu,
        handleToggleMenu
    }
}

export {UseThemes};
