import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/errorPage.css";
export default function Error() {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <motion.h1 className="error-title">We'll be back shortly</motion.h1>
      <motion.p className="error-message">
        We are fixing a temporary glitch. Sorry for the inconvenience.
      </motion.p>



      <motion.img src="/scooter.png" alt="Error Image"></motion.img>
      <motion.div className="button-container">
        <Button className="button" onClick={() => navigate("/")}>
          Go Back
        </Button>
      </motion.div>
    </div>
  );
}
