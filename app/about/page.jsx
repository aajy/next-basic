import styles from './about.module.scss';

//next에서는 기본적으로 app폴더 안쪽에 폴더명을 라우터 이름으로 설정하고
//그 안쪽에 있는 page.jsx 페이지를 해당 라우터명에 연결
export default function About() {
  return (
    <main className={styles.about}>
      <h1>About Page</h1>
    </main>
  );
}
