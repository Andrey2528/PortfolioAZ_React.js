import i18next from '@/i18n';
import { PAGE_HOME, PAGE_INFO, PAGE_CERTIFICATES } from '@/router/routes';

export const navPage = [
    {
        id: 1,
        title: i18next.t('navMenu.link2'),
        route: PAGE_INFO,
    },
    {
        id: 2,
        title: i18next.t('navMenu.link3'),
        route: PAGE_HOME,
    },
    {
        id: 3,
        title: i18next.t('navMenu.link4'),
        route: PAGE_CERTIFICATES,
    },
];

export default navPage;
