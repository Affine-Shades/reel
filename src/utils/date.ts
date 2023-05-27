export const toDayMonthYear = (date: Date) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getUTCDate();
  return `${year} ${month} ${day}`;
};

export const getYear = (date: string) => {
  const [year] = date.split(" ");
  return `${year}`;
};

export const groupByYear = (data: Data[]) => {
  const result: Record<string, Data[]> = {};

  for (const item of data) {
    const date = new Date(item.date);
    const year = date.getFullYear();
    const formattedDate = toDayMonthYear(date);

    if (!result[year]) {
      result[year] = [];
    }

    result[year].push({ ...item, date: formattedDate });
  }

  return result;
};

export const sortByDate = (data: Data[]) => {
  const sortedData = [...data];
  return sortedData.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
};
