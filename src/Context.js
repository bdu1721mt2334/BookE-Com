import { createContext, useContext , useEffect, useState} from "react";

const Contextpro = createContext()

function Context({ children }) {

    const [cartItems, setCartItems] = useState(() => {
        // Load from localStorage when app starts
        const savedCart = localStorage.getItem("myCart");
        return savedCart ? JSON.parse(savedCart) : [];
    });
    console.log(cartItems)

    // Save to localStorage whenever cartItem changes
    useEffect(() => {
        localStorage.setItem("myCart", JSON.stringify(cartItems));
    }, [cartItems]);

    function addToCart(book) {
        const condition = cartItems.find(item => item.title === book.title);
        if (condition) {
            setCartItems(cartItems.map(item =>
                item.title === book.title ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCartItems([...cartItems, { ...book, quantity: 1 }]);
        }
    }

    function increaseQuantity(book) {
        setCartItems(cartItems.map(item =>
            item.title === book.title ? { ...item, quantity: item.quantity + 1 } : item
        ));
    }

    function decreaseQuantity(book) {
        setCartItems(cartItems.map(item =>
            item.title === book.title && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 } : item
        ));
    }

    function removeFromCart(book) {
        setCartItems(cartItems.filter(item => item.title !== book.title));
    }

    const clearCart = () => {
        setCartItems([]);
    };



    return (
        <Contextpro.Provider
            value={{
               cartItems,
               addToCart,
               increaseQuantity,
               decreaseQuantity,
               removeFromCart,
               clearCart

            }}
        >
            {children}
        </Contextpro.Provider>
    )
}

export default Context;
export {Contextpro}