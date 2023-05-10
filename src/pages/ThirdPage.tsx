import { useState } from "react";
import Table from "../components/Table";
import { ColumnModel } from "../interfaces/TableModal";

interface TabledData {
    id : number;
    name : string
}

export interface TableOptions <T>{
    showCheckboxColumn: boolean
    getId: (row: T) => number
}

function ThirdPage(){
    const [data] = useState<TabledData[]>([{id:1, name:"value one"},{id:2, name:"value two"}])

    const [columns] = useState<ColumnModel<TabledData>[]>([{columnId:'ID', accessor: (row) => row.id},{columnId:'Name', accessor: (row) => row.name},{columnId:'Actions', accessor: (row) => <><button onClick={() => console.log(row)}> delete</button></>}])

    const [tableOptions] = useState<TableOptions<TabledData>>({
        showCheckboxColumn: true,
        getId: (row) => row.id
    })

    return <>
        <Table<TabledData> data={data} columns={columns} tableOptions={tableOptions}></Table>
    </>
}

export default ThirdPage;