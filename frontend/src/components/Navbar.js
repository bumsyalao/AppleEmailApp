import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, InputBase, Dialog } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import ComposeEmail from './ComposeEmail';

const NavBar = ({ onSearch, setEmails, emails }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchVisible, setSearchVisible] = useState(false);
    const [isComposing, setIsComposing] = useState(false);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    // const handleSendEmail = async (newEmail) => {
    //     setEmails((prevEmails) => [...prevEmails, newEmail]);
    //     setIsComposing(false);
    // };

    const handleSendEmail = async (newEmail) => {
        setEmails([...emails, newEmail]);
        setIsComposing(false);
    };

    return (
        <AppBar position="static" style={{ backgroundColor: '#1c1c1e' }}>
            <Toolbar>
                <div style={{ flexGrow: 1 }} />
                <IconButton className='icon-button' color="inherit" onClick={() => setIsComposing(true)}>
                    <MailIcon />
                </IconButton>
                {searchVisible ? (
                    <div className="search-container">
                        <SearchIcon className="search-icon" onClick={() => setSearchVisible(!searchVisible)} />
                        <InputBase
                            placeholder="Search…"
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="search-input"
                        />
                    </div>
                ) : (
                    <>
                        <IconButton className='icon-button' color="inherit" onClick={() => setSearchVisible(!searchVisible)}>
                            <SearchIcon />
                        </IconButton>
                    </>
                )}
            </Toolbar>
            <Dialog open={isComposing} onClose={() => setIsComposing(false)}>
                <ComposeEmail onClose={() => setIsComposing(false)} onSend={handleSendEmail} />
            </Dialog>
        </AppBar>
    );
};

export default NavBar;
