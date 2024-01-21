import { star } from "../../assets"
import styles from "../../pages/style"

const FeedbackCard = ({content, title, detail, setIsShown, setDetail}) => (
  <div className='flex flex-col px-10 py-12 rounded-[20px] max-w-[400px] md:mr-10 mr-0 my-5 feedback-card'
      onMouseEnter={() => {
        setIsShown(true)
        setDetail(detail)}
      }
      onMouseLeave= {() => setIsShown(false)}
  >
    <div className={`${styles.flexCenter} mb-5`}>
      <img src={star} alt="star" className={`w-[42px]`}/>
    </div>
    <div className={`${styles.flexStart} mb-5`}>
      <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white text-align:center">{title}</h4>
    </div>
    <div className={`${styles.flexCenter} mb-5`}>
      <p className={styles.paragraph}>{content}</p>
    </div>
    
  </div>
)


export default FeedbackCard