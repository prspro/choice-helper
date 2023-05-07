import {FC} from 'react'
import "./Container.sass";
import classNames from 'classnames';

interface IContainerProps {
    className?: string;
    children?: string | JSX.Element | JSX.Element[];
}

const Container: FC<IContainerProps> = ({children, className}) => {
  return (
    <div className={classNames("container", className)}>{children}</div>
  )
};

export default Container;
