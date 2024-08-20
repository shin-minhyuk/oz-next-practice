import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-[30px]">
      <p className="text-[50px] font-[900]">골라보세요</p>
      <div className="flex gap-5">
        <Link
          className="px-5 py-2 text-[18px] bg-black rounded-[12px] text-white"
          href="/dog"
        >
          강아지
        </Link>
        <Link
          className="px-5 py-2 text-[18px] bg-black rounded-[12px] text-white"
          href="/cat"
        >
          고양이
        </Link>
        <Link
          className="px-5 py-2 text-[18px] bg-black rounded-[12px] text-white"
          href="/meow"
        >
          없는 URL
        </Link>
      </div>
    </div>
  );
}
