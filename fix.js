const fs = require('fs');

const files = [
  'C:/laragon/www/2_pcu/9_techno/servisin/servisin-front/servisin/src/components/user/LoginServisin.tsx',
  'C:/laragon/www/2_pcu/9_techno/servisin/servisin-front/servisin/src/components/user/RegisterServisin.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf-8');
    content = content.replace(/<div/g, '<View');
    content = content.replace(/<\/div/g, '</View');
    content = content.replace(/<span/g, '<Text');
    content = content.replace(/<\/span/g, '</Text');
    fs.writeFileSync(file, content);
    console.log('Fixed', file);
  }
});
