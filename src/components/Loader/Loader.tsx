import React, { useContext } from 'react';
import { ThemeContext } from '../../theme/ThemeContext';
import '../../styles/components/Loader.scss';
import logo from '../../assets/images/logo.png';

const Loader = () => {
    const themeContext = useContext(ThemeContext);
    const theme = themeContext?.theme || 'light';

    return (
        <div className={`loader loader--${theme}`}>
            <div className="loader__content">
                <img src={logo} alt="Loading..." className="loader__image" />
            </div>
        </div>
    );
};

export default Loader;
