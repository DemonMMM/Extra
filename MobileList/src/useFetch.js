import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [fetchdata, setFetchdata] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetch() {
            try {
                const response = await axios.get(url);
                const result = response.data;
                setFetchdata(result);
            }
            catch (err) {
                setError(err);
            }
        }
        fetch();
    },[url]);
    return {fetchdata, error};
}

export default useFetch;