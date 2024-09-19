import { useState, createContext } from "react";
import { useContext } from "react";
const CategoryContext = createContext();


export const useCategory = () => useContext(CategoryContext);

export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [selectedCategorys, setSelectedCategorys] = useState(null);

   const setColor=(category)=>{
    setSelectedCategorys(category)
   }

  const setCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <CategoryContext.Provider value={{ selectedCategory, setCategory,selectedCategorys,setColor }}>
      {children}
    </CategoryContext.Provider>
  );
};
