import { useState, useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const AddStoreComponent = () => {
    const [storeName, setStoreName] = useState('');
    const { addStore } = useContext(StoreContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addStore(storeName);
        setStoreName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Store Name:
                <input
                    type="text"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                />
            </label>
            <button type="submit">Add Store</button>
        </form>
    );
};

export default AddStoreComponent;
