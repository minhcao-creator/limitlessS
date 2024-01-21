import { Group16 } from "../../assets/enhancepro"
import styles, {layout} from "../../pages/style"
import Button from "../Button"

const Part2 = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionInfo}>
      <p className={`font-poppins font-semibold text-dimWhite text-[18px] leading-[40px] max-w-[460px] ml-[50px] text-justify`}> Phát triển sản phẩm mới là hoạt động cần thiết đối với hầu hết các doanh nghiệp. Nhằm có những bước đi đúng theo xu hướng của thị trường và người tiêu dùng. Đồng thời đó cũng là một bước tiến lớn ảnh hưởng trực tiếp đến doanh thu của doanh nghiệp. </p>
    </div>
    <div className={layout.sectionImgReverse}>
      <img src={Group16} alt="Group16"
      className="w-[80%] relative z-[5]"/>
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
    </div>
  </section>
)

export default Part2