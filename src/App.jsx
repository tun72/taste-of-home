import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Ingredients from "./pages/Ingredients";
import Ingredient from "./pages/Ingredient";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { ObserverProvider } from "./context/ObserverContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./ui/ProtectedRoute";
import { DarkModeProvider } from "./context/DarkModeContext";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import History from "./pages/History";
import FoodRecipes from "./pages/FoodRecipes";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });

  return (
    <DarkModeProvider>
      <ObserverProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route path="ingredients" element={<Ingredients />}></Route>
                <Route path="recipes" element={<FoodRecipes />}></Route>

                <Route path="cart" element={<Cart />}></Route>
                <Route path="order" element={<Order />}></Route>
                <Route path="profile" element={<Profile />}></Route>
                <Route path="ingredient/" element={<Ingredients />}></Route>
                <Route
                  path="ingredient/:ingredientId"
                  element={<Ingredient />}
                ></Route>
                <Route path="history" element={<History />}></Route>
              </Route>

              <Route element={<AppLayout />}>
                <Route path="home" element={<Home />}></Route>
              </Route>
              <Route path="about" element={<About />}></Route>
              <Route path="contact" element={<Contact />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route index element={<Navigate replace to="home" />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </BrowserRouter>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: "8px" }}
            toastOptions={{
              success: { duration: 1000 },
              error: { duration: 3000 },
              style: {
                fontSize: "16px",
                maxWidth: "500px",
              },
            }}
          ></Toaster>
        </QueryClientProvider>
      </ObserverProvider>
    </DarkModeProvider>
  );
}

export default App;
