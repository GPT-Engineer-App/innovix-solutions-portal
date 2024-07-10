import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CheckCircle2, Star } from "lucide-react";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const handleNavClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleNavClick);

    return () => {
      document.removeEventListener('click', handleNavClick);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Innovix Solutions</h1>
            <p className="text-xl mb-8">Innovating the future with cutting-edge solutions.</p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">Get Started</Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="mb-4">At Innovix Solutions, we are dedicated to providing innovative and high-quality solutions to meet the needs of our clients. Our mission is to drive growth and efficiency through cutting-edge technology and exceptional service.</p>
            <p className="mb-4">Our vision is to be a leader in the industry, known for our commitment to excellence and our ability to deliver results that exceed expectations.</p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto bg-purple-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <Carousel className="max-w-xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <Card>
                    <CardContent className="flex flex-col items-center text-center pt-6">
                      <img src="/placeholder.svg" alt={testimonial.name} className="w-20 h-20 rounded-full mb-4" />
                      <p className="mb-4 italic">"{testimonial.quote}"</p>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <nav className="mb-4 md:mb-0">
              <ul className="flex space-x-4">
                <li><a href="#about" className="hover:text-purple-400">About</a></li>
                <li><a href="#services" className="hover:text-purple-400">Services</a></li>
                <li><a href="#testimonials" className="hover:text-purple-400">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-purple-400">Contact</a></li>
              </ul>
            </nav>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-purple-400"><i className="fab fa-facebook"></i></a>
              <a href="#" className="hover:text-purple-400"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const services = [
  {
    icon: <Star className="h-8 w-8 text-purple-600" />,
    title: "Thesis Writing",
    description: "Expert guidance and support for your academic thesis."
  },
  {
    icon: <CheckCircle2 className="h-8 w-8 text-purple-600" />,
    title: "Research Paper Development",
    description: "Comprehensive research paper development services."
  },
  {
    icon: <Star className="h-8 w-8 text-purple-600" />,
    title: "Web Development",
    description: "Custom web development solutions tailored to your needs."
  },
  {
    icon: <CheckCircle2 className="h-8 w-8 text-purple-600" />,
    title: "Custom App Development",
    description: "Innovative app development services for various platforms."
  },
  {
    icon: <Star className="h-8 w-8 text-purple-600" />,
    title: "Software Solutions",
    description: "Robust software solutions to streamline your business processes."
  },
  {
    icon: <CheckCircle2 className="h-8 w-8 text-purple-600" />,
    title: "Business Analysis",
    description: "In-depth business analysis to drive growth and efficiency."
  },
  {
    icon: <Star className="h-8 w-8 text-purple-600" />,
    title: "AI/ML-Powered Applications",
    description: "Cutting-edge AI/ML-powered applications for various industries."
  }
];

const testimonials = [
  {
    quote: "Innovix Solutions has transformed our business with their innovative solutions.",
    name: "Jane Doe",
    title: "CEO, Tech Innovators"
  },
  {
    quote: "Their team is highly professional and delivers exceptional results.",
    name: "John Smith",
    title: "CTO, Future Systems"
  },
  {
    quote: "We highly recommend Innovix Solutions for their expertise and dedication.",
    name: "Emily Johnson",
    title: "Operations Manager, Global Enterprises"
  }
];

export default Index;