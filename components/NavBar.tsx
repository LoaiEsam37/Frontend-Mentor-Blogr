import styles from "@/styles/NavBar.module.scss"
import { useState } from "react"

export default function NavBar() {
    const [activeDropDown, setActiveDropDown] = useState(0)
    const [openMenu, setOpenMenu] = useState(false)
    return (
        <header className={styles.header}>
            <div className={styles.leftSide}>
                <div className={styles.brand}>
                    <h1>Blogr</h1>
                </div>
            </div>
            <div className={styles.rightSide}>
                <div
                    className={`${styles.menuToggler} ${
                        openMenu && styles.open
                    }`}
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div
                    className={`${styles.wrapper} ${openMenu && styles.opened}`}
                >
                    <nav>
                        <div
                            className={`${styles.dropDown} ${
                                activeDropDown == 1 && styles.active
                            }`}
                        >
                            <div
                                className={styles.dropDownToggler}
                                onClick={() =>
                                    setActiveDropDown(
                                        activeDropDown == 1 ? 0 : 1
                                    )
                                }
                            >
                                Product
                            </div>
                            <div className={styles.dropDownItems}>
                                <span>Overview</span>
                                <span>Pricing</span>
                                <span>Marketplace</span>
                                <span>Features</span>
                                <span>Integrations</span>
                            </div>
                        </div>
                        <div
                            className={`${styles.dropDown} ${
                                activeDropDown == 2 && styles.active
                            }`}
                        >
                            <div
                                className={styles.dropDownToggler}
                                onClick={() =>
                                    setActiveDropDown(
                                        activeDropDown == 2 ? 0 : 2
                                    )
                                }
                            >
                                Company
                            </div>
                            <div className={styles.dropDownItems}>
                                <span>About</span>
                                <span>Team</span>
                                <span>Blog</span>
                                <span>Careers</span>
                            </div>
                        </div>
                        <div
                            className={`${styles.dropDown} ${
                                activeDropDown == 3 && styles.active
                            }`}
                        >
                            <div
                                className={styles.dropDownToggler}
                                onClick={() =>
                                    setActiveDropDown(
                                        activeDropDown == 3 ? 0 : 3
                                    )
                                }
                            >
                                Connect
                            </div>
                            <div className={styles.dropDownItems}>
                                <span>Contact</span>
                                <span>Newsletter</span>
                                <span>LinkedIn</span>
                            </div>
                        </div>
                    </nav>
                    <div className={styles.auth}>
                        <span className={styles.login}>Login</span>
                        <span className={styles.signup}>Sign Up</span>
                    </div>
                </div>
            </div>
        </header>
    )
}
