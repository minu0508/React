import React, { useState } from "react";

function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    const increasCount = () => setCount((count) => count + 1);
    const decreasCount = () => setCount((count) => Math.max(count - 1, 0));
    
    return [count, increasCount, decreasCount];
}

export default useCounter;