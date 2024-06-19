function Ejemplo(props){
    return(
       <div>
        {
            props.alumnos.map((datosAlumnos,index)=>(
                <div>
                <h1>Alumno: {index +1}</h1>
                <h1>Nombre Alumno:{datosAlumnos.nombre}</h1>
                <h1>Edad Alumno: {datosAlumnos.edad}</h1>
                </div>    
            ))
        }
       </div>
    )
}
export default Ejemplo;