import React, { Fragment } from "react";
import './MenuBar.css';

function MenuBar(props)
{
    function handleButtonClick(buttonName)
    {
        props.sendButtonName(buttonName);
    }

    return(
        <Fragment>
            <div className="menus">
                <button onClick={()=>{handleButtonClick("new")}}>New Stories</button>
                <button onClick={()=>{handleButtonClick("top")}}>Top Stories</button>
                <button onClick={()=>{handleButtonClick("best")}}>Best Stories</button>
                {/* <button id="loginButton">Login</button> */}
            </div>
        </Fragment>
        
        
    );
}

export default MenuBar;