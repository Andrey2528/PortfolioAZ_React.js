import i18next from '@/i18n';
import certificateBlockchain1 from '@/assets/images/sertificateIMG/certificateBlockchain1.png';
import certificateBlockchain2 from '@/assets/images/sertificateIMG/certificateBlockchain2.png';
import certificateBlockchain3 from '@/assets/images/sertificateIMG/certificateBlockchain3.png';
import certificateBlockchain4 from '@/assets/images/sertificateIMG/certificateBlockchain4.png';
import certificateMarketing from '@/assets/images/sertificateIMG/certificateMarketing.png';
import certificateWeb1 from '@/assets/images/sertificateIMG/certificateWeb1.png';
import certificateWeb2 from '@/assets/images/sertificateIMG/certificateWeb2.png';
import certificateWeb3 from '@/assets/images/sertificateIMG/certificateWeb3.png';
import certificateWeb4 from '@/assets/images/sertificateIMG/certificateWeb4.png';

export const certificateImg = [
    {
        id: 1,
        title: i18next.t('certificate.title.title1'),
        subTitle: i18next.t('certificate.subTitle.subTitle1'),
        date: '2022-01-11',
        company: i18next.t('certificate.company.company3'),
        img: certificateWeb1,
        url: 'https://www.freecodecamp.org/certification/andrey_zhukov/responsive-web-design',
    },
    {
        id: 2,
        title: i18next.t('certificate.title.title2'),
        subTitle: i18next.t('certificate.subTitle.subTitle1'),
        date: '2022-03-10',
        company: i18next.t('certificate.company.company3'),
        img: certificateWeb2,
        url: 'https://www.freecodecamp.org/certification/andrey_zhukov/front-end-development-libraries',
    },
    {
        id: 3,
        title: i18next.t('certificate.title.title3'),
        subTitle: i18next.t('certificate.subTitle.subTitle1'),
        date: '2022-03-20',
        company: i18next.t('certificate.company.company3'),
        img: certificateWeb3,
        url: 'https://www.freecodecamp.org/certification/andrey_zhukov/data-visualization',
    },
    {
        id: 4,
        title: i18next.t('certificate.title.title4'),
        subTitle: i18next.t('certificate.subTitle.subTitle1'),
        date: '2023-05-26',
        company: i18next.t('certificate.company.company3'),
        img: certificateWeb4,
        url: 'https://www.freecodecamp.org/certification/andrey_zhukov/javascript-algorithms-and-data-structures',
    },
    {
        id: 5,
        title: i18next.t('certificate.title.title5'),
        subTitle: i18next.t('certificate.subTitle.subTitle2'),
        date: '2024-06-12',
        company: i18next.t('certificate.company.company1'),
        img: certificateBlockchain4,
        url: '',
    },
    {
        id: 6,
        title: i18next.t('certificate.title.title6'),
        subTitle: i18next.t('certificate.subTitle.subTitle2'),
        date: '2024-06-12',
        company: i18next.t('certificate.company.company2'),
        img: certificateBlockchain1,
        url: '',
    },
    {
        id: 7,
        title: i18next.t('certificate.title.title7'),
        subTitle: i18next.t('certificate.subTitle.subTitle2'),
        date: '2024-06-12',
        company: i18next.t('certificate.company.company2'),
        img: certificateBlockchain2,
        url: '',
    },
    {
        id: 8,
        title: i18next.t('certificate.title.title8'),
        subTitle: i18next.t('certificate.subTitle.subTitle2'),
        date: '2024-06-12',
        company: i18next.t('certificate.company.company2'),
        img: certificateBlockchain3,
        url: '',
    },
    {
        id: 9,
        title: i18next.t('certificate.title.title9'),
        subTitle: i18next.t('certificate.subTitle.subTitle2'),
        date: '2024-06-20',
        company: i18next.t('certificate.company.company1'),
        img: certificateMarketing,
        url: '',
    },
];

export default certificateImg;
