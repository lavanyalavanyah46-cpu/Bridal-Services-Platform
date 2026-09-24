const artists=[
{name:'Aishwarya Makeup Studio',cat:'Makeup',price:8500,rating:4.8,loc:'Vellore',icon:'💄'},
{name:'Mehndi by Kavya',cat:'Mehndi',price:6000,rating:4.7,loc:'Chennai',icon:'🌿'},
{name:'Moments Photography',cat:'Photography',price:18000,rating:4.9,loc:'Bangalore',icon:'📷'},
{name:'Royal Bridal Wear',cat:'Bridal Wear',price:22000,rating:4.6,loc:'Chennai',icon:'👗'},
{name:'Style & Shine',cat:'Hair Styling',price:9500,rating:4.5,loc:'Vellore',icon:'💇'},
{name:'Glow Skin Studio',cat:'Skincare',price:7000,rating:4.4,loc:'Tiruvannamalai',icon:'✨'}
];
function render(list=artists){document.getElementById('artistGrid').innerHTML=list.map((a,i)=>`<article class="artist"><div class="avatar">${a.icon}</div><div class="artist-info"><span class="tag">${a.cat}</span><h3>${a.name}</h3><p>📍 ${a.loc} &nbsp; ⭐ ${a.rating}</p><p class="price">From ₹${a.price.toLocaleString()}</p><button onclick="selectArtist(${i})">View & Book</button></div></article>`).join('')}
function filterArtists(){let c=document.getElementById('categoryFilter').value,p=document.getElementById('priceFilter').value,r=document.getElementById('ratingFilter').value,l=document.getElementById('locationFilter').value.toLowerCase();let list=artists.filter(a=>(c==='all'||a.cat===c)&&(p==='all'||(p==='low'&&a.price<10000)||(p==='mid'&&a.price>=10000&&a.price<=20000)||(p==='high'&&a.price>20000))&&(r==='all'||a.rating>=+r)&&a.loc.toLowerCase().includes(l));render(list)}
function selectArtist(i){document.getElementById('service').value=artists[i].cat;document.getElementById('book').scrollIntoView({behavior:'smooth'});alert(artists[i].name+' selected. Choose your date and time to book.')}
function bookService(e){e.preventDefault();document.getElementById('bookingMsg').textContent='Booking request submitted successfully! We will contact you shortly.';e.target.reset()}
function showLogin(){document.getElementById('loginModal').style.display='flex'}function hideLogin(){document.getElementById('loginModal').style.display='none'}render();