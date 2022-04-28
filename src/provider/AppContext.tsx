import React, { createContext, useState, useEffect } from 'react';
//import { getProducts } from "../services/getProductsApi";
import localProducts from "../services/localProducts.json";
//import axios from "axios";

const AppContext = createContext<any>({});

const AppContextProvider = ({ children }: any) => {
  const [product, setProduct] = useState<any>({});
  
  const [lang, setLang] = useState({
    current: "pt_BR",
    default: "pt_BR",
    langs: [
        'pt_BR',
        'en_GB',
        'en_US',
        'es_AR',
        'es_ES',
        'fr_FR',
        'ru_RU',
        'th_TH'
      ]
  });
  
  useEffect(() => {
    (async () => {
      try{
        /*const response = await axios.get("https://jacto.com/api/v1/products/132", {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
          }
        });*/
        await setProduct(localProducts);
      }catch(e){
        console.log(e);
      }
    })();
  }, []);
  
  return(
    <AppContext.Provider
      value={{
       product,
       setProduct,
       lang,
       setLang
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useProduct = () => React.useContext(AppContext);

export { AppContextProvider, useProduct }
export default AppContext