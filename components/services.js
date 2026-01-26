import { motion } from "framer-motion";

const services = [
  { name: "Permeable Install", description: "Eco-friendly, durable surfaces." },
  { name: "Hybrid Pavement", description: "Pattern asphalt, interlock, or concrete." },
  { name: "Artificial Grass", description: "Low maintenance and realistic turf." },
];

export default function Services() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
      <h2 className="text-4xl font-bold mb-10">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-lg text-center"
          >
            <h3 className="text-2xl font-semibold mb-2">{service.name}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
