import React, { useState } from 'react';

const Themes = () => {
  const themes = ['katertot']; // Add more themes as needed
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [HomeComponent, setHomeComponent] = useState(null);

  const handleThemeClick = async (theme) => {
    try {
      const module = await import(`./themes/${theme}/Home.js`);
      setHomeComponent(() => module.default);
      setSelectedTheme(theme);
    } catch (error) {
      console.error(`Failed to load the theme: ${theme}`, error);
    }
  };

  return (
    <div className="p-4">
      {selectedTheme ? (
        <HomeComponent />
      ) : (
        <div>
          <h1 className="text-2xl font-bold">Other Themes</h1>
          <p className="mt-2">Here you can find other themes.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
            {themes.map((theme, index) => (
              <div 
                key={index}
                className="p-4 rounded-xl bg-purple-600 border-2 border-purple-300 cursor-pointer hover:bg-purple-500 transition duration-250"
                onClick={() => handleThemeClick(theme)}
              >
                <h2 className="text-lg font-semibold">{theme}</h2>
                <p>Click to load {theme} theme</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Themes;
