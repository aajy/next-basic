import styles from './gallery.module.scss';

export default function Gallery() {
	return (
		<main className={styles.gallery}>
			<h1>Gallery 목록 페이지</h1>
		</main>
	);
}

export const generateMetadata = () => {
	return {
		title: 'gallery Page',
		discription: 'Information of ABC Comapny including President, crew info',
	};
};
