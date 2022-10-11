import { createContext, useContext, useState } from "react";
import { storage } from "../firebase/firebase-config";
import { toast } from "react-toastify";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { saveItem } from "../Utils/firebaseData";
import { useStateValue } from "./StateProvider";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const { fetchData } = useStateValue();

  const [title, setTitle] = useState("");
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [imgAssest, setImgAssest] = useState(null);
  const [qty, setQTY] = useState("");

  //Submiting All the Data
  const formSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!title || !calories || !price || !imgAssest || !category || !qty) {
        setIsLoading(false);
        toast.error("Please fill all the fields..");
      } else {
        const data = {
          id: `${Date.now()}`,
          title: title,
          imageURL: imgAssest,
          category: category,
          calories: calories,
          qty: qty,
          price: price,
        };

        saveItem(data);

        setIsLoading(false);
        toast.success("Food data uploaded sucessfully");
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }

    fetchData();

    setCalories("");
    setCategory("");
    setImgAssest(null);
    setPrice("");
    setTitle("");
    setQTY("");
  };

  //Uploading Image
  const uploadImage = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);

    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {
        toast.error("Something went wrong. Try again!");
        setTimeout(() => {
          toast.dismiss();
        }, 4000);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setImgAssest(downloadUrl);
          setIsLoading(false);
          toast.success("Image uploaded successfully!!");
        });
      }
    );
  };

  //Delete Image
  const deleteImage = () => {
    setIsLoading(true);
    const deletRef = ref(storage, imgAssest);

    deleteObject(deletRef).then(() => {
      setImgAssest(null);
      setIsLoading(false);
      toast.success("Image deleted successfully!");
    });
  };

  return (
    <FormContext.Provider
      value={{
        setCalories,
        setCategory,
        setPrice,
        setTitle,
        setIsLoading,
        formSubmit,
        setImgAssest,
        uploadImage,
        deleteImage,
        isLoading,
        imgAssest,
        price,
        category,
        calories,
        title,
        qty,
        setQTY,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
