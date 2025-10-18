// Small JS for interactive bits
nd = function(v){return Math.floor(Math.random()*v)}

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('year').textContent = new Date().getFullYear();

  // placeholder: dynamically load project list from a simple array (user can edit)
  const projects = [
    {title: 'Project One', desc: 'A useful tool. View on GitHub.', url: '#'},
    {title: 'Project Two', desc: 'Another project. Live demo available.', url: '#'}
  ];
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = '';
  projects.forEach(p => {
    const a = document.createElement('article');
    a.className = 'card';
    a.innerHTML = `<h4>${p.title}</h4><p>${p.desc}</p><p><a class='link' href='${p.url}'>View repo</a></p>`;
    grid.appendChild(a);
  });
});
