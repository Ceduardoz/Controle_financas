import { useState } from "react";
import { CirclePlus } from "lucide-react";

import MainTemplate from "../../templates/MainTemplate";
import DefaultModal from "../../components/DefaultModal";
import FinanceForm from "../../components/FinanceForm";
import TransactionsTable from "../../components/TransactionsTable";

import styles from "./styles.module.css";

export default function Transations() {
  // Abrir o modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <MainTemplate>
      <div className={styles.filter}>
        <input
          type="search"
          name="search"
          className={styles.inputsFilter}
          id="search"
          placeholder="&#128269;Buscar"
        />

        <input
          type="month"
          name="search"
          id="search"
          className={styles.inputsFilter}
        />

        {/* Modal para criar */}
        <button
          className={`${styles.OpenModalBtn} ${styles.inputsFilter}`}
          onClick={() => setIsModalOpen(true)}
        >
          <CirclePlus />
          Adicionar Transação
        </button>

        <DefaultModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <h2>Adicionar Finanças</h2>
          <FinanceForm />
        </DefaultModal>
      </div>

      <TransactionsTable />
    </MainTemplate>
  );
}
