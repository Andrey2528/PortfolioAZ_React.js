import router from '@/router';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from '@/ThemeContext';

import './i18n';

const initGA = () => {
    import('react-ga4').then(({ default: ReactGA }) => {
        ReactGA.initialize('G-1C7BB6MY4W', { debug: false });
    });
};

const events = ['mousedown', 'touchstart', 'keydown', 'scroll'];
const onFirstInteraction = () => {
    initGA();
    events.forEach((e) => window.removeEventListener(e, onFirstInteraction));
};
events.forEach((e) =>
    window.addEventListener(e, onFirstInteraction, { passive: true }),
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>,
);
