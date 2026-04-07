import '@/styles/index.scss';
import { useState } from 'react';
import { motion } from 'framer-motion';

const CertificateCard = ({
    id,
    title,
    subTitle,
    img,
    date,
    openModal,
    index = 0,
}) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(true);
        openModal();
    };

    // Форматуємо дату для відображення
    const formattedDate = date ? new Date(date).getFullYear() : '';

    return (
        <motion.div
            id={id}
            className={`card ${isActive ? 'active' : ''}`}
            onClick={handleClick}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut',
            }}
            whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.98 }}
        >
            <h3 className="card__title">{title}</h3>
            <div className="card__row">
                <p className="card__desc">{subTitle}</p>
                <span className="card__number card__desc">
                    {formattedDate || id}
                </span>
            </div>
            <div className="card__miniature">
                <img src={img} alt={title} className="card__img" />
            </div>
        </motion.div>
    );
};

export default CertificateCard;
