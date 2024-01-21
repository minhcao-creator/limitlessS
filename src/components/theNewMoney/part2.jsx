import { part2 } from "../../assets/thenewmoney"
import styles, {layout} from "../../pages/style"
import Button from "../Button"

const Part2 = () => (
  <section className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={part2} alt="part2"
      className="w-[70%] relative z-[5]"/>
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
    </div>
    <div className={`${layout.sectionInfo} `}>
      <h4 className={`font-poppins font-semibold text-[24px] text-white leading-[40px] w-full mb-6`}>
        BẤT CỨ MỘT LĨNH VỰC, NGÀNH NGHỀ NÀO CŨNG CẦN XÂY DỰNG HỒ SƠ NĂNG LỰC CHO CÔNG TY CỦA MÌNH.
      </h4>
      <p className={`font-poppins font-semibold text-dimWhite text-[18px] leading-[40px] text-justify`}>Hồ sơ được xem là bộ mặt của mỗi công ty. Chính vì vậy, 1 bộ hồ sơ năng lực ấn tượng, độc đáo chắc chắn sẽ giúp doanh nghiệp tạo được ấn tượng với khách hàng, đối tác của mình. Hồ sơ cũng được xem là ấn phẩm quan trọng để doanh nghiệp sử dụng trong các dự án mới, kêu gọi sự đầu tư, hợp tác từ quý nhà đầu tư. Giúp người đọc nhanh chóng nắm bắt được thông tin, hình thành sự quan tâm và thôi thúc họ tiến tới hợp tác.</p>
    </div>
  </section>
)

export default Part2