import { trueSolution } from '../../assets/enhancepro'
import styles, {layout} from '../../pages/style'
import { solutionsEn } from "../../constants"

const SolutionCard = ({content, index}) => (
  <div className={`flex flex-row p-3 rounded-[20px] feature-card`}>
    <div className={`${styles.flexCenter} w-[60px] h-[60px]`}>
      <img src={trueSolution} className="w-[100%] h-[100%] object-contain"/>
    </div>

    <div className={`flex-1 m-8 flex items-center`}>
      <h4 className='font-poppins text-white text-[18px]'>
        {content}
      </h4>
    </div>
  </div>
)

const Solutions = () => (
  <section className={`flex flex-col md:mt-[150px]`} >
    <div>
        <h2 className={`${styles.heading2} ${styles.flexCenter}`}>Tại Sao Cần Phải Lập Kế Hoạch Kinh Doanh ?</h2>
    </div>
    <div className={layout.section}>
        <div className={`${layout.sectionInfo} flex-col`}>
            {solutionsEn.map((solution, index) => (
                <SolutionCard key={solution.id} {...solution} index={index}/>
            ))}
        </div>
    </div>
    
  </section>

)

export default Solutions