// Login Component
const Login = ({ onLogin }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Simulate login process
        setTimeout(() => {
            setIsLoading(false);
            onLogin();
        }, 1500);
    };

    return (
        <div className="min-h-screen dark-gradient-bg flex items-center justify-center p-4">
            {/* Login Form Container */}
            <div className="w-full max-w-md">
                {/* Login Card */}
                <div className="glass-card rounded-2xl p-8 pulse-glow float">
                    {/* Login Title */}
                    <div className="text-center mb-8">
                        <i className="fas fa-graduation-cap text-4xl neon-blue mb-4 pulse-glow"></i>
                        <h1 className="text-3xl font-bold text-white text-glow">Welcome Back</h1>
                        <p className="text-gray-300 mt-2">Sign in to continue learning</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Username Field */}
                        <div className="relative">
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleInputChange}
                                placeholder="Username"
                                className="w-full px-4 py-3 pr-12 glass-card rounded-lg text-white placeholder-gray-400 focus:outline-none search-glow transition-all duration-300"
                                required
                            />
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 neon-blue">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="relative">
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="Password"
                                className="w-full px-4 py-3 pr-12 glass-card rounded-lg text-white placeholder-gray-400 focus:outline-none search-glow transition-all duration-300"
                                required
                            />
                            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 neon-blue">
                                <i className="fas fa-lock"></i>
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center text-gray-300 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="mr-2 w-4 h-4 text-cyan-400 bg-transparent border border-cyan-500 rounded focus:ring-cyan-400 focus:ring-2"
                                />
                                Remember me
                            </label>
                            <a href="#" className="neon-blue hover:text-cyan-300 transition-colors duration-200">
                                Forgot password?
                            </a>
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover-scale pulse-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <>
                                    <i className="fas fa-spinner fa-spin mr-2"></i>
                                    Logging in...
                                </>
                            ) : (
                                'Sign In'
                            )}
                        </button>
                    </form>

                    {/* Register Link */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-300">
                            Don't have an account?{' '}
                            <a href="#" className="neon-blue hover:text-cyan-300 font-medium transition-colors duration-200">
                                Create Account
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};