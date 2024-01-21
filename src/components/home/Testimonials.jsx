import {feedback} from '../../constants'
import styles from '../../pages/style'
import FeedbackCard from './FeedbackCard'
import Detail from './Detail'
import { useState } from 'react'


const Testimonials = () => {

  const [isShown, setIsShown] = useState(false)
  const [detail, setDetail] = useState()

  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'/>

      <div className='flex'>
        <h1 className={styles.heading2}>Những Dịch Vụ Của Chúng Tôi </h1>
      </div>

      <div className='sm:flex flex-row justify-between w-full feedback-container relative z-[1]'>
        {feedback.map((card) => (
            <FeedbackCard key={card.id} {...card} setIsShown = {setIsShown} setDetail={setDetail} />
        ))}
      </div>

      {isShown && <Detail detail={detail}/>}
    </section>
  )
}

export default Testimonials