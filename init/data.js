// const sampleListings = [
//   {
//     title: "Cozy Beachfront Cottage",
//     description:
//       "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1500,
//     location: "Malibu",
//     country: "United States",
//   },
//   {
//     title: "Modern Loft in Downtown",
//     description:
//       "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "New York City",
//     country: "United States",
//   },
//   {
//     title: "Mountain Retreat",
//     description:
//       "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1000,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Historic Villa in Tuscany",
//     description:
//       "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2500,
//     location: "Florence",
//     country: "Italy",
//   },
//   {
//     title: "Secluded Treehouse Getaway",
//     description:
//       "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 800,
//     location: "Portland",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Paradise",
//     description:
//       "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2000,
//     location: "Cancun",
//     country: "Mexico",
//   },
//   {
//     title: "Rustic Cabin by the Lake",
//     description:
//       "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 900,
//     location: "Lake Tahoe",
//     country: "United States",
//   },
//   {
//     title: "Luxury Penthouse with City Views",
//     description:
//       "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3500,
//     location: "Los Angeles",
//     country: "United States",
//   },
//   {
//     title: "Ski-In/Ski-Out Chalet",
//     description:
//       "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3000,
//     location: "Verbier",
//     country: "Switzerland",
//   },
//   {
//     title: "Safari Lodge in the Serengeti",
//     description:
//       "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Serengeti National Park",
//     country: "Tanzania",
//   },
//   {
//     title: "Historic Canal House",
//     description:
//       "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Amsterdam",
//     country: "Netherlands",
//   },
//   {
//     title: "Private Island Retreat",
//     description:
//       "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 10000,
//     location: "Fiji",
//     country: "Fiji",
//   },
//   {
//     title: "Charming Cottage in the Cotswolds",
//     description:
//       "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "Cotswolds",
//     country: "United Kingdom",
//   },
//   {
//     title: "Historic Brownstone in Boston",
//     description:
//       "Step back in time in this elegant historic brownstone located in the heart of Boston.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2200,
//     location: "Boston",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Bungalow in Bali",
//     description:
//       "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Bali",
//     country: "Indonesia",
//   },
//   {
//     title: "Mountain View Cabin in Banff",
//     description:
//       "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1500,
//     location: "Banff",
//     country: "Canada",
//   },
//   {
//     title: "Art Deco Apartment in Miami",
//     description:
//       "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
//     image: {
//       filename: "listingimage",
//       url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1600,
//     location: "Miami",
//     country: "United States",
//   },
//   {
//     title: "Tropical Villa in Phuket",
//     description:
//       "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 3000,
//     location: "Phuket",
//     country: "Thailand",
//   },
//   {
//     title: "Historic Castle in Scotland",
//     description:
//       "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Scottish Highlands",
//     country: "United Kingdom",
//   },
//   {
//     title: "Desert Oasis in Dubai",
//     description:
//       "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 5000,
//     location: "Dubai",
//     country: "United Arab Emirates",
//   },
//   {
//     title: "Rustic Log Cabin in Montana",
//     description:
//       "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1100,
//     location: "Montana",
//     country: "United States",
//   },
//   {
//     title: "Beachfront Villa in Greece",
//     description:
//       "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2500,
//     location: "Mykonos",
//     country: "Greece",
//   },
//   {
//     title: "Eco-Friendly Treehouse Retreat",
//     description:
//       "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 750,
//     location: "Costa Rica",
//     country: "Costa Rica",
//   },
//   {
//     title: "Historic Cottage in Charleston",
//     description:
//       "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1600,
//     location: "Charleston",
//     country: "United States",
//   },
//   {
//     title: "Modern Apartment in Tokyo",
//     description:
//       "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 2000,
//     location: "Tokyo",
//     country: "Japan",
//   },
//   {
//     title: "Lakefront Cabin in New Hampshire",
//     description:
//       "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1200,
//     location: "New Hampshire",
//     country: "United States",
//   },
//   {
//     title: "Luxury Villa in the Maldives",
//     description:
//       "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 6000,
//     location: "Maldives",
//     country: "Maldives",
//   },
//   {
//     title: "Ski Chalet in Aspen",
//     description:
//       "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 4000,
//     location: "Aspen",
//     country: "United States",
//   },
//   {
//     title: "Secluded Beach House in Costa Rica",
//     description:
//       "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
//     image: {
//       filename: "listingimage",
//       url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     },
//     price: 1800,
//     location: "Costa Rica",
//     country: "Costa Rica",
//   },
// ];


// module.exports = { data: sampleUsers };

// const sampleListings = [
//   {
//   "_id": { "$oid": "685bd9a1a491ce59fc1f0102" },
//   "title": "Cozy Beachfront Cottage",
//   "description": "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
//   "image": {
//     "url": "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//     "filename": "listingimage"
//   },
//   "price": { "$numberInt": "1500" },
//   "location": "Malibu",
//   "country": "United States",
//   "reviews": [],
//   "geometry": {
//     "type": "Point",
//     "coordinates": [
//       { "$numberDouble": "-118.7798" },
//       { "$numberDouble": "34.0259" }
//     ]
//   },
//   "category": "Farms",
//   "owner": { "$oid": "685bd0a5a491ce59fc1f0002" },
//   "__v": { "$numberInt": "0" }
// },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000101" },
//     "title": "Modern Loft in Downtown",
//     "description": "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "1200" },
//     "location": "New York City",
//     "country": "United States",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "-74.0060" },
//         { "$numberDouble": "40.7128" }
//       ]
//     },
//     "category": "Rooms",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0008" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000102" },
//     "title": "Mountain Retreat",
//     "description": "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "1000" },
//     "location": "Aspen",
//     "country": "United States",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "-106.8370" },
//         { "$numberDouble": "39.1911" }
//       ]
//     },
//     "category": "Mountains",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0002" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000103" },
//     "title": "Historic Villa in Tuscany",
//     "description": "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "2500" },
//     "location": "Florence",
//     "country": "Italy",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "11.2558" },
//         { "$numberDouble": "43.7696" }
//       ]
//     },
//     "category": "HistoricalHomes",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0003" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000104" },
//     "title": "Secluded Treehouse Getaway",
//     "description": "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "800" },
//     "location": "Portland",
//     "country": "United States",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "-122.6750" },
//         { "$numberDouble": "45.5051" }
//       ]
//     },
//     "category": "TreeHouses",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0007" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000105" },
//     "title": "Beachfront Paradise",
//     "description": "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "2000" },
//     "location": "Cancun",
//     "country": "Mexico",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "-86.8515" },
//         { "$numberDouble": "21.1619" }
//       ]
//     },
//     "category": "BeachFront",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0005" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000106" },
//     "title": "Rustic Cabin by the Lake",
//     "description": "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "900" },
//     "location": "Lake Tahoe",
//     "country": "United States",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "-120.0440" },
//         { "$numberDouble": "39.0968" }
//       ]
//     },
//     "category": "Cabins",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0003" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000107" },
//     "title": "Luxury Penthouse with City Views",
//     "description": "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "3500" },
//     "location": "Los Angeles",
//     "country": "United States",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "-118.2437" },
//         { "$numberDouble": "34.0522" }
//       ]
//     },
//     "category": "IconicCites",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0004" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000108" },
//     "title": "Ski-In/Ski-Out Chalet",
//     "description": "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "3000" },
//     "location": "Verbier",
//     "country": "Switzerland",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "7.2306" },
//         { "$numberDouble": "46.0967" }
//       ]
//     },
//     "category": "Mountains",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0009" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000109" },
//     "title": "Safari Lodge in the Serengeti",
//     "description": "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "4000" },
//     "location": "Serengeti National Park",
//     "country": "Tanzania",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "34.6857" },
//         { "$numberDouble": "-2.3333" }
//       ]
//     },
//     "category": "Tropical",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0001" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf00010a" },
//     "title": "Historic Canal House",
//     "description": "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "1800" },
//     "location": "Amsterdam",
//     "country": "Netherlands",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "4.9041" },
//         { "$numberDouble": "52.3676" }
//       ]
//     },
//     "category": "HistoricalHomes",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0006" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf00010b" },
//     "title": "Private Island Retreat",
//     "description": "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "10000" },
//     "location": "Fiji",
//     "country": "Fiji",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "179.4144" },
//         { "$numberDouble": "-16.5782" }
//       ]
//     },
//     "category": "Tropical",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0005" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf00010c" },
//     "title": "Charming Cottage in the Cotswolds",
//     "description": "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "1200" },
//     "location": "Cotswolds",
//     "country": "United Kingdom",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "-1.7781" },
//         { "$numberDouble": "51.8330" }
//       ]
//     },
//     "category": "Castles",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0009" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf00010d" },
//     "title": "Historic Brownstone in Boston",
//     "description": "Step back in time in this elegant historic brownstone located in the heart of Boston.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "2200" },
//     "location": "Boston",
//     "country": "United States",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "-71.0589" },
//         { "$numberDouble": "42.3601" }
//       ]
//     },
//     "category": "HistoricalHomes",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0001" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf00010e" },
//     "title": "Beachfront Bungalow in Bali",
//     "description": "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "1800" },
//     "location": "Bali",
//     "country": "Indonesia",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "115.1889" },
//         { "$numberDouble": "-8.4095" }
//       ]
//     },
//     "category": "Tropical",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0007" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf00010f" },
//     "title": "Mountain View Cabin in Banff",
//     "description": "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "1500" },
//     "location": "Banff",
//     "country": "Canada",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "-115.5720" },
//         { "$numberDouble": "51.1784" }
//       ]
//     },
//     "category": "Cabins",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0008" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000110" },
//     "title": "Art Deco Apartment in Miami",
//     "description": "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
//     "image": {
//       "url": "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "1600" },
//     "location": "Miami",
//     "country": "United States",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "-80.1918" },
//         { "$numberDouble": "25.7617" }
//       ]
//     },
//     "category": "IconicCites",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0006" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000111" },
//     "title": "Tropical Villa in Phuket",
//     "description": "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "3000" },
//     "location": "Phuket",
//     "country": "Thailand",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "98.3381" },
//         { "$numberDouble": "7.8804" }
//       ]
//     },
//     "category": "Tropical",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0004" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000112" },
//     "title": "Historic Castle in Scotland",
//     "description": "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "4000" },
//     "location": "Scottish Highlands",
//     "country": "United Kingdom",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "-4.2026" },
//         { "$numberDouble": "57.1200" }
//       ]
//     },
//     "category": "Castles",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0009" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000113" },
//     "title": "Desert Oasis in Dubai",
//     "description": "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "5000" },
//     "location": "Dubai",
//     "country": "United Arab Emirates",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "55.2962" },
//         { "$numberDouble": "25.276987" }
//       ]
//     },
//     "category": "Trending",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0005" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000114" },
//     "title": "Rustic Log Cabin in Montana",
//     "description": "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "1100" },
//     "location": "Montana",
//     "country": "United States",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "-110.3626" },
//         { "$numberDouble": "46.8797" }
//       ]
//     },
//     "category": "Cabins",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0003" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000115" },
//     "title": "Beachfront Villa in Greece",
//     "description": "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "2500" },
//     "location": "Mykonos",
//     "country": "Greece",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "25.3270" },
//         { "$numberDouble": "37.4467" }
//       ]
//     },
//     "category": "BeachFront",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0002" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000116" },
//     "title": "Treetop Eco Retreat",
//     "description": "A sustainable stay perched above the forest canopy, blending luxury with nature.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1576671081818-8b55c1f94d1a?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "1700" },
//     "location": "Chiang Mai",
//     "country": "Thailand",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "98.9853" },
//         { "$numberDouble": "18.7061" }
//       ]
//     },
//     "category": "TreeHouses",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0007" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000117" },
//     "title": "Arctic Dome under Northern Lights",
//     "description": "Sleep beneath the aurora borealis in this glass dome designed for stargazing and serenity.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1609645887764-b43b7c79a6a1?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "4700" },
//     "location": "Tromsø",
//     "country": "Norway",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "18.9553" },
//         { "$numberDouble": "69.6496" }
//       ]
//     },
//     "category": "Artic",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0001" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000118" },
//     "title": "Glamping Tent in the Outback",
//     "description": "Comfort meets wilderness in this glamorous tent with views of the red desert horizon.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1620966924528-9984d3f0af4d?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "1900" },
//     "location": "Uluru",
//     "country": "Australia",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "131.0369" },
//         { "$numberDouble": "-25.3444" }
//       ]
//     },
//     "category": "camping",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0008" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000119" },
//     "title": "Floating Villa on Lake Titicaca",
//     "description": "A serene lakehouse experience on the world’s highest navigable lake in Peru.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1606747239532-b0c1112dcf36?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "2600" },
//     "location": "Puno",
//     "country": "Peru",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "-70.0239" },
//         { "$numberDouble": "-15.8402" }
//       ]
//     },
//     "category": "Domes",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0002" },
//     "__v": { "$numberInt": "0" }
//   },{
//     "_id": { "$oid": "685bdcabd7f1a35dcf00011a" },
//     "title": "Sunset Cliff Retreat",
//     "description": "Clifftop serenity with ocean breezes and a private path to the shore.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "2700" },
//     "location": "Big Sur",
//     "country": "United States",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "-121.7870" }, { "$numberDouble": "36.2704" } ]
//     },
//     "category": "BeachFront",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0002" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf00011b" },
//     "title": "Snowy Chalet in Niseko",
//     "description": "Ski straight to the door of this Japanese-style chalet wrapped in pristine snow.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1608001321197-d3b48bbbf6ea?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "3500" },
//     "location": "Niseko",
//     "country": "Japan",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "140.7266" }, { "$numberDouble": "42.8048" } ]
//     },
//     "category": "Mountains",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0004" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf00011c" },
//     "title": "Bohemian Loft in Istanbul",
//     "description": "Eclectic furnishings, Ottoman charm, and a rooftop view of the Bosphorus.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1618220179428-22196e2fb379?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "2100" },
//     "location": "Istanbul",
//     "country": "Turkey",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "28.9784" }, { "$numberDouble": "41.0082" } ]
//     },
//     "category": "Rooms",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0005" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf00011d" },
//     "title": "Desert Dome in Wadi Rum",
//     "description": "A sci-fi landscape, Bedouin warmth, and stargazing like nowhere else.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1585241645927-9d86b68f7881?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "3800" },
//     "location": "Wadi Rum",
//     "country": "Jordan",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "35.4209" }, { "$numberDouble": "29.5328" } ]
//     },
//     "category": "Domes",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0003" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf00011e" },
//     "title": "Lakehouse in Queenstown",
//     "description": "A tranquil hideaway on the edge of a turquoise alpine lake in New Zealand.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1582134486817-5b8952263872?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "2900" },
//     "location": "Queenstown",
//     "country": "New Zealand",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "168.6614" }, { "$numberDouble": "-45.0312" } ]
//     },
//     "category": "AmazingPools",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0009" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf00011f" },
//     "title": "Floating Dome in Saimaa",
//     "description": "Finland's calm waters cradle this floating dome with a clear ceiling for moonlit lake views.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1614852204644-f6f993f69b1b?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "3200" },
//     "location": "Lake Saimaa",
//     "country": "Finland",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "28.0000" }, { "$numberDouble": "61.0000" } ]
//     },
//     "category": "Domes",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0006" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000120" },
//     "title": "Countryside Cabin in Vermont",
//     "description": "Maple trees, firewood coziness, and a porch swing perfect for fall colors.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1635357178886-5f9bd2a4af4b?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "1900" },
//     "location": "Stowe",
//     "country": "United States",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "-72.7090" }, { "$numberDouble": "44.4650" } ]
//     },
//     "category": "Cabins",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0008" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000121" },
//     "title": "Garden Villa in Ubud",
//     "description": "Tropical gardens, open-air baths, and a meditative rice field backdrop.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1595689441475-d8c9fbb32484?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "3300" },
//     "location": "Ubud",
//     "country": "Indonesia",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "115.2625" }, { "$numberDouble": "-8.5069" } ]
//     },
//     "category": "Farms",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0001" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000123" },
//     "title": "Lakefront Cabin in New Hampshire",
//     "description": "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "1200" },
//     "location": "New Hampshire",
//     "country": "United States",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "-71.5724" },
//         { "$numberDouble": "43.1939" }
//       ]
//     },
//     "category": "Cabins",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0005" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000124" },
//     "title": "Luxury Villa in the Maldives",
//     "description": "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "6000" },
//     "location": "Maldives",
//     "country": "Maldives",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "73.2207" },
//         { "$numberDouble": "3.2028" }
//       ]
//     },
//     "category": "Tropical",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0009" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000125" },
//     "title": "Ski Chalet in Aspen",
//     "description": "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "4000" },
//     "location": "Aspen",
//     "country": "United States",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "-106.8370" },
//         { "$numberDouble": "39.1911" }
//       ]
//     },
//     "category": "Mountains",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0001" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000126" },
//     "title": "Secluded Beach House in Costa Rica",
//     "description": "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "1800" },
//     "location": "Costa Rica",
//     "country": "Costa Rica",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [
//         { "$numberDouble": "-84.0739" },
//         { "$numberDouble": "9.7489" }
//       ]
//     },
//     "category": "BeachFront",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0003" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000127" },
//     "title": "Ocean Cliff Cottage in Cinque Terre",
//     "description": "Perched along Italy’s dramatic coastline, this colorful cottage offers unbeatable views and fresh seafood on your doorstep.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1585306466262-fd8bd51aad59?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "2900" },
//     "location": "Cinque Terre",
//     "country": "Italy",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "9.6847" }, { "$numberDouble": "44.1270" } ]
//     },
//     "category": "IconicCites",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0007" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000128" },
//     "title": "Island Treehouse in Palawan",
//     "description": "Accessible only by boat, this handcrafted treehouse hovers over crystal-clear waters and coral reefs.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1606791405791-bf1c832d9986?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "4400" },
//     "location": "Palawan",
//     "country": "Philippines",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "118.7384" }, { "$numberDouble": "9.8349" } ]
//     },
//     "category": "TreeHouses",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0006" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000129" },
//     "title": "Eco Bamboo Lodge",
//     "description": "Handwoven bamboo dwellings nestled in the jungle — raw, rugged, and completely off-grid.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1576840244306-137fe0a62f32?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "1700" },
//     "location": "Pai",
//     "country": "Thailand",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "98.4356" }, { "$numberDouble": "19.3589" } ]
//     },
//     "category": "Farms",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0008" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf00012a" },
//     "title": "Skyview Capsule Hotel",
//     "description": "Minimalist space-age pods with floor-to-ceiling views of the Tokyo skyline.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1582895300926-86fd5b637ee6?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "900" },
//     "location": "Tokyo",
//     "country": "Japan",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "139.6917" }, { "$numberDouble": "35.6895" } ]
//     },
//     "category": "Rooms",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0001" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf00012b" },
//     "title": "Stone Villa in Provence",
//     "description": "Sunflowers, lavender fields, and rustic stone architecture — an ode to French countryside charm.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1566740933431-772d14c5639f?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "2600" },
//     "location": "Provence",
//     "country": "France",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "5.4474" }, { "$numberDouble": "43.9493" } ]
//     },
//     "category": "HistoricalHomes",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0004" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf00012c" },
//     "title": "Forest Camp in Slovenia",
//     "description": "Tucked deep in Triglav National Park — tents on timber platforms surrounded by pine and mist.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1601555025412-23608b317b2f?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "1500" },
//     "location": "Triglav",
//     "country": "Slovenia",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "13.8667" }, { "$numberDouble": "46.3833" } ]
//     },
//     "category": "camping",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0002" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf00012d" },
//     "title": "Urban Jungle Penthouse",
//     "description": "A rooftop apartment in São Paulo filled with plants, parrots, and panoramic views.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1638228041206-2dbe8f148b51?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "3100" },
//     "location": "São Paulo",
//     "country": "Brazil",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "-46.6333" }, { "$numberDouble": "-23.5505" } ]
//     },
//     "category": "Trending",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0009" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf00012e" },
//     "title": "Tuscany Vineyard Stay",
//     "description": "Wake up among the vines and taste wine from the estate cellar beneath your room.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1501436513149-ec7ee1b40eab?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "2750" },
//     "location": "Chianti",
//     "country": "Italy",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "11.3276" }, { "$numberDouble": "43.5853" } ]
//     },
//     "category": "Farms",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0003" },
//     "__v": { "$numberInt": "0" }
//   },{
//     "_id": { "$oid": "685bdcabd7f1a35dcf000131" },
//     "title": "Hilltop Chalet in Lucerne",
//     "description": "Wake up to panoramic views of snow-capped peaks and the tranquil lake below in this Swiss chalet.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1542317854-466bb0d67f77?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "3400" },
//     "location": "Lucerne",
//     "country": "Switzerland",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "8.3093" }, { "$numberDouble": "47.0502" } ]
//     },
//     "category": "Mountains",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0002" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000132" },
//     "title": "Windmill Stay in the Netherlands",
//     "description": "Stay in a renovated Dutch windmill and soak in countryside views with a rustic twist.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1584797111741-e4bfa9f8b855?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "2000" },
//     "location": "Kinderdijk",
//     "country": "Netherlands",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "4.6333" }, { "$numberDouble": "51.8833" } ]
//     },
//     "category": "HistoricalHomes",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0004" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000133" },
//     "title": "Rainforest Treehouse in Ecuador",
//     "description": "Perched in the Andean cloud forest, this treehouse is surrounded by lush greenery and exotic birdsong.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1564166008-8c5d5348c073?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "1800" },
//     "location": "Mindo",
//     "country": "Ecuador",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "-78.7794" }, { "$numberDouble": "-0.0477" } ]
//     },
//     "category": "TreeHouses",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0007" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000134" },
//     "title": "Ice Hotel Suite",
//     "description": "Experience life carved out of crystal-clear ice blocks in Sweden’s most iconic ice hotel.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1550051468-96c70c3a0cf5?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "4500" },
//     "location": "Jukkasjärvi",
//     "country": "Sweden",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "20.6100" }, { "$numberDouble": "67.8512" } ]
//     },
//     "category": "Artic",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0001" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000135" },
//     "title": "Wine Barrel Glamping in Portugal",
//     "description": "Sleep inside a converted wine barrel nestled between vineyards in Douro Valley.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1600326147421-267f24dd494b?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "2300" },
//     "location": "Douro",
//     "country": "Portugal",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "-7.5900" }, { "$numberDouble": "41.1601" } ]
//     },
//     "category": "Domes",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0003" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000136" },
//     "title": "Pagoda Retreat in Kyoto",
//     "description": "Step into a tea house retreat hidden in Kyoto’s temple district — serene, slow, and soaked in culture.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1608372230576-e3fb1daee865?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "2700" },
//     "location": "Kyoto",
//     "country": "Japan",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "135.7681" }, { "$numberDouble": "35.0116" } ]
//     },
//     "category": "HistoricalHomes",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0006" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000137" },
//     "title": "Floating Safari Tent in Botswana",
//     "description": "A canvas tent with a veranda floating on the Okavango Delta — luxury meets wilderness.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1584780509193-0d14fda5b6a5?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "4800" },
//     "location": "Okavango Delta",
//     "country": "Botswana",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "22.8909" }, { "$numberDouble": "-19.3016" } ]
//     },
//     "category": "camping",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0005" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000138" },
//     "title": "Lighthouse Stay in Maine",
//     "description": "A restored 19th-century lighthouse standing proudly on a rocky Atlantic bluff.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1615264920917-3811b4cd4199?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "2100" },
//     "location": "Portland",
//     "country": "United States",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "-70.2553" }, { "$numberDouble": "43.6615" } ]
//     },
//     "category": "IconicCites",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0008" },
//     "__v": { "$numberInt": "0" }
//   }, {
//     "_id": { "$oid": "685bdcabd7f1a35dcf00013a" },
//     "title": "Boathouse Retreat on Lake Geneva",
//     "description": "Glide straight into the water from your porch in this private floating boathouse in Montreux.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1584529651252-6c2b8b4b1759?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "3100" },
//     "location": "Montreux",
//     "country": "Switzerland",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "6.9100" }, { "$numberDouble": "46.4333" } ]
//     },
//     "category": "AmazingPools",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0003" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf00013b" },
//     "title": "Clifftop Pool Villa in Santorini",
//     "description": "Aegean sunsets from your infinity pool — whitewashed luxury nestled in the cliffs of Oia.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1584949044056-999c065bba87?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "4200" },
//     "location": "Santorini",
//     "country": "Greece",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "25.3750" }, { "$numberDouble": "36.4613" } ]
//     },
//     "category": "Tropical",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0004" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf00013c" },
//     "title": "Countryside Loft in Bavaria",
//     "description": "Cozy wooden loft with traditional beams overlooking rolling green pastures and alpine meadows.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1579178000381-e87b75c3d841?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "1500" },
//     "location": "Bavaria",
//     "country": "Germany",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "10.5000" }, { "$numberDouble": "48.8333" } ]
//     },
//     "category": "Farms",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0009" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf00013d" },
//     "title": "Lava Field Dome in Iceland",
//     "description": "Sleep surrounded by volcanic landscapes and mossy terrain — a futuristic dome retreat.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1526318472351-bc6f315c6b35?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "3800" },
//     "location": "Hveragerði",
//     "country": "Iceland",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "-21.1900" }, { "$numberDouble": "64.0000" } ]
//     },
//     "category": "Domes",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0006" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf00013e" },
//     "title": "Floating Bamboo Home in Vietnam",
//     "description": "Sustainable bamboo construction and stillwater views near the Mekong Delta.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1645691810496-68e1db9f36d6?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "2300" },
//     "location": "Cần Thơ",
//     "country": "Vietnam",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "105.7833" }, { "$numberDouble": "10.0333" } ]
//     },
//     "category": "TreeHouses",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0002" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf00013f" },
//     "title": "Hill Temple Retreat in Rishikesh",
//     "description": "Meditate at sunrise surrounded by Himalayan hills and the sound of the Ganga.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1577687300789-30387663b92f?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "1750" },
//     "location": "Rishikesh",
//     "country": "India",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "78.2676" }, { "$numberDouble": "30.0869" } ]
//     },
//     "category": "Mountains",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0005" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000140" },
//     "title": "Stone Fortress in Cappadocia",
//     "description": "Carved into soft stone cliffs, this fairytale cave home offers majestic valley views.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1549893076-e6134a3db3b5?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "3300" },
//     "location": "Göreme",
//     "country": "Turkey",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "34.8290" }, { "$numberDouble": "38.6431" } ]
//     },
//     "category": "HistoricalHomes",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0007" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000141" },
//     "title": "Highlands Farmhouse Escape",
//     "description": "Sheep-dotted hills and foggy mornings wrap around this rustic Scottish escape.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1624083579915-20e4c3cb693e?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "1950" },
//     "location": "Inverness",
//     "country": "United Kingdom",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "-4.2232" }, { "$numberDouble": "57.4778" } ]
//     },
//     "category": "Farms",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0001" },
//     "__v": { "$numberInt": "0" }
//   }, {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000143" },
//     "title": "Jungle Canopy Dome in Costa Rica",
//     "description": "Suspended among the branches, this geodesic dome blends luxury with tropical immersion.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1602540414035-0ad93a70a842?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "3700" },
//     "location": "Uvita",
//     "country": "Costa Rica",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "-83.7334" }, { "$numberDouble": "9.2081" } ]
//     },
//     "category": "Domes",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0006" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000144" },
//     "title": "Hidden Tea House in Nuwara Eliya",
//     "description": "Surrounded by emerald hills and misty plantations, this hillside bungalow is a haven for tea lovers.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1589806996129-f91c06149c24?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "2200" },
//     "location": "Nuwara Eliya",
//     "country": "Sri Lanka",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "80.7829" }, { "$numberDouble": "6.9497" } ]
//     },
//     "category": "Farms",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0004" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000145" },
//     "title": "Rainforest River Cabin in Belize",
//     "description": "Off-the-grid sanctuary on a remote riverbank, surrounded by jungle and hidden waterfalls.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1622396638269-6de7c2b9a5b4?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "2100" },
//     "location": "Cayo District",
//     "country": "Belize",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "-89.0511" }, { "$numberDouble": "17.1744" } ]
//     },
//     "category": "Cabins",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0003" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000146" },
//     "title": "Ocean Hut in Zanzibar",
//     "description": "Simple coastal hut on stilts with swaying palms and turquoise tides as your backdrop.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1612913596832-bf42db26c1ee?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "2400" },
//     "location": "Nungwi",
//     "country": "Tanzania",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "39.2950" }, { "$numberDouble": "-5.7260" } ]
//     },
//     "category": "BeachFront",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0009" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000147" },
//     "title": "Nordic Cabin in Lapland",
//     "description": "Minimalist Scandinavian design and reindeer views await in this snow-covered wooden cabin.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1609773408750-c9b6426f8d3b?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "3900" },
//     "location": "Rovaniemi",
//     "country": "Finland",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "25.7482" }, { "$numberDouble": "66.5039" } ]
//     },
//     "category": "Artic",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0002" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000148" },
//     "title": "Garden Studio in Kyoto",
//     "description": "Step from tatami to koi pond in this tiny house surrounded by bamboo and stone lanterns.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1603987837315-0a3acdee7a4c?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "1850" },
//     "location": "Kyoto",
//     "country": "Japan",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "135.7681" }, { "$numberDouble": "35.0116" } ]
//     },
//     "category": "HistoricalHomes",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0008" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000149" },
//     "title": "Skyline Rooftop Tent in Rio",
//     "description": "A rooftop camping pod in the heart of Lapa with views stretching across Sugarloaf Mountain.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1617803706326-e1d4937f91d0?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "1900" },
//     "location": "Rio de Janeiro",
//     "country": "Brazil",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "-43.1729" }, { "$numberDouble": "-22.9068" } ]
//     },
//     "category": "camping",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0005" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf00014a" },
//     "title": "Cliff Nest Pod in Peru",
//     "description": "Suspended against the sacred valley cliffs, this capsule stay is not for the faint of heart.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1503253491678-530dfbe0b04d?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "4600" },
//     "location": "Urubamba",
//     "country": "Peru",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "-72.0874" }, { "$numberDouble": "-13.3036" } ]
//     },
//     "category": "IconicCites",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0001" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf00014c" },
//     "title": "Desert Camp in Atacama",
//     "description": "Experience dramatic desert silence with a stargazer's sky and salt flats at your doorstep.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "2800" },
//     "location": "San Pedro de Atacama",
//     "country": "Chile",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "-68.2026" }, { "$numberDouble": "-22.9087" } ]
//     },
//     "category": "camping",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0007" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf00014d" },
//     "title": "Volcano View Villa in Bali",
//     "description": "Overlook Mount Agung from a serene villa with infinity pool, nestled in tropical gardens.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1581426502151-cc2959ad8e8e?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "2600" },
//     "location": "Sidemen",
//     "country": "Indonesia",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "115.4847" }, { "$numberDouble": "-8.4387" } ]
//     },
//     "category": "Tropical",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0006" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf00014e" },
//     "title": "Floating Igloo on Lake Inari",
//     "description": "A snow-covered igloo afloat in Arctic waters — with floor-to-sky windows for aurora views.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1610556594769-f33438e9a44c?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "4300" },
//     "location": "Inari",
//     "country": "Finland",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "27.0242" }, { "$numberDouble": "68.9050" } ]
//     },
//     "category": "Artic",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0003" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf00014f" },
//     "title": "Aegean Castle in Rhodes",
//     "description": "Medieval fortress turned boutique stay, where ancient stone walls meet modern indulgence.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1588343158596-9dfcdb46e84b?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "3100" },
//     "location": "Rhodes",
//     "country": "Greece",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "28.2229" }, { "$numberDouble": "36.4346" } ]
//     },
//     "category": "Castles",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0009" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000150" },
//     "title": "Safari Treehouse in Namibia",
//     "description": "A stilted hideaway among baobabs — sleep to the call of lions in Etosha.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1600003010531-b6b611384a15?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "3750" },
//     "location": "Etosha National Park",
//     "country": "Namibia",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "16.4639" }, { "$numberDouble": "-18.8129" } ]
//     },
//     "category": "TreeHouses",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0005" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000151" },
//     "title": "Clifftop Adobe Casita",
//     "description": "Nestled on a red rock mesa, this sun-baked adobe hideaway blends Pueblo style with desert stillness.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1526483360959-0a9b81c52854?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "3100" },
//     "location": "Sedona",
//     "country": "United States",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "-111.76099" }, { "$numberDouble": "34.8697" } ]
//     },
//     "category": "HistoricalHomes",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0008" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000152" },
//     "title": "Floating House on the Thames",
//     "description": "A modern river retreat with rooftop deck, moored right in the heart of London.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1561290290-7b94241a5ba4?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "3800" },
//     "location": "London",
//     "country": "United Kingdom",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "-0.1276" }, { "$numberDouble": "51.5072" } ]
//     },
//     "category": "IconicCites",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0004" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000153" },
//     "title": "Rooftop Tent in Nairobi",
//     "description": "Perched atop an urban farm hostel, this rooftop canvas tent offers a safari feel in the city.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1568355428887-8d142fcdf56c?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "1600" },
//     "location": "Nairobi",
//     "country": "Kenya",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "36.8219" }, { "$numberDouble": "-1.2921" } ]
//     },
//     "category": "camping",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0001" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000154" },
//     "title": "Lagoon-Side Retreat in Bora Bora",
//     "description": "Sleep just above the coral reef in an overwater bungalow surrounded by turquoise serenity.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1601924582975-df2ecfdc7a85?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "6900" },
//     "location": "Bora Bora",
//     "country": "French Polynesia",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "-151.7415" }, { "$numberDouble": "-16.5004" } ]
//     },
//     "category": "Tropical",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0002" },
//     "__v": { "$numberInt": "0" }
//   },
//   {
//     "_id": { "$oid": "685bdcabd7f1a35dcf000155" },
//     "title": "Terraced Earth House in Cappadocia",
//     "description": "Sleep inside ancient volcanic stone with curved earthen architecture and sweeping canyon views.",
//     "image": {
//       "url": "https://images.unsplash.com/photo-1595612487545-6bb3b0985c27?auto=format&fit=crop&w=800&q=60",
//       "filename": "listingimage"
//     },
//     "price": { "$numberInt": "2900" },
//     "location": "Uçhisar",
//     "country": "Turkey",
//     "reviews": [],
//     "geometry": {
//       "type": "Point",
//       "coordinates": [ { "$numberDouble": "34.8021" }, { "$numberDouble": "38.6423" } ]
//     },
//     "category": "Domes",
//     "owner": { "$oid": "685bd0a5a491ce59fc1f0007" },
//     "__v": { "$numberInt": "0" }
//   }
// ]

