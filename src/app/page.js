import { motion } from "framer-motion";

export default function Home() {
  const services = [
    { name: "Permeable Install", description: "Eco-friendly, durable surfaces." },
    { name: "Hybrid Pavement", description: "Pattern asphalt, interlock, or concrete." },
    { name: "Artificial Grass", description: "Low maintenance and realistic turf." },
  ];

  const portfolio = [1, 2, 3, 4, 5];

  return (
    <div className="font-sans">

      {/* Hero / Landing Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-xl">We provide amazing paving and landscaping services.</p>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
        <h2 className="text-4xl font-bold mb-10">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
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

      {/* Portfolio Section */}
      <section className="min-h-screen flex flex-col items-center justify-center p-10 bg-white">
        <h2 className="text-4xl font-bold mb-10">Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
          {portfolio.map((p, i) => (
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

      {/* About Section */}
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

    </div>
  );
}
