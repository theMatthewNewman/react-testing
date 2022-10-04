import styles from "./Navbar.module.scss";
import { useState } from "react";
import {motion} from "framer-motion";
import menu from "../../images/menu.png";
import x from "../../images/x.png";



function Navbar(props:any) {
    const [active, setActive] = useState(false)
    const [width, setWidth] = useState('50px')

    const activate = () => {
        setWidth('100%')
        setTimeout(() => setActive(true),100)
    }

    const deActivate = () => {
        setActive(false)
        setWidth('50px')
    }

    return ( 
        <motion.div className={styles.all}
                    animate={{
                        opacity:1,
                        width:width,
                    }}>
            {active? <div className={styles.center}>{props.children}</div>:null}
            <div className={styles.header}>
                {active? <img src={x} alt="menu" onClick={deActivate} className={styles.menuIcon}/>
                        :<img src={menu} alt="menu" onClick={activate} className={styles.menuIcon}/>}
            </div>
            
        </motion.div>
     );
}

export default Navbar;