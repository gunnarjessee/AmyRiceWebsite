import { Link, useMatch, useResolvedPath } from 'react-router-dom';
export default function NavBar() {
    return (
        <nav className="nav">

            <Link to="/" className="siteTitle">Amy Rice</Link>
            <ul>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/about">About</ActiveLink>

                {
                    // this will not have an active feature, at least not yet
                }
                <li className="getaquote">
                    <Link to="/getaquote">
                        Get a Quote
                    </Link>
                </li>
            </ul>

        </nav>
    );
}

function ActiveLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true} )
    return (
        <li className={ isActive ? "active"  : ""}>
            <Link to={to}>
                {children}
            </Link>
        </li>

    );
}