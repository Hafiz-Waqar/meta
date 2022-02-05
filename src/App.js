import "./App.css";
import CommingSoon from "./Components/CommingSoon";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import LogoBar from "./Components/LogoBar";
import Memories from "./Components/Memories";
import OwnLand from "./Components/OwnLand";
import PLAY2EARN from "./Components/PLAY2EARN";
import RefineLand from "./Components/RefineLand";

function App() {
  return (
    <div className="!bg-[#F1F8F7] ">
      <Header />
      <RefineLand />
      <Memories />
      <LogoBar />
      <OwnLand />
      <PLAY2EARN />
      <CommingSoon />
      <Footer />
    </div>
  );
}

export default App;
