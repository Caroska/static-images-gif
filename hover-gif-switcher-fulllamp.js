  const previewImg = document.getElementById('preview-img');
  const hoverGif = document.getElementById('hover-video');
  const container = document.getElementById('container');

  container.addEventListener('mouseenter', () => {
    previewImg.style.display = 'none';
    hoverGif.style.display = 'block';
  });

  container.addEventListener('mouseleave', () => {
    hoverGif.style.display = 'none';
    previewImg.style.display = 'block';
  });