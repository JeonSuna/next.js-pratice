"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const path = usePathname();

  return (
    <div className="bg-red-400">
      네비게이션임
      <ul>
        <li>
          <Link href={"/"}>home</Link>
          {path === "/" ? "😍" : ""}
        </li>
        <li>
          <Link href={"/about-us"}>about-us</Link>
          {path === "/about-us" ? "😍" : ""}
        </li>
      </ul>
    </div>
  );
}
