// src/context/StoreContext.jsx
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [stores, setStores] = useState([]);

    const addStore = async (storeName) => {
        try {
            const response = await fetch('/stores', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: 0, name: storeName, location: '' }),
            });

            if (response.ok) {
                const newStore = await response.json();
                setStores([...stores, newStore]);
            } else {
                console.error('Failed to add store');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <StoreContext.Provider value={{ stores, addStore }}>
            {children}
        </StoreContext.Provider>
    );
};

StoreProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
