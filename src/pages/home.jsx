import styles from './style'

import { 
  Navbar, 
  CTA,
  Footer } from '../components'

import {
  Billing,
  Business,
  CardDeal,
  Clients,
  Detail,
  DoPart,
  DoSomeThing,
  FeedbackCard,
  Hero,
  Process,
  Stats,
  Testimonials
} from "../components/home"

const Home = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}> 
      <div className={`${styles.boxWidth}`}> 
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}> 
      <div className={`${styles.boxWidth}`}> 
        <Stats />
        <Business />
        <Billing />
        <DoSomeThing/>
        <CardDeal />
        <Testimonials />
        <Process/>
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>

  </div>
)

export default Home