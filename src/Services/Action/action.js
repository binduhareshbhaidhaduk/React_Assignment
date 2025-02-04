import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { auth, provider ,db} from "../../../firebase";
import { getDocs, collection, setDoc, doc } from 'firebase/firestore';
import generateUniqueId from "generate-unique-id";



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

export const addBidSuc = () => ({
  type: 'ADD_BID_SUC',

});

export const viewBidSuc = (bids) => ({
  type: 'VIEW_BID_SUC',
  payload: bids,
});

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

export const addBids = (bids) => {
  bids.id = generateUniqueId({
    length: 4,
    useLetters: false,
  });

  return async (dispatch) => {
    try {
      await setDoc(doc(db, "bids", `${bids.id}`), bids);
      dispatch(addBidSuc(bids)); // Pass bids as payload
    } catch (e) {
      console.error("Error in addBids: ", e);
    }
  };
};

export const readBids = () => {
  return async (dispatch) => {
    try {
      const bids = [];
      const querySnapshot = await getDocs(collection(db, "bids"));
      querySnapshot.forEach((doc) => {
        bids.push({ id: doc.id, ...doc.data() });
      });
      dispatch(viewBidSuc(bids));
    } catch (error) {
      console.error("Error in readBids: ", error);
    }
  };
};