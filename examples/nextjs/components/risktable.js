import styles from '../app/page.module.css'
import React from "react";


const RiskTable = () => {

    return (
        <div  style={{display: "flex"}}>
            <div style={{height: "20px"}}></div>
            <div className={styles.expandable}> 
                <div><b>Market Risk</b></div>
                <div style={{height: "20px"}}></div>
                <div>Score: 3/10</div>

                <div style={{flex: "1"}}>
                <table className={styles.mytable}>
	<tbody>
		<tr className={styles.tablecell}>
			<td className={styles.tablecell}>Asset</td>
			<td className={styles.tablecell}>Volatility</td>
			<td className={styles.tablecell}>Max. Drawdown</td>
			<td className={styles.tablecell}>Risk / Reward</td>
			<td className={styles.tablecell}>Risk Score</td>
		</tr>
		<tr className={styles.tablecell}>
			<td className={styles.tablecell}>Illuvium</td>
			<td className={styles.tablecell}>Medium</td>
			<td className={styles.tablecell}>Medium</td>
			<td className={styles.tablecell}>Meidum</td>
			<td className={styles.tablecell}>Medium</td>
		</tr>
		<tr className={styles.tablecell}>
			<td className={styles.tablecell}>Cryptoskulls</td>
			<td className={styles.tablecell}>High</td>
			<td className={styles.tablecell}>Very High</td>
			<td className={styles.tablecell}>Low</td>
			<td className={styles.tablecell}>High</td>
		</tr>
		<tr className={styles.tablecell}>
			<td className={styles.tablecell}>Angry Dynomites</td>
			<td className={styles.tablecell}>Medium</td>
			<td className={styles.tablecell}>Low</td>
			<td className={styles.tablecell}>High</td>
			<td className={styles.tablecell}>Low</td>
		</tr>
	</tbody>
</table>
<p>&nbsp;</p>
</div>
            </div>

            <div style={{height: "2000px"}}></div>
            <div style={{flex: "1"}}>
            <div className={styles.expandable}> 
                <div><b>Liquidity Risk</b></div>
                <div style={{height: "20px"}}></div>
                <div>Score: 7/10</div>

                <table className={styles.mytable}>
	<tbody>
		<tr className={styles.tablecell}>
			<td className={styles.tablecell}>Asset</td>
			<td className={styles.tablecell}>NonWashTradeVsMarketCap</td>
			<td className={styles.tablecell}>WashTradeShare</td>
			<td className={styles.tablecell}>bidAskSpread</td>
			<td className={styles.tablecell}>Risk Score</td>
		</tr>
		<tr className={styles.tablecell}>
			<td className={styles.tablecell}>Illuvium</td>
			<td className={styles.tablecell}>Medium</td>
			<td className={styles.tablecell}>Medium</td>
			<td className={styles.tablecell}>Meidum</td>
			<td className={styles.tablecell}>Medium</td>
		</tr>
		<tr className={styles.tablecell}>
			<td className={styles.tablecell}>Cryptoskulls</td>
			<td className={styles.tablecell}>High</td>
			<td className={styles.tablecell}>Very High</td>
			<td className={styles.tablecell}>Low</td>
			<td className={styles.tablecell}>High</td>
		</tr>
		<tr className={styles.tablecell}>
			<td className={styles.tablecell}>Angry Dynomites</td>
			<td className={styles.tablecell}>Medium</td>
			<td className={styles.tablecell}>Low</td>
			<td className={styles.tablecell}>High</td>
			<td className={styles.tablecell}>Low</td>
		</tr>
	</tbody>
</table>
<p>&nbsp;</p>
</div>
            </div>
        


        </div>
    )
    
}

export default RiskTable