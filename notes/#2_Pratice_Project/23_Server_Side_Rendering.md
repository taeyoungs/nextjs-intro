# 23 Server Side Rendering

## log

SSR의 특징 중 하나로는 내가 만들어 놓은 loading state 정보가 pre-rendering을 통해 HTML 코드로 존재한다는 것이다. pre-rendering이라는 작업 자체가 앱의 초기 상태를 가지고 이루어지는 것이기 때문에 condition rendering을 해놓았다고 해도 초기 상태시에는 loading state가 존재하기 때문에 HTML 코드로 만들어진다.

이게 문제가 된다는 것은 아니다. 이건 선택의 문제로

1. 기초적인 틀을 pre-rendering으로 HTML로 만든 뒤 사용자에게 보여주고 데이터 패칭을 통해 데이터가 응답으로 도착했을 때 사용자에게 나머지 영역을 보여주던지
2. SSR을 이용하여 사용자에게 빈 화면을 API의 응답이 도착할 때까지 보여주고 데이터가 들어왔을 때 렌더링을 진행할 수도 있다.

### getServerSideProps

```javascript
export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/movies');
  const { results } = await response.json();

  return {
    props: {
      results,
    },
  };
}
```

### 선택의 문제

정답은 존재하지 않는다. 어느 서비스냐에 따라서 사용자에게 주고자 하는 사용자 경험이 다를 것이기 때문에 자신이 개발하고 있는 서비스에 맞춰서 상황에 맞는 데이터 패칭 방법을 사용하는 게 제일 좋을 듯하다.

장단점이 존재하며 선택의 문제이다.

기본적인 틀을 사용자에게 보여주고 데이터 패칭하는 영역에 로딩 상태를 보여주거나 서버에서 데이터 패칭을 통해 데이터가 모두 도착하고 나서 완전한 페이지를 보여주거나

예제에서 20개의 이미지를 네트워크 쓰로틀링을 걸고 getServerSideProps를 통해 가져와서 렌더링하도록 만들었는데 생각보다 꽤 시간이 걸린다. 요즘에 네트워크 상황이 아주 안좋은 경우는 찾기 힘들겠지만 만약 이런걸 고려한다면 많은 논의가 필요할 것 같다.

## tips

- none

## issue

- none

## dependecy

- none
