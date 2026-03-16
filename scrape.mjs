import fs from 'fs';
import https from 'https';

const url = 'https://www.luxurytripindia.com/';

https.get(url, (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    const urls = new Set();
    const regex = /href="(https:\/\/www\.luxurytripindia\.com\/[^"]+)"/g;
    let match;
    while ((match = regex.exec(data)) !== null) {
      urls.add(match[1]);
    }
    
    const uniqueUrls = Array.from(urls);
    console.log(JSON.stringify(uniqueUrls, null, 2));
    fs.writeFileSync('scraped_urls.json', JSON.stringify(uniqueUrls, null, 2));
  });
}).on('error', (err) => {
  console.log('Error: ' + err.message);
});
