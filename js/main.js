/* =========================================================
   Leandro Gabriel · Sites
   Calculadora de orçamento e animações de entrada.
   ========================================================= */
(function () {
  'use strict';

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var WHATS = '5583981165331';
  var EMAIL = 'lgos99921@gmail.com';
  var reais = function (v) { return 'R$ ' + v.toLocaleString('pt-BR'); };

  /* ---------- Ano ---------- */
  var y = $('#year'); if (y) y.textContent = new Date().getFullYear();

  /* ---------- Animações de entrada ---------- */
  var reveal = $$('[data-reveal]');
  var reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if ('IntersectionObserver' in window && !reduz) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
    reveal.forEach(function (el) { io.observe(el); });
  } else reveal.forEach(function (el) { el.classList.add('is-visible'); });

  /* ---------- Calculadora ---------- */
  var form = $('#q-form');
  if (!form) return;

  // Regras de preço (definidas pelo Leandro):
  // site vitrine = R$ 2.000; com funcionalidades = R$ 2.500 a R$ 4.000, conforme o que entra.
  function calcular() {
    var funcs = $$('input[data-func]:checked', form);
    var extras = $$('input[data-extra]:checked', form);
    var somaExtras = extras.reduce(function (s, i) { return s + (+i.getAttribute('data-extra')); }, 0);
    var min, max, tipo;
    if (!funcs.length) { tipo = 'Site vitrine'; min = max = 2000; }
    else {
      tipo = 'Site com funcionalidades';
      min = Math.min(2500 + 500 * (funcs.length - 1), 3500);
      max = Math.min(3000 + 500 * funcs.length, 4000);
    }
    var manut = $('input[name="manut"]:checked', form);
    return {
      tipo: tipo, funcs: funcs, extras: extras,
      min: min + somaExtras, max: max + somaExtras, somaExtras: somaExtras,
      grande: funcs.length >= 3,
      mensal: +manut.value, mensalNome: manut.getAttribute('data-nome'),
      negocio: $('input[name="negocio"]:checked', form).value,
      nome: form.elements.nome.value.trim(),
      empresa: form.elements.empresa.value.trim(),
      obs: form.elements.obs.value.trim()
    };
  }

  function faixa(r) { return r.min === r.max ? reais(r.min) : reais(r.min) + ' a ' + reais(r.max); }

  function mensagem(r) {
    var L = ['Olá, Leandro! Fiz a simulação no seu site.', ''];
    if (r.nome) L.push('Nome: ' + r.nome);
    if (r.empresa) L.push('Negócio: ' + r.empresa + ' (' + r.negocio.toLowerCase() + ')');
    else L.push('Tipo de negócio: ' + r.negocio);
    L.push('Tipo de site: ' + r.tipo);
    var rec = r.funcs.map(function (i) { return i.value; });
    var ext = r.extras.map(function (i) { return i.value; });
    L.push('Precisa de: ' + (rec.length ? rec.join(', ') : 'apresentar o negócio'));
    var idiomas = ext.filter(function (v) { return v === 'Inglês' || v === 'Espanhol'; });
    L.push('Idiomas: Português' + (idiomas.length ? ', ' + idiomas.join(', ') : ''));
    if (ext.indexOf('Blog ou textos') > -1) L.push('Com blog ou textos');
    L.push('Depois de pronto: ' + (r.mensal ? r.mensalNome + ' (' + reais(r.mensal) + '/mês)' : 'eu mesmo cuido'));
    L.push('Estimativa: ' + faixa(r));
    if (r.obs) L.push('', 'Sobre o projeto: ' + r.obs);
    return L.join('\n');
  }

  function render() {
    var r = calcular();
    $('#q-price').textContent = faixa(r);
    $('#q-monthly').textContent = r.mensal ? '+ ' + reais(r.mensal) + '/mês (' + r.mensalNome + ')' : 'sem mensalidade';
    var linhas = ['<li><span>' + r.tipo + '</span><span>' + (r.funcs.length ? reais(r.min - r.somaExtras) + '–' + reais(r.max - r.somaExtras).replace('R$ ', '') : reais(2000)) + '</span></li>'];
    r.extras.forEach(function (i) { linhas.push('<li><span>' + i.value + '</span><span>+' + reais(+i.getAttribute('data-extra')) + '</span></li>'); });
    if (r.mensal) linhas.push('<li><span>1º mês de manutenção</span><span>cortesia</span></li>');
    $('#q-lines').innerHTML = linhas.join('');
    $('#q-note').textContent = r.grande
      ? 'Projeto maior: pode passar de R$ 4.000, dependendo do que entrar. O valor fechado sai depois de uma conversa.'
      : 'É uma estimativa. O valor fechado sai depois de uma conversa rápida sobre o projeto.';
    var msg = mensagem(r);
    $('#q-send').href = 'https://wa.me/' + WHATS + '?text=' + encodeURIComponent(msg);
    $('#q-mail').href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent('Orçamento de site' + (r.empresa ? ' · ' + r.empresa : '')) + '&body=' + encodeURIComponent(msg);
  }

  form.addEventListener('change', render);
  form.addEventListener('input', render);
  form.addEventListener('submit', function (e) { e.preventDefault(); });

  // Botões dos planos já preenchem a calculadora
  $$('[data-pick]').forEach(function (b) {
    b.addEventListener('click', function () {
      var tipo = b.getAttribute('data-pick');
      $$('input[data-func]', form).forEach(function (i) { i.checked = false; });
      if (tipo === 'funcional') {
        var neg = $('input[name="negocio"]:checked', form).value;
        var sugestao = /Pousada|Saúde/.test(neg) ? 'Reservas ou agendamento' : /Loja/.test(neg) ? 'Loja com catálogo e sacola' : 'Pedidos pelo WhatsApp';
        var alvo = $('input[data-func][value="' + sugestao + '"]', form); if (alvo) alvo.checked = true;
      }
      render();
    });
  });

  render();
})();
