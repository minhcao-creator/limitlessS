import {issuestheNewMoney1, issuestheNewMoney2} from '../../constants'
import styles, {layout} from '../../pages/style'
import { issue, part3 } from '../../assets/thenewmoney'

const IssueCard = ({content, index}) => (
  <div className={`flex flex-row p-6`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={issue} className="w-[80%] h-[80%] object-contain"/>
    </div>

    <div className = {`flex-1 ml-10 flex items-center`}>
      <h4 className='font-poppins font-normal text-white tex-[18px]'>
        {content}
      </h4>
    </div>
  </div>
)

const Issue = () => (
  <section id='issue' className={`flex flex-col mt-[60px]`}>
    <div className={`flex md:flex-row flex-col`}>
      <div className={`${layout.sectionImg} flex-col`}>
        <h4 className={`font-poppins font-semibold text-white text-[28px]`}>
          Bạn đã chuẩn bị rất tốt cho sản phẩm, dự án của mình trước khi cho ra mắt thị trường, nhưng:
        </h4>
        {issuestheNewMoney1.map((issuetheNewMoney1, index) => (
          <IssueCard key={issuetheNewMoney1.id} {...issuetheNewMoney1} index={index}/>
        ))}
      </div>

      <div className={`flex justify-center`}>
        <img src={part3} alt="issue"
          className="w-[70%]"/>
      </div>
    </div>
    
    <div className='ml-9'>
      {issuestheNewMoney2.map((issuetheNewMoney2, index) => (
      <IssueCard key={issuetheNewMoney2.id} {...issuetheNewMoney2} index={index}/>
    ))}
    </div>
    
  </section>
)

export default Issue