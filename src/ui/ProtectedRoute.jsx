import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../hooks/useToken";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
function ProtectedRoute({ children }) {
  // 1. load the authenticated user
  const { isLoading, isAuthenticated } = useUser("mytest");
  const navigate = useNavigate();

  //3. If ther is no auth user,  redirect login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [navigate, isAuthenticated, isLoading],
  );

  // 2. while loading, show spinner,

  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  if (isAuthenticated)
    // 4. If auth user render the app
    return children;
}

export default ProtectedRoute;
