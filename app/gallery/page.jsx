import styles from './gallery.module.scss';

export default function Gallery() {
  return (
    <main className={styles.gallery}>
      <h1>갤러리 목록 페이지</h1>
    </main>
  );
}

export const generateMetadata = () => {
  return {
    title: 'Gallery Page',
    description: 'Information of ABC Company Gallery',
  };
};
