import {FC} from 'react'
import "./Container.sass";
import classNames from 'classnames';

interface IContainerProps {
    className?: string;
    children?: string | JSX.Element | JSX.Element[];
    isFlex?: boolean;
}

const Container: FC<IContainerProps> = ({children, className, isFlex}) => {
  return (
    <div className={classNames("container", className, {"container--flex": isFlex})}>{children}</div>
  )
};

export default Container;
