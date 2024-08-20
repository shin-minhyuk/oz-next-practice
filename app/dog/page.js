import Link from "next/link";

export default async function Dog() {
  const res = await fetch(`http://localhost:3000/api/dog`);
  const dog = await res.json();
  console.log(dog[0].message);

  if (!dog) {
    <div>로딩중</div>;
  }

  return (
    <section className="flex flex-col items-center gap-4 text-[20px] font-[600]">
      <div>{dog[0].message}</div>
      <img className="w-[200px] h-[200px]" src={dog[0].image} />
      <Link className="link" href="/">{`<- 메인 페이지로 이동하기`}</Link>
    </section>
  );
}
