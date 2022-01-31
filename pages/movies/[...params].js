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
