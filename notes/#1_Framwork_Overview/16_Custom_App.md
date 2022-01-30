# 16 Custom App

## log

### global props

앞서 Styles-JSX로 작성한 CSS 코드를 해당 페이지 전역에 적용될 수 있도록 하는 방법에는 스타일 태그에 global 속성을 추가해주는 것이다.

```javascript
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
      </Link>
      <style jsx global>{`
        a {
          text-decoration: none;
        }
        .active {
          color: teal;
        }
      `}</style>
    </nav>
  );
}
```

위와 같이 추가하면 한 컴포넌트 내에서 작성한 CSS 코드가 해당 컴포넌트 내에 있는 요소들에게만 적용되는 것이 아니라 다른 컴포넌트에서도 동일한 태그나 클래스 이름을 가지고 있는 요소들에게도 적용된다.

하지만 다른 페이지에는 적용이 되지 않는 것을 볼 수 있는데 이는 NextJS가 가진 컨셉 때문이다.

### 범위

NextJS에서는 잊지 말아야할 중요한 컨셉이 하나 있는데 코드가 적용되는 범위이다. NextJS에서는 크게 다음 3가지의 스코프를 갖게 된다.

1. 컴포넌트
2. 페이지
3. \_app.js

CSS 코드가 적용되는 곳을 살펴보면 이를 쉽게 이해할 수 있다. 하나의 컴포넌트 내에서 작성한 CSS 컴포넌트가 다른 컴포넌트에 영향을 주지 않듯이 **한 페이지 내에 작성된 코드가 다른 페이지에 영향을 주지 않는다.**

Home 컴포넌트에서 작성한 CSS 코드가 About 페이지를 구성하고 있는 컴포넌트에게 영향을 주지 않는다는 뜻이다.'

### \_app.js

그렇다면 모든 페이지에 적용될 수 있는 코드를 작성하고 싶다면 어떻게 해야할까? 바로 “`_`”가 붙은 app.js 파일을 작성하는 것이다.

NextJS는 특정 경로에 해당하는 파일을 읽기 전에 `_app.js` 파일을 먼저 읽게끔 되어 있는데 `_app.js` 파일은 사용자가 커스터마이징 할 수 있다.

`_app.js` 내에 작성된 컴포넌트는 `Component`와 `pageProps`를 props로 받게끔 되어 있다.

`_app.js`

```javascript
import NavBar from '../components/NavBar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
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

위 파일에서 스타일을 적용하거나 컴포넌트를 추가하게 되면 페이지 경로에 상관없이 모든 곳에서 영향을 받는 것을 알 수 있다.

create next app으로 생성되는 styles/globals.css 파일을 컴포넌트 내에서 import하려고 하면 에러가 발생하는 것을 볼 수 있다. 이는 CSS Modules만 컴포넌트 내에서 호출할 수 있다는 뜻이며 CSS Modules가 아닌 파일을 호출하고 싶다면 \_app.js 파일에서 호출해야만 한다.

`app.js`

```javascript
import NavBar from '../components/NavBar';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
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
