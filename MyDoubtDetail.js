// My Doubt Detail Component (for editing own doubts and solutions)
const MyDoubtDetail = ({ item, type, onBack }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState(
        type === 'edit' 
            ? { title: item.title, description: item.description, tags: item.tags.join(', ') }
            : { answer: item.myAnswer }
    );

    const handleInputChange = (e) => {
        setEditData({
            ...editData,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = (e) => {
        e.preventDefault();
        if (type === 'edit') {
            alert('Doubt updated successfully!');
        } else {
            alert('Answer updated successfully!');
        }
        setIsEditing(false);
    };

    const getTagColor = (index) => {
        const colors = ['neon-blue', 'neon-green', 'neon-yellow', 'neon-purple'];
        return colors[index % colors.length];
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Back Button */}
            <div className="mb-8 fade-in">
                <button
                    onClick={onBack}
                    className="flex items-center neon-blue hover:text-cyan-300 transition-colors duration-300 mb-4 btn-neon px-4 py-2 rounded-lg"
                >
                    <i className="fas fa-arrow-left mr-2"></i>
                    Back to Profile
                </button>
            </div>

            {type === 'edit' ? (
                // Edit My Doubt View
                <div>
                    {/* Doubt Details Card */}
                    <div className="glass-card rounded-xl p-8 mb-8 slide-up">
                        <div className="flex justify-between items-start mb-6">
                            <h1 className="text-3xl font-bold text-white text-glow">My Doubt</h1>
                            <button
                                onClick={() => setIsEditing(!isEditing)}
                                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                                    isEditing 
                                        ? 'bg-gray-600 text-gray-300 hover:bg-gray-500' 
                                        : 'btn-neon'
                                }`}
                            >
                                <i className={`fas ${isEditing ? 'fa-times' : 'fa-edit'} mr-2`}></i>
                                {isEditing ? 'Cancel' : 'Edit Doubt'}
                            </button>
                        </div>

                        {isEditing ? (
                            <form onSubmit={handleSave}>
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        value={editData.title}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 glass-card rounded-lg text-white placeholder-gray-400 focus:outline-none search-glow transition-all duration-300"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                                    <textarea
                                        name="description"
                                        value={editData.description}
                                        onChange={handleInputChange}
                                        rows="6"
                                        className="w-full px-4 py-3 glass-card rounded-lg text-white placeholder-gray-400 focus:outline-none search-glow transition-all duration-300"
                                        required
                                    ></textarea>
                                </div>
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Tags (comma-separated)</label>
                                    <input
                                        type="text"
                                        name="tags"
                                        value={editData.tags}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 glass-card rounded-lg text-white placeholder-gray-400 focus:outline-none search-glow transition-all duration-300"
                                    />
                                </div>
                                <div className="flex justify-end space-x-4">
                                    <button
                                        type="button"
                                        onClick={() => setIsEditing(false)}
                                        className="px-6 py-3 glass-card rounded-lg text-gray-300 hover:text-white transition-all duration-300"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover-scale pulse-glow transition-all duration-300"
                                    >
                                        <i className="fas fa-save mr-2"></i>
                                        Save Changes
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div>
                                <h2 className="text-2xl font-semibold text-white text-glow mb-4">{item.title}</h2>
                                
                                {/* Meta Info */}
                                <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-gray-400">
                                    <span><i className="fas fa-clock mr-1 neon-green"></i>Asked {item.timeAgo}</span>
                                    <span><i className="fas fa-eye mr-1 neon-yellow"></i>{item.views} views</span>
                                    <span><i className="fas fa-thumbs-up mr-1 neon-blue"></i>{item.upvotes} upvotes</span>
                                    <span><i className="fas fa-comment mr-1 neon-purple"></i>{item.answers} answers</span>
                                </div>

                                {/* Subject Badge */}
                                <div className="mb-6">
                                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium">
                                        <i className="fas fa-book mr-2"></i>
                                        {item.subject}
                                    </span>
                                </div>
                                
                                {/* Description */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-white text-glow mb-3">Question Details</h3>
                                    <p className="text-gray-300 leading-relaxed text-lg">{item.description}</p>
                                </div>
                                
                                {/* Tags */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-white text-glow mb-3">Tags</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {item.tags.map((tag, index) => (
                                            <span key={index} className={`px-4 py-2 glass-card rounded-full text-sm font-medium ${getTagColor(index)} hover-scale`}>
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Answers Section */}
                    <div className="glass-card rounded-xl p-8 slide-in-left">
                        <h3 className="text-2xl font-semibold text-white text-glow mb-6">
                            <i className="fas fa-comments mr-2 neon-green"></i>
                            Answers ({item.answers})
                        </h3>
                        
                        <div className="text-center py-8">
                            <i className="fas fa-comment-dots text-4xl text-gray-500 mb-4 neon-blue"></i>
                            <p className="text-gray-400">Answers from the community will appear here</p>
                        </div>
                    </div>
                </div>
            ) : (
                // Edit My Solution View
                <div>
                    {/* Original Question */}
                    <div className="glass-card rounded-xl p-8 mb-8 slide-up">
                        <h1 className="text-3xl font-bold text-white text-glow mb-4">Original Question</h1>
                        <h2 className="text-xl font-semibold text-white mb-4">{item.title}</h2>
                        <p className="text-gray-300 leading-relaxed mb-6">{item.originalQuestion}</p>
                        
                        <div className="flex items-center space-x-6 text-sm text-gray-400">
                            <span><i className="fas fa-book mr-1 neon-purple"></i>{item.subject}</span>
                            <span><i className="fas fa-clock mr-1 neon-green"></i>Solved {item.timeAgo}</span>
                            <span><i className="fas fa-trophy mr-1 neon-yellow"></i>+{item.pointsEarned} points</span>
                            <span><i className="fas fa-thumbs-up mr-1 neon-blue"></i>{item.upvotes} upvotes</span>
                        </div>
                    </div>

                    {/* My Solution */}
                    <div className="glass-card rounded-xl p-8 slide-in-right">
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="text-2xl font-semibold text-white text-glow">My Solution</h3>
                            <button
                                onClick={() => setIsEditing(!isEditing)}
                                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                                    isEditing 
                                        ? 'bg-gray-600 text-gray-300 hover:bg-gray-500' 
                                        : 'btn-neon'
                                }`}
                            >
                                <i className={`fas ${isEditing ? 'fa-times' : 'fa-edit'} mr-2`}></i>
                                {isEditing ? 'Cancel' : 'Edit Answer'}
                            </button>
                        </div>

                        {isEditing ? (
                            <form onSubmit={handleSave}>
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-300 mb-2">Your Answer</label>
                                    <textarea
                                        name="answer"
                                        value={editData.answer}
                                        onChange={handleInputChange}
                                        rows="12"
                                        className="w-full px-4 py-3 glass-card rounded-lg text-white placeholder-gray-400 focus:outline-none search-glow transition-all duration-300"
                                        required
                                    ></textarea>
                                </div>
                                <div className="flex justify-end space-x-4">
                                    <button
                                        type="button"
                                        onClick={() => setIsEditing(false)}
                                        className="px-6 py-3 glass-card rounded-lg text-gray-300 hover:text-white transition-all duration-300"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover-scale pulse-glow transition-all duration-300"
                                    >
                                        <i className="fas fa-save mr-2"></i>
                                        Update Answer
                                    </button>
                                </div>
                            </form>
                        ) : (
                            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-6">
                                <p className="text-gray-300 leading-relaxed whitespace-pre-line">{item.myAnswer}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};