import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/add');
    }

    return (
        <div className="min-h-screen bg-[#fdfcf7] text-gray-800 font-serif flex flex-col">
            <header className="border-b border-gray-300 px-8 py-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold tracking-wide">📒 Contact Book</h1>
                <nav className="space-x-6 text-sm">
                <a href="#features" className="hover:underline">Features</a>
                <a href="#how-it-works" className="hover:underline">How It Works</a>
                <a href="#about" className="hover:underline">About</a>
                </nav>
            </header>
            <section className="flex flex-col items-center justify-center text-center flex-1 px-6 py-16">
                <h2 className="text-4xl font-bold mb-4">A Simple Way to Organize Your Contacts</h2>
                <p className="text-lg text-gray-600 max-w-xl mb-6">
                Keep your friends, family, and work connections in one place.  
                Add, edit, and manage contacts without the clutter.
                </p>
                <div className="space-x-4">
                <button className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-700 transition" onClick={handleClick}>
                    Try the App
                </button>
                </div>
            </section>
            <section id="features" className="px-8 py-16 bg-[#faf9f4]">
                <h3 className="text-2xl font-bold mb-8 text-center">Features</h3>
                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="border border-gray-300 p-6 rounded bg-white">
                    <h4 className="font-bold mb-2">📥 Add Contacts</h4>
                    <p className="text-sm text-gray-600">
                    Store names, emails, phone numbers, and notes in seconds.
                    </p>
                </div>
                <div className="border border-gray-300 p-6 rounded bg-white">
                    <h4 className="font-bold mb-2">✏️ Edit & Update</h4>
                    <p className="text-sm text-gray-600">
                    Keep your contacts up-to-date with simple editing tools.
                    </p>
                </div>
                <div className="border border-gray-300 p-6 rounded bg-white">
                    <h4 className="font-bold mb-2">🗑️ Delete Easily</h4>
                    <p className="text-sm text-gray-600">
                    Remove outdated contacts anytime with a single click.
                    </p>
                </div>
                </div>
            </section>
            <section id="how-it-works" className="px-8 py-16">
                <h3 className="text-2xl font-bold mb-8 text-center">How It Works</h3>
                <ol className="list-decimal list-inside space-y-3 max-w-xl mx-auto text-gray-700">
                <li>Click “Try the App” to open the Contact Book.</li>
                <li>Add new contacts with their details.</li>
                <li>Update or delete whenever you need.</li>
                </ol>
            </section>
            <footer id="about" className="border-t border-gray-300 px-8 py-6 text-center text-sm text-gray-600">
                <p>📒 Contact Book — Built with MERN & Docker</p>
                <p className="mt-1">Minimalist design inspired by old-school address books.</p>
            </footer>
        </div>
  );
}

export default Home;