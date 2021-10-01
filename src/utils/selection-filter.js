export default function selectionFilter(series = [], films = []) {
  return {
    series: [
      {
        title: "Documentaries",
        data: series.filter((item) => item.genre === "documentaries"),
      },
    ],
  };
}
