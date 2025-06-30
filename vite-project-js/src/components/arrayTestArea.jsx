// // ❌ Versión Mutativa - Convierte a ✅ Inmutable
//
// // 1. Agregar elemento al final
// const numeros = [1, 2, 3];
// const newnumero = [...numeros,4]
// console.log(newnumero)
//
// // 2. Eliminar primer elemento
// const letras = ["A", "B", "C"];
// const newLetras = letras.slice(1);
// console.log(newLetras)
//
// // 3. Eliminar elemento específico
// const colores = ["rojo", "azul", "verde", "azul"];
// // Eliminar primer "azul"
// const coloresNoBlue =colores.filter((color, index)=>
//     color !== 'azul' || index !== colores.indexOf('azul')
// );
// console.log(coloresNoBlue)
//
import { useState } from 'react';

export function TestInmutabilidad() {
    const [animales, setAnimales] = useState(["🐶", "🐱", "🐭"]);

    // Implementa estas 4 funciones usando métodos INMUTABLES:

    const agregarAlFinal = () => {
        // Agregar "🐰" al final
        setAnimales((currentAnimal)=> [...currentAnimal,"🐰"])
    };

    const eliminarPrimero = () => {
        // Eliminar el primer animal
        setAnimales((currentAnimal)=>[...currentAnimal.slice(1)])
    };

    const eliminarEspecifico = () => {
        // Eliminar "🐱" específicamente
        setAnimales((currentAnimal =>currentAnimal.filter(item => item !== "🐱")))
        }

    const duplicarLista = () => {
        // Duplicar toda la lista (agregar una copia de sí misma)
    };

    return (
        <div>
            <h2>Test de Inmutabilidad</h2>
            <p>Animales: {animales.join(" ")}</p>

    <button onClick={agregarAlFinal}>Agregar Conejo</button>
    <button onClick={eliminarPrimero}>Eliminar Primero</button>
    <button onClick={eliminarEspecifico}>Eliminar Gato</button>
    <button onClick={duplicarLista}>Duplicar Lista</button>
    </div>
);
}