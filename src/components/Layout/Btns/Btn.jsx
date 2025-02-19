import Link from "next/link";

export default function Btn({ link, title, classname }) {
  return (
    <Link href={link} className="btn">
      {title}
    </Link>
  );
}
