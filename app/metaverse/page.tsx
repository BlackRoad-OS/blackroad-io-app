'use client';

import { useEffect } from 'react';

export default function MetaversePage() {
  useEffect(() => {
    // Dynamically load the metaverse scripts
    const loadScript = (src: string) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.type = 'module';
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    // Load Three.js and init metaverse
    const initMetaverse = async () => {
      try {
        // Three.js will be loaded via import map in the HTML
        console.log('Metaverse initializing...');
      } catch (error) {
        console.error('Failed to load metaverse:', error);
      }
    };

    initMetaverse();
  }, []);

  return (
    <>
      <style jsx global>{`
        body {
          margin: 0;
          overflow: hidden;
        }

        .metaverse-container {
          width: 100vw;
          height: 100vh;
          position: relative;
        }

        #metaverse-canvas {
          display: block;
          width: 100%;
          height: 100%;
        }

        .metaverse-ui {
          position: absolute;
          top: 20px;
          left: 20px;
          z-index: 100;
          color: white;
          font-family: 'Inter', sans-serif;
        }

        .metaverse-controls {
          position: absolute;
          bottom: 20px;
          right: 20px;
          z-index: 100;
          background: rgba(0, 0, 0, 0.7);
          padding: 15px;
          border-radius: 10px;
          color: white;
          font-size: 14px;
        }
      `}</style>

      <div className="metaverse-container">
        <canvas id="metaverse-canvas"></canvas>

        <div className="metaverse-ui">
          <h1 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            BlackRoad Metaverse
          </h1>
          <p className="text-sm text-gray-300">Loading 3D universe...</p>
        </div>

        <div className="metaverse-controls">
          <div className="font-mono text-xs">
            <div>WASD - Move</div>
            <div>Mouse - Look Around</div>
            <div>Space - Jump</div>
            <div>Shift - Sprint</div>
          </div>
        </div>
      </div>
    </>
  );
}
