import { ChartNoAxesCombined } from "lucide-react";

import styles from "./styles.module.css";
import Card from "../../components/DefaultCard";

export default function Dashboard() {
  const props = {
    balance: {
      title: "Saldo em Conta",
      value: "R$3000",
      variant: "balance",
    },
    expenses: {
      title: "Despesas",
      value: "R$3000",
      variant: "expenses",
    },
    safe: {
      title: "Cofre",
      value: "R$3000",
      variant: "safe",
    },
    performance: {
      title: "Rendimento",
      value: "R$3000",
      variant: "performance",
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {Object.entries(props).map(([variant, props]) => (
          <Card key={variant} variant={variant}>
            <h2>{props.title}</h2>

            <div className={styles.currentGroup}>
              <div className={styles.currentValue}>
                <span>valor atual</span>
                <h3>{props.value}</h3>
              </div>

              <ChartNoAxesCombined size={50} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
