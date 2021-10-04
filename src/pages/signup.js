import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "../components";
import { FooterContainer } from "../container/footer";
import { HeaderContainer } from "../container/header";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../lib/firebase.prod";

export default function Signup() {
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = firstName === "" || password === "" || emailAddress === "";

  const handleSignup = (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, emailAddress, password)
      .then((result) => {
        const user = result.user;
        //user lấy từ result là từ firebase mới tạo ra, nên nó k có displayName, firstname thôi, dùng state ở trên ô tạo
        updateProfile(auth.currentUser, {
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1,
        }).then(() => {
          history.push("/browse");
        });
        console.log(user);
      })
      .catch((error) => {
        setFirstName("");
        setEmailAddress("");
        setPassword("");
        setError(error.message);
      });
  };
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              placeholder="Password"
              type="password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disable={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
            <Form.Text>
              Already a user? <Form.Linkk to="/signin">Sign in now</Form.Linkk>
            </Form.Text>
            <Form.TextSmall>
              This page is projected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
