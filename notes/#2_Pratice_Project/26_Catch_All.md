# 26 Catch All

## log

Dynamic Routes에 변수 하나만 받지 않고 특정 경로 하위로 들어가는 모든 세부 경로 변수를 받는 방법도 있다.

파일명은 `[...변수명].js` 와 같이 작성하면 해당 변수명에 특정 경로 하위의 모든 세부 경로 변수가 담긴다.

폴더 내의 `index.js` 파일이 해당 폴더명을 경로명으로 하며 하위에 다른 파일을 생성하면 해당 파일명에 세부 경로명이 된다. 여기서 `[변수명].js`와 같이 파일명을 작성하면 `[ ]` 안에 들어있는 변수명을 useRouter로 가져오는 객체의 `query`라는 속성 안에 담기게 된다.
ex. `/movies/123/comment/12` ⇒ `{ 변수명: [’movies’, ‘123’, ‘commnet’] }`

`pages/index.js`

```javascript
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(`/movies/${title}/${id}`);
  };

  return (
    <div className="container">
      {results?.map((movie) => (
        <div
          className="movie"
          key={movie.id}
          onClick={() => onClick(movie.id, movie.original_title)}
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <Link href={`/movies/${movie.original_title}/${movie.id}`}>
            <a>
              <h4>{movie.original_title}</h4>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
```

`pages/movies/[...params].js`

```javascript
import { useRouter } from 'next/router';

export default function Detail() {
  const router = useRouter();

  const [title, id] = router.query.params;

  return (
    <div>
      <h1>{title || 'Loading ...'}</h1>
    </div>
  );
}
```

위와 같은 방식으로 넘겨준 데이터를 활용하는 방법도 있다. 다만, 이렇게 코드를 작성할 경우 문제가 되는 곳이 있는데 바로 pre-rendering이다. router 객체에 담긴 정보 자체는 브라우저가 존재해야만 값이 존재한다. 애초에 그곳으로부터 생성된 정보이기 때문에

따라서, pre-rendering을 진행할 때 router.query에 담긴 정보는 아무것도 없는 상황이 된다. 이 부분을 회피하기 위해서는 없을 경우를 대비한 코드를 작성하면 된다.

```javascript
import { useRouter } from 'next/router';

export default function Detail() {
  const router = useRouter();

  const [title, id] = router.query.params || [];

  return (
    <div>
      <h1>{title || 'Loading ...'}</h1>
    </div>
  );
}
```

### Server Side에서 접근하기

다른 방법으로는 아예 Server Side에서 router query 정보에 접근하여 pre-rendering 시에도 해당 정보를 알 수 있도록 getServerSideProps 함수를 활용하는 방법이다. 이 함수를 통하여 해당 정보를 props에 담아서 보내게 되면 pre-rendering 때도 해당 정보에 접근할 수 있으므로 문제가 발생하지 않는다.

`pages/movies/[...params].js`

```javascript
export function getServerSideProps(ctx) {
  console.log(ctx);

  return {
    props: {},
  };
}
```

`getServerSideProps`에는 자동으로 `Context`라는 객체가 내려온다. req, res를 포함한 정보가 담겨있는 객체로 해당 객체에서 query에 대한 정보를 얻을 수 있고 이를 props에 담아주면 pre-rendering 시에도 query parameter에 대한 정보에 접근이 가능해진다.

```javascript
import { useRouter } from 'next/router';

export default function Detail({ params }) {
  const router = useRouter();

  const [title, id] = params;

  return (
    <div>
      <h1>{title || 'Loading ...'}</h1>
    </div>
  );
}

export function getServerSideProps({ query: { params } }) {
  return {
    props: {
      params,
    },
  };
}
```

## tips

- none

## issue

- none

## dependecy

- none
