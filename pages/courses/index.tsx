import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button, Htag, P, Tag, Rating } from '../../components'
import { useState } from 'react'
import { withLayout } from '../../layout/Layout'
import { GetStaticProps } from 'next'
import axios from 'axios'
import { MenuItem } from '@/interfaces/menu.interface'



function Courses({ menu }: CoursesProps): JSX.Element {

	const [rating, setRating] = useState<number>(4);


	return (
		<>

			<Htag tag="h1">Courses</Htag>
			<Htag tag="h2">Courses</Htag>
			<Htag tag="h3">Courses</Htag>

			<Button appearance="primary" >Text</Button>
			<Button appearance="ghost">Text</Button>
			<Button appearance="primary" arrow="right">Text</Button>
			<Button appearance="ghost" arrow="down">Text</Button>

			<P size="s">TextTextTextTextText</P>
			<P size="m">TextTextTextTextText</P>
			<P size="l">TextTextTextTextText</P>
			<P >TextTextTextTextText</P>


			<Tag size="s" color="ghost">Text</Tag>
			<Tag size="m" color="green">Text</Tag>
			<Tag size="s" color="grey">Text</Tag>
			<Tag size="m" color="red">Text</Tag>
			<Tag size="s" color="primary">Text</Tag>
			<Tag size="m" >Text</Tag>

			<Rating rating={rating} isEditable={true} setRating={setRating} />
			<Rating rating={3} isEditable={false} />

			<ul>
				{menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
			</ul>

		</>
	)
}

export default withLayout(Courses);

export const getStaticProps: GetStaticProps<CoursesProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	}
};

interface CoursesProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}