import { themeDB } from '@/api/navigation/theme';

const ThemeToggle = ({ setThemes, theme }) => {
    //console.log('Current theme:', theme); // Проверяем текущее значение темы

    const themesList = themeDB.map((el) => {
        return (
            <div
                key={el.value}
                onClick={() => {
                    setThemes(el.value);
                }}
            >
                <p
                    className={`navbar__nav__link ${el.value === theme ? 'active_li' : ''}`}
                >
                    {el.title}
                </p>
            </div>
        );
    });

    return <div>{themesList}</div>;
};

export default ThemeToggle;
