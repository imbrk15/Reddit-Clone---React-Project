import React from 'react'
import '../../styles/sidebar.css'
import { faHouse, faCircleArrowUp, faGamepad, faBaseball, faMoneyBillTrendUp, faTv, faStar, faEllipsis, faBitcoinSign } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Sidebar() {
    return (
        <>
            <div className='main'>
                <div className="feeds">
                    <p style={{ fontSize: 14 }}>FEEDS</p>
                    <div style={{ marginBottom: 10 }}>
                        <FontAwesomeIcon icon={faHouse} />
                        <span style={{ paddingLeft: 5 }}>Home</span>
                    </div>
                    <div style={{ marginBottom: 10 }} >
                        <FontAwesomeIcon icon={faCircleArrowUp} />
                        <span style={{ paddingLeft: 5 }}>Popular</span>
                    </div>
                </div>
                <div className="topics" style={{ marginTop: 20 }}>
                    <p style={{ fontSize: 14 }}>TOPICS</p>
                    <div className='topicsMenu'>
                        <div><FontAwesomeIcon icon={faGamepad} /></div>
                        <div style={{ paddingLeft: 5 }}>
                            <NavDropdown title="Gaming" id="navbarScrollingDropdown">
                                <NavDropdown.Item>Valheim</NavDropdown.Item>
                                <NavDropdown.Item>Genshin Impact</NavDropdown.Item>
                                <NavDropdown.Item>Minecraft</NavDropdown.Item>
                                <NavDropdown.Item>Pokimane</NavDropdown.Item>
                                <NavDropdown.Item>Halo Infinite</NavDropdown.Item>
                                <NavDropdown.Item>Call of Duty: Warzone</NavDropdown.Item>
                                <NavDropdown.Item>Path of Exile</NavDropdown.Item>
                                <NavDropdown.Item>Hollow Knight: silksong</NavDropdown.Item>
                                <NavDropdown.Item>Escape from tarkov</NavDropdown.Item>
                                <NavDropdown.Item>Watch Dogs: Legion</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </div>
                    <div className='topicsMenu'>
                        <div><FontAwesomeIcon icon={faBaseball} /></div>
                        <div style={{ paddingLeft: 10 }}>
                            <NavDropdown title="Sports" id="navbarScrollingDropdown">
                                <NavDropdown.Item>NFL</NavDropdown.Item>
                                <NavDropdown.Item>NBA</NavDropdown.Item>
                                <NavDropdown.Item>Megan Anderson</NavDropdown.Item>
                                <NavDropdown.Item>Atlanta Hawks</NavDropdown.Item>
                                <NavDropdown.Item>Los Angeles Lakers</NavDropdown.Item>
                                <NavDropdown.Item>Boston Celtics</NavDropdown.Item>
                                <NavDropdown.Item>Arsenal F.C.</NavDropdown.Item>
                                <NavDropdown.Item>Philadelphia 76ers</NavDropdown.Item>
                                <NavDropdown.Item>Premier League</NavDropdown.Item>
                                <NavDropdown.Item>UFC</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </div>
                    <div className='topicsMenu'>
                        <div><FontAwesomeIcon icon={faMoneyBillTrendUp} /></div>
                        <div style={{ paddingLeft: 5 }}>
                            <NavDropdown title="Business" id="navbarScrollingDropdown">
                                <NavDropdown.Item>GameStop</NavDropdown.Item>
                                <NavDropdown.Item>Moderna</NavDropdown.Item>
                                <NavDropdown.Item>Pfizer</NavDropdown.Item>
                                <NavDropdown.Item>Jhonson & Jhonson</NavDropdown.Item>
                                <NavDropdown.Item>AstraZeneca</NavDropdown.Item>
                                <NavDropdown.Item>Walgreens</NavDropdown.Item>
                                <NavDropdown.Item>Best Buy</NavDropdown.Item>
                                <NavDropdown.Item>Novavax</NavDropdown.Item>
                                <NavDropdown.Item>SpaceX</NavDropdown.Item>
                                <NavDropdown.Item>Tesla</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </div>
                    <div className='topicsMenu'>
                        <div><FontAwesomeIcon icon={faBitcoinSign} /></div>
                        <div style={{ paddingLeft: 5 }}>
                            <NavDropdown title="Crypto" id="navbarScrollingDropdown">
                                <NavDropdown.Item>Cardano</NavDropdown.Item>
                                <NavDropdown.Item>Dogecoin</NavDropdown.Item>
                                <NavDropdown.Item>Algorand</NavDropdown.Item>
                                <NavDropdown.Item>Bitcoin</NavDropdown.Item>
                                <NavDropdown.Item>Litecoin</NavDropdown.Item>
                                <NavDropdown.Item>Basic Attention Token</NavDropdown.Item>
                                <NavDropdown.Item>Bitcoin Cash</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </div>
                    <div className='topicsMenu'>
                        <div><FontAwesomeIcon icon={faTv} /></div>
                        <div style={{ paddingLeft: 5 }}>
                            <NavDropdown title="Television" id="navbarScrollingDropdown">
                                <NavDropdown.Item>The Bachelors</NavDropdown.Item>
                                <NavDropdown.Item>Sister Wives</NavDropdown.Item>
                                <NavDropdown.Item>90 Day Fiance</NavDropdown.Item>
                                <NavDropdown.Item>Wife Swap</NavDropdown.Item>
                                <NavDropdown.Item>Married at First Sight</NavDropdown.Item>
                                <NavDropdown.Item>My 600-lb Life</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </div>
                    <div className='topicsMenu'>
                        <div><FontAwesomeIcon icon={faStar} /></div>
                        <div style={{ paddingLeft: 5 }}>
                            <NavDropdown title="Celebrity" id="navbarScrollingDropdown">
                                <NavDropdown.Item>Kim Kardashian</NavDropdown.Item>
                                <NavDropdown.Item>Doja Cat</NavDropdown.Item>
                                <NavDropdown.Item>Iggy Azalea</NavDropdown.Item>
                                <NavDropdown.Item>Anya taylor-joy</NavDropdown.Item>
                                <NavDropdown.Item>Jamie Lee Curtis</NavDropdown.Item>
                                <NavDropdown.Item>Natalie Portman</NavDropdown.Item>
                                <NavDropdown.Item>Henry Cavil</NavDropdown.Item>
                                <NavDropdown.Item>Milli Bobby Brown</NavDropdown.Item>
                                <NavDropdown.Item>Tom Hiddleston</NavDropdown.Item>
                                <NavDropdown.Item>Kenu Reeves</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </div>
                    <div className='topicsMenu'>
                        <div><FontAwesomeIcon icon={faEllipsis} /></div>
                        <div style={{ paddingLeft: 5 }}>
                            <NavDropdown title="More Topics" id="navbarScrollingDropdown">
                                <NavDropdown.Item>Animal and Pets</NavDropdown.Item>
                                <NavDropdown.Item>Anime</NavDropdown.Item>
                                <NavDropdown.Item>Art</NavDropdown.Item>
                                <NavDropdown.Item>Cars and Motor Vehicles</NavDropdown.Item>
                                <NavDropdown.Item>Craft and DIY</NavDropdown.Item>
                                <NavDropdown.Item>Fashion</NavDropdown.Item>
                                <NavDropdown.Item>Food and Drink</NavDropdown.Item>
                                <NavDropdown.Item>History</NavDropdown.Item>
                                <NavDropdown.Item>Hobbies</NavDropdown.Item>
                                <NavDropdown.Item>Military</NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='sidebarDown'>
                    <p>Create an account to follow</p>
                    <p>your favorite communities</p>
                    <p>and start taking part in</p>
                    <p>conversations.</p>
                </div>
                <div className="btnSidebar">
                    <button>Join Reddit</button>
                </div>
            </div>
        </>
    )
}
