export const setToLocalStorage = (key: string, token: string) => {
  if (typeof window !== "undefined" && key) {
    localStorage.setItem(key, token);
  }
};

export const getFromLocalStorage = (key: string) => {
  if (typeof window !== "undefined" && key) {
    return localStorage.getItem(key);
  }
  return null;
};

export const removeFromLocalStorage = (key: string) => {
  if (typeof window !== "undefined" && key) {
    localStorage.removeItem(key);
  }
};



// export const setToLocalStorage = (key: string, token: string) => {
//   if (!key || typeof window === "undefined") {
//     return "";
//   }
//   return localStorage.setItem(key, token);
// };

// export const getFromLocalStorage = (key: string) => {
//   if (!key || typeof window === "undefined") {
//     return "";
//   }
//   return localStorage.getItem(key);
// };

// export const removeFromLocalStorage = (key: string) => {
//   if (!key || typeof window === "undefined") {
//     return "";
//   }
//   return localStorage.removeItem(key);
// };
