import NavBar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children, onSearch, setEmails, onEmailSelect, emails }) => {
    return (
        <div className="layout">
            <Sidebar onEmailSelect={onEmailSelect} emails={emails} />
            <div className="layout-content">
                <NavBar onSearch={onSearch} setEmails={setEmails} emails={emails} />
                <main className="main-content">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
