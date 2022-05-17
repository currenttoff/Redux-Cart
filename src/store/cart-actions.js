import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

//fetch data from firebase
export const fetchData = () => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch(
        "https://redux-http-71b7a-default-rtdb.firebaseio.com/cartitems.json"
      );
      const data = await res.json();
      return data;
    };
    try {
      const cartData = await fetchHandler();
      console.log(cartData);
      dispatch(cartActions.replaceData(cartData));
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Request Failed...",
          type: "error",
        })
      );
    }
  };
};

//Thunk Pattern
export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        open: true,
        message: "Sending...",
        type: "warning",
      })
    );
    const sendRequest = async () => {
      /* dispatch(
          uiActions.showNotification({
            open: true,
            message: "Sending...",
            type: "warning",
          })
        );*/
      const res = await fetch(
        "https://redux-http-71b7a-default-rtdb.firebaseio.com/cartitems.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );
      //warning
      const data = await res.json();
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Sent",
          type: "success",
        })
      );
    };
    try {
      await sendRequest();
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          open: true,
          message: "Request Failed...",
          type: "error",
        })
      );
    }
  };
};
