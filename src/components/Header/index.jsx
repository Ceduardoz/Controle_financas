import { useState, useEffect } from "react";
import { SunIcon, Moon } from "lucide-react";

import DefaultButton from "../DefaultButton";
import styles from "./styles.module.css";
import { useLocation } from "react-router-dom";

export default function Header() {
  // Definindo o texto de acordo com a página renderizada
  const localtion = useLocation();

  const titles = {
    "/": "Bem Vindo, usuário",
    "/transacoes": "Transações",
  };

  const pageTitle = titles[localtion.pathname] || "dashboard";

  // Pegar o tema pelo localStorage
  // Evita leitura desnecessária do localStorage a cada render.
  // Garante fallback seguro para "light".
  const [theme, setTheme] = useState(() => {
    const storageTheme = localStorage.getItem("theme");
    if (storageTheme === "dark" || storageTheme === "light") {
      return storageTheme;
    }
    return "light";
  });

  // Objeto para definir o icone
  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <Moon />,
  };

  function handleThemeChange(e) {
    e.preventDefault();

    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  // Mudança de tema
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className={styles.header}>
      <h4 className={styles.NameUser}>{pageTitle}</h4>

      <div className={styles.icones}>
        {/* Botão mudança de tema. */}
        <DefaultButton
          aria-label="mudar tema"
          title="mudar tema"
          onClick={handleThemeChange}
        >
          {nextThemeIcon[theme]}
        </DefaultButton>
      </div>
    </header>
  );
}
