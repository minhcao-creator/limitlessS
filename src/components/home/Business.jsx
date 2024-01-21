import {features} from '../../constants'
import styles, {layout} from '../../pages/style'
import Button from '../Button'
import { vision } from '../../assets'

const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length-1 ? "mb-6" : "mb-9"} feature-card md:w-[600px]`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} className="w-[50%] h-[50%] object-contain"/>
    </div>

    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white tex-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite tex-[16px] leading-[24px] mb-1'>
        {content}
      </p>
    </div>
  </div>
)

const Business = () => (
  <section id='features' className={layout.section}>
    <div className={layout.sectionInfo}>
    <img src={vision} alt="vision"
      className="w-[80%]"/>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index}/>
      ))}
    </div>
  </section>
)

export default Business