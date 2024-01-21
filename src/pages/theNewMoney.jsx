import styles from './style'

import { 
  Navbar, 
  CTA,
  Footer } from '../components'

  import {
    Header,
    Issue,
    Part2,
    Solutions,
    Detail,
    Group17Part
  } from '../components/theNewMoney'

const TheNewMoney = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}> 
      <div className={`${styles.boxWidth}`}> 
        <Header />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}> 
      <div className={`${styles.boxWidth}`}> 
        <Part2/>
        <Issue/>
        <Solutions/>
        <Detail/>
        <Group17Part/>
        <CTA/>
        <Footer/>
      </div>
    </div>

  </div>
)

export default TheNewMoney