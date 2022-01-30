# 20 Patterns

## log

### Layout

사람들이 NextJS에서 custom app component를 사용할 때 따르는 아주 흔한 패턴 중 하나

\_app.js 파일에 많은 양의 파일을 작성하기 보다는 Layout.js 라는 파일을 만들어 해당 파일에 여러 가지 요소들을 집어넣는 구조

`Layout.js`

```javascript
import NavBar from './NavBar';

export default function Layout({ children }) {
  return (
    <>
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
```

`_app.js`

```javascript
import Layout from '../components/Layout';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
```

### Head

NextJS에서는 다양하고 유용한 컴포넌트들을 제공해주는데 그 중 대표적은 컴포넌트가 Head 컴포넌트이다. 사용하는 방법은 HTML head 태그를 사용하듯이 사용하면 된다. 내부에 title과 같은 SEO에 필요한 태그들을 넣거나 그 외에 head 태그에서 사용하는 것들을 넣어주면 된다.

`Seo.js`

```javascript
import Head from 'next/head';

export default function Seo({ title }) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
    </Head>
  );
}
```

위 컴포넌트를 사용하는 방법은 특정 컴포넌트에 일일히 삽입해주는 방법도 있고 Layout 컴포넌트와 같은 전역적으로 영향을 끼치는 컴포넌트에 삽입하여 동적으로 동작하도록 만들어 주는 방법도 있다.

다음은 Layout 컴포넌트에 삽입하여 useRouter 훅과 함께 사용하는 방법이다.

`Layout.js`

```javascript
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
```

## tips

- none

## issue

- none

## dependecy

- none
