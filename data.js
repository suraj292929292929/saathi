// Sample data for the Doubt Solver application
const sampleData = {
    user: {
        name: "John Doe",
        email: "john.doe@example.com",
        avatar: "JD",
        stats: {
            doubtsAsked: 24,
            doubtsSolved: 18,
            pointsEarned: 156,
            currentRank: 12
        }
    },
    
    doubts: [
        {
            id: 1,
            title: "How to solve quadratic equations using the quadratic formula?",
            description: "I'm having trouble understanding when and how to use the quadratic formula. Can someone explain the steps with an example?",
            subject: "Mathematics",
            tags: ["algebra", "quadratic", "formula"],
            author: "Sarah Johnson",
            timeAgo: "2 hours ago",
            views: 24,
            upvotes: 12,
            answers: 5
        },
        {
            id: 2,
            title: "Explain the concept of photosynthesis in plants",
            description: "I need help understanding the process of photosynthesis, especially the light and dark reactions. What are the inputs and outputs?",
            subject: "Biology",
            tags: ["photosynthesis", "plants", "biology"],
            author: "Mike Chen",
            timeAgo: "4 hours ago",
            views: 18,
            upvotes: 8,
            answers: 3
        },
        {
            id: 3,
            title: "Understanding Newton's laws of motion",
            description: "Can someone help me understand the three laws of motion with real-world examples?",
            subject: "Physics",
            tags: ["newton", "motion", "physics"],
            author: "Emily Wilson",
            timeAgo: "6 hours ago",
            views: 32,
            upvotes: 15,
            answers: 7
        },
        {
            id: 4,
            title: "Binary search algorithm implementation",
            description: "I'm struggling with implementing binary search in Python. Can someone show me the correct approach?",
            subject: "Computer Science",
            tags: ["algorithm", "python", "search"],
            author: "David Lee",
            timeAgo: "1 day ago",
            views: 45,
            upvotes: 20,
            answers: 9
        },
        {
            id: 5,
            title: "Organic chemistry reaction mechanisms",
            description: "Need help understanding SN1 and SN2 reaction mechanisms in organic chemistry.",
            subject: "Chemistry",
            tags: ["organic", "reactions", "mechanisms"],
            author: "Lisa Park",
            timeAgo: "1 day ago",
            views: 28,
            upvotes: 11,
            answers: 4
        }
    ],
    
    leaderboard: [
        {
            id: 1,
            rank: 1,
            name: "Alex Smith",
            points: 2450,
            doubtsSolved: 142,
            successRate: 89,
            avatar: "AS"
        },
        {
            id: 2,
            rank: 2,
            name: "Priya Sharma",
            points: 2280,
            doubtsSolved: 128,
            successRate: 92,
            avatar: "PS"
        },
        {
            id: 3,
            rank: 3,
            name: "Michael Johnson",
            points: 2100,
            doubtsSolved: 115,
            successRate: 87,
            avatar: "MJ"
        },
        {
            id: 4,
            rank: 4,
            name: "Emily Wilson",
            points: 1890,
            doubtsSolved: 98,
            successRate: 91,
            avatar: "EW"
        },
        {
            id: 5,
            rank: 5,
            name: "David Lee",
            points: 1650,
            doubtsSolved: 87,
            successRate: 85,
            avatar: "DL"
        },
        {
            id: 6,
            rank: 6,
            name: "Sarah Johnson",
            points: 1420,
            doubtsSolved: 76,
            successRate: 88,
            avatar: "SJ"
        },
        {
            id: 7,
            rank: 7,
            name: "Mike Chen",
            points: 1280,
            doubtsSolved: 69,
            successRate: 83,
            avatar: "MC"
        },
        {
            id: 8,
            rank: 8,
            name: "Lisa Park",
            points: 1150,
            doubtsSolved: 62,
            successRate: 86,
            avatar: "LP"
        }
    ],
    
    subjects: [
        {
            id: 1,
            name: "Java",
            icon: "fab fa-java",
            color: "neon-yellow",
            description: "Object-oriented programming language"
        },
        {
            id: 2,
            name: "Data Structures & Algorithms",
            icon: "fas fa-project-diagram",
            color: "neon-blue",
            description: "DSA concepts and problem solving"
        },
        {
            id: 3,
            name: "Python",
            icon: "fab fa-python",
            color: "neon-green",
            description: "Python programming and libraries"
        },
        {
            id: 4,
            name: "HTML/CSS",
            icon: "fab fa-html5",
            color: "neon-purple",
            description: "Web development fundamentals"
        },
        {
            id: 5,
            name: "JavaScript",
            icon: "fab fa-js-square",
            color: "neon-yellow",
            description: "Dynamic web programming"
        },
        {
            id: 6,
            name: "React",
            icon: "fab fa-react",
            color: "neon-blue",
            description: "Frontend library for building UIs"
        },
        {
            id: 7,
            name: "Mathematics",
            icon: "fas fa-calculator",
            color: "neon-purple",
            description: "Mathematical concepts and problems"
        },
        {
            id: 8,
            name: "Physics",
            icon: "fas fa-atom",
            color: "neon-blue",
            description: "Physics principles and applications"
        },
        {
            id: 9,
            name: "Chemistry",
            icon: "fas fa-flask",
            color: "neon-green",
            description: "Chemical reactions and compounds"
        },
        {
            id: 10,
            name: "Biology",
            icon: "fas fa-dna",
            color: "neon-green",
            description: "Life sciences and biological processes"
        }
    ],
    
    notifications: [
        {
            id: 1,
            type: "answer",
            title: "New answer on your doubt",
            message: "Someone answered your question about 'Integration by parts formula'",
            time: "2 minutes ago",
            read: false,
            icon: "fas fa-comment"
        },
        {
            id: 2,
            type: "upvote",
            title: "Your answer was upvoted",
            message: "Your answer on 'Trigonometric identities' received an upvote",
            time: "1 hour ago",
            read: false,
            icon: "fas fa-thumbs-up"
        },
        {
            id: 3,
            type: "points",
            title: "Points earned",
            message: "You earned 15 points for solving a doubt",
            time: "3 hours ago",
            read: true,
            icon: "fas fa-trophy"
        },
        {
            id: 4,
            type: "follow",
            title: "New follower",
            message: "Alex Smith started following you",
            time: "1 day ago",
            read: true,
            icon: "fas fa-user-plus"
        },
        {
            id: 5,
            type: "badge",
            title: "Achievement unlocked",
            message: "You earned the 'Helper' badge for solving 10 doubts",
            time: "2 days ago",
            read: true,
            icon: "fas fa-medal"
        }
    ],
    
    myDoubts: [
        {
            id: 101,
            title: "Integration by parts formula",
            description: "How do I solve integration by parts problems step by step? I understand the formula but struggle with applying it to complex functions.",
            subject: "Mathematics",
            tags: ["calculus", "integration", "formula"],
            author: "Sakshi",
            timeAgo: "2 days ago",
            views: 15,
            upvotes: 3,
            answers: 3,
            isMyDoubt: true
        },
        {
            id: 102,
            title: "Organic chemistry reactions",
            description: "Need help understanding SN1 and SN2 reaction mechanisms in organic chemistry. What are the key differences?",
            subject: "Chemistry",
            tags: ["organic", "reactions", "mechanisms"],
            author: "Sakshi",
            timeAgo: "5 days ago",
            views: 8,
            upvotes: 2,
            answers: 2,
            isMyDoubt: true
        },
        {
            id: 103,
            title: "Binary search implementation",
            description: "Struggling with implementing binary search in Python. Can someone show me the correct approach with examples?",
            subject: "Computer Science",
            tags: ["algorithm", "python", "search"],
            author: "Sakshi",
            timeAgo: "1 week ago",
            views: 23,
            upvotes: 5,
            answers: 5,
            isMyDoubt: true
        },
        {
            id: 104,
            title: "Calculus derivatives",
            description: "How to find derivatives of complex functions using chain rule and product rule?",
            subject: "Mathematics",
            tags: ["calculus", "derivatives", "chain-rule"],
            author: "Sakshi",
            timeAgo: "2 weeks ago",
            views: 19,
            upvotes: 4,
            answers: 4,
            isMyDoubt: true
        },
        {
            id: 105,
            title: "React hooks usage",
            description: "When should I use useEffect vs useLayoutEffect in React applications?",
            subject: "Computer Science",
            tags: ["react", "hooks", "javascript"],
            author: "Sakshi",
            timeAgo: "3 weeks ago",
            views: 31,
            upvotes: 7,
            answers: 7,
            isMyDoubt: true
        }
    ],
    
    mySolutions: [
        {
            id: 201,
            doubtId: 1,
            title: "Trigonometric identities",
            description: "Helped explain sin²x + cos²x = 1 and related identities with detailed proofs and examples.",
            subject: "Mathematics",
            originalQuestion: "How to prove and use basic trigonometric identities?",
            myAnswer: "The fundamental trigonometric identity sin²x + cos²x = 1 can be proven using the Pythagorean theorem. Here's a step-by-step explanation...",
            timeAgo: "1 day ago",
            pointsEarned: 15,
            upvotes: 5,
            isMySolution: true
        },
        {
            id: 202,
            doubtId: 3,
            title: "Newton's laws of motion",
            description: "Provided examples and explanations for all three laws with real-world applications.",
            subject: "Physics",
            originalQuestion: "Can someone help me understand the three laws of motion with real-world examples?",
            myAnswer: "Newton's three laws of motion are fundamental principles in physics. First Law (Inertia): An object at rest stays at rest...",
            timeAgo: "3 days ago",
            pointsEarned: 12,
            upvotes: 3,
            isMySolution: true
        },
        {
            id: 203,
            doubtId: 2,
            title: "Photosynthesis process",
            description: "Explained light and dark reactions in detail with diagrams and chemical equations.",
            subject: "Biology",
            originalQuestion: "I need help understanding the process of photosynthesis, especially the light and dark reactions.",
            myAnswer: "Photosynthesis occurs in two main stages: light-dependent reactions and light-independent reactions (Calvin cycle)...",
            timeAgo: "1 week ago",
            pointsEarned: 18,
            upvotes: 8,
            isMySolution: true
        },
        {
            id: 204,
            doubtId: 4,
            title: "JavaScript closures",
            description: "Provided clear examples of closure concepts with practical use cases.",
            subject: "Computer Science",
            originalQuestion: "Can someone explain JavaScript closures with examples?",
            myAnswer: "A closure in JavaScript is a function that has access to variables in its outer (enclosing) scope even after the outer function has returned...",
            timeAgo: "2 weeks ago",
            pointsEarned: 20,
            upvotes: 6,
            isMySolution: true
        },
        {
            id: 205,
            doubtId: 5,
            title: "Chemical bonding",
            description: "Explained ionic, covalent, and metallic bonding with examples and electron configurations.",
            subject: "Chemistry",
            originalQuestion: "What are the different types of chemical bonding?",
            myAnswer: "There are three main types of chemical bonding: ionic, covalent, and metallic. Ionic bonding occurs between metals and non-metals...",
            timeAgo: "3 weeks ago",
            pointsEarned: 14,
            upvotes: 4,
            isMySolution: true
        }
    ]
};