import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { IndexPage } from "./pages/IndexPage";
import { Navbar } from "./components/Navbar/Navbar";
import { LoginPage } from "./pages/LoginPage";
import { AdminPage } from "./pages/AdminPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductPage } from "./pages/ProductPage";
import { UsersNavigation } from "./pages/UsersPage";
import { UserProfile } from "./pages/UserProfile";
import { UserSettings } from "./pages/UserSettings";

function App() {
  return (
    <BrowserRouter>
      <>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:productId" element={<ProductPage />} />
            <Route path="/users/:usersId" element={<UsersNavigation />}>
              <Route path="profile" element={<UserProfile />} />
              <Route path="settings" element={<UserSettings />} />
            </Route>
          </Routes>
        </main>
      </>
    </BrowserRouter>
  );
}

export default App;
