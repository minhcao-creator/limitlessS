import DoPart from "./DoPart"
import styles from "../../pages/style"
import { doparts } from "../../constants"

const DoSomeThing = () => (
    <section id="dosomething" className="mb-[50px]">
        <h2 className={`${styles.heading2} ${styles.flexCenter} my-20`}>
            Chúng Tôi Làm Gì ?
        </h2>
        <div className={`sm:flex flex-row justify-between`}>
            {doparts.map((dopart) => (
                <DoPart key={dopart.id} {...dopart}/>
            ))}
        </div>   
    </section>
)

export default DoSomeThing