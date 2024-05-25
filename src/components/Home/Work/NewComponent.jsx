import React from 'react';
import style from './SCSS/NewComponent.module.scss';

export const NewComponent = ({ isDarkMode }) => {
	return (
		<div className={style.test}>
			NewComponent
			<p className={`${style.pargraph} ${style.test2}`}>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum rem provident at laudantium quas voluptate
				assumenda molestiae facere officia debitis.
			</p>
		</div>
	);
};
