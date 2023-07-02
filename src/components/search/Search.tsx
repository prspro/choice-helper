import { FC } from "react";
import "./Search.sass";
import classNames from "classnames";
import SVGicon from "../SVGicon/SVGicon";
import useSearch from "./useSearch";
import { Link } from "react-router-dom";

interface ISearch {
  className?: string;
}

const Search: FC<ISearch> = ({ className }) => {
  const {
    isActive,
    searchValue,
    openSearchHandler,
    closeSearchHandler,
    editInputValueHandler,
    clearInputValueHandler,
    inputRef,
    searchWrapRef,
    searchList,
  } = useSearch();

  return (
    <div className={classNames("search", className, { active: isActive })}>
      <div className="search__form-wrap" ref={searchWrapRef}>
        <button className="search__button" onClick={openSearchHandler}>
          <SVGicon id="magnifier" className="search__icon" />
        </button>
        <form className="search__form">
          <input
            ref={inputRef}
            type="text"
            className="search__input"
            placeholder="Name"
            onBlur={closeSearchHandler}
            onChange={editInputValueHandler}
            value={searchValue}
          />
        </form>
        <button
          className="search__clear-btn btn btn--remove"
          onClick={clearInputValueHandler}
        ></button>
        {searchList && (
          <ul className="search__result-list">
            {searchList.map((entry) => (
              <li key={entry.id} className="search__result-item">
                <Link className="search__link" to={`theme/${entry.slug}`}>
                  {entry.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Search;
