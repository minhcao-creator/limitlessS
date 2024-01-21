import styles from "../../pages/style"

const Detail = ({detail}) => (
    <div className={`${styles.paragraph} detail p-10 rounded-[20px] mb-[100px]`}>
        {detail}
    </div>
)

export default Detail