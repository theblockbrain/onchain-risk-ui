import styles from './page.module.css'
import PieChart from '@/components/piechart'
import RiskTable from '@/components/risktable'


export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>     
        <h2>Blockbrain Risk Score: HIGH RISK</h2>
      </div>
      <div className={styles.section}>
        <PieChart />
      </div>
      <div className={styles.section}>
        <RiskTable />
      </div>

    </main>
  )
}
