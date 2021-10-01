import { useContent } from "../hooks";
import { selectionFilter } from "../utils";

export default function Browse() {
  const series = useContent("series");
  const films = useContent("films");

  // console.log(series);
  // console.log(films);

  const slides = selectionFilter(series.series, films.films);
  console.log(slides);

  return <p>Day la Browser</p>;
}
