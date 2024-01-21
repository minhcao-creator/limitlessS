import styles from "../pages/style"
import { arrowUp } from "../assets"

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexStart} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className="ml-4">
        <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23px] mr-8">
          <span className="text-gradient">
            Liên
          </span>
        </p>
        <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain"/>
      </div>

      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">
          Hệ Với
        </span>
      </p>

      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">
          Chúng Tôi
        </span>
      </p>
      </div>
      

    </div>

  </div>
)

export default GetStarted