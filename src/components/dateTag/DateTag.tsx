import { getYear } from "@/utils/date";
import styles from "./DateTag.module.css";

interface Props {
  year: string;
  currentDate: string;
}

function DateTag({ currentDate, year }: Props) {
  const currentYear = getYear(currentDate);
  const activeClass = `${styles.block} ${
    currentYear === year && styles.active
  }`;

  return (
    <div className={activeClass}>
      {currentYear === year ? currentDate : year}
    </div>
  );
}

export default DateTag;
