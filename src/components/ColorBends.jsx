// import { useEffect, useRef, useMemo } from 'react';
// import * as THREE from 'three';

// const MAX_COLORS = 8;

// const frag = `
// #define MAX_COLORS ${MAX_COLORS}
// uniform vec2 uCanvas;
// uniform float uTime;
// uniform float uSpeed;
// uniform vec2 uRot;
// uniform int uColorCount;
// uniform vec3 uColors[MAX_COLORS];
// uniform int uTransparent;
// uniform float uScale;
// uniform float uFrequency;
// uniform float uWarpStrength;
// uniform vec2 uPointer;
// uniform float uMouseInfluence;
// uniform float uParallax;
// uniform float uNoise;
// varying vec2 vUv;

// void main() {
//   float t = uTime * uSpeed;
//   vec2 p = vUv * 2.0 - 1.0;
//   p += uPointer * uParallax * 0.1;
//   vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
//   vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
//   q /= max(uScale, 0.0001);
//   q /= 0.5 + 0.2 * dot(q, q);
//   q += 0.2 * cos(t) - 7.56;

//   vec3 col = vec3(0.0);
//   float a = 1.0;

//   if (uColorCount > 0) {
//     vec2 s = q;
//     vec3 sumCol = vec3(0.0);
//     float cover = 0.0;
//     for (int i = 0; i < MAX_COLORS; ++i) {
//       if (i >= uColorCount) break;
//       s -= 0.01;
//       vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
//       float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
//       float kBelow = clamp(uWarpStrength, 0.0, 1.0);
//       float kMix = pow(kBelow, 0.3);
//       float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
//       vec2 disp = (r - s) * kBelow;
//       vec2 warped = s + disp * gain;
//       float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
//       float m = mix(m0, m1, kMix);
//       float w = 1.0 - exp(-6.0 / exp(6.0 * m));
//       sumCol += uColors[i] * w;
//       cover = max(cover, w);
//     }
//     col = clamp(sumCol, 0.0, 1.0);
//     a = uTransparent > 0 ? cover : 1.0;
//   } else {
//     vec2 s = q;
//     for (int k = 0; k < 3; ++k) {
//       s -= 0.01;
//       vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
//       float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
//       float kBelow = clamp(uWarpStrength, 0.0, 1.0);
//       float kMix = pow(kBelow, 0.3);
//       float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
//       vec2 disp = (r - s) * kBelow;
//       vec2 warped = s + disp * gain;
//       float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
//       float m = mix(m0, m1, kMix);
//       col[k] = 1.0 - exp(-6.0 / exp(6.0 * m));
//     }
//     a = uTransparent > 0 ? max(max(col.r, col.g), col.b) : 1.0;
//   }

//   if (uNoise > 0.0001) {
//     float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
//     col += (n - 0.5) * uNoise;
//     col = clamp(col, 0.0, 1.0);
//   }

//   vec3 rgb = (uTransparent > 0) ? col * a : col;
//   gl_FragColor = vec4(rgb, a);
// }
// `;

// const vert = `
// varying vec2 vUv;
// void main() {
//   vUv = uv;
//   gl_Position = vec4(position, 1.0);
// }
// `;

// // 缓存颜色转换函数
// const hexToVec3 = (hex) => {
//   const h = hex.replace('#', '').trim();
//   const v = h.length === 3
//     ? [parseInt(h[0] + h[0], 16), parseInt(h[1] + h[1], 16), parseInt(h[2] + h[2], 16)]
//     : [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
//   return new THREE.Vector3(v[0] / 255, v[1] / 255, v[2] / 255);
// };

// export default function ColorBends({
//   className = '',
//   style = {},
//   rotation = 45,
//   speed = 0.2,
//   colors = [],
//   transparent = true,
//   autoRotate = 0,
//   scale = 1,
//   frequency = 1,
//   warpStrength = 1,
//   mouseInfluence = 1,
//   parallax = 0.5,
//   noise = 0.1
// }) {
//   const containerRef = useRef(null);
//   const rendererRef = useRef(null);
//   const rafRef = useRef(null);
//   const materialRef = useRef(null);
//   const clockRef = useRef(null);
//   const rotationRef = useRef(rotation);
//   const autoRotateRef = useRef(autoRotate);

//   // 使用 useMemo 缓存颜色数组转换
//   const colorVectors = useMemo(() => {
//     const arr = (colors || []).filter(Boolean).slice(0, MAX_COLORS).map(hexToVec3);
//     const result = Array.from({ length: MAX_COLORS }, () => new THREE.Vector3(0, 0, 0));
//     arr.forEach((vec, i) => result[i].copy(vec));
//     return result;
//   }, [colors]);

//   // 初始化 WebGL - 只在挂载时执行一次
//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const scene = new THREE.Scene();
//     const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

//     const geometry = new THREE.PlaneGeometry(2, 2);
//     const material = new THREE.ShaderMaterial({
//       vertexShader: vert,
//       fragmentShader: frag,
//       uniforms: {
//         uCanvas: { value: new THREE.Vector2(1, 1) },
//         uTime: { value: 0 },
//         uSpeed: { value: speed },
//         uRot: { value: new THREE.Vector2(1, 0) },
//         uColorCount: { value: colorVectors.filter(v => v.length() > 0).length },
//         uColors: { value: colorVectors },
//         uTransparent: { value: transparent ? 1 : 0 },
//         uScale: { value: scale },
//         uFrequency: { value: frequency },
//         uWarpStrength: { value: warpStrength },
//         uPointer: { value: new THREE.Vector2(0, 0) },
//         uMouseInfluence: { value: mouseInfluence },
//         uParallax: { value: parallax },
//         uNoise: { value: noise }
//       },
//       premultipliedAlpha: true,
//       transparent: true
//     });
//     materialRef.current = material;

//     const mesh = new THREE.Mesh(geometry, material);
//     scene.add(mesh);

//     const renderer = new THREE.WebGLRenderer({
//       antialias: false,
//       powerPreference: 'high-performance',
//       alpha: true,
//       stencil: false,
//       depth: false
//     });
//     rendererRef.current = renderer;

//     renderer.outputColorSpace = THREE.SRGBColorSpace;
//     renderer.setPixelRatio(1);
//     renderer.setClearColor(0x000000, transparent ? 0 : 1);
//     renderer.domElement.style.width = '100%';
//     renderer.domElement.style.height = '100%';
//     renderer.domElement.style.display = 'block';
//     container.appendChild(renderer.domElement);

//     const clock = new THREE.Clock();
//     clockRef.current = clock;

//     const handleResize = () => {
//       const w = container.clientWidth || 1;
//       const h = container.clientHeight || 1;
//       renderer.setSize(w, h, false);
//       material.uniforms.uCanvas.value.set(w, h);
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);

//     // 优化渲染循环 - 减少计算
//     let lastTime = 0;
//     const targetFPS = 60;
//     const frameInterval = 1000 / targetFPS;

//     const loop = (currentTime) => {
//       const elapsed = currentTime - lastTime;

//       // 限制帧率,避免过度渲染
//       if (elapsed >= frameInterval) {
//         lastTime = currentTime - (elapsed % frameInterval);

//         const dt = clock.getDelta();
//         const time = clock.elapsedTime;

//         material.uniforms.uTime.value = time;

//         // 缓存三角函数计算
//         const deg = (rotationRef.current % 360) + autoRotateRef.current * time;
//         const rad = (deg * Math.PI) / 180;
//         const c = Math.cos(rad);
//         const s = Math.sin(rad);
//         material.uniforms.uRot.value.set(c, s);

//         renderer.render(scene, camera);
//       }

//       rafRef.current = requestAnimationFrame(loop);
//     };

//     rafRef.current = requestAnimationFrame(loop);

//     return () => {
//       if (rafRef.current !== null) {
//         cancelAnimationFrame(rafRef.current);
//       }
//       window.removeEventListener('resize', handleResize);

//       geometry.dispose();
//       material.dispose();
//       renderer.dispose();

//       if (renderer.domElement && renderer.domElement.parentElement === container) {
//         container.removeChild(renderer.domElement);
//       }
//     };
//   }, []); // 空依赖数组 - 只初始化一次

//   // 更新 uniforms - 当 props 变化时
//   useEffect(() => {
//     const material = materialRef.current;
//     const renderer = rendererRef.current;
//     if (!material || !renderer) return;

//     rotationRef.current = rotation;
//     autoRotateRef.current = autoRotate;

//     material.uniforms.uSpeed.value = speed;
//     material.uniforms.uScale.value = scale;
//     material.uniforms.uFrequency.value = frequency;
//     material.uniforms.uWarpStrength.value = warpStrength;
//     material.uniforms.uMouseInfluence.value = mouseInfluence;
//     material.uniforms.uParallax.value = parallax;
//     material.uniforms.uNoise.value = noise;

//     material.uniforms.uColorCount.value = colorVectors.filter(v => v.length() > 0).length;
//     material.uniforms.uColors.value = colorVectors;

//     material.uniforms.uTransparent.value = transparent ? 1 : 0;
//     renderer.setClearColor(0x000000, transparent ? 0 : 1);
//   }, [
//     rotation,
//     autoRotate,
//     speed,
//     scale,
//     frequency,
//     warpStrength,
//     mouseInfluence,
//     parallax,
//     noise,
//     colorVectors,
//     transparent
//   ]);

//   return (
//     <div
//       ref={containerRef}
//       className={`w-full h-full relative overflow-hidden ${className}`}
//       style={style}
//     />
//   );
// }
import { useEffect, useRef, useMemo } from "react";
import * as THREE from "three";

const MAX_COLORS = 8;

const frag = `
#define MAX_COLORS ${MAX_COLORS}
uniform vec2 uCanvas;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uRot;
uniform int uColorCount;
uniform vec3 uColors[MAX_COLORS];
uniform int uTransparent;
uniform float uScale;
uniform float uFrequency;
uniform float uWarpStrength;
uniform vec2 uPointer;
uniform float uMouseInfluence;
uniform float uParallax;
uniform float uNoise;
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 p = vUv * 2.0 - 1.0;
  p += uPointer * uParallax * 0.1;
  vec2 rp = vec2(p.x * uRot.x - p.y * uRot.y, p.x * uRot.y + p.y * uRot.x);
  vec2 q = vec2(rp.x * (uCanvas.x / uCanvas.y), rp.y);
  q /= max(uScale, 0.0001);
  q /= 0.5 + 0.2 * dot(q, q);
  q += 0.2 * cos(t) - 7.56;

  vec3 col = vec3(0.0);
  float a = 1.0;

  if (uColorCount > 0) {
    vec2 s = q;
    vec3 sumCol = vec3(0.0);
    float cover = 0.0;
    for (int i = 0; i < MAX_COLORS; ++i) {
      if (i >= uColorCount) break;
      s -= 0.01;
      vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
      float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(i)) / 4.0);
      float kBelow = clamp(uWarpStrength, 0.0, 1.0);
      float kMix = pow(kBelow, 0.3);
      float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
      vec2 disp = (r - s) * kBelow;
      vec2 warped = s + disp * gain;
      float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(i)) / 4.0);
      float m = mix(m0, m1, kMix);
      float w = 1.0 - exp(-6.0 / exp(6.0 * m));
      sumCol += uColors[i] * w;
      cover = max(cover, w);
    }
    col = clamp(sumCol, 0.0, 1.0);
    a = uTransparent > 0 ? cover : 1.0;
  } else {
    vec2 s = q;
    for (int k = 0; k < 3; ++k) {
      s -= 0.01;
      vec2 r = sin(1.5 * (s.yx * uFrequency) + 2.0 * cos(s * uFrequency));
      float m0 = length(r + sin(5.0 * r.y * uFrequency - 3.0 * t + float(k)) / 4.0);
      float kBelow = clamp(uWarpStrength, 0.0, 1.0);
      float kMix = pow(kBelow, 0.3);
      float gain = 1.0 + max(uWarpStrength - 1.0, 0.0);
      vec2 disp = (r - s) * kBelow;
      vec2 warped = s + disp * gain;
      float m1 = length(warped + sin(5.0 * warped.y * uFrequency - 3.0 * t + float(k)) / 4.0);
      float m = mix(m0, m1, kMix);
      col[k] = 1.0 - exp(-6.0 / exp(6.0 * m));
    }
    a = uTransparent > 0 ? max(max(col.r, col.g), col.b) : 1.0;
  }

  if (uNoise > 0.0001) {
    float n = fract(sin(dot(gl_FragCoord.xy + vec2(uTime), vec2(12.9898, 78.233))) * 43758.5453123);
    col += (n - 0.5) * uNoise;
    col = clamp(col, 0.0, 1.0);
  }

  vec3 rgb = (uTransparent > 0) ? col * a : col;
  gl_FragColor = vec4(rgb, a);
}
`;

const vert = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

const hexToVec3 = (hex) => {
  const h = hex.replace("#", "").trim();
  const v =
    h.length === 3
      ? [
          parseInt(h[0] + h[0], 16),
          parseInt(h[1] + h[1], 16),
          parseInt(h[2] + h[2], 16),
        ]
      : [
          parseInt(h.slice(0, 2), 16),
          parseInt(h.slice(2, 4), 16),
          parseInt(h.slice(4, 6), 16),
        ];
  return new THREE.Vector3(v[0] / 255, v[1] / 255, v[2] / 255);
};

export default function ColorBends({
  className = "",
  style = {},
  rotation = 45,
  speed = 0.2,
  colors = [],
  transparent = true,
  autoRotate = 0,
  scale = 1,
  frequency = 1,
  warpStrength = 1,
  mouseInfluence = 1,
  parallax = 0.5,
  noise = 0.1,
}) {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const rafRef = useRef(null);
  const materialRef = useRef(null);
  const clockRef = useRef(null);
  const rotationRef = useRef(rotation);
  const autoRotateRef = useRef(autoRotate);

  const colorVectors = useMemo(() => {
    const arr = (colors || [])
      .filter(Boolean)
      .slice(0, MAX_COLORS)
      .map(hexToVec3);
    const result = Array.from(
      { length: MAX_COLORS },
      () => new THREE.Vector3(0, 0, 0)
    );
    arr.forEach((vec, i) => result[i].copy(vec));
    return result;
  }, [colors]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ✅ 添加 WebGL 支持检测
    let hasWebGL = false;
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      hasWebGL = !!gl;
    } catch (e) {
      console.error("WebGL detection failed:", e);
    }

    // ✅ 如果不支持 WebGL,显示降级背景
    if (!hasWebGL) {
      console.warn("WebGL not supported, using fallback background");
      container.innerHTML =
        '<div style="position: absolute; inset: 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%); opacity: 0.8;"></div>';
      return;
    }

    // ✅ 添加 try-catch 包裹整个初始化
    let scene, camera, geometry, material, mesh, renderer, clock;

    try {
      scene = new THREE.Scene();
      camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      geometry = new THREE.PlaneGeometry(2, 2);
      material = new THREE.ShaderMaterial({
        vertexShader: vert,
        fragmentShader: frag,
        uniforms: {
          uCanvas: { value: new THREE.Vector2(1, 1) },
          uTime: { value: 0 },
          uSpeed: { value: speed },
          uRot: { value: new THREE.Vector2(1, 0) },
          uColorCount: {
            value: colorVectors.filter((v) => v.length() > 0).length,
          },
          uColors: { value: colorVectors },
          uTransparent: { value: transparent ? 1 : 0 },
          uScale: { value: scale },
          uFrequency: { value: frequency },
          uWarpStrength: { value: warpStrength },
          uPointer: { value: new THREE.Vector2(0, 0) },
          uMouseInfluence: { value: mouseInfluence },
          uParallax: { value: parallax },
          uNoise: { value: noise },
        },
        premultipliedAlpha: true,
        transparent: true,
      });
      materialRef.current = material;

      mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      renderer = new THREE.WebGLRenderer({
        antialias: false,
        powerPreference: "high-performance",
        alpha: true,
        stencil: false,
        depth: false,
      });
      rendererRef.current = renderer;

      // ✅ 兼容性处理 - 关键修复!
      try {
        if (THREE.SRGBColorSpace !== undefined) {
          renderer.outputColorSpace = THREE.SRGBColorSpace;
        } else if (THREE.sRGBEncoding !== undefined) {
          renderer.outputEncoding = THREE.sRGBEncoding;
        }
      } catch (e) {
        console.warn("Color space setting failed:", e);
      }

      renderer.setPixelRatio(1);
      renderer.setClearColor(0x000000, transparent ? 0 : 1);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.display = "block";
      container.appendChild(renderer.domElement);

      clock = new THREE.Clock();
      clockRef.current = clock;

      const handleResize = () => {
        const w = container.clientWidth || 1;
        const h = container.clientHeight || 1;
        renderer.setSize(w, h, false);
        material.uniforms.uCanvas.value.set(w, h);
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      let lastTime = 0;
      const targetFPS = 60;
      const frameInterval = 1000 / targetFPS;

      const loop = (currentTime) => {
        const elapsed = currentTime - lastTime;

        if (elapsed >= frameInterval) {
          lastTime = currentTime - (elapsed % frameInterval);

          const dt = clock.getDelta();
          const time = clock.elapsedTime;

          material.uniforms.uTime.value = time;

          const deg =
            (rotationRef.current % 360) + autoRotateRef.current * time;
          const rad = (deg * Math.PI) / 180;
          const c = Math.cos(rad);
          const s = Math.sin(rad);
          material.uniforms.uRot.value.set(c, s);

          renderer.render(scene, camera);
        }

        rafRef.current = requestAnimationFrame(loop);
      };

      rafRef.current = requestAnimationFrame(loop);

      // Cleanup
      return () => {
        if (rafRef.current !== null) {
          cancelAnimationFrame(rafRef.current);
        }
        window.removeEventListener("resize", handleResize);

        if (geometry) geometry.dispose();
        if (material) material.dispose();
        if (renderer) {
          renderer.dispose();
          if (
            renderer.domElement &&
            renderer.domElement.parentElement === container
          ) {
            container.removeChild(renderer.domElement);
          }
        }
      };
    } catch (error) {
      // ✅ 捕获所有初始化错误
      console.error("ColorBends initialization failed:", error);
      container.innerHTML =
        '<div style="position: absolute; inset: 0; background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%); opacity: 0.8;"></div>';
      return () => {}; // 空的 cleanup 函数
    }
  }, []);

  useEffect(() => {
    const material = materialRef.current;
    const renderer = rendererRef.current;
    if (!material || !renderer) return;

    rotationRef.current = rotation;
    autoRotateRef.current = autoRotate;

    material.uniforms.uSpeed.value = speed;
    material.uniforms.uScale.value = scale;
    material.uniforms.uFrequency.value = frequency;
    material.uniforms.uWarpStrength.value = warpStrength;
    material.uniforms.uMouseInfluence.value = mouseInfluence;
    material.uniforms.uParallax.value = parallax;
    material.uniforms.uNoise.value = noise;

    material.uniforms.uColorCount.value = colorVectors.filter(
      (v) => v.length() > 0
    ).length;
    material.uniforms.uColors.value = colorVectors;

    material.uniforms.uTransparent.value = transparent ? 1 : 0;
    renderer.setClearColor(0x000000, transparent ? 0 : 1);
  }, [
    rotation,
    autoRotate,
    speed,
    scale,
    frequency,
    warpStrength,
    mouseInfluence,
    parallax,
    noise,
    colorVectors,
    transparent,
  ]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full relative overflow-hidden ${className}`}
      style={style}
    />
  );
}
