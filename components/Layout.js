import { useRouter } from 'next/router';
import NavBar from './NavBar';
import Seo from './Seo';

export default function Layout({ children }) {
  const router = useRouter();

  const routes = {
    '/': 'Home',
    '/about': 'About',
  };

  return (
    <>
      <Seo title={routes[router.pathname]} />
      <NavBar />
      <div>{children}</div>
      <style jsx global>{`
        a {
          text-decoration: none;
        }
        .active {
          color: teal;
        }
      `}</style>
    </>
  );
}
