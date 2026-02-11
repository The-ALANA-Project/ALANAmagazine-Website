import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { SideShelfMenu } from '@/app/components/SideShelfMenu';
import { assetUrls } from '@/assets/asset-urls';

interface PressKitProps {
  onClose: () => void;
  onShopArchiveClick?: () => void;
  onTeamClick?: () => void;
  onAdvertiseClick?: () => void;
  onShowTerms?: () => void;
  onShowPrivacy?: () => void;
}

export function PressKit({ 
  onClose, 
  onShopArchiveClick, 
  onTeamClick, 
  onAdvertiseClick,
  onShowTerms, 
  onShowPrivacy 
}: PressKitProps) {
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleDownloadPngLight = () => {
    const link = document.createElement('a');
    link.href = assetUrls.alanaLogoLightBg;
    link.download = 'alana-logo-light-background.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadPngDark = () => {
    const link = document.createElement('a');
    link.href = assetUrls.alanaLogoDarkBg;
    link.download = 'alana-logo-dark-background.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadSvgBlack = () => {
    const svgContent = `<svg width="1905" height="396" viewBox="0 0 1905 396" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M388.448 255.308H592.894V218.835H424.709V0H388.448V255.308Z" fill="#262424"/>
  <path d="M1083.08 36.4726C1095.05 36.4726 1106.65 43.4024 1112.09 54.3441L1194.4 214.824C1207.09 239.26 1233.56 255.308 1260.76 255.308H1318.68V0H1282.42V218.836H1252.78C1240.82 218.836 1229.21 211.541 1223.77 200.964L1141.46 40.4846C1128.77 16.048 1102.3 0 1075.1 0H1012.01V255.308H1048.27V36.4726H1083.08Z" fill="#262424"/>
  <path d="M1633.65 43.0387C1624.95 17.1432 1600.66 0.00107131 1573.46 0.00107131H1483.51C1456.32 0.00107131 1432.02 17.1432 1423.32 43.0387L1349.35 255.309H1387.06L1454.14 62.3692C1459.58 46.686 1474.08 36.4737 1490.4 36.4737H1566.57C1582.89 36.4737 1597.39 46.686 1602.83 62.3692L1669.91 255.309L1707.63 255.309L1633.65 43.0387Z" fill="#262424"/>
  <path d="M907.368 43.0384C898.665 17.1428 874.37 0.000720703 847.174 0.000720703H757.227C730.031 0.000720703 705.736 17.1428 697.033 43.0384L623.06 255.309H660.771L727.855 62.3689C733.294 46.6857 747.799 36.4733 764.116 36.4733H840.284C856.602 36.4733 871.106 46.6857 876.545 62.3689L943.629 255.309L981.341 255.309L907.368 43.0384Z" fill="#262424"/>
  <path d="M284.308 43.0384C275.605 17.1428 251.31 0.000720703 224.114 0.000720703H134.167C106.971 0.000720703 82.6757 17.1428 73.973 43.0384L0 255.309H37.7116L104.795 62.3689C110.234 46.6857 124.739 36.4733 141.056 36.4733H217.225C233.542 36.4733 248.047 46.6857 253.486 62.3689L320.569 255.309L358.281 255.309L284.308 43.0384Z" fill="#262424"/>
  <path d="M1216.9 307.209C1226.22 307.209 1230.33 313.622 1230.33 321.971V367.346H1221.5V324.27C1221.5 318.462 1219.56 315.195 1214.48 315.195C1209.16 315.195 1206.01 319.672 1206.01 325.964V367.346H1197.78V324.27C1197.78 318.462 1195.85 315.195 1190.77 315.195C1185.81 315.195 1182.3 319.188 1182.3 325.964V367.346H1173.46V308.661H1181.45V315.074C1183.63 310.113 1187.62 307.209 1193.07 307.209C1198.87 307.209 1202.62 310.234 1204.56 315.437C1207.1 310.476 1211.22 307.209 1216.9 307.209ZM1270.27 306.846C1285.52 306.846 1294.11 314.953 1294.11 326.206V367.346H1285.4V359.844C1281.41 366.015 1274.15 369.161 1265.31 369.161C1253.82 369.161 1244.26 364.563 1244.26 352.947C1244.26 339.153 1257.08 335.281 1271.97 332.498L1284.91 330.199V326.811C1284.91 318.946 1278.99 314.711 1270.52 314.711C1263.13 314.711 1258.05 317.736 1250.55 324.875L1244.5 319.43C1252.24 310.96 1260.23 306.846 1270.27 306.846ZM1266.16 361.417C1276.69 361.417 1284.91 355.367 1284.91 345.808V337.338L1274.15 339.516C1262.17 341.936 1253.45 344.114 1253.45 352.584C1253.45 358.271 1258.17 361.417 1266.16 361.417ZM1355.59 308.661H1364.42V365.289C1364.42 380.535 1354.38 389.489 1338.16 389.489C1329.21 389.489 1319.65 386.948 1310.94 381.987L1315.29 374.606C1323.04 378.841 1330.9 381.503 1338.28 381.503C1347.6 381.503 1355.22 376.663 1355.22 364.563V356.456C1351.47 362.506 1345.3 366.015 1336.47 366.015C1321.1 366.015 1311.06 353.794 1311.06 336.491C1311.06 319.188 1321.34 306.967 1336.47 306.967C1345.54 306.967 1351.84 310.718 1355.59 317.131V308.661ZM1337.92 358.029C1348.69 358.029 1355.35 349.196 1355.35 336.491C1355.35 323.907 1348.69 314.953 1337.92 314.953C1326.79 314.953 1320.74 323.907 1320.74 336.491C1320.74 349.196 1326.79 358.029 1337.92 358.029ZM1408.23 306.846C1423.48 306.846 1432.07 314.953 1432.07 326.206V367.346H1423.36V359.844C1419.36 366.015 1412.1 369.161 1403.27 369.161C1391.78 369.161 1382.22 364.563 1382.22 352.947C1382.22 339.153 1395.04 335.281 1409.93 332.498L1422.87 330.199V326.811C1422.87 318.946 1416.94 314.711 1408.47 314.711C1401.09 314.711 1396.01 317.736 1388.51 324.875L1382.46 319.43C1390.2 310.96 1398.19 306.846 1408.23 306.846ZM1404.12 361.417C1414.65 361.417 1422.87 355.367 1422.87 345.808V337.338L1412.1 339.516C1400.13 341.936 1391.41 344.114 1391.41 352.584C1391.41 358.271 1396.13 361.417 1404.12 361.417ZM1502.14 308.661V315.679L1464.51 359.481H1502.14V367.346H1453.01V360.328L1490.52 316.526H1454.58V308.661H1502.14ZM1554.42 283.13V295.593H1540.87V283.13H1554.42ZM1553.57 359.602H1574.87V367.346H1521.14V359.602H1544.13V316.405H1525.38V308.661H1553.57V359.602ZM1619.53 307.088C1633.2 307.088 1639.25 316.284 1639.25 327.174V367.346H1629.81V330.199C1629.81 320.277 1625.58 315.074 1617.23 315.074C1608.39 315.074 1602.22 321.85 1602.22 330.804V367.346H1592.79V308.661H1601.62V316.647C1605.37 310.234 1611.66 307.088 1619.53 307.088ZM1707.75 350.285L1713.31 356.093C1703.75 365.773 1695.77 368.919 1686.09 368.919C1667.94 368.919 1657.17 356.819 1657.17 338.548C1657.17 320.035 1668.42 306.967 1685.12 306.967C1702.18 306.967 1711.86 317.978 1711.86 335.039C1711.86 336.128 1711.74 338.427 1711.62 339.395H1666.61C1667.09 351.253 1673.02 361.054 1686.21 361.054C1693.95 361.054 1699.64 358.029 1707.75 350.285ZM1685.12 314.832C1675.44 314.832 1668.66 320.761 1666.97 332.014H1702.54C1702.06 321.85 1695.89 314.832 1685.12 314.832Z" fill="#262424"/>
</svg>`;
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'alana-logo-black.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadSvgWhite = () => {
    const svgContent = `<svg width="1905" height="396" viewBox="0 0 1905 396" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M388.448 255.308H592.894V218.835H424.709V0H388.448V255.308Z" fill="white"/>
  <path d="M1083.08 36.4726C1095.05 36.4726 1106.65 43.4024 1112.09 54.3441L1194.4 214.824C1207.09 239.26 1233.56 255.308 1260.76 255.308H1318.68V0H1282.42V218.836H1252.78C1240.82 218.836 1229.21 211.541 1223.77 200.964L1141.46 40.4846C1128.77 16.048 1102.3 0 1075.1 0H1012.01V255.308H1048.27V36.4726H1083.08Z" fill="white"/>
  <path d="M1633.65 43.0387C1624.95 17.1432 1600.66 0.00107131 1573.46 0.00107131H1483.51C1456.32 0.00107131 1432.02 17.1432 1423.32 43.0387L1349.35 255.309H1387.06L1454.14 62.3692C1459.58 46.686 1474.08 36.4737 1490.4 36.4737H1566.57C1582.89 36.4737 1597.39 46.686 1602.83 62.3692L1669.91 255.309L1707.63 255.309L1633.65 43.0387Z" fill="white"/>
  <path d="M907.368 43.0384C898.665 17.1428 874.37 0.000720703 847.174 0.000720703H757.227C730.031 0.000720703 705.736 17.1428 697.033 43.0384L623.06 255.309H660.771L727.855 62.3689C733.294 46.6857 747.799 36.4733 764.116 36.4733H840.284C856.602 36.4733 871.106 46.6857 876.545 62.3689L943.629 255.309L981.341 255.309L907.368 43.0384Z" fill="white"/>
  <path d="M284.308 43.0384C275.605 17.1428 251.31 0.000720703 224.114 0.000720703H134.167C106.971 0.000720703 82.6757 17.1428 73.973 43.0384L0 255.309H37.7116L104.795 62.3689C110.234 46.6857 124.739 36.4733 141.056 36.4733H217.225C233.542 36.4733 248.047 46.6857 253.486 62.3689L320.569 255.309L358.281 255.309L284.308 43.0384Z" fill="white"/>
  <path d="M1216.9 307.209C1226.22 307.209 1230.33 313.622 1230.33 321.971V367.346H1221.5V324.27C1221.5 318.462 1219.56 315.195 1214.48 315.195C1209.16 315.195 1206.01 319.672 1206.01 325.964V367.346H1197.78V324.27C1197.78 318.462 1195.85 315.195 1190.77 315.195C1185.81 315.195 1182.3 319.188 1182.3 325.964V367.346H1173.46V308.661H1181.45V315.074C1183.63 310.113 1187.62 307.209 1193.07 307.209C1198.87 307.209 1202.62 310.234 1204.56 315.437C1207.1 310.476 1211.22 307.209 1216.9 307.209ZM1270.27 306.846C1285.52 306.846 1294.11 314.953 1294.11 326.206V367.346H1285.4V359.844C1281.41 366.015 1274.15 369.161 1265.31 369.161C1253.82 369.161 1244.26 364.563 1244.26 352.947C1244.26 339.153 1257.08 335.281 1271.97 332.498L1284.91 330.199V326.811C1284.91 318.946 1278.99 314.711 1270.52 314.711C1263.13 314.711 1258.05 317.736 1250.55 324.875L1244.5 319.43C1252.24 310.96 1260.23 306.846 1270.27 306.846ZM1266.16 361.417C1276.69 361.417 1284.91 355.367 1284.91 345.808V337.338L1274.15 339.516C1262.17 341.936 1253.45 344.114 1253.45 352.584C1253.45 358.271 1258.17 361.417 1266.16 361.417ZM1355.59 308.661H1364.42V365.289C1364.42 380.535 1354.38 389.489 1338.16 389.489C1329.21 389.489 1319.65 386.948 1310.94 381.987L1315.29 374.606C1323.04 378.841 1330.9 381.503 1338.28 381.503C1347.6 381.503 1355.22 376.663 1355.22 364.563V356.456C1351.47 362.506 1345.3 366.015 1336.47 366.015C1321.1 366.015 1311.06 353.794 1311.06 336.491C1311.06 319.188 1321.34 306.967 1336.47 306.967C1345.54 306.967 1351.84 310.718 1355.59 317.131V308.661ZM1337.92 358.029C1348.69 358.029 1355.35 349.196 1355.35 336.491C1355.35 323.907 1348.69 314.953 1337.92 314.953C1326.79 314.953 1320.74 323.907 1320.74 336.491C1320.74 349.196 1326.79 358.029 1337.92 358.029ZM1408.23 306.846C1423.48 306.846 1432.07 314.953 1432.07 326.206V367.346H1423.36V359.844C1419.36 366.015 1412.1 369.161 1403.27 369.161C1391.78 369.161 1382.22 364.563 1382.22 352.947C1382.22 339.153 1395.04 335.281 1409.93 332.498L1422.87 330.199V326.811C1422.87 318.946 1416.94 314.711 1408.47 314.711C1401.09 314.711 1396.01 317.736 1388.51 324.875L1382.46 319.43C1390.2 310.96 1398.19 306.846 1408.23 306.846ZM1404.12 361.417C1414.65 361.417 1422.87 355.367 1422.87 345.808V337.338L1412.1 339.516C1400.13 341.936 1391.41 344.114 1391.41 352.584C1391.41 358.271 1396.13 361.417 1404.12 361.417ZM1502.14 308.661V315.679L1464.51 359.481H1502.14V367.346H1453.01V360.328L1490.52 316.526H1454.58V308.661H1502.14ZM1554.42 283.13V295.593H1540.87V283.13H1554.42ZM1553.57 359.602H1574.87V367.346H1521.14V359.602H1544.13V316.405H1525.38V308.661H1553.57V359.602ZM1619.53 307.088C1633.2 307.088 1639.25 316.284 1639.25 327.174V367.346H1629.81V330.199C1629.81 320.277 1625.58 315.074 1617.23 315.074C1608.39 315.074 1602.22 321.85 1602.22 330.804V367.346H1592.79V308.661H1601.62V316.647C1605.37 310.234 1611.66 307.088 1619.53 307.088ZM1707.75 350.285L1713.31 356.093C1703.75 365.773 1695.77 368.919 1686.09 368.919C1667.94 368.919 1657.17 356.819 1657.17 338.548C1657.17 320.035 1668.42 306.967 1685.12 306.967C1702.18 306.967 1711.86 317.978 1711.86 335.039C1711.86 336.128 1711.74 338.427 1711.62 339.395H1666.61C1667.09 351.253 1673.02 361.054 1686.21 361.054C1693.95 361.054 1699.64 358.029 1707.75 350.285ZM1685.12 314.832C1675.44 314.832 1668.66 320.761 1666.97 332.014H1702.54C1702.06 321.85 1695.89 314.832 1685.12 314.832Z" fill="white"/>
</svg>`;
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'alana-logo-white.svg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadAirPromo1 = () => {
    const link = document.createElement('a');
    link.href = assetUrls.airPromo1;
    link.download = 'alana-air-edition-promo-1.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadAirPromo2 = () => {
    const link = document.createElement('a');
    link.href = assetUrls.airPromo2;
    link.download = 'alana-air-edition-promo-2.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadAirPromo3 = () => {
    const link = document.createElement('a');
    link.href = assetUrls.airPromo3;
    link.download = 'alana-air-edition-promo-3.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-[60] w-full border-b border-foreground bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="px-8 md:px-16 max-w-6xl mx-auto">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <button 
              onClick={onClose}
              className="flex items-center hover:opacity-80 transition-opacity"
              aria-label="Return to home"
            >
              <img src={assetUrls.alanaLogo} alt="ALANA Magazine logo" className="h-[33.6px] w-auto transition-transform hover:scale-95 active:scale-90" />
            </button>

            {/* Menu Icons */}
            <div className="flex items-center gap-4">
              {/* Burger menu button */}
              <button
                onClick={() => setSheetOpen(!sheetOpen)}
                className="text-foreground hover:text-accent transition-colors"
                aria-label="Toggle menu"
              >
                {sheetOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Side Shelf Menu */}
      <SideShelfMenu
        isOpen={sheetOpen}
        onClose={() => setSheetOpen(false)}
        currentPage="press-kit"
        onPageChange={() => {}}
        onHomeClick={() => {
          setSheetOpen(false);
          onClose();
        }}
        onShopArchiveClick={() => {
          setSheetOpen(false);
          onShopArchiveClick?.();
        }}
        onTeamClick={() => {
          setSheetOpen(false);
          onTeamClick?.();
        }}
        onAdvertiseClick={() => {
          setSheetOpen(false);
          onAdvertiseClick?.();
        }}
        onFeaturedCreatorsClick={() => {
          setSheetOpen(false);
        }}
      />

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 md:px-16 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4">Press Kit</h1>
          <p className="text-[18px] md:text-[20px] text-muted-foreground max-w-3xl">
            Download our official brand assets, logos, and media resources for official editorial and promotional use.
          </p>
        </div>

        {/* About ALANA */}
        <section className="mb-16">
          <h2 className="mb-6">About ALANAmagazine</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-[18px] md:text-[20px] mb-4">
              ALANAmagazine™ is where technology, culture, and lifestyle collide with a particular emphasis on the emergence of Web 3.0 innovation and its impact on those interconnected topics.
            </p>
            <p className="text-[16px] md:text-[18px] mb-4">
              Our goal is to inspire and empower global readers to embrace innovation and creativity while providing a curated and elevated experience that reflects the evergreen uniqueness of the ALANA brand.
              The ALANAmagazine™ is published by The ALANA Project community.
            </p>
          </div>
        </section>

        {/* AIR Edition Promo Images */}
        <section className="mb-16">
          <h2 className="mb-6">AIR Edition Promo Images</h2>
          <p className="text-[18px] md:text-[20px] text-muted-foreground mb-6">
            Web-ready promotional images for the upcoming AIR Edition. Perfect for social media, press releases, and promotional materials until the official cover is released.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Promo Image 1 */}
            <div className="border border-foreground rounded-none rounded-br-[25px] overflow-hidden">
              <div className="aspect-video bg-foreground/5">
                <img src={assetUrls.airPromo1} alt="AIR Edition Promo 1" className="w-full h-full object-cover" />
              </div>
              <div className="border-t border-foreground p-4">
                <h4 className="text-[20px] font-medium mb-2">Promo Image 1</h4>
                <p className="text-sm text-muted-foreground mb-4">PNG</p>
                <Button onClick={handleDownloadAirPromo1} className="w-full bg-foreground hover:bg-accent text-background hover:text-foreground font-sans px-8 h-10 rounded-none rounded-br-[25px] transition-colors">
                  Download PNG
                </Button>
              </div>
            </div>

            {/* Promo Image 2 */}
            <div className="border border-foreground rounded-none rounded-br-[25px] overflow-hidden">
              <div className="aspect-video bg-foreground/5">
                <img src={assetUrls.airPromo2} alt="AIR Edition Promo 2" className="w-full h-full object-cover" />
              </div>
              <div className="border-t border-foreground p-4">
                <h4 className="text-[20px] font-medium mb-2">Promo Image 2</h4>
                <p className="text-sm text-muted-foreground mb-4">PNG</p>
                <Button onClick={handleDownloadAirPromo2} className="w-full bg-foreground hover:bg-accent text-background hover:text-foreground font-sans px-8 h-10 rounded-none rounded-br-[25px] transition-colors">
                  Download PNG
                </Button>
              </div>
            </div>

            {/* Promo Image 3 */}
            <div className="border border-foreground rounded-none rounded-br-[25px] overflow-hidden">
              <div className="aspect-video bg-foreground/5">
                <img src={assetUrls.airPromo3} alt="AIR Edition Promo 3" className="w-full h-full object-cover" />
              </div>
              <div className="border-t border-foreground p-4">
                <h4 className="text-[20px] font-medium mb-2">Promo Image 3</h4>
                <p className="text-sm text-muted-foreground mb-4">PNG</p>
                <Button onClick={handleDownloadAirPromo3} className="w-full bg-foreground hover:bg-accent text-background hover:text-foreground font-sans px-8 h-10 rounded-none rounded-br-[25px] transition-colors">
                  Download PNG
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Downloads */}
        <section className="mb-16">
          <h2 className="mb-6">Logo Downloads</h2>
          <p className="text-[18px] md:text-[20px] text-muted-foreground mb-6">
            Please maintain proper spacing and don't alter the logo proportions. Use our official brand colors when referencing ALANA and specifically here ALANAmagazine. Don't modify, distort, or recolor our logos, and don't use our brand assets to imply endorsement without permission.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* PNG - Light Background */}
            <div className="border border-foreground p-8 rounded-none rounded-br-[25px]">
              <div className="bg-[#E8E8E8] flex items-center justify-center h-32 mb-4 rounded-none">
                <img src={assetUrls.alanaLogoLightBg} alt="ALANA Logo Light Background" className="w-full h-auto border border-foreground" />
              </div>
              <h4 className="text-[20px] font-medium mb-2">PNG - Light Background</h4>
              <p className="text-sm text-muted-foreground mb-4">Black logo on light background</p>
              <Button onClick={handleDownloadPngLight} className="w-full bg-foreground hover:bg-accent text-background hover:text-foreground font-sans px-8 h-10 rounded-none rounded-br-[25px] transition-colors">
                Download PNG
              </Button>
            </div>

            {/* PNG - Dark Background */}
            <div className="border border-foreground p-8 rounded-none rounded-br-[25px]">
              <div className="bg-[#363636] flex items-center justify-center h-32 mb-4 rounded-none">
                <img src={assetUrls.alanaLogoDarkBg} alt="ALANA Logo Dark Background" className="w-full h-auto" />
              </div>
              <h4 className="text-[20px] font-medium mb-2">PNG - Dark Background</h4>
              <p className="text-sm text-muted-foreground mb-4">White logo on dark background</p>
              <Button onClick={handleDownloadPngDark} className="w-full bg-foreground hover:bg-accent text-background hover:text-foreground font-sans px-8 h-10 rounded-none rounded-br-[25px] transition-colors">
                Download PNG
              </Button>
            </div>

            {/* SVG - Black */}
            <div className="border border-foreground p-8 rounded-none rounded-br-[25px]">
              <div className="bg-[#FFFFFF] flex items-center justify-center h-32 mb-4 rounded-none">
                <svg width="1905" height="396" viewBox="0 0 1905 396" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-16 w-auto">
                  <path d="M388.448 255.308H592.894V218.835H424.709V0H388.448V255.308Z" fill="#262424"/>
                  <path d="M1083.08 36.4726C1095.05 36.4726 1106.65 43.4024 1112.09 54.3441L1194.4 214.824C1207.09 239.26 1233.56 255.308 1260.76 255.308H1318.68V0H1282.42V218.836H1252.78C1240.82 218.836 1229.21 211.541 1223.77 200.964L1141.46 40.4846C1128.77 16.048 1102.3 0 1075.1 0H1012.01V255.308H1048.27V36.4726H1083.08Z" fill="#262424"/>
                  <path d="M1633.65 43.0387C1624.95 17.1432 1600.66 0.00107131 1573.46 0.00107131H1483.51C1456.32 0.00107131 1432.02 17.1432 1423.32 43.0387L1349.35 255.309H1387.06L1454.14 62.3692C1459.58 46.686 1474.08 36.4737 1490.4 36.4737H1566.57C1582.89 36.4737 1597.39 46.686 1602.83 62.3692L1669.91 255.309L1707.63 255.309L1633.65 43.0387Z" fill="#262424"/>
                  <path d="M907.368 43.0384C898.665 17.1428 874.37 0.000720703 847.174 0.000720703H757.227C730.031 0.000720703 705.736 17.1428 697.033 43.0384L623.06 255.309H660.771L727.855 62.3689C733.294 46.6857 747.799 36.4733 764.116 36.4733H840.284C856.602 36.4733 871.106 46.6857 876.545 62.3689L943.629 255.309L981.341 255.309L907.368 43.0384Z" fill="#262424"/>
                  <path d="M284.308 43.0384C275.605 17.1428 251.31 0.000720703 224.114 0.000720703H134.167C106.971 0.000720703 82.6757 17.1428 73.973 43.0384L0 255.309H37.7116L104.795 62.3689C110.234 46.6857 124.739 36.4733 141.056 36.4733H217.225C233.542 36.4733 248.047 46.6857 253.486 62.3689L320.569 255.309L358.281 255.309L284.308 43.0384Z" fill="#262424"/>
                  <path d="M1216.9 307.209C1226.22 307.209 1230.33 313.622 1230.33 321.971V367.346H1221.5V324.27C1221.5 318.462 1219.56 315.195 1214.48 315.195C1209.16 315.195 1206.01 319.672 1206.01 325.964V367.346H1197.78V324.27C1197.78 318.462 1195.85 315.195 1190.77 315.195C1185.81 315.195 1182.3 319.188 1182.3 325.964V367.346H1173.46V308.661H1181.45V315.074C1183.63 310.113 1187.62 307.209 1193.07 307.209C1198.87 307.209 1202.62 310.234 1204.56 315.437C1207.1 310.476 1211.22 307.209 1216.9 307.209ZM1270.27 306.846C1285.52 306.846 1294.11 314.953 1294.11 326.206V367.346H1285.4V359.844C1281.41 366.015 1274.15 369.161 1265.31 369.161C1253.82 369.161 1244.26 364.563 1244.26 352.947C1244.26 339.153 1257.08 335.281 1271.97 332.498L1284.91 330.199V326.811C1284.91 318.946 1278.99 314.711 1270.52 314.711C1263.13 314.711 1258.05 317.736 1250.55 324.875L1244.5 319.43C1252.24 310.96 1260.23 306.846 1270.27 306.846ZM1266.16 361.417C1276.69 361.417 1284.91 355.367 1284.91 345.808V337.338L1274.15 339.516C1262.17 341.936 1253.45 344.114 1253.45 352.584C1253.45 358.271 1258.17 361.417 1266.16 361.417ZM1355.59 308.661H1364.42V365.289C1364.42 380.535 1354.38 389.489 1338.16 389.489C1329.21 389.489 1319.65 386.948 1310.94 381.987L1315.29 374.606C1323.04 378.841 1330.9 381.503 1338.28 381.503C1347.6 381.503 1355.22 376.663 1355.22 364.563V356.456C1351.47 362.506 1345.3 366.015 1336.47 366.015C1321.1 366.015 1311.06 353.794 1311.06 336.491C1311.06 319.188 1321.34 306.967 1336.47 306.967C1345.54 306.967 1351.84 310.718 1355.59 317.131V308.661ZM1337.92 358.029C1348.69 358.029 1355.35 349.196 1355.35 336.491C1355.35 323.907 1348.69 314.953 1337.92 314.953C1326.79 314.953 1320.74 323.907 1320.74 336.491C1320.74 349.196 1326.79 358.029 1337.92 358.029ZM1408.23 306.846C1423.48 306.846 1432.07 314.953 1432.07 326.206V367.346H1423.36V359.844C1419.36 366.015 1412.1 369.161 1403.27 369.161C1391.78 369.161 1382.22 364.563 1382.22 352.947C1382.22 339.153 1395.04 335.281 1409.93 332.498L1422.87 330.199V326.811C1422.87 318.946 1416.94 314.711 1408.47 314.711C1401.09 314.711 1396.01 317.736 1388.51 324.875L1382.46 319.43C1390.2 310.96 1398.19 306.846 1408.23 306.846ZM1404.12 361.417C1414.65 361.417 1422.87 355.367 1422.87 345.808V337.338L1412.1 339.516C1400.13 341.936 1391.41 344.114 1391.41 352.584C1391.41 358.271 1396.13 361.417 1404.12 361.417ZM1502.14 308.661V315.679L1464.51 359.481H1502.14V367.346H1453.01V360.328L1490.52 316.526H1454.58V308.661H1502.14ZM1554.42 283.13V295.593H1540.87V283.13H1554.42ZM1553.57 359.602H1574.87V367.346H1521.14V359.602H1544.13V316.405H1525.38V308.661H1553.57V359.602ZM1619.53 307.088C1633.2 307.088 1639.25 316.284 1639.25 327.174V367.346H1629.81V330.199C1629.81 320.277 1625.58 315.074 1617.23 315.074C1608.39 315.074 1602.22 321.85 1602.22 330.804V367.346H1592.79V308.661H1601.62V316.647C1605.37 310.234 1611.66 307.088 1619.53 307.088ZM1707.75 350.285L1713.31 356.093C1703.75 365.773 1695.77 368.919 1686.09 368.919C1667.94 368.919 1657.17 356.819 1657.17 338.548C1657.17 320.035 1668.42 306.967 1685.12 306.967C1702.18 306.967 1711.86 317.978 1711.86 335.039C1711.86 336.128 1711.74 338.427 1711.62 339.395H1666.61C1667.09 351.253 1673.02 361.054 1686.21 361.054C1693.95 361.054 1699.64 358.029 1707.75 350.285ZM1685.12 314.832C1675.44 314.832 1668.66 320.761 1666.97 332.014H1702.54C1702.06 321.85 1695.89 314.832 1685.12 314.832Z" fill="#262424"/>
                </svg>
              </div>
              <h4 className="text-[20px] font-medium mb-2">SVG - Black</h4>
              <p className="text-sm text-muted-foreground mb-4">Black logo with transparent background</p>
              <Button onClick={handleDownloadSvgBlack} className="w-full bg-foreground hover:bg-accent text-background hover:text-foreground font-sans px-8 h-10 rounded-none rounded-br-[25px] transition-colors">
                Download SVG
              </Button>
            </div>

            {/* SVG - White */}
            <div className="border border-foreground p-8 rounded-none rounded-br-[25px]">
              <div className="bg-[#FFFFFF] flex items-center justify-center h-32 mb-4 rounded-none">
                <svg width="1905" height="396" viewBox="0 0 1905 396" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-16 w-auto">
                  <path d="M388.448 255.308H592.894V218.835H424.709V0H388.448V255.308Z" fill="white"/>
                  <path d="M1083.08 36.4726C1095.05 36.4726 1106.65 43.4024 1112.09 54.3441L1194.4 214.824C1207.09 239.26 1233.56 255.308 1260.76 255.308H1318.68V0H1282.42V218.836H1252.78C1240.82 218.836 1229.21 211.541 1223.77 200.964L1141.46 40.4846C1128.77 16.048 1102.3 0 1075.1 0H1012.01V255.308H1048.27V36.4726H1083.08Z" fill="white"/>
                  <path d="M1633.65 43.0387C1624.95 17.1432 1600.66 0.00107131 1573.46 0.00107131H1483.51C1456.32 0.00107131 1432.02 17.1432 1423.32 43.0387L1349.35 255.309H1387.06L1454.14 62.3692C1459.58 46.686 1474.08 36.4737 1490.4 36.4737H1566.57C1582.89 36.4737 1597.39 46.686 1602.83 62.3692L1669.91 255.309L1707.63 255.309L1633.65 43.0387Z" fill="white"/>
                  <path d="M907.368 43.0384C898.665 17.1428 874.37 0.000720703 847.174 0.000720703H757.227C730.031 0.000720703 705.736 17.1428 697.033 43.0384L623.06 255.309H660.771L727.855 62.3689C733.294 46.6857 747.799 36.4733 764.116 36.4733H840.284C856.602 36.4733 871.106 46.6857 876.545 62.3689L943.629 255.309L981.341 255.309L907.368 43.0384Z" fill="white"/>
                  <path d="M284.308 43.0384C275.605 17.1428 251.31 0.000720703 224.114 0.000720703H134.167C106.971 0.000720703 82.6757 17.1428 73.973 43.0384L0 255.309H37.7116L104.795 62.3689C110.234 46.6857 124.739 36.4733 141.056 36.4733H217.225C233.542 36.4733 248.047 46.6857 253.486 62.3689L320.569 255.309L358.281 255.309L284.308 43.0384Z" fill="white"/>
                  <path d="M1216.9 307.209C1226.22 307.209 1230.33 313.622 1230.33 321.971V367.346H1221.5V324.27C1221.5 318.462 1219.56 315.195 1214.48 315.195C1209.16 315.195 1206.01 319.672 1206.01 325.964V367.346H1197.78V324.27C1197.78 318.462 1195.85 315.195 1190.77 315.195C1185.81 315.195 1182.3 319.188 1182.3 325.964V367.346H1173.46V308.661H1181.45V315.074C1183.63 310.113 1187.62 307.209 1193.07 307.209C1198.87 307.209 1202.62 310.234 1204.56 315.437C1207.1 310.476 1211.22 307.209 1216.9 307.209ZM1270.27 306.846C1285.52 306.846 1294.11 314.953 1294.11 326.206V367.346H1285.4V359.844C1281.41 366.015 1274.15 369.161 1265.31 369.161C1253.82 369.161 1244.26 364.563 1244.26 352.947C1244.26 339.153 1257.08 335.281 1271.97 332.498L1284.91 330.199V326.811C1284.91 318.946 1278.99 314.711 1270.52 314.711C1263.13 314.711 1258.05 317.736 1250.55 324.875L1244.5 319.43C1252.24 310.96 1260.23 306.846 1270.27 306.846ZM1266.16 361.417C1276.69 361.417 1284.91 355.367 1284.91 345.808V337.338L1274.15 339.516C1262.17 341.936 1253.45 344.114 1253.45 352.584C1253.45 358.271 1258.17 361.417 1266.16 361.417ZM1355.59 308.661H1364.42V365.289C1364.42 380.535 1354.38 389.489 1338.16 389.489C1329.21 389.489 1319.65 386.948 1310.94 381.987L1315.29 374.606C1323.04 378.841 1330.9 381.503 1338.28 381.503C1347.6 381.503 1355.22 376.663 1355.22 364.563V356.456C1351.47 362.506 1345.3 366.015 1336.47 366.015C1321.1 366.015 1311.06 353.794 1311.06 336.491C1311.06 319.188 1321.34 306.967 1336.47 306.967C1345.54 306.967 1351.84 310.718 1355.59 317.131V308.661ZM1337.92 358.029C1348.69 358.029 1355.35 349.196 1355.35 336.491C1355.35 323.907 1348.69 314.953 1337.92 314.953C1326.79 314.953 1320.74 323.907 1320.74 336.491C1320.74 349.196 1326.79 358.029 1337.92 358.029ZM1408.23 306.846C1423.48 306.846 1432.07 314.953 1432.07 326.206V367.346H1423.36V359.844C1419.36 366.015 1412.1 369.161 1403.27 369.161C1391.78 369.161 1382.22 364.563 1382.22 352.947C1382.22 339.153 1395.04 335.281 1409.93 332.498L1422.87 330.199V326.811C1422.87 318.946 1416.94 314.711 1408.47 314.711C1401.09 314.711 1396.01 317.736 1388.51 324.875L1382.46 319.43C1390.2 310.96 1398.19 306.846 1408.23 306.846ZM1404.12 361.417C1414.65 361.417 1422.87 355.367 1422.87 345.808V337.338L1412.1 339.516C1400.13 341.936 1391.41 344.114 1391.41 352.584C1391.41 358.271 1396.13 361.417 1404.12 361.417ZM1502.14 308.661V315.679L1464.51 359.481H1502.14V367.346H1453.01V360.328L1490.52 316.526H1454.58V308.661H1502.14ZM1554.42 283.13V295.593H1540.87V283.13H1554.42ZM1553.57 359.602H1574.87V367.346H1521.14V359.602H1544.13V316.405H1525.38V308.661H1553.57V359.602ZM1619.53 307.088C1633.2 307.088 1639.25 316.284 1639.25 327.174V367.346H1629.81V330.199C1629.81 320.277 1625.58 315.074 1617.23 315.074C1608.39 315.074 1602.22 321.85 1602.22 330.804V367.346H1592.79V308.661H1601.62V316.647C1605.37 310.234 1611.66 307.088 1619.53 307.088ZM1707.75 350.285L1713.31 356.093C1703.75 365.773 1695.77 368.919 1686.09 368.919C1667.94 368.919 1657.17 356.819 1657.17 338.548C1657.17 320.035 1668.42 306.967 1685.12 306.967C1702.18 306.967 1711.86 317.978 1711.86 335.039C1711.86 336.128 1711.74 338.427 1711.62 339.395H1666.61C1667.09 351.253 1673.02 361.054 1686.21 361.054C1693.95 361.054 1699.64 358.029 1707.75 350.285ZM1685.12 314.832C1675.44 314.832 1668.66 320.761 1666.97 332.014H1702.54C1702.06 321.85 1695.89 314.832 1685.12 314.832Z" fill="white"/>
                </svg>
              </div>
              <h4 className="text-[20px] font-medium mb-2">SVG - White</h4>
              <p className="text-sm text-muted-foreground mb-4">White logo with transparent background</p>
              <Button onClick={handleDownloadSvgWhite} className="w-full bg-foreground hover:bg-accent text-background hover:text-foreground font-sans px-8 h-10 rounded-none rounded-br-[25px] transition-colors">
                Download SVG
              </Button>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="mb-6">Typography</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Roboto */}
            <div className="border border-foreground p-8 rounded-none rounded-br-[25px]">
              <div className="mb-6 min-h-[140px]">
                <h3 className="text-[36px] md:text-[48px] font-sans mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>Roboto</h3>
                <p className="text-[18px] md:text-[20px] text-muted-foreground mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
              <div className="border-t border-foreground pt-6">
                <h4 className="text-[20px] font-medium mb-2">Primary Typeface</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Used for small headings, body text, buttons, and all UI elements. Available in Regular, Medium, and Bold weights.
                </p>
                <a 
                  href="https://fonts.google.com/specimen/Roboto" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-foreground hover:bg-accent text-background hover:text-foreground font-sans px-8 h-10 rounded-none rounded-br-[25px] transition-colors leading-10 text-[16px]"
                >
                  View on Google Fonts
                </a>
              </div>
            </div>

            {/* Roboto Mono */}
            <div className="border border-foreground p-8 rounded-none rounded-br-[25px]">
              <div className="mb-6 min-h-[140px]">
                <h3 className="text-[36px] md:text-[48px] font-mono mb-2" style={{ fontFamily: 'Roboto Mono, monospace' }}>Roboto Mono</h3>
                <p className="text-[18px] md:text-[20px] text-muted-foreground mb-4" style={{ fontFamily: 'Roboto Mono, monospace' }}>
                  The quick brown fox jumps over the lazy dog
                </p>
              </div>
              <div className="border-t border-foreground pt-6">
                <h4 className="text-[20px] font-medium mb-2">Technical Typeface</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Used for big headings, code snippets, commentary information, and small text elements.
                </p>
                <a 
                  href="https://fonts.google.com/specimen/Roboto+Mono" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block bg-foreground hover:bg-accent text-background hover:text-foreground font-sans px-8 h-10 rounded-none rounded-br-[25px] transition-colors leading-10 text-[16px]"
                >
                  View on Google Fonts
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Guidelines */}
        <section className="mb-16">
          <h2 className="mb-6">Brand Colors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Off-White */}
            <div className="border border-foreground rounded-none rounded-br-[25px] overflow-hidden">
              <div className="h-32 bg-background"></div>
              <div className="border-t border-foreground p-4">
                <h4 className="text-[20px] font-medium mb-1">Off-White</h4>
                <p className="text-sm text-muted-foreground mb-1">Primary background color</p>
                <p className="text-sm text-muted-foreground">#F3F3F3</p>
              </div>
            </div>

            {/* Black Hole */}
            <div className="border border-foreground rounded-none rounded-br-[25px] overflow-hidden">
              <div className="h-32 bg-foreground"></div>
              <div className="border-t border-foreground p-4">
                <h4 className="text-[20px] font-medium mb-1">Black Hole</h4>
                <p className="text-sm text-muted-foreground mb-1">Primary text color</p>
                <p className="text-sm text-muted-foreground">#262424</p>
              </div>
            </div>

            {/* Digital Lavender */}
            <div className="border border-foreground rounded-none rounded-br-[25px] overflow-hidden">
              <div className="h-32 bg-accent"></div>
              <div className="border-t border-foreground p-4">
                <h4 className="text-[20px] font-medium mb-1">Digital Lavender</h4>
                <p className="text-sm text-muted-foreground mb-1">Accent color</p>
                <p className="text-sm text-muted-foreground">#DCC2FE</p>
              </div>
            </div>
          </div>
        </section>

        {/* Signature Design Elements */}
        <section className="mb-8">
          <h2 className="mb-6">Signature Design Elements</h2>
          <p className="text-[18px] md:text-[20px] text-muted-foreground">
            ALANAmagazine's visual identity is defined by rounded bottom‑right corners (25px radius) on key interface elements and graphic containers, paired with fine 1px lines for subtle structure and emphasis. To enhance readability and depth, imagery often features light 30% color overlays and/or delicate grain textures.
          </p>
        </section>
      </div>

      {/* Media Contact */}
      <section className="w-full bg-accent py-12">
        <div className="flex flex-col items-center justify-center text-center px-8 max-w-4xl mx-auto">
          <h2 className="text-foreground mb-3">Media Contact</h2>
          <p className="text-foreground/80 mb-6 max-w-2xl">
            For press inquiries, interviews, or additional information about ALANAmagazine
          </p>
          <a
            href="mailto:contact@the-alana-project.xyz"
            className="inline-flex items-center justify-center bg-foreground text-background font-sans text-[16px] px-8 h-10 rounded-none rounded-br-[25px] transition-all hover:!bg-[#DCC2FE] hover:!text-foreground hover:outline hover:outline-1 hover:outline-foreground"
          >
            Reach Out
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground bg-background mt-0">
        <div className="px-8 md:px-16 py-8 md:py-12 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column - About */}
            <div>
              <h3 className="text-lg font-medium mb-4">ALANAmagazine™</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Where technology, culture, and lifestyle collide with a particular emphasis on the emergence of Web 3.0 innovation.
              </p>
            </div>

            {/* Middle Column - Quick Links */}
            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={onClose} className="text-muted-foreground hover:text-accent transition-colors">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={onShopArchiveClick} className="text-muted-foreground hover:text-accent transition-colors">
                    Shop & Archive
                  </button>
                </li>
                <li>
                  <button onClick={onTeamClick} className="text-muted-foreground hover:text-accent transition-colors">
                    Team
                  </button>
                </li>
                <li>
                  <button onClick={onAdvertiseClick} className="text-muted-foreground hover:text-accent transition-colors">
                    Advertise With Us
                  </button>
                </li>
              </ul>
            </div>

            {/* Right Column - Legal */}
            <div>
              <h3 className="text-lg font-medium mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={onShowTerms} className="text-muted-foreground hover:text-accent transition-colors">
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button onClick={onShowPrivacy} className="text-muted-foreground hover:text-accent transition-colors">
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-foreground/20 text-center text-sm text-muted-foreground">
            <p>© 2026 The ALANA Project. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
