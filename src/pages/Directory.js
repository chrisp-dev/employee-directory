import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import Wrapper from '../components/Wrapper';
import Container from '../components/Container';
import Row from '../components/Row';
import SearchForm from '../components/SearchForm';
import SearchResults from '../components/SearchResults';

function Directory() {
    const [users, setUsers] = useState([]);
    const [userSort, setUserSort] = useState({});
    const [search, setSearch] = useState("");

    useEffect(() => {
        API.getUsers().then(usersData => {
            const userData = usersData.results;
            setUsers(userData);
        });
    }, []);

    const handleInputChange = event => {
        setSearch(event.target.value);
    };
    return (
        <Wrapper>
            <h1 className="jumbotron text-center">Search User Directory</h1>
            <SearchForm search={search} handleInputChange={handleInputChange} />

            <SearchResults users={users}
                title="Employee Directory Results"
                description="Results"
                url=""
            />
        </Wrapper>
    )
}

export default Directory;