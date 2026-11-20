(function () {
  "use strict";

  var MATERIALS = {
    gravel: { kind: "weight", density: 1600, extra: true,
      presets: [{ label: "Decorative topping", cm: 2.5 }, { label: "Path or border", cm: 4 }, { label: "Driveway", cm: 5 }], def: 1 },
    topsoil: { kind: "volume", density: 1300, extra: true,
      presets: [{ label: "Top-dress a lawn", cm: 2 }, { label: "Lawn base", cm: 10 }, { label: "New border", cm: 15 }, { label: "Raised bed", cm: 30 }], def: 1 },
    bark: { kind: "volume", extra: true,
      presets: [{ label: "Light mulch", cm: 5 }, { label: "Weed suppression", cm: 7.5 }, { label: "Play area", cm: 30 }], def: 1 },
    seed: { kind: "seed",
      rates: [{ label: "New lawn", g: 50 }, { label: "Overseeding", g: 25 }, { label: "Patch repair", g: 35 }], def: 0 },
    turf: { kind: "turf", wastage: 0.05 }
  };

  var root = document.querySelector("[data-calc]");
  if (!root) return;
  var key = root.getAttribute("data-calc");
  var M = MATERIALS[key];
  var products = (window.PRODUCTS || {})[key] || [];

  var state = { units: "metric", shape: "rect", preset: M.def || 0, customDepth: null, extra: !!M.extra };

  var $ = function (sel) { return root.querySelector(sel); };
  var $$ = function (sel) { return Array.prototype.slice.call(root.querySelectorAll(sel)); };

  // ---------- build depth / rate presets ----------
  var presetWrap = $("[data-presets]");
  var list = M.presets || M.rates;
  if (presetWrap && list) {
    list.forEach(function (p, i) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "chip";
      b.setAttribute("data-preset", i);
      b.innerHTML = "<span>" + p.label + "</span><small>" + (p.cm != null ? fmtDepth(p.cm) : p.g + " g/m²") + "</small>";
      b.addEventListener("click", function () {
        state.preset = i; state.customDepth = null;
        var d = $("#depth"); if (d) d.value = "";
        render();
      });
      presetWrap.appendChild(b);
    });
  }

  function fmtDepth(cm) {
    return state.units === "metric" ? cm + " cm" : (cm / 2.54).toFixed(1) + " in";
  }

  // ---------- events ----------
  $$("[data-units]").forEach(function (b) {
    b.addEventListener("click", function () {
      state.units = b.getAttribute("data-units");
      // relabel preset chips
      $$("[data-preset]").forEach(function (c) {
        var p = list[+c.getAttribute("data-preset")];
        if (p.cm != null) c.querySelector("small").textContent = fmtDepth(p.cm);
      });
      render();
    });
  });
  $$("[data-shape]").forEach(function (b) {
    b.addEventListener("click", function () { state.shape = b.getAttribute("data-shape"); render(); });
  });
  $$("input").forEach(function (i) {
    i.addEventListener("input", function () {
      if (i.id === "depth") state.customDepth = i.value === "" ? null : parseFloat(i.value);
      if (i.id === "extra") state.extra = i.checked;
      render();
    });
  });

  // ---------- maths ----------
  function num(id) { var el = $("#" + id); if (!el) return 0; var v = parseFloat(el.value); return isFinite(v) && v > 0 ? v : 0; }

  function areaM2() {
    var f = state.units === "metric" ? 1 : 0.3048; // ft -> m
    if (state.shape === "rect") return num("length") * f * num("width") * f;
    if (state.shape === "circle") { var r = (num("diameter") * f) / 2; return Math.PI * r * r; }
    return num("area") * (state.units === "metric" ? 1 : 0.092903);
  }

  function depthM() {
    if (state.customDepth && state.customDepth > 0) {
      return state.units === "metric" ? state.customDepth / 100 : (state.customDepth * 2.54) / 100;
    }
    return list[state.preset].cm / 100;
  }

  function gbp(n) { return "£" + (n >= 100 ? Math.round(n).toLocaleString("en-GB") : n.toFixed(2)); }
  function link(p) {
    var u = p.url, tag = (window.AFFILIATE || {}).amazonTag;
    if (tag && /amazon\.co\.uk/.test(u)) u += (u.indexOf("?") > -1 ? "&" : "?") + "tag=" + encodeURIComponent(tag);
    return u;
  }

  function render() {
    // toggle UI
    $$("[data-units]").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-units") === state.units); });
    $$("[data-shape]").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-shape") === state.shape); });
    $$("[data-field]").forEach(function (f) { f.hidden = f.getAttribute("data-field").split(" ").indexOf(state.shape) === -1; });
    $$("[data-preset]").forEach(function (c) { c.setAttribute("aria-pressed", state.customDepth == null && +c.getAttribute("data-preset") === state.preset); });
    $$("[data-u-len]").forEach(function (s) { s.textContent = state.units === "metric" ? "m" : "ft"; });
    $$("[data-u-area]").forEach(function (s) { s.textContent = state.units === "metric" ? "m²" : "ft²"; });
    $$("[data-u-depth]").forEach(function (s) { s.textContent = state.units === "metric" ? "cm" : "in"; });

    var a = areaM2();
    var big = $("[data-big]"), sub = $("[data-sub]"), rows = $("[data-rows]");
    var mult = state.extra ? 1.1 : 1;
    var need, unitKey, headline, detail;

    if (M.kind === "weight" || M.kind === "volume") {
      var v = a * depthM() * mult;
      var kg = v * (M.density || 0);
      need = { m3: v, kg: kg };
      if (M.kind === "weight") {
        headline = kg >= 1000 ? (kg / 1000).toFixed(2) + " tonnes" : Math.round(kg) + " kg";
        detail = v.toFixed(2) + " m³ over " + a.toFixed(1) + " m²";
      } else {
        headline = v.toFixed(2) + " m³";
        detail = Math.round(v * 1000).toLocaleString("en-GB") + " litres over " + a.toFixed(1) + " m²";
      }
    } else if (M.kind === "seed") {
      var g = a * list[state.preset].g;
      need = { kg: g / 1000 };
      headline = g >= 1000 ? (g / 1000).toFixed(2) + " kg" : Math.round(g) + " g";
      detail = "at " + list[state.preset].g + " g/m² over " + a.toFixed(1) + " m²";
    } else {
      var t = a * (1 + M.wastage);
      need = { m2: t };
      headline = Math.ceil(t) + " m²";
      detail = a.toFixed(1) + " m² plus 5% for trimming";
    }

    if (a <= 0) {
      big.textContent = "—";
      sub.textContent = "Enter your measurements to see how much you need.";
      rows.innerHTML = "";
      return;
    }
    big.textContent = headline;
    sub.textContent = detail + (state.extra && M.extra ? ", including 10% extra" : "");

    rows.innerHTML = products.map(function (p) {
      var count;
      if (p.sizeKg != null && need.kg != null) count = Math.ceil(need.kg / p.sizeKg - 1e-9);
      else if (p.sizeM3 != null && need.m3 != null) count = Math.ceil(need.m3 / p.sizeM3 - 1e-9);
      else if (p.sizeM2 != null && need.m2 != null) count = Math.ceil(need.m2 / p.sizeM2 - 1e-9);
      else count = 1;
      count = Math.max(1, count);
      var plural = count === 1 ? p.unit : (/s$/.test(p.unit) ? p.unit : p.unit.replace(/(bag|box|sack|roll)$/, "$1" + (p.unit.slice(-1) === "x" ? "es" : "s")));
      return '<li class="row">' +
        '<div class="row-main"><span class="row-name">' + p.name + '</span><span class="row-meta">' + p.retailer + "</span></div>" +
        '<div class="row-qty"><strong>' + count + "</strong> " + plural + '<span class="row-cost">≈ ' + gbp(count * p.price) + "</span></div>" +
        '<a class="btn" href="' + link(p) + '" target="_blank" rel="sponsored nofollow noopener">View at ' + p.retailer + "</a>" +
        "</li>";
    }).join("");
  }

  render();
})();
