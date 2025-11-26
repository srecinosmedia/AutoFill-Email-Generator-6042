import { useState } from 'react';

const questionnaire = [
  {
    title: 'Booking and communication',
    questions: [
      { id: 'booking_easy', label: 'Was booking straightforward?' },
      { id: 'info_before_event', label: 'Did you get all the info you needed before the event?' },
    ],
  },
  {
    title: 'During the event',
    questions: [
      { id: 'arrival', label: 'Did I arrive on time and prepared?' },
      { id: 'blend_in', label: 'Did I blend in well and capture moments naturally?' },
      { id: 'coverage', label: 'Did you feel I covered the key parts of the event?' },
    ],
  },
  {
    title: 'Photos delivered',
    questions: [
      { id: 'final_photos', label: 'Are you happy with the final photos?' },
      { id: 'editing_style', label: 'Was the editing style what you expected?' },
      { id: 'delivery_time', label: 'Was the delivery time good for your needs?' },
    ],
  },
  {
    title: 'Overall experience',
    questions: [
      { id: 'favorite_part', label: 'What was your favorite part of working together?' },
      { id: 'improvements', label: 'Is there anything I could improve for future events?' },
    ],
  },
  {
    title: 'Future',
    questions: [
      { id: 'book_again', label: 'Would you book me again?' },
      { id: 'wish_offered', label: 'Anything you wish I offered or did differently?' },
    ],
  },
];

export default function PhotographyQuestionnaire() {
  const [responses, setResponses] = useState({});

  const handleChange = (id, value) => {
    setResponses(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formatted = questionnaire
      .map(section => {
        const sectionResponses = section.questions
          .map(q => `${q.label}\n${responses[q.id] || ''}`)
          .join('\n\n');
        return `${section.title}\n${sectionResponses}`;
      })
      .join('\n\n');

    const body = encodeURIComponent(`${formatted}\n\nSent via your photography questionnaire.`);
    window.location.href = `mailto:srecinosmedia@gmail.com?subject=Event%20Photography%20Questionnaire&body=${body}`;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow rounded-lg p-6 space-y-6">
        <header className="space-y-2">
          <p className="text-sm font-medium text-indigo-600">Event photography questionnaire</p>
          <h1 className="text-3xl font-bold text-gray-900">Tell me about your experience</h1>
          <p className="text-gray-600">Your feedback helps me keep improving. Please share as much detail as you like.</p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6">
          {questionnaire.map(section => (
            <section key={section.title} className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
              <div className="space-y-4">
                {section.questions.map(question => (
                  <div key={question.id} className="space-y-1">
                    <label htmlFor={question.id} className="block text-sm font-medium text-gray-700">
                      {question.label}
                    </label>
                    <textarea
                      id={question.id}
                      value={responses[question.id] || ''}
                      onChange={(e) => handleChange(question.id, e.target.value)}
                      className="w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 text-gray-900"
                      rows={2}
                    />
                  </div>
                ))}
              </div>
            </section>
          ))}

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-200 rounded-md shadow"
            >
              Send to srecinosmedia@gmail.com
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
