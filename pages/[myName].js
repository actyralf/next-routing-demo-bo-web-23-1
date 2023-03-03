import { useRouter } from "next/router";

export default function MyName() {
  const router = useRouter();
  console.log(router);
  return <div>MyName is {router.query.myName}</div>;
}
