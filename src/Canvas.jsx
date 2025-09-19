import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, useTexture, AccumulativeShadows, RandomizedLight, Decal, Enviroment, Center } from '@react-three/drei'
import { state } from './store.js'
import './App.css'

export const App = ({ position = [0, 0, 2.5], fov = 25 }) => (
  <Canvas shadows camera={{ position, fov }} gl={{ preserveDrawingBuffer: true }} eventSource={document.getElementById('root')} eventPrefix='client'>
    <ambientLight intensity={0.5 * Math.PI} />
    <Enviroment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/potsdamer_platz_1k.hdr"/>
    <CameraRig>
      <Backdrop />
      <Center>
        <Shirt/>
      </Center>
    </CameraRig>
  </Canvas>
)