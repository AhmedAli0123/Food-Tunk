"use client";

import React, { useState } from "react";
import Link from "next/link";

const faqData = [
  {
    question: "How do we serve food?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    question: "How is our food quality?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    question: "How do we give home delivery?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    question: "How can we get in touch with you?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    question: "What will be delivered? And When?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    question: "Is this restaurant 24 hours open?",
    answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const FAQPage: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header
        className="h-64 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/hero.png')" }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold">FAQ Page</h1>
          <p className="mt-2">
            <Link href="/" className="text-yellow-400">Home</Link> &gt; FAQ
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Questions & Answers</h2>
        <p className="text-center text-gray-600 mb-8">
          Lorem ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <span className="text-xl">{openIndex === index ? "-" : "+"}</span>
              </div>
              {openIndex === index && (
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FAQPage;
