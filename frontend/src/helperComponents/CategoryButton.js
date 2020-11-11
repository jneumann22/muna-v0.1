import React from 'react'
import { useState } from 'react'
import {GrAdd} from 'react-icons/gr'
import {BsListTask} from 'react-icons/bs'
import { useSpring, animated as a } from 'react-spring'
import Styles from '../styles/catButton.css'

export default function CategoryButton(props) {
    // console.log("WE GOT DA PROPS", props)
    const [isOpen, setOpen] = useState(false);
    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(100px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
      })

     let btnClass = props.number

      let toggleModal = props.openModal
      let setCategory = props.setCategory
     

    return (
        <div className = {Styles.holder} onMouseEnter={() => { set(flipped => true); setCategory(props.category)}} onMouseLeave={() => set(flipped => false)} >
            <a.div className={`${btnClass} ${Styles.c}`} style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
           
            </a.div>
            <a.div className={`${Styles.back} ${Styles.c}`} style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(-180deg)`) }}>
                <div className = {Styles.buttonHolder}>
                    <div className = {Styles.buttonAlign}>
                <GrAdd className = {Styles.add} onClick = {toggleModal}/>
                <p className = {Styles.buttonText}>add item</p>
                </div>
                <div className = {Styles.buttonAlign}>
                <BsListTask className = {Styles.list}/>
                <p className = {Styles.buttonText}>my list</p>
                </div>
                </div>
                <div className={Styles.heading}>
                    {props.name}
                </div>
             </a.div>
        </div>
    )
}
