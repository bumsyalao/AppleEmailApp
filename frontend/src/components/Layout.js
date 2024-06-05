import NavBar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children, onSearch, setEmails, onEmailSelect }) => {
    return (
        <div className="layout">
            <Sidebar onEmailSelect={onEmailSelect} />
            <div className="layout-content">
                <NavBar onSearch={onSearch} setEmails={setEmails} />
                <main className="main-content">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
