import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { auth, provider } from "../../../firebase";



export const signUpSuc =(user)=>{
    return {
        type: 'SIGNUP_SUC',
        payload: user
      }
}
export const loginSuc = (user) => ({
  type: 'LOGIN_SUC',
  payload: user,
});

export const SignOutSuc=()=>{
  return {
    type:'SIGNOUT',
  }
}

export const googleLogInSuc = (user) => {
  return {
    type: 'GOOGLE_LOGIN_SUC',
    payload: user
  }
}

export const signUp = (email, password) => {
    return (dispatch) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(signUpSuc(user));
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, 'errorcode', errorMessage, 'err messsage')
        });
  
    }
}

export const Login = (email, password) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(loginSuc(user)); // Dispatch success action
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Login failed:', errorCode, errorMessage);
      });
  };
};


export const googleLogIn = () => {
  console.log("hello...",auth, provider); 
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("User signed in: ", user);
        dispatch(googleLogInSuc(user))

      })
      .catch((error) => {
        console.error("Error signing in: ", error);
      });
  }
}

export const SignOut =()=>{
  return (dispatch) => {
    signOut(auth)
    .then(() => {
      dispatch(SignOutSuc())
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, 'errorcode', errorMessage, 'err messsage')
        });
      }
}


