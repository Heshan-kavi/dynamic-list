import { CategoryModel } from "../../interfaces/CategoryModel";
import 'bootstrap/dist/css/bootstrap.min.css';
import { DeleteButton, AddButton, UpdateButton } from "./CategoryView.styles";
import { memo } from "react";

interface CategoryProp {
    data : CategoryModel[],
    handleDelete: (returnedId : string) => void,
    handleAdd: (returnedId : string, value: string) => void,
    handleUpdate: (returnedId : string, value: string) => void,
    valueChanged: (id : string, value: string) => void
}

function CategoryView({data, handleDelete, handleUpdate, handleAdd, valueChanged}: CategoryProp){

    return <div>
        {
            data.map((item) => <div key={item.id}>
                <li>
                    <input style={{borderStyle:'dashed'}} value={item.value} onChange={(event) => {valueChanged(item.id, event.target.value)}}/>
                    <AddButton onClick={() => {handleAdd(item.id, item.value)}}>Add</AddButton>
                    <UpdateButton onClick={() => {handleUpdate(item.id, item.value)}}>Update</UpdateButton>
                    <DeleteButton onClick={() => {handleDelete(item.id)}}>Delete</DeleteButton>
                </li>
                <div style={{paddingLeft:30}}><CategoryView data={item.children} handleDelete={handleDelete} handleUpdate={handleUpdate} handleAdd={handleAdd} valueChanged={valueChanged}/></div>
            </div>)
        }
    </div>
}

export default memo(CategoryView);