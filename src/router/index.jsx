import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('@/pages/HomePage.jsx'));
const InfoPage = lazy(() => import('@/pages/InfoPage.jsx'));
const SertificatePage = lazy(() => import('@/pages/SertificatePage.jsx'));

import Layout from '@/layout/layout';

import { PAGE_HOME, PAGE_INFO, PAGE_CERTIFICATES } from './routes';

const withSuspense = (Component) => (
    <Suspense fallback={null}>
        <Component />
    </Suspense>
);

const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { path: PAGE_HOME, element: withSuspense(HomePage) },
            { path: PAGE_INFO, element: withSuspense(InfoPage) },
            { path: PAGE_CERTIFICATES, element: withSuspense(SertificatePage) },
        ],
    },
];

export default createBrowserRouter(routes);
