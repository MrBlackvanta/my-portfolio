"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type TestimonialType = {
  quote: string;
  name: string;
  position: string;
  company: string;
  image: string;
};

const testimonials: TestimonialType[] = [
  {
    quote:
      "Working with [Your Name] was a game-changer for our business. Their attention to detail and creative problem-solving helped us launch our platform ahead of schedule.",
    name: "Sarah Johnson",
    position: "CEO",
    company: "TechStart Inc.",
    image: "https://images.pexels.com/photos/532220/pexels-photo-532220.jpeg",
  },
  {
    quote:
      "Exceptional development skills combined with an eye for design. [Your Name] delivered a website that exceeded our expectations and has received praise from our customers.",
    name: "Michael Chen",
    position: "Marketing Director",
    company: "Global Solutions",
    image: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg",
  },
  {
    quote:
      "We hired [Your Name] to rebuild our outdated website, and the results were fantastic. Great communication throughout the project and the final product was exactly what we needed.",
    name: "Jessica White",
    position: "Product Manager",
    company: "Innovate Labs",
    image: "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="testimonials" className="section-container bg-background/80" ref={ref}>
      <h2 className="section-title">Testimonials</h2>
      <p className="text-center text-lg max-w-2xl mx-auto mb-12 text-egyptian-blue/80">
        What my clients say about working with me on their projects.
      </p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard testimonial={testimonial} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: TestimonialType;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-4"
    >
      <div className="egyptian-card p-8 relative">
        {/* Quote Icon */}
        <div className="absolute -top-5 -left-5 w-10 h-10 gold-gradient rounded-full flex items-center justify-center">
          <Quote className="w-5 h-5 text-white" />
        </div>

        <blockquote className="text-lg text-egyptian-blue/90 mb-6 italic">
          "{testimonial.quote}"
        </blockquote>

        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-egyptian-gold mr-4">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={48}
              height={48}
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-cormorant text-lg font-semibold text-egyptian-blue">
              {testimonial.name}
            </h4>
            <p className="text-sm text-egyptian-blue/70">
              {testimonial.position}, {testimonial.company}
            </p>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-4 right-4 w-16 h-16 bg-egyptian-pattern opacity-5" />
      </div>
    </motion.div>
  );
};