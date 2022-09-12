import React, { useState, useEffect, useRef } from "react";

function Message({name}) {

    const [ state, setState ] = useState(0);
    console.log(state);


    return (
        <div>
            Привет, {name}
        </div>
    );
}

export default Message;