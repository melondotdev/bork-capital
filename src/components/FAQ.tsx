import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is Bork Capital?",
    answer:
      "Bork Capital is a community-driven memecoin project built on the principle of never selling. By locking and staking $BORK tokens, we create a flywheel of confidence and long-term growth for true believers.",
  },
  {
    question: "What makes $BORK unique?",
    answer:
      "Unlike many projects that dump tokens, Bork Capital never sells. All $BORK tokens are either staked or held in the treasury, fueling a positive economic cycle that rewards the community.",
  },
  {
    question: "How can I join the community?",
    answer:
      "Join our vibrant community on X (Twitter) @borkinstitute and stay updated on our latest initiatives. We're a close-knit crew that believes in long-term success and a good meme.",
  },
  {
    question: "Is any of this financial advice?",
    answer:
      "Not at all. Everything here is for fun and community building. Always do your own research before making any financial decisions.",
  }
];

export function FAQ() {
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (expandedItems.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about Bork Capital and how to get involved
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
              >
                <span className="font-medium text-gray-900">{item.question}</span>
                <ChevronDown
                  size={20}
                  className={`text-gray-500 transition-transform duration-300 ${
                    expandedItems.has(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`px-6 transition-all duration-300 ${
                  expandedItems.has(index)
                    ? 'max-h-48 pb-4 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
