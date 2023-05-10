export interface ColumnModel<DATA>{
    columnId: string;
    accessor: (row:DATA) => string | number | JSX.Element
}