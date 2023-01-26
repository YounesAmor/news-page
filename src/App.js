import "./App.css";
import NavBar from "./components/navBar";
import MainContent from "./components/mainContent";
import Footer from "./components/footer";
function App() {
  return (
    <div className="App  h-screen w-screen ">
      <div className="mt-[50px] mx-[170px]">
        <NavBar />
      </div>
      <div className="mt-12 mx-[170px]">
        <MainContent />
      </div>
      <div className="mt-12 mx-[170px]">
        <Footer />
      </div>
    </div>
  );
}

export default App;
