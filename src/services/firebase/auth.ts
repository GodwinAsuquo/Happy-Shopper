import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase-config";

interface User {
  email: string;
  password: string;
}

interface CreateUserResponse {
  user: User;
  error: string;
}

export const createUser = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<CreateUserResponse> => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      localStorage.setItem("user", JSON.stringify(user));
      return { user, error: null };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      const userExists = errorMessage.includes("email-already-in-use");
      if (userExists) {
        return { user: null, error: "User exists" };
      }
      return { user: null, error: errorMessage };
    });
};

export const signIn = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      localStorage.setItem("user", JSON.stringify(user));
      return { user, error: null };
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      const wrongCredentials = errorMessage.includes("wrong-password");
      const userNotFound = errorMessage.includes("user-not-found");
      if (wrongCredentials) {
        return { user: null, error: "User not found" };
      }
      if (userNotFound) {
        return { user: null, error: "Wrong credentials" };
      }
    });
};
