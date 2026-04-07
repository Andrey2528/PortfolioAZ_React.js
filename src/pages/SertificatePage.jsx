import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import CertificateWrapper from '@/components/CertificateWrapper';

const SertificatePage = () => {
    useEffect(() => {
        ReactGA.send({
            hitType: 'pageview',
            page: window.location.pathname + window.location.search,
        });
    }, []);

    return (
        <>
            <CertificateWrapper />
        </>
    );
};

export default SertificatePage;
