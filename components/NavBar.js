import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a
          className={`${styles.link} ${
            router.pathname === '/' ? styles.nav : ''
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className={[
            styles.link,
            router.pathname === '/about' ? styles.nav : '',
          ].join(' ')}
        >
          About
        </a>
      </Link>
    </nav>
  );
}
