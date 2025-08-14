// Leaderboard Component
const Leaderboard = () => {
    const getRankBadgeColor = (rank) => {
        switch (rank) {
            case 1: return 'from-yellow-500 to-orange-500';
            case 2: return 'from-gray-400 to-gray-600';
            case 3: return 'from-orange-600 to-red-600';
            default: return 'from-blue-500 to-cyan-500';
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="mb-8 fade-in">
                <h1 className="text-4xl font-bold text-white text-glow mb-2">Leaderboard</h1>
                <p className="text-gray-300 text-lg">Top contributors in our community</p>
            </div>

            <div className="glass-card rounded-xl overflow-hidden slide-up">
                <div className="overflow-x-auto">
                    <table className="min-w-full">
                        <thead className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                    Rank
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                    User
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                    Points
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                    Doubts Solved
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                                    Success Rate
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                            {sampleData.leaderboard.map((user, index) => (
                                <tr key={user.id} className={`hover:bg-white/5 transition-colors duration-300 delay-${(index + 1) * 100}`}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${getRankBadgeColor(user.rank)} text-white flex items-center justify-center font-bold pulse-glow`}>
                                            {user.rank}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-4 pulse-glow">
                                                {user.avatar}
                                            </div>
                                            <div className="text-sm font-medium text-white text-glow">
                                                {user.name}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-bold neon-blue">
                                            {user.points.toLocaleString()} pts
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-300">
                                            {user.doubtsSolved}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm neon-green">
                                            {user.successRate}%
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};