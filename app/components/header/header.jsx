import Link from 'next/link';
import styles from './header.module.scss';

export default function Header() {
	return (
		<header className={styles.header}>
			<ul>
				<li>
					<Link href='/'>main</Link>
				</li>
				<li>
					<Link href='/about'>about</Link>
				</li>
				<li>
					<Link href='/gallery'>gallery</Link>
				</li>
			</ul>
		</header>
	);
}
