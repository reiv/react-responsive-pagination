export {};

const startWidth = 650;
const endWidth = 500;
const rate = 2;

jest.setTimeout(30000);

beforeAll(async () => {
  await page.goto(`${harnessUrl}?css=demo`);

  await page.setViewportSize({ width: startWidth, height: 200 });

  await page.fill('#currentPageAsJson', '8');

  await page.fill('#totalAsJson', '20');

  await page.evaluate(() => {
    document.documentElement.scrollTop = 0;
  });
});

test('demo', async () => {
  await page.waitForTimeout(15000);

  for (let i = 0; i <= 100; i += rate) {
    const r = i / 100;
    const width = Math.floor(startWidth - (startWidth - endWidth) * linear(r));
    await page.setViewportSize({ width, height: 200 });
    await page.waitForTimeout(10);
  }

  await page.waitForTimeout(1000);

  for (let i = 0; i <= 100; i += rate) {
    const r = i / 100;
    const width = Math.floor(endWidth + (startWidth - endWidth) * linear(r));
    await page.setViewportSize({ width, height: 200 });
    await page.waitForTimeout(10);
  }

  await page.waitForTimeout(1000);
});

//http://npmjs.com/package/react-responsive-pagination?activeTab=readme

function linear(x: number) {
  return x;
}

function easeOutSine(x: number) {
  return Math.sin((x * Math.PI) / 2);
}

function easeOutQuad(x: number) {
  return 1 - (1 - x) * (1 - x);
}

function easeOutCubic(x: number) {
  return 1 - Math.pow(1 - x, 3);
}
