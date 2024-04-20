import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateUser as updateUserApi } from "../../services/apiUser";
import { useToken } from "../../hooks/useToken";

export function useUpdateUser() {
  const { token } = useToken();
  const queryClient = useQueryClient();
  const { mutate: updateUser, isPending: isLoading } = useMutation({
    mutationFn: ({ name, password }) =>
      updateUserApi({ token, name, password }),
    onSuccess: ({ user }) => {
      toast.success("Successfully Updated!");
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.message);
    },
  });

  return {
    isLoading,
    updateUser,
  };
}
