import { Route, Routes, useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <h2>About</h2>
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};
const Contact = () => {
  return <h2>Contact</h2>;
};
export default About;
