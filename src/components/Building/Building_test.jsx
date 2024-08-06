/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 .\Building_test.gltf 
*/

import React, { useEffect, useState, useRef } from "react"
import { useGLTF, PerspectiveCamera, useAnimations } from "@react-three/drei"
import { PlayuseDoors } from "../events"

export default function Model(props) {
  const group = React.useRef()
  const { nodes, materials, animations } = useGLTF("src/components/Building/Building_test.gltf")
  const { setAnimations, animationIndex } = PlayuseDoors()
  const { actions, names } = useAnimations(animations, group)
  console.log(names)

  useEffect(() => {
    setAnimations(names)
  }, [names])

  useEffect(() => {
    actions[names[animationIndex]].reset().fadeIn(0.5).play()
  }, [animationIndex])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="PlantMonstera001_Empty002" position={[-0.058, 10.653, 2.242]} scale={[1.147, 1.202, 1.147]}>
          <group name="PlantMonsteraVase001001">
            <mesh name="Untitled000" geometry={nodes.Untitled000.geometry} material={materials.PlantMonsteraVase001_2K} />
            <mesh name="Untitled000_1" geometry={nodes.Untitled000_1.geometry} material={materials.PlantMonstera001_2K} />
          </group>
        </group>
        <group name="Instance" position={[-0.922, 8.779, 1.695]} rotation={[0, 1.571, 0]} scale={[1, 1.009, 0.996]}>
          <group name="Chair">
            <mesh name="Plane026" geometry={nodes.Plane026.geometry} material={materials["Chair.001"]} />
            <mesh name="Plane026_1" geometry={nodes.Plane026_1.geometry} material={materials["Table_legs.001"]} />
            <mesh name="Plane026_2" geometry={nodes.Plane026_2.geometry} material={materials["Seat.001"]} />
          </group>
          <group name="Chair_1" position={[0.702, 0.127, -0.061]} scale={[1, 0.991, 1.004]}>
            <mesh name="Plane026" geometry={nodes.Plane026.geometry} material={materials["Chair.001"]} />
            <mesh name="Plane026_1" geometry={nodes.Plane026_1.geometry} material={materials["Table_legs.001"]} />
            <mesh name="Plane026_2" geometry={nodes.Plane026_2.geometry} material={materials["Seat.001"]} />
          </group>
          <group name="Chair_2" position={[0.321, 0.127, -0.061]} scale={[1, 0.991, 1.004]}>
            <mesh name="Plane026" geometry={nodes.Plane026.geometry} material={materials["Chair.001"]} />
            <mesh name="Plane026_1" geometry={nodes.Plane026_1.geometry} material={materials["Table_legs.001"]} />
            <mesh name="Plane026_2" geometry={nodes.Plane026_2.geometry} material={materials["Seat.001"]} />
          </group>
          <group name="Chair_3" position={[-0.061, 0.127, -0.061]} scale={[1, 0.991, 1.004]}>
            <mesh name="Plane026" geometry={nodes.Plane026.geometry} material={materials["Chair.001"]} />
            <mesh name="Plane026_1" geometry={nodes.Plane026_1.geometry} material={materials["Table_legs.001"]} />
            <mesh name="Plane026_2" geometry={nodes.Plane026_2.geometry} material={materials["Seat.001"]} />
          </group>
          <group name="Chair_4" position={[-0.442, 0.127, -0.061]} scale={[1, 0.991, 1.004]}>
            <mesh name="Plane026" geometry={nodes.Plane026.geometry} material={materials["Chair.001"]} />
            <mesh name="Plane026_1" geometry={nodes.Plane026_1.geometry} material={materials["Table_legs.001"]} />
            <mesh name="Plane026_2" geometry={nodes.Plane026_2.geometry} material={materials["Seat.001"]} />
          </group>
          <group name="Chair_5" position={[-0.824, 0.127, -0.061]} scale={[1, 0.991, 1.004]}>
            <mesh name="Plane026" geometry={nodes.Plane026.geometry} material={materials["Chair.001"]} />
            <mesh name="Plane026_1" geometry={nodes.Plane026_1.geometry} material={materials["Table_legs.001"]} />
            <mesh name="Plane026_2" geometry={nodes.Plane026_2.geometry} material={materials["Seat.001"]} />
          </group>
          <group name="Chair_6" position={[0.702, 0.127, -0.41]} scale={[1, 0.991, 1.004]}>
            <mesh name="Plane026" geometry={nodes.Plane026.geometry} material={materials["Chair.001"]} />
            <mesh name="Plane026_1" geometry={nodes.Plane026_1.geometry} material={materials["Table_legs.001"]} />
            <mesh name="Plane026_2" geometry={nodes.Plane026_2.geometry} material={materials["Seat.001"]} />
          </group>
          <group name="Chair_7" position={[0.321, 0.127, -0.41]} scale={[1, 0.991, 1.004]}>
            <mesh name="Plane026" geometry={nodes.Plane026.geometry} material={materials["Chair.001"]} />
            <mesh name="Plane026_1" geometry={nodes.Plane026_1.geometry} material={materials["Table_legs.001"]} />
            <mesh name="Plane026_2" geometry={nodes.Plane026_2.geometry} material={materials["Seat.001"]} />
          </group>
          <group name="Chair_8" position={[-0.061, 0.127, -0.41]} scale={[1, 0.991, 1.004]}>
            <mesh name="Plane026" geometry={nodes.Plane026.geometry} material={materials["Chair.001"]} />
            <mesh name="Plane026_1" geometry={nodes.Plane026_1.geometry} material={materials["Table_legs.001"]} />
            <mesh name="Plane026_2" geometry={nodes.Plane026_2.geometry} material={materials["Seat.001"]} />
          </group>
          <group name="Chair_9" position={[-0.442, 0.127, -0.41]} scale={[1, 0.991, 1.004]}>
            <mesh name="Plane026" geometry={nodes.Plane026.geometry} material={materials["Chair.001"]} />
            <mesh name="Plane026_1" geometry={nodes.Plane026_1.geometry} material={materials["Table_legs.001"]} />
            <mesh name="Plane026_2" geometry={nodes.Plane026_2.geometry} material={materials["Seat.001"]} />
          </group>
          <group name="Chair_10" position={[-0.824, 0.127, -0.41]} scale={[1, 0.991, 1.004]}>
            <mesh name="Plane026" geometry={nodes.Plane026.geometry} material={materials["Chair.001"]} />
            <mesh name="Plane026_1" geometry={nodes.Plane026_1.geometry} material={materials["Table_legs.001"]} />
            <mesh name="Plane026_2" geometry={nodes.Plane026_2.geometry} material={materials["Seat.001"]} />
          </group>
          <group name="Chair_11" position={[0.702, 0.127, -0.76]} scale={[1, 0.991, 1.004]}>
            <mesh name="Plane026" geometry={nodes.Plane026.geometry} material={materials["Chair.001"]} />
            <mesh name="Plane026_1" geometry={nodes.Plane026_1.geometry} material={materials["Table_legs.001"]} />
            <mesh name="Plane026_2" geometry={nodes.Plane026_2.geometry} material={materials["Seat.001"]} />
          </group>
          <group name="Chair_12" position={[0.321, 0.127, -0.76]} scale={[1, 0.991, 1.004]}>
            <mesh name="Plane026" geometry={nodes.Plane026.geometry} material={materials["Chair.001"]} />
            <mesh name="Plane026_1" geometry={nodes.Plane026_1.geometry} material={materials["Table_legs.001"]} />
            <mesh name="Plane026_2" geometry={nodes.Plane026_2.geometry} material={materials["Seat.001"]} />
          </group>
          <group name="Chair_13" position={[-0.061, 0.127, -0.76]} scale={[1, 0.991, 1.004]}>
            <mesh name="Plane026" geometry={nodes.Plane026.geometry} material={materials["Chair.001"]} />
            <mesh name="Plane026_1" geometry={nodes.Plane026_1.geometry} material={materials["Table_legs.001"]} />
            <mesh name="Plane026_2" geometry={nodes.Plane026_2.geometry} material={materials["Seat.001"]} />
          </group>
          <group name="Chair_14" position={[-0.442, 0.127, -0.76]} scale={[1, 0.991, 1.004]}>
            <mesh name="Plane026" geometry={nodes.Plane026.geometry} material={materials["Chair.001"]} />
            <mesh name="Plane026_1" geometry={nodes.Plane026_1.geometry} material={materials["Table_legs.001"]} />
            <mesh name="Plane026_2" geometry={nodes.Plane026_2.geometry} material={materials["Seat.001"]} />
          </group>
          <group name="Chair_15" position={[-0.824, 0.127, -0.76]} scale={[1, 0.991, 1.004]}>
            <mesh name="Plane026" geometry={nodes.Plane026.geometry} material={materials["Chair.001"]} />
            <mesh name="Plane026_1" geometry={nodes.Plane026_1.geometry} material={materials["Table_legs.001"]} />
            <mesh name="Plane026_2" geometry={nodes.Plane026_2.geometry} material={materials["Seat.001"]} />
          </group>
          <group name="Chair_16" position={[0.702, 0.127, -1.109]} scale={[1, 0.991, 1.004]}>
            <mesh name="Plane026" geometry={nodes.Plane026.geometry} material={materials["Chair.001"]} />
            <mesh name="Plane026_1" geometry={nodes.Plane026_1.geometry} material={materials["Table_legs.001"]} />
            <mesh name="Plane026_2" geometry={nodes.Plane026_2.geometry} material={materials["Seat.001"]} />
          </group>
          <group name="Chair_17" position={[0.321, 0.127, -1.109]} scale={[1, 0.991, 1.004]}>
            <mesh name="Plane026" geometry={nodes.Plane026.geometry} material={materials["Chair.001"]} />
            <mesh name="Plane026_1" geometry={nodes.Plane026_1.geometry} material={materials["Table_legs.001"]} />
            <mesh name="Plane026_2" geometry={nodes.Plane026_2.geometry} material={materials["Seat.001"]} />
          </group>
          <group name="Chair_18" position={[-0.061, 0.127, -1.109]} scale={[1, 0.991, 1.004]}>
            <mesh name="Plane026" geometry={nodes.Plane026.geometry} material={materials["Chair.001"]} />
            <mesh name="Plane026_1" geometry={nodes.Plane026_1.geometry} material={materials["Table_legs.001"]} />
            <mesh name="Plane026_2" geometry={nodes.Plane026_2.geometry} material={materials["Seat.001"]} />
          </group>
          <group name="Chair_19" position={[-0.442, 0.127, -1.109]} scale={[1, 0.991, 1.004]}>
            <mesh name="Plane026" geometry={nodes.Plane026.geometry} material={materials["Chair.001"]} />
            <mesh name="Plane026_1" geometry={nodes.Plane026_1.geometry} material={materials["Table_legs.001"]} />
            <mesh name="Plane026_2" geometry={nodes.Plane026_2.geometry} material={materials["Seat.001"]} />
          </group>
          <group name="Chair_20" position={[-0.824, 0.127, -1.109]} scale={[1, 0.991, 1.004]}>
            <mesh name="Plane026" geometry={nodes.Plane026.geometry} material={materials["Chair.001"]} />
            <mesh name="Plane026_1" geometry={nodes.Plane026_1.geometry} material={materials["Table_legs.001"]} />
            <mesh name="Plane026_2" geometry={nodes.Plane026_2.geometry} material={materials["Seat.001"]} />
          </group>
        </group>
        <PerspectiveCamera name="Camera" makeDefault={false} far={1000} near={0.1} fov={39.598} position={[-2.598, 12.47, -3.117]} rotation={[-2.895, -0.38, -3.048]} />
        <group name="Chairs_H" position={[-0.25, 10.849, 1.512]} rotation={[0, 1.571, 0]} scale={[0.135, 0.103, 0.097]}>
          <mesh name="Plane003_1" geometry={nodes.Plane003_1.geometry} material={materials.Seat} />
          <mesh name="Plane003_2" geometry={nodes.Plane003_2.geometry} material={materials.Chair} />
          <mesh name="Plane003_3" geometry={nodes.Plane003_3.geometry} material={materials.Table_legs} />
        </group>
        <group name="Clock" position={[-0.978, 11.952, 2.54]} rotation={[Math.PI / 2, 0, 0]} scale={[0.087, 0.087, 0.091]}>
          <mesh name="Circle" geometry={nodes.Circle.geometry} material={materials["Clock-rim"]} />
          <mesh name="Circle_1" geometry={nodes.Circle_1.geometry} material={materials["Clock face"]} />
        </group>
        <group name="Laptop_H" position={[-0.475, 11.086, 1.505]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[-2.136, -2.136, -2.239]}>
          <mesh name="Plane016" geometry={nodes.Plane016.geometry} material={materials.Screen} />
          <mesh name="Plane016_1" geometry={nodes.Plane016_1.geometry} material={materials.Lap_bdy} />
          <mesh name="Plane016_2" geometry={nodes.Plane016_2.geometry} material={materials.Key_tch} />
        </group>
        <group name="Peers" position={[-0.23, 10.903, 1.511]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.29, 0.29, 0.304]}>
          <mesh name="Cube005" geometry={nodes.Cube005.geometry} material={materials.Skin_1} />
          <mesh name="Cube005_1" geometry={nodes.Cube005_1.geometry} material={materials.Hair} />
          <mesh name="Cube005_2" geometry={nodes.Cube005_2.geometry} material={materials.Shoes} />
          <mesh name="Cube005_3" geometry={nodes.Cube005_3.geometry} material={materials.Pant_1} />
          <mesh name="Cube005_4" geometry={nodes.Cube005_4.geometry} material={materials.Shirt_1} />
          <mesh name="Cube005_5" geometry={nodes.Cube005_5.geometry} material={materials.Pants_g} />
          <mesh name="Cube005_6" geometry={nodes.Cube005_6.geometry} material={materials.Material} />
          <mesh name="Cube005_7" geometry={nodes.Cube005_7.geometry} material={materials.Shirt_2} />
          <mesh name="Cube005_8" geometry={nodes.Cube005_8.geometry} material={materials["Material.002"]} />
        </group>
        <group name="Room_H" position={[-0.975, 10.65, 1.535]} scale={[1.255, 0.875, 1.029]}>
          <mesh name="Plane012" geometry={nodes.Plane012.geometry} material={materials["Material.004"]} />
          <mesh name="Plane012_1" geometry={nodes.Plane012_1.geometry} material={materials["Material.009"]} />
          <mesh name="Plane012_2" geometry={nodes.Plane012_2.geometry} material={materials["Material.010"]} />
          <mesh name="Plane012_3" geometry={nodes.Plane012_3.geometry} material={materials["Material.011"]} />
          <mesh name="Plane012_4" geometry={nodes.Plane012_4.geometry} material={materials["Material.006"]} />
          <mesh name="Plane012_5" geometry={nodes.Plane012_5.geometry} material={materials["Material.001"]} />
        </group>
        <group name="Table" position={[-0.861, 10.964, 1.573]} scale={[0.382, 0.4, 0.382]}>
          <mesh name="Cylinder" geometry={nodes.Cylinder.geometry} material={materials.Table_legs} />
          <mesh name="Cylinder_1" geometry={nodes.Cylinder_1.geometry} material={materials.Table} />
          <mesh name="Cylinder_2" geometry={nodes.Cylinder_2.geometry} material={materials.Paper} />
        </group>
        <group name="Stage" position={[-0.922, 8.779, 1.695]} rotation={[0, 1.571, 0]} scale={[1, 1.009, 0.996]}>
          <mesh name="Plane030" geometry={nodes.Plane030.geometry} material={materials["Material.013"]} />
          <mesh name="Plane030_1" geometry={nodes.Plane030_1.geometry} material={materials["Material.012"]} />
        </group>
        <group name="Screen" position={[-0.922, 8.779, 1.695]} rotation={[0, 1.571, 0]} scale={[1, 1.009, 0.996]}>
          <mesh name="Cylinder002" geometry={nodes.Cylinder002.geometry} material={materials.Black} />
          <mesh name="Cylinder002_1" geometry={nodes.Cylinder002_1.geometry} material={materials["Q-Screen"]} />
        </group>
        <group name="Rom" position={[-0.922, 8.779, 1.695]} rotation={[0, 1.571, 0]} scale={[1, 0.992, 0.996]}>
          <mesh name="Plane_1" geometry={nodes.Plane_1.geometry} material={materials["Material.008"]} />
          <mesh name="Plane_2" geometry={nodes.Plane_2.geometry} material={materials["Material.003"]} />
        </group>
        <group name="Proj_stand" position={[-0.922, 8.779, 1.695]} rotation={[0, 1.571, 0]} scale={[1, 1.009, 0.996]}>
          <mesh name="Plane029" geometry={nodes.Plane029.geometry} material={materials.Branco} />
          <mesh name="Plane029_1" geometry={nodes.Plane029_1.geometry} material={materials.Cinza} />
          <mesh name="Plane029_2" geometry={nodes.Plane029_2.geometry} material={materials.Prata} />
        </group>
        <group name="Lap_body004" position={[-1.167, 8.992, 1.758]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[-1.136, -1.132, -1.147]}>
          <mesh name="Plane024" geometry={nodes.Plane024.geometry} material={materials["Screen.002"]} />
          <mesh name="Plane024_1" geometry={nodes.Plane024_1.geometry} material={materials["Lap_bdy.002"]} />
          <mesh name="Plane024_2" geometry={nodes.Plane024_2.geometry} material={materials["Key_tch.002"]} />
        </group>
        <group name="Quiz_Students" position={[-0.922, 8.779, 1.695]} scale={0.13}>
          <mesh name="Cone" geometry={nodes.Cone.geometry} material={materials.Suit} />
          <mesh name="Cone_1" geometry={nodes.Cone_1.geometry} material={materials.Skin} />
          <mesh name="Cone_2" geometry={nodes.Cone_2.geometry} material={materials["Material.017"]} />
          <mesh name="Cone_3" geometry={nodes.Cone_3.geometry} material={materials["Hair.003"]} />
          <mesh name="Cone_4" geometry={nodes.Cone_4.geometry} material={materials.PretoBasico} />
          <mesh name="Cone_5" geometry={nodes.Cone_5.geometry} material={materials["Skin_1.001"]} />
          <mesh name="Cone_6" geometry={nodes.Cone_6.geometry} material={materials["Hair.002"]} />
          <mesh name="Cone_7" geometry={nodes.Cone_7.geometry} material={materials["Shoes.001"]} />
          <mesh name="Cone_8" geometry={nodes.Cone_8.geometry} material={materials.shirt_bq4} />
          <mesh name="Cone_9" geometry={nodes.Cone_9.geometry} material={materials["Pant_1.001"]} />
          <mesh name="Cone_10" geometry={nodes.Cone_10.geometry} material={materials.shirt_bq5} />
          <mesh name="Cone_11" geometry={nodes.Cone_11.geometry} material={materials.pang_gq2} />
          <mesh name="Cone_12" geometry={nodes.Cone_12.geometry} material={materials.Shirt_bq1} />
          <mesh name="Cone_13" geometry={nodes.Cone_13.geometry} material={materials["Material.015"]} />
          <mesh name="Cone_14" geometry={nodes.Cone_14.geometry} material={materials["Shirt_2.001"]} />
          <mesh name="Cone_15" geometry={nodes.Cone_15.geometry} material={materials["Skin_1.002"]} />
          <mesh name="Cone_16" geometry={nodes.Cone_16.geometry} material={materials.Shirt_gq2} />
          <mesh name="Cone_17" geometry={nodes.Cone_17.geometry} material={materials["Shoes.002"]} />
          <mesh name="Cone_18" geometry={nodes.Cone_18.geometry} material={materials.Shirt_gq1} />
          <mesh name="Cone_19" geometry={nodes.Cone_19.geometry} material={materials.Pants_gq} />
          <mesh name="Cone_20" geometry={nodes.Cone_20.geometry} material={materials.Shirt_gq} />
          <mesh name="Cone_21" geometry={nodes.Cone_21.geometry} material={materials["Hair.001"]} />
        </group>
        <group name="mesh" position={[0, 0.1, -0.535]} rotation={[Math.PI, 0, Math.PI]} scale={[1, 1, 1.313]}>
          <mesh name="mesh_1" geometry={nodes.mesh_1.geometry} material={materials["Material.007"]} />
          <mesh name="mesh_2" geometry={nodes.mesh_2.geometry} material={materials["Material.018"]} />
          <mesh name="mesh_3" geometry={nodes.mesh_3.geometry} material={materials["Material.021"]} />
        </group>
        <group name="Door_R004" position={[-2.151, 3.996, 0.439]} rotation={[Math.PI, 0, Math.PI]} scale={[1, 1, 1.313]}>
          <mesh name="mesh011" geometry={nodes.mesh011.geometry} material={materials["Door.001"]} />
          <mesh name="mesh011_1" geometry={nodes.mesh011_1.geometry} material={materials["Material.025"]} />
        </group>
        <group name="Door_R003" position={[-2.151, 5.87, 0.439]} rotation={[Math.PI, 0, Math.PI]} scale={[1, 1, 1.313]}>
          <mesh name="mesh012" geometry={nodes.mesh012.geometry} material={materials["Door.001"]} />
          <mesh name="mesh012_1" geometry={nodes.mesh012_1.geometry} material={materials["Material.025"]} />
        </group>
        <group name="Door_R002" position={[-2.151, 7.743, 0.439]} rotation={[Math.PI, 0, Math.PI]} scale={[1, 1, 1.313]}>
          <mesh name="mesh013" geometry={nodes.mesh013.geometry} material={materials["Door.001"]} />
          <mesh name="mesh013_1" geometry={nodes.mesh013_1.geometry} material={materials["Material.025"]} />
        </group>
        <group name="Door_R001" position={[-2.151, 9.615, 0.439]} rotation={[Math.PI, 0, Math.PI]} scale={[1, 1, 1.313]}>
          <mesh name="mesh014" geometry={nodes.mesh014.geometry} material={materials["Door.001"]} />
          <mesh name="mesh014_1" geometry={nodes.mesh014_1.geometry} material={materials["Material.025"]} />
        </group>
        <group name="Door_R000" position={[-2.151, 11.486, 0.439]} rotation={[Math.PI, 0, Math.PI]} scale={[1, 1, 1.313]}>
          <mesh name="mesh015" geometry={nodes.mesh015.geometry} material={materials["Door.001"]} />
          <mesh name="mesh015_1" geometry={nodes.mesh015_1.geometry} material={materials["Material.025"]} />
        </group>
        <group name="Door_L004" position={[0.304, 3.996, 0.439]} scale={[1, 1, 1.313]}>
          <mesh name="mesh016" geometry={nodes.mesh016.geometry} material={materials["Door.001"]} />
          <mesh name="mesh016_1" geometry={nodes.mesh016_1.geometry} material={materials["Material.025"]} />
        </group>
        <group name="Door_L003" position={[0.304, 5.87, 0.439]} scale={[1, 1, 1.313]}>
          <mesh name="mesh017" geometry={nodes.mesh017.geometry} material={materials["Door.001"]} />
          <mesh name="mesh017_1" geometry={nodes.mesh017_1.geometry} material={materials["Material.025"]} />
        </group>
        <group name="Door_L002" position={[0.304, 7.743, 0.439]} scale={[1, 1, 1.313]}>
          <mesh name="mesh018" geometry={nodes.mesh018.geometry} material={materials["Door.001"]} />
          <mesh name="mesh018_1" geometry={nodes.mesh018_1.geometry} material={materials["Material.025"]} />
        </group>
        <group name="Door_L001" position={[0.304, 9.615, 0.439]} scale={[1, 1, 1.313]}>
          <mesh name="mesh019" geometry={nodes.mesh019.geometry} material={materials["Door.001"]} />
          <mesh name="mesh019_1" geometry={nodes.mesh019_1.geometry} material={materials["Material.025"]} />
        </group>
        <group name="Door_L000" position={[0.304, 11.486, 0.439]} scale={[1, 1, 1.313]}>
          <mesh name="mesh020" geometry={nodes.mesh020.geometry} material={materials["Door.001"]} />
          <mesh name="mesh020_1" geometry={nodes.mesh020_1.geometry} material={materials["Material.025"]} />
        </group>
        <mesh name="Speaker_stage" geometry={nodes.Speaker_stage.geometry} material={materials["Material.019"]} position={[0.298, 7.089, 1.679]} rotation={[0, 1.571, 0]} />
        <mesh name="Podium" geometry={nodes.Podium.geometry} material={materials.Podium} position={[-0.029, 7.092, 2.376]} rotation={[0, 1.571, 0]} scale={[1.734, 1.688, 1.489]} />
        <group name="Plane003" position={[0.298, 7.828, 1.677]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[1.042, 1, 0.598]}>
          <mesh name="Plane033" geometry={nodes.Plane033.geometry} material={materials["Material.022"]} />
          <mesh name="Plane033_1" geometry={nodes.Plane033_1.geometry} material={materials["Desk.001"]} />
        </group>
        <group name="Floot" position={[-0.926, 6.907, 1.618]} rotation={[0, 1.571, 0]}>
          <mesh name="Plane034" geometry={nodes.Plane034.geometry} material={materials.floor} />
          <mesh name="Plane034_1" geometry={nodes.Plane034_1.geometry} material={materials.wall} />
        </group>
        <group name="Plane002" position={[-1.26, 6.905, 1.661]} rotation={[0, 1.571, 0]} scale={[1.13, 1, 0.737]}>
          <mesh name="Plane027" geometry={nodes.Plane027.geometry} material={materials["Material.020"]} />
          <mesh name="Plane027_1" geometry={nodes.Plane027_1.geometry} material={materials["Skin.002"]} />
          <mesh name="Plane027_2" geometry={nodes.Plane027_2.geometry} material={materials["Hair.005"]} />
          <mesh name="Plane027_3" geometry={nodes.Plane027_3.geometry} material={materials.Desk} />
          <mesh name="Plane027_4" geometry={nodes.Plane027_4.geometry} material={materials.Random_shirt} />
        </group>
        <group name="Female" position={[-0.974, 5.47, 2.192]} rotation={[Math.PI, 0, Math.PI]} scale={0.386}>
          <mesh name="Object_0023" geometry={nodes.Object_0023.geometry} material={materials["Material.027"]} />
          <mesh name="Object_0023_1" geometry={nodes.Object_0023_1.geometry} material={materials["Skin_1.004"]} />
          <mesh name="Object_0023_2" geometry={nodes.Object_0023_2.geometry} material={materials["Hair.006"]} />
          <mesh name="Object_0023_3" geometry={nodes.Object_0023_3.geometry} material={materials["Material.030"]} />
          <mesh name="Object_0023_4" geometry={nodes.Object_0023_4.geometry} material={materials["Pants_g.001"]} />
          <mesh name="Object_0023_5" geometry={nodes.Object_0023_5.geometry} material={materials["Shoes.004"]} />
        </group>
        <group name="Holo" position={[-0.951, 5.04, 1.571]} rotation={[-Math.PI, 0.339, -Math.PI]} scale={[0.87, 0.969, 0.87]}>
          <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials["Material.031"]} />
          <mesh name="Cube_1" geometry={nodes.Cube_1.geometry} material={materials["Material.032"]} />
          <mesh name="Cube_2" geometry={nodes.Cube_2.geometry} material={materials["Material.033"]} />
          <mesh name="Cube_3" geometry={nodes.Cube_3.geometry} material={materials["Material.034"]} />
          <mesh name="Cube_4" geometry={nodes.Cube_4.geometry} material={materials["Material.035"]} />
        </group>
        <group name="Man026" position={[-0.393, 5.376, 1.649]} rotation={[Math.PI, 0, Math.PI / 2]} scale={0.337}>
          <mesh name="Cube062" geometry={nodes.Cube062.geometry} material={materials["Hair.007"]} />
          <mesh name="Cube062_1" geometry={nodes.Cube062_1.geometry} material={materials["Skin_1.003"]} />
          <mesh name="Cube062_2" geometry={nodes.Cube062_2.geometry} material={materials["Material.029"]} />
          <mesh name="Cube062_3" geometry={nodes.Cube062_3.geometry} material={materials["Shoes.003"]} />
        </group>
        <group name="Man032" position={[-1.512, 5.373, 1.496]} rotation={[0, 0, -Math.PI / 2]} scale={0.337}>
          <mesh name="Cube068" geometry={nodes.Cube068.geometry} material={materials["Skin_1.003"]} />
          <mesh name="Cube068_1" geometry={nodes.Cube068_1.geometry} material={materials["Hair.007"]} />
          <mesh name="Cube068_2" geometry={nodes.Cube068_2.geometry} material={materials["Shoes.003"]} />
          <mesh name="Cube068_3" geometry={nodes.Cube068_3.geometry} material={materials["Shirt_2.002"]} />
        </group>
        <group name="Man033" position={[-0.044, 5.388, 2.075]} rotation={[-Math.PI, 0.613, -Math.PI]} scale={0.256}>
          <mesh name="Cube069" geometry={nodes.Cube069.geometry} material={materials["Skin_1.003"]} />
          <mesh name="Cube069_1" geometry={nodes.Cube069_1.geometry} material={materials["Hair.007"]} />
          <mesh name="Cube069_2" geometry={nodes.Cube069_2.geometry} material={materials["Hair.006"]} />
          <mesh name="Cube069_3" geometry={nodes.Cube069_3.geometry} material={materials["Pant_1.002"]} />
          <mesh name="Cube069_4" geometry={nodes.Cube069_4.geometry} material={materials["Shirt_1.001"]} />
        </group>
        <group name="Room" position={[-0.922, 5.036, 1.608]} rotation={[0, 1.571, 0]}>
          <mesh name="Plane036" geometry={nodes.Plane036.geometry} material={materials["Black hexagon tile"]} />
          <mesh name="Plane036_1" geometry={nodes.Plane036_1.geometry} material={materials["Material.028"]} />
          <mesh name="Plane036_2" geometry={nodes.Plane036_2.geometry} material={materials["Material.026"]} />
        </group>
        <group name="TH_table" position={[-0.951, 5.04, 1.571]} rotation={[0, 1.571, 0]} scale={[0.091, 0.112, 0.091]}>
          <mesh name="Cylinder003" geometry={nodes.Cylinder003.geometry} material={materials["Table.001"]} />
          <mesh name="Cylinder003_1" geometry={nodes.Cylinder003_1.geometry} material={materials.Table_acents} />
          <mesh name="Cylinder003_2" geometry={nodes.Cylinder003_2.geometry} material={materials["Table Frame"]} />
          <mesh name="Cylinder003_3" geometry={nodes.Cylinder003_3.geometry} material={materials["Sceen-1"]} />
          <mesh name="Cylinder003_4" geometry={nodes.Cylinder003_4.geometry} material={materials["Screen main"]} />
          <mesh name="Cylinder003_5" geometry={nodes.Cylinder003_5.geometry} material={materials["Table-rim"]} />
        </group>
        <group name="TV" position={[-0.56, 6.26, 2.81]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={[0.354, 0.34, 0.575]}>
          <mesh name="Plane035" geometry={nodes.Plane035.geometry} material={materials["TV-bod"]} />
          <mesh name="Plane035_1" geometry={nodes.Plane035_1.geometry} material={materials["Material.005"]} />
        </group>
        <group name="Chairs_BSA" position={[-0.42, 3.164, 1.094]} rotation={[0, -1.571, 0]} scale={[0.465, 0.465, 0.464]}>
          <mesh name="Cube104" geometry={nodes.Cube104.geometry} material={materials["Cadeira escritorio Plastic_Rough.001"]} />
          <mesh name="Cube104_1" geometry={nodes.Cube104_1.geometry} material={materials[" Cadeira escritorio Plastic.001"]} />
          <mesh name="Cube104_2" geometry={nodes.Cube104_2.geometry} material={materials[" Cadeira escritorio Metal_Black.001"]} />
          <mesh name="Cube104_3" geometry={nodes.Cube104_3.geometry} material={materials[" Cadeira escritorio Plastic_Rough.002"]} />
          <mesh name="Cube104_4" geometry={nodes.Cube104_4.geometry} material={materials[" Cadeira escritorio Material.001"]} />
        </group>
        <group name="Plane" position={[-0.923, 3.164, 1.592]} rotation={[0, 1.571, 0]} scale={[1, 1, 0.998]}>
          <mesh name="Plane052" geometry={nodes.Plane052.geometry} material={materials["Material.041"]} />
          <mesh name="Plane052_1" geometry={nodes.Plane052_1.geometry} material={materials["Material.042"]} />
        </group>
        <group name="Proff" position={[-0.319, 3.559, 2.445]} rotation={[-Math.PI, 0.31, Math.PI / 2]} scale={[0.384, 0.383, 0.384]}>
          <mesh name="Cube101" geometry={nodes.Cube101.geometry} material={materials["Skin.003"]} />
          <mesh name="Cube101_1" geometry={nodes.Cube101_1.geometry} material={materials["Material.043"]} />
          <mesh name="Cube101_2" geometry={nodes.Cube101_2.geometry} material={materials["Desk.004"]} />
          <mesh name="Cube101_3" geometry={nodes.Cube101_3.geometry} material={materials["Hair.016"]} />
        </group>
        <group name="Man035" position={[-1.348, 3.411, 1.765]} rotation={[0, 0, -Math.PI / 2]} scale={[0.399, 0.398, 0.399]}>
          <mesh name="Cube092" geometry={nodes.Cube092.geometry} material={materials["Skin_1.010"]} />
          <mesh name="Cube092_1" geometry={nodes.Cube092_1.geometry} material={materials["Hair.013"]} />
          <mesh name="Cube092_2" geometry={nodes.Cube092_2.geometry} material={materials["pang_gq2.004"]} />
          <mesh name="Cube092_3" geometry={nodes.Cube092_3.geometry} material={materials["Pant_1.006"]} />
          <mesh name="Cube092_4" geometry={nodes.Cube092_4.geometry} material={materials["Shoes.010"]} />
        </group>
        <group name="Man034" position={[-0.445, 3.42, 1.096]} rotation={[0, 1.571, 0]} scale={[0.304, 0.304, 0.303]}>
          <mesh name="Cube091" geometry={nodes.Cube091.geometry} material={materials["Skin_1.009"]} />
          <mesh name="Cube091_1" geometry={nodes.Cube091_1.geometry} material={materials["Hair.012"]} />
          <mesh name="Cube091_2" geometry={nodes.Cube091_2.geometry} material={materials["shirt_bq4.002"]} />
          <mesh name="Cube091_3" geometry={nodes.Cube091_3.geometry} material={materials["Pant_1.005"]} />
        </group>
        <group name="Laptops" position={[-0.944, 3.584, 2.064]} rotation={[-Math.PI / 2, 0, 3.138]} scale={[-2.131, -2.136, -2.136]}>
          <mesh name="Plane048" geometry={nodes.Plane048.geometry} material={materials["Screen.003"]} />
          <mesh name="Plane048_1" geometry={nodes.Plane048_1.geometry} material={materials["Lap_bdy.003"]} />
          <mesh name="Plane048_2" geometry={nodes.Plane048_2.geometry} material={materials["Key_tch.003"]} />
        </group>
        <group name="Female009" position={[-1.394, 3.513, 1.084]} rotation={[0, 1.568, 0]} scale={[0.435, 0.435, 0.434]}>
          <mesh name="Object_0042" geometry={nodes.Object_0042.geometry} material={materials["Skin_1.012"]} />
          <mesh name="Object_0042_1" geometry={nodes.Object_0042_1.geometry} material={materials["Shoes.012"]} />
          <mesh name="Object_0042_2" geometry={nodes.Object_0042_2.geometry} material={materials["pang_gq2.006"]} />
          <mesh name="Object_0042_3" geometry={nodes.Object_0042_3.geometry} material={materials["Hair.015"]} />
          <mesh name="Object_0042_4" geometry={nodes.Object_0042_4.geometry} material={materials["Material.016"]} />
        </group>
        <group name="Female008" position={[-0.453, 3.507, 1.888]} rotation={[Math.PI, -1.568, Math.PI]} scale={[0.435, 0.435, 0.434]}>
          <mesh name="Object_0038" geometry={nodes.Object_0038.geometry} material={materials["Skin_1.011"]} />
          <mesh name="Object_0038_1" geometry={nodes.Object_0038_1.geometry} material={materials["Shirt_gq2.002"]} />
          <mesh name="Object_0038_2" geometry={nodes.Object_0038_2.geometry} material={materials["Shoes.011"]} />
          <mesh name="Object_0038_3" geometry={nodes.Object_0038_3.geometry} material={materials["pang_gq2.005"]} />
          <mesh name="Object_0038_4" geometry={nodes.Object_0038_4.geometry} material={materials["Hair.014"]} />
        </group>
        <group name="TAB_SRC_CLK_BSA" position={[0.298, 4.485, 1.794]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.108}>
          <mesh name="Circle002" geometry={nodes.Circle002.geometry} material={materials["Table_legs.004"]} />
          <mesh name="Circle002_1" geometry={nodes.Circle002_1.geometry} material={materials["Clock face.002"]} />
          <mesh name="Circle002_2" geometry={nodes.Circle002_2.geometry} material={materials["Table.003"]} />
          <mesh name="Circle002_3" geometry={nodes.Circle002_3.geometry} material={materials["Table_legs.005"]} />
          <mesh name="Circle002_4" geometry={nodes.Circle002_4.geometry} material={materials["Desk.005"]} />
          <mesh name="Circle002_5" geometry={nodes.Circle002_5.geometry} material={materials["Material.040"]} />
        </group>
        <group name="Speaker001" position={[0.061, 7.255, 1.514]} rotation={[Math.PI, 0.006, Math.PI / 2]} scale={0.16}>
          <mesh name="Cube055" geometry={nodes.Cube055.geometry} material={materials["Hair.004"]} />
          <mesh name="Cube055_1" geometry={nodes.Cube055_1.geometry} material={materials["Desk.001"]} />
          <mesh name="Cube055_2" geometry={nodes.Cube055_2.geometry} material={materials["Skin.001"]} />
          <mesh name="Cube055_3" geometry={nodes.Cube055_3.geometry} material={materials["Material.023"]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload("src/components/Building/Building_test.gltf")
