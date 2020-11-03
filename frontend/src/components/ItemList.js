import React from "react"
import logo from "../../assets/muna2.png"
import Styles from "../styles/itemList.css"


class ItemList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

    }


    render() {
        return (
            <div className={Styles.componentHolder}>
                <div>
                    <img className={Styles.logo} src={logo}/>
                </div>

                <div className ={Styles.header}>
                    MunaList
                </div>






            </div>
        )
    }


}


export default ItemList