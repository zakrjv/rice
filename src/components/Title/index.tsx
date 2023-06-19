import styles from './index.module.css'

export function Title(prop) {
    const {children} = prop
    return <span className={styles.title}>{children}</span>
}