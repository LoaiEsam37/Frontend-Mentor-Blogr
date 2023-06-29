import styles from "./NavBar.module.scss"
import { useState } from "react"

export default function NavBar() {
    const [productDropDown, setProductDropDown] = useState(false)
    const [companyDropDown, setCompanyDropDown] = useState(false)
    const [connectDropDown, setConnectDropDown] = useState(false)
    return (
        <header>
            <div className={styles.brand}>
                <h1>Blogr</h1>
            </div>
            <nav>
                <div className={styles.dropDown}>
                    <div
                        className={styles.dropDownToggler}
                        onClick={() => setProductDropDown(!productDropDown)}
                    >
                        Product
                    </div>
                    <div
                        className={`${styles.dropDownItems} ${
                            productDropDown && styles.visible
                        }`}
                    >
                        <span>Overview</span>
                        <span>Pricing</span>
                        <span>Marketplace</span>
                        <span>Features</span>
                        <span>Integrations</span>
                    </div>
                </div>
                <div className={styles.dropDown}>
                    <div
                        className={styles.dropDownToggler}
                        onClick={() => setCompanyDropDown(!companyDropDown)}
                    >
                        Company
                    </div>
                    <div
                        className={`${styles.dropDownItems} ${
                            productDropDown && styles.visible
                        }`}
                    >
                        <span>About</span>
                        <span>Team</span>
                        <span>Blog</span>
                        <span>Careers</span>
                    </div>
                </div>
                <div className={styles.dropDown}>
                    <div
                        className={styles.dropDownToggler}
                        onClick={() => setConnectDropDown(!connectDropDown)}
                    >
                        Connect
                    </div>
                    <div
                        className={`${styles.dropDownItems} ${
                            productDropDown && styles.visible
                        }`}
                    >
                        <span>Contact</span>
                        <span>Newsletter</span>
                        <span>LinkedIn</span>
                    </div>
                </div>
            </nav>
            <div className={styles.authentication}></div>
        </header>
    )
}
