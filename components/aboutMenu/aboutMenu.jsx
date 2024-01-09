'use client';
import styles from './aboutMenu.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AboutMenu() {
	const pathname = usePathname();
	console.log('pathname: ', pathname);
	return (
		<nav>
			<ul>
				<li>
					<Link
						href='/about/president'
						className={pathname === '/about/president' ? styles.on : ''}
					>
						President
					</Link>
				</li>
				<li>
					<Link
						href='/about/company'
						className={pathname === '/about/company' ? styles.on : ''}
					>
						Company
					</Link>
				</li>
			</ul>
		</nav>
	);
}
