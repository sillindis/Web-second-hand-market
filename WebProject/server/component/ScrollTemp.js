import { useState, useRef, useEffect } from 'react';
import ItemList from "./ItemList"

const ScroolTemp = ({ list, params }) => {
	const [bottom, setBottom] = useState(null);
	const bottomObserver = useRef(null);
	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				if (entries[0].isIntersecting) {
					const { page, totalElement, limit } = params.pageData;
					if (totalElement < limit * (page - 1)) {
						return;
					}
					params.getProductList({ page: page + 1 });
				}
			},
			{ threshold: 0.25, rootMargin: '80px' },
		);
		bottomObserver.current = observer;
	}, []);

	useEffect(() => {
		const observer = bottomObserver.current;
		if (bottom) {
			observer.observe(bottom);
		}
		return () => {
			if (bottom) {
				observer.unobserve(bottom);
			}
		};
	}, [bottom]);

	return (
		<>
			{list.map(card => (
				<ItemList key={card.id} />
			))}
			<div ref={setBottom} />
		</>
	);
};

export default ScroolTemp;
