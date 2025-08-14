// Settings Component
const Settings = () => {
    const [activeTab, setActiveTab] = useState('account');
    const [accountData, setAccountData] = useState({
        name: 'Sakshi',
        email: 'sakshi@example.com',
        bio: 'Passionate about mathematics and helping fellow students solve complex problems.',
        phone: '+91 9876543210',
        location: 'Mumbai, India'
    });
    const [passwordData, setPasswordData] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    });
    const [preferences, setPreferences] = useState({
        emailNotifications: true,
        pushNotifications: false,
        weeklyDigest: true,
        darkMode: true,
        language: 'English'
    });

    const handleAccountChange = (e) => {
        setAccountData({
            ...accountData,
            [e.target.name]: e.target.value
        });
    };

    const handlePasswordChange = (e) => {
        setPasswordData({
            ...passwordData,
            [e.target.name]: e.target.value
        });
    };

    const handlePreferenceChange = (key, value) => {
        setPreferences({
            ...preferences,
            [key]: value
        });
    };

    const handleAccountSave = (e) => {
        e.preventDefault();
        alert('Account details updated successfully!');
    };

    const handlePasswordSave = (e) => {
        e.preventDefault();
        if (passwordData.newPassword !== passwordData.confirmPassword) {
            alert('New passwords do not match!');
            return;
        }
        alert('Password updated successfully!');
        setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    };

    const handlePreferencesSave = () => {
        alert('Preferences updated successfully!');
    };

    const tabs = [
        { id: 'account', name: 'Account Details', icon: 'fas fa-user' },
        { id: 'password', name: 'Password', icon: 'fas fa-lock' },
        { id: 'preferences', name: 'Preferences', icon: 'fas fa-cog' }
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header */}
            <div className="mb-8 fade-in">
                <h1 className="text-4xl font-bold text-white text-glow mb-2">Settings</h1>
                <p className="text-gray-300 text-lg">Manage your account and preferences</p>
            </div>

            {/* Tabs */}
            <div className="mb-8 slide-in-left">
                <div className="flex space-x-1 glass-card rounded-lg p-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 px-4 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                                activeTab === tab.id
                                    ? 'bg-gradient-to-r from-blue-500/30 to-cyan-500/30 text-cyan-400 border border-cyan-500/50'
                                    : 'text-gray-300 hover:text-cyan-400'
                            }`}
                        >
                            <i className={`${tab.icon} mr-2`}></i>
                            {tab.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Account Details Tab */}
            {activeTab === 'account' && (
                <div className="glass-card rounded-xl p-8 slide-up">
                    <h3 className="text-2xl font-semibold text-white text-glow mb-6">Account Details</h3>
                    <form onSubmit={handleAccountSave}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={accountData.name}
                                    onChange={handleAccountChange}
                                    className="w-full px-4 py-3 glass-card rounded-lg text-white placeholder-gray-400 focus:outline-none search-glow transition-all duration-300"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={accountData.email}
                                    onChange={handleAccountChange}
                                    className="w-full px-4 py-3 glass-card rounded-lg text-white placeholder-gray-400 focus:outline-none search-glow transition-all duration-300"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={accountData.phone}
                                    onChange={handleAccountChange}
                                    className="w-full px-4 py-3 glass-card rounded-lg text-white placeholder-gray-400 focus:outline-none search-glow transition-all duration-300"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
                                <input
                                    type="text"
                                    name="location"
                                    value={accountData.location}
                                    onChange={handleAccountChange}
                                    className="w-full px-4 py-3 glass-card rounded-lg text-white placeholder-gray-400 focus:outline-none search-glow transition-all duration-300"
                                />
                            </div>
                        </div>
                        <div className="mt-6">
                            <label className="block text-sm font-medium text-gray-300 mb-2">Bio</label>
                            <textarea
                                name="bio"
                                value={accountData.bio}
                                onChange={handleAccountChange}
                                rows="4"
                                className="w-full px-4 py-3 glass-card rounded-lg text-white placeholder-gray-400 focus:outline-none search-glow transition-all duration-300"
                            ></textarea>
                        </div>
                        <div className="mt-8 flex justify-end">
                            <button
                                type="submit"
                                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover-scale pulse-glow transition-all duration-300"
                            >
                                <i className="fas fa-save mr-2"></i>
                                Save Changes
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Password Tab */}
            {activeTab === 'password' && (
                <div className="glass-card rounded-xl p-8 slide-up">
                    <h3 className="text-2xl font-semibold text-white text-glow mb-6">Change Password</h3>
                    <form onSubmit={handlePasswordSave}>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Current Password</label>
                                <input
                                    type="password"
                                    name="currentPassword"
                                    value={passwordData.currentPassword}
                                    onChange={handlePasswordChange}
                                    className="w-full px-4 py-3 glass-card rounded-lg text-white placeholder-gray-400 focus:outline-none search-glow transition-all duration-300"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">New Password</label>
                                <input
                                    type="password"
                                    name="newPassword"
                                    value={passwordData.newPassword}
                                    onChange={handlePasswordChange}
                                    className="w-full px-4 py-3 glass-card rounded-lg text-white placeholder-gray-400 focus:outline-none search-glow transition-all duration-300"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Confirm New Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={passwordData.confirmPassword}
                                    onChange={handlePasswordChange}
                                    className="w-full px-4 py-3 glass-card rounded-lg text-white placeholder-gray-400 focus:outline-none search-glow transition-all duration-300"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mt-8 flex justify-end">
                            <button
                                type="submit"
                                className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg hover-scale pulse-glow transition-all duration-300"
                            >
                                <i className="fas fa-key mr-2"></i>
                                Update Password
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Preferences Tab */}
            {activeTab === 'preferences' && (
                <div className="glass-card rounded-xl p-8 slide-up">
                    <h3 className="text-2xl font-semibold text-white text-glow mb-6">Preferences</h3>
                    
                    {/* Notification Preferences */}
                    <div className="mb-8">
                        <h4 className="text-lg font-semibold text-white mb-4">Notifications</h4>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <label className="text-gray-300 font-medium">Email Notifications</label>
                                    <p className="text-sm text-gray-400">Receive notifications via email</p>
                                </div>
                                <button
                                    onClick={() => handlePreferenceChange('emailNotifications', !preferences.emailNotifications)}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                                        preferences.emailNotifications ? 'bg-blue-500' : 'bg-gray-600'
                                    }`}
                                >
                                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                                        preferences.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                                    }`} />
                                </button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <label className="text-gray-300 font-medium">Push Notifications</label>
                                    <p className="text-sm text-gray-400">Receive push notifications in browser</p>
                                </div>
                                <button
                                    onClick={() => handlePreferenceChange('pushNotifications', !preferences.pushNotifications)}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                                        preferences.pushNotifications ? 'bg-blue-500' : 'bg-gray-600'
                                    }`}
                                >
                                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                                        preferences.pushNotifications ? 'translate-x-6' : 'translate-x-1'
                                    }`} />
                                </button>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <label className="text-gray-300 font-medium">Weekly Digest</label>
                                    <p className="text-sm text-gray-400">Receive weekly summary of activities</p>
                                </div>
                                <button
                                    onClick={() => handlePreferenceChange('weeklyDigest', !preferences.weeklyDigest)}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                                        preferences.weeklyDigest ? 'bg-blue-500' : 'bg-gray-600'
                                    }`}
                                >
                                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                                        preferences.weeklyDigest ? 'translate-x-6' : 'translate-x-1'
                                    }`} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Display Preferences */}
                    <div className="mb-8">
                        <h4 className="text-lg font-semibold text-white mb-4">Display</h4>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div>
                                    <label className="text-gray-300 font-medium">Dark Mode</label>
                                    <p className="text-sm text-gray-400">Use dark theme</p>
                                </div>
                                <button
                                    onClick={() => handlePreferenceChange('darkMode', !preferences.darkMode)}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 ${
                                        preferences.darkMode ? 'bg-blue-500' : 'bg-gray-600'
                                    }`}
                                >
                                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300 ${
                                        preferences.darkMode ? 'translate-x-6' : 'translate-x-1'
                                    }`} />
                                </button>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Language</label>
                                <select
                                    value={preferences.language}
                                    onChange={(e) => handlePreferenceChange('language', e.target.value)}
                                    className="w-full px-4 py-3 glass-card rounded-lg text-white focus:outline-none search-glow transition-all duration-300"
                                >
                                    <option value="English">English</option>
                                    <option value="Hindi">Hindi</option>
                                    <option value="Spanish">Spanish</option>
                                    <option value="French">French</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            onClick={handlePreferencesSave}
                            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover-scale pulse-glow transition-all duration-300"
                        >
                            <i className="fas fa-save mr-2"></i>
                            Save Preferences
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};