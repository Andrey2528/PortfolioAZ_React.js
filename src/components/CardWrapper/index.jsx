import { useState } from 'react';
import { motion } from 'framer-motion';
import Modal from '@/shared/components/CardModal';
import PortfolioCard from './PortfolioCard';
import { portfolioCard } from '@/api/db/portfolioCard';

const CardWrapper = () => {
    const [selectedCard, setSelectedCard] = useState(null);

    const sortedCards = portfolioCard.sort((a, b) => b.year - a.year);

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
                {sortedCards.map((card, index) => (
                    <PortfolioCard
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        subTitle={card.subTitle}
                        number={card.id}
                        img={card.img}
                        year={card.year}
                        design={card.design}
                        role={card.role}
                        tag={card.tag}
                        platform={card.platform}
                        type={card.type}
                        url={card.url}
                        description={card.description}
                        timeToEndWork={card.timeToEndWork}
                        openModal={() => openModal(card)}
                        index={index}
                    />
                ))}
            </motion.div>
            {selectedCard && <Modal card={selectedCard} onClose={closeModal} />}
        </motion.div>
    );
};

export default CardWrapper;
