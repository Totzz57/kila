export type Categorie = {
  id: string
  nom: string
  emoji: string
}

export const CATEGORIES: Categorie[] = [
  { id: "vehicules", nom: "Véhicules", emoji: "🚗" },
  { id: "pieces-vehicule", nom: "Pièces véhicule", emoji: "⚙️" },
  { id: "meubles", nom: "Meubles", emoji: "🪑" },
  { id: "vetements", nom: "Vêtements", emoji: "👕" },
  { id: "sport", nom: "Sport", emoji: "⚽" },
  { id: "jeux-jouets", nom: "Jeux et jouets", emoji: "🧸" },
  { id: "jeux-video", nom: "Jeux vidéo", emoji: "🎮" },
  { id: "informatique", nom: "Informatique", emoji: "💻" },
  { id: "high-tech", nom: "High-tech", emoji: "📱" },
  { id: "bricolage", nom: "Bricolage", emoji: "🛠️" },
  { id: "immobilier", nom: "Immobilier", emoji: "🏠" },
  { id: "emploi", nom: "Emploi", emoji: "💼" },
  { id: "animaux", nom: "Accessoires animaux", emoji: "🐾" },
  { id: "modelisme", nom: "Modélisme", emoji: "🛩️" },
  { id: "cuisine", nom: "Cuisine", emoji: "🍳" },
  { id: "vintage", nom: "Vintage", emoji: "🕰️" },
  { id: "autre", nom: "Autre", emoji: "📦" },
]