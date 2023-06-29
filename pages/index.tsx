import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button, Htag, P, Tag, Rating } from '../components'
import { useState } from 'react'
import { withLayout } from '../layout/Layout'



const inter = Inter({ subsets: ['latin'] })

function Home(): JSX.Element  {

const [rating, setRating] = useState<number>(4);


  return (
    <>

      <Htag tag="h1">Text</Htag>
      <Htag tag="h2">Text</Htag>
      <Htag tag="h3">Text</Htag>

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

      <Rating rating={rating} isEditable={true} setRating={setRating}/>
      <Rating rating={3} isEditable={false} />

      
    </>
  )
}

export default withLayout(Home);