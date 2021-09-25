import { FaqsContainer } from "../container/faqs";
import { FooterContainer } from "../container/footer";
import { HeaderContainer } from "../container/header";
import { JumbotronContainer } from "../container/jumbotron";
import { OptForm } from "../components";
import { Header } from "../components/accordion/styles/accordion";
export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>
            Unlimited films , TV programmes and more.
          </Feature.Title>
          <Feature.SubTitle>
            Watch anywhere. Cancel at any time.
          </Feature.SubTitle>
        </Feature>
        <OptForm>
          <OptForm.Input placeholder="Email address"></OptForm.Input>
          <OptForm.Button>Try It Now</OptForm.Button>
          <OptForm.Break />
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership
          </OptForm.Text>
        </OptForm>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
