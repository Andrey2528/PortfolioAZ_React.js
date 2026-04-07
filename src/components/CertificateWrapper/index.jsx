import { useState } from 'react';
import { motion } from 'framer-motion';
import CertificateModal from '@/shared/components/CertificateModal';
import CertificateCard from './CertificateCard';
import { certificateImg } from '@/api/db/certificateImg';

const CertificateWrapper = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    // Сортуємо картки за датою (від нових до старих)
    const sortedCertificates = certificateImg.sort(
        (a, b) => new Date(b.date) - new Date(a.date),
    );

    const openModal = (card) => {
        setSelectedCard(card);
    };

    const closeModal = () => {
        setSelectedCard(null);
    };

    return (
        <motion.div
            className="container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="card__list"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                {sortedCertificates.map((card, index) => (
                    <CertificateCard
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        subTitle={card.subTitle}
                        img={card.img}
                        date={card.date}
                        company={card.company}
                        url={card.url}
                        openModal={() => openModal(card)}
                        index={index}
                    />
                ))}
            </motion.div>
            {selectedCard && (
                <CertificateModal card={selectedCard} onClose={closeModal} />
            )}
        </motion.div>
    );
};

export default CertificateWrapper;
