import { toDayMonthYear, getYear, groupByYear, sortByDate } from "./date";

describe("toDayMonthYear", () => {
  test("returns the formatted date string in the expected format", () => {
    const date = new Date("2023-04-21");
    const formattedDate = toDayMonthYear(date);
    expect(formattedDate).toBe("2023 Apr 21");
  });
});

describe("getYear", () => {
  test("returns the year extracted from the date string", () => {
    const date = "2023 Apr 21";
    const year = getYear(date);
    expect(year).toBe("2023");
  });
});

describe("groupByYear", () => {
  test("groups the data array by year", () => {
    const data = [
      { date: "2023-04-21", src: "src" },
      { date: "2022-09-10", src: "src" },
      { date: "2023-04-25", src: "src" },
    ];
    const groupedData = groupByYear(sortByDate(data));
    expect(groupedData["2023"]).toEqual([
      { date: "2023 Apr 21", src: "src" },
      { date: "2023 Apr 25", src: "src" },
    ]);
    expect(groupedData["2022"]).toEqual([{ date: "2022 Sep 10", src: "src" }]);
  });
});

describe("sortByDate", () => {
  test("sorts the data array by date in ascending order", () => {
    const data = [
      { date: "2023-04-21", src: "src" },
      { date: "2022-09-10", src: "src" },
      { date: "2023-04-25", src: "src" },
    ];
    const sortedData = sortByDate(data);
    expect(sortedData).toEqual([
      { date: "2022-09-10", src: "src" },
      { date: "2023-04-21", src: "src" },
      { date: "2023-04-25", src: "src" },
    ]);
  });
});
