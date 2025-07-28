import React, { useState } from 'react';
import { Camera, MapPin, Send, Upload, AlertCircle } from 'lucide-react';

const ReportIssuePage = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    location: '',
    photos: [],
    reporterName: '',
    reporterEmail: '',
    urgent: false
  });

  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    { value: 'waste', label: 'Waste Management', color: 'bg-red-100 text-red-700' },
    { value: 'graffiti', label: 'Graffiti/Vandalism', color: 'bg-purple-100 text-purple-700' },
    { value: 'drainage', label: 'Drainage Issues', color: 'bg-blue-100 text-blue-700' },
    { value: 'street', label: 'Street Maintenance', color: 'bg-yellow-100 text-yellow-700' },
    { value: 'other', label: 'Other Issues', color: 'bg-gray-100 text-gray-700' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileUpload = (files) => {
    if (files) {
      const newFiles = Array.from(files).filter(file => file.type.startsWith('image/'));
      setFormData(prev => ({
        ...prev,
        photos: [...prev.photos, ...newFiles].slice(0, 5)
      }));
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const removePhoto = (index) => {
    setFormData((prev) => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    alert('Issue reported successfully!');
    setFormData({
      title: '',
      description: '',
      category: '',
      location: '',
      photos: [],
      reporterName: '',
      reporterEmail: '',
      urgent: false
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* ... no changes in the return block */}
      {/* just reuse your existing JSX structure here (no need to paste it all again) */}
    </div>
  );
};

export default ReportIssuePage;
