'use client'

import { useEffect, useRef } from 'react'
import { Renderer, Program, Mesh, Color, Triangle } from 'ogl'

const VERT = `#version 300 es
precision highp float;
in vec2 uv;
in vec3 position;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}`

const FRAG = `#version 300 es
precision highp float;
uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uColorStops[3];
out vec4 fragColor;
void main() {
  vec2 st = gl_FragCoord.xy / uResolution;
  vec3 color = mix(uColorStops[0], uColorStops[1], st.x);
  color = mix(color, uColorStops[2], st.y);
  fragColor = vec4(color, 1.0);
}`

const Aurora = ({
  colorStops,
  blend,
  amplitude,
  speed,
}: {
  colorStops: string[]
  blend: number
  amplitude: number
  speed: number
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new Renderer({ canvas })
    const gl = renderer.gl
    gl.clearColor(0, 0, 0, 0)

    const program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: [gl.canvas.width, gl.canvas.height] },
        uColorStops: { value: colorStops.map((color) => new Color(color)) },
      },
    })

    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program })

    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      program.uniforms.uResolution.value = [gl.canvas.width, gl.canvas.height]
    }
    window.addEventListener('resize', resize)
    resize()

    let time = 0
    const update = () => {
      time += speed
      program.uniforms.uTime.value = time
      renderer.render({ scene: mesh })
      requestAnimationFrame(update)
    }
    update()

    return () => {
      window.removeEventListener('resize', resize)
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
  }, [colorStops, speed])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}
    />
  )
}

export default Aurora
