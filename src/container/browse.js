import { SelectProfileContainer } from "./profiles";
import { auth } from "../lib/firebase.prod";
import { useEffect, useState } from "react";
import { Loading } from "../components";

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
    loading ? (
      <Loading src={user.photoURL} />
    ) : null
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
