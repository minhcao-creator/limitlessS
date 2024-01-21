import { solution, trueSolution } from '../../assets/ideafulfill'
import styles, {layout} from '../../pages/style'
import { solutionstheNewMoney } from "../../constants"

const SolutionCard = ({content, index}) => (
  <div className={`flex flex-row p-3 rounded-[20px] feature-card`}>
    <div className={`${styles.flexCenter} w-[64px] h-[64px]`}>
      <img src={trueSolution} className="w-[100%] h-[100%] object-contain"/>
    </div>

    <div className={`flex-1 ml-5 flex items-center`}>
      <h4 className='font-poppins font-normal text-white text-[14px] leading-[26px]'>
        {content}
      </h4>
    </div>
  </div>
)

const Solutions = () => (
  <section className={`flex flex-col md:mt-[150px]`} >
    <div>
        <h2 className={`${styles.heading2} ${styles.flexCenter}`}>Tại sao bạn cần xây dựng HỒ SƠ DỰ ÁN ?</h2>
    </div>
    <div className={layout.section}>
        <div className={`${layout.sectionInfo} flex-col`}>
            {solutionstheNewMoney.map((solution, index) => (
                <SolutionCard key={solution.id} {...solution} index={index}/>
            ))}
        </div>
        <div className={layout.sectionImg}>
            <img src={solution} alt="solution" className="w-[60%]"/>
        </div>
    </div>
    
  </section>

)

export default Solutions