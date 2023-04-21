import { CategoryModel } from "../interfaces/CategoryModel";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

interface CategoryProp {
    data : CategoryModel[],
    handleDelete: (returnedId : string) => void,
    handleAdd: (returnedId : string) => void,
    valueChanged: (id : string, value: string) => void
}

function CategoryView({data, handleDelete, handleAdd, valueChanged}: CategoryProp){

    return <div>
        {
            data.map((item) => <div key={item.id}>
                <li>
                    <input style={{borderStyle:'dashed'}} value={item.value} onChange={(event) => {valueChanged(item.id, event.target.value)}}/>
                    <Button variant="primary" style={{margin:10}} onClick={() => {handleAdd(item.id)}}>add</Button>
                    <Button variant="danger" style={{margin:10, marginLeft:0}} onClick={() => {handleDelete(item.id)}}>delete</Button>
                </li>
                <div style={{paddingLeft:30}}><CategoryView data={item.children} handleDelete={handleDelete} handleAdd={handleAdd} valueChanged={valueChanged}/></div>
            </div>)
        }
    </div>
}

export default CategoryView;