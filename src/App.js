// importing all of what i neeed
import "./app.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import Me from "./components/pages/me/me";
import Work from "./components/pages/work/work";
import Contact from "./components/pages/contact/contact";

export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <Me />
      <Work />
      <Contact />
      <Footer />
    </main>
  );
}