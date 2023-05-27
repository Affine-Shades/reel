import { IMAGE_PLACEHOLDER } from "@/constants/image";
import styles from "./PreviewBlock.module.css";
import Image from "next/image";

interface Props {
  src: string;
  date: string;
}

function PreviewBlock({ src, date }: Props) {
  return (
    <Image
      className={styles.image}
      src={src}
      alt="Preview image"
      data-date={date}
      data-src={src}
      draggable="false"
      width={48}
      height={48}
      loading="lazy"
      placeholder="blur"
      blurDataURL={IMAGE_PLACEHOLDER}
    />
  );
}

export default PreviewBlock;
