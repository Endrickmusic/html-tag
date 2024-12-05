import { OrbitControls, useTexture, Html } from "@react-three/drei"
import { useState } from "react"

export default function Experience() {
  const [hovered, setHovered] = useState(false)
  const [pointerPosition, setPointerPosition] = useState([0, 0, 0])
  const normalMap = useTexture("./textures/waternormals.jpeg")

  return (
    <>
      <OrbitControls />
      <mesh
        rotation={[Math.PI / 4, Math.PI / 4, Math.PI / 2]}
        position={[0, 0, 0]}
        onPointerEnter={(e) => {
          setHovered(true)
          setPointerPosition([e.point.x, e.point.y, e.point.z])
        }}
        onPointerMove={(e) => {
          setPointerPosition([e.point.y, -e.point.x, e.point.z])
        }}
        onPointerLeave={() => setHovered(false)}
      >
        {hovered && (
          <Html position={pointerPosition}>
            <div
              style={{
                background: "black",
                padding: "8px",
                color: "white",
                borderRadius: "4px",
                transform: "translate(-50%, -100%)",
                pointerEvents: "none",
              }}
            >
              Hover Tag
            </div>
          </Html>
        )}
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial
          metalness={1}
          roughness={0.12}
          normalMap={normalMap}
          normalScale={[0.2, 0.2]}
        />
      </mesh>
    </>
  )
}
