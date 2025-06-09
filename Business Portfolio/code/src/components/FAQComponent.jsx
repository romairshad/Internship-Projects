
import React, { useContext, useState } from 'react'
import { PlusIcon, MinusIcon } from 'lucide-react'

import { ShopContext } from '../context/ShopContext'

export default function FAQComponent() {
    const {faqs} = useContext(ShopContext);
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
      <h2 className="text-3xl font-bold text-center mb-8">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              {openIndex === index ? (
                <MinusIcon className="w-5 h-5 text-purple-600" />
              ) : (
                <PlusIcon className="w-5 h-5 text-purple-600" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}