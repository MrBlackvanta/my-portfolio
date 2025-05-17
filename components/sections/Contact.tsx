"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, MapPin, Phone, Linkedin, Github, Twitter } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      toast.success("Message sent successfully!");
      form.reset();
      setIsSubmitting(false);
    }, 1500);
  }

  return (
    <section id="contact" className="section-container" ref={ref}>
      <h2 className="section-title">Get In Touch</h2>
      <p className="text-center text-lg max-w-2xl mx-auto mb-12 text-egyptian-blue/80">
        Feel free to reach out if you have any questions or want to work together.
      </p>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="egyptian-card h-full flex flex-col justify-between">
            <div>
              <h3 className="font-cormorant text-2xl font-semibold mb-6 text-egyptian-blue">
                Contact Information
              </h3>
              <p className="text-egyptian-blue/80 mb-8">
                I'm currently available for freelance work. If you have a project that needs some creative touch, I'd love to hear about it.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-egyptian-blue/70">Email</h4>
                    <p className="text-egyptian-blue">contact@yourname.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-egyptian-blue/70">Location</h4>
                    <p className="text-egyptian-blue">San Francisco, CA</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-egyptian-blue/70">Phone</h4>
                    <p className="text-egyptian-blue">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-cormorant text-xl font-semibold mb-4 text-egyptian-blue">
                Find Me On
              </h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-egyptian-blue/10 flex items-center justify-center hover:bg-egyptian-blue/20 transition-colors"
                >
                  <Linkedin className="w-5 h-5 text-egyptian-blue" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-egyptian-blue/10 flex items-center justify-center hover:bg-egyptian-blue/20 transition-colors"
                >
                  <Github className="w-5 h-5 text-egyptian-blue" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-egyptian-blue/10 flex items-center justify-center hover:bg-egyptian-blue/20 transition-colors"
                >
                  <Twitter className="w-5 h-5 text-egyptian-blue" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="egyptian-card">
            <h3 className="font-cormorant text-2xl font-semibold mb-6 text-egyptian-blue">
              Send Me a Message
            </h3>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            className="border-egyptian-gold/30 focus-visible:ring-egyptian-gold"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your email"
                            type="email"
                            {...field}
                            className="border-egyptian-gold/30 focus-visible:ring-egyptian-gold"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message"
                          {...field}
                          className="min-h-[150px] border-egyptian-gold/30 focus-visible:ring-egyptian-gold"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="btn-primary w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}