export interface CategoryModel{
    id: string;
    value: string;
    children: CategoryModel[];
}