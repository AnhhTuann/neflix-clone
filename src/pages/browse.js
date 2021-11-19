import { BrowseContainer } from "../container/browse";
import { useContent } from "../hooks";
import { selectionFilter } from "../utils";

export default function Browse() {
  const series = useContent("series");
  const films = useContent("films");
  console.log(series);
  console.log(films);
  //data={films:...,series:...}
  const slides = selectionFilter(films.films, series.series);
  console.log(slides);
  return <BrowseContainer slides={slides} />;
}
