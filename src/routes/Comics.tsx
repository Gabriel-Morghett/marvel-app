import React, { useState } from 'react'

import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import Grid from "../components/Grid";
import Card from "../components/Card";
import { fetchComics } from '../libs/utils';

const IMAGE_SIZE = "portrait_fantastic"

interface Comic {
	id: number;
	title: string;
	thumbnail: {
		path: string;
	  	extension: string;
	};
}

export default function Characters() {
	const [Comics, setComics] = useState<Comic[]>([]);

	let cards;

	if (Comics) {
		cards = Comics.map((comic) => (
			<Card 
				name={comic.title}
				id={comic.id.toString()}
				key={comic.id}
				thumbnail={`${comic.thumbnail.path}/${IMAGE_SIZE}.${comic.thumbnail.extension}`}
			/>
		));
	}

	return (
    	<Container>
			<h1>Marvel Comics</h1>
            <SearchBar setter={setComics} fetchFunction={fetchComics}/>
            <Grid>
				{cards ? cards : null}
			</Grid>
        </Container>
  	)
}