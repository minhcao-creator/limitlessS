import { apple, about, google } from "../../assets"
import styles, {layout} from "../../pages/style"
import Button from "../Button"

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2}`}>Chúng Tôi Là Ai ? </h2>
      <p className={`${styles.paragraph} mt-5`}>LIMITLESS START-UPS là một công ty tư vấn, thiết kế và xây dựng khơi nghiệp chuyên nghiệp, dựa trên tiêu chí và quy trình của Singapore, cho các Startup mới, các doanh nghiệp vừa và nhỏ.
Giữa “làn sóng” của khởi nghiệp như hiện nay, chúng tôi chọn đồng hành cùng startup mới, cùng doanh nghiệp trong việc xây dựng kế hoạch kinh doanh bằng quy trình chuẩn quốc tế để biến ý tưởng kinh doanh của bạn thành hiện thực. </p>
    
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Button />
      </div>

    </div>
    <div className={layout.sectionImgReverse}>
      <img src={about} alt="aboutUs"
      className="w-[80%] relative z-[5]"/>
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
    </div>
  </section>
)

export default Billing