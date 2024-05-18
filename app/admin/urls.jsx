import React, { useState, useEffect } from 'react';

export default function Urls() {
    const [name, setName] = useState('');
    const [storedName, setStoredName] = useState('');

    const handleUpload = async () => {
        localStorage.setItem('urls', name);
        setStoredName(name); // Update the state to reflect the new stored value
    }

    useEffect(() => {
        const names = localStorage.getItem('urls');
        if (names) {
            setStoredName(names);
        }
    }, []); 

    return (
        <div>
            <div className="form text-center mt-5">
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                />
                <button onClick={handleUpload} className="button">Save</button>
                <p>{storedName}</p>
            </div>
        </div>
    );
}

