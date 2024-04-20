import styled from "styled-components";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import UpdateUserDataForm from "../ui/UpdateUserDataForm";
import UpdatePasswordForm from "../ui/UpdatePasswordForm";
import { Link } from "react-router-dom";

const ProfileStyled = styled.div`
  width: 90rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 3rem;
`;
function Profile() {
  return (
    <ProfileStyled>
      <Heading as="h1">Update your profile</Heading>
      <Row>
        <Heading as="h3">Update user data</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">Update password</Heading>
        <UpdatePasswordForm />
      </Row>
      <Row className="items-end">
        <Link className="text-red-500">Delete Account</Link>
      </Row>
    </ProfileStyled>
  );
}

export default Profile;
