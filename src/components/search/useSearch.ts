import { useState, useRef } from "react";
import { useAppSelector } from "../../store/hooks";

interface ISearchLink {
  id: string;
  name: string;
  slug: string;
}

interface IUseSearch {
  isActive: boolean;
  searchValue: string;
  searchList: ISearchLink[];
  openSearchHandler: () => void;
  closeSearchHandler: () => void;
  editInputValueHandler: () => void;
  clearInputValueHandler: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

const useSearch = (): IUseSearch => {
  const inputRef = useRef<HTMLInputElement>(null);
  const linkList =
    useAppSelector((state) => state.list).map((entry) => {
      return {
        id: entry.id,
        name: entry.name,
        slug: entry.slug,
      };
    }) || [];

  const [isActive, setIsactive] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchList, setSearchList] = useState<ISearchLink[]>([]);

  const openSearchHandler = () => {
    setIsactive(true);
    inputRef.current?.focus();
  };

  const closeSearchHandler = () => {
    if (searchValue === "") {
      setIsactive(false);
    }
  };

  const editInputValueHandler = () => {
    setSearchValue(inputRef.current?.value || "");
    setSearchList(
      inputRef.current?.value !== ""
        ? linkList
            .filter((entry) =>
              entry.name.includes(inputRef.current?.value || "")
            )
            .slice(0, 5)
        : []
    );
  };

  const clearInputValueHandler = () => {
    setSearchValue("");
    inputRef.current?.focus();
    setSearchList([]);
  };

  return {
    closeSearchHandler,
    openSearchHandler,
    editInputValueHandler,
    clearInputValueHandler,
    isActive,
    inputRef,
    searchValue,
    searchList,
  };
};

export default useSearch;
