import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    id: '01',
    question: 'What types of furniture do you offer?',
    answer: 'We offer a wide range of contemporary furniture including sofas, chairs, tables, beds, storage solutions, and outdoor furniture. Our collection is designed to suit modern aesthetics and functional needs.',
  },
  {
    id: '02',
    question: 'Do you offer international shipping?',
    answer: 'Yes, we offer international shipping to select countries. Please check our shipping policy for more details on eligible countries and shipping rates.',
  },
  {
    id: '03',
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for most items. Products must be in their original condition and packaging. Custom orders may not be eligible for return. Please refer to our return policy page for full details.',
  },
  {
    id: '04',
    question: 'What payment methods do you accept?',
    answer: 'We accept major credit cards (Visa, MasterCard, American Express), PayPal, and financing options through Affirm. All transactions are secure and encrypted.',
  },
];

export default function Faq() {
  const [expandedItems, setExpandedItems] = useState([]);

  const toggleItem = (id) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className=" mx-auto p-6  py-12">
      <h2 className="text-3xl font-bold text-center mb-8">We have got the answers to your questions</h2>
      <div className="space-y-4">
        {faqData.map((item) => (
          <div key={item.id} className="border-b border-gray-200 pb-4">
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => toggleItem(item.id)}
            >
              <div className="flex items-center">
                <span className="text-xl font-semibold mr-4">{item.id}</span>
                <span className="text-lg">{item.question}</span>
              </div>
              {expandedItems.includes(item.id) ? (
                <ChevronUp className="h-6 w-6 text-gray-500" />
              ) : (
                <ChevronDown className="h-6 w-6 text-gray-500" />
              )}
            </button>
            {expandedItems.includes(item.id) && (
              <p className="mt-4 ml-10 text-gray-600">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
