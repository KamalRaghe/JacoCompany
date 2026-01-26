import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [1, 2, 3, 4, 5];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-10 bg-white">
      <h2 className="text-4xl font-bold mb-10">Portfolio</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-gray-200 h-40 rounded-lg flex items-center justify-center font-bold text-xl"
          >
            Project {p}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
