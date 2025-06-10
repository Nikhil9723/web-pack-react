import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    const buttonText = `Count ${count}`;

    return <button onClick={handleClick}>{buttonText}</button>;
}
export default Counter;
