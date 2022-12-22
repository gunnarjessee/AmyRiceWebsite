import { Link, useMatch, useResolvedPath } from 'react-router-dom';
export default function NavBar() {
    return (
        <nav className="nav">

            <Link to="/" className="siteTitle">Amy Rice</Link>
            <ul>
                <ActiveLink to="/">Home</ActiveLink>
                <ActiveLink to="/about">About</ActiveLink>

            </ul>

        </nav>
    );
}

function ActiveLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true} )
    return (
        <li className={ isActive ? "active" : ""}>
            <Link to={to}>
                {children}
            </Link>
        </li>

    );
}