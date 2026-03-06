import { useState, useEffect } from "react";
import { SunIcon, Moon, CirclePlus } from "lucide-react";

import FinanceForm from "../FinanceForm";
import DefaultButton from "../DefaultButton";
import DefaultModal from "../DefaultModal";
import styles from "./styles.module.css";

export default function Header() {
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

  // Abrir o modal
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <h4 className={styles.NameUser}>Bem Vindo (Usuario)</h4>

      <div className={styles.icones}>
        {/* Modal para criar */}
        <DefaultButton onClick={() => setIsModalOpen(true)}>
          <CirclePlus />
        </DefaultButton>

        {/* Botão mudança de tema. */}
        <DefaultButton
          aria-label="mudar tema"
          title="mudar tema"
          onClick={handleThemeChange}
        >
          {nextThemeIcon[theme]}
        </DefaultButton>
      </div>

      <DefaultModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Adicionar Finanças</h2>
        <FinanceForm />
      </DefaultModal>
    </header>
  );
}
