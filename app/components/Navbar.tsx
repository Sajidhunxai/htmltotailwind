'use client';

const Navbar = () => {
    return ( 
 
        // <!-- Header -->
        <header id="header" className="alt">
            <h1><a href="index.php">SquareNet Media</a></h1>
            <nav id="nav">
                <ul>
                    <li className="special">
                        <a href="#menu" className="menuToggle"><span>Menu</span></a>
                        <div id="menu">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="#">Sign Up</a></li>
                                <li><a href="#">Log In</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>

        
    );
}
 
export default Navbar;