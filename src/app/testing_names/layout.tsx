
export default function TestingNamesLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md max-h-[10vh] p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800">Testing Names Layout</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {children}
      </main>

      {/* Footer */}
      <footer style={{
      boxShadow: 'inset 0 4px 6px rgba(0, 0, 0, 0.1), inset 0 -4px 6px rgba(0, 0, 0, 0.05)',
    }} className="bg-white max-h-[10vh] shadow-md p-4 ">
        <p className="text-center text-gray-600">Testing Names Footer</p>
      </footer>
    </div>
    );
  }