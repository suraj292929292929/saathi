// Profile Component
const Profile = ({ onDoubtClick }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        name: sampleData.user.name,
        email: sampleData.user.email,
        bio: "Passionate about mathematics and helping fellow students solve complex problems. Always eager to learn and share knowledge."
    });

    const handleInputChange = (e) => {
        setProfileData({
            ...profileData,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = () => {
        setIsEditing(false);
        alert('Profile updated successfully!');
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Profile Header */}
            <div className="glass-card rounded-xl p-8 mb-8 fade-in">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                        <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-3xl font-bold text-white mr-6 pulse-glow">
                            {sampleData.user.avatar}
                        </div>
                        <div>
                            {isEditing ? (
                                <input
                                    type="text"
                                    name="name"
                                    value={profileData.name}
                                    onChange={handleInputChange}
                                    className="text-3xl font-bold bg-transparent border-b-2 border-cyan-400 text-white placeholder-gray-400 focus:outline-none"
                                />
                            ) : (
                                <h1 className="text-3xl font-bold text-white text-glow">{profileData.name}</h1>
                            )}
                            {isEditing ? (
                                <input
                                    type="email"
                                    name="email"
                                    value={profileData.email}
                                    onChange={handleInputChange}
                                    className="text-gray-300 bg-transparent border-b border-gray-500 focus:outline-none mt-2"
                                />
                            ) : (
                                <p className="text-gray-300 mt-1">{profileData.email}</p>
                            )}
                        </div>
                    </div>
                    <button
                        onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                        className="btn-neon px-6 py-3 rounded-lg font-medium transition-all duration-300"
                    >
                        <i className={`fas ${isEditing ? 'fa-save' : 'fa-edit'} mr-2`}></i>
                        {isEditing ? 'Save' : 'Edit Profile'}
                    </button>
                </div>

                <div className="mb-6">
                    {isEditing ? (
                        <textarea
                            name="bio"
                            value={profileData.bio}
                            onChange={handleInputChange}
                            rows="3"
                            className="w-full bg-transparent border border-gray-500 rounded-lg p-3 text-gray-300 placeholder-gray-400 focus:outline-none search-glow"
                        />
                    ) : (
                        <p className="text-gray-300 max-w-2xl">{profileData.bio}</p>
                    )}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center glass-card rounded-lg p-4 hover-glow delay-100">
                        <div className="text-3xl font-bold neon-blue">{sampleData.user.stats.doubtsAsked}</div>
                        <div className="text-sm text-gray-400">Doubts Asked</div>
                    </div>
                    <div className="text-center glass-card rounded-lg p-4 hover-glow delay-200">
                        <div className="text-3xl font-bold neon-green">{sampleData.user.stats.doubtsSolved}</div>
                        <div className="text-sm text-gray-400">Doubts Solved</div>
                    </div>
                    <div className="text-center glass-card rounded-lg p-4 hover-glow delay-300">
                        <div className="text-3xl font-bold neon-yellow">{sampleData.user.stats.pointsEarned}</div>
                        <div className="text-sm text-gray-400">Points</div>
                    </div>
                    <div className="text-center glass-card rounded-lg p-4 hover-glow delay-400">
                        <div className="text-3xl font-bold neon-purple">#{sampleData.user.stats.currentRank}</div>
                        <div className="text-sm text-gray-400">Rank</div>
                    </div>
                </div>
            </div>

            {/* All Doubts Asked Section */}
            <div className="mb-8">
                <div className="glass-card rounded-xl p-6 slide-in-left">
                    <h3 className="text-2xl font-semibold text-white text-glow mb-6">
                        <i className="fas fa-question-circle mr-2 neon-blue"></i>
                        All Doubts Asked by Me
                    </h3>
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                        {sampleData.myDoubts.map((doubt, index) => {
                            const borderColors = ['border-neon-blue', 'border-neon-green', 'border-neon-purple', 'border-neon-yellow'];
                            return (
                                <div 
                                    key={doubt.id}
                                    onClick={() => onDoubtClick(doubt, 'edit')}
                                    className={`glass-card rounded-lg p-4 border-l-4 ${borderColors[index % borderColors.length]} cursor-pointer hover-glow transition-all duration-300`}
                                >
                                    <h4 className="font-medium text-white mb-2 hover:text-cyan-400 transition-colors duration-300">{doubt.title}</h4>
                                    <p className="text-sm text-gray-400 mb-2 line-clamp-2">{doubt.description}</p>
                                    <div className="flex justify-between items-center text-xs text-gray-500">
                                        <span>{doubt.timeAgo} • {doubt.subject}</span>
                                        <span className="neon-green">{doubt.answers} answers • {doubt.views} views</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* All Doubts Solved Section */}
            <div className="mb-8">
                <div className="glass-card rounded-xl p-6 slide-in-right">
                    <h3 className="text-2xl font-semibold text-white text-glow mb-6">
                        <i className="fas fa-lightbulb mr-2 neon-yellow"></i>
                        All Doubts Solved by Me
                    </h3>
                    <div className="space-y-4 max-h-96 overflow-y-auto">
                        {sampleData.mySolutions.map((solution, index) => {
                            const borderColors = ['border-neon-green', 'border-neon-blue', 'border-neon-purple', 'border-neon-yellow'];
                            return (
                                <div 
                                    key={solution.id}
                                    onClick={() => onDoubtClick(solution, 'solution')}
                                    className={`glass-card rounded-lg p-4 border-l-4 ${borderColors[index % borderColors.length]} cursor-pointer hover-glow transition-all duration-300`}
                                >
                                    <h4 className="font-medium text-white mb-2 hover:text-cyan-400 transition-colors duration-300">{solution.title}</h4>
                                    <p className="text-sm text-gray-400 mb-2 line-clamp-2">{solution.description}</p>
                                    <div className="flex justify-between items-center text-xs text-gray-500">
                                        <span>{solution.timeAgo} • {solution.subject}</span>
                                        <span className="neon-yellow">+{solution.pointsEarned} points • {solution.upvotes} upvotes</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};