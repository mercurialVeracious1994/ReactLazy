import React, {useEffect} from 'react';
import {loadScript} from "../utility/prefetchThirdPartyFiles";
const Articles =()=>{
    useEffect(() => {

        loadScript({src:"https://code.jquery.com/jquery-3.7.1.min.js"}).then(
            //code for Jquery usage goes here
        )
    }, []);
    return (
        <h1 className="articles-heading">Articles are being rendered</h1>
    )
}
export default Articles;