import styles from "./styles.module.css";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "Saldo em conta", value: 33 },
  { name: "Despesas", value: 55 },
  { name: "Cofre", value: 12 },
];

// cores parecidas com o design
const COLORS = [
  /*--accent-purple-1:*/ "#7a4dff",
  /*--accent-red-1:*/ "#ff2d5a",
  /*--accent-blue-1:*/ "#3b82f6",
];

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;

  const p = payload[0];
  return (
    <div className={styles.tooltip}>
      <span className={styles.tooltipName}>{p.name}</span>
      <strong className={styles.tooltipValue}>{p.value}%</strong>
    </div>
  );
}

export default function TrafficDonut() {
  const total = data.reduce((acc, i) => acc + i.value, 0);

  return (
    <div className={styles.wrapper}>
      <div className={styles.chartBox}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius="65%"
              outerRadius="85%"
              paddingAngle={2}
              stroke="transparent"
            >
              {data.map((_, idx) => (
                <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>

        {/* centro da rosquinha */}
        <div className={styles.center}>
          <span className={styles.centerTop}>Total</span>
          <strong className={styles.centerValue}>{total}%</strong>
        </div>
      </div>

      <div className={styles.legend}>
        {data.map((item, i) => (
          <div key={item.name} className={styles.legendItem}>
            <span className={styles.dot} style={{ background: COLORS[i] }} />
            <span className={styles.legendText}>
              <strong>{item.value}%</strong> {item.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
