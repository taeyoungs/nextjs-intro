# 24 Dynamic Routes

## log

NextJS에서 Dynamic Routes를 하기 위해서는 파일명을 그에 알맞게 작성해야 한다. NextJS는 기본적으로 파일명이 곧 페이지 세부 경로명이 되며 폴더를 만들어 뎁스를 한 단계 늘릴 수 있다.

폴더 내의 `index.js` 파일이 해당 폴더명을 경로명으로 하며 하위에 다른 파일을 생성하면 해당 파일명에 세부 경로명이 된다. 여기서 `[변수명].js`와 같이 파일명을 작성하면 `[ ]` 안에 들어있는 변수명을 useRouter로 가져오는 객체의 `query`라는 속성 안에 담기게 된다.

## tips

- none

## issue

- none

## dependecy

- none
