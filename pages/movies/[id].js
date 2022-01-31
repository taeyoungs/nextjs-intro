import { useRouter } from 'next/router';

export default function Detail() {
  const router = useRouter();

  return (
    <div>
      <h1>Detail, ID: {router.query.id}</h1>
    </div>
  );
}
