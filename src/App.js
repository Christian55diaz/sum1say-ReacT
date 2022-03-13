// importing all of what i neeed
import "./app.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import AboutMe from "./components/pages/me/me";
import MyWork from "./components/pages/work/work";
import ContactMe from "./components/pages/contactme/contact-me";

function App() {
  return (
    <div className="App" id="Home">
      <header className="nav-header z-index">
        <Navbar />
      </header>
      <main>
        <MyWork />
        <AboutMe />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
}
// EXPORTING
export default App;