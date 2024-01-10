import Image from 'next/image';
import styles from './main.module.scss';
import clsx from 'clsx';
import pic1 from '@/public/pic1.jpg';
import pic2 from '@/public/pic.jpg';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Main Page</h1>

      <div className={clsx(styles.pic)}>
        <Image src={pic2} alt="image" fill quality={75} />
      </div>

      <div className={clsx(styles.pic)}>
        <Image src={pic1} alt="image" fill quality={75} priority />
      </div>
    </main>
  );
}

/*
  Next에서 Image컴포넌트를 사용해야 되는 이유
  1. 원본 빌드시에 import한다음에 브라우저 크기에 따른 이미지 용량을 자동 최적화시켜서
  2. 클라이언트 요청이 들어올떄 미리 최적화시킨 이미지를 렌더링
  2. quality속성으로 직접 최적화가능 0~100(default:75)

*/
