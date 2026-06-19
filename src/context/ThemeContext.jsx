import {
  createContext,
  useState,
  useEffect,
} from "react";

export const ThemeContext =
  createContext();

export function ThemeProvider({
  children,
}) {

  const [darkMode, setDarkMode] =
    useState(() => {

      const savedTheme =
        localStorage.getItem(
          "zephyr-theme"
        );

      return savedTheme === "dark";
    });

  useEffect(() => {

    if (darkMode) {

      document.body.classList.add(
        "dark"
      );

      localStorage.setItem(
        "zephyr-theme",
        "dark"
      );

    } else {

      document.body.classList.remove(
        "dark"
      );

      localStorage.setItem(
        "zephyr-theme",
        "light"
      );
    }

  }, [darkMode]);

  const toggleTheme = () => {

    setDarkMode(
      (prev) => !prev
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}