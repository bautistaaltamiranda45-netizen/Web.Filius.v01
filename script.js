(() => {
  'use strict';

  const WHATSAPP_NUMBER = '542615503895';
  const PRICES = { retail: 6000, wholesale: 18000 };

  const translations = {
    es: {
      language:{label:'Idioma'},
      nav:{home:'FILIUS',products:'Aceites',contact:'Contacto',order:'Pedido'},
      hero:{eyebrow:'Aceite de oliva · Mendoza, Argentina',title:'Aceite de oliva con origen argentino mendocino.',body:'FILIUS es un microemprendimiento de producción y venta de aceite de oliva. Dos variedades: Arauco y variedades europeas.',primary:'Conocé nuestros aceites',secondary:'Pedí información',meta:'Producción a pequeña escala · venta directa',productTag:'ARAUCO',productCaption:'Aceite de oliva virgen extra'},
      products:{eyebrow:'01 / ACEITES',title:'Dos variedades. Una identidad mendocina.',intro:'Conocé las dos expresiones de FILIUS y agregá la que querés pedir a tu selección.'},
      order:{eyebrow:'02 / PEDIDO',title:'Armá tu pedido y recibí la cotización por WhatsApp.',body:'Elegí modalidad, cantidad y variedad. El total se actualiza automáticamente antes de enviarlo al WhatsApp comercial.',distributor:'Conviértete en mi distribuidor',retail:'Por menor',wholesale:'Por mayor',selected:'Tu selección',empty:'Todavía no agregaste un aceite. Elegilo en la sección Aceites.',units:'Unidades',total:'Total',send:'Enviar pedido por WhatsApp',clear:'Vaciar pedido'},
      contact:{eyebrow:'03 / CONTACTO',title:'Pedí información',body:'Escribinos para conocer los aceites FILIUS, consultar disponibilidad o coordinar un pedido.',whatsappLabel:'WhatsApp comercial',whatsapp:'Abrir WhatsApp ↗',name:'Nombre',phone:'Teléfono',email:'Correo',message:'Mensaje',submit:'Enviar consulta por WhatsApp',location:'UBICACIÓN',mapCaption:'Centro de referencia: Maipú, Mendoza, Argentina.'},
      footer:{description:'Aceite de oliva con origen argentino mendocino.',creator:'Creado por',rights:'Producción y venta de aceite de oliva'},
      product:{quantity:'Cantidad',add:'Agregar al pedido'},
      distributor:{eyebrow:'FILIUS · DISTRIBUCIÓN',title:'Conviértete en mi distribuidor.',body:'Contanos quién sos y dónde querés comercializar FILIUS. La solicitud se envía por WhatsApp.',name:'Nombre',company:'Empresa / negocio',location:'Localidad',phone:'Teléfono',message:'Mensaje',send:'Enviar solicitud por WhatsApp'},
      unit:{retail:'/ botella',wholesale:'/ pack / unidad mayorista'},
      status:{added:'Agregado al pedido',cleared:'Pedido vacío',emptyOrder:'Agregá al menos un aceite para enviar el pedido.',whatsappOpened:'Abriendo WhatsApp con tu pedido.',contactOpened:'Abriendo WhatsApp con tu consulta.',distOpened:'Abriendo WhatsApp con tu solicitud de distribución.'}
    },
    en: {
      language:{label:'Language'},
      nav:{home:'FILIUS',products:'Oils',contact:'Contact',order:'Order'},
      hero:{eyebrow:'Olive oil · Mendoza, Argentina',title:'Olive oil with Argentine, Mendocino origin.',body:'FILIUS is a small venture producing and selling olive oil. Two varieties: Arauco and European varieties.',primary:'Explore our oils',secondary:'Request information',meta:'Small-scale production · direct sales',productTag:'ARAUCO',productCaption:'Extra virgin olive oil'},
      products:{eyebrow:'01 / OILS',title:'Two varieties. One Mendocino identity.',intro:'Explore the two FILIUS expressions and add the one you want to order to your selection.'},
      order:{eyebrow:'02 / ORDER',title:'Build your order and receive the quote on WhatsApp.',body:'Choose your order type, quantity and variety. The total updates automatically before sending it to our commercial WhatsApp.',distributor:'Become a Distributor',retail:'Retail',wholesale:'Wholesale',selected:'Your selection',empty:'No oil added yet. Choose one in the Oils section.',units:'Units',total:'Total',send:'Send order via WhatsApp',clear:'Clear order'},
      contact:{eyebrow:'03 / CONTACT',title:'Request information',body:'Write to us to learn about FILIUS oils, check availability or coordinate an order.',whatsappLabel:'Commercial WhatsApp',whatsapp:'Open WhatsApp ↗',name:'Name',phone:'Phone',email:'Email',message:'Message',submit:'Send enquiry via WhatsApp',location:'LOCATION',mapCaption:'Reference location: Maipú, Mendoza, Argentina.'},
      footer:{description:'Olive oil with Argentine, Mendocino origin.',creator:'Created by',rights:'Olive oil production and direct sales'},
      product:{quantity:'Quantity',add:'Add to order'},
      distributor:{eyebrow:'FILIUS · DISTRIBUTION',title:'Become a Distributor.',body:'Tell us who you are and where you want to sell FILIUS. The request will be sent via WhatsApp.',name:'Name',company:'Company / business',location:'City / province',phone:'Phone',message:'Message',send:'Send distribution request via WhatsApp'},
      unit:{retail:'/ bottle',wholesale:'/ bulk pack / unit'},
      status:{added:'Added to order',cleared:'Order cleared',emptyOrder:'Add at least one oil before sending the order.',whatsappOpened:'Opening WhatsApp with your order.',contactOpened:'Opening WhatsApp with your enquiry.',distOpened:'Opening WhatsApp with your distribution request.'}
    },
    pt: {
      language:{label:'Idioma'},
      nav:{home:'FILIUS',products:'Azeites',contact:'Contato',order:'Pedido'},
      hero:{eyebrow:'Azeite de oliva · Mendoza, Argentina',title:'Azeite de oliva com origem argentina mendocina.',body:'A FILIUS é um microempreendimento de produção e venda de azeite de oliva. Duas variedades: Arauco e variedades europeias.',primary:'Conheça nossos azeites',secondary:'Peça informações',meta:'Produção em pequena escala · venda direta',productTag:'ARAUCO',productCaption:'Azeite de oliva extravirgem'},
      products:{eyebrow:'01 / AZEITES',title:'Duas variedades. Uma identidade mendocina.',intro:'Conheça as duas expressões da FILIUS e adicione ao seu pedido a que deseja comprar.'},
      order:{eyebrow:'02 / PEDIDO',title:'Monte seu pedido e receba a cotação pelo WhatsApp.',body:'Escolha a modalidade, quantidade e variedade. O total é atualizado automaticamente antes do envio ao nosso WhatsApp comercial.',distributor:'Torne-se um distribuidor',retail:'Varejo',wholesale:'Atacado',selected:'Sua seleção',empty:'Nenhum azeite adicionado. Escolha um na seção Azeites.',units:'Unidades',total:'Total',send:'Enviar pedido pelo WhatsApp',clear:'Esvaziar pedido'},
      contact:{eyebrow:'03 / CONTATO',title:'Peça informações',body:'Escreva para conhecer os azeites FILIUS, consultar disponibilidade ou coordenar um pedido.',whatsappLabel:'WhatsApp comercial',whatsapp:'Abrir WhatsApp ↗',name:'Nome',phone:'Telefone',email:'E-mail',message:'Mensagem',submit:'Enviar consulta pelo WhatsApp',location:'LOCALIZAÇÃO',mapCaption:'Localização de referência: Maipú, Mendoza, Argentina.'},
      footer:{description:'Azeite de oliva com origem argentina mendocina.',creator:'Criado por',rights:'Produção e venda de azeite de oliva'},
      product:{quantity:'Quantidade',add:'Adicionar ao pedido'},
      distributor:{eyebrow:'FILIUS · DISTRIBUIÇÃO',title:'Torne-se um distribuidor.',body:'Conte quem você é e onde deseja comercializar a FILIUS. A solicitação será enviada pelo WhatsApp.',name:'Nome',company:'Empresa / negócio',location:'Cidade / província',phone:'Telefone',message:'Mensagem',send:'Enviar solicitação pelo WhatsApp'},
      unit:{retail:'/ garrafa',wholesale:'/ pack / unidade de atacado'},
      status:{added:'Adicionado ao pedido',cleared:'Pedido vazio',emptyOrder:'Adicione pelo menos um azeite antes de enviar o pedido.',whatsappOpened:'Abrindo o WhatsApp com seu pedido.',contactOpened:'Abrindo o WhatsApp com sua consulta.',distOpened:'Abrindo o WhatsApp com sua solicitação de distribuição.'}
    }
  };

  const products = [
    {
      id:'arauco',
      index:'01',
      name:{es:'FILIUS Arauco',en:'FILIUS Arauco',pt:'FILIUS Arauco'},
      variety:{es:'Arauco',en:'Arauco',pt:'Arauco'},
      badge:{es:'Variedad Arauco',en:'Arauco variety',pt:'Variedade Arauco'},
      description:{es:'Aceite de oliva virgen extra elaborado con Arauco, la expresión de identidad argentina de FILIUS.',en:'Extra virgin olive oil made from Arauco, FILIUS’s Argentine identity expression.',pt:'Azeite de oliva extravirgem elaborado com Arauco, a expressão de identidade argentina da FILIUS.'},
      image:'assets/filius-arauco.jpeg'
    },
    {
      id:'europeas',
      index:'02',
      name:{es:'FILIUS Selección Europea',en:'FILIUS European Selection',pt:'FILIUS Seleção Europeia'},
      variety:{es:'Variedades europeas',en:'European varieties',pt:'Variedades europeias'},
      badge:{es:'Variedades europeas',en:'European varieties',pt:'Variedades europeias'},
      description:{es:'Aceite de oliva virgen extra elaborado a partir de variedades europeas seleccionadas, la segunda expresión de FILIUS.',en:'Extra virgin olive oil made from selected European varieties, the second FILIUS expression.',pt:'Azeite de oliva extravirgem elaborado a partir de variedades europeias selecionadas, a segunda expressão da FILIUS.'},
      image:'assets/filius-europeas.jpeg'
    }
  ];

  let currentLang = localStorage.getItem('filiusLang') || 'es';
  if (!translations[currentLang]) currentLang = 'es';
  let orderType = 'retail';
  let cart = loadCart();
  let selectedProduct = null;

  const qs = (s) => document.querySelector(s);
  const qsa = (s) => [...document.querySelectorAll(s)];

  function t(path) {
    return path.split('.').reduce((obj,key) => obj?.[key], translations[currentLang]) ?? path;
  }

  function loadCart(){
    try {
      const saved = JSON.parse(localStorage.getItem('filiusCart') || '[]');
      return Array.isArray(saved) ? saved.filter(i => i && ['arauco','europeas'].includes(i.id) && Number(i.qty) > 0).map(i => ({id:i.id, qty:Math.min(50, Math.max(1, Number(i.qty)))})) : [];
    } catch { return []; }
  }

  function saveCart(){
    localStorage.setItem('filiusCart', JSON.stringify(cart));
    renderOrder();
    renderBadges();
  }

  function money(n){ return new Intl.NumberFormat('es-AR',{style:'currency',currency:'ARS',maximumFractionDigits:0}).format(n); }

  function renderBadges(){
    const total = cart.reduce((sum,item) => sum + item.qty, 0);
    qs('#quoteBadge').textContent = total;
    qs('#mobileQuoteCount').textContent = total;
  }

  function renderProducts(){
    const grid = qs('#productsGrid');
    grid.innerHTML = products.map(p => `
      <article class="product-card">
        <div class="product-visual">
          <img src="${p.image}" alt="${p.name[currentLang]}" loading="lazy">
          <span class="product-badge">${p.badge[currentLang]}</span>
          <span class="product-index">${p.index}</span>
        </div>
        <div class="product-info">
          <span class="product-kicker">FILIUS · ACEITE DE OLIVA</span>
          <h3>${p.name[currentLang]}</h3>
          <p class="product-description">${p.description[currentLang]}</p>
          <div class="product-meta">
            <span class="product-chip">${p.variety[currentLang]}</span>
            <span class="product-chip">Mendoza · Argentina</span>
          </div>
          <div class="product-price-row">
            <div>
              <span class="product-price-label" id="priceLabel-${p.id}">${orderType === 'retail' ? t('order.retail') : t('order.wholesale')}</span>
              <strong class="product-price">${money(PRICES[orderType])}</strong>
            </div>
            <span class="product-unit">${orderType === 'retail' ? t('unit.retail') : t('unit.wholesale')}</span>
          </div>
          <div class="product-actions">
            <button class="button button-dark" type="button" data-open-product="${p.id}">${t('product.add')} <span>↗</span></button>
            <button class="button button-outline" type="button" data-quick-add="${p.id}">${currentLang === 'es' ? '+ 1 unidad' : currentLang === 'en' ? '+ 1 unit' : '+ 1 unidade'}</button>
          </div>
        </div>
      </article>
    `).join('');
  }

  function renderOrder(){
    const list = qs('#quoteList');
    const empty = qs('#quoteEmpty');
    const units = cart.reduce((sum,item) => sum + item.qty, 0);
    const total = units * PRICES[orderType];
    qs('#orderTypeLabel').textContent = orderType === 'retail' ? t('order.retail') : t('order.wholesale');
    qs('#orderUnitLabel').textContent = orderType === 'retail' ? t('unit.retail') : t('unit.wholesale');
    qs('#retailPriceLabel').textContent = money(PRICES.retail);
    qs('#wholesalePriceLabel').textContent = money(PRICES.wholesale);
    qs('#quoteUnits').textContent = units;
    qs('#quoteGrandTotal').textContent = money(total);

    list.innerHTML = cart.map(item => {
      const p = products.find(x => x.id === item.id);
      if (!p) return '';
      const lineTotal = item.qty * PRICES[orderType];
      return `
        <div class="quote-row" data-row="${p.id}">
          <div>
            <strong>${p.name[currentLang]}</strong>
            <small>${p.variety[currentLang]}</small>
          </div>
          <div class="qty-controls">
            <button type="button" data-minus="${p.id}" aria-label="-">−</button>
            <input type="number" min="1" max="50" value="${item.qty}" data-qty="${p.id}" aria-label="${t('product.quantity')}">
            <button type="button" data-plus="${p.id}" aria-label="+">+</button>
          </div>
          <span class="quote-line-total">${money(lineTotal)}</span>
        </div>
      `;
    }).join('');

    empty.hidden = cart.length > 0;
    qs('#sendQuoteWhatsapp').disabled = cart.length === 0;
  }

  function applyLanguage(){
    document.documentElement.lang = currentLang;
    qsa('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
    qsa('.lang-btn').forEach(btn => btn.setAttribute('aria-pressed', String(btn.dataset.lang === currentLang)));
    qs('#contactName').placeholder = currentLang === 'es' ? 'Tu nombre' : currentLang === 'en' ? 'Your name' : 'Seu nome';
    qs('#contactPhone').placeholder = '+54 9 ...';
    qs('#contactEmail').placeholder = currentLang === 'es' ? 'tu@email.com' : currentLang === 'en' ? 'you@email.com' : 'seu@email.com';
    qs('#contactMessage').placeholder = currentLang === 'es' ? 'Quiero información sobre FILIUS...' : currentLang === 'en' ? 'I would like information about FILIUS...' : 'Quero informações sobre a FILIUS...';
    renderProducts();
    renderOrder();
    if (selectedProduct) openProduct(selectedProduct, false);
  }

  function setLanguage(lang){
    if (!translations[lang] || lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem('filiusLang', lang);
    applyLanguage();
  }

  function addToCart(id, qty=1){
    const p = products.find(x => x.id === id); if (!p) return;
    const amount = Math.min(50, Math.max(1, Number(qty) || 1));
    const found = cart.find(item => item.id === id);
    if(found) found.qty = Math.min(50, found.qty + amount);
    else cart.push({id, qty:amount});
    saveCart();
    showToast(t('status.added'));
  }

  function changeQty(id, delta){
    const item = cart.find(x => x.id === id); if (!item) return;
    item.qty = Math.min(50, Math.max(1, item.qty + delta));
    saveCart();
  }

  function setQty(id, value){
    const item = cart.find(x => x.id === id); if (!item) return;
    item.qty = Math.min(50, Math.max(1, Number(value) || 1));
    saveCart();
  }

  function openModal(id){
    const el = qs(id); if (!el) return;
    el.classList.add('is-open');
    el.setAttribute('aria-hidden','false');
    document.body.classList.add('modal-open');
  }

  function closeAllModals(){
    qsa('.modal.is-open').forEach(el => {el.classList.remove('is-open');el.setAttribute('aria-hidden','true')});
    document.body.classList.remove('modal-open');
  }

  function openProduct(id, focus=true){
    const p = products.find(x => x.id === id); if (!p) return;
    selectedProduct = id;
    qs('#modalProductImage').src = p.image;
    qs('#modalProductImage').alt = p.name[currentLang];
    qs('#modalProductVariety').textContent = p.variety[currentLang];
    qs('#productModalTitle').textContent = p.name[currentLang];
    qs('#modalProductDesc').textContent = p.description[currentLang];
    qs('#modalProductPrice').textContent = money(PRICES[orderType]);
    if (focus) openModal('#productModal');
  }

  function changeOrderType(type){
    if(!['retail','wholesale'].includes(type)) return;
    orderType = type;
    qsa('[data-order-type]').forEach(btn => {
      const active = btn.dataset.orderType === type;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    renderProducts();
    renderOrder();
    if(selectedProduct) openProduct(selectedProduct, false);
  }

  function buildWhatsappOrder(){
    const typeLabel = orderType === 'retail' ? t('order.retail') : t('order.wholesale');
    const lines = [
      currentLang === 'es' ? 'Hola FILIUS, quiero realizar un pedido.' : currentLang === 'en' ? 'Hello FILIUS, I would like to place an order.' : 'Olá FILIUS, gostaria de fazer um pedido.',
      `${typeLabel}: ${orderType === 'retail' ? money(PRICES.retail) : money(PRICES.wholesale)} ${orderType === 'retail' ? t('unit.retail') : t('unit.wholesale')}`,
      '',
      currentLang === 'es' ? 'Detalle:' : currentLang === 'en' ? 'Details:' : 'Detalhes:'
    ];
    cart.forEach(item => {
      const p = products.find(x => x.id === item.id);
      if(p) lines.push(`- ${p.name[currentLang]} — ${item.qty} × ${money(PRICES[orderType])} = ${money(item.qty * PRICES[orderType])}`);
    });
    const totalUnits = cart.reduce((s,i)=>s+i.qty,0);
    lines.push('', `${t('order.total')}: ${money(totalUnits * PRICES[orderType])}`);
    lines.push('', currentLang === 'es' ? 'Gracias.' : currentLang === 'en' ? 'Thank you.' : 'Obrigado.');
    return lines.join('\n');
  }

  function sendToWhatsApp(message){
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener');
  }

  function handleContactSubmit(e){
    e.preventDefault();
    const name = qs('#contactName').value.trim();
    const phone = qs('#contactPhone').value.trim();
    const email = qs('#contactEmail').value.trim();
    const message = qs('#contactMessage').value.trim();
    const greeting = currentLang === 'es' ? 'Hola FILIUS, quiero pedir información.' : currentLang === 'en' ? 'Hello FILIUS, I would like to request information.' : 'Olá FILIUS, gostaria de pedir informações.';
    const lines = [greeting,'',`${t('contact.name')}: ${name}`,`${t('contact.phone')}: ${phone}`];
    if(email) lines.push(`${t('contact.email')}: ${email}`);
    lines.push('',`${t('contact.message')}: ${message}`);
    sendToWhatsApp(lines.join('\n'));
    qs('#contactStatus').textContent = t('status.contactOpened');
  }

  function sendDistributor(){
    const name = qs('#distName').value.trim();
    const company = qs('#distCompany').value.trim();
    const location = qs('#distLocation').value.trim();
    const phone = qs('#distPhone').value.trim();
    const message = qs('#distMessage').value.trim();
    if(!name || !phone){ qs('#distStatus').textContent = currentLang === 'es' ? 'Completá nombre y teléfono.' : currentLang === 'en' ? 'Please enter your name and phone.' : 'Informe seu nome e telefone.'; return; }
    const greeting = currentLang === 'es' ? 'Hola FILIUS, quiero convertirme en distribuidor.' : currentLang === 'en' ? 'Hello FILIUS, I would like to become a distributor.' : 'Olá FILIUS, gostaria de me tornar distribuidor.';
    const lines = [greeting,'',`${t('distributor.name')}: ${name}`];
    if(company) lines.push(`${t('distributor.company')}: ${company}`);
    if(location) lines.push(`${t('distributor.location')}: ${location}`);
    lines.push(`${t('distributor.phone')}: ${phone}`);
    if(message) lines.push('',`${t('distributor.message')}: ${message}`);
    sendToWhatsApp(lines.join('\n'));
    qs('#distStatus').textContent = t('status.distOpened');
  }

  function showToast(text){
    const toast = qs('#toast');
    toast.textContent = text;
    toast.classList.add('show');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(()=>toast.classList.remove('show'),1900);
  }

  function initInteractions(){
    qsa('.lang-btn').forEach(btn => btn.addEventListener('click', () => setLanguage(btn.dataset.lang)));
    qsa('[data-order-type]').forEach(btn => btn.addEventListener('click', () => changeOrderType(btn.dataset.orderType)));

    qs('#openQuote').addEventListener('click', () => qs('#quote').scrollIntoView({behavior:'smooth',block:'start'}));
    qs('#mobileQuote').addEventListener('click', () => { qs('#mobileNav').classList.remove('is-open'); qs('#quote').scrollIntoView({behavior:'smooth',block:'start'}); });

    qs('#menuButton').addEventListener('click', () => {
      const open = qs('#mobileNav').classList.toggle('is-open');
      qs('#menuButton').setAttribute('aria-expanded', String(open));
    });
    qsa('#mobileNav a').forEach(link => link.addEventListener('click', () => {qs('#mobileNav').classList.remove('is-open');qs('#menuButton').setAttribute('aria-expanded','false')}));

    qs('#productsGrid').addEventListener('click', e => {
      const open = e.target.closest('[data-open-product]');
      const quick = e.target.closest('[data-quick-add]');
      if(open) openProduct(open.dataset.openProduct);
      if(quick) addToCart(quick.dataset.quickAdd,1);
    });

    qs('#quoteList').addEventListener('click', e => {
      const minus = e.target.closest('[data-minus]');
      const plus = e.target.closest('[data-plus]');
      const qty = e.target.closest('[data-qty]');
      if(minus) changeQty(minus.dataset.minus,-1);
      if(plus) changeQty(plus.dataset.plus,1);
      if(qty) setQty(qty.dataset.qty,qty.value);
    });
    qs('#quoteList').addEventListener('change', e => {
      const qty = e.target.closest('[data-qty]');
      if(qty) setQty(qty.dataset.qty,qty.value);
    });

    qsa('[data-close-modal]').forEach(el => el.addEventListener('click', closeAllModals));
    document.addEventListener('keydown', e => {if(e.key === 'Escape') closeAllModals();});

    qs('#addProductQuote').addEventListener('click', () => {
      if(!selectedProduct) return;
      addToCart(selectedProduct, qs('#modalProductQty').value);
      closeAllModals();
      qs('#quote').scrollIntoView({behavior:'smooth',block:'start'});
    });

    qs('#clearQuote').addEventListener('click', () => {
      cart = [];
      saveCart();
      qs('#quoteStatus').textContent = t('status.cleared');
    });

    qs('#sendQuoteWhatsapp').addEventListener('click', () => {
      if(!cart.length){ qs('#quoteStatus').textContent = t('status.emptyOrder'); return; }
      sendToWhatsApp(buildWhatsappOrder());
      qs('#quoteStatus').textContent = t('status.whatsappOpened');
    });

    qs('#contactForm').addEventListener('submit', handleContactSubmit);
    qs('#openDistributor').addEventListener('click', () => openModal('#distributorModal'));
    qs('#sendDistributorWhatsapp').addEventListener('click', sendDistributor);

    document.addEventListener('click', e => {
      const clickedInsideHeader = e.target.closest('.site-header');
      if(!clickedInsideHeader && qs('#mobileNav').classList.contains('is-open')){
        qs('#mobileNav').classList.remove('is-open');
        qs('#menuButton').setAttribute('aria-expanded','false');
      }
    });
  }

  function init(){
    renderProducts();
    applyLanguage();
    renderBadges();
    initInteractions();
  }

  init();
})();
