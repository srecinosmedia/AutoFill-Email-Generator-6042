import { useState } from 'react';
import EmailForm from './EmailForm';
import EmailPreview from './EmailPreview';

export default function EmailGenerator() {
  const [selectedTemplateId, setSelectedTemplateId] = useState(null);
  const [formData, setFormData] = useState({});

  const handleFormChange = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Konnections Email Generator</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Email Details</h2>
            <EmailForm
              onFormChange={handleFormChange}
              selectedTemplateId={selectedTemplateId}
              onTemplateChange={setSelectedTemplateId}
            />
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Preview</h2>
            <EmailPreview
              formData={formData}
              selectedTemplateId={selectedTemplateId}
            />
          </div>
        </div>
      </div>
    </div>
  );
}