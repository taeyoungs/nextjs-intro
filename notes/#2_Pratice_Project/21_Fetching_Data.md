# 21 Fetching Data

## log

❗ 이 예제에서는 img 태그를 사용하지만 NextJS에서는 Link 컴포넌트와 같이 Image 컴포넌트를 제공하기 때문에 해당 컴포넌트를 사용해서 이미지를 렌더링 해야한다.

Image 컴포넌트를 사용할 경우 로컬 이미지와 원격 이미지를 다룰 때 복잡해질 수 있다는 점만 상기하고 넘어가자.

### public folder

NextJS에선 정적 리소스(이미지 등)를 public 폴더에 보관하는데 해당 폴더에 접근하기 위해서는 다음과 같이 작성하면 된다.

```javascript
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <img src="/vercel.svg" />
    </nav>
  );
}
```

### Data Fetching

다음은 TMDB의 API를 이용한 인기 영화 목록 조회 요청 및 응답 데이터 렌더링 예제이다.

optinal chaining을 이용하여 condition rendering을 진행하고 있으며 movies 객체가 존재하지 않을 경우 Loading state를 사용자에게 보여주고 있다.

```javascript
import { useEffect, useState } from 'react';

const API_KEY = '93938de29ee06b9d46369c6d6d363f01';

export default function Home() {
  const [movies, setMovies] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      );
      const { results } = await response.json();

      setMovies(results);
    })();
  }, []);

  return (
    <div>
      <h1>Home</h1>
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <h4 key={movie.id}>{movie.original_title}</h4>
      ))}
    </div>
  );
}
```

## tips

- none

## issue

- none

## dependecy

- none
