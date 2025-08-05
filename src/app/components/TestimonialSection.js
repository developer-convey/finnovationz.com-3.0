import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Financial Analyst",
    image: "/testimonials/person1.jpg",
    review: "The course completely transformed my understanding of financial markets. The practical approach and real-world examples made complex concepts easy to grasp.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Owner",
    image: "/testimonials/person2.jpg",
    review: "I've tried many financial courses, but this one stands out. The instructors are incredibly knowledgeable and the community support is amazing.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Software Engineer",
    image: "/testimonials/person3.jpg",
    review: "As someone from a non-finance background, I was skeptical at first. But the course made everything so accessible and practical. Highly recommended!",
    rating: 5
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Investment Banker",
    image: "/testimonials/person4.jpg",
    review: "The depth of knowledge and practical insights provided in this course is exceptional. It's helped me make better investment decisions.",
    rating: 5
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "MBA Student",
    image: "/testimonials/person5.jpg",
    review: "The course structure is well thought out, and the support from mentors is incredible. I've learned more in 3 months than I did in a year of self-study.",
    rating: 5
  }
];

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-600">{testimonial.review}</p>
    </div>
  );
};

export default function TestimonialSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Students Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Join thousands of successful learners who have transformed their financial future
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
} 