export const addUserToLocalStorage = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
  };
  
  export const removeUserFromLocalStorage = () => {
    localStorage.removeItem('user');
  };
  
export const getUserFromLocalStorage = () => {
    try {
      const result = localStorage.getItem('user');
      return result ? JSON.parse(result) : null;
    } catch (error) {
      console.error('Error parsing user data from localStorage:', error);
      return null;
    }
  };
  