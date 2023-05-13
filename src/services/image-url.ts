// Makes the website load faster and more responsive by cropping the image to 600x400px

const getCroppedImageUrl = (url: string) => {
  if (!url) return '';
  const target = 'media/';
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + 'crop/600/400/' + url.slice(index);
}

export default getCroppedImageUrl;