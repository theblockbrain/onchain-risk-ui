import styles from './page.module.css'
import PieChart from '@/components/piechart'


export default function Home() {
  return (
    <main className={styles.main}>


      <div className={styles.grid}>

        <div>
          <h2>Risk Brainscore</h2>
          <PieChart />

        </div>
        <div>
          <h2>Risk breakdown</h2>
        </div>
      </div>
    </main>
  )
}
