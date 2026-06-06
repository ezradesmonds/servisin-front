const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components', 'user', 'icon');
const files = ['home.svg', 'calendar.svg', 'person.svg', 'magnifier.svg', 'chat_bubble.svg'];

const THEME_BLUE = '#003F87';

files.forEach(file => {
  const filePath = path.join(dir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Create inactive version (outline, blue)
    let inactiveContent = content
      .replace(/stroke="[^"]*"/g, `stroke="${THEME_BLUE}"`)
      .replace(/fill="[^"]*"/g, `fill="none"`); // Ensure it's not filled
    
    // Create active version (filled, blue)
    let activeContent = content
      .replace(/stroke="[^"]*"/g, `stroke="${THEME_BLUE}"`)
      .replace(/fill="none"/g, `fill="${THEME_BLUE}"`);
      
    fs.writeFileSync(filePath, inactiveContent);
    fs.writeFileSync(path.join(dir, file.replace('.svg', '-active.svg')), activeContent);
    console.log('Processed', file);
  } else {
    console.log('File not found:', file);
  }
});
