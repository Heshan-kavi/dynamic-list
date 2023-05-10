import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryView from "../../components/CategoryView/CategoryView";
import { CategoriesData } from "../../data/CategoriesData";
import { CategoryModel } from "../../interfaces/CategoryModel";
import { PrimaryButton } from "./SecondaryPage.styles";

function SecondaryPage (){

    const [definedCategories, setDefinedCategories] = useState<CategoryModel[]>(CategoriesData);
    let navigate = useNavigate()

    const deleteElement = useCallback((data: CategoryModel[],  id : string) => {
        data.forEach((singleCategory, index) => {
            if(singleCategory.id === id){
                data.splice(index,1);
            }else if(singleCategory.children.length){
                deleteElement(singleCategory.children,id);
            }
        })
    }, [])

    const addElement = useCallback((data: CategoryModel[],  id : string) => {
        data.forEach((singleCategory) => {
            if(singleCategory.id === id){
                const newCategoryId = singleCategory.id + '.' + (singleCategory.children.length + 1);
                singleCategory.children[singleCategory.children.length] = {id:newCategoryId,children:[],value:''}
            }else{
                addElement(singleCategory.children,id);
            }
        })
    },[])

    const ChangeElement = useCallback((data: CategoryModel[],  id : string, value: string) => {
        data.forEach((singleCategory) => {
            if(singleCategory.id === id){
                singleCategory.value = value;
            }else{
                ChangeElement(singleCategory.children,id, value);
            }
        })
    },[])

    const handleDelete = useCallback((returnedId : string) => {
        const copyOfDefinedCategories = [...definedCategories];
        deleteElement(copyOfDefinedCategories,returnedId);
        setDefinedCategories(copyOfDefinedCategories);
    },[definedCategories, deleteElement])

    const handleAdd = useCallback((returnedId : string) => {
        const copyOfDefinedCategories = [...definedCategories];
        addElement(copyOfDefinedCategories,returnedId);
        setDefinedCategories(copyOfDefinedCategories);
    },[definedCategories, addElement])

    const valueChanged = useCallback((id : string, value: string) => {
        const copyOfDefinedCategories = [...definedCategories];
        ChangeElement(copyOfDefinedCategories,id, value);
        setDefinedCategories(copyOfDefinedCategories);
    },[definedCategories, ChangeElement])

    return <div>
    <PrimaryButton onClick={() => navigate("/third-page")}>Go To Third Page</PrimaryButton>
    <PrimaryButton onClick={() => navigate("/secondary-page/user-profile")}>Go To User Profile Page</PrimaryButton>
    <PrimaryButton onClick={() => navigate("/secondary-page/password")}>Go To Password Page</PrimaryButton>
    <CategoryView data={definedCategories} handleDelete={handleDelete} handleAdd={handleAdd} valueChanged={valueChanged}/>
    </div>
}

export default SecondaryPage;