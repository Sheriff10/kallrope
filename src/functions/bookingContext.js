import { createContext, useReducer } from "react";
import { bookingRdeucer, BOOKING_INITIAL_STATE } from "./bookingReducer";

export const BookingContex = createContext();
export default function BookingContextWrap({ children }) {
   const [state, dispatch] = useReducer(bookingRdeucer, BOOKING_INITIAL_STATE);
   return (
      <BookingContex.Provider value={{ state, dispatch }}>
         {children}
      </BookingContex.Provider>
   );
}
