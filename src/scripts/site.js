/* Three small behaviours: glass refraction, the pointer highlight, and click-to-play video. */

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const reducedTransparency = matchMedia('(prefers-reduced-transparency: reduce)').matches;

/* Liquid glass ---------------------------------------------------------------
   Chromium can bend what sits behind an element by passing an SVG displacement
   map to backdrop-filter. Each lens gets a map drawn for its exact size: pixels
   near the rounded edge pull the backdrop inward, as a glass bezel does.
   Safari and Firefox keep the frosted fallback from global.css. */
const supportsLens = 'userAgentData' in navigator && !reducedTransparency;
const svgNS = 'http://www.w3.org/2000/svg';
let filterHost;

function drawLensMap(width, height, radius, bezel) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d');
  const image = context.createImageData(width, height);

  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const offsetX = x + 0.5 - width / 2;
      const offsetY = y + 0.5 - height / 2;
      const qx = Math.abs(offsetX) - (width / 2 - radius);
      const qy = Math.abs(offsetY) - (height / 2 - radius);
      const outside = Math.hypot(Math.max(qx, 0), Math.max(qy, 0));
      const depth = radius - outside - Math.min(Math.max(qx, qy), 0);

      let normalX = 0;
      let normalY = 0;
      if (qx > 0 && qy > 0) {
        normalX = (Math.sign(offsetX) * qx) / outside;
        normalY = (Math.sign(offsetY) * qy) / outside;
      } else if (qx > qy) {
        normalX = Math.sign(offsetX);
      } else {
        normalY = Math.sign(offsetY);
      }

      const strength = Math.max(0, 1 - depth / bezel) ** 2;
      const index = (y * width + x) * 4;
      image.data[index] = 128 - normalX * strength * 127;
      image.data[index + 1] = 128 - normalY * strength * 127;
      image.data[index + 2] = 128;
      image.data[index + 3] = 255;
    }
  }

  context.putImageData(image, 0, 0);
  return canvas.toDataURL('image/png');
}

function applyLens(element, index) {
  const box = element.getBoundingClientRect();
  const w = Math.round(box.width);
  const h = Math.round(box.height);
  if (!w || !h) return;

  /* Chromium resolves these coordinates against the page, or against the viewport
     for fixed elements, not against the element itself. */
  const isFixed = getComputedStyle(element).position === 'fixed';
  const x = String(box.left + (isFixed ? 0 : scrollX));
  const y = String(box.top + (isFixed ? 0 : scrollY));

  const radius = Math.min(parseFloat(getComputedStyle(element).borderTopLeftRadius) || 0, h / 2, w / 2);
  const bezel = Math.min(26, h / 2);
  const id = `lens-${index}`;
  document.getElementById(id)?.remove();

  const filter = document.createElementNS(svgNS, 'filter');
  filter.id = id;
  filter.setAttribute('x', x);
  filter.setAttribute('y', y);
  filter.setAttribute('width', String(w));
  filter.setAttribute('height', String(h));
  filter.setAttribute('filterUnits', 'userSpaceOnUse');
  filter.setAttribute('primitiveUnits', 'userSpaceOnUse');
  filter.setAttribute('color-interpolation-filters', 'sRGB');

  const map = document.createElementNS(svgNS, 'feImage');
  map.setAttribute('href', drawLensMap(w, h, radius, bezel));
  map.setAttribute('x', x);
  map.setAttribute('y', y);
  map.setAttribute('width', String(w));
  map.setAttribute('height', String(h));
  map.setAttribute('preserveAspectRatio', 'none');
  map.setAttribute('result', 'map');

  const displace = document.createElementNS(svgNS, 'feDisplacementMap');
  displace.setAttribute('in', 'SourceGraphic');
  displace.setAttribute('in2', 'map');
  displace.setAttribute('scale', element.dataset.lens);
  displace.setAttribute('xChannelSelector', 'R');
  displace.setAttribute('yChannelSelector', 'G');

  filter.append(map, displace);
  filterHost.append(filter);
  element.style.backdropFilter = `url(#${id}) blur(5px) saturate(165%)`;
}

function setUpLenses() {
  if (!supportsLens) return;
  const lenses = [...document.querySelectorAll('[data-lens]')];
  if (!lenses.length) return;

  filterHost = document.createElementNS(svgNS, 'svg');
  filterHost.setAttribute('aria-hidden', 'true');
  filterHost.style.cssText = 'position:absolute;width:0;height:0';
  document.body.append(filterHost);

  const observer = new ResizeObserver((entries) => {
    for (const entry of entries) applyLens(entry.target, lenses.indexOf(entry.target));
  });
  lenses.forEach((lens) => observer.observe(lens));

  /* A lens's page position can move without its size changing. */
  const refreshAll = () => lenses.forEach(applyLens);
  document.fonts.ready.then(refreshAll);
  addEventListener('load', refreshAll);
  addEventListener('resize', refreshAll);
}

/* Specular highlight --------------------------------------------------------- */
function trackGlassLight() {
  if (reducedMotion || !matchMedia('(hover: hover)').matches) return;
  document.addEventListener('pointermove', (event) => {
    const glass = event.target.closest?.('.glass');
    if (!glass) return;
    const box = glass.getBoundingClientRect();
    glass.style.setProperty('--light-x', `${event.clientX - box.left}px`);
    glass.style.setProperty('--light-y', `${event.clientY - box.top}px`);
  });
}

/* Video: stays a normal YouTube link until clicked, so nothing from YouTube loads
   before a visitor asks for it. Modified clicks still open a new tab. */
function setUpVideos() {
  document.addEventListener('click', (event) => {
    const link = event.target.closest?.('[data-video]');
    if (!link || event.metaKey || event.ctrlKey || event.shiftKey) return;
    event.preventDefault();

    const frame = document.createElement('iframe');
    frame.src = `https://www.youtube-nocookie.com/embed/${link.dataset.video}?autoplay=1&rel=0`;
    frame.title = link.dataset.title;
    frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    frame.allowFullscreen = true;
    link.replaceWith(frame);
    frame.focus();
  });
}

setUpLenses();
trackGlassLight();
setUpVideos();
