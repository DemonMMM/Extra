import React, { useContext, useState } from "react";
import { themeContext } from "./Mobile";
import useFetch from "./useFetch";

const ThemeChange = () => {
    const toggleTheme = useContext(themeContext);
    const { fetchdata, error } = useFetch('https://api.github.com/users');
    const [state, setState] = useState(false);



    const HandleFetch = () => {
        setState(true);
    }

    return (
        <div>
            <button onClick={toggleTheme}>Change</button>
            <button onClick={HandleFetch}>Fetch</button>
            <div>
                <ul>
                    {state ? fetchdata.map((user,index) => {
                        return <li id={user.id}><a href={user.html_url} target="_blank">{user.login}</a></li>
                    }) :<></>}
                </ul>
            </div>
        </div>
    );
}

export default ThemeChange;