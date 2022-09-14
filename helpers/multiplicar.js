const fs = require('fs');

const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

        try {
           
            let salida, consola = '';

            for ( let i = 1; i <= hasta; i++ ) {
                let r = base * i;
                salida += `${ base } x ${ i } = ${ r }\n`;
                consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ r }\n`;
            }
            
            if (listar) {

                console.log('=================='.green);
                console.log('  Tabla del:'.green, colors.blue( base ) );
                console.log('=================='.green);

                console.log(consola);

            }
           
            
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida );
            
            return `tabla-${base}.txt`;
            
        } catch (err) {
            throw err;
        }
    

        
    
}

module.exports = {
    crearArchivo
}