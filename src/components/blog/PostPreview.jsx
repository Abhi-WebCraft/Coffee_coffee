import Avatar from "./Avatar";
import Date from "./Date";
import CoverImage from "./CoverImage";
import Link from "next/link";

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  excerptLength = 80, 
}) {
  const truncateExcerpt = (text, length) => {
    if (text.length <= length) return text;
    return `${text.substring(0, length)}...`;
  };
 // const amarCoverImage=coverImage?coverImage:'/images/amar-web-desinger-post-sm.webp'
  return (
    <div className="blogs-div flex flex-col  justify-between">
        <div>
            <div className="mb-5">
            <CoverImage title={title} coverImage={coverImage} slug={slug} />
          </div>
          <h3 className="text-3xl mb-3 leading-snug blog-title">
            <Link
              href={`/blog/${slug}`}
              className="hover:text-[#ff3221]"
              dangerouslySetInnerHTML={{ __html: title }}
            ></Link>
          </h3>
          <div className="text-[#ff3221] font-bold mb-4">
            <Date dateString={date} />
          </div>
          <div
            className="leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: truncateExcerpt(excerpt, excerptLength) }}
          />
        </div>
      {/* <Avatar author={author} /> */}
     <div className="flex border-t pt-2  items-center text-lg font-semibold  hover:text-[#ff3221] transition-all">
        <Link href={`/blog/${slug}`} className="" >Read more <span className="ml-2 text-xl">≫</span></Link>
     </div>
    </div>
  );
}
