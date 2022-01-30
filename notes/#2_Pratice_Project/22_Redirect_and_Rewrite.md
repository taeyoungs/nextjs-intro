# 22 Redirect and Rewrite

## log

NextJS에서는 Redirect 기능과 Rewrite 기능을 제공한다. 두 기능은 next.config.js 파일에서 해당 코드를 작성하는 것으로 적용할 수 있다.

### Redirect

이 기능은 익히 들어 알고 있는 Redirect이다. 사용자가 특정 경로로 진입할 경우 next.config.js에 작성해놓은 경로로 리다이렉트 시키는 기능이다.

React Router Dom을 이용할 때와 비슷하게 Dynamic Path에 대한 처리도 가능하다. 또한 와일드 카드(`*`)를 사용하여 특정 Dynamic Path 이외에 나머지 경로를 모두 Redirect 시킬 수도 있다.

적용 방법은 다음과 같다.

`next.config.js`

```javascript
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/contact',
        destination: '/profile',
        permanent: false,
      },
      {
        source: '/contact/:postId',
        destination: '/posts/:postId',
        permanent: false,
      },
      {
        source: '/blog/:path*',
        destination: '/profile/:path*',
        permanent: false,
      },
    ];
  },
};
```

### Rewrite

이 기능은 특정 API 경로명을 다른 경로명으로 변경하여 브라우저에서 요청을 보내게 하고 싶을 때 사용하는 방법이다. 사용 방법은 다음과 같다.

브라우저가 `source`에 해당하는 경로로 요청할 경우 서버인 NextJS가 `destination`에 해당하는 경로로 변경해서 요청을 하게 된다. 브라우저 네트워크 탭에서는 `source`의 경로로 요청을 한 것 처럼 보이지만 실제로는 `destination`에 해당하는 경로로 API 요청이 이루어진 것이다.

`next.config.js`

```javascript
const API_KEY = '93938de29ee06b9d46369c6d6d363f01';

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};
```

## tips

- none

## issue

- none

## dependecy

- none
