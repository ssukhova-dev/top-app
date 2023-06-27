import { RatingProps } from "./Rating.props";
import styles from "./Rating.module.css"
import cn from "classnames"
import { KeyboardEvent, useEffect, useState } from "react";


export const Rating = ({ isEditable = false, rating, setRating, className, ...props }: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {

			const imgSrc = (i < currentRating) ? ".\\star-primary.svg" : ".\\star.svg";
			return (
				<>
					<span className={cn(styles.star, { [styles.editable]: isEditable })}
						onMouseEnter={() => changeDisplay(i + 1)}
						onMouseLeave={() => changeDisplay(rating)}
						onClick={() => onClick(i + 1)}>

						<img src={imgSrc} alt="star"
							onKeyDown={(e: KeyboardEvent<HTMLImageElement>) => isEditable && handleSpace(i + 1, e)}
							tabIndex={isEditable ? 0 : -1} />

					</span>
				</>
			);
		});

		setRatingArray(updatedArray);
	};

	const changeDisplay = (i: number) => {
		if (!isEditable) {
			return;
		}
		constructRating(i);
	}

	const onClick = (i: number) => {
		if (!isEditable || !setRating) {
			return;
		}
		setRating(i);
	}

	const handleSpace = (i: number, e: KeyboardEvent<HTMLImageElement>) => {
		if ((e.code !== 'Space') || !setRating) {
			return;
		}
		setRating(i);
	}

	return (
		<div {...props}>

			{
				ratingArray.map((r: JSX.Element, i: number) => (<span key={i}>{r}</span>))
			}

		</div>
	);
} 