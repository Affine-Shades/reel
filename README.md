![Demo](./src/assets/demo.gif)

# Reel

- A gallery component for showing series of images as reels
- Navigable using mouse scroll or touch gestures
- Automatic light/dark mode based on user's system preferences


## Installation & Development

1. Clone the repository
2. Install NPM packages in the project directory by running `npm install`
3. Run `npm run dev` and open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Getting Started

Import the `Timeline` component to your project. It accepts two props:

- `data`: an array of objects with the following properties:
  - src (url of the image)
  - date (date of the image, must be in [ISO 8601 format](https://www.iso.org/iso-8601-date-and-time-format.html))
- `showDate` (boolean, `false` by default)

```jsx
const data = [
  {
    date: "2023-12-21T23:12:00",
    src: "https://d2w9rnfcy7mm78.cloudfront.net/18389068/original_69198afd500671deba75081b3e6cab0d.jpg?1665081477?bc=0",
  },
  {
    date: "2020-03-12",
    src: "https://d2w9rnfcy7mm78.cloudfront.net/576969/original_d13cd1159b6a04ec729a02f22bfa0ceb.jpg?1459105811?bc=1",
  },
  {
    date: "2020-05-22",
    src: "https://d2w9rnfcy7mm78.cloudfront.net/13282413/original_7074efac4f47f5b7f32f5283fe71869b.jpg?1632366808?bc=0",
  },
];

function App() {
  // data must be grouped by year before being passed on
  // sorting is optional
  const formattedData = groupByYear(sortByDate(DATA));

  return <Timeline data={formattedData} showDate={true} />;
}

export default App;
```
