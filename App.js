// Main App Component
const App = () => {
    const [currentPage, setCurrentPage] = useState('dashboard');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedDoubt, setSelectedDoubt] = useState(null);
    const [selectedMyItem, setSelectedMyItem] = useState(null);
    const [myItemType, setMyItemType] = useState(null);

    const handleLogin = () => {
        setIsLoggedIn(true);
        setCurrentPage('dashboard');
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setCurrentPage('dashboard');
        setSelectedDoubt(null);
        setSelectedMyItem(null);
        setMyItemType(null);
    };

    const handleDoubtClick = (doubt) => {
        setSelectedDoubt(doubt);
        setCurrentPage('doubt-detail');
    };

    const handleMyDoubtClick = (item, type) => {
        setSelectedMyItem(item);
        setMyItemType(type);
        setCurrentPage('my-doubt-detail');
    };

    const handleBackToDashboard = () => {
        setSelectedDoubt(null);
        setCurrentPage('dashboard');
    };

    const handleBackToProfile = () => {
        setSelectedMyItem(null);
        setMyItemType(null);
        setCurrentPage('profile');
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'dashboard':
                return <Dashboard onDoubtClick={handleDoubtClick} />;
            case 'doubt-detail':
                return <DoubtDetail doubt={selectedDoubt} onBack={handleBackToDashboard} />;
            case 'ask-doubt':
                return <AskDoubt />;
            case 'solve-doubt':
                return <SolveDoubt />;
            case 'leaderboard':
                return <Leaderboard />;
            case 'profile':
                return <Profile onDoubtClick={handleMyDoubtClick} />;
            case 'my-doubt-detail':
                return <MyDoubtDetail item={selectedMyItem} type={myItemType} onBack={handleBackToProfile} />;
            case 'settings':
                return <Settings />;
            default:
                return <Dashboard onDoubtClick={handleDoubtClick} />;
        }
    };

    if (!isLoggedIn) {
        return <Login onLogin={handleLogin} />;
    }

    return (
        <div className="min-h-screen dark-gradient-bg">
            <Navigation 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage}
                onLogout={handleLogout}
            />
            {renderPage()}
        </div>
    );
};