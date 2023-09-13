export const BOOKING_INITIAL_STATE = {
   date: "",
   time: "",
   pickup: "",
   destination: "",
};

export const bookingRdeucer = (state, action) => {
   switch (action.type) {
      case "SET_DATE":
         return { ...state, date: action.payload };

      case "SET_TIME":
         return { ...state, time: action.payload };

      case "SET_PICKUP":
         return { ...state, pickup: action.payload };

      case "SET_DESTINATION":
         return { ...state, destination: action.payload };

      default:
         break
   }
};
