import { useEffect, useState } from "react";

const AppHealth = () => {
    const [health, setHealth] = useState(null);
    
    useEffect(() => {
        fetchHealth();
    }, []);

    const fetchHealth = async () => {
        try {
            const response = await fetch('/api');
            const data = await response.json();
            setHealth(data.message);
        } catch (error) {
            console.error('Error fetching health:', error);
        }
    };

    return (
        <div>
            <h1>{health}</h1>
        </div>
    );
};

export default AppHealth;