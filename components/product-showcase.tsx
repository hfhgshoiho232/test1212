'use client'

import { useRef, Suspense } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Mesh } from 'three'

function Model() {
  const meshRef = useRef<Mesh>(null)
  const { scene } = useGLTF('/assets/3d/duck.glb')

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
    }
  })

  return <primitive ref={meshRef} object={scene} scale={2} />
}

export default function ProductShowcase() {
  return (
    <Suspense fallback={null}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Model />
    </Suspense>
  )
}

useGLTF.preload('/assets/3d/duck.glb')

