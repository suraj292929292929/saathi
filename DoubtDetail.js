// Doubt Detail Component
const DoubtDetail = ({ doubt, onBack }) => {
    const [answer, setAnswer] = useState('');

    const handleSubmitAnswer = (e) => {
        e.preventDefault();
        if (answer.trim()) {
            alert('Answer submitted successfully!');
            setAnswer('');
        }
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
                    Back to Dashboard
                </button>
            </div>

            {/* Doubt Details Card */}
            <div className="glass-card rounded-xl p-8 mb-8 slide-up">
                {/* Title */}
                <h1 className="text-3xl font-bold text-white text-glow mb-4">{doubt.title}</h1>
                
                {/* Author and Meta Info */}
                <div className="flex flex-wrap items-center gap-6 mb-6 text-sm text-gray-400">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-3 pulse-glow">
                            {doubt.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                            <div className="text-white font-medium">{doubt.author}</div>
                            <div className="text-gray-400 text-xs">Asked {doubt.timeAgo}</div>
                        </div>
                    </div>
                    
                    <div className="flex items-center space-x-6">
                        <span><i className="fas fa-eye mr-1 neon-yellow"></i>{doubt.views} views</span>
                        <span><i className="fas fa-thumbs-up mr-1 neon-blue"></i>{doubt.upvotes} upvotes</span>
                        <span><i className="fas fa-comment mr-1 neon-green"></i>{doubt.answers} answers</span>
                    </div>
                </div>

                {/* Subject Badge */}
                <div className="mb-6">
                    <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-400 text-sm font-medium">
                        <i className="fas fa-book mr-2"></i>
                        {doubt.subject}
                    </span>
                </div>
                
                {/* Description */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white text-glow mb-3">Question Details</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">{doubt.description}</p>
                </div>
                
                {/* Tags */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white text-glow mb-3">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                        {doubt.tags.map((tag, index) => (
                            <span key={index} className={`px-4 py-2 glass-card rounded-full text-sm font-medium ${getTagColor(index)} hover-scale`}>
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-4 pt-4 border-t border-gray-600">
                    <button className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/5">
                        <i className="fas fa-thumbs-up mr-2"></i>
                        Upvote ({doubt.upvotes})
                    </button>
                    <button className="flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/5">
                        <i className="fas fa-share mr-2"></i>
                        Share
                    </button>
                    <button className="flex items-center text-gray-400 hover:text-yellow-400 transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-white/5">
                        <i className="fas fa-bookmark mr-2"></i>
                        Save
                    </button>
                </div>
            </div>

            {/* Answer Form */}
            <div className="glass-card rounded-xl p-8 slide-in-left">
                <h3 className="text-2xl font-semibold text-white text-glow mb-6">
                    <i className="fas fa-lightbulb mr-2 neon-yellow"></i>
                    Your Answer
                </h3>
                
                <form onSubmit={handleSubmitAnswer}>
                    <div className="mb-6">
                        <textarea
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            rows="8"
                            placeholder="Write your detailed answer here. Include step-by-step explanations, examples, or any helpful information that would solve this doubt..."
                            className="w-full px-4 py-3 glass-card rounded-lg text-white placeholder-gray-400 focus:outline-none search-glow transition-all duration-300 resize-none"
                            required
                        ></textarea>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="text-sm text-gray-400">
                            <i className="fas fa-info-circle mr-1"></i>
                            Be detailed and helpful in your answer to earn more points
                        </div>
                        
                        <button
                            type="submit"
                            className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover-scale pulse-glow transition-all duration-300 font-medium"
                        >
                            <i className="fas fa-paper-plane mr-2"></i>
                            Submit Answer
                        </button>
                    </div>
                </form>
            </div>

            {/* Existing Answers Section (Optional - can be added later) */}
            <div className="glass-card rounded-xl p-8 mt-8 slide-in-right">
                <h3 className="text-2xl font-semibold text-white text-glow mb-6">
                    <i className="fas fa-comments mr-2 neon-green"></i>
                    Answers ({doubt.answers})
                </h3>
                
                <div className="text-center py-8">
                    <i className="fas fa-comment-dots text-4xl text-gray-500 mb-4 neon-blue"></i>
                    <p className="text-gray-400">Be the first to answer this doubt!</p>
                </div>
            </div>
        </div>
    );
};