import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from "./TopPageComponent.module.css"
import cn from "classnames"
import { Advantages, HhData, Htag, P, Tag } from "@/components";
import { TopLevelCategory } from "@/interfaces/page.interface";


export const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
	return (
		<div>
			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products && <Tag color="grey" size="m">{products.length}</Tag>}
				<span>sort component</span>
			</div>
			<div>
				{products && products.map(p => (<div key={p._id}>{p.title}</div>))}
			</div>
			<div className={styles.hhTitle}>
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				<Tag color="red" size="m">hh.ru</Tag>
			</div>
			{firstCategory === TopLevelCategory.Courses && page.hh && <HhData {...page.hh}></HhData>}

			{page.advantages && page.advantages.length > 0 && <>
				<Htag tag="h2">Преимущества</Htag>
				<Advantages advantages={page.advantages}></Advantages>
			</>
			}
			{page.seoText && <P>{page.seoText}</P>}
			<Htag tag="h2">Получаемые навыки</Htag>
			{page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
		</div>
	);
} 