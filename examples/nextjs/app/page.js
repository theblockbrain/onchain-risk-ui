import styles from './page.module.css'
import PieChart from '@/components/piechart'
import RiskTable from '@/components/risktable'


export default function Home() {
  return (
    <main className={styles.main}>

      <div>     
        <h2>Risk Brainscore</h2>
      </div>
      <div>
        <PieChart />
      </div>
      <div>
        <RiskTable />
      </div>

    </main>
  )
}
