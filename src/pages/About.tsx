import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Users, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        <div className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-5xl font-bold mb-6">About Urban Vogue</h1>
              <p className="text-xl max-w-2xl mx-auto opacity-90">
                Redefining men's fashion with style, quality, and sophistication
              </p>
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Urban Vogue was founded with a simple mission: to provide modern men with
                  premium fashion that combines style, comfort, and quality. We believe that
                  every man deserves to look and feel his best.
                </p>
                <p>
                  From carefully curated collections to exceptional customer service, we're
                  committed to delivering an unparalleled shopping experience. Our team works
                  tirelessly to source the finest materials and create designs that stand the
                  test of time.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-muted-foreground">
                  Only the finest materials and craftsmanship
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer First</h3>
                <p className="text-muted-foreground">
                  Exceptional service and support always
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center"
              >
                <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Always Evolving</h3>
                <p className="text-muted-foreground">
                  Staying ahead of fashion trends
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-secondary rounded-lg p-8"
            >
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <ul className="space-y-4 text-muted-foreground text-lg">
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-2xl">•</span>
                  <span>Commitment to sustainable and ethical fashion practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-2xl">•</span>
                  <span>Dedication to providing exceptional customer experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-2xl">•</span>
                  <span>Innovation in design while respecting timeless style</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 text-2xl">•</span>
                  <span>Building a community of confident, stylish men</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
