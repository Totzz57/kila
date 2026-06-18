export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#D85A30]">Kila</h1>
          <div className="flex gap-3">
            <a href="/connexion" className="text-gray-600 hover:text-[#D85A30] font-medium">Connexion</a>
            <a href="/inscription" className="bg-[#D85A30] text-white px-4 py-2 rounded-full font-medium hover:bg-[#c04e28]">S'inscrire</a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-[#D85A30] text-white py-16 px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Qui cherche trouve.</h2>
        <p className="text-xl mb-8 opacity-90">Si tu cherches un truc, quelqu'un l'a sûrement.</p>
        <div className="max-w-2xl mx-auto bg-white rounded-full flex overflow-hidden shadow-lg">
          <input type="text" placeholder="Que cherchez-vous ?" className="flex-1 px-6 py-4 text-gray-800 outline-none text-lg" />
          <button className="bg-[#D85A30] text-white px-8 py-4 font-bold hover:bg-[#c04e28]">Rechercher</button>
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <button className="bg-white text-[#D85A30] px-6 py-2 rounded-full font-bold">Demandes</button>
          <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full font-bold">Offres</button>
        </div>
      </section>

      {/* Catégories */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Catégories</h3>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          {[
            { nom: "High-tech", emoji: "💻" },
            { nom: "Meubles", emoji: "🪑" },
            { nom: "Vêtements", emoji: "👕" },
            { nom: "Sport", emoji: "⚽" },
            { nom: "Auto-Moto", emoji: "🚗" },
            { nom: "Jeux", emoji: "🎮" },
            { nom: "Bricolage", emoji: "🔧" },
            { nom: "Immobilier", emoji: "🏠" },
            { nom: "Autre", emoji: "📦" },
          ].map((cat) => (
            <div key={cat.nom} className="flex flex-col items-center p-4 bg-gray-50 rounded-xl hover:bg-orange-50 cursor-pointer transition">
              <span className="text-3xl mb-2">{cat.emoji}</span>
              <span className="text-sm font-medium text-gray-700">{cat.nom}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Dernières demandes */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-8">Dernières demandes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <span className="bg-orange-100 text-[#D85A30] text-xs font-bold px-3 py-1 rounded-full">DEMANDE</span>
                <h4 className="font-bold text-gray-800 mt-3 mb-2">iPhone 13 Pro — bon état</h4>
                <p className="text-gray-500 text-sm mb-4">Budget : 500 € · Paris 75001</p>
                <button className="w-full bg-[#D85A30] text-white py-2 rounded-lg font-medium hover:bg-[#c04e28]">J'ai cet article</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 text-center">
        <p className="text-[#D85A30] font-bold text-xl mb-2">Kila</p>
        <p className="text-gray-400 text-sm">© 2026 Kila — Qui cherche trouve.</p>
      </footer>
    </main>
  )
}