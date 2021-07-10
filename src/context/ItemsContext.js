import React, { createContext, useState, useEffect } from "react";

export const ItemsContext = createContext([]);

export const ItemsProvider = ({children}) => {
    const [itemsDatabase, setItemsDatabase] = useState([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/1cd48680-a01d-4613-9412-ef82a88839a1')
            .then(response => response.json())
            .then(json => setItemsDatabase(json))
    }, []);
    
    return <ItemsContext.Provider value={[itemsDatabase, setItemsDatabase]}>
        {children}
    </ItemsContext.Provider>;
}