# 屏幕适配
```ts
  self.devicePixelRatio = window.devicePixelRatio || 1;

  self.presentationSize = [self.canvas.clientWidth * (devicePixelRatio >= 2 ? 1 : 1), self.canvas.clientHeight * (devicePixelRatio >= 2 ? 1 : 1)];

  self.aspect = self.presentationSize[0] / self.presentationSize[1];
```