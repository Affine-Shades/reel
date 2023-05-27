import Timeline from "@/components/timeline/Timeline";
import { DATA } from "@/constants/data";
import { groupByYear, sortByDate } from "@/utils/date";

// format your data
const formattedData = groupByYear(sortByDate(DATA));

export default function Home() {
  return <Timeline data={formattedData} showDate={true} />;
}
