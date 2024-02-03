import { HiMoon, HiSun } from 'react-icons/hi';
import { useGlobalContext } from '../context';

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();

  return (
    <section className="toggle-container">
      <button className="dark-toggle" onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <HiSun className="toggle-icon" />
        ) : (
          <HiMoon className="toggle-icon" />
        )}
      </button>
    </section>
  );
};
export default ThemeToggle;
