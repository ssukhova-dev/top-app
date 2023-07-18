import { GetStaticProps } from 'next';
import React from 'react';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';


function Search(): JSX.Element {

	return (
		<>
			Search
		</>
	);
}

export default withLayout(Search);

