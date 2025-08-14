// Solve Doubt Component
const SolveDoubt = () => {
    const [selectedDoubt, setSelectedDoubt] = useState(null);
    const [solution, setSolution] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [filteredDoubts, setFilteredDoubts] = useState(sampleData.doubts);

    const filters = ['All', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science'];

    useEffect(() => {
        let filtered = sampleData.doubts;
        
        if (selectedFilter !== 'All') {
            filtered = filtered.filter(doubt => doubt.subject === selectedFilter);
        }
        
        if (searchTerm) {
            filtered = filtered.filter(doubt => 
                doubt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                doubt.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                doubt.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        }
        
        setFilteredDoubts(filtered);
    }, [searchTerm, selectedFilter]);

    const handleSolveClick = (doubt) => {
        setSelectedDoubt(doubt);
        setSolution('');
    };

    const handleSubmitSolution = (e) => {
        e.preventDefault();
        alert('Solution submitted successfully!');
        setSelectedDoubt(null);
        setSolution('');
    };

    const DoubtListItem = ({ doubt, delay }) => {
        const getTagColor = (index) => {
            const colors = ['neon-blue', 'neon-green', 'neon-yellow', 'neon-purple'];
            return colors[index % colors.length];
        };

        return (
            <div className={`glass-card rounded-xl p-6 mb-4 hover-glow border-l-4 border-neon-green ${delay}`}>
                <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white text-glow mb-2">{doubt.title}</h3>
                        <p className="text-gray-300 mb-3 line-clamp-2">{doubt.description}</p>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                            {doubt.tags.map((tag, index) => (
                                <span key={index} className={`px-3 py-1 glass-card rounded-full text-xs font-medium ${getTagColor(index)}`}>
                                    {tag}
                                </span>
                            ))}
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span><i className="fas fa-user mr-1 neon-blue"></i>{doubt.author}</span>
                            <span><i className="fas fa-clock mr-1 neon-green"></i>{doubt.timeAgo}</span>
                            <span><i className="fas fa-eye mr-1 neon-yellow"></i>{doubt.views} views</span>
                            <span><i className="fas fa-comment mr-1 neon-purple"></i>{doubt.answers} answers</span>
                        </div>
                    </div>
                    
                    <div className="ml-6">
                        <button
                            onClick={() => handleSolveClick(doubt)}
                            className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover-scale pulse-glow transition-all duration-300"
                        >
                            <i className="fas fa-lightbulb mr-2"></i>
                            Solve
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    if (selectedDoubt) {
        return (
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8 fade-in">
                    <button
                        onClick={() => setSelectedDoubt(null)}
                        className="flex items-center neon-blue hover:text-cyan-300 transition-colors duration-300 mb-4 btn-neon px-4 py-2 rounded-lg"
                    >
                        <i className="fas fa-arrow-left mr-2"></i>
                        Back to doubts list
                    </button>
                    <h1 className="text-4xl font-bold text-white text-glow mb-2">
                        Solve This Doubt
                    </h1>
                    <p className="text-gray-300 text-lg">Provide a detailed solution to help the student</p>
                </div>

                {/* Doubt Details */}
                <div className="glass-card rounded-xl p-6 mb-6 slide-in-left">
                    <h2 className="text-2xl font-semibold text-white text-glow mb-3">{selectedDoubt.title}</h2>
                    <p className="text-gray-300 mb-4">{selectedDoubt.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                        {selectedDoubt.tags.map((tag, index) => (
                            <span key={index} className="px-3 py-1 glass-card rounded-full text-xs font-medium neon-blue">
                                {tag}
                            </span>
                        ))}
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span><i className="fas fa-user mr-1 neon-blue"></i>{selectedDoubt.author}</span>
                        <span><i className="fas fa-clock mr-1 neon-green"></i>{selectedDoubt.timeAgo}</span>
                        <span><i className="fas fa-eye mr-1 neon-yellow"></i>{selectedDoubt.views} views</span>
                    </div>
                </div>

                {/* Solution Form */}
                <div className="glass-card rounded-xl p-8 slide-up">
                    <h3 className="text-2xl font-semibold text-white text-glow mb-6">Your Solution</h3>
                    <form onSubmit={handleSubmitSolution}>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-300 mb-3">
                                Detailed Solution *
                            </label>
                            <textarea
                                value={solution}
                                onChange={(e) => setSolution(e.target.value)}
                                rows="12"
                                placeholder="Provide a step-by-step solution. Include explanations, formulas, code examples, or any relevant information that would help the student understand the concept."
                                className="w-full px-4 py-3 glass-card rounded-lg text-white placeholder-gray-400 focus:outline-none search-glow transition-all duration-300"
                                required
                            ></textarea>
                        </div>

                        <div className="flex justify-end space-x-4">
                            <button
                                type="button"
                                onClick={() => setSelectedDoubt(null)}
                                className="px-6 py-3 glass-card rounded-lg text-gray-300 hover:text-white transition-all duration-300"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover-scale pulse-glow transition-all duration-300"
                            >
                                <i className="fas fa-paper-plane mr-2"></i>
                                Submit Solution
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="mb-8 fade-in">
                <h1 className="text-4xl font-bold text-white text-glow mb-2">Solve Doubts</h1>
                <p className="text-gray-300 text-lg">Help fellow students by solving their doubts and earn points</p>
            </div>

            {/* Search Bar */}
            <div className="mb-6 slide-in-left">
                <div className="relative max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <i className="fas fa-search neon-blue"></i>
                    </div>
                    <input
                        type="text"
                        placeholder="Search doubts to solve..."
                        className="block w-full pl-12 pr-4 py-3 glass-card rounded-xl text-white placeholder-gray-400 focus:outline-none search-glow transition-all duration-300"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Filter Buttons */}
            <div className="mb-8 slide-in-right">
                <div className="flex flex-wrap gap-3">
                    {filters.map((filter, index) => (
                        <button
                            key={filter}
                            onClick={() => setSelectedFilter(filter)}
                            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                                selectedFilter === filter
                                    ? 'bg-gradient-to-r from-green-500/30 to-emerald-500/30 text-emerald-400 border border-emerald-500/50 pulse-glow'
                                    : 'glass-card text-gray-300 hover:text-emerald-400 hover:border-emerald-500/30'
                            } delay-${index * 100}`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Doubts List */}
            <div className="slide-up">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-white text-glow">Available Doubts</h2>
                    <div className="text-sm text-gray-400">
                        <i className="fas fa-lightbulb mr-1 neon-green"></i>
                        {filteredDoubts.length} doubts available
                    </div>
                </div>
                
                {filteredDoubts.length > 0 ? (
                    <div className="space-y-4">
                        {filteredDoubts.map((doubt, index) => (
                            <DoubtListItem key={doubt.id} doubt={doubt} delay={`delay-${(index + 1) * 100}`} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 glass-card rounded-xl">
                        <i className="fas fa-search text-6xl text-gray-500 mb-4 neon-green"></i>
                        <p className="text-gray-400 text-lg">No doubts found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};