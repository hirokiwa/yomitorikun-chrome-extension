import jsQR from 'jsqr';

chrome.runtime.onMessage.addListener((message) => {
  if (message.screenshotUrl) {
    processScreenshot(message.screenshotUrl);
  }
});

const processScreenshot = (screenshotUrl: string) => {
  const img = new Image();
  img.src = screenshotUrl;

  img.onload = () => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    if (context) {
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0, img.width, img.height);

      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const code = jsQR(imageData.data, canvas.width, canvas.height);

      if (code) {
        alert(`QRコード内容: ${code.data}`);
      } else {
        alert('QRコードが見つかりませんでした');
      }
    }
  };
}
