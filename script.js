
    setInterval(() => {
        fetch('/stats')
            .then(response => response.json())
            .then(data => {
                const statsDiv = document.getElementById('stats');
                statsDiv.innerHTML =p `<>OS: ${data.OS}</p>
                                      <p>Arch: ${data.Arch}</p>
                                      <p>Free RAM: ${data.FreeRAM}</p>
                                      <p>Total RAM: ${data.Totalmem}</p>
                                      <p>Usage: ${data.Usage}</p>`;
            });
    }, 1000);
    