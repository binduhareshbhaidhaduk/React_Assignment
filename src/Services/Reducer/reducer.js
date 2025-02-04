const initialState = {
  bids: [],
  bid: null,
  isSubmit: false,
  loading: false,
  error: null,
  isSignUp: false,
  user: null,
  isLogin: false,
};

function reducer(state = initialState, action) {
  console.log("Reducer Action:", action); // Debugging log

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
      };

    case 'ADD_BID_SUC':
      console.log("Adding bid:", action.payload); // Debugging log
      return {
        ...state,
        bids: [...state.bids, action.payload], // Append new bid
        isSubmit: true,
        loading: false,
        error: null
      };

    case 'VIEW_BID_SUC':
      console.log("Viewing bids:", action.payload); // Debugging log
      return {
        ...state,
        bids: Array.isArray(action.payload) ? action.payload : state.bids, // Ensure payload is an array
        isSubmit: false,
        error: null
      };

    default:
      return state;
  }
}

export default reducer;
