import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

export const selectcategories = createSelector([selectCategoryReducer],
    (categoriesSlice) => categoriesSlice.categories);



export const selectCategoriesMap = createSelector(
    [selectcategories],
    (categories) => categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {})
);

export const selectCategoriesIsLoading = createSelector([selectCategoryReducer], (categoriesSlice) => categoriesSlice.isLoading);