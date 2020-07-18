import React from "react";
import UserBody from "../UserBody/index"

const style = {
    container: {
        margin: 'auto'
    }
}

function Main() {
    return (
        <div className="container">
            <div className ="row">
                <div className="col-md-12">
                    <UserBody />
                </div>
            </div>
        </div>
    )
}

export default Main;