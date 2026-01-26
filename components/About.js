import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-800 text-white p-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-2xl text-center"
      >
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p>
          We are experts in permeable paving, hybrid pavement, and artificial grass.
          Our mission is to transform spaces into functional and beautiful environments.
        </p>
      </motion.div>
    </section>
  );
}
