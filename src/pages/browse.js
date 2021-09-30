import { useContent } from "../hooks";

export default function Browse() {
  const { series } = useContent("series");

  console.log(useContent());
  return <p>Day la Browser</p>;
}
