import { FaqsContainer } from "../container/faqs";
import { FooterContainer } from "../container/footer";
import { JumbotronContainer } from "../container/jumbotron";

export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
