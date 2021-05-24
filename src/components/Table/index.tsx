import * as React from "react";
import { ascend, descend, isEmpty, pathOr, prop, sortWith } from "ramda";

export interface IColumn {
  /** The (unique) column key. */
  key: string;
  /** The column title. */
  title: string;
  /** The alignment of the column title. */
  align?: "left" | "center" | "right";
  /** The sort by key that shall be used to sort the data (a field with that key must exist in the data object). */
  sortByKey?: string;
}

export interface IRow {
  /** The key of the row. */
  key: string;
  /** The data of the row. */
  data: {};
}

interface ITableProps {
  /** The columns of the table. */
  columns: IColumn[];
  /** The rows of the table. */
  rows: IRow[];
  /** The sort by column key. */
  sortByColumn?: string;
  /** Flag defining if the column shall be sorted descending. */
  sortDescend?: boolean;
}

/**
 * Renders a table with given columns and rows.
 *
 * @param {*} props The component props.
 * @return {*} The table as react component.
 */
const Table: React.FunctionComponent<ITableProps> = (props) => {
  const { columns, rows, sortByColumn, sortDescend } = props;

  /* React hook for the sort key */
  const [sortKey, setSortKey] = React.useState(
    sortByColumn || columns[0].sortByKey || columns[0].key
  );

  /* React hook for the descending flag */
  const [descending, setDescending] = React.useState(sortDescend || false);

  /* Don't render a table without data */
  if (isEmpty(rows)) return null;

  /**
   * Get rows sorted by given key and descending flag.
   *
   * @return {*} The sorted rows.
   */
  const getSortedRows = () => {
    /* Create a flat list for better sort handling. */
    const rowsFlat = rows.map((row) => {
      return { key: row.key, ...row.data };
    });

    /* Function for sorting the rows */
    const doSort = sortWith(
      descending ? [descend(prop(sortKey))] : [ascend(prop(sortKey))]
    );

    /* Return sorted rows */
    return doSort(rowsFlat);
  };

  /**
   * Sets the sort key and descending flag in react state.
   *
   * @param {string} key The sort key.
   */
  const handleHeaderClick = (key: string) => {
    setSortKey(key);

    if (key === sortKey) {
      /* Toggle descending flag if sort key has not changed. */
      setDescending(!descending);
    } else {
      /* Reset descending flag to false for changed sort key. */
      setDescending(false);
    }
  };

  /**
   * Gets a symbol showing ascending or descending mode.
   *
   * @param {IColumn} column The column data.
   * @return {*} The sort symbol or an empty string.
   */
  const getSortSymbol = (column: IColumn) => {
    if (column.sortByKey === sortKey || column.key === sortKey) {
      return descending ? "⇩" : "⇧";
    }
    return "";
  };

  return (
    <table>
      <thead>
        <tr>
          {
            /* Loop table columns for displaying the table column headers */
            columns.map((column) => {
              return (
                <th
                  key={column.key}
                  onClick={() =>
                    handleHeaderClick(column.sortByKey || column.key)
                  }
                >
                  {`${column.title} ${getSortSymbol(column)}`}
                </th>
              );
            })
          }
        </tr>
      </thead>
      <tbody>
        {
          /* Loop sorted table rows */
          getSortedRows().map((row) => {
            return (
              <tr key={row.key}>
                {
                  /* Loop table columns for displaying the table column data */
                  columns.map((column) => {
                    return (
                      <td
                        key={`${row.key}_${column.key}`}
                        style={{ textAlign: column.align }}
                      >
                        {pathOr("-", [column.key], row)}
                      </td>
                    );
                  })
                }
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
};

export default Table;
