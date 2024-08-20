import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-[32px] font-[900]">
        404 - 페이지를 찾을 수 없습니다
      </h2>
      <p>죄송합니다, 요청하신 페이지는 존재하지 않습니다.</p>
      <Link className="link" href="/">{`<- 메인 페이지로 이동하기`}</Link>
    </div>
  );
}
