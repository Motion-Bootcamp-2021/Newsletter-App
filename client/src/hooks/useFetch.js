import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data);
            })
            .catch(e => console.error(e));
    }, [url]);

    return data;
}

export default useFetch;