import PropType from 'prop-types'
import styles from './ButtonCustom.module.css'

function ButtonCustom({children,onClick}){
  return (
    <div className={styles.ButtonContainer} onClick={onClick}>{children}</div>
  )
}

ButtonCustom.propType={
    children:PropType.string
}
export default ButtonCustom