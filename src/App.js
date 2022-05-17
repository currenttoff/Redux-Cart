import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import Notification from "./components/Notification";
import { fetchData, sendCartData } from "./store/cart-actions";

//import { uiActions } from "./store/ui-slice";

let isFirstRender = true;

function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  /*
  console.log(isLoggedIn);
  const cartItems = useSelector((state) => state.cart.itemsList);
  console.log(cartItems);
  */

  //recieve
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  //send
  useEffect(() => {
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }

    if (cart.isChanged) {
      dispatch(sendCartData(cart));
    }

    /*
    const sendRequest = async () => {
     
       dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sending...",
          type: "warning",
        })
      );
      const res = await fetch(
        "https://redux-http-71b7a-default-rtdb.firebaseio.com/cartitems.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );
      const data = await res.json();
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sent",
          type: "success",
        })
      );
    };
    */

    /* 
     sendRequest().catch((err) => {
    
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Request Failed...",
          type: "error",
        })
      );
    
     
    });
    */
  }, [cart, dispatch]);

  return (
    <div className="App">
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
        ></Notification>
      )}
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
