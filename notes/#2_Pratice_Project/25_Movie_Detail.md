# 25 Movie Detail

## log

### Route State (query parameter)

React Native에서 React Navigation 라이브러리의 navigation.navigate 메서드를 사용할 때 이동하면서 가지고 갈 state 값을 설정할 수 있듯이 여기서도 동일하게 페이지를 이동하면서 값을 갖고 갈 수 있게 만들 수 있다.

이 방법의 단점이라고 한다면 해당 경로로 특정 값과 함께 넘어가는 부분을 클릭하지 않고 사용자가 URL을 직접 입력해서 들어온다고 하면 특정 값들이 모두 존재하지 않는 상태라는 것이다.

다음은 query parameter에 값을 담는 코드의 예시이다.

```javascript
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push(
      {
        pathname: `/movies/${id}`,
        query: {
          title,
        },
      },
      `/movies/${id}`
    );
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
          <Link
            href={{
              pathname: `/movies/${movie.id}`,
              query: {
                title: movie.original_title,
              },
            }}
            as={`/movies/${movie.id}`}
          >
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

### as

위 코드를 살펴볼 때 as라는 속성을 사용하고 있는 것을 알 수 있는데 이는 사용자에게 보여줄 URL을 마스킹하는 기능으로 query에 담아보내는 query parameter들을 숨길 수 있다.

## tips

- none

## issue

- none

## dependecy

- none
