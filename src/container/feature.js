import { Feature } from "../components";
import { OptFormContainer } from "./opt-form";

export function FeatureContainer() {
  return (
    <Feature>
      <Feature.Title>Unlimited films , TV programmes and more.</Feature.Title>
      <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
      <OptFormContainer />
    </Feature>
  );
}
