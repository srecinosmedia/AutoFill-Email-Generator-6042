import { useForm } from 'react-hook-form';
import { templates } from '@/lib/utils';

export default function EmailForm({ onFormChange, selectedTemplateId, onTemplateChange }) {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    onFormChange(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select
          value={selectedTemplateId || ''}
          onChange={(e) => onTemplateChange(Number(e.target.value))}
          className="w-full p-2 border rounded"
        >
          <option value="">Select a template</option>
          {templates.map(template => (
            <option key={template.id} value={template.id}>
              {template.name}
            </option>
          ))}
        </select>

        <input
          {...register('recipientEmail')}
          placeholder="Recipient Email"
          className="w-full p-2 border rounded"
          type="email"
          onChange={(e) => onFormChange({ ...register('recipientEmail').value, recipientEmail: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          {...register('recipientName')}
          placeholder="Recipient Name"
          className="w-full p-2 border rounded"
          onChange={(e) => onFormChange({ ...register('recipientName').value, recipientName: e.target.value })}
        />
        <input
          {...register('yourName')}
          placeholder="Your Name"
          className="w-full p-2 border rounded"
          onChange={(e) => onFormChange({ ...register('yourName').value, yourName: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          {...register('eventName')}
          placeholder="Event Name"
          className="w-full p-2 border rounded"
          onChange={(e) => onFormChange({ ...register('eventName').value, eventName: e.target.value })}
        />
        <input
          {...register('careerField')}
          placeholder="Career Field"
          className="w-full p-2 border rounded"
          onChange={(e) => onFormChange({ ...register('careerField').value, careerField: e.target.value })}
        />
      </div>

      <input
        {...register('representingCompany')}
        placeholder="Representing Company"
        className="w-full p-2 border rounded"
        onChange={(e) => onFormChange({ ...register('representingCompany').value, representingCompany: e.target.value })}
      />

      <textarea
        {...register('businessDescription')}
        placeholder="Business Description"
        className="w-full p-2 border rounded h-24"
        onChange={(e) => onFormChange({ ...register('businessDescription').value, businessDescription: e.target.value })}
      />

      <textarea
        {...register('interestingDetail')}
        placeholder="Interesting Detail from Conversation"
        className="w-full p-2 border rounded h-24"
        onChange={(e) => onFormChange({ ...register('interestingDetail').value, interestingDetail: e.target.value })}
      />
    </form>
  );
}