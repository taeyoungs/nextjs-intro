# 13 Routing

## log

### Link

React Router Dom을 사용할 때 네비게이션 바에 a 태그를 직접 사용하는 것이 아닌 Link 컴포넌트를 사용했던 것과 같이 NextJS에서도 a 태그를 직접 사용하는 것이 아닌 특정 컴포넌트를 사용해야만 한다. (동작은 하지만 ESLint 경고가 뜬다)

React Router Dom의 Link 컴포넌트를 사용할 때와 동일하게 a 태그를 바로 사용하게 되면 해당 경로로 이동할 때마다 새로고침이 이루어 지는데 이건 매번 전체 페이지를 새로 요청해서 렌더링한다는 뜻이다.

이는 CSR의 의미가 없어지는 것이기 때문에 Link 컴포넌트와 비슷한 목적인 NextJS의 특정 Link 컴포넌트를 사용한다. NextJS의 Link 컴포넌트 사용법은 다음과 같다.

```javascript
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
    </nav>
  );
}
```

Link 컴포넌트는 단지 href만을 위한 것으로 `<Link href=”/”>Home</Link>`과 같이 사용도 가능하지만 HTML 태그에 전달할 수 있는 다양한 속성을 전달할 수 없게 된다. 예를 들어 className 속성을 Link 컴포넌트에 전달한다고 a 태그의 클래스명이 변경되지는 않는다.

따라서, React Router Dom의 Link 컴포넌트와 비슷하면서도 다른 위와 같은 방식으로 사용한다.

### useRouter

NextJS에서는 Navigation에 대한 정보를 제공하는 훅을 제공한다. useRouter를 호출했을 때 반환되는 객체에 pathname부터 React Router Dom의 네비게이션 훅들이 제공하는 여러 가지 값이나 함수가 모두 포함되어 있다고 생각하면 된다.

```javascript
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a style={{ color: router.pathname === '/' ? 'red' : 'blue' }}>Home</a>
      </Link>
      <Link href="/about">
        <a style={{ color: router.pathname === '/about' ? 'red' : 'blue' }}>
          About
        </a>
      </Link>
    </nav>
  );
}
```

## tips

- none

## issue

- none

## dependecy

- none
