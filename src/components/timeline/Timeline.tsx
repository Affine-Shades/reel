import styles from "./Timeline.module.css";
import useScrollSnap from "../../hooks/useScrollSnap";
import PreviewBlock from "../previewBlock/PreviewBlock";
import FullSizeImage from "../fullSizeImage/FullSizeImage";
import DateTag from "../dateTag/DateTag";
import Dot from "../dot/Dot";
import { getYear } from "@/utils/date";

interface Props {
  data: Record<string, Data[]>;
  showDate?: boolean;
}

function Timeline({ data, showDate = false }: Props) {
  const { currentElement, containerRef } = useScrollSnap();
  const {
    dataset: { src: currentSrc, date: currentDate },
  } = currentElement || { dataset: { src: "", date: "" } };

  const renderTimelineItems = () =>
    Object.keys(data).map((date, index) => {
      const year = Number(date);
      const currentYearItems = data[year];
      const currentYearHasMultipleItems = currentYearItems.length > 1;

      // if the current year has multiple items, display the full date
      // otherwise, only display the year to fit the width of the container
      const displayedDate = currentDate
        ? currentYearHasMultipleItems
          ? currentDate
          : getYear(currentDate)
        : date;

      return (
        <div key={index}>
          {showDate && <DateTag year={date} currentDate={displayedDate} />}
          <div className={styles.imageContainer}>
            {currentYearItems.map((image, imageIndex) => (
              <PreviewBlock
                key={imageIndex}
                src={image.src}
                date={image.date}
              />
            ))}
          </div>
        </div>
      );
    });

  return (
    <>
      <FullSizeImage src={currentSrc} />
      <div className={styles.timeline} ref={containerRef}>
        {renderTimelineItems()}
      </div>
      <Dot />
    </>
  );
}

export default Timeline;
