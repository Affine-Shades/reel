import { IMAGE_PLACEHOLDER } from "@/constants/image";
import styles from "./FullSizeImage.module.css";
import Image from "next/image";

interface Props {
  src: string | undefined;
}

function FullSizeImage({ src }: Props) {
  return (
    <Image
      className={styles.image}
      src={src ? src : IMAGE_PLACEHOLDER}
      alt="Selected image"
      width={200}
      height={400}
      placeholder="blur"
      blurDataURL={IMAGE_PLACEHOLDER}
    />
  );
}

export default FullSizeImage;
