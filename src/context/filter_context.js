import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: false,
  sorting_value: "lowest",
};

export const FilterContextProvider = ({ children }) => {
  //get products from productContext using custom hook so that we can provide these products data to our filter_context
  const { products } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  //to set the grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  //to set the list view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  //sorting function for sort the price high to low or low to high
  const sorting = (e) => {
    let userValue = e.target.value;
    return dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };

  //to sort the products
  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sorting_value]);

  //to load all the products for grid and list view
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);
  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting }}
    >
      {children}
    </FilterContext.Provider>
  );
};

//Custom hook so that we can use filter_context data into other file easily
export const useFilterContext = () => {
  return useContext(FilterContext);
};
