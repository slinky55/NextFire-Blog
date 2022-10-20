import { auth, firestore } from './firebase';
import { doc, onSnapshot, collection, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

// Custom hook to read  auth record and user profile doc
export function useUserData() {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    let unsubscribe;

    if (user) {
        unsubscribe = onSnapshot(doc(firestore, "users", user.uid), (doc) => {
            setUsername(doc.data()?.username);
        });
    } else {
      setUsername(null);
    }

    return unsubscribe;
  }, [user]);

  return { user, username };
}