export const INITIAL_ERROR_STATE = {
   errType: "",
   errMessage: "",
};

const errReducer = (state, action) => {
   switch (action.type) {
      case "reset":
         return {
            errType: "",
            errMessage: "",
         };
      case "passwordError":
         return {
            errType: action.payload.errType,
            errMessage: action.payload.errMessage,
         };
      case "emailError":
         return {
            errType: action.payload.errType,
            errMessage: action.payload.errMessage,
         };

      default:
         break;
   }
};
export default errReducer;
