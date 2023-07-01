import {FC} from 'react';
import "./Search.sass";
import classNames from 'classnames';

interface ISearch {
    className?: string;
}

const Search: FC<ISearch> = ({className}) => {
  return (
    <div className={classNames("search", className)}>Search</div>
  )
}

export default Search
