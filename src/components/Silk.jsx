// import { useRef, useEffect } from "react";
// import * as THREE from "three";

// const vertexShader = `
// varying vec2 vUv;
// varying vec3 vPosition;

// void main() {
//   vPosition = position;
//   vUv = uv;
//   gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
// }
// `;

// const fragmentShader = `
// varying vec2 vUv;
// varying vec3 vPosition;

// uniform float uTime;
// uniform vec3  uColor;
// uniform float uSpeed;
// uniform float uScale;
// uniform float uRotation;
// uniform float uNoiseIntensity;

// const float e = 2.71828182845904523536;

// float noise(vec2 texCoord) {
//   float G = e;
//   vec2  r = (G * sin(G * texCoord));
//   return fract(r.x * r.y * (1.0 + texCoord.x));
// }

// vec2 rotateUvs(vec2 uv, float angle) {
//   float c = cos(angle);
//   float s = sin(angle);
//   mat2  rot = mat2(c, -s, s, c);
//   return rot * uv;
// }

// void main() {
//   float rnd        = noise(gl_FragCoord.xy);
//   vec2  uv         = rotateUvs(vUv * uScale, uRotation);
//   vec2  tex        = uv * uScale;
//   float tOffset    = uSpeed * uTime;

//   tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

//   float pattern = 0.6 +
//                   0.4 * sin(5.0 * (tex.x + tex.y +
//                                    cos(3.0 * tex.x + 5.0 * tex.y) +
//                                    0.02 * tOffset) +
//                            sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

//   vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
//   col.a = 1.0;
//   gl_FragColor = col;
// }
// `;

// const hexToRGB = (hex) => {
//   hex = hex.replace("#", "");
//   return new THREE.Vector3(
//     parseInt(hex.slice(0, 2), 16) / 255,
//     parseInt(hex.slice(2, 4), 16) / 255,
//     parseInt(hex.slice(4, 6), 16) / 255
//   );
// };

// export default function Silk({
//   speed = 5,
//   scale = 1,
//   color = "#7B7481",
//   noiseIntensity = 1.5,
//   rotation = 0,
//   className = "",
//   style = {},
// }) {
//   const containerRef = useRef(null);
//   const rendererRef = useRef(null);
//   const rafRef = useRef(null);
//   const materialRef = useRef(null);
//   const clockRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     // 创建 Scene 和 Camera
//     const scene = new THREE.Scene();
//     const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

//     // 创建 Geometry
//     const geometry = new THREE.PlaneGeometry(2, 2);

//     // 创建 Material
//     const material = new THREE.ShaderMaterial({
//       vertexShader,
//       fragmentShader,
//       uniforms: {
//         uTime: { value: 0 },
//         uSpeed: { value: speed },
//         uScale: { value: scale },
//         uRotation: { value: rotation },
//         uNoiseIntensity: { value: noiseIntensity },
//         uColor: { value: hexToRGB(color) },
//       },
//       transparent: true,
//     });
//     materialRef.current = material;

//     // 创建 Mesh
//     const mesh = new THREE.Mesh(geometry, material);
//     scene.add(mesh);

//     // 创建 Renderer
//     const renderer = new THREE.WebGLRenderer({
//       antialias: false,
//       powerPreference: "high-performance",
//       alpha: true,
//     });
//     rendererRef.current = renderer;

//     renderer.outputColorSpace = THREE.SRGBColorSpace;
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
//     renderer.setClearColor(0x000000, 0);
//     renderer.domElement.style.width = "100%";
//     renderer.domElement.style.height = "100%";
//     renderer.domElement.style.display = "block";

//     container.appendChild(renderer.domElement);

//     // 创建 Clock
//     const clock = new THREE.Clock();
//     clockRef.current = clock;

//     // 处理 Resize
//     const handleResize = () => {
//       const w = container.clientWidth || 1;
//       const h = container.clientHeight || 1;
//       renderer.setSize(w, h, false);
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     // 渲染循环
//     const loop = () => {
//       const delta = clock.getDelta();
//       material.uniforms.uTime.value += 0.1 * delta;

//       renderer.render(scene, camera);
//       rafRef.current = requestAnimationFrame(loop);
//     };

//     // ✅ 立即开始渲染循环
//     rafRef.current = requestAnimationFrame(loop);

//     // Cleanup
//     return () => {
//       if (rafRef.current !== null) {
//         cancelAnimationFrame(rafRef.current);
//       }
//       window.removeEventListener("resize", handleResize);

//       geometry.dispose();
//       material.dispose();
//       renderer.dispose();

//       if (
//         renderer.domElement &&
//         renderer.domElement.parentElement === container
//       ) {
//         container.removeChild(renderer.domElement);
//       }
//     };
//   }, [speed, scale, rotation, noiseIntensity, color]);

//   // 更新 uniforms
//   useEffect(() => {
//     if (!materialRef.current) return;

//     const material = materialRef.current;
//     material.uniforms.uSpeed.value = speed;
//     material.uniforms.uScale.value = scale;
//     material.uniforms.uRotation.value = rotation;
//     material.uniforms.uNoiseIntensity.value = noiseIntensity;
//     material.uniforms.uColor.value = hexToRGB(color);
//   }, [speed, scale, rotation, noiseIntensity, color]);

//   return (
//     <div
//       ref={containerRef}
//       className={`w-full h-full relative overflow-hidden ${className}`}
//       style={style}
//     />
//   );
// }
import { useRef, useEffect } from "react";
import * as THREE from "three";

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

const float e = 2.71828182845904523536;

float noise(vec2 texCoord) {
  float G = e;
  vec2  r = (G * sin(G * texCoord));
  return fract(r.x * r.y * (1.0 + texCoord.x));
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2  rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  float rnd        = noise(gl_FragCoord.xy);
  vec2  uv         = rotateUvs(vUv * uScale, uRotation);
  vec2  tex        = uv * uScale;
  float tOffset    = uSpeed * uTime;

  tex.y += 0.03 * sin(8.0 * tex.x - tOffset);

  float pattern = 0.6 +
                  0.4 * sin(5.0 * (tex.x + tex.y +
                                   cos(3.0 * tex.x + 5.0 * tex.y) +
                                   0.02 * tOffset) +
                           sin(20.0 * (tex.x + tex.y - 0.1 * tOffset)));

  vec4 col = vec4(uColor, 1.0) * vec4(pattern) - rnd / 15.0 * uNoiseIntensity;
  col.a = 1.0;
  gl_FragColor = col;
}
`;

const hexToRGB = (hex) => {
  hex = hex.replace("#", "");
  return new THREE.Vector3(
    parseInt(hex.slice(0, 2), 16) / 255,
    parseInt(hex.slice(2, 4), 16) / 255,
    parseInt(hex.slice(4, 6), 16) / 255
  );
};

export default function Silk({
  speed = 5,
  scale = 1,
  color = "#7B7481",
  noiseIntensity = 1.5,
  rotation = 0,
  className = "",
  style = {},
}) {
  const containerRef = useRef(null);
  const rendererRef = useRef(null);
  const rafRef = useRef(null);
  const materialRef = useRef(null);
  const clockRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ✅ WebGL 支持检测
    let hasWebGL = false;
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      hasWebGL = !!gl;
    } catch (e) {
      console.error("WebGL detection failed:", e);
    }

    if (!hasWebGL) {
      console.warn("WebGL not supported, using fallback background");
      container.innerHTML =
        '<div style="position: absolute; inset: 0; background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%); opacity: 0.8;"></div>';
      return;
    }

    // ✅ 用 try-catch 包裹整个初始化
    try {
      // 创建 Scene 和 Camera
      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

      // 创建 Geometry
      const geometry = new THREE.PlaneGeometry(2, 2);

      // 创建 Material
      const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
          uTime: { value: 0 },
          uSpeed: { value: speed },
          uScale: { value: scale },
          uRotation: { value: rotation },
          uNoiseIntensity: { value: noiseIntensity },
          uColor: { value: hexToRGB(color) },
        },
        transparent: true,
      });
      materialRef.current = material;

      // 创建 Mesh
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      // 创建 Renderer
      const renderer = new THREE.WebGLRenderer({
        antialias: false,
        powerPreference: "high-performance",
        alpha: true,
      });
      rendererRef.current = renderer;

      // ✅ 兼容性处理 outputColorSpace
      try {
        if (THREE.SRGBColorSpace !== undefined) {
          renderer.outputColorSpace = THREE.SRGBColorSpace;
        } else if (THREE.sRGBEncoding !== undefined) {
          renderer.outputEncoding = THREE.sRGBEncoding;
        }
      } catch (e) {
        console.warn("Color space setting failed:", e);
      }

      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setClearColor(0x000000, 0);
      renderer.domElement.style.width = "100%";
      renderer.domElement.style.height = "100%";
      renderer.domElement.style.display = "block";

      container.appendChild(renderer.domElement);

      // 创建 Clock
      const clock = new THREE.Clock();
      clockRef.current = clock;

      // 处理 Resize
      const handleResize = () => {
        const w = container.clientWidth || 1;
        const h = container.clientHeight || 1;
        renderer.setSize(w, h, false);
      };

      handleResize();
      window.addEventListener("resize", handleResize);

      // 渲染循环
      const loop = () => {
        const delta = clock.getDelta();
        material.uniforms.uTime.value += 0.1 * delta;

        renderer.render(scene, camera);
        rafRef.current = requestAnimationFrame(loop);
      };

      // 立即开始渲染循环
      rafRef.current = requestAnimationFrame(loop);

      // Cleanup
      return () => {
        if (rafRef.current !== null) {
          cancelAnimationFrame(rafRef.current);
        }
        window.removeEventListener("resize", handleResize);

        geometry.dispose();
        material.dispose();
        renderer.dispose();

        if (
          renderer.domElement &&
          renderer.domElement.parentElement === container
        ) {
          container.removeChild(renderer.domElement);
        }
      };
    } catch (error) {
      // ✅ 捕获所有初始化错误
      console.error("Silk initialization failed:", error);
      container.innerHTML =
        '<div style="position: absolute; inset: 0; background: linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%); opacity: 0.8;"></div>';
      return () => {}; // 返回空的 cleanup 函数
    }
  }, [speed, scale, rotation, noiseIntensity, color]);

  // 更新 uniforms
  useEffect(() => {
    if (!materialRef.current) return;

    const material = materialRef.current;
    material.uniforms.uSpeed.value = speed;
    material.uniforms.uScale.value = scale;
    material.uniforms.uRotation.value = rotation;
    material.uniforms.uNoiseIntensity.value = noiseIntensity;
    material.uniforms.uColor.value = hexToRGB(color);
  }, [speed, scale, rotation, noiseIntensity, color]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full relative overflow-hidden ${className}`}
      style={style}
    />
  );
}
