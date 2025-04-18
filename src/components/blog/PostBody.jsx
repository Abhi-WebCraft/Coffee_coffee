import styles from "@/components/blog/PostBody.module.css";

export default function PostBody({ content }) {
  return (
     <div className="">
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
