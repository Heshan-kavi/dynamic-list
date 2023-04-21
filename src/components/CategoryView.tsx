import { CategoryModel } from "../interfaces/CategoryModel";
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';

interface CategoryProp {
    data : CategoryModel[],
    handleDelete: (returnedId : string) => void,
    handleAdd: (returnedId : string) => void,
    valueChanged: (id : string, value: string) => void
}

const DeleteButton = styled.button`
    font-size: 1em;
    margin: 1em;
    margin-left:0em;
    padding: 0.25em 1em;
    border: 2px solid tomato;
    border-radius: 3px;
    background-color: white;
    color: tomato;
`;

const AddButton = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid mediumseagreen;
    border-radius: 3px;
    background-color: white;
    color: mediumseagreen;
`;

function CategoryView({data, handleDelete, handleAdd, valueChanged}: CategoryProp){

    return <div>
        {
            data.map((item) => <div key={item.id}>
                <li>
                    <input style={{borderStyle:'dashed'}} value={item.value} onChange={(event) => {valueChanged(item.id, event.target.value)}}/>
                    <AddButton onClick={() => {handleAdd(item.id)}}>Add</AddButton>
                    <DeleteButton onClick={() => {handleDelete(item.id)}}>Delete</DeleteButton>
                </li>
                <div style={{paddingLeft:30}}><CategoryView data={item.children} handleDelete={handleDelete} handleAdd={handleAdd} valueChanged={valueChanged}/></div>
            </div>)
        }
    </div>
}

export default CategoryView;