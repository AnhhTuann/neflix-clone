import { FaqsContainer } from "../container/faqs";
import { FooterContainer } from "../container/footer";
import { HeaderContainer } from "../container/header";
import { JumbotronContainer } from "../container/jumbotron";
import { FeatureContainer } from "../container/feature";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <FeatureContainer />
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
