

  const required = ['lab1','lab2','passwordgenerator','quizgame','recipefinder'];
  required.forEach(name => {
    fetch(`./${name}/index.html`, { method: 'HEAD' }).then(resp => {
      if (!resp.ok) console.warn(`Warning: ${name}/index.html not found. Put the folder inside integratedpage or adjust links.`);
    }).catch(() => {
      console.warn(`Warning: ${name}/index.html not found (network error).`);
    });
  });

