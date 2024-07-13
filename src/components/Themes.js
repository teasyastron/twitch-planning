import React, { useState } from 'react';

const Themes = () => {
  const themes = ['red', 'katertot', 'theme3', 'theme4']; // Add more themes as needed
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
                className="p-4 border rounded shadow cursor-pointer hover:bg-gray-200"
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
