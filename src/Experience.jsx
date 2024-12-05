import { OrbitControls, useTexture, Html } from "@react-three/drei"
import { useState } from "react"

export default function Experience() {
  const [hovered, setHovered] = useState(false)
  const normalMap = useTexture("./textures/waternormals.jpeg")

  return (
    <>
      <OrbitControls />
      <mesh
        rotation={[Math.PI / 4, Math.PI / 4, Math.PI / 2]}
        position={[0, 0, 0]}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial
          metalness={1}
          roughness={0.12}
          normalMap={normalMap}
          normalScale={[0.2, 0.2]}
        />
      </mesh>

      {hovered && (
        <Html>
          <div
            style={{
              position: "fixed",
              // left: "10%", // Center horizontally
              // top: "30%", // Adjust vertical position as needed
              background: "white",
              border: "1px solid black",
              padding: "10px 20px",
              color: "#000000",
              borderRadius: "1px",
              transform: "translate(-350%, -350%)", // Center the tag
              pointerEvents: "none",
              zIndex: 1000,
            }}
          >
            Hover Tag
          </div>
        </Html>
      )}
    </>
  )
}
