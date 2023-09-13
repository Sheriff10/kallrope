export const logoutDriver = () => {
   window.sessionStorage.removeItem("driverAuthToken");
   window.location.href = "/driver/login";
};

export const logoutAdmin = () => {
   window.sessionStorage.removeItem("adminAuthToken");
   window.location.href = "/admin/login";
};

export const logoutUser = () => {
   window.sessionStorage.removeItem("userAuthToken");
   window.location.href = "/auth/user/login";
};
