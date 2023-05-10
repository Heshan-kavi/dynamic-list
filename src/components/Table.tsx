import { useEffect, useMemo, useState } from "react"
import { ColumnModel } from "../interfaces/TableModal"
import { TableOptions } from "../pages/ThirdPage"

interface Props<DATA>{
    data: DATA[]
    columns: ColumnModel<DATA>[]
    tableOptions:TableOptions<DATA>
}

export default function Table<DATA>({data,columns, tableOptions}: Props<DATA>){

    const [checkedIds, setCheckedIds] = useState<{[key: number] : boolean}>({})

    useEffect(() => {
      const dictionaryList =   data.reduce((acc, item) => {
        return {...acc, [tableOptions.getId(item)] : false}
      }, {})

      setCheckedIds(dictionaryList)

    }, [data])

    console.log(checkedIds)


    const isAllIdsChecked = useMemo(() =>  Object.values(checkedIds).every(value => value === true), [checkedIds])

    return <>
     <table>
        <thead>
            {
                tableOptions.showCheckboxColumn && <>
                    <td><input type="checkbox" checked={isAllIdsChecked} onChange={(ev) => {
                        const checked = ev.target.checked;
                        const dictionaryList =   data.reduce((acc, item) => {
                            return {...acc, [tableOptions.getId(item)] : checked}
                            }, {})
                            setCheckedIds(dictionaryList)
                    }} /></td>
                </>
            }
            {
                columns.map((column) => <>
                    <td>{column.columnId}</td>
                    </>)
            }
        </thead>
        <tbody>
            {
                data.map((row) => <>
                    <tr>
                        {
                        tableOptions.showCheckboxColumn && <>
                            <td><input type="checkbox" checked={checkedIds[tableOptions.getId(row)]} onChange={(ev) => {
                            const checked = ev.target.checked;
                            setCheckedIds({...checkedIds, [tableOptions.getId(row)] : checked })
                            }} /></td>
                            </>
                        }
                       {
                        columns.map((column) => <>
                          <td>{column.accessor(row)}</td>
                        </>)
                       }
                    </tr>
                </>)
            }
        </tbody>
     </table>
     
    </>
}