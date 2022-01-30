# 15 Styles JSX

## log

NextJS 고유의 스타일 적용 방식으로 사용 방법은 다음과 같다.

**NavBar.js**

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
      <style jsx>{`
        a {
          text-decoration: none;
        }
        nav {
          background-color: tomato;
        }
        .active {
          color: teal;
        }
      `}</style>
    </nav>
  );
}
```

style 태그에 jsx props를 내려주는 것으로 컴포넌트 내에서 독립된 CSS 코드를 작성할 수 있다. 임의의 문자열이 자동으로 생성되기 때문에 각 컴포넌트에서 동일한 태그 스타일이나 클래스 이름을 사용하여 CSS 코드를 작성한다 하여도 겹치는 일이 발생하지 않는다.

CSS Modules를 사용하여 하나의 파일을 더 만들거나 클래스 이름을 생각해야 하는 것이 고통스러운 사람에게 매력적인 방법인 것 같다.

태그에 직접 스타일을 작성하여도 어차피 컴포넌트별로 모듈화가 되기 때문에 겹치는 일을 걱정하지 않고 컴포넌트 내에 존재하는 태그에 마음껏 CSS 코드를 작성할 수 있다는 것이 장점이다.

## tips

- none

## issue

- none

## dependecy

- none
