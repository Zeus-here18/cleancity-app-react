import { useState } from 'react';
import {
  MapPin, Filter, Calendar, User, Eye, CheckCircle, Clock, AlertTriangle,
} from 'lucide-react';

const DashboardPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock data for issues
  const issues = [
    {
      id: '1',
      title: 'Overflowing garbage bin on Main Street',
      description: 'Large garbage bin near the bus stop is overflowing...',
      category: 'waste',
      location: { address: '123 Main Street, Downtown' },
      status: 'in-progress',
      reportedBy: 'John Doe',
      reportedAt: new Date('2025-01-15T10:30:00'),
      assignedTo: 'Cleaning Team A',
    },
    {
      id: '2',
      title: 'Graffiti on community center wall',
      description: 'Large graffiti covering the side wall...',
      category: 'graffiti',
      location: { address: '456 Community Ave, Midtown' },
      status: 'pending',
      reportedBy: 'Sarah Johnson',
      reportedAt: new Date('2025-01-14T14:20:00'),
    },
    {
      id: '3',
      title: 'Blocked storm drain causing flooding',
      description: 'Storm drain is blocked with debris...',
      category: 'drainage',
      location: { address: '789 Oak Street, Riverside' },
      status: 'resolved',
      reportedBy: 'Mike Chen',
      reportedAt: new Date('2025-01-13T09:15:00'),
      assignedTo: 'Infrastructure Team B',
    },
    {
      id: '4',
      title: 'Pothole on residential street',
      description: 'Large pothole creating safety hazard...',
      category: 'street',
      location: { address: '321 Elm Street, Suburbs' },
      status: 'pending',
      reportedBy: 'Lisa Rodriguez',
      reportedAt: new Date('2025-01-12T16:45:00'),
    },
    {
      id: '5',
      title: 'Broken streetlight in park',
      description: 'Streetlight has been out for over a week...',
      category: 'other',
      location: { address: 'Central Park, Recreation Area' },
      status: 'in-progress',
      reportedBy: 'David Kim',
      reportedAt: new Date('2025-01-11T19:30:00'),
      assignedTo: 'Electrical Team C',
    },
  ];

  const categories = [
    { value: 'all', label: 'All Categories', color: 'bg-gray-100 text-gray-700' },
    { value: 'waste', label: 'Waste Management', color: 'bg-red-100 text-red-700' },
    { value: 'graffiti', label: 'Graffiti/Vandalism', color: 'bg-purple-100 text-purple-700' },
    { value: 'drainage', label: 'Drainage Issues', color: 'bg-blue-100 text-blue-700' },
    { value: 'street', label: 'Street Maintenance', color: 'bg-yellow-100 text-yellow-700' },
    { value: 'other', label: 'Other Issues', color: 'bg-gray-100 text-gray-700' },
  ];

  const statusFilters = [
    { value: 'all', label: 'All Status' },
    { value: 'pending', label: 'Pending' },
    { value: 'in-progress', label: 'In Progress' },
    { value: 'resolved', label: 'Resolved' },
  ];

  const filteredIssues = issues.filter((issue) => {
    const statusMatch = selectedFilter === 'all' || issue.status === selectedFilter;
    const categoryMatch = selectedCategory === 'all' || issue.category === selectedCategory;
    return statusMatch && categoryMatch;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      case 'resolved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <AlertTriangle className="h-4 w-4" />;
      case 'in-progress':
        return <Clock className="h-4 w-4" />;
      case 'resolved':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <AlertTriangle className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category) => {
    const cat = categories.find((c) => c.value === category);
    return cat ? cat.color : 'bg-gray-100 text-gray-700';
  };

  const stats = {
    total: issues.length,
    pending: issues.filter((i) => i.status === 'pending').length,
    inProgress: issues.filter((i) => i.status === 'in-progress').length,
    resolved: issues.filter((i) => i.status === 'resolved').length,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        <h1 className="text-3xl font-bold text-gray-900">Issues Dashboard</h1>
        <p className="text-gray-600 mt-2">Monitor and track reported issues across the city</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <StatCard label="Total Issues" value={stats.total} icon={<Eye className="text-gray-600" />} />
          <StatCard label="Pending" value={stats.pending} icon={<AlertTriangle className="text-yellow-600" />} color="text-yellow-600" bg="bg-yellow-100" />
          <StatCard label="In Progress" value={stats.inProgress} icon={<Clock className="text-blue-600" />} color="text-blue-600" bg="bg-blue-100" />
          <StatCard label="Resolved" value={stats.resolved} icon={<CheckCircle className="text-green-600" />} color="text-green-600" bg="bg-green-100" />
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">
          <div className="flex flex-col md:flex-row md:justify-between gap-4">
            <div className="flex items-center space-x-2 text-sm font-medium text-gray-700">
              <Filter className="h-5 w-5" />
              <span>Filter by:</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)} className="px-4 py-2 border rounded-lg">
                {statusFilters.map((f) => (
                  <option key={f.value} value={f.value}>{f.label}</option>
                ))}
              </select>
              <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="px-4 py-2 border rounded-lg">
                {categories.map((c) => (
                  <option key={c.value} value={c.value}>{c.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Issues List */}
        <div className="space-y-6">
          {filteredIssues.length > 0 ? filteredIssues.map((issue) => (
            <div key={issue.id} className="bg-white rounded-xl shadow-sm border p-6">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold">{issue.title}</h3>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getStatusColor(issue.status)}`}>
                      {getStatusIcon(issue.status)} {issue.status.replace('-', ' ')}
                    </span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${getCategoryColor(issue.category)}`}>
                      {categories.find(c => c.value === issue.category)?.label}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-2">{issue.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {issue.location.address}</span>
                    <span className="flex items-center gap-1"><User className="h-4 w-4" /> {issue.reportedBy}</span>
                    <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {issue.reportedAt.toLocaleDateString()}</span>
                  </div>
                  {issue.assignedTo && (
                    <p className="mt-2 text-sm text-gray-500">
                      <strong>Assigned to:</strong> {issue.assignedTo}
                    </p>
                  )}
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-green-50 text-green-600 rounded-lg">View Details</button>
                  <button className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg">View on Map</button>
                </div>
              </div>
            </div>
          )) : (
            <div className="text-center py-16 text-gray-500">
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <p className="text-lg font-semibold">No issues found</p>
              <p>Try changing your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Small card component for stats
const StatCard = ({ label, value, icon, color = 'text-gray-900', bg = 'bg-gray-100' }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className={`text-2xl font-bold ${color}`}>{value}</p>
      </div>
      <div className={`p-3 rounded-full ${bg}`}>{icon}</div>
    </div>
  </div>
);

export default DashboardPage;
