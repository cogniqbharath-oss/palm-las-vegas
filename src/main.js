import './style.css'
import palmLogo from './assets/logo.png'

document.querySelector('#app').innerHTML = `
  <!-- HEADER -->
  <header id="main-header">
    <div class="logo-container">
      <a href="/"><img src="${palmLogo}" alt="The Palm Restaurant Logo"></a>
    </div>
    <nav>
      <ul>
        <li><a href="#locations">Locations</a></li>
        <li><a href="#menus">Menus</a></li>
        <li><a href="#events">Private Events</a></li>
        <li><a href="#club">837 Club</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </nav>
    <div class="cta-group">
      <a href="#reservations" class="btn btn-primary">Reservations</a>
    </div>
  </header>

  <!-- HERO SECTION -->
  <section class="hero" style="background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1581338834647-b0fb40704e21?auto=format&fit=crop&q=80&w=1920')">
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <p style="color: var(--accent-gold); letter-spacing: 4px; text-transform: uppercase; font-weight: 700; margin-bottom: 1rem;">The Forum Shops at Caesars Palace</p>
      <h1>The Palm <br>Las Vegas</h1>
      <p>A Las Vegas Strip landmark since 1993. Experience the premiere fine-dining destination frequented by resident entertainers and celebrities.</p>
      <div class="hero-btns">
        <a href="#reservations" class="btn btn-primary">Book Your Table</a>
        <a href="#location" class="btn btn-outline">Show on Map</a>
      </div>
    </div>
  </section>

  <!-- RESERVATIONS WIDGET -->
  <section id="reservations" style="padding-bottom: 50px;">
    <div class="res-widget">
      <div class="input-box">
        <label>Location</label>
        <select disabled>
          <option selected>Las Vegas - Forum Shops</option>
        </select>
      </div>
      <div class="input-box">
        <label>Date</label>
        <input type="date" value="${new Date().toISOString().split('T')[0]}">
      </div>
      <div class="input-box">
        <label>Guests</label>
        <select>
          <option>2 People</option>
          <option>3 People</option>
          <option>4 People</option>
          <option>5+ People</option>
        </select>
      </div>
      <button class="btn btn-primary" id="find-table">Find a Table</button>
    </div>
  </section>

  <!-- LOCATION & HOURS -->
  <section id="location" class="section-padding" style="background: var(--bg-offset); border-top: 1px solid var(--border);">
    <div class="grid">
      <div style="text-align: left;">
        <h2 style="font-family: var(--font-serif); font-size: 3rem; margin-bottom: 2rem;">Visit Us</h2>
        <div style="margin-bottom: 2rem;">
          <h4 style="color: var(--accent-gold); margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 2px;">Address</h4>
          <p style="font-size: 1.2rem;">3500 Las Vegas Blvd. South<br>Las Vegas, NV 89109</p>
          <a href="https://maps.google.com/?cid=17152983553860669509" target="_blank" style="color: var(--accent); text-decoration: none; font-weight: 600; margin-top: 1rem; display: inline-block;">Get Directions →</a>
        </div>
        <div>
          <h4 style="color: var(--accent-gold); margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 2px;">Contact</h4>
          <p style="font-size: 1.2rem;">(702) 732-7256</p>
        </div>
      </div>
      <div style="background: #111; padding: 3rem; border-radius: 12px; border: 1px solid var(--border);">
        <h4 style="color: var(--accent-gold); margin-bottom: 1.5rem; text-transform: uppercase; font-size: 0.8rem; letter-spacing: 2px; text-align: center;">Hours of Operation</h4>
        <div style="display: flex; justify-content: space-between; margin-bottom: 1rem; border-bottom: 1px solid #222; padding-bottom: 0.5rem;">
          <span>SUN - SAT</span>
          <span>11:30 AM - 10:00 PM</span>
        </div>
        <div style="display: flex; justify-content: space-between; color: var(--accent-gold); font-size: 0.9rem;">
          <span>Prime Time (Happy Hour)</span>
          <span>SUN - FRI: 3:00 - 5:30 PM</span>
        </div>
        <p style="margin-top: 2rem; font-size: 0.8rem; color: var(--text-muted); font-style: italic;">Located steps from the Colosseum at Caesars Palace.</p>
      </div>
    </div>
  </section>

  <!-- SIGNATURE DRINKS -->
  <section class="section-padding" id="cocktails" style="background: var(--bg); border-top: 1px solid var(--border);">
    <div style="text-align:center; margin-bottom: 4rem;">
      <h2 style="font-family: var(--font-serif); font-size: 3rem;">Palm Signatures</h2>
      <p style="color: var(--accent-gold); letter-spacing: 2px; text-transform: uppercase;">Crafted for the Las Vegas Night</p>
    </div>
    
    <div class="grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));">
      <div style="text-align: center; padding: 2rem; border-right: 1px solid var(--border);">
        <h4 style="color: var(--accent-gold); margin-bottom: 0.5rem;">The Palm Mule</h4>
        <p style="font-size: 0.9rem; color: var(--text-muted);">Wheatley, St-Germain Elderflower, Lime, Mint, Fever-Tree Ginger Beer</p>
        <span style="font-size: 1.2rem; color: var(--text); margin-top: 1rem; display: block;">$15</span>
      </div>
      <div style="text-align: center; padding: 2rem; border-right: 1px solid var(--border);">
        <h4 style="color: var(--accent-gold); margin-bottom: 0.5rem;">The Palm Margarita</h4>
        <p style="font-size: 0.9rem; color: var(--text-muted);">Herradura Reposado, Cointreau, Lime, Agave, Hawaiian Black Sea Salt</p>
        <span style="font-size: 1.2rem; color: var(--text); margin-top: 1rem; display: block;">$17</span>
      </div>
      <div style="text-align: center; padding: 2rem; border-right: 1px solid var(--border);">
        <h4 style="color: var(--accent-gold); margin-bottom: 0.5rem;">Palm Star Martini</h4>
        <p style="font-size: 0.9rem; color: var(--text-muted);">Absolut Vanilia, Passion Fruit, Lime, La Marca Prosecco</p>
        <span style="font-size: 1.2rem; color: var(--text); margin-top: 1rem; display: block;">$17</span>
      </div>
      <div style="text-align: center; padding: 2rem;">
        <h4 style="color: var(--accent-gold); margin-bottom: 0.5rem;">The Palm Old Fashioned</h4>
        <p style="font-size: 0.9rem; color: var(--text-muted);">Signature Old Fashioned featuring Garrison Brothers Small Batch</p>
        <span style="font-size: 1.2rem; color: var(--text); margin-top: 1rem; display: block;">$25</span>
      </div>
    </div>
  </section>

  <!-- FEATURES SECTION -->
  <section class="section-padding" id="features">
    <div style="text-align:center; margin-bottom: 4rem;">
      <h2 style="font-family: var(--font-serif); font-size: 3.5rem;">The LV Experience</h2>
      <p style="color: var(--accent-gold); letter-spacing: 2px; text-transform: uppercase; font-weight: 600;">Prime Dining on the Strip</p>
    </div>
    
    <div class="grid">
      <div class="card">
        <div class="card-img" style="background-image: url('https://images.unsplash.com/photo-1546241072-48010ad2862c?auto=format&fit=crop&q=80&w=800')"></div>
        <div class="card-body">
          <h3>Prime Steak & Seafood</h3>
          <p>Heavy corn-fed USDA Choice prime beef and fresh Nova Scotia lobsters hand-selected daily.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-img" style="background-image: url('https://images.unsplash.com/photo-1559742811-82410b451b9b?auto=format&fit=crop&q=80&w=800')"></div>
        <div class="card-body">
          <h3>Prime Time Menu</h3>
          <p>Specially priced small bites and cocktails at the bar. Sunday - Friday, 3:00 PM - 5:30 PM.</p>
        </div>
      </div>
      <div class="card">
        <div class="card-img" style="background-image: url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800')"></div>
        <div class="card-body">
          <h3>Private Dining</h3>
          <p>Hosting groups of all sizes. Located steps from the Colosseum at Caesars Palace.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CARICATURES PREVIEW -->
  <section class="section-padding caricatures-section">
    <h2 style="font-family: var(--font-serif); font-size: 2.5rem; margin-bottom: 1rem;">Vegas Hall of Fame</h2>
    <p style="margin-bottom: 3rem; max-width: 600px; margin-left: auto; margin-right: auto;">Our walls feature the entertainers and icons that define Las Vegas. Discover your favorite legend among thousands of caricatures.</p>
    
    <div class="caricature-flex">
      <div class="caricature-item">Frank Sinatra</div>
      <div class="caricature-item">Celine Dion</div>
      <div class="caricature-item">Elvis Presley</div>
      <div class="caricature-item">Penn & Teller</div>
      <div class="caricature-item">Jerry Lewis</div>
      <div class="caricature-item">Dean Martin</div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <div class="footer-col">
      <img src="${palmLogo}" alt="Logo" style="height: 40px; margin-bottom: 2rem;">
      <p>3500 Las Vegas Blvd. South<br>Las Vegas, NV 89109</p>
      <p style="margin-top: 1rem;">(702) 732-7256</p>
    </div>
    <div class="footer-col">
      <h4>Navigation</h4>
      <ul>
        <li><a href="#">Locations</a></li>
        <li><a href="#">Menus</a></li>
        <li><a href="#">History</a></li>
        <li><a href="#">Careers</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Connect</h4>
      <ul>
        <li><a href="#">Instagram</a></li>
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Email Signup</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Our Brands</h4>
      <p>Landry's Inc.</p>
      <p style="font-size: 0.8rem; margin-top: 1rem;">© 2026 The Palm Restaurant. All Rights Reserved.</p>
    </div>
  </footer>

  <!-- CHATBOT -->
  <div class="chat-trigger" id="chat-trigger">
    💬
  </div>

  <div class="chat-window" id="chat-window">
    <div class="chat-header">
      <div class="chat-header-info">
        <h3>The Palm Assistant</h3>
      </div>
      <div class="chat-close" id="chat-close">✕</div>
    </div>
    <div class="chat-messages" id="chat-messages">
      <div class="message bot">Welcome to The Palm Restaurant. How may I assist you with your reservation or any questions today?</div>
    </div>
    <div class="typing-indicator" id="typing-indicator">The Palm is typing...</div>
    <form class="chat-input-area" id="chat-form">
      <input type="text" id="chat-input" placeholder="Type your message..." autocomplete="off">
      <button type="submit">✈</button>
    </form>
  </div>
`

// Simple scroll effect for header
window.addEventListener('scroll', () => {
  const header = document.querySelector('#main-header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Chatbot Logic
const chatTrigger = document.querySelector('#chat-trigger');
const chatWindow = document.querySelector('#chat-window');
const chatClose = document.querySelector('#chat-close');
const chatForm = document.querySelector('#chat-form');
const chatInput = document.querySelector('#chat-input');
const chatMessages = document.querySelector('#chat-messages');
const typingIndicator = document.querySelector('#typing-indicator');

const WORKER_URL = 'https://fragrant-unit-9548.cogniq-bharath.workers.dev/';

chatTrigger.addEventListener('click', () => {
  chatWindow.classList.toggle('active');
  if (chatWindow.classList.contains('active')) {
    chatInput.focus();
  }
});

chatClose.addEventListener('click', () => {
  chatWindow.classList.remove('active');
});

function addMessage(text, isUser = false) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `message ${isUser ? 'user' : 'bot'}`;
  msgDiv.textContent = text;
  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

chatForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const prompt = chatInput.value.trim();
  if (!prompt) return;

  addMessage(prompt, true);
  chatInput.value = '';

  typingIndicator.style.display = 'block';
  chatMessages.scrollTop = chatMessages.scrollHeight;

  try {
    const response = await fetch(WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: `You are a helpful and polite virtual assistant for The Palm Restaurant, a classic American steakhouse famous for its prime steaks, Nova Scotia lobsters, and cartoons/caricatures on the walls. Answer this guest's inquiry: ${prompt}` })
    });

    const data = await response.json();
    typingIndicator.style.display = 'none';

    if (data.success && data.response) {
      addMessage(data.response);
    } else {
      addMessage("I'm sorry, I'm having trouble connecting to my serves right now. Please try again or call the restaurant directly.");
      console.error('Worker error:', data.error);
    }
  } catch (error) {
    typingIndicator.style.display = 'none';
    addMessage("Connection error. Please check your internet or try again later.");
    console.error('Fetch error:', error);
  }
});
