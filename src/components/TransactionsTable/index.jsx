import { useEffect, useState } from "react";
import {
  EditIcon,
  Trash2,
  ArrowBigRightDash,
  ArrowBigLeftDash,
} from "lucide-react";
import { transactionsMock } from "../../mockData/mockData";
import styles from "./styles.module.css";

export default function TransactionsTable() {
  // Dados mock
  const [transactions, setTransactions] = useState(transactionsMock);
  // Paginação
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  useEffect(() => {
    async function loadTransactions() {
      try {
        const response = await fetch("http://localhost:3000/transactions");
        const data = await response.json();
        setTransactions(data);
      } catch {
        // está aqui para o eslint parar de reclamar, por enquanto está usando mock
      }
    }

    loadTransactions();
  }, []);

  // Definindo a página
  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentTransactions = transactions.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <div className={styles.containerTable}>
      <h2 className={styles.title}>Transações</h2>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Data</th>
            <th>Título</th>
            <th>Categoria</th>
            <th>Tipo</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {currentTransactions.length > 0 ? (
            currentTransactions.map((item) => (
              <tr key={item.id}>
                <td>{item.date}</td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>
                  <span
                    className={
                      item.type === "expense" ? styles.expense : styles.income
                    }
                  >
                    {item.type}
                  </span>
                </td>
                <td
                  className={
                    item.type === "expense"
                      ? styles.expenseValue
                      : styles.incomeValue
                  }
                >
                  R$ {item.amount}
                </td>
                <td>
                  <button
                    className={`${styles.iconesTable} ${styles.editIcon}`}
                  >
                    <EditIcon size={18} />
                  </button>
                  <button
                    className={`${styles.iconesTable} ${styles.deleteIcon}`}
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">Nenhuma transação encontrada.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Paginação */}
      <div className={styles.pagination}>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
        >
          <ArrowBigLeftDash />
        </button>

        <span>
          Página {currentPage} de {totalPages}
        </span>

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
        >
          <ArrowBigRightDash />
        </button>
      </div>
    </div>
  );
}
