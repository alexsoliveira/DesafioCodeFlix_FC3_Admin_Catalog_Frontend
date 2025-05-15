import { createSlice } from '@reduxjs/toolkit';

interface Category {
    id: string;
    name: string;
    is_active: boolean;
    created_at: string;
    updated_at: string;
    deleted_at: null | string;
    description: null | string;
}


const category : Category = {
    id: "",
    name: "",
    description: "",
    is_active: true,
    deleted_at: null,
    created_at: "",
    updated_at: "",
};
        
export const initialState = [
    category,
    { ...category, id: "1", name: "Category 1" },
    { ...category, id: "2", name: "Category 2" },  
    { ...category, id: "3", name: "Category 3" },
];

const categoriesSlice = createSlice({
    name: "categories",
    initialState: initialState,
    reducers: {
        createCategory: (state, action) => { },
        updateCategory: (state, action) => { },
        deleteCategory: (state, action) => { },
    },
});

export default categoriesSlice.reducer;
