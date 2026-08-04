// Caminho dos arquivos do EmulatorJS (motor que roda o SNES).
  // Por padrão usa o CDN público oficial — por isso precisa de internet.
  // Para deixar 100% offline: baixe a pasta indicada no comentário abaixo
  // e troque esta linha para, por exemplo, 'emulatorjs-data/'.
  // Detalhes de quais arquivos baixar: ver mensagem do chat / README ao lado deste arquivo.
  const EMULATOR_DATA_PATH = 'https://cdn.emulatorjs.org/stable/data/';

  // ---- ícones (glifos genéricos, sem arte de personagens) ----
  const ICONS = {
    ninja: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.5 5.5L20 8l-4.5 3.5L17 18l-5-3.5L7 18l1.5-6.5L4 8l5.5-.5z"/></svg>',
    scroll:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 4h9a3 3 0 013 3v10a2 2 0 01-2 2H8"/><path d="M6 4a2 2 0 00-2 2v12a2 2 0 002 2"/><path d="M9 9h6M9 13h4"/></svg>',
    bolt:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/></svg>',
    rocket:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 2c3 2 5 6 5 10 0 3-1 5-1 5H8s-1-2-1-5c0-4 2-8 5-10z"/><circle cx="12" cy="10" r="1.6"/><path d="M8 15l-3 5M16 15l3 5"/></svg>',
    claw:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M5 4c3 4 3 9 1 16M12 3c2 5 1.5 10-1 17M19 4c-1 5-3 9-2 16"/></svg>',
    gem:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l6 5-6 15L6 7z"/></svg>',
    ball:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 3v18M3 12h18M6 6l12 12M18 6L6 18"/></svg>',
    soccer:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M12 7l3 2-1 4H10l-1-4z" fill="currentColor" stroke="none"/></svg>',
    toad:  '<svg viewBox="0 0 24 24" fill="currentColor"><ellipse cx="12" cy="14" rx="8" ry="6"/><circle cx="8" cy="8" r="2.4"/><circle cx="16" cy="8" r="2.4"/><circle cx="8" cy="8" r="1" fill="#222"/><circle cx="16" cy="8" r="1" fill="#222"/></svg>',
    star:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.6 6.8L12 16.9 5.8 20.4l1.6-6.8L2.2 9l6.9-.7z"/></svg>',
    banana:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 19c7 1.5 13-3 14-11-1 6-6 9-11 8.3C5.8 16 4 14.5 3 12c0 3 .5 6 2 7z"/></svg>',
    bomb:  '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="11" cy="14" r="7"/><path d="M14 7l2-3 2 1-1.5 2.7" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="17" cy="4.5" r="1.3"/></svg>',
    flag:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M6 3v18"/><path d="M6 4h12l-3 4 3 4H6z" fill="currentColor" stroke="none"/></svg>',
    football:'<svg viewBox="0 0 24 24" fill="currentColor"><ellipse cx="12" cy="12" rx="9" ry="5.5" transform="rotate(-20 12 12)"/></svg>',
    basketball:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 4 3 14 0 18M12 3c-3 4-3 14 0 18M4.5 6.5c4 3 11 3 15 0M4.5 17.5c4-3 11-3 15 0"/></svg>'
  };

  // ---- coleção (dados descritivos, sem imagens protegidas) ----
  const GAMES = [
    { file:'3_Ninjas_Kick_Back.smc',            title:'3 Ninjas Kick Back',            genre:'Ação',        icon:'ninja',  hue:'#c0554a' },
    { file:'7th_Saga.smc',                      title:'The 7th Saga',                  genre:'RPG',          icon:'scroll', hue:'#4a7fc0' },
    { file:'ActRaiser_2__U___T_Por_.smc',       title:'ActRaiser 2',                    genre:'Ação',         icon:'bolt',   hue:'#c0a24a' },
    { file:'Alien_3.smc',                       title:'Alien 3',                        genre:'Ação sci-fi',  icon:'rocket', hue:'#4ac09a' },
    { file:'Alien_v_s__Predator.smc',           title:'Alien vs Predator',              genre:'Luta sci-fi',  icon:'claw',   hue:'#7a4ac0' },
    { file:'arcana_br.smc',                     title:'Arcana',                         genre:'RPG tático',   icon:'gem',    hue:'#c04a94' },
    { file:'Arkanoid_-_Doh_It_Again.smc',       title:'Arkanoid: Doh It Again!',        genre:'Arcade',       icon:'ball',   hue:'#4aa8c0' },
    { file:'Battle_Soccer_-_Field_no_Hasha.smc',title:'Battle Soccer',                  genre:'Esporte',      icon:'soccer', hue:'#5ac04a' },
    { file:'battletoads_in_Battlemaniacs__br_.smc', title:'Battletoads in Battlemaniacs', genre:'Ação',      icon:'toad',   hue:'#c0794a' },
    { file:'Aladdin (U) [T+Por].smc',                                        title:'Aladdin',                                    genre:'Plataforma', icon:'star',       hue:'#c0954a' },
    { file:'Donkey Kong Country (BR) {E} v1.00.smc',                         title:'Donkey Kong Country',                        genre:'Plataforma', icon:'banana',     hue:'#7a9a4a' },
    { file:'FIFA International Soccer (U) [T+Por].smc',                      title:'FIFA International Soccer',                  genre:'Esporte',    icon:'soccer',     hue:'#4a9a5c' },
    { file:'Futebol Brasileiro 2011(by Alexsandro Jr).smc',                  title:'Futebol Brasileiro 2011',                    genre:'Esporte',    icon:'soccer',     hue:'#c0b84a' },
    { file:'International Super Star Soccer Deluxe - Futebol Brasileiro 2008 (BR) v1.00.smc', title:'ISS Deluxe: Futebol Brasileiro 2008', genre:'Esporte', icon:'soccer', hue:'#4aa06a' },
    { file:'International Super Star Soccer Deluxe - World Cup France 98 (BR) v1.00.smc',     title:'ISS Deluxe: World Cup France 98',     genre:'Esporte', icon:'soccer', hue:'#4a7a9a' },
    { file:"Madden NFL '98 (USA).smc",                                       title:"Madden NFL '98",                             genre:'Esporte',    icon:'football',   hue:'#6a4a2a' },
    { file:'Magic Johnson no Super Slam Dunk (Japan).smc',                   title:"Magic Johnson's Super Slam Dunk",            genre:'Esporte',    icon:'basketball', hue:'#c0704a' },
    { file:'Mega Man 7.smc',                                                 title:'Mega Man 7',                                 genre:'Plataforma', icon:'bolt',       hue:'#4a6ac0' },
    { file:'Ronaldinho Soccer  World Cup France 98 (Hack).smc',              title:'Ronaldinho Soccer: World Cup France 98',     genre:'Esporte',    icon:'soccer',     hue:'#4a9a8c' },
    { file:'Super Bomberman 2 (E) [!].smc',                                  title:'Super Bomberman 2',                          genre:'Arcade',     icon:'bomb',       hue:'#9a4a4a' },
    { file:'Super Mario Kart (RENOMEAR p/ .smc)',                            title:'Super Mario Kart',                           genre:'Corrida',    icon:'flag',       hue:'#c04a4a' },
    { file:'Super Mario World (U) [T+Por].smc',                              title:'Super Mario World (trad. PT-BR)',            genre:'Plataforma', icon:'star',       hue:'#4ac06a' },
    { file:'Super Mario World (USA).smc',                                    title:'Super Mario World',                          genre:'Plataforma', icon:'star',       hue:'#c0c04a' },
    { file:"Super_Mario_World_2_-_Yoshi's_Island_(E).smc",                   title:"Yoshi's Island",                             genre:'Plataforma', icon:'star',       hue:'#7ac04a' },
    { file:'Top Gear 2.smc',                                                 title:'Top Gear 2',                                 genre:'Corrida',    icon:'flag',       hue:'#4a4ac0' },
  ];

  const shelf = document.getElementById('shelf');
  const picker = document.getElementById('romPicker');
  const screen = document.getElementById('screen');
  const screenIdle = document.getElementById('screenIdle');
  const led = document.getElementById('led');
  const statusText = document.getElementById('statusText');
  const gameNameEl = document.getElementById('gameName');
  const ejectBtn = document.getElementById('ejectBtn');

  let pendingGame = null;
  let currentIframe = null;
  let pendingFile = null;
  let pendingTitle = '';
  let bootTimer = null;

  GAMES.forEach(game => {
    const btn = document.createElement('button');
    btn.className = 'cart';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Carregar ' + game.title);
    btn.innerHTML = `
      <div class="cart-body">
        <div class="cart-notch"></div>
        <div class="cart-label" style="background:linear-gradient(160deg, ${game.hue}, ${shade(game.hue)});">
          ${ICONS[game.icon]}
          <div class="cart-title pixel">${game.title}</div>
          <div class="cart-file">${game.file}</div>
        </div>
        <div class="cart-foot">
          <span class="cart-genre">${game.genre}</span>
          <span class="cart-play">▶ Jogar</span>
        </div>
      </div>`;
    btn.addEventListener('click', () => {
      pendingGame = game;
      picker.value = '';
      picker.click();
    });
    shelf.appendChild(btn);
  });

  const marqueeTrack = document.getElementById('marqueeTrack');
  GAMES.concat(GAMES).forEach(game => { // duplicado pra fechar o loop sem emenda
    const item = document.createElement('div');
    item.className = 'marquee-item';
    item.innerHTML = `
      <div class="marquee-card">
        <div class="marquee-notch"></div>
        <div class="marquee-label" style="background:linear-gradient(160deg, ${game.hue}, ${shade(game.hue)});">
          ${ICONS[game.icon]}
          <div class="marquee-title pixel">${game.title}</div>
        </div>
      </div>`;
    marqueeTrack.appendChild(item);
  });

  function shade(hex){
    // escurece um pouco a cor base para o degradê do rótulo
    const c = hex.replace('#','');
    const n = parseInt(c,16);
    const r = Math.max(0,(n>>16)-40), g = Math.max(0,((n>>8)&0xff)-40), b = Math.max(0,(n&0xff)-40);
    return '#' + [r,g,b].map(v=>v.toString(16).padStart(2,'0')).join('');
  }

  picker.addEventListener('change', () => {
    const file = picker.files && picker.files[0];
    if (!file || !pendingGame) return;
    loadGame(file, pendingGame);
  });

  // O iframe carrega este "esqueleto" primeiro, sem nenhum dado do jogo.
  // Só depois que ele avisa "shell-ready" é que mandamos o arquivo por
  // postMessage — a URL do blob é criada DENTRO do próprio iframe, então
  // nunca precisa atravessar de um documento para o outro (é aí que a
  // referência se perdia antes e a tela ficava preta).
  function buildShell(){
    return `<!doctype html><html><head><style>
        html,body{margin:0;padding:0;background:#0a0d09;height:100%;overflow:hidden;}
      </style></head><body>
      <div style="width:100%;height:100%;"><div id="game"></div></div>
      <script>
        window.addEventListener('message', function(ev){
          var data = ev.data;
          if (!data || data.type !== 'boot') return;
          window.EJS_player = '#game';
          window.EJS_core = 'snes';
          window.EJS_gameName = data.title;
          window.EJS_pathtodata = ${JSON.stringify(EMULATOR_DATA_PATH)};
          window.EJS_gameUrl = URL.createObjectURL(data.file);
          window.EJS_backgroundColor = '#0a0d09';
          window.EJS_startOnLoaded = true;
          window.EJS_ready = function(){ parent.postMessage({type:'status', state:'ready'}, '*'); };
          window.EJS_onGameStart = function(){ parent.postMessage({type:'status', state:'started'}, '*'); };
          var s = document.createElement('script');
          s.src = ${JSON.stringify(EMULATOR_DATA_PATH)} + 'loader.js';
          s.onerror = function(){ parent.postMessage({type:'status', state:'error'}, '*'); };
          document.body.appendChild(s);
        });
        parent.postMessage({type:'status', state:'shell-ready'}, '*');
      <\/script>
      </body></html>`;
  }

  window.addEventListener('message', (ev) => {
    if (!currentIframe || ev.source !== currentIframe.contentWindow) return;
    const data = ev.data || {};
    if (data.type !== 'status') return;
    if (data.state === 'shell-ready' && pendingFile){
      currentIframe.contentWindow.postMessage({ type:'boot', file: pendingFile, title: pendingTitle }, '*');
    } else if (data.state === 'started'){
      statusText.textContent = 'Rodando';
      led.classList.add('on');
      if (bootTimer) clearTimeout(bootTimer);
    } else if (data.state === 'error'){
      statusText.textContent = 'Falha ao carregar (verifique sua conexão)';
      if (bootTimer) clearTimeout(bootTimer);
    }
  });

  function loadGame(file, game){
    statusText.textContent = 'Carregando…';
    gameNameEl.textContent = game.title;
    led.classList.remove('on');
    screenIdle.style.display = 'none';

    if (currentIframe) currentIframe.remove();
    if (bootTimer) clearTimeout(bootTimer);

    pendingFile = file;
    pendingTitle = game.title;

    const iframe = document.createElement('iframe');
    iframe.allow = 'gamepad; fullscreen';
    iframe.title = game.title;
    screen.appendChild(iframe);
    iframe.srcdoc = buildShell();
    currentIframe = iframe;

    bootTimer = setTimeout(() => {
      if (statusText.textContent === 'Carregando…'){
        statusText.textContent = 'Demorando mais que o normal — confira a internet ou clique na tela';
      }
    }, 12000);

    ejectBtn.disabled = false;
  }

  ejectBtn.addEventListener('click', () => {
    if (currentIframe) currentIframe.remove();
    if (bootTimer) clearTimeout(bootTimer);
    currentIframe = null;
    pendingGame = null;
    pendingFile = null;
    screenIdle.style.display = 'flex';
    statusText.textContent = 'Nenhum jogo carregado';
    gameNameEl.textContent = '';
    led.classList.remove('on');
    ejectBtn.disabled = true;
  });
