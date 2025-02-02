const initialState = {
    isSubmit: false,
    loading: false,
    error: null,
    isSignUp: false,
    user: null,
    isLogin: false,
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
  
      case 'SIGNUP_SUC':
        return {
          ...state,
          isSignUp: true,
          user: action.payload,
          error: null
        };
  
        case 'SIGNOUT':
          return {
            ...state,
            isLogin: false,
            isSignUp: false,
            user: null,
          };
  
      case 'LOGIN_SUC':
        return {
          ...state,
          isLogin: true,
          user: action.payload,
          error: null,
        };
  
      case 'GOOGLE_LOGIN_SUC':
        return {
          ...state,
          isLogin: true,
          user: action.payload,
          error: null
        }
  
      default:
        return state;
    }
  }
  
  export default reducer;
  