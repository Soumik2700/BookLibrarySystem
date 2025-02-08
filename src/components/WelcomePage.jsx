import { motion } from "framer-motion";
import "./WelcomePage.css";

const categories = [
    "Fiction",
    "Non-Fiction",
    "Science Fiction",
];

const WelcomePage = () => {
    return (
        <motion.div
            className="welcome-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
        >
            <motion.h1
                className="welcome-title"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}
            >
                Welcome to Book Haven 📚
            </motion.h1>
            <motion.p
                className="welcome-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 0.5 }}
            >
                Explore a variety of book categories!
            </motion.p>
            <motion.ul
                className="category-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }}
            >
                {categories.map((category, index) => (
                    <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                    >
                        📖 {category}
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
    );
};

export default WelcomePage;
