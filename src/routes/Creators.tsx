import React, { useState } from 'react'

import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import Grid from "../components/Grid";
import Card from "../components/Card";

const IMAGE_SIZE = "portrait_fantastic"

interface Creator {
	id: number;
	fullName: string;
	thumbnail: {
		path: string;
	  	extension: string;
	};
}

export default function Characters() {
	const [Creators, setCreators] = useState<Creator[]>([]);

	let cards;

	if (Creators) {
		cards = Creators.map((creator) => (
			<Card 
				name={creator.fullName}
				id={creator.id.toString()}
				key={creator.id}
				thumbnail={`${creator.thumbnail.path}/${IMAGE_SIZE}.${creator.thumbnail.extension}`}
			/>
		));
	}

	return (
    	<Container>
			<h1>Marvel Creators</h1>
            <SearchBar setter={setCreators}/>
            <Grid>
				{cards ? cards : null}
			</Grid>
        </Container>
  	)
}