# 13 Routing

## log

NextJS 없이 CRA를 통해 셋업한 프로젝트에서 CSS를 다루는 여러 가지 방법이 있듯이 NextJS를 사용할 때도 CSS를 다루는 여러 가지 방법이 존재한다.

가장 간단한 방법은 앞서 다뤄봤던 inline 스타일 방법인데 이건 익히 알고 있듯이 권장되는 방법이 아니다. 다른 방법 중에 하나는 이제 다뤄볼 CSS Modules이다.

CSS Modules를 사용함에 있어서 주의해야할 점은 파일명을 **파일명.module.css**라고 작성해야 한다는 점이다.

**.module.css**과 같이 파일명이 작성된 CSS 파일은 자바스크립트 파일과 같이 import 하여 사용할 수 있게 된다. 이 방법의 장점으로는 특정 태그에 클래스 이름을 적용시킬 때 텍스트를 바로 작성하지 않는다는 점과 모듈화가 이루어지기 때문에 렌더링되고 난 후 클래스 이름을 살펴봤을 때 임의의 문자열이 끝에 붙게 되어 클래스 이름이 겹치는 경우를 방지해준다는 점이다.

사용하는 방법은 간단하다.

**NavBar.module.css**

```css
.nav {
  color: tomato;
}
```

**NavBar.js**

```javascript
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css';

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === '/' ? styles.nav : ''}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === '/about' ? styles.nav : ''}>About</a>
      </Link>
    </nav>
  );
}
```

### 여러 클래스 이름을 적용시켜야 하는 경우

- ``(템플릿 리터럴)을 이용하는 방법
- 배열에 담고 join 메서드를 이용하는 방법

**NavBar.module.css**

```css
.link {
  text-decoration: none;
}

.nav {
  color: tomato;
}
```

**NavBar.js**

```javascript
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
```

## tips

- none

## issue

- none

## dependecy

- none
