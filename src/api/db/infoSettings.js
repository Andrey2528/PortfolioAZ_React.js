import logo from '@/assets/images/logo.png';

export const infoSettings = {
    aboutTitle: 'InfoPage.aboutTitle',
    aboutSubtitle: 'InfoPage.aboutSubtitle',
    aboutText: 'InfoPage.aboutText',
    logoImage: logo,
    location: 'InfoPage.location',
    stats: {
        experience: '7+',
        projects: '40+',
        clients: '50+',
    },
};

export const skillCategories = [
    { id: '1', key: 'all', label: 'InfoPage.categories.all', order: 1 },
    {
        id: '2',
        key: 'frontend',
        label: 'InfoPage.categories.frontend',
        order: 2,
    },
    { id: '3', key: 'backend', label: 'InfoPage.categories.backend', order: 3 },
    { id: '4', key: 'tools', label: 'InfoPage.categories.tools', order: 4 },
    { id: '5', key: 'other', label: 'InfoPage.categories.other', order: 5 },
];

export default infoSettings;
