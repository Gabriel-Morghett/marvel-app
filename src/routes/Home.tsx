import React, { useState } from 'react'
import Container from '../components/Container'
import SearchBar from '../components/SearchBar';
import Grid from '../components/Grid';

export default function Home() {

    const [heroes, setHeroes] = useState([])

    return (
        <Container>
            <SearchBar setter={setHeroes}/>
            <Grid>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Grid>
        </Container>
    );
}
