import { ReactElement, useState } from "react";
import Pagination from "./Pagination";
import Search from "./Search";
import Table, { TableProps } from "./Table";
import Button from "./button";

type TableGroupProps = {
  hasPagination?: boolean;
  buttonText?: string;
  hasButton?: boolean;
  buttonClassName?: string;
  buttonIcon?: ReactElement;
  buttonOnClick?: () => void;
  tableRowOnClick?: () => void;
};

type CombinedType = TableGroupProps & TableProps;

export default function TableGroup({
  data,
  columns,
  hasPagination,
  hasButton,
  buttonText,
  buttonClassName,
  buttonIcon,
  buttonOnClick,
  tableRowOnClick,
}: CombinedType) {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div>
      <div className=" flex flex-col lg:flex-row gap-y-5 justify-between mb-5">
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        {hasPagination && <Pagination />}
        {hasButton && (
          <Button
            type="button"
            className={buttonClassName}
            onClick={buttonOnClick}
          >
            {buttonText}
            {buttonIcon}
          </Button>
        )}
      </div>
      <hr className="w-full" />
      <Table data={data} columns={columns} onClick={tableRowOnClick} />
    </div>
  );
}
