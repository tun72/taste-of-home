import FormRow from "./FormRow";
import Input from "./Input";
import Button from "./Button";
import Form from "./Form";
import { useEffect, useState } from "react";
import { useUpdateUser } from "../features/authentication/useUpdateUser";

function UpdatePasswordForm() {
  const [confPassword, setConfPassword] = useState("");
  const [curPassword, setCurPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const { updateUser, isLoading } = useUpdateUser();

  useEffect(
    function () {
      if (confPassword.length !== newPassword.length) return;
      if (confPassword !== newPassword)
        setMessage((mesg) => "Password does not metch");
      else setMessage((mesg) => "");
    },
    [setMessage, confPassword, newPassword],
  );

  function handelSubmit(e) {
    e.preventDefault();
    if (!newPassword || !confPassword || !curPassword) return;
    updateUser(
      { password: { newPassword, confPassword, curPassword } },
      {
        onSuccess: () => {
          clear();
        },
      },
    );
  }

  function clear() {
    setConfPassword("");
    setNewPassword("");
    setCurPassword("");
  }

  return (
    <Form
      onSubmit={(e) => {
        handelSubmit(e);
      }}
    >
      <FormRow label="current password">
        <Input
          type="password"
          id="current password"
          onChange={(e) => setCurPassword(e.target.value)}
          value={curPassword}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow label="new password">
        <Input
          type="password"
          id="current password"
          onChange={(e) => setConfPassword(e.target.value)}
          value={confPassword}
          disabled={isLoading}
        />
      </FormRow>

      <FormRow label="new password">
        <Input
          type="password"
          id="new password"
          onChange={(e) => setNewPassword(e.target.value)}
          value={newPassword}
          disabled={isLoading}
        />
      </FormRow>

      <p className="text-red-400">{message}</p>

      <FormRow>
        <Button onClick={clear} variation="secondary" type="reset">
          Clear
        </Button>
        <Button disabled={isLoading}>Update account</Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;
