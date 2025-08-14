// Ask Doubt Component
const AskDoubt = () => {
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        tags: ''
    });

    const handleSubjectSelect = (subject) => {
        setSelectedSubject(subject);
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Doubt submitted successfully!');
        setFormData({ title: '', description: '', tags: '' });
        setSelectedSubject(null);
    };

    const SubjectCard = ({ subject, delay }) => (
        <div
            onClick={() => handleSubjectSelect(subject)}
            className={`glass-card rounded-xl p-6 cursor-pointer hover-glow transition-all duration-300 ${delay}`}
        >
            <div className="flex items-center mb-4">
                <div className={`p-4 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-cyan-500/30 mr-4 pulse-glow`}>
                    <i className={`${subject.icon} text-2xl ${subject.color}`}></i>
                </div>
                <div>
                    <h3 className={`text-xl font-semibold text-white text-glow`}>{subject.name}</h3>
                </div>
            </div>
            <p className="text-gray-300 text-sm">{subject.description}</p>
        </div>
    );

    if (selectedSubject) {
        return (
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8 fade-in">
                    <button
                        onClick={() => setSelectedSubject(null)}
                        className="flex items-center neon-blue hover:text-cyan-300 transition-colors duration-300 mb-4 btn-neon px-4 py-2 rounded-lg"
                    >
                        <i className="fas fa-arrow-left mr-2"></i>
                        Back to subjects
                    </button>
                    <h1 className="text-4xl font-bold text-white text-glow mb-2">
                        Ask a <span className={selectedSubject.color}>{selectedSubject.name}</span> Doubt
                    </h1>
                    <p className="text-gray-300 text-lg">Fill out the form below to submit your doubt</p>
                </div>

                <div className="glass-card rounded-xl p-8 slide-up">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-300 mb-3">
                                Doubt Title *
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                placeholder="Write a clear, descriptive title for your doubt"
                                className="w-full px-4 py-3 glass-card rounded-lg text-white placeholder-gray-400 focus:outline-none search-glow transition-all duration-300"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-300 mb-3">
                                Detailed Description *
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                rows="6"
                                placeholder="Provide detailed information about your doubt. Include what you've tried and where you're stuck."
                                className="w-full px-4 py-3 glass-card rounded-lg text-white placeholder-gray-400 focus:outline-none search-glow transition-all duration-300"
                                required
                            ></textarea>
                        </div>

                        <div className="mb-8">
                            <label className="block text-sm font-medium text-gray-300 mb-3">
                                Tags (comma-separated)
                            </label>
                            <input
                                type="text"
                                name="tags"
                                value={formData.tags}
                                onChange={handleInputChange}
                                placeholder="e.g., algorithm, python, sorting"
                                className="w-full px-4 py-3 glass-card rounded-lg text-white placeholder-gray-400 focus:outline-none search-glow transition-all duration-300"
                            />
                        </div>

                        <div className="flex justify-end space-x-4">
                            <button
                                type="button"
                                onClick={() => setSelectedSubject(null)}
                                className="px-6 py-3 glass-card rounded-lg text-gray-300 hover:text-white transition-all duration-300"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover-scale pulse-glow transition-all duration-300"
                            >
                                <i className="fas fa-paper-plane mr-2"></i>
                                Submit Doubt
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8 fade-in">
                <h1 className="text-4xl font-bold text-white text-glow mb-2">Ask a Doubt</h1>
                <p className="text-gray-300 text-lg">Select a subject to get started with your question</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sampleData.subjects.map((subject, index) => (
                    <SubjectCard key={subject.id} subject={subject} delay={`delay-${(index + 1) * 100}`} />
                ))}
            </div>
        </div>
    );
};