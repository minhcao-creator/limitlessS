import {issuesEn} from '../../constants'
import styles, {layout} from '../../pages/style'
import { issue, handright1 } from '../../assets/enhancepro'

const IssueCard = ({content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== issuesEn.length-1 ? "mb-6" : "mb-9"} feature-card md:w-[600px]`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={handright1} className="w-[80%] h-[80%] object-contain"/>
    </div>

    <div className = {`flex-1 ml-10 flex items-center`}>
      <h4 className='font-poppins font-semibold text-white tex-[18px]'>
        {content}
      </h4>
    </div>
  </div>
)

const Issue = () => (
  <section id='issue' className={layout.section}>
    <div className={layout.sectionInfo}>
      <img src={issue} alt="issue"
        className="w-[90%]"/>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {issuesEn.map((issue, index) => (
        <IssueCard key={issue.id} {...issue} index={index}/>
      ))}
    </div>
  </section>
)

export default Issue