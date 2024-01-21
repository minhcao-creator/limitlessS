import styles from "../../pages/style"
import { discount, robot1 } from "../../assets"
import { header } from "../../assets/ideafulfill"
import GetStarted from '../GetStarted'

const Header = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount"
          className="w-[32px] h-[32px]"
        />
        <p className={`${styles.paragraph} ml-2`}>
          Mã Giảm Giá {""} <span className="text-white"> 20%</span> {""} Cho Dự Án {""}
        <span className="text-white">Đầu Tiên </span> Cùng Chúng Tôi
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Phân Tích <br className="sm:block hidden" /> {" "}
          <span className="text-gradient">Kế Hoạch</span> {" "}
        </h1>

        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted/>
        </div>
      </div>
      <h1 className="font-poppins font-semibold ss:text-[46px] text-[40px] text-white ss:leading-[100px] leading-[75px]">
        Kinh Doanh Tổng Thể.
      </h1>
      <p className={`${styles.paragraph} max-w-[540px] mt-5`}> Vì sao một startup, một doanh nghiệp cần có kế hoạch kinh doanh trước khi tiến hành triển khai các hoạt động cụ thế?</p>
    </div>

    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={header} alt="ideafulfill"
      className="w-[80%] relative z-[5]"/>
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 bo white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted/>
    </div>
  </section>
)

export default Header