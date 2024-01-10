import Image from 'next/image';
import styles from './main.module.scss';
import pic from '@/public/pic.jpg';
import pic2 from '@/public/pic2.jpg';
import clsx from 'clsx';

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>Main Page</h1>

			<div className={clsx(styles.pic)}>
				<Image
					src={pic2}
					alt='image'
					quality={75}
					fill
					sizes='(min-width: 808px) 50vw, 100vw'
					placeholder='blur'
				/>
			</div>

			<div className={clsx(styles.pic)}>
				<Image src={pic} alt='image' fill quality={75} placeholder='blur' />
			</div>
		</main>
	);
}
