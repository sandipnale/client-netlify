import axios from "axios";
import { fetchFoodList } from "../service/foodService";
import { createContext, useEffect, useState } from "react";
import { addToCart, getCartData, RemoveQtyFromCart } from "../service/CartService";

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
    const [foodList, setFoodList] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [token, setToken] = useState("");

    const increaseQty = async (foodId) => {
        setQuantities((prev) => ({ ...prev, [foodId]: (prev[foodId] || 0) + 1 }));
        await addToCart(foodId, token);

    };


    const decreaseQty = async (foodId) => {

        setQuantities((prev) => ({ ...prev, [foodId]: prev[foodId] > 0 ? prev[foodId] - 1 : 0 }));
        await RemoveQtyFromCart(foodId, token);
    };

    const loadCarData = async (token) => {
        try {
            const response = await getCartData(token);
            console.log("Calling cart API...");

            setQuantities(response);
          
        } catch (error) {
            console.error("Error loading cart data:", error.message);
        }
    };


    const removeFromCart = (foodId) => {
        setQuantities((prevQuantities) => {
            const updateQuantities = { ...prevQuantities };
            delete updateQuantities[foodId];
            return updateQuantities;
        })
    }

    const contextValue = {
        foodList,
        increaseQty,
        decreaseQty,
        quantities,
        removeFromCart,
        token,
        setToken,
        setQuantities,
        loadCarData
    };

    useEffect(() => {
        async function loadData() {

            const data = await fetchFoodList();
            setFoodList(data);
            if (localStorage.getItem('token')) {
                setToken(localStorage.getItem('token'));
                loadCarData(localStorage.getItem('token'));
            }

        }
        loadData();
    }, [])

    return (

        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}