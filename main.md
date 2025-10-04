import React, { useState } from 'react';
import { Menu, X, Plus, Play, ChevronLeft, ChevronRight, MapPin, Send, Facebook, Twitter, Instagram, Youtube, CheckCircle } from 'lucide-react';

// --- Reusable Icon Components ---
const SocialIcon = ({ icon: Icon, href="#" }) => (
    <a href={href} className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white hover:bg-pink-500 transition-colors">
        <Icon size={20} />
    </a>
);

// Custom TikTok Icon as lucide-react doesn't have one
const TiktokIcon = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
    >
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-2.43.03-4.83-.95-6.43-2.88-1.59-1.92-2.3-4.45-2.09-6.93.21-2.48 1.15-4.81 2.73-6.56 1.94-2.16 4.82-3.41 7.5-3.45.02 1.43-.01 2.86-.01 4.29.01 1.4-.39 2.76-1.13 3.93-.82 1.26-2.19 2.04-3.6 2.02-1.51-.02-2.89-.86-3.66-2.14-.38-.64-.58-1.38-.58-2.13.01-1.42.01-2.85.01-4.28 0-1.52.53-3.02 1.51-4.15 1.01-1.16 2.53-1.74 4.09-1.77z" />
    </svg>
);

// --- Header Component ---
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = ["Home", "About Me", "Streaming", "Videos", "Pages", "Blog", "Contact"];

    return (
        <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <a href="#" className="flex items-center space-x-2">
                        <span className="w-8 h-8 bg-gradient-to-tr from-pink-500 to-orange-400 rounded-lg flex items-center justify-center">
                            <Play size={16} className="text-white fill-white" />
                        </span>
                        <span className="text-2xl font-bold text-gray-900">Influtics</span>
                    </a>
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a key={link} href="#" className="text-gray-600 font-medium hover:text-pink-500 transition-colors duration-200">{link}</a>
                        ))}
                    </nav>
                    <div className="hidden lg:flex items-center space-x-4">
                        <button className="flex items-center px-5 py-2 text-white bg-gradient-to-r from-pink-500 to-orange-400 rounded-full hover:shadow-lg transition-shadow">
                            <Plus size={16} className="mr-2" />
                            Follow Me
                        </button>
                    </div>
                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a key={link} href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-pink-500 hover:bg-gray-50">{link}</a>
                        ))}
                         <div className="px-2 pt-2">
                            <button className="w-full flex items-center justify-center px-5 py-2 text-white bg-gradient-to-r from-pink-500 to-orange-400 rounded-full hover:shadow-lg transition-shadow">
                                <Plus size={16} className="mr-2" />
                                Follow Me
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

// --- Hero Section Component ---
const HeroSection = () => {
    return (
        <section className="relative bg-gradient-to-r from-pink-200 via-orange-100 to-yellow-100 pt-16 pb-24 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
                            I'm Linda Susan <br /> Beauty & Lifestyle Influencer
                        </h1>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-orange-400 rounded-full shadow-md hover:shadow-xl transition-all duration-300">
                                About Me
                            </button>
                            <button className="px-8 py-3 text-lg font-semibold text-gray-700 bg-white rounded-full shadow-md hover:shadow-xl transition-all duration-300">
                                Contact Me
                            </button>
                        </div>
                    </div>
                    <div className="relative h-full flex items-end justify-center">
                        {/* Main influencer image */}
                        <img 
                            src="https://influtics.temptics.com/assets/img/banner-2-img.png"
                            alt="Linda Susan, Influencer" 
                            className="relative z-10 w-full max-w-md lg:max-w-lg h-auto"
                        />
                        {/* Floating "liked" notification */}
                        <div className="absolute top-1/4 -left-8 lg:left-0 bg-white/80 backdrop-blur-sm p-3 rounded-xl shadow-lg flex items-center animate-pulse z-20">
                            <img src="https://influtics.temptics.com/assets/img/user-dp-2.png" alt="User avatar" className="w-10 h-10 rounded-full" />
                            <div className="ml-2">
                                <p className="text-sm font-bold">Bryan has</p>
                                <p className="text-xs text-gray-500">liked</p>
                            </div>
                            <img src="https://influtics.temptics.com/assets/img/love.svg" alt="Heart icon" className="w-5 h-5 ml-2" />
                        </div>
                        {/* Floating "followers" notification */}
                         <div className="absolute top-1/3 right-0 lg:right-10 bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg text-center animate-pulse z-20">
                             <p className="text-2xl font-bold text-pink-500">74K</p>
                             <p className="text-xs text-gray-500">Followers</p>
                         </div>
                    </div>
                </div>
            </div>
            {/* Decorative SVG shapes */}
            <img src="https://influtics.temptics.com/assets/img/jo-banner-vector-1.svg" alt="Decorative shape" className="absolute bottom-10 left-1/4 w-32 h-auto opacity-50 z-0" />
            <img src="https://influtics.temptics.com/assets/img/jo-banner-vector-2.svg" alt="Decorative shape" className="absolute bottom-20 right-1/4 w-24 h-auto opacity-50 z-0" />
        </section>
    );
};

// --- Social Stats Section ---
const SocialStats = () => {
    const socials = [
        { name: "Facebook", followers: "20.5k followers", icon: <Facebook />, color: "bg-blue-600", buttonColor: "bg-blue-500", buttonText: "Follow Me" },
        { name: "Instagram", followers: "30.9k followers", icon: <Instagram />, color: "bg-pink-500", buttonColor: "bg-pink-400", buttonText: "Follow Me" },
        { name: "Tiktok", followers: "2.5M followers", icon: <TiktokIcon className="w-6 h-6" />, color: "bg-black", buttonColor: "bg-gray-700", buttonText: "Follow Me" },
        { name: "YouTube", followers: "1.69M Subscribers", icon: <Youtube />, color: "bg-red-600", buttonColor: "bg-red-500", buttonText: "Subscribe" },
    ];
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {socials.map(social => (
                        <div key={social.name} className="bg-gray-50 p-6 rounded-xl shadow-md flex items-center justify-between hover:shadow-xl transition-shadow">
                            <div className="flex items-center">
                                <div className={`w-12 h-12 ${social.color} rounded-lg flex items-center justify-center text-white`}>{social.icon}</div>
                                <div className="ml-4">
                                    <h3 className="font-bold text-gray-900">{social.name}</h3>
                                    <p className="text-sm text-gray-500">{social.followers}</p>
                                </div>
                            </div>
                            <button className={`px-4 py-1 text-sm text-white ${social.buttonColor} rounded-md`}>{social.buttonText}</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Video Reels Section ---
const VideoReels = () => {
    const reels = [
        { img: "https://placehold.co/300x500/fecaca/991b1b?text=Reel+1", views: "16M views" },
        { img: "https://placehold.co/300x500/fed7aa/9a3412?text=Reel+2", views: "12M views" },
        { img: "https://placehold.co/300x500/f9a8d4/9d174d?text=Reel+3", views: "21M views" },
        { img: "https://placehold.co/300x500/fde047/ca8a04?text=Reel+4", views: "18M views" },
        { img: "https://placehold.co/300x500/a5f3fc/0e7490?text=Reel+5", views: "15M views" },
    ];
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900">Latest Video Reels</h2>
                    <div className="flex space-x-2">
                        <button className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:bg-pink-500 hover:text-white transition-colors"><ChevronLeft /></button>
                        <button className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-600 hover:bg-pink-500 hover:text-white transition-colors"><ChevronRight /></button>
                    </div>
                </div>
                <div className="flex space-x-8 overflow-x-auto pb-4 -mx-4 px-4">
                    {reels.map((reel, index) => (
                        <div key={index} className="flex-shrink-0 w-64 group">
                            <div className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer">
                                <img src={reel.img} alt={`Reel ${index + 1}`} className="w-full h-[400px] object-cover" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all flex items-center justify-center">
                                    <Play size={48} className="text-white/80 fill-white/50" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                                    <p className="font-bold text-white">Can Robot Solve This? ...</p>
                                    <div className="flex justify-between items-center mt-1">
                                        <p className="text-sm text-white/90">{reel.views}</p>
                                        <div className="flex items-center space-x-1 px-2 py-1 bg-blue-600/80 rounded-md text-xs text-white">
                                            <Facebook size={12}/>
                                            <span>Facebook Reel</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// --- Services Section ("What Will I Give You?") ---
const Services = () => {
    const [activeTab, setActiveTab] = useState('Brand Collaborations');
    const tabs = ['Brand Collaborations', 'Empowering Creators', 'Content Planner', 'Relevant Content', 'Social Media Management'];
    const tabContent = {
        'Brand Collaborations': [
            "Unlimited influencer search",
            "Direct messages with freelancer.",
            "Unlimited requests for with celebrities.",
            "Unlimited project tracking",
            "Unlimited Campaign monitoring.",
            "Goal Setting begin by clearly defining",
        ],
        'Empowering Creators': [
            "Tools for content creation",
            "Monetization strategies",
            "Community building support",
            "Exclusive workshops and webinars",
        ],
        'Content Planner': [
            "Drag-and-drop content calendar",
            "AI-powered topic suggestions",
            "Platform-specific optimization tips",
            "Performance forecasting",
        ],
        'Relevant Content': [
            "Audience analysis and insights",
            "Trend identification reports",
            "Content format recommendations",
            "Competitor content tracking",
        ],
        'Social Media Management': [
            "Automated post scheduling",
            "Unified social inbox",
            "Performance analytics dashboard",
            "Team collaboration features",
        ]
    };
    
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-4xl font-extrabold text-gray-900">What Will I Give You?</h2>
                    <button className="px-6 py-2 text-white bg-gradient-to-r from-pink-500 to-orange-400 rounded-full hover:shadow-lg transition-shadow">
                        View All Services
                    </button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col space-y-2">
                        {tabs.map(tab => (
                            <button 
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`p-6 rounded-lg text-left font-bold text-lg transition-all duration-300 ${activeTab === tab ? 'bg-gradient-to-r from-pink-500 to-orange-400 text-white shadow-lg' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                    <div className="lg:col-span-2 bg-gray-50 p-8 rounded-xl">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategy Development</h3>
                                <p className="text-gray-600 mb-6">Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl.</p>
                                <ul className="space-y-3">
                                    {tabContent[activeTab].map(item => (
                                       <li key={item} className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-pink-500 mt-1 mr-2 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <img src="https://placehold.co/400x300/e0e7ff/4338ca?text=Strategy+Meeting" alt="Strategy Meeting" className="rounded-lg shadow-md" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// --- About Creator Section ---
const AboutCreator = () => (
    <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-4xl font-extrabold">I'm a Social Media influencer & digital content creator</h2>
                    <p className="mt-4 text-gray-300">Consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam. Curabitur nec pharetra nunc. Nunc nec pellentesque nisl.</p>
                    <ul className="mt-6 space-y-3">
                        {["Non mattis nulla, in ultrices diam", "Web design done Delightful Visualization", "Alienumn phaedrum torquatos nec eu, vis detraxit periculis", "Software Makes Your Profit Double If You Scale Properly."].map(item => (
                             <li key={item} className="flex items-center">
                                <CheckCircle className="w-5 h-5 text-pink-400 mr-3"/>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="mt-8 px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-orange-400 rounded-full shadow-md hover:shadow-xl transition-shadow">
                        Contact Me
                    </button>
                </div>
                <div className="relative">
                    <img src="https://placehold.co/500x350/374151/FFFFFF?text=Content+Creation" alt="Content Creation" className="rounded-xl shadow-2xl" />
                    <button className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <Play size={32} className="text-white fill-white" />
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </section>
);


// --- Contact Section ---
const ContactSection = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="bg-white p-8 rounded-2xl shadow-lg relative">
                        <div className="absolute -top-4 -left-4 bg-white p-2 rounded-lg shadow-md transform -rotate-12">
                            <span className="text-lg font-bold">HELLO</span>
                            <p className="text-xs text-pink-500">Let's Talk</p>
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900">Let's Work Together on your next Project</h2>
                        <p className="mt-2 text-gray-500 mb-8">Consectetur adipiscing elit. Donec non mattis nulla, in ultrices diam.</p>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="text-sm font-medium text-gray-700 sr-only">Your Name</label>
                                <input type="text" id="name" placeholder="Your Name" className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500" />
                            </div>
                             <div>
                                <label htmlFor="email" className="text-sm font-medium text-gray-700 sr-only">Your Email Address</label>
                                <input type="email" id="email" placeholder="Your Email Address" className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500" />
                            </div>
                             <div>
                                <label htmlFor="message" className="text-sm font-medium text-gray-700 sr-only">Write Message...</label>
                                <textarea id="message" rows="4" placeholder="Write Message..." className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-pink-500 focus:border-pink-500"></textarea>
                            </div>
                            <button type="submit" className="w-full px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-orange-400 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                Send Message
                            </button>
                        </form>
                    </div>
                    <div className="text-center">
                         <img src="https://placehold.co/450x550/fef3c7/f97316?text=Let's+Collaborate" alt="Collaborate" className="rounded-2xl shadow-xl inline-block" />
                    </div>
                </div>
            </div>
        </section>
    );
};


// --- Footer Component ---
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div>
                        <a href="#" className="flex items-center space-x-2 mb-4">
                            <span className="w-8 h-8 bg-gradient-to-tr from-pink-500 to-orange-400 rounded-lg flex items-center justify-center">
                                <Play size={16} className="text-white fill-white" />
                            </span>
                            <span className="text-2xl font-bold">Influtics</span>
                        </a>
                        <p className="text-gray-400 mb-4">Get our newsletter for the latest updates.</p>
                        <form className="flex">
                            <input type="email" placeholder="Email Address" className="w-full p-2 rounded-l-lg text-gray-800" />
                            <button className="px-4 bg-gradient-to-r from-pink-500 to-orange-400 rounded-r-lg font-semibold">Get</button>
                        </form>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-200 uppercase tracking-wider">Get in Touch</h4>
                        <p className="mt-4 text-gray-400">contact.me@gmail.com</p>
                    </div>
                    <div>
                         <h4 className="font-semibold text-gray-200 uppercase tracking-wider">Browse Categories</h4>
                         <ul className="mt-4 space-y-2 text-gray-400">
                             <li><a href="#" className="hover:text-white">Music</a></li>
                             <li><a href="#" className="hover:text-white">Gaming</a></li>
                             <li><a href="#" className="hover:text-white">Art</a></li>
                             <li><a href="#" className="hover:text-white">Sports</a></li>
                             <li><a href="#" className="hover:text-white">Fashion</a></li>
                             <li><a href="#" className="hover:text-white">Photography</a></li>
                         </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-200 uppercase tracking-wider">Instagram feed</h4>
                        <div className="mt-4 grid grid-cols-3 gap-2">
                            {[...Array(6)].map((_, i) => (
                                <img key={i} src={`https://placehold.co/100x100/334155/FFFFFF?text=Post${i+1}`} alt={`Instagram post ${i+1}`} className="rounded-md" />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500">
                    <p>Copyright &copy; {new Date().getFullYear()} Developed by Influtics</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                         <SocialIcon icon={Facebook} />
                         <SocialIcon icon={Twitter} />
                         <SocialIcon icon={Instagram} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

// --- Main App Component ---
export default function App() {
  return (
    <div className="bg-white font-sans antialiased">
      <Header />
      <main>
        <HeroSection />
        <SocialStats />
        <VideoReels />
        <Services />
        <AboutCreator />
        {/* Other sections like Upcoming Lives, Premium Videos, Articles can be added here */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

