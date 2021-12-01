import React, { useContext } from 'react';
import { Header } from '../header/Header';
import { SideRightMenu } from '../side-right-menu/Side-right-menu';
import GlobalContext from '../../contexts/globalContext';
// import Footer from '../footer/Footer';
import './Main.css';

const Main = ({children}) => {

    const { toggleMenu, refToScrollFaq} = useContext(GlobalContext);

    return (
        <React.Fragment>
            <Header />
            <SideRightMenu />
            <div ref={refToScrollFaq} className={`container-main ${toggleMenu ? 'main-menu-open back-overflow' : 'main-menu-close'}`}>
                {children}
            </div> 
            {/* <Footer /> */}
        </React.Fragment>         
    );
}

export {Main};
