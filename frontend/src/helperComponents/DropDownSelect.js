import React from "react";



function DropDownSelect(props)  {
    return (
    <div>
        <select name = "category" onChange={props.handleChange} >
            <option value="" disabled selected>Select a Category</option>
            <option value = "Shirts/Blouses">Shirts/Blouses</option>
            <option value = "Legs/Pants">Legs/Pants</option>
            <option value = "Athleisure">Athleisure</option>
            <option value = "Swimwear">Swimwear</option>
            <option value = "Casual">Casual</option>
            <option value = "Fancy">Fancy </option>
            <option value = "Sleepwear">Sleepwear</option>
            <option value = "Warm & Comfy">Warm & Comfy</option>


        </select>
    </div>
    )};

export default DropDownSelect;