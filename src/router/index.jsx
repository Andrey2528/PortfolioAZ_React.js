import { createHashRouter } from 'react-router-dom';

import HomePage from '@/pages/HomePage.jsx';
import InfoPage from '@/pages/InfoPage.jsx';
import SertificatePage from '@/pages/SertificatePage.jsx';

import Layout from '@/layout/layout';

import { PAGE_HOME, PAGE_INFO, PAGE_CERTIFICATES } from './routes';

const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: PAGE_HOME, element: <HomePage /> },
            { path: PAGE_INFO, element: <InfoPage /> },
            { path: PAGE_CERTIFICATES, element: <SertificatePage /> },
        ],
    },
];

export default createHashRouter(routes);
