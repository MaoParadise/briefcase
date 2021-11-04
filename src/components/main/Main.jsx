import React, { useContext } from 'react';
import { Header } from '../header/Header';
import { SideRightMenu } from '../side-right-menu/Side-right-menu';
import GlobalContext from '../../contexts/globalContext';
import './Main.css';

const Main = ({children}) => {

    const { toggleMenu } = useContext(GlobalContext);

    return (
        <React.Fragment>
            <Header />
            <SideRightMenu />
            <div className={`container-main ${toggleMenu ? 'main-menu-open back-overflow' : 'main-menu-close'}`}>
                {children}
            </div> 
        </React.Fragment>         
    );
}

export {Main};
