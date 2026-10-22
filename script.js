(() => {
  const stage = document.querySelector(".art");
  const output = document.getElementById("ascii");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const portrait = [
    {
      line: "                                 .     ...      ",
      red: new Set([]),
    },
    {
      line: "                        .. .    .:..   .,:,.    ",
      red: new Set([33, 40, 41, 42]),
    },
    {
      line: "                        ,. ...  .::,, ...,;;.   ",
      red: new Set([33, 34, 41, 42, 43]),
    },
    {
      line: "                       .::,,:;:,,:i:;..:..:;;.  ",
      red: new Set([24, 25, 33, 34, 39, 42, 43, 44]),
    },
    {
      line: "                     .,;:irAXrii::i;ii.:;.:;i,  ",
      red: new Set([24, 25, 33, 34, 35, 39, 40, 42, 43, 44]),
    },
    {
      line: "                    .,;i:i;sssrs::ii;ri:;:::i,  ",
      red: new Set([24, 25, 26, 32, 33, 34, 35, 39, 40, 41, 42, 43, 44, 45]),
    },
    {
      line: "                  .:;;;::;;:;;iX:;i;sXss:;:;;,  ",
      red: new Set([24, 25, 26, 32, 33, 34, 35, 36, 40, 41, 42, 43, 44, 45]),
    },
    {
      line: "               ..,::,,,,,:;;,::;;;i;rirs:;;i;.  ",
      red: new Set([25, 26, 27, 32, 33, 34, 35, 36, 40, 41, 42, 43, 44]),
    },
    {
      line: "               ...,,,,,,,,:;;:,:;;;;;iii;;;i:   ",
      red: new Set([26, 27, 28, 32, 33, 34, 35, 40, 41, 42, 43, 44]),
    },
    {
      line: "                 ...,,,,,,::;;;;;;::;rrii;;;,   ",
      red: new Set([26, 27, 28, 32, 33, 34, 35, 40, 41, 42, 43]),
    },
    {
      line: "               ..,,,,,::,,,:;;;;;;::iri;:::,.   ",
      red: new Set([27, 33, 34, 35, 39, 40, 41, 42, 43]),
    },
    {
      line: "                 .,,,,,;;:,,;::;;;;iiri;:;,     ",
      red: new Set([34, 39, 40, 41]),
    },
    {
      line: "                 ..,,,,,::,,:;::::iiiri;;;.     ",
      red: new Set([30, 31, 32]),
    },
    {
      line: "                   .,,,,,,,,,;;ir;;iii;:ii,     ",
      red: new Set([31, 32, 33, 38]),
    },
    {
      line: "                .,i;:,,,,,:,::;;ir;iiii:;i:,..  ",
      red: new Set([26, 31, 32, 33, 34, 37, 38]),
    },
    {
      line: "          ..  .,rXA3ri:,,::::;;;;iriiii,:i,     ",
      red: new Set([25, 26, 27, 28, 29, 30, 35, 36, 37]),
    },
    {
      line: "     .,,. .:i;irXA3hrii;,,,,;:ii;iriii:;,i,     ",
      red: new Set([29, 30, 31, 32, 38, 39]),
    },
    {
      line: "    ,iii;;..:sAX2h3XiiX;r;:,:;;i;;iii;::,:.     ",
      red: new Set([30, 31, 32]),
    },
    {
      line: "   .iiii;;:...;XsriirXs;;irr;;;;;i;:;::,.,,,..  ",
      red: new Set([27, 28, 29, 32, 33, 34, 35, 37, 41, 42, 43]),
    },
    {
      line: "   :rrriiii;;;,Asrrssi;i;iii;;;;;i;:;:,::::::,. ",
      red: new Set([
        26, 27, 28, 29, 30, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
      ]),
    },
    {
      line: "   :rriiriii:sXsAXsi:;;sri;;::;::ii::,::::::::,.",
      red: new Set([
        25, 26, 27, 28, 29, 30, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
      ]),
    },
    {
      line: "   .:;irrirr;A3AXri;;;;irr;;isr:;::::::::::::;;.",
      red: new Set([
        26, 27, 28, 29, 33, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
      ]),
    },
    {
      line: "    .,:;ii;:i2Xr:,,XsrriirA2s;:;;;::;;:::::::;;,",
      red: new Set([34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47]),
    },
    {
      line: "       ..,,rr;:,:.;irrrrrsAs,.,;;::;;;::::;;;;,.",
      red: new Set([
        31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46,
      ]),
    },
    {
      line: "           .::,sssriiirrii;.::;;;;;;;;;:;;;:,.  ",
      red: new Set([
        28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44,
      ]),
    },
    {
      line: "           ..,:ssr;;;;iiiiir;::..,;;;::;.,.     ",
      red: new Set([29, 30, 34, 35, 36, 37, 38, 39]),
    },
    {
      line: "         ,r;  :rssri;;iiiisXriri:,,:;:..        ",
      red: new Set([29, 31, 32, 34, 35, 36]),
    },
    {
      line: "        :Xsi;::irsr;;;i;;iXArii;ii;;i:..        ",
      red: new Set([31, 35]),
    },
    {
      line: "       :2XsAXriii;;;iir;;iri;,:issrirri:        ",
      red: new Set([]),
    },
    {
      line: "      ,XXXXA2ri::,,;iisiir;    ,;rrrii;.        ",
      red: new Set([]),
    },
    {
      line: "      sAXXAAAi:.  .;irsr;i,    ,;;rriii,        ",
      red: new Set([]),
    },
    {
      line: "     .Asssri;;.    ,,ir,,.     .;iXAiii;. .     ",
      red: new Set([]),
    },
    {
      line: "  ., :rrXs;;r,     . :.         :riirXXr;:i:,   ",
      red: new Set([]),
    },
    {
      line: " .;Xsi;irrir,                  .:,;;;iiirriri.  ",
      red: new Set([]),
    },
    {
      line: ".iXA2r;;;i::.                    .,:;;;i;i;:;,  ",
      red: new Set([]),
    },
    {
      line: ".;:;;;:,,,.                        ..,,,..,..   ",
      red: new Set([]),
    },
  ];

  const glyphs = [];
  let pointerX = 0;
  let pointerY = 0;
  let pointerDX = 0;
  let pointerDY = 0;
  let pointerActive = false;
  let previousTime = 0;
  let animationFrame = 0;

  portrait.forEach(({ line, red }) => {
    const row = document.createElement("span");
    row.className = "ascii-row";
    let index = 0;

    for (const character of line) {
      if (character === " ") {
        row.append(document.createTextNode(" "));
      } else {
        const glyph = document.createElement("span");
        glyph.className = red.has(index)
          ? "ascii-glyph ascii-glyph--accent"
          : "ascii-glyph";
        glyph.textContent = character;
        glyph.setAttribute("aria-hidden", "true");
        row.append(glyph);
        glyphs.push({ element: glyph, x: 0, y: 0, vx: 0, vy: 0, index });
      }
      index++;
    }

    output.append(row);
  });

  function cacheGlyphPositions() {
    glyphs.forEach((glyph) => {
      glyph.element.style.transform = "none";
      glyph.x = 0;
      glyph.y = 0;
      glyph.vx = 0;
      glyph.vy = 0;
      const bounds = glyph.element.getBoundingClientRect();
      glyph.baseX = bounds.left + bounds.width / 2;
      glyph.baseY = bounds.top + bounds.height / 2;
    });
  }
  cacheGlyphPositions();
  window.addEventListener("resize", cacheGlyphPositions);
  document.fonts?.ready.then(cacheGlyphPositions);

  function scheduleAnimation() {
    if (!animationFrame) animationFrame = window.requestAnimationFrame(animate);
  }

  function rememberPointer(event) {
    pointerDX = event.clientX - pointerX;
    pointerDY = event.clientY - pointerY;
    pointerX = event.clientX;
    pointerY = event.clientY;
    pointerActive = true;
    scheduleAnimation();
  }

  stage.addEventListener("pointerenter", rememberPointer);
  stage.addEventListener("pointermove", rememberPointer);
  stage.addEventListener("pointerleave", () => {
    pointerActive = false;
    pointerDX = 0;
    pointerDY = 0;
    scheduleAnimation();
  });

  stage.addEventListener("keydown", (event) => {
    const directions = {
      ArrowLeft: [-240, 0],
      ArrowRight: [240, 0],
      ArrowUp: [0, -240],
      ArrowDown: [0, 240],
    };
    const direction = directions[event.key];
    if (!direction) return;
    event.preventDefault();
    glyphs.forEach((glyph) => {
      glyph.vx += direction[0] * 0.04;
      glyph.vy += direction[1] * 0.04;
    });
    scheduleAnimation();
  });

  function animate(time) {
    animationFrame = 0;
    const delta = previousTime
      ? Math.min((time - previousTime) / 1000, 0.025)
      : 1 / 60;
    previousTime = time;
    const spring = reducedMotion.matches ? 150 : 92;
    const damping = Math.exp(-(reducedMotion.matches ? 15 : 7) * delta);
    const radius = 76;
    let unsettled = false;

    glyphs.forEach((glyph) => {
      let dx = glyph.baseX + glyph.x - pointerX;
      let dy = glyph.baseY + glyph.y - pointerY;
      let distance = Math.hypot(dx, dy);

      if (pointerActive && distance < radius) {
        if (distance < 1) {
          dx = -pointerDX || Math.cos(glyph.index * 2.4);
          dy = -pointerDY || Math.sin(glyph.index * 2.4);
          distance = Math.hypot(dx, dy) || 1;
        }
        const pressure = 1 - distance / radius;
        const force = pressure * 6200;
        glyph.vx += (dx / distance) * force * delta;
        glyph.vy += (dy / distance) * force * delta;
      }

      // Spring each letter home; velocity adds the soft jelly wobble.
      glyph.vx += -glyph.x * spring * delta;
      glyph.vy += -glyph.y * spring * delta;
      glyph.vx *= damping;
      glyph.vy *= damping;
      glyph.x = Math.max(-22, Math.min(22, glyph.x + glyph.vx * delta));
      glyph.y = Math.max(-22, Math.min(22, glyph.y + glyph.vy * delta));

      const speed = Math.min(Math.hypot(glyph.vx, glyph.vy), 260);
      const squash = Math.min(speed / 900, 0.16);
      const tilt = Math.max(-8, Math.min(8, glyph.vx * 0.035));
      glyph.element.style.transform = `translate3d(${glyph.x.toFixed(1)}px, ${glyph.y.toFixed(1)}px, 0) rotate(${tilt.toFixed(1)}deg) scale(${(1 + squash).toFixed(2)}, ${(1 - squash * 0.65).toFixed(2)})`;

      if (
        Math.abs(glyph.x) > 0.08 ||
        Math.abs(glyph.y) > 0.08 ||
        speed > 0.08
      ) {
        unsettled = true;
      }
    });

    pointerActive = false;
    if (unsettled) scheduleAnimation();
  }

  if (!reducedMotion.matches && "IntersectionObserver" in window) {
    const revealItems = document.querySelectorAll(
      "main > section:not(.hero) > *",
    );
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );
    revealItems.forEach((item) => {
      item.classList.add("reveal-ready");
      revealObserver.observe(item);
    });
  }

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  function closeNav() {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
    nav.classList.remove("is-open");
  }

  toggle.addEventListener("click", () => {
    const willOpen = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", String(willOpen));
    toggle.setAttribute(
      "aria-label",
      willOpen ? "Close navigation" : "Open navigation",
    );
    nav.classList.toggle("is-open", willOpen);
  });
  nav
    .querySelectorAll("a")
    .forEach((link) => link.addEventListener("click", closeNav));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeNav();
  });
})();
