import styles from './main.module.scss';
import pic from './pic.jpg';
import clsx from 'clsx';
console.log(pic);

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Main Page</h1>
      <div className={clsx(styles.pic)}>
        <img src={pic.src} alt="image" />
      </div>
    </main>
  );
}
