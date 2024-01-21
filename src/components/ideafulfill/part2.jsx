import { Group16 } from "../../assets/ideafulfill"
import styles, {layout} from "../../pages/style"
import Button from "../Button"

const Part2 = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionInfo}>
      <p className={`font-poppins font-semibold text-dimWhite text-[18px] leading-[40px] max-w-[460px] ml-[50px] text-justify`}> Để xây dựng nên một startup thì ý tưởng kinh doanh thôi là chưa đủ, bạn cần phải có kế hoạch tổng thể để phát triển startup của mình. Bạn cần phải chuẩn bị nhưng kế hoạch gì, hành động ra sao, mục tiêu của bạn là gì? </p>
    </div>
    <div className={layout.sectionImgReverse}>
      <img src={Group16} alt="Group16"
      className="w-[60%] relative z-[5]"/>
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
    </div>
  </section>
)

export default Part2