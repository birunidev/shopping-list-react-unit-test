import AppTitle from "./components/AppTitle";
import ShoppingList from "./components/ShoppingList";
import ShoppingForm from "./components/ShoppingForm";

function App() {
  return (
    <div className="container mx-auto">
      <AppTitle />
      <ShoppingList />
      <ShoppingForm />
    </div>
  );
}

export default App;
