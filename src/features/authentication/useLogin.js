import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiUser";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: ({ token, user }) => {
      console.log(user);
      localStorage.setItem("token", JSON.stringify(token));
      queryClient.setQueriesData(["user"], user);
      navigate("/ingredients");
    },
    onError: () => {
      toast.error("Authentication fail!");
    },
  });

  return { login, isPending };
}
