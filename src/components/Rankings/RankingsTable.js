import { Fragment } from "react";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { COLUMNS } from "./columns";
import GlobalFilter from "./GlobalFilter";
import classes from "./RankingsTable.module.css";

const RankingsTable = () => {
  const rankings = useSelector((state) => state.rankings);
  console.log(rankings);
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => rankings.rankings, [rankings.rankings]);
  console.log(data);
  const tableInstance = useTable(
    { columns, data },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter, pageIndex } = state;

  const previousPageHandler = () => {
    previousPage();
  };
  const nextPageHandler = () => {
    nextPage();
  };

  return (
    <Fragment>
      <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      <table {...getTableProps()} className={classes.table}>
        <thead>
          {headerGroups.map((group) => (
            <tr {...group.getHeaderGroupProps()}>
              {group.headers.map((column) => (
                <th
                  {...column.getHeaderProps(
                    {
                      style: { width: "200px" },
                    },
                    column.getSortByToggleProps()
                  )}
                >
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={classes.actions}>
        <span>
          Page {pageIndex + 1} of {pageOptions.length}
        </span>
        <button
          type="button"
          onClick={previousPageHandler}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        <button type="button" onClick={nextPageHandler} disabled={!canNextPage}>
          Next
        </button>
      </div>
    </Fragment>
  );
};

export default RankingsTable;
