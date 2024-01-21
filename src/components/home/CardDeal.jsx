import { objects } from "../../assets"
import styles, {layout} from '../../pages/style'
import Button from '../Button'
import { markets } from "../../constants"

const MarketCard = ({icon, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} className="w-[50%] h-[50%] object-contain"/>
    </div>

    <div className={`${styles.flexCenter} ml-5`}>
      <h4 className='font-poppins font-semibold text-white tex-[18px] mb-1'>
        {content}
      </h4>
    </div>
  </div>
)

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} mb-10`}>Thị Trường Chúng Tôi <br className="sm:block hidden"/> Hướng Tới</h2>
      <div className={`${layout.sectionImg} flex-col`}>
      {markets.map((market, index) => (
        <MarketCard key={market.id} {...market} index={index}/>
      ))}
    </div>
    </div>
    <div className={layout.sectionImg}>
      <img src={objects} alt="objects" className="w-[80%]"/>
    </div>
  </section>
)

export default CardDeal