import { useState } from "react";
import CategoryView from "../components/CategoryView/CategoryView";
import { CategoriesData } from "../data/CategoriesData";
import { CategoryModel } from "../interfaces/CategoryModel";

function SecondaryPage (){

    const [definedCategories, setDefinedCategories] = useState<CategoryModel[]>(CategoriesData);

    const deleteElements = (data: CategoryModel[],  id : string) => {
        data.forEach((singleCategory, index) => {
            if(singleCategory.id === id){
                data.splice(index,1);
            }else if(singleCategory.children.length){
                deleteElements(singleCategory.children,id);
            }
        })
    }

    const addElement = (data: CategoryModel[],  id : string) => {
        data.forEach((singleCategory) => {
            if(singleCategory.id === id){
                const newCategoryId = singleCategory.id + '.' + (singleCategory.children.length + 1);
                singleCategory.children[singleCategory.children.length] = {id:newCategoryId,children:[],value:''}
            }else{
                addElement(singleCategory.children,id);
            }
        })
    }

    const ChangeElement = (data: CategoryModel[],  id : string, value: string) => {
        data.forEach((singleCategory) => {
            if(singleCategory.id === id){
                singleCategory.value = value;
            }else{
                ChangeElement(singleCategory.children,id, value);
            }
        })
    }

    const handleDelete = (returnedId : string) => {
        const copyOfDefinedCategories = [...definedCategories];
        deleteElements(copyOfDefinedCategories,returnedId);
        setDefinedCategories(copyOfDefinedCategories);
    }

    const handleAdd = (returnedId : string) => {
        const copyOfDefinedCategories = [...definedCategories];
        addElement(copyOfDefinedCategories,returnedId);
        setDefinedCategories(copyOfDefinedCategories);
    }

    const valueChanged = (id : string, value: string) => {
        const copyOfDefinedCategories = [...definedCategories];
        ChangeElement(copyOfDefinedCategories,id, value);
        setDefinedCategories(copyOfDefinedCategories);
    }

    return <div>
    <CategoryView data={definedCategories} handleDelete={handleDelete} handleAdd={handleAdd} valueChanged={valueChanged}/>
    </div>
}

export default SecondaryPage;