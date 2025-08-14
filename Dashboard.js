// Dashboard Component
const Dashboard = ({ onDoubtClick }) => {
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

    const StatCard = ({ icon, title, value, color, delay }) => (
        <div className={`glass-card rounded-xl p-6 hover-glow float ${delay}`}>
            <div className="flex items-center">
                <div className={`p-4 rounded-full bg-gradient-to-r ${color} mr-4 pulse-glow`}>
                    <i className={`${icon} text-2xl text-white`}></i>
                </div>
                <div>
                    <p className="text-sm font-medium text-gray-400">{title}</p>
                    <p className="text-3xl font-bold text-white text-glow">{value}</p>
                </div>
            </div>
        </div>
    );

    const DoubtCard = ({ doubt, delay }) => {
        const getTagColor = (index) => {
            const colors = ['neon-blue', 'neon-green', 'neon-yellow', 'neon-purple'];
            return colors[index % colors.length];
        };

        return (
            <div 
                className={`glass-card rounded-xl p-6 mb-6 hover-glow border-l-4 border-neon-blue cursor-pointer transition-all duration-300 ${delay}`}
                onClick={() => onDoubtClick(doubt)}
            >
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white text-glow mb-2 hover:text-cyan-400 transition-colors duration-300">{doubt.title}</h3>
                </div>
                
                <p className="text-gray-300 mb-4 line-clamp-2">{doubt.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                    {doubt.tags.map((tag, index) => (
                        <span key={index} className={`px-3 py-1 glass-card rounded-full text-xs font-medium ${getTagColor(index)}`}>
                            {tag}
                        </span>
                    ))}
                </div>
                
                <div className="flex justify-between items-center text-sm text-gray-400">
                    <div className="flex items-center space-x-4">
                        <span><i className="fas fa-user mr-1 neon-blue"></i>{doubt.author}</span>
                        <span><i className="fas fa-clock mr-1 neon-green"></i>{doubt.timeAgo}</span>
                        <span><i className="fas fa-eye mr-1 neon-yellow"></i>{doubt.views} views</span>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                        <button 
                            className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <i className="fas fa-thumbs-up mr-1"></i>
                            {doubt.upvotes}
                        </button>
                        <button 
                            className="flex items-center text-gray-400 hover:text-green-400 transition-colors duration-300"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <i className="fas fa-comment mr-1"></i>
                            {doubt.answers}
                        </button>
                        <button 
                            className="flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-300"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <i className="fas fa-share mr-1"></i>
                            Share
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Welcome Section */}
            <div className="mb-8 fade-in">
                <h1 className="text-4xl font-bold text-white text-glow mb-2">
                    Welcome <span className="neon-blue">Sakshi</span>!
                </h1>
                <p className="text-gray-300 text-lg">Ready to solve some doubts today?</p>
            </div>

            {/* Search Bar */}
            <div className="mb-8 slide-in-left">
                <div className="relative max-w-md">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <i className="fas fa-search neon-blue"></i>
                    </div>
                    <input
                        type="text"
                        placeholder="Search for doubts, topics, or subjects..."
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
                                    ? 'bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-cyan-400 border border-cyan-500/50 pulse-glow'
                                    : 'glass-card text-gray-300 hover:text-cyan-400 hover:border-cyan-500/30'
                            } delay-${index * 100}`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard
                    icon="fas fa-question-circle"
                    title="Doubts Asked"
                    value={sampleData.user.stats.doubtsAsked}
                    color="from-blue-500 to-cyan-500"
                    delay="delay-100"
                />
                <StatCard
                    icon="fas fa-check-circle"
                    title="Doubts Solved"
                    value={sampleData.user.stats.doubtsSolved}
                    color="from-green-500 to-emerald-500"
                    delay="delay-200"
                />
                <StatCard
                    icon="fas fa-trophy"
                    title="Points Earned"
                    value={sampleData.user.stats.pointsEarned}
                    color="from-yellow-500 to-orange-500"
                    delay="delay-300"
                />
                <StatCard
                    icon="fas fa-medal"
                    title="Current Rank"
                    value={`#${sampleData.user.stats.currentRank}`}
                    color="from-purple-500 to-pink-500"
                    delay="delay-400"
                />
            </div>

            {/* Recent Doubts */}
            <div className="slide-up">
                <h2 className="text-3xl font-bold text-white text-glow mb-6">Recent Doubts</h2>
                {filteredDoubts.length > 0 ? (
                    filteredDoubts.map((doubt, index) => (
                        <DoubtCard key={doubt.id} doubt={doubt} delay={`delay-${(index + 1) * 100}`} />
                    ))
                ) : (
                    <div className="text-center py-12 glass-card rounded-xl">
                        <i className="fas fa-search text-6xl text-gray-500 mb-4 neon-blue"></i>
                        <p className="text-gray-400 text-lg">No doubts found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
};