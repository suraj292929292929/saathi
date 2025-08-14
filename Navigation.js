// Navigation Component
const Navigation = ({ currentPage, setCurrentPage, onLogout }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    
    const navItems = [
        { id: 'dashboard', name: 'Dashboard', icon: 'fas fa-home' },
        { id: 'ask-doubt', name: 'Ask Doubt', icon: 'fas fa-plus-circle' },
        { id: 'solve-doubt', name: 'Solve Doubt', icon: 'fas fa-lightbulb' },
        { id: 'leaderboard', name: 'Leaderboard', icon: 'fas fa-trophy' },
        { id: 'profile', name: 'Profile', icon: 'fas fa-user' }
    ];

    // Close menus when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isUserMenuOpen && !event.target.closest('.user-menu')) {
                setIsUserMenuOpen(false);
            }
            if (isNotificationOpen && !event.target.closest('.notification-menu')) {
                setIsNotificationOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isUserMenuOpen, isNotificationOpen]);

    return (
        <nav className="glass-nav sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <i className="fas fa-graduation-cap text-2xl neon-blue mr-2 pulse-glow"></i>
                            <span className="text-xl font-bold text-white text-glow">Doubt Solver</span>
                        </div>
                    </div>
                    
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setCurrentPage(item.id)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 nav-icon-glow ${
                                        currentPage === item.id
                                            ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                                            : 'text-gray-300 hover:text-cyan-400'
                                    }`}
                                >
                                    <i className={`${item.icon} mr-2`}></i>
                                    {item.name}
                                </button>
                            ))}
                        </div>
                    </div>
                    
                    <div className="flex items-center">
                        {/* Notification Bell */}
                        <div className="relative mr-4 notification-menu">
                            <button 
                                onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                                className="p-2 rounded-full text-gray-300 nav-icon-glow"
                            >
                                <i className="fas fa-bell text-lg"></i>
                                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center pulse-glow">
                                    {sampleData.notifications.filter(n => !n.read).length}
                                </span>
                            </button>
                            
                            {/* Notification Dropdown */}
                            {isNotificationOpen && (
                                <div className="absolute right-0 mt-2 w-80 glass-card rounded-lg py-2 z-50 fade-in max-h-96 overflow-y-auto">
                                    <div className="px-4 py-2 border-b border-gray-600">
                                        <h3 className="text-sm font-semibold text-white">Notifications</h3>
                                    </div>
                                    {sampleData.notifications.map((notification) => (
                                        <div key={notification.id} className={`px-4 py-3 hover:bg-white/5 transition-colors duration-200 ${!notification.read ? 'bg-blue-500/10' : ''}`}>
                                            <div className="flex items-start">
                                                <div className={`p-2 rounded-full mr-3 ${
                                                    notification.type === 'answer' ? 'bg-blue-500/20 text-blue-400' :
                                                    notification.type === 'upvote' ? 'bg-green-500/20 text-green-400' :
                                                    notification.type === 'points' ? 'bg-yellow-500/20 text-yellow-400' :
                                                    notification.type === 'follow' ? 'bg-purple-500/20 text-purple-400' :
                                                    'bg-pink-500/20 text-pink-400'
                                                }`}>
                                                    <i className={`${notification.icon} text-xs`}></i>
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="text-sm font-medium text-white">{notification.title}</h4>
                                                    <p className="text-xs text-gray-400 mt-1">{notification.message}</p>
                                                    <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                                                </div>
                                                {!notification.read && (
                                                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                    <div className="px-4 py-2 border-t border-gray-600">
                                        <button className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                                            Mark all as read
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        {/* User Menu */}
                        <div className="relative user-menu">
                            <button
                                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold hover-scale pulse-glow"
                            >
                                {sampleData.user.avatar}
                            </button>
                            
                            {/* User Dropdown Menu */}
                            {isUserMenuOpen && (
                                <div className="absolute right-0 mt-2 w-48 glass-card rounded-lg py-2 z-50 fade-in">
                                    <button
                                        onClick={() => {
                                            setCurrentPage('profile');
                                            setIsUserMenuOpen(false);
                                        }}
                                        className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 w-full text-left transition-colors duration-200"
                                    >
                                        <i className="fas fa-user mr-2"></i>
                                        View Profile
                                    </button>
                                    <button
                                        onClick={() => {
                                            setCurrentPage('settings');
                                            setIsUserMenuOpen(false);
                                        }}
                                        className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 w-full text-left transition-colors duration-200"
                                    >
                                        <i className="fas fa-cog mr-2"></i>
                                        Settings
                                    </button>
                                    <div className="border-t border-gray-600 my-1"></div>
                                    <button
                                        onClick={() => {
                                            setIsUserMenuOpen(false);
                                            onLogout();
                                        }}
                                        className="block px-4 py-2 text-sm text-red-400 hover:text-red-300 w-full text-left transition-colors duration-200"
                                    >
                                        <i className="fas fa-sign-out-alt mr-2"></i>
                                        Sign Out
                                    </button>
                                </div>
                            )}
                        </div>
                        
                        {/* Mobile menu button */}
                        <div className="md:hidden ml-4">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="p-2 rounded-md text-gray-300 nav-icon-glow"
                            >
                                <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden fade-in">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-card mx-4 mb-4 rounded-lg">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => {
                                    setCurrentPage(item.id);
                                    setIsMobileMenuOpen(false);
                                }}
                                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-all duration-300 ${
                                    currentPage === item.id
                                        ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-400'
                                        : 'text-gray-300 hover:text-cyan-400'
                                }`}
                            >
                                <i className={`${item.icon} mr-2`}></i>
                                {item.name}
                            </button>
                        ))}
                        
                        {/* Mobile logout button */}
                        <div className="border-t border-gray-600 pt-2">
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    onLogout();
                                }}
                                className="block px-3 py-2 rounded-md text-base font-medium w-full text-left text-red-400 hover:text-red-300 transition-colors duration-200"
                            >
                                <i className="fas fa-sign-out-alt mr-2"></i>
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};