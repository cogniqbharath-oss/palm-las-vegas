import './style.css'
import palmLogo from './assets/logo.png'

const app = document.querySelector('#app')
app.innerHTML = `
  <header id="main-header" class="fixed top-0 left-0 w-full px-8 py-6 z-[1000] flex justify-between items-center transition-all duration-500 bg-transparent">
    <div class="logo-container">
      <a href="/"><img src="${palmLogo}" alt="Logo" class="h-12 w-auto brightness-200 contrast-200"></a>
    </div>
    <nav class="hidden md:block">
      <ul class="flex gap-10">
        <li><a href="#locations" class="nav-link">Locations</a></li>
        <li><a href="#menus" class="nav-link">Menus</a></li>
        <li><a href="#events" class="nav-link">Private Events</a></li>
        <li><a href="#story" class="nav-link">Our Story</a></li>
      </ul>
    </nav>
    <div class="flex gap-4">
      <a href="#reservations" class="btn btn-primary hidden md:inline-block">Book a Table</a>
    </div>
  </header>

  <section class="relative h-screen flex items-center justify-center text-center overflow-hidden">
    <div class="absolute inset-0 bg-hero-gradient z-10"></div>
    <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover z-0 grayscale-[0.3] brightness-50">
      <source src="https://assets.mixkit.co/videos/preview/mixkit-pouring-red-wine-into-a-glass-in-a-restaurant-4447-large.mp4" type="video/mp4">
    </video>
    
    <div class="relative z-20 max-w-4xl px-6 animate-fade-in">
      <p class="text-palm-gold tracking-[6px] uppercase font-bold text-xs mb-4">Established 1926</p>
      <h1 class="font-serif text-6xl md:text-8xl mb-8 leading-none text-white">The Palm <br>Las Vegas</h1>
      <p class="text-lg md:text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">Experience a legendary classic in the heart of the Las Vegas Strip. Fine steaks, massive lobsters, and our signature hospitality.</p>
      
      <div id="reservations" class="bg-palm-black/80 backdrop-blur-md p-8 rounded-xl border border-palm-gold/30 shadow-2xl flex flex-wrap gap-6 items-end justify-center max-w-3xl mx-auto">
        <div class="flex flex-col gap-2 flex-1 min-w-[150px]">
          <label class="text-[10px] uppercase font-bold text-palm-gold tracking-widest text-left">Location</label>
          <select disabled class="bg-[#222] border border-white/10 p-3 rounded-lg text-sm text-white focus:border-palm-gold outline-none">
            <option selected>Las Vegas - Forum Shops</option>
          </select>
        </div>
        <div class="flex flex-col gap-2 flex-1 min-w-[150px]">
          <label class="text-[10px] uppercase font-bold text-palm-gold tracking-widest text-left">Date</label>
          <input type="date" value="2026-03-20" class="bg-[#222] border border-white/10 p-3 rounded-lg text-sm text-white focus:border-palm-gold outline-none">
        </div>
        <div class="flex flex-col gap-2 flex-1 min-w-[150px]">
          <label class="text-[10px] uppercase font-bold text-palm-gold tracking-widest text-left">Party Size</label>
          <select class="bg-[#222] border border-white/10 p-3 rounded-lg text-sm text-white focus:border-palm-gold outline-none">
            <option>2 People</option>
            <option>3 People</option>
            <option>4 People</option>
            <option>5+ People</option>
          </select>
        </div>
        <button class="btn btn-primary h-[46px]">Find Table</button>
      </div>
    </div>
  </section>

  <section id="menus" class="py-32 px-8 bg-palm-black">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-20">
        <h2 class="font-serif text-5xl mb-4 text-white">Legendary Excellence</h2>
        <div class="w-16 h-1 bg-palm-gold mx-auto"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="card p-4 group">
          <img src="https://images.unsplash.com/photo-1546241072-48010ad2862c?auto=format&fit=crop&q=80&w=800" class="w-full h-64 object-cover rounded-lg mb-6 group-hover:scale-105 transition-transform">
          <h3 class="font-serif text-2xl text-palm-gold mb-2">Prime Steaks</h3>
          <p class="text-sm text-white/60">USDA Prime beef aged to perfection.</p>
        </div>
        <div class="card p-4 group">
          <img src="https://images.unsplash.com/photo-1559742811-82410b451b9b?auto=format&fit=crop&q=80&w=800" class="w-full h-64 object-cover rounded-lg mb-6 group-hover:scale-105 transition-transform">
          <h3 class="font-serif text-2xl text-palm-gold mb-2">Live Lobster</h3>
          <p class="text-sm text-white/60">Colossal Jumbos hand-selected daily.</p>
        </div>
        <div class="card p-4 group">
          <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800" class="w-full h-64 object-cover rounded-lg mb-6 group-hover:scale-105 transition-transform">
          <h3 class="font-serif text-2xl text-palm-gold mb-2">Lounge & Bar</h3>
          <p class="text-sm text-white/60">Signature cocktails & Bar Bites.</p>
        </div>
      </div>
    </div>
  </section>

  <footer class="bg-black py-20 px-8 border-t border-white/10">
    <div class="max-w-7xl mx-auto flex flex-col items-center gap-10">
      <img src="${palmLogo}" class="h-10 brightness-200">
      <div class="flex gap-8">
        <a href="#" class="nav-link">Locations</a>
        <a href="#" class="nav-link">Jobs</a>
        <a href="#" class="nav-link">Privacy</a>
      </div>
      <p class="text-xs text-white/30 tracking-widest uppercase">© 2026 The Palm Restaurant</p>
    </div>
  </footer>

  <div id="chat-trigger" class="chat-trigger">🎩</div>
  <div id="chat-window" class="chat-window">
    <div class="chat-header">
      <span class="font-bold tracking-widest text-xs uppercase">The Palm Concierge</span>
      <button id="chat-close">✕</button>
    </div>
    <div id="chat-messages" class="chat-messages text-xs">
      <div class="message bot">How may I assist you this evening at The Palm?</div>
    </div>
    <form id="chat-form" class="chat-input-area">
      <input type="text" id="chat-input" placeholder="Your inquiry..." class="text-xs">
      <button type="submit" class="text-xs">Send</button>
    </form>
  </div>
`

window.addEventListener('scroll', () => {
  const header = document.querySelector('#main-header')
  if (window.scrollY > 80) {
    header.classList.add('bg-black', 'py-4', 'border-b', 'border-white/10')
    header.classList.remove('bg-transparent', 'py-6')
  } else {
    header.classList.remove('bg-black', 'py-4', 'border-b', 'border-white/10')
    header.classList.add('bg-transparent', 'py-6')
  }
})

const chatTrigger = document.querySelector('#chat-trigger')
const chatWindow = document.querySelector('#chat-window')
const chatClose = document.querySelector('#chat-close')
const chatForm = document.querySelector('#chat-form')
const chatInput = document.querySelector('#chat-input')
const chatMessages = document.querySelector('#chat-messages')

chatTrigger.onclick = () => chatWindow.classList.toggle('active')
chatClose.onclick = () => chatWindow.classList.remove('active')

chatForm.onsubmit = async (e) => {
  e.preventDefault()
  const val = chatInput.value.trim()
  if (!val) return

  const userMsg = document.createElement('div')
  userMsg.className = 'message user'
  userMsg.textContent = val
  chatMessages.appendChild(userMsg)
  chatInput.value = ''

  try {
    const res = await fetch('https://fragrant-unit-9548.cogniq-bharath.workers.dev/', {
      method: 'POST',
      body: JSON.stringify({ prompt: val })
    })
    const data = await res.json()
    const botMsg = document.createElement('div')
    botMsg.className = 'message bot'
    botMsg.textContent = data.response
    chatMessages.appendChild(botMsg)
  } catch (e) {
    const errMsg = document.createElement('div')
    errMsg.className = 'message bot'
    errMsg.textContent = 'Apologies, I am unavailable.'
    chatMessages.appendChild(errMsg)
  }
}
