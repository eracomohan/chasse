    const cursor = document.getElementById('cursor');

    function updatePosition(x, y) {
      const px = (x / window.innerWidth) * 100;
      const py = (y / window.innerHeight) * 100;

      cursor.style.setProperty('--x', px + '%');
      cursor.style.setProperty('--y', py + '%');
    }

    /* DESKTOP */
    document.addEventListener('mousemove', (e) => {
      updatePosition(e.clientX, e.clientY);
    });

    /* TOUCH */
    document.addEventListener('touchstart', (e) => {
      cursor.style.opacity = 1;
      const t = e.touches[0];
      updatePosition(t.clientX, t.clientY);
    }, { passive: true });

    document.addEventListener('touchmove', (e) => {
      const t = e.touches[0];
      updatePosition(t.clientX, t.clientY);
    }, { passive: true });

    document.addEventListener('touchend', () => {
      cursor.style.opacity = 0;
    });
    /*
      let active = false;

    document.addEventListener('touchstart', (e) => {
      active = !active;
      cursor.style.opacity = active ? 1 : 0;

      if (!active) return;
      const t = e.touches[0];
      updatePosition(t.clientX, t.clientY);
    });
    */