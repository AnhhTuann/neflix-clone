import { SelectProfileContainer } from "./profiles";
import { auth } from "../lib/firebase.prod";
import { useEffect, useState } from "react";
import { Header, Loading } from "../components";
import logo from "../logo.svg";

export function BrowseContainer({ slide }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const user = auth.currentUser || {};

  useEffect(() => {
    if (user) {
      console.log("profile", profile);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    } else {
      console.log("No user is signed in.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile.displayName]);
  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      <Header src="joker1">
        <Header.Frame>
          <Header.Group>
            <Header.Logo to="/" src={logo} alt="Netflix"></Header.Logo>
            <Header.TextLink>Series</Header.TextLink>
            <Header.TextLink>Films</Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.Group>
                  <Header.TextLink onClick={() => auth.signOut()}>
                    Sign out
                  </Header.TextLink>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
