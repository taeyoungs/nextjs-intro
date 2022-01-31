import { useRouter } from 'next/router';

export default function Detail() {
  const router = useRouter();

  return (
    <div>
      <h1>{router.query.title || 'Loading ...'}</h1>
    </div>
  );
}
