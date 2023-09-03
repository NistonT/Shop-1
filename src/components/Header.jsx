import logo from '/Users/New/Desktop/store/shop/src/images/image 4.png';

const Header = () => {
    return (
        <div className=".header">
            <nav>
                <div className='nav1'>
                    <div className="logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="menu">
                        <h1>REACT SNEAKERS</h1>
                        <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <div className='nav2'>
                    <div className='cart'>
                        <img src="" alt="" />
                        <span>1205 руб.</span>
                    </div>
                    <div className='heart'>
                        <img src="" alt="" />
                    </div>
                    <div className='account'>
                        <img src="" alt="" />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;