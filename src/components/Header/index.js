import React from "react";

const style = {
    headerDiv: {
        margin: 'auto',
        backgroundColor: "navy",
        borderBottom: "5px red solid",
        width: '75%'
    },
    h1: {
        textAlign: "center",
        color: "white"
    }
}


function Header() {
    return (
        <div style={style.headerDiv}>
            <h1 style={style.h1}>Employee List</h1>
        </div>
    )
}

export default Header;