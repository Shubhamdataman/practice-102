import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";

import Header from "./components/Header";
import AppRoutes from "./Routes/AppRoutes";



function App() { 
  
  return (
    
      <AuthProvider>
        <CartProvider>
          <Header />
          <AppRoutes /> 
        </CartProvider>
      </AuthProvider>
    
  );
}

export default App;

