import {FC} from 'react'
import classNames from 'classnames'

type IChoiceItemProps = {
    className?: string
    children?: string | JSX.Element | JSX.Element[];
}

const ChoiceItem:FC<IChoiceItemProps> = ({className, children}) => {
  return (
    <div className={classNames("choice-item", className)}>{children}</div>
  )
}

export default ChoiceItem
