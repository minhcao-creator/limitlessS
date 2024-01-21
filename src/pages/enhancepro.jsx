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
  } from '../components/enhancepro'

const EnhancePro = () => (
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
        <Issue/>
        <Part2/>
        <Solutions/>
        <Detail/>
        <div className='relative mt-[600px]'>
          <div className="absolute bottom-[160px]">
            <Group17Part/>
          </div>
          <CTA/>
        </div>
        <Footer/>
      </div>
    </div>

  </div>
)

export default EnhancePro