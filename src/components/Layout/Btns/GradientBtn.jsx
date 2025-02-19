import Link from "next/link";

export default function GradientBtn({ link, title, classname }) {
  return (
    <Link href={link} className={`gradient-btn ${classname}`}>
      {title}
    </Link>
  );
}
