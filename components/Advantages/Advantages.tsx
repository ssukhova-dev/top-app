import { priceRu } from "@/helpers/helpers";
import { Card } from "../Card/Card";
import { AdvantagesProps } from "./Advantages.props";
import styles from "./Advantages.module.css"
import CheckIcon from "./check.svg"
import cn from "classnames"


export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
	return (
		<>
			{advantages.map((advantage) => (<div className={styles.advantage} key={advantage._id}>
				<CheckIcon />
				<div className={styles.title}>{advantage.title}</div>
				<hr className={styles.vline} />
				<div>{advantage.description}</div>
			</div>)
			)}

		</>
	);
} 