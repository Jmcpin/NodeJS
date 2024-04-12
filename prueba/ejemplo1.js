/*
PS E:\Escritorio\Cursos_programacion\Youtube\nodejs> node    
Welcome to Node.js v21.1.0.       
Type ".help" for more information.
----------------------------------------------
> process.version // Es la versión de Node JS
'v21.1.0'
-----------------------------------------------
> process.version.v8
undefined
-----------------------------------------------
> os.userInfo() //os es informacion del S.O. 
                // y userInfo() muestra el nombre del usuario del sistema
                // y tambien el directorio del usuario
{
  uid: -1,
  gid: -1,
  username: 'PABLO',
  homedir: 'C:\\Users\\PABLO',
  shell: null
}
-------------------------------------------------
> process.cwd() // con esto se sabe la ruta donde se encuentra 
                //actualmente la linea de comando
'E:\\Escritorio\\Cursos_programacion\\Youtube\\nodejs'
--------------------------------------------------
//node -e es ejecutar codigo node fuera de la linea de comando de node
PS E:\Escritorio\Cursos_programacion\Youtube\nodejs> node -e "console.log(10+10)"
20
PS E:\Escritorio\Cursos_programacion\Youtube\nodejs> node -e "os.userInfo()"
PS E:\Escritorio\Cursos_programacion\Youtube\nodejs> node -e "console.log(os.userInfo())"     
{
  uid: -1,
  gid: -1,
  username: 'PABLO',
  homedir: 'C:\\Users\\PABLO',
  shell: null
}
-----------------------------------------------------
> const name = ['Pablo','Pancho','Pantera'];
undefined
> const newName = name.map(nombre => `Hola ${nombre}`)
undefined
> console.log(newName)
[ 'Hola Pablo', 'Hola Pancho', 'Hola Pantera' ]
undefined
-----------------------------------------
> .save names.js // Guardar el archivo en un js
Session saved to: names.js
-------------------------------------------
> .load names.js // puedes cargar el archivo de nuevo de js
const name = ['Pablo','Pancho','Pantera'];
const newName = name.map(nombre => `Hola ${nombre}`)
console.log(newName)
[ 'Hola Pablo', 'Hola Pancho', 'Hola Pantera' ]
undefined
---------------------------------------------

*/