import { lable } from "../../assets"
import styles from "../../pages/style"

const Part = ({content}) => (
    <div className="flex flex-row mt-3">
        <div>
            <img src={lable} alt="lable" className="sm:w-[32px] w-[20px]"/>
        </div>
        <div className="ml-3">
            <p className={`${styles.paragraph} sm:max-w-[380px] max-w-[300px] h-[60px]`}>
                {content}
            </p>
            <hr className="h-[1px] w-[360px] mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
        </div>
    </div>
)

const DoPart = ({title, contents}) => (
    <div className="flex-col max-w-[400px] mb-20">
        <div className={`mb-10 ${styles.flexStart}`}>
            <h4 className="bg-blue-gradient px-6 py-3 rounded-[20px] font-poppins font-semibold">{title}</h4>
        </div>
        {contents.map((content, index) => (
            <Part key={index} content={content}/>
        ))}
    </div>
)
export default DoPart