import {FC} from 'react'
import classNames from 'classnames';
import "./GridList.sass";

interface IGridListProps {
    className?: string
    children?: string | JSX.Element | JSX.Element[];
}
interface IGridItemProps {
  className?: string
  children?: string | JSX.Element | JSX.Element[];
}

const GridList:FC<IGridListProps> = ({className, children}) => {
  return (
    <ul className={classNames("grid-list", className)}>
      {children}
    </ul>
  )
}

const GridItem:FC<IGridItemProps> = ({className, children}) => {
  return <li className={classNames("grid-list__item", className)}>
    {children}
  </li>
}

export {GridList, GridItem}