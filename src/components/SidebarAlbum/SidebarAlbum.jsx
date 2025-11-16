import React, { useState } from "react";
import {Sidenav, List, Loader, InputGroup, Input, Message} from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import '/src/assets/styles/sidebar.css'

const SidebarAlbum = ({ listOfAlbums, onSelect, onSearch, loading,error, selectedAlbumId }) => {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        onSearch?.(query.trim());
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSearch();
    };

    return (
        <Sidenav appearance="subtle">
            <Sidenav.Header>
                <h5 className="sidebar-title mb-4">📁 Albums</h5>

                <div className="search-container">
                    <InputGroup inside className="search-box">
                        <Input
                            placeholder="Search albums..."
                            value={query}
                            onChange={setQuery}
                            onKeyDown={handleKeyDown}
                            className="search-input"
                        />
                        <InputGroup.Button onClick={handleSearch} className="search-btn">
                            <SearchIcon />
                        </InputGroup.Button>
                    </InputGroup>
                </div>
            </Sidenav.Header>

            <Sidenav.Body>
                {error && (
                    <Message type="error" bordered showIcon className="mb-3">
                        {error}
                    </Message>
                )}

                {loading && (
                    <div className="loading-box">
                        <Loader size="md" content="Loading albums..." />
                    </div>
                )}

                {!loading && !listOfAlbums.length && (
                    <div className="no-results">
                        <p>😕 No albums found</p>
                    </div>
                )}

                {!loading && !!listOfAlbums.length && (
                    <List bordered hover className="album-list">
                        {listOfAlbums.map((album) => (
                            <List.Item
                                key={album.id}
                                onClick={() => onSelect(album.id)}
                                className={`album-item ${selectedAlbumId === album.id ? 'is-active' : ''}`}
                                role="button"
                                aria-current={selectedAlbumId === album.id ? 'true' : null}
                            >
                                {album.title}
                            </List.Item>
                        ))}
                    </List>
                )}
            </Sidenav.Body>
        </Sidenav>
    );
};

export default SidebarAlbum;
