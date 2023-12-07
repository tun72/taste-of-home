import About from "./pages/About";
import Contact from "./pages/Contact";
import FoodRecipe from "./pages/FoodRecipe";
import Home from "./pages/Home";
import Ingredients from "./pages/Ingredients";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import { ObserverProvider } from "./context/ObserverContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });

  return (
    <ObserverProvider>
      <CartProvider>
        <QueryClientProvider client={queryClient}>
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route path="home" element={<Home />}></Route>
                <Route path="food-recipe" element={<FoodRecipe />}></Route>
                <Route path="ingredients" element={<Ingredients />}></Route>
                <Route path="about" element={<About />}></Route>
                <Route path="contact" element={<Contact />}></Route>
                <Route path="cart" element={<Cart />}></Route>
                <Route
                  path="ingredients/:ingredientId"
                  element={<Ingredients />}
                ></Route>
              </Route>

              <Route index element={<Navigate replace to="home" />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </CartProvider>
    </ObserverProvider>
  );
}

export default App;
