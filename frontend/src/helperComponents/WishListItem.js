import React from "react";
import Styles from '../styles/wishList.css'



export default function WishListItem(props) {
    function getString (arr) {
        var final = ''
      for (var i = 0; i<arr.length; i++) {
        if (i === arr.length -1) {
          let tag = `#${arr[i]}`
          final = final.concat(tag)
        } else {
           let tag = `#${arr[i]}, `
           final = final.concat(tag)
        }
      }
    
      return final;
    }

    const formatDate = (dateString) => {
        const options = { year: "numeric", month: "long", day: "numeric" }
        return new Date(dateString).toLocaleDateString(undefined, options)
      }


    return (
        <div className = {Styles.holder_background}>
            <div className = {Styles.title}>
                {props.item.name}
            </div>

            <div className = {Styles.tags} >
                Tags: {getString(props.item.tags)}
            </div>

            <div className = {Styles.date}>
                Added: {formatDate(props.item.createdAt)}
            </div>




        </div>
    )
}

