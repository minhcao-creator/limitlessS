import styles from "../../pages/style"
import { star } from "../../assets"


const Detail = () => (
    <section className={`${styles.paddingY} ${styles.flexCenter} flex flex-col relative`}>
        <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'/>
        <div>
            <h2 className={styles.heading2}>Chi Tiết Của Sản Phẩm</h2>
        </div>
        <div className={`flex justify-between my-10`}>
            <div className={`flex flex-col ${styles.flexCenter} w-[260px] h-[400px] bg-gray-600 rounded-[20px] mx-[20px]`}>
                <img className={`w-[32px] mb-3`} src={star} alt="star" />
                <h4 className={`${styles.heading4} mb-6`}>PHÂN TÍCH Ý TƯỞNG KINH DOANH</h4>
                <ul className={`${styles.paragraph4} list-disc ml-6`}>
                    <li>Thẩm định, phân tích ý tưởng kinh doanh.</li>
                    <li>Xây dựng khung đề xuất giá trị khác biệt cho ý tưởng.</li>
                    <li>Xây dựng hồ sơ khách hàng.</li>
                    <li>Bản đồ giá trị.</li>
                </ul>
            </div>
            <div className={`flex flex-col ${styles.flexCenter} w-[260px] h-[400px] bg-gray-600 rounded-[20px] mx-[20px]`}>
                <img className={`w-[32px] mb-3`} src={star} alt="star" />
                <h4 className={`${styles.heading4} mb-6`}>PHÂN TÍCH Ý TƯỞNG KINH DOANH</h4>
                <ul className={`${styles.paragraph4} list-disc ml-6`}>
                    <li>Thẩm định, phân tích ý tưởng kinh doanh.</li>
                    <li>Xây dựng khung đề xuất giá trị khác biệt cho ý tưởng.</li>
                    <li>Xây dựng hồ sơ khách hàng.</li>
                    <li>Bản đồ giá trị.</li>
                </ul>
            </div>
            <div className={`flex flex-col ${styles.flexCenter} w-[260px] h-[400px] bg-gray-600 rounded-[20px] mx-[20px]`}>
                <img className={`w-[32px] mb-3`} src={star} alt="star" />
                <h4 className={`${styles.heading4} mb-6`}>PHÂN TÍCH Ý TƯỞNG KINH DOANH</h4>
                <ul className={`${styles.paragraph4} list-disc ml-6`}>
                    <li>Thẩm định, phân tích ý tưởng kinh doanh.</li>
                    <li>Xây dựng khung đề xuất giá trị khác biệt cho ý tưởng.</li>
                    <li>Xây dựng hồ sơ khách hàng.</li>
                    <li>Bản đồ giá trị.</li>
                </ul>
            </div>
        </div>
        <div className={`flex justify-between`}>
            <div className={`flex flex-col ${styles.flexCenter} w-[560px] h-[400px] bg-gray-600 rounded-[20px] mx-[20px]`}>
                <img className={`w-[32px] mb-3`} src={star} alt="star" />
                <h4 className={`${styles.heading4} mb-6`}>PHÂN TÍCH Ý TƯỞNG KINH DOANH</h4>
                <ul className={`${styles.paragraph4} list-disc ml-6`}>
                    <li>Thẩm định, phân tích ý tưởng kinh doanh.</li>
                    <li>Xây dựng khung đề xuất giá trị khác biệt cho ý tưởng.</li>
                    <li>Xây dựng hồ sơ khách hàng.</li>
                    <li>Bản đồ giá trị.</li>
                </ul>
            </div>
            <div className={`flex flex-col ${styles.flexCenter} w-[260px] h-[400px] bg-gray-600 rounded-[20px] mx-[20px]`}>
                <img className={`w-[32px] mb-3`} src={star} alt="star" />
                <h4 className={`${styles.heading4} mb-6`}>PHÂN TÍCH Ý TƯỞNG KINH DOANH</h4>
                <ul className={`${styles.paragraph4} list-disc ml-6`}>
                    <li>Thẩm định, phân tích ý tưởng kinh doanh.</li>
                    <li>Xây dựng khung đề xuất giá trị khác biệt cho ý tưởng.</li>
                    <li>Xây dựng hồ sơ khách hàng.</li>
                    <li>Bản đồ giá trị.</li>
                </ul>
            </div>
        </div>
    </section>
  )

export default Detail