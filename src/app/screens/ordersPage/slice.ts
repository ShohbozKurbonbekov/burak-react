import { createSlice } from "@reduxjs/toolkit";
import { ordersPageState } from "../../../lib/types/screen";

const initialState: ordersPageState = {
  processOrders: [],
  pausedOrders: [],
  finishedOrders: [],
};

const ordersPageSlice = createSlice({
  name: "ordersPage",
  initialState,
  reducers: {
    setProcessOrders: (state, action) => {
      state.processOrders = action.payload;
    },

    setPausedOrders: (state, action) => {
      state.pausedOrders = action.payload;
    },

    setFinishedOrder: (state, action) => {
      state.finishedOrders = action.payload;
    },
  },
});

export const { setPausedOrders, setProcessOrders, setFinishedOrder } =
  ordersPageSlice.actions;
const OrdersPageReducer = ordersPageSlice.reducer;
export default OrdersPageReducer;
