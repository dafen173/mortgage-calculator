import { Link, Outlet } from 'react-router-dom'


export const Layout = () => {
    return (
        <>
            <header>
                <Link to='/'>Banks</Link>
                <Link to='/groups'>Mortgage calculator</Link>
            </header>

            <Outlet />

            <footer className="container">Mortgage calculator 2022</footer>
        </>
        
    )
}


