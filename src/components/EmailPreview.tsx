import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { templates } from '@/lib/utils';

export default function EmailPreview({ formData, selectedTemplateId }) {
  const [preview, setPreview] = useState({ subject: '', content: '' });

  useEffect(() => {
    if (selectedTemplateId) {
      const template = templates.find(t => t.id === selectedTemplateId);
      if (template) {
        let subject = template.subject;
        let content = template.content;

        // Replace placeholders with form data or placeholder text
        const fields = [
          'recipientName',
          'eventName',
          'careerField',
          'businessDescription',
          'interestingDetail',
          'yourName',
          'representingCompany'
        ];

        fields.forEach(field => {
          const value = formData?.[field] || `[${field}]`;
          const regex = new RegExp(`{${field}}`, 'g');
          subject = subject.replace(regex, value);
          content = content.replace(regex, value);
        });

        setPreview({ subject, content });
      }
    }
  }, [selectedTemplateId, formData]);

  if (!selectedTemplateId) {
    return (
      <div className="text-center p-6 text-gray-500">
        Please select a template to see the preview
      </div>
    );
  }

  const handleCopy = () => {
    const fullEmail = `Subject: ${preview.subject}\n\n${preview.content}`;
    navigator.clipboard.writeText(fullEmail);
  };

  const handleOpenGmail = () => {
    const subject = encodeURIComponent(preview.subject);
    const body = encodeURIComponent(preview.content);
    const cc = encodeURIComponent([
      'kimberly@konnectionscertification.com',
      'stenorio54@hotmail.com',
      'alyy.bieber1994@gmail.com',
      'stevenrecinos2001@gmail.com'
    ].join(','));
    
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&su=${subject}&body=${body}&cc=${cc}`,
      '_blank'
    );
  };

  return (
    <div className="space-y-4">
      <div className="bg-gray-50 rounded-lg p-6 border">
        <h3 className="font-semibold mb-2">Subject: {preview.subject}</h3>
        <div className="whitespace-pre-wrap">{preview.content}</div>
      </div>

      <div className="flex gap-2">
        <Button onClick={handleCopy}>Copy to Clipboard</Button>
        <Button variant="outline" onClick={handleOpenGmail}>
          Open in Gmail
        </Button>
      </div>
    </div>
  );
}