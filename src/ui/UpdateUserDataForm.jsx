import { useEffect, useState } from "react";
import FormRow from "./FormRow";
import Input from "./Input";
import FileInput from "./FileInput";
import Button from "./Button";
import Form from "./Form";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useUpdateUser } from "../features/authentication/useUpdateUser";

function UpdateUserDataForm() {
  const { updateUser, isLoading: isUpdating } = useUpdateUser();
  const { user, isLoading } = useUser();

  // const isUpdating = false;

  const [fullName, setFullName] = useState("");
  const [avatar, setAvatar] = useState(null);

  useEffect(
    function () {
      if (user?.name) setFullName(user?.name);
    },
    [user],
  );

  if (isLoading) return <Spinner />;

  const { email } = user;

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    updateUser({ name: fullName });
  }

  function handelCancel() {
    setFullName("");
    setAvatar(null);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input value={email} disabled />
      </FormRow>
      <FormRow label="Full name">
        <Input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
          disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Avatar image">
        <FileInput
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
      </FormRow>
      <FormRow>
        <Button type="reset" variation="secondary" onClick={handelCancel}>
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateUserDataForm;
