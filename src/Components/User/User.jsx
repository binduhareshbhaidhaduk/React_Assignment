import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth } from "../../../firebase";
import { DiBackbone } from "react-icons/di";
import { onAuthStateChanged } from "firebase/auth";

const User = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(DiBackbone, "users", user.uid);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setUserData(docSnap.data()); // Store the user data
        } else {
          console.log("No such document!");
        }
        setLoading(false);
      } else {
        console.log("User is not authenticated");
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (!userData) return <div>User not found</div>;

  return (
    <div className="user-page">
      <h1>User Information</h1>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Phone:</strong> {userData.phone}</p>
      {/* Add other user fields as needed */}
    </div>
  );
};

export default User;
