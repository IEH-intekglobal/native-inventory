import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export async function registerUser(email, password) {
  const auth = getAuth();

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorMessage);
  }
}

export async function logIn(email, password) {
  const auth = getAuth();

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorMessage);
  }
}

export async function logOut() {
  const auth = getAuth();

  try {
    await signOut(auth);
  } catch (error) {
    console.error(error);
  }
}
