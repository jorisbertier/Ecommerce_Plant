
function Footer() {
    return (
            <footer className="bg-gray-800 text-white py-6 h-1/5">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} MonSite. Tous droits réservés.</p>
                <div className="mt-4">
                <a href="#" className="mx-3 hover:text-gray-400">Politique de confidentialité</a>
                <a href="#" className="mx-3 hover:text-gray-400">Conditions d'utilisation</a>
                <a href="#" className="mx-3 hover:text-gray-400">Contact</a>
                </div>
            </div>
            </footer>
        )
}

export default Footer