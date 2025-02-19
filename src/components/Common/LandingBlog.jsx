import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Container from '../Layout/Container';
import SectionTitle from '../Layout/SectionTitle';

// Truncate plain text (for titles)
function truncateText(text, limit) {
  if (!text) return '';
  return text.length > limit ? `${text.slice(0, limit)}...` : text;
}

// Truncate HTML content (for excerpts)
function truncateHTML(html, limit) {
  let result = '';
  let charCount = 0;
  const stack = [];
  
  html.replace(/<\/?([a-z]+)[^>]*>|([^<]+)/gi, (match, tag, text) => {
    if (charCount >= limit) return '';
    if (tag) {
      if (!tag.startsWith('/')) {
        stack.push(tag);
        result += match;
      } else if (stack[stack.length - 1] === tag.slice(1)) {
        stack.pop();
        result += match;
      }
    } else if (text) {
      const remaining = limit - charCount;
      const truncatedText = text.slice(0, remaining);
      result += truncatedText;
      charCount += truncatedText.length;
    }
    return '';
  });

  while (stack.length > 0) {
    const tag = stack.pop();
    result += `</${tag}>`;
  }
  return result;
}

export default function LandingBlog({ blogPosts }) {
  return (
    <>
      <section className="pt-[100px]">
        <Container>
          <div className="text-center mb-[50px] places-heading">
            <SectionTitle title="Our Blogs" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {blogPosts.map((blog, index) => (
              <div className="bg-white blog-div mb-4" key={index}>
                <img
                  src={blog?.node?.featuredImage?.node?.sourceUrl || "/default-image.jpg"}
                  alt={blog?.node?.title || "Blog Image"}
                  className="w-full h-[200px] object-cover border-t-2 border-[#ff3221]"
                />
                <div className="flex flex-col gap-4 p-4 blog-part">
                  <h3 className="text-[16px] uppercase relative text-shadow-md">
                    {truncateText(blog?.node?.title, 40)} 
                  </h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: truncateHTML(blog?.node?.excerpt || "No excerpt available.", 100), 
                    }}
                  />
                </div>
                <Link href={`/blog/${blog?.node?.slug}`} className="py-3 pl-2.5 flex items-center gap-2 border-t">
                  <p>Read More</p>
                  <Image
                    src="/images/icons/fast-forwrd.svg"
                    alt="icon"
                    width={15}
                    height={15}
                    className="w-[13px] h-[13px]"
                  />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
