import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "./reducer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { getAllFoodItems } from "../Utils/firebaseData";

export const StateContext = createContext();

const tempdata = () => {
  const userInfo =
    localStorage.getItem("foodMarketPlace") !== "undefined"
      ? JSON.parse(localStorage.getItem("foodMarketPlace"))
      : localStorage.clear();

  return userInfo;
};

const initialState = {
  user: tempdata(),
  foodItems: null,
};

export const StateProvider = ({ children }) => {
  const navigate = useNavigate();

  const [state, dispatch] = useReducer(reducer, initialState);
  const [show, setShow] = useState(false);

  //Login User
  const loginUser = async () => {
    if (!state.user) {
      const provider = new GoogleAuthProvider();

      const {
        user: { providerData },
      } = await signInWithPopup(auth, provider);
      dispatch({ type: "SET-USER", payload: providerData[0] });

      localStorage.setItem("foodMarketPlace", JSON.stringify(providerData[0]));

      toast.success("Successfully Login!");
      navigate("/");
    } else {
      setShow(true);
    }
  };

  //Logout user
  const logoutUser = async () => {
    await signOut(auth)
      .then(() => {
        localStorage.clear();
        setShow(false);
        toast.success("you have Logout Successfully!");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  //fetch data
  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({ type: "GET-FOOD", payload: data });
    });
  };

  return (
    <StateContext.Provider
      value={{ ...state, loginUser, show, logoutUser, setShow, fetchData }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
