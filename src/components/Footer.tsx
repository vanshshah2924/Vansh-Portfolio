export default function Footer() {
  return (
    <footer className="bg-black text-white/80 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 bg-[#ff4d00] rounded-2xl flex items-center justify-center text-white text-2xl">V</div>
              <span className="text-2xl font-semibold text-white heading">Vansh</span>
            </div>
            <p className="text-sm">Crafting exceptional digital experiences with passion and precision.</p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <p>Home</p>
              <p>Services</p>
              <p>Portfolio</p>
              <p>Experience</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <p className="text-sm">Gujarat, India</p>
            <p className="text-sm mt-1">vansh@example.com</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm">
          © 2026 Vansh. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}