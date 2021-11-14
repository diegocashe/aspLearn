import definicion from '../img/aspnet-featured.png.webp'

const data = [
    {
        title: "Definición",
        info: "ASP.NET es un entorno para aplicaciones web desarrollado y comercializado por Microsoft. Es usado por programadores y diseñadores para construir sitios web dinámicos, aplicaciones web y servicios web XML. Apareció en enero de 2002 con la versión 1.0 del .NET Framework, y es la tecnología sucesora de la tecnología Active Server Pages (ASP). ASP.NET está construido sobre el Common Language Runtime, permitiendo a los programadores escribir código ASP.NET usando cualquier lenguaje admitido por el .NET Framework. ",
        img: <img src={definicion} alt="definicion" />
    },
    {
        title: "Características",
        info: `Son conocidas oficialmente como "web forms" (formularios web), Los formularios web están contenidos en archivos con una extensión ASPX, El modelo Code-behind, permite la creación de componentes reutilizables a través de la creación de Controles de Usuario, Administración del estadose basa en que las aplicaciones ASP.NET son alojadas en un servidor web y se tiene acceso a ellas mediante el protocolo sin estado HTTP`,
        img: <img src="" alt="No imagen" />
    },
    {
        title: "Versiones",
        info: `Hace ya mas de 10 años, Microsoft lanzó ASP.NET, un marco de trabajo (framework) para construir sitios web dinámicos. Desde entonces, han sido lanzadas nuevas versiones mejoradas. He aquí la lista de versiones de ASP.Net y su año de realización:

        En 2002: versión 1.0
        En 2003: versión 1.1
        En 2005: versión 2.0
        En 2008: versión 3.5
        En 2010: versión 4.0`,
        img: <img src="" alt="No imagen" />
    },
    {
        title: "Requisitos mínimos",
        info: `Windows 7 de 64 bit, procesador Intel Core i5-3450 o AMD FX 8300, memoria RAM 4 GB, Disco Duro 100 GB SSD, Conexión de banda ancha`,
        img: <img src="" alt="No imagen" />
    },
    {
        title: "IDE de desarrollo",
        info: "Por excelencia se utiliza VIsual Studio en su ultima version",
        img: <img src="" alt="No imagen" />
    },
    {
        title: "Tipos de datos",
        info: <table border="1">
            <tbody>
                <tr>
                    <td class="tableEnc" >
                        Tipo .NET</td>
                    <td class="tableEnc">
                        Alias C#</td>
                    <td class="tableEnc">
                        Alias VB</td>
                    <td class="tableEnc">
                        ¿Con Signo?</td>
                    <td class="tableEnc">
                        Bytes</td>
                    <td class="tableEnc">
                        Rango</td>
                </tr>
                <tr>
                    <td class="mainColumn">
                        System.SByte</td>
                    <td>
                        sbyte</td>
                    <td>
                        SByte</td>
                    <td>
                        Sí</td>
                    <td>
                        1</td>
                    <td >
                        -128 a 127</td>
                </tr>
                <tr>
                    <td class="mainColumn">
                        System.Int16</td>
                    <td>
                        short</td>
                    <td>
                        Short</td>
                    <td>
                        Sí</td>
                    <td>
                        2</td>
                    <td >
                        -32768 a 32767</td>
                </tr>
                <tr>
                    <td class="mainColumn">
                        System.Int32</td>
                    <td>
                        int</td>
                    <td>
                        Integer</td>
                    <td>
                        Sí</td>
                    <td>
                        4</td>
                    <td >
                        -2147483648 a 2147483647</td>
                </tr>
                <tr>
                    <td class="mainColumn">
                        System.Int64</td>
                    <td>
                        long</td>
                    <td>
                        Long</td>
                    <td>
                        Sí</td>
                    <td>
                        8</td>
                    <td >
                        -9223372036854775808 a 9223372036854775807</td>
                </tr>
                <tr>
                    <td class="mainColumn">
                        System.Byte</td>
                    <td>
                        byte</td>
                    <td>
                        Byte</td>
                    <td>
                        No</td>
                    <td>
                        1</td>
                    <td >
                        0 a 255</td>
                </tr>
                <tr>
                    <td class="mainColumn">
                        System.UInt16</td>
                    <td>
                        ushort</td>
                    <td>
                        UShort</td>
                    <td>
                        No</td>
                    <td>
                        2</td>
                    <td >
                        0 a 65535</td>
                </tr>
                <tr>
                    <td class="mainColumn">
                        System.UInt32</td>
                    <td>
                        uint</td>
                    <td>
                        UInteger</td>
                    <td>
                        No</td>
                    <td>
                        4</td>
                    <td >
                        0 a 4294967295</td>
                </tr>
                <tr>
                    <td class="mainColumn">
                        System.UInt64</td>
                    <td>
                        ulong</td>
                    <td>
                        ULong</td>
                    <td>
                        No</td>
                    <td>
                        8</td>
                    <td >
                        0 a 18446744073709551615</td>
                </tr>
                <tr>
                    <td class="mainColumn">
                        System.Single</td>
                    <td>
                        float</td>
                    <td>
                        Single</td>
                    <td>
                        Sí</td>
                    <td>
                        4</td>
                    <td >
                        Aprox. ±1.5 x 10<sup>-45</sup> a ±3.4 x 10<sup>38</sup> con 7 decimales</td>
                </tr>
                <tr>
                    <td class="mainColumn">
                        System.Double</td>
                    <td>
                        double</td>
                    <td>
                        Double</td>
                    <td>
                        Sí</td>
                    <td>
                        8</td>
                    <td>
                        Aprox. ±5.0 x 10<sup>-324</sup> a ±1.7 x 10<sup>308</sup> con 15 o 16 decimales</td>
                </tr>
                <tr>
                    <td class="mainColumn">
                        System.Decimal</td>
                    <td>
                        decimal</td>
                    <td>
                        Decimal</td>
                    <td>
                        Sí</td>
                    <td>
                        12</td>
                    <td >
                        Aprox. ±1.0 x 10<sup>-28</sup> a ±7.9 x 10<sup>28</sup> con 28 o 29 decimales</td>
                </tr>
                <tr>
                    <td class="mainColumn">
                        System.Char</td>
                    <td>
                        char</td>
                    <td>
                        Char</td>
                    <td>
                        N/A</td>
                    <td>
                        2</td>
                    <td >
                        Cualquier caracter Unicode</td>
                </tr>
                <tr>
                    <td class="mainColumn">
                        System.Boolean</td>
                    <td>
                        bool</td>
                    <td>
                        Boolean</td>
                    <td>
                        N/A</td>
                    <td>
                        Depende de la plataforma</td>
                    <td >
                        True o False</td>
                </tr>
            </tbody>
        </table>,
        img: <img src="" alt="No imagen" />
    },
    {
        title: "Arreglos",
        info: <div dir="ltr"><font size={3}>También se le conoce como Matriz, la cual almacena una colección de datos del mismo tipo (int, float, double, String, etc.), con ello se evita declarar una infinidad de variables, del mismo tipo.</font><div><font size={3}><br /></font></div><div><font size={3}>Una sola variable que puede almacenar muchas variables del mismo tipo, como por ejemplo, una agenda que almacena en el campo teléfono, muchos teléfonos en una sola variable.</font></div><div><font size={3}><br /></font></div><div><font size={3}>Por regla, toda matriz comienza en la posición 0 y llega hasta n, accedemos a sus valores por medio del índice que se coloca en la posición del valor referido.&nbsp;</font><span style={{ fontSize: 'medium', backgroundColor: 'transparent' }}>Todas las matrices consisten en ubicaciones de memoria contiguas.</span></div><div><span style={{ fontSize: 'medium', backgroundColor: 'transparent' }}><br /></span></div><div><span style={{ fontSize: 'medium', backgroundColor: 'transparent' }}>Para declarar una matriz seguimos la siguiente sintaxis:</span></div><div><span style={{ fontSize: 'medium', backgroundColor: 'transparent' }}><table border={1} bordercolor="#888" cellSpacing={0} style={{ borderCollapse: 'collapse', borderColor: 'rgb(136,136,136)', borderWidth: '1px' }}><tbody><tr><td style={{ width: '256px', height: '87px' }}>&nbsp;<img border={0} src="https://sites.google.com/site/programacionnetc/_/rsrc/1503017178837/arreglos/c58.png" /></td><td style={{ width: '551px', height: '87px' }}>datatype: Se utiliza para especificar el tipo de elemento de la matriz.<div style={{ fontSize: '13.3333px' }}><span style={{ fontSize: 'medium', backgroundColor: 'transparent' }}>[ &nbsp;]: Especifica el rango de la matriz, es decir, su tamaño.</span></div><div style={{ fontSize: '13.3333px' }}><span style={{ fontSize: 'medium', backgroundColor: 'transparent' }}>arrayName: Nombre del arreglo.</span></div></td></tr></tbody></table><br /></span></div><div><span style={{ fontSize: 'medium', backgroundColor: 'transparent' }}>Es necesario inicializar a la matriz para crear una instancia a la matriz y poder asignar valores a la misma. Para crear la instancia de la matriz utilizamos la palabra reservada new.</span></div><div><span style={{ fontSize: 'medium', backgroundColor: 'transparent' }}><br /></span></div><div><span style={{ fontSize: 'medium', backgroundColor: 'transparent' }}><div style={{ display: 'block', textAlign: 'center', marginRight: 'auto', marginLeft: 'auto' }}><a href="https://sites.google.com/site/programacionnetc/arreglos/c59.png?attredirects=0" imageanchor={1}><img border={0} src="https://sites.google.com/site/programacionnetc/_/rsrc/1503018249238/arreglos/c59.png" /></a></div><br /></span></div><div><span style={{ fontSize: 'medium', backgroundColor: 'transparent' }}>Para asignar valores a la matriz podemos, asignar a elementos de matriz individuales, utilizando el número de índice.</span></div><div><span style={{ fontSize: 'medium', backgroundColor: 'transparent' }}><br /></span></div><div><span style={{ backgroundColor: 'transparent' }}><div style={{ fontSize: 'medium', display: 'block', textAlign: 'center', marginRight: 'auto', marginLeft: 'auto' }}><a href="https://sites.google.com/site/programacionnetc/arreglos/c60.png?attredirects=0" imageanchor={1}><img border={0} src="https://sites.google.com/site/programacionnetc/_/rsrc/1503018458642/arreglos/c60.png" /></a></div><font size={3}><br /></font></span></div><div><font size={3}>Podemos asignar valores a la matriz en el momento de la declaración:</font></div><div><font size={3}><br /></font></div><div><font size={3}><div style={{ display: 'block', textAlign: 'center', marginRight: 'auto', marginLeft: 'auto' }}><a href="https://sites.google.com/site/programacionnetc/arreglos/c61.png?attredirects=0" imageanchor={1}><img border={0} src="https://sites.google.com/site/programacionnetc/_/rsrc/1503018727238/arreglos/c61.png" /></a></div>&nbsp;</font></div><div><font size={3}>También podemos inicializar una matriz de la siguiente manera:</font></div><div><font size={3}><br /></font></div><div><font size={3}><div style={{ display: 'block', textAlign: 'center', marginRight: 'auto', marginLeft: 'auto' }}><a href="https://sites.google.com/site/programacionnetc/arreglos/c62.png?attredirects=0" imageanchor={1}><img border={0} src="https://sites.google.com/site/programacionnetc/_/rsrc/1503018899992/arreglos/c62.png" /></a></div><div><font size={3}><br /></font></div>Se puede omitir el tamaño de la matriz:</font></div><div><font size={3}><br /></font></div><div><font size={3}><div style={{ display: 'block', textAlign: 'center', marginRight: 'auto', marginLeft: 'auto' }}><a href="https://sites.google.com/site/programacionnetc/arreglos/c63.png?attredirects=0" imageanchor={1}><img border={0} src="https://sites.google.com/site/programacionnetc/_/rsrc/1503019023170/arreglos/c63.png" /></a></div><br /></font></div><div><font size={3}>Es posible copiar los valores de una matriz origen a una matriz destino, ambas apuntan a la misma dirección de memoria:</font></div><div><font size={3}><br /></font></div><div><font size={3}><div style={{ display: 'block', textAlign: 'center', marginRight: 'auto', marginLeft: 'auto' }}><a href="https://sites.google.com/site/programacionnetc/arreglos/c64.png?attredirects=0" imageanchor={1}><img border={0} src="https://sites.google.com/site/programacionnetc/_/rsrc/1503019598964/arreglos/c64.png" /></a></div><br /></font></div><div><font size={3}>En caso de no inicializar la matriz, el valor que contiene es 0.</font></div><div><font size={3}><br /></font></div><div><font size={3}>Primer programa que muestra a una matriz:</font></div><div><font size={3}><div style={{ display: 'block', textAlign: 'left' }}><a href="https://sites.google.com/site/programacionnetc/arreglos/c65.png?attredirects=0" imageanchor={1}><img border={0} src="https://sites.google.com/site/programacionnetc/_/rsrc/1503020894774/arreglos/c65.png" /></a></div></font><hr /></div><h4><a name="TOC-Arreglos-con-Formularios:" /><font size={3}>Arreglos con Formularios:</font></h4><div><font size={3}><div style={{ display: 'block', textAlign: 'left' }}><a href="https://sites.google.com/site/programacionnetc/arreglos/array1.PNG?attredirects=0" imageanchor={1}><img border={0} src="https://sites.google.com/site/programacionnetc/_/rsrc/1507746293273/arreglos/array1.PNG" /></a>&nbsp;</div><div style={{ display: 'block', textAlign: 'left' }}>Código:<br /><div style={{ display: 'block', textAlign: 'left' }}><a href="https://sites.google.com/site/programacionnetc/arreglos/array2.PNG?attredirects=0" imageanchor={1}><img border={0} src="https://sites.google.com/site/programacionnetc/_/rsrc/1507746311817/arreglos/array2.PNG" /></a></div></div><br /></font></div><div><font size={3}>Modificamos a nuestro formulario, el programa debe de recibir valores en una matriz, imprimirlos y calcular su promedio:</font></div><div><div style={{ fontSize: 'medium', display: 'block', textAlign: 'left' }}><a href="https://sites.google.com/site/programacionnetc/arreglos/array3.PNG?attredirects=0" imageanchor={1}><img border={0} src="https://sites.google.com/site/programacionnetc/_/rsrc/1507760440989/arreglos/array3.PNG" /></a></div><div style={{ fontSize: 'medium', display: 'block', textAlign: 'left' }}>Código:</div><div style={{ fontSize: 'medium', display: 'block', textAlign: 'left' }}><div style={{ display: 'block', textAlign: 'left' }}><a href="https://sites.google.com/site/programacionnetc/arreglos/array4.PNG?attredirects=0" imageanchor={1}><img border={0} src="https://sites.google.com/site/programacionnetc/_/rsrc/1507760459960/arreglos/array4.PNG" /></a></div><div style={{ display: 'block', textAlign: 'left' }}><a href="https://sites.google.com/site/programacionnetc/arreglos/array5.PNG?attredirects=0" imageanchor={1}><img border={0} src="https://sites.google.com/site/programacionnetc/_/rsrc/1507760478198/arreglos/array5.PNG" /></a></div><br /></div><div style={{ fontSize: 'medium', display: 'block', textAlign: 'left' }}>Agregamos dos botones, uno para que nos muestre la calificación más alta y el segundo, para el promedio más bajo.</div><div style={{ fontSize: 'medium', display: 'block', textAlign: 'left' }}><br /></div><div style={{ fontSize: 'medium', display: 'block', textAlign: 'left' }}><div style={{ display: 'block', textAlign: 'left' }}><a href="https://sites.google.com/site/programacionnetc/arreglos/array6.PNG?attredirects=0" imageanchor={1}><img border={0} src="https://sites.google.com/site/programacionnetc/_/rsrc/1507767370592/arreglos/array6.PNG" /></a></div></div><div style={{ fontSize: 'medium', display: 'block', textAlign: 'left' }}><br /></div><div style={{ fontSize: 'medium', display: 'block', textAlign: 'left' }}>Declaramos la variable mayor y menor, además de los siguientes códigos:</div><div style={{ fontSize: 'medium', display: 'block', textAlign: 'left' }}><br /></div><div style={{ fontSize: 'medium', display: 'block', textAlign: 'left' }}><div style={{ display: 'block', textAlign: 'left' }}><a href="https://sites.google.com/site/programacionnetc/arreglos/array7.PNG?attredirects=0" imageanchor={1}><img border={0} src="https://sites.google.com/site/programacionnetc/_/rsrc/1507767553682/arreglos/array7.PNG" /></a></div><br /></div><div style={{ fontSize: 'medium', display: 'block', textAlign: 'left' }}><ul><li><font color="#b45f06">Modifica el programa, para que busque una calificación dentro del arreglo, en caso de encontrarla la mostrará, así como su posición dentro del arreglo, aún cuando se repita la misma calificación varias veces.</font></li></ul></div><div style={{ fontSize: 'medium', display: 'block', textAlign: 'left' }}><hr /></div><div style={{ fontSize: 'medium', display: 'block', textAlign: 'left' }}><b>Utilizando arreglos unidimensionales, desarrolla el siguiente programa:</b></div><div style={{ display: 'block', textAlign: 'left' }}><ol><li style={{ fontSize: 'medium' }}><span style={{ color: 'rgb(180,95,6)', fontFamily: 'Arial,Verdana,sans-serif' }}><b>Suponemos que en una reciente elección participaron 4 candidatos, los cuales identificaremos como 1, 2, 3 y 4. Elabora un programa que cuente el número de votos correspondiente a cada candidato y el porcentaje que obtuvo respecto al total de los votantes. El usuario tecleará los votos de manera desorganizada, el final de los votos está representado por un cero. El programa al final mostrará quién de los 4 candidatos, es el ganador, el número total de votos y los porcentajes del 100% de los votos.</b></span></li><li><div style={{ fontFamily: 'Arial,Verdana,sans-serif', fontSize: 'medium', color: 'rgb(68,68,68)', marginRight: 'auto', marginLeft: 'auto' }}><font color="#b45f06"><b>En el centro meteorológico de México se llevan los promedios mensuales de las lluvias&nbsp;caídas&nbsp;en las principales regiones del país. Existen 3 regiones&nbsp;importantes&nbsp;denominadas NORTE, CENTRO y&nbsp;SUR. Elabora un programa que calcule lo siguiente:</b></font></div><div style={{ marginRight: 'auto', marginLeft: 'auto' }}><ul style={{ fontFamily: 'Arial,Verdana,sans-serif', fontSize: 'medium', color: 'rgb(68,68,68)' }}><li><font color="#b45f06"><b>El promedio anual de la región CENTRO.</b></font></li><li><font color="#b45f06"><b>El mes y registro con menor lluvia en la región SUR.</b></font></li><li><font color="#b45f06"><b>La región con mayor lluvia anual.</b></font></li></ul></div></li><li><b style={{ backgroundColor: 'transparent', fontFamily: 'Arial,Verdana,sans-serif', color: 'rgb(180,95,6)' }}><div style={{ fontWeight: 'normal', color: 'rgb(68,68,68)', marginRight: 'auto', marginLeft: 'auto', display: 'inline!important' }}><font color="#b45f06" size={3}><b>Dados N números enteros obtenga:</b></font></div></b></li><div style={{ fontFamily: 'Arial,Verdana,sans-serif' }}><font color="#b45f06" size={3}><b><div style={{ fontWeight: 'normal', color: 'rgb(68,68,68)', marginRight: 'auto', marginLeft: 'auto' }}><font color="#b45f06"><b><br /></b></font></div><div style={{ fontWeight: 'normal', color: 'rgb(68,68,68)', marginRight: 'auto', marginLeft: 'auto' }}><ol><li><font color="#b45f06"><b>Cuantos números leídos fueron mayores que 0.</b></font></li><li><font color="#b45f06"><b>Calcule el promedio de los números positivos.</b></font></li><li><font color="#b45f06"><b>Obtenga el promedio de todos los números.</b></font></li></ol></div></b></font></div></ol></div></div><font size={3}><div style={{ display: 'block', textAlign: 'left' }}><br /></div><br /></font><div><font size={3}><br /></font></div><div><font size={3}>jv</font></div></div>
        ,
        img: <img src="" alt="No imagen" />,
    },
    {
        title: "Funciones Matemáticas y de cadenas de carateres predefinida",
        info: <main id="main" role="main" className="content " data-bi-name="content" lang="es-es" dir="ltr">
            <h1 id="math-functions-visual-basic">Funciones matemáticas (Visual Basic)</h1>
            <nav id="center-doc-outline" className="doc-outline is-hidden-desktop" data-bi-name="intopic toc" role="navigation" aria-label="Esquema del artículo">
                <h3>En este artículo</h3>
                <ol><li><a href="#remarks">Comentarios</a></li><li><a href="#example---abs">Ejemplo: Abs</a></li><li><a href="#example---atan">Ejemplo: Atan</a></li><li><a href="#example---cos">Ejemplo: Cos</a></li><li><a href="#example---exp">Ejemplo: Exp</a></li><li><a href="#example---log">Ejemplo: registro</a></li><li><a href="#example---round">Ejemplo: Round</a></li><li><a href="#example---sign">Ejemplo: Firmar</a></li><li><a href="#example---sin">Ejemplo: Sin</a></li><li><a href="#example---sqrt">Ejemplo: Sqrt</a></li><li><a href="#example---tan">Ejemplo: Tan</a></li><li><a href="#see-also">Consulta también</a></li></ol></nav>
            {/* <content> */}
            <p>Los métodos de la <a href="/es-es/dotnet/api/system.math" data-linktype="absolute-path">System.Math</a> clase proporcionan funciones trigonométricas, logarítmicas y otras funciones matemáticas comunes.</p>
            <h2 id="remarks" className="heading-anchor"><a className="anchor-link docon docon-link" href="#remarks" aria-labelledby="remarks" />Comentarios</h2>
            <p>En la tabla siguiente se enumeran los métodos de la <a href="/es-es/dotnet/api/system.math" data-linktype="absolute-path">System.Math</a> clase . Puede usarlos en un programa Visual Basic:</p>
            <div className="table-scroll-wrapper has-inner-focus" tabIndex={0} role="group" aria-label="Datos desplazables horizontalmente"><table className="table"><caption className="visually-hidden">Comentarios</caption>
                <thead>
                    <tr>
                        <th>Método .NET</th>
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.abs" data-linktype="absolute-path">Abs</a></td>
                        <td>Devuelve el valor absoluto de un número.</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.acos" data-linktype="absolute-path">Acos</a></td>
                        <td>Devuelve el ángulo cuyo coseno es el número especificado.</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.asin" data-linktype="absolute-path">Asin</a></td>
                        <td>Devuelve el ángulo cuyo seno es el número especificado.</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.atan" data-linktype="absolute-path">Atan</a></td>
                        <td>Devuelve el ángulo cuya tangente corresponde al número especificado.</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.atan2" data-linktype="absolute-path">Atan2</a></td>
                        <td>Devuelve el ángulo cuya tangente es el cociente de dos números especificados.</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.bigmul" data-linktype="absolute-path">BigMul</a></td>
                        <td>Devuelve el producto completo de dos números de 32 bits.</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.ceiling" data-linktype="absolute-path">Ceiling</a></td>
                        <td>Devuelve el valor entero más pequeño mayor o igual que el especificado <code>Decimal</code> o <code>Double</code> .</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.cos" data-linktype="absolute-path">Cos</a></td>
                        <td>Devuelve el coseno del ángulo especificado.</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.cosh" data-linktype="absolute-path">Cosh</a></td>
                        <td>Devuelve el coseno hiperbólico del ángulo especificado.</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.divrem" data-linktype="absolute-path">DivRem</a></td>
                        <td>Devuelve el cociente de dos enteros de 32 o 64 bits con signo y también devuelve el resto en un parámetro de salida.</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.exp" data-linktype="absolute-path">Exp</a></td>
                        <td>Devuelve e (la base de logaritmos naturales) elevado a la potencia especificada.</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.floor" data-linktype="absolute-path">Floor</a></td>
                        <td>Devuelve el entero más grande que es menor o igual que el número <code>Decimal</code> o <code>Double</code> especificado.</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.ieeeremainder" data-linktype="absolute-path">IEEERemainder</a></td>
                        <td>Devuelve el resto que resulta de la división de un número especificado por otro número especificado.</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.log" data-linktype="absolute-path">Log</a></td>
                        <td>Devuelve el logaritmo natural (base e) de un número especificado o el logaritmo de un número especificado en una base especificada.</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.log10" data-linktype="absolute-path">Log10</a></td>
                        <td>Devuelve el logaritmo en base 10 de un número especificado.</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.max" data-linktype="absolute-path">Max</a></td>
                        <td>Devuelve el mayor de dos números.</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.min" data-linktype="absolute-path">Min</a></td>
                        <td>Devuelve el menor de dos números.</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.pow" data-linktype="absolute-path">Pow</a></td>
                        <td>Devuelve un número especificado elevado a la potencia especificada.</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.round" data-linktype="absolute-path">Round</a></td>
                        <td>Devuelve un valor o redondeado al valor entero más <code>Decimal</code> cercano o a un número especificado de <code>Double</code> dígitos fraccionarios.</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.sign" data-linktype="absolute-path">Sign</a></td>
                        <td>Devuelve un <code>Integer</code> valor que indica el signo de un número.</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.sin" data-linktype="absolute-path">Sin</a></td>
                        <td>Devuelve el seno del ángulo especificado.</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.sinh" data-linktype="absolute-path">Sinh</a></td>
                        <td>Devuelve el seno hiperbólico del ángulo especificado.</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.sqrt" data-linktype="absolute-path">Sqrt</a></td>
                        <td>Devuelve la raíz cuadrada de un número especificado.</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.tan" data-linktype="absolute-path">Tan</a></td>
                        <td>Devuelve la tangente del ángulo especificado.</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.tanh" data-linktype="absolute-path">Tanh</a></td>
                        <td>Devuelve la tangente hiperbólica del ángulo especificado.</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.truncate" data-linktype="absolute-path">Truncate</a></td>
                        <td>Calcula la parte integral de un número <code>Decimal</code> o <code>Double</code> especificado.</td>
                    </tr>
                </tbody>
            </table></div>
            <p>En la tabla siguiente se enumeran los métodos de la clase que no existen en .NET Framework pero que se agregan en <a href="/es-es/dotnet/api/system.math" data-linktype="absolute-path">System.Math</a> .NET Standard o .NET Core:</p>
            <div className="table-scroll-wrapper has-inner-focus" tabIndex={0} role="group" aria-label="Datos desplazables horizontalmente"><table className="table"><caption className="visually-hidden">Comentarios</caption>
                <thead>
                    <tr>
                        <th>Método .NET</th>
                        <th>Descripción</th>
                        <th>Disponible en</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.acosh" data-linktype="absolute-path">Acosh</a></td>
                        <td>Devuelve el ángulo cuyo coseno hiperbólico es el número especificado.</td>
                        <td>A partir de .NET Core 2.1 y .NET Standard 2.1</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.asinh" data-linktype="absolute-path">Asinh</a></td>
                        <td>Devuelve el ángulo cuyo seno hiperbólico es el número especificado.</td>
                        <td>A partir de .NET Core 2.1 y .NET Standard 2.1</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.atanh" data-linktype="absolute-path">Atanh</a></td>
                        <td>Devuelve el ángulo cuya tangente hiperbólica es el número especificado.</td>
                        <td>A partir de .NET Core 2.1 y .NET Standard 2.1</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.bitdecrement" data-linktype="absolute-path">BitDecrement</a></td>
                        <td>Devuelve el siguiente valor más pequeño menor que <code>x</code>.</td>
                        <td>A partir de .NET Core 3.0</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.bitincrement" data-linktype="absolute-path">BitIncrement</a></td>
                        <td>Devuelve el siguiente valor más grande mayor que <code>x</code>.</td>
                        <td>A partir de .NET Core 3.0</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.cbrt" data-linktype="absolute-path">Cbrt</a></td>
                        <td>Devuelve la raíz cúbica de un número especificado.</td>
                        <td>A partir de .NET Core 2.1 y .NET Standard 2.1</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.clamp" data-linktype="absolute-path">Clamp</a></td>
                        <td>Devuelve un elemento <code>value</code> fijado al rango inclusivo de <code>min</code> y <code>max</code>.</td>
                        <td>A partir de .NET Core 2.0 y .NET Standard 2.1</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.copysign" data-linktype="absolute-path">CopySign</a></td>
                        <td>Devuelve un valor con la magnitud de <code>x</code> y el signo de <code>y</code>.</td>
                        <td>A partir de .NET Core 3.0</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.fusedmultiplyadd" data-linktype="absolute-path">FusedMultiplyAdd</a></td>
                        <td>Devuelve (x * y) + z, redondeado como una operación ternaria.</td>
                        <td>A partir de .NET Core 3.0</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.ilogb" data-linktype="absolute-path">ILogB</a></td>
                        <td>Devuelve el logaritmo de entero en base 2 de un número especificado.</td>
                        <td>A partir de .NET Core 3.0</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.log2" data-linktype="absolute-path">Log2</a></td>
                        <td>Devuelve el logaritmo en base 2 de un número especificado.</td>
                        <td>A partir de .NET Core 3.0</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.maxmagnitude" data-linktype="absolute-path">MaxMagnitude</a></td>
                        <td>Devuelve la magnitud mayor de dos números de punto flotante de precisión doble.</td>
                        <td>A partir de .NET Core 3.0</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.minmagnitude" data-linktype="absolute-path">MinMagnitude</a></td>
                        <td>Devuelve la magnitud menor de dos números de punto flotante de precisión doble.</td>
                        <td>A partir de .NET Core 3.0</td>
                    </tr>
                    <tr>
                        <td><a href="/es-es/dotnet/api/system.math.scaleb" data-linktype="absolute-path">ScaleB</a></td>
                        <td>Devuelve x * 2^n calculado de forma eficaz.</td>
                        <td>A partir de .NET Core 3.0</td>
                    </tr>
                </tbody>
            </table></div>
            <p>Para usar estas funciones sin calificación, importe el espacio de nombres en el proyecto agregando el <a href="/es-es/dotnet/api/system.math" data-linktype="absolute-path">System.Math</a> código siguiente en la parte superior del archivo de código fuente:</p>
            <div className="codeHeader" id="code-try-0" data-bi-name="code-header"><span className="language">VB</span><button type="button" className="action position-relative" data-bi-name="copy" aria-label="Copiar código">
                <span className="icon margin-right-xxs">
                    <span className="docon docon-edit-copy" role="presentation" />
                </span>
                <span>Copiar</span>
                <div className="successful-copy-alert position-absolute right-0 top-0 left-0 bottom-0 display-flex align-items-center justify-content-center has-text-success-invert has-background-success is-transparent" aria-hidden="true">
                    <span className="icon font-size-l">
                        <span className="docon docon-check-mark" role="presentation" />
                    </span>
                </div>
            </button></div><pre tabIndex={0} className="has-inner-focus"><code className="lang-vb" data-author-content="Imports System.Math
      "><span><span className="hljs-keyword">Imports</span> System.Math{"\n"}</span></code></pre>
            <h2 id="example---abs" className="heading-anchor"><a className="anchor-link docon docon-link" href="#example---abs" aria-labelledby="example---abs" />Ejemplo: Abs</h2>
            <p>En este ejemplo se <a href="/es-es/dotnet/api/system.math.abs" data-linktype="absolute-path">Abs</a> usa el método de la clase para calcular el valor absoluto de un <a href="/es-es/dotnet/api/system.math" data-linktype="absolute-path">Math</a> número.</p>
            <div className="codeHeader" id="code-try-1" data-bi-name="code-header"><span className="language">VB</span><button type="button" className="action position-relative" data-bi-name="copy" aria-label="Copiar código">
                <span className="icon margin-right-xxs">
                    <span className="docon docon-edit-copy" role="presentation" />
                </span>
                <span>Copiar</span>
                <div className="successful-copy-alert position-absolute right-0 top-0 left-0 bottom-0 display-flex align-items-center justify-content-center has-text-success-invert has-background-success is-transparent" aria-hidden="true">
                    <span className="icon font-size-l">
                        <span className="docon docon-check-mark" role="presentation" />
                    </span>
                </div>
            </button></div><pre tabIndex={0} className="has-inner-focus"><code className="lang-vb" data-author-content="Dim x As Double = Math.Abs(50.3)
      Dim y As Double = Math.Abs(-50.3)
      Console.WriteLine(x)
      Console.WriteLine(y)
      ' This example produces the following output:
      ' 50.3
      ' 50.3
      "><span><span className="hljs-keyword">Dim</span> x <span className="hljs-keyword">As</span> <span className="hljs-built_in">Double</span> = Math.Abs(<span className="hljs-number">50.3</span>){"\n"}<span className="hljs-keyword">Dim</span> y <span className="hljs-keyword">As</span> <span className="hljs-built_in">Double</span> = Math.Abs(<span className="hljs-number">-50.3</span>){"\n"}Console.WriteLine(x){"\n"}Console.WriteLine(y){"\n"}<span className="hljs-comment">' This example produces the following output:</span>{"\n"}<span className="hljs-comment">' 50.3</span>{"\n"}<span className="hljs-comment">' 50.3</span>{"\n"}</span></code></pre>
            <h2 id="example---atan" className="heading-anchor"><a className="anchor-link docon docon-link" href="#example---atan" aria-labelledby="example---atan" />Ejemplo: Atan</h2>
            <p>En este ejemplo se <a href="/es-es/dotnet/api/system.math.atan" data-linktype="absolute-path">Atan</a> usa el método de la clase para calcular el valor de <a href="/es-es/dotnet/api/system.math" data-linktype="absolute-path">Math</a> pi.</p>
            <div className="codeHeader" id="code-try-2" data-bi-name="code-header"><span className="language">VB</span><button type="button" className="action position-relative" data-bi-name="copy" aria-label="Copiar código">
                <span className="icon margin-right-xxs">
                    <span className="docon docon-edit-copy" role="presentation" />
                </span>
                <span>Copiar</span>
                <div className="successful-copy-alert position-absolute right-0 top-0 left-0 bottom-0 display-flex align-items-center justify-content-center has-text-success-invert has-background-success is-transparent" aria-hidden="true">
                    <span className="icon font-size-l">
                        <span className="docon docon-check-mark" role="presentation" />
                    </span>
                </div>
            </button></div><pre tabIndex={0} className="has-inner-focus"><code className="lang-vb" data-author-content="Public Function GetPi() As Double
          ' Calculate the value of pi.
          Return 4.0 * Math.Atan(1.0)
      End Function
      "><span><span className="hljs-keyword">Public</span> <span className="hljs-keyword">Function</span> GetPi() <span className="hljs-keyword">As</span> <span className="hljs-built_in">Double</span>{"\n"}{"    "}<span className="hljs-comment">' Calculate the value of pi.</span>{"\n"}{"    "}<span className="hljs-keyword">Return</span> <span className="hljs-number">4.0</span> * Math.Atan(<span className="hljs-number">1.0</span>){"\n"}<span className="hljs-keyword">End</span> <span className="hljs-keyword">Function</span>{"\n"}</span></code></pre>
            <div className="alert is-info">
                <p className="alert-title"><span className="docon docon-status-error-outline" aria-hidden="true" /> Nota</p>
                <p>La <a href="/es-es/dotnet/api/system.math" data-linktype="absolute-path">System.Math</a> clase contiene un campo <a href="/es-es/dotnet/api/system.math.pi" data-linktype="absolute-path">Math.PI</a> constante. Puede usarlo en lugar de calcularlo.</p>
            </div>
            <h2 id="example---cos" className="heading-anchor"><a className="anchor-link docon docon-link" href="#example---cos" aria-labelledby="example---cos" />Ejemplo: Cos</h2>
            <p>En este ejemplo se <a href="/es-es/dotnet/api/system.math.cos" data-linktype="absolute-path">Cos</a> usa el método de la clase para devolver el <a href="/es-es/dotnet/api/system.math" data-linktype="absolute-path">Math</a> coseno de un ángulo.</p>
            <div className="codeHeader" id="code-try-3" data-bi-name="code-header"><span className="language">VB</span><button type="button" className="action position-relative" data-bi-name="copy" aria-label="Copiar código">
                <span className="icon margin-right-xxs">
                    <span className="docon docon-edit-copy" role="presentation" />
                </span>
                <span>Copiar</span>
                <div className="successful-copy-alert position-absolute right-0 top-0 left-0 bottom-0 display-flex align-items-center justify-content-center has-text-success-invert has-background-success is-transparent" aria-hidden="true">
                    <span className="icon font-size-l">
                        <span className="docon docon-check-mark" role="presentation" />
                    </span>
                </div>
            </button></div><pre tabIndex={0} className="has-inner-focus"><code className="lang-vb" data-author-content="Public Function Sec(angle As Double) As Double
          ' Calculate the secant of angle, in radians.
          Return 1.0 / Math.Cos(angle)
      End Function
      "><span><span className="hljs-keyword">Public</span> <span className="hljs-keyword">Function</span> Sec(angle <span className="hljs-keyword">As</span> <span className="hljs-built_in">Double</span>) <span className="hljs-keyword">As</span> <span className="hljs-built_in">Double</span>{"\n"}{"    "}<span className="hljs-comment">' Calculate the secant of angle, in radians.</span>{"\n"}{"    "}<span className="hljs-keyword">Return</span> <span className="hljs-number">1.0</span> / Math.Cos(angle){"\n"}<span className="hljs-keyword">End</span> <span className="hljs-keyword">Function</span>{"\n"}</span></code></pre>
            <h2 id="example---exp" className="heading-anchor"><a className="anchor-link docon docon-link" href="#example---exp" aria-labelledby="example---exp" />Ejemplo: Exp</h2>
            <p>En este ejemplo se <a href="/es-es/dotnet/api/system.math.exp" data-linktype="absolute-path">Exp</a> usa el método de la clase para devolver e elevado a una <a href="/es-es/dotnet/api/system.math" data-linktype="absolute-path">Math</a> potencia.</p>
            <div className="codeHeader" id="code-try-4" data-bi-name="code-header"><span className="language">VB</span><button type="button" className="action position-relative" data-bi-name="copy" aria-label="Copiar código">
                <span className="icon margin-right-xxs">
                    <span className="docon docon-edit-copy" role="presentation" />
                </span>
                <span>Copiar</span>
                <div className="successful-copy-alert position-absolute right-0 top-0 left-0 bottom-0 display-flex align-items-center justify-content-center has-text-success-invert has-background-success is-transparent" aria-hidden="true">
                    <span className="icon font-size-l">
                        <span className="docon docon-check-mark" role="presentation" />
                    </span>
                </div>
            </button></div><pre tabIndex={0} className="has-inner-focus"><code className="lang-vb" data-author-content="Public Function Sinh(angle As Double) As Double
          ' Calculate hyperbolic sine of an angle, in radians.
          Return (Math.Exp(angle) - Math.Exp(-angle)) / 2.0
      End Function
      "><span><span className="hljs-keyword">Public</span> <span className="hljs-keyword">Function</span> Sinh(angle <span className="hljs-keyword">As</span> <span className="hljs-built_in">Double</span>) <span className="hljs-keyword">As</span> <span className="hljs-built_in">Double</span>{"\n"}{"    "}<span className="hljs-comment">' Calculate hyperbolic sine of an angle, in radians.</span>{"\n"}{"    "}<span className="hljs-keyword">Return</span> (Math.Exp(angle) - Math.Exp(-angle)) / <span className="hljs-number">2.0</span>{"\n"}<span className="hljs-keyword">End</span> <span className="hljs-keyword">Function</span>{"\n"}</span></code></pre>
            <h2 id="example---log" className="heading-anchor"><a className="anchor-link docon docon-link" href="#example---log" aria-labelledby="example---log" />Ejemplo: registro</h2>
            <p>En este ejemplo se <a href="/es-es/dotnet/api/system.math.log" data-linktype="absolute-path">Log</a> usa el método de la clase para devolver el <a href="/es-es/dotnet/api/system.math" data-linktype="absolute-path">Math</a> logaritmo natural de un número.</p>
            <div className="codeHeader" id="code-try-5" data-bi-name="code-header"><span className="language">VB</span><button type="button" className="action position-relative" data-bi-name="copy" aria-label="Copiar código">
                <span className="icon margin-right-xxs">
                    <span className="docon docon-edit-copy" role="presentation" />
                </span>
                <span>Copiar</span>
                <div className="successful-copy-alert position-absolute right-0 top-0 left-0 bottom-0 display-flex align-items-center justify-content-center has-text-success-invert has-background-success is-transparent" aria-hidden="true">
                    <span className="icon font-size-l">
                        <span className="docon docon-check-mark" role="presentation" />
                    </span>
                </div>
            </button></div><pre tabIndex={0} className="has-inner-focus"><code className="lang-vb" data-author-content="Public Function Asinh(value As Double) As Double
          ' Calculate inverse hyperbolic sine, in radians.
          Return Math.Log(value + Math.Sqrt(value * value + 1.0))
      End Function
      "><span><span className="hljs-keyword">Public</span> <span className="hljs-keyword">Function</span> Asinh(value <span className="hljs-keyword">As</span> <span className="hljs-built_in">Double</span>) <span className="hljs-keyword">As</span> <span className="hljs-built_in">Double</span>{"\n"}{"    "}<span className="hljs-comment">' Calculate inverse hyperbolic sine, in radians.</span>{"\n"}{"    "}<span className="hljs-keyword">Return</span> Math.Log(value + Math.Sqrt(value * value + <span className="hljs-number">1.0</span>)){"\n"}<span className="hljs-keyword">End</span> <span className="hljs-keyword">Function</span>{"\n"}</span></code></pre>
            <h2 id="example---round" className="heading-anchor"><a className="anchor-link docon docon-link" href="#example---round" aria-labelledby="example---round" />Ejemplo: Round</h2>
            <p>En este ejemplo se <a href="/es-es/dotnet/api/system.math.round" data-linktype="absolute-path">Round</a> usa el método de la clase para <a href="/es-es/dotnet/api/system.math" data-linktype="absolute-path">Math</a> redondear un número al entero más cercano.</p>
            <div className="codeHeader" id="code-try-6" data-bi-name="code-header"><span className="language">VB</span><button type="button" className="action position-relative" data-bi-name="copy" aria-label="Copiar código">
                <span className="icon margin-right-xxs">
                    <span className="docon docon-edit-copy" role="presentation" />
                </span>
                <span>Copiar</span>
                <div className="successful-copy-alert position-absolute right-0 top-0 left-0 bottom-0 display-flex align-items-center justify-content-center has-text-success-invert has-background-success is-transparent" aria-hidden="true">
                    <span className="icon font-size-l">
                        <span className="docon docon-check-mark" role="presentation" />
                    </span>
                </div>
            </button></div><pre tabIndex={0} className="has-inner-focus"><code className="lang-vb" data-author-content="Dim myVar2 As Double = Math.Round(2.8)
      Console.WriteLine(myVar2)
      ' The code produces the following output:
      ' 3
      "><span><span className="hljs-keyword">Dim</span> myVar2 <span className="hljs-keyword">As</span> <span className="hljs-built_in">Double</span> = Math.Round(<span className="hljs-number">2.8</span>){"\n"}Console.WriteLine(myVar2){"\n"}<span className="hljs-comment">' The code produces the following output:</span>{"\n"}<span className="hljs-comment">' 3</span>{"\n"}</span></code></pre>
            <h2 id="example---sign" className="heading-anchor"><a className="anchor-link docon docon-link" href="#example---sign" aria-labelledby="example---sign" />Ejemplo: Firmar</h2>
            <p>En este ejemplo se <a href="/es-es/dotnet/api/system.math.sign" data-linktype="absolute-path">Sign</a> usa el método de la clase para determinar el signo de un <a href="/es-es/dotnet/api/system.math" data-linktype="absolute-path">Math</a> número.</p>
            <div className="codeHeader" id="code-try-7" data-bi-name="code-header"><span className="language">VB</span><button type="button" className="action position-relative" data-bi-name="copy" aria-label="Copiar código">
                <span className="icon margin-right-xxs">
                    <span className="docon docon-edit-copy" role="presentation" />
                </span>
                <span>Copiar</span>
                <div className="successful-copy-alert position-absolute right-0 top-0 left-0 bottom-0 display-flex align-items-center justify-content-center has-text-success-invert has-background-success is-transparent" aria-hidden="true">
                    <span className="icon font-size-l">
                        <span className="docon docon-check-mark" role="presentation" />
                    </span>
                </div>
            </button></div><pre tabIndex={0} className="has-inner-focus"><code className="lang-vb" data-author-content="Dim mySign1 As Integer = Math.Sign(12)
      Dim mySign2 As Integer = Math.Sign(-2.4)
      Dim mySign3 As Integer = Math.Sign(0)
      Console.WriteLine(mySign1)
      Console.WriteLine(mySign2)
      Console.WriteLine(mySign3)
      ' The code produces the following output:
      ' 1
      ' -1
      ' 0
      "><span><span className="hljs-keyword">Dim</span> mySign1 <span className="hljs-keyword">As</span> <span className="hljs-built_in">Integer</span> = Math.Sign(<span className="hljs-number">12</span>){"\n"}<span className="hljs-keyword">Dim</span> mySign2 <span className="hljs-keyword">As</span> <span className="hljs-built_in">Integer</span> = Math.Sign(<span className="hljs-number">-2.4</span>){"\n"}<span className="hljs-keyword">Dim</span> mySign3 <span className="hljs-keyword">As</span> <span className="hljs-built_in">Integer</span> = Math.Sign(<span className="hljs-number">0</span>){"\n"}Console.WriteLine(mySign1){"\n"}Console.WriteLine(mySign2){"\n"}Console.WriteLine(mySign3){"\n"}<span className="hljs-comment">' The code produces the following output:</span>{"\n"}<span className="hljs-comment">' 1</span>{"\n"}<span className="hljs-comment">' -1</span>{"\n"}<span className="hljs-comment">' 0</span>{"\n"}</span></code></pre>
            <h2 id="example---sin" className="heading-anchor"><a className="anchor-link docon docon-link" href="#example---sin" aria-labelledby="example---sin" />Ejemplo: Sin</h2>
            <p>En este ejemplo se <a href="/es-es/dotnet/api/system.math.sin" data-linktype="absolute-path">Sin</a> usa el método de la clase para devolver el seno de un <a href="/es-es/dotnet/api/system.math" data-linktype="absolute-path">Math</a> ángulo.</p>
            <div className="codeHeader" id="code-try-8" data-bi-name="code-header"><span className="language">VB</span><button type="button" className="action position-relative" data-bi-name="copy" aria-label="Copiar código">
                <span className="icon margin-right-xxs">
                    <span className="docon docon-edit-copy" role="presentation" />
                </span>
                <span>Copiar</span>
                <div className="successful-copy-alert position-absolute right-0 top-0 left-0 bottom-0 display-flex align-items-center justify-content-center has-text-success-invert has-background-success is-transparent" aria-hidden="true">
                    <span className="icon font-size-l">
                        <span className="docon docon-check-mark" role="presentation" />
                    </span>
                </div>
            </button></div><pre tabIndex={0} className="has-inner-focus"><code className="lang-vb" data-author-content="Public Function Csc(angle As Double) As Double
          ' Calculate cosecant of an angle, in radians.
          Return 1.0 / Math.Sin(angle)
      End Function
      "><span><span className="hljs-keyword">Public</span> <span className="hljs-keyword">Function</span> Csc(angle <span className="hljs-keyword">As</span> <span className="hljs-built_in">Double</span>) <span className="hljs-keyword">As</span> <span className="hljs-built_in">Double</span>{"\n"}{"    "}<span className="hljs-comment">' Calculate cosecant of an angle, in radians.</span>{"\n"}{"    "}<span className="hljs-keyword">Return</span> <span className="hljs-number">1.0</span> / Math.Sin(angle){"\n"}<span className="hljs-keyword">End</span> <span className="hljs-keyword">Function</span>{"\n"}</span></code></pre>
            <h2 id="example---sqrt" className="heading-anchor"><a className="anchor-link docon docon-link" href="#example---sqrt" aria-labelledby="example---sqrt" />Ejemplo: Sqrt</h2>
            <p>En este ejemplo se <a href="/es-es/dotnet/api/system.math.sqrt" data-linktype="absolute-path">Sqrt</a> usa el método de la clase para calcular la raíz cuadrada de un <a href="/es-es/dotnet/api/system.math" data-linktype="absolute-path">Math</a> número.</p>
            <div className="codeHeader" id="code-try-9" data-bi-name="code-header"><span className="language">VB</span><button type="button" className="action position-relative" data-bi-name="copy" aria-label="Copiar código">
                <span className="icon margin-right-xxs">
                    <span className="docon docon-edit-copy" role="presentation" />
                </span>
                <span>Copiar</span>
                <div className="successful-copy-alert position-absolute right-0 top-0 left-0 bottom-0 display-flex align-items-center justify-content-center has-text-success-invert has-background-success is-transparent" aria-hidden="true">
                    <span className="icon font-size-l">
                        <span className="docon docon-check-mark" role="presentation" />
                    </span>
                </div>
            </button></div><pre tabIndex={0} className="has-inner-focus"><code className="lang-vb" data-author-content="Dim mySqrt1 As Double = Math.Sqrt(4)
      Dim mySqrt2 As Double = Math.Sqrt(23)
      Dim mySqrt3 As Double = Math.Sqrt(0)
      Dim mySqrt4 As Double = Math.Sqrt(-4)
      Console.WriteLine(mySqrt1)
      Console.WriteLine(mySqrt2)
      Console.WriteLine(mySqrt3)
      Console.WriteLine(mySqrt4)
      ' The code produces the following output:
      ' 2
      ' 4.79583152331272
      ' 0
      ' NaN
      "><span><span className="hljs-keyword">Dim</span> mySqrt1 <span className="hljs-keyword">As</span> <span className="hljs-built_in">Double</span> = Math.Sqrt(<span className="hljs-number">4</span>){"\n"}<span className="hljs-keyword">Dim</span> mySqrt2 <span className="hljs-keyword">As</span> <span className="hljs-built_in">Double</span> = Math.Sqrt(<span className="hljs-number">23</span>){"\n"}<span className="hljs-keyword">Dim</span> mySqrt3 <span className="hljs-keyword">As</span> <span className="hljs-built_in">Double</span> = Math.Sqrt(<span className="hljs-number">0</span>){"\n"}<span className="hljs-keyword">Dim</span> mySqrt4 <span className="hljs-keyword">As</span> <span className="hljs-built_in">Double</span> = Math.Sqrt(<span className="hljs-number">-4</span>){"\n"}Console.WriteLine(mySqrt1){"\n"}Console.WriteLine(mySqrt2){"\n"}Console.WriteLine(mySqrt3){"\n"}Console.WriteLine(mySqrt4){"\n"}<span className="hljs-comment">' The code produces the following output:</span>{"\n"}<span className="hljs-comment">' 2</span>{"\n"}<span className="hljs-comment">' 4.79583152331272</span>{"\n"}<span className="hljs-comment">' 0</span>{"\n"}<span className="hljs-comment">' NaN</span>{"\n"}</span></code></pre>
            <h2 id="example---tan" className="heading-anchor"><a className="anchor-link docon docon-link" href="#example---tan" aria-labelledby="example---tan" />Ejemplo: Tan</h2>
            <p>En este ejemplo se <a href="/es-es/dotnet/api/system.math.tan" data-linktype="absolute-path">Tan</a> usa el método de la clase para devolver la <a href="/es-es/dotnet/api/system.math" data-linktype="absolute-path">Math</a> tangente de un ángulo.</p>
            <div className="codeHeader" id="code-try-10" data-bi-name="code-header"><span className="language">VB</span><button type="button" className="action position-relative" data-bi-name="copy" aria-label="Copiar código">
                <span className="icon margin-right-xxs">
                    <span className="docon docon-edit-copy" role="presentation" />
                </span>
                <span>Copiar</span>
                <div className="successful-copy-alert position-absolute right-0 top-0 left-0 bottom-0 display-flex align-items-center justify-content-center has-text-success-invert has-background-success is-transparent" aria-hidden="true">
                    <span className="icon font-size-l">
                        <span className="docon docon-check-mark" role="presentation" />
                    </span>
                </div>
            </button></div><pre tabIndex={0} className="has-inner-focus"><code className="lang-vb" data-author-content="Public Function Ctan(angle As Double) As Double
          ' Calculate cotangent of an angle, in radians.
          Return 1.0 / Math.Tan(angle)
      End Function
      "><span><span className="hljs-keyword">Public</span> <span className="hljs-keyword">Function</span> Ctan(angle <span className="hljs-keyword">As</span> <span className="hljs-built_in">Double</span>) <span className="hljs-keyword">As</span> <span className="hljs-built_in">Double</span>{"\n"}{"    "}<span className="hljs-comment">' Calculate cotangent of an angle, in radians.</span>{"\n"}{"    "}<span className="hljs-keyword">Return</span> <span className="hljs-number">1.0</span> / Math.Tan(angle){"\n"}<span className="hljs-keyword">End</span> <span className="hljs-keyword">Function</span>{"\n"}</span></code></pre>
            <h2 id="see-also" className="heading-anchor"><a className="anchor-link docon docon-link" href="#see-also" aria-labelledby="see-also" />Consulta también</h2>
            <ul>
                <li><a href="/es-es/dotnet/api/microsoft.visualbasic.vbmath.rnd" data-linktype="absolute-path">Rnd</a></li>
                <li><a href="/es-es/dotnet/api/microsoft.visualbasic.vbmath.randomize" data-linktype="absolute-path">Randomize</a></li>
                <li><a href="/es-es/dotnet/api/system.double.nan" data-linktype="absolute-path">NaN</a></li>
                <li><a href="../keywords/derived-math-functions" data-linktype="relative-path">Funciones matemáticas derivadas</a></li>
                <li><a href="../operators/arithmetic-operators" data-linktype="relative-path">Operadores aritméticos</a></li>
            </ul>
            {/* </content> */}
        </main>
        ,
        img: <img src="" alt="No imagen" />
    },
    {
        title: "Estructuras de Control",
        info: <div id="post-31" className="post-31 page type-page status-publish hentry">
            <h1 className="entry-title">Estructuras de Control</h1>
            <div className="entry-content">
                <p data-adtags-visited="true">Antes de Hablar de las Estructuras arriba mencionadas debemos de conocer la estructura básica de un Programa de C#, la misma que tiene la siguiente estructura:</p>
                <div id="codeSnippetWrapper">
                    <div id="codeSnippet" style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', padding: 0 }}>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum1" style={{ color: '#606060' }}> 1:</span> <span style={{ color: '#0000ff' }}>namespace</span> Ejemplos_MVA <span style={{ color: '#008000' }}>//Espacio de Nombres este permite agrupar clases en uno</span></pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum2" style={{ color: '#606060' }}> 2:</span> <span style={{ color: '#008000' }}>//solo, ojo que se verá la funcionalidad en Programación Orientada a Objetos.</span></pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum3" style={{ color: '#606060' }}> 3:</span> {"{"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum4" style={{ color: '#606060' }}> 4:</span>{"     "}<span style={{ color: '#0000ff' }}>class</span> Program <span style={{ color: '#008000' }}>//Definimos una nueva Clase</span></pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum5" style={{ color: '#606060' }}> 5:</span>{"     "}{"{"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum6" style={{ color: '#606060' }}> 6:</span>{"         "}<span style={{ color: '#0000ff' }}>static</span> <span style={{ color: '#0000ff' }}>void</span> Main(<span style={{ color: '#0000ff' }}>string</span>[] args) <span style={{ color: '#008000' }}>// Punto de entrada al programa</span></pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum7" style={{ color: '#606060' }}> 7:</span>{"         "}{"{"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum8" style={{ color: '#606060' }}> 8:</span>{"             "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Hola Mundo"</span>); <span style={{ color: '#008000' }}>//Escribe en consola Hola Mundo</span></pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum9" style={{ color: '#606060' }}> 9:</span>{"         "}{"}"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum10" style={{ color: '#606060' }}> 10:</span>{"     "}{"}"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum11" style={{ color: '#606060' }}> 11:</span> {"}"}</pre>
                    </div>
                </div>
                <p data-adtags-visited="true">Si hay dudas al respecto no se preocupen que lo veremos más adelante a detalle.</p>
                <h3><strong>Estructuras Selectivas:</strong></h3>
                <p align="justify" data-adtags-visited="true">Habitualmente en la vida nosotros tomamos decisiones tan simples como un si o un no. En informática no puede ser la excepción así que aquí tenemos a las Estructuras Secuenciales; esta estructura se encarga del Flujo del Programa, veamos un ejemplo:</p>
                <p align="justify" data-adtags-visited="true">José debe de viajar a la ciudad de Huancavelica desde la ciudad de lima tiene a las empresas de Transportes Ticllas y Expreso Molina. En E.T. Ticllas el Costo de Pasaje es de S/. 45.00 Nuevos Soles y en Expreso Molina S/. 50.00 Nuevos Soles; José espera el Giro de S/. 50.00 que su mamá le mando por el Banco de Crédito para poder hacer su viaje.</p>
                <p align="justify" data-adtags-visited="true">Se que es un problema casi común, pues iremos donde nuestra economía nos permita iremos, pero veamos bien José viajara por una de las opciones que tiene y como lo hará “<strong>Tomando una Decisión</strong>”; bien Viaja por la Empresa Ticllas o Expreso Molina, veamos esto en un código de C#:</p>
                <div id="codeSnippetWrapper">
                    <div id="codeSnippet" style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', padding: 0 }}>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum1" style={{ color: '#606060' }}> 1:</span> <span style={{ color: '#0000ff' }}>if</span> (jose == ticllas)</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum2" style={{ color: '#606060' }}> 2:</span> {"{"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum3" style={{ color: '#606060' }}> 3:</span>{"     "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Viajo en Ticllas"</span>);</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum4" style={{ color: '#606060' }}> 4:</span> {"}"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum5" style={{ color: '#606060' }}> 5:</span> <span style={{ color: '#0000ff' }}>if</span> (jose == exp_Molina)</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum6" style={{ color: '#606060' }}> 6:</span> {"{"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum7" style={{ color: '#606060' }}> 7:</span>{"     "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Viajo en Expreso Molina"</span>);</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum8" style={{ color: '#606060' }}> 8:</span> {"}"}</pre>
                    </div>
                </div>
                <p align="justify" data-adtags-visited="true">Lo que se hace es Seleccionar una de las opciones pero ahora pongamos un concepto más técnico:</p>
                <h4><strong>Una estructura selectiva se encarga de decidir bajo que condiciones se permite, o no se permite, la ejecución de una o varias sentencias de un algoritmo. De ahí que suele llamarse estructura de decisión o alternativa.</strong></h4>
                <p className="inline-ad-slot" id="inline-ad-0" style={{ float: 'left', height: '0px', margin: '0 auto', overflow: 'hidden', width: '640px' }} data-adtags-width={640} data-adtags-visited="true" /><p align="justify" data-adtags-visited="true">Si notamos en el Ejemplo anterior se podría dar que José viaje en los dos servicios pero eso no debería de pasar a poco no?</p>
                <p align="justify">Entonces como solucionar:</p>
                <div id="codeSnippetWrapper">
                    <div id="codeSnippet" style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', padding: 0 }}>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum1" style={{ color: '#606060' }}> 1:</span> <span style={{ color: '#0000ff' }}>if</span> (jose == ticllas)</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum2" style={{ color: '#606060' }}> 2:</span> {"{"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum3" style={{ color: '#606060' }}> 3:</span>{"     "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Viajo en Ticllas"</span>);</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum4" style={{ color: '#606060' }}> 4:</span> {"}"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum5" style={{ color: '#606060' }}> 5:</span> <span style={{ color: '#0000ff' }}>else</span></pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum6" style={{ color: '#606060' }}> 6:</span> {"{"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum7" style={{ color: '#606060' }}> 7:</span>{"     "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Viajo en Expreso Molina"</span>);</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum8" style={{ color: '#606060' }}> 8:</span> {"}"}</pre>
                    </div>
                </div>
                <p align="justify">Sentencia If – Else(Si – De lo contrario)</p>
                <p align="justify">En este tipo de sentencia se valida la primera opción y si no se cumple directamente se pasa a el código de contenido en <strong>else, </strong>viendo el ejemplo entonces si no viaja en Ticllas viajará en Expreso Molina.</p>
                <p align="justify">Bueno ahora veamos un ejercicio un poco mas real:</p>
                <p align="justify">Desarrolle una aplicación que imprima un mensaje si la persona es mayor de edad. (En Perú mayor de edad es a los 18 años)</p>
                <p align="justify"><strong>Solución Básica</strong></p>
                <div id="codeSnippetWrapper">
                    <div id="codeSnippet" style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', padding: 0 }}>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum1" style={{ color: '#606060' }}> 1:</span> <span style={{ color: '#0000ff' }}>namespace</span> Ejemplos_MVA</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum2" style={{ color: '#606060' }}> 2:</span> {"{"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum3" style={{ color: '#606060' }}> 3:</span>{"     "}<span style={{ color: '#0000ff' }}>class</span> Program</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum4" style={{ color: '#606060' }}> 4:</span>{"     "}{"{"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum5" style={{ color: '#606060' }}> 5:</span>{"         "}<span style={{ color: '#0000ff' }}>static</span> <span style={{ color: '#0000ff' }}>void</span> Main(<span style={{ color: '#0000ff' }}>string</span>[] args)</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum6" style={{ color: '#606060' }}> 6:</span>{"         "}{"{"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum7" style={{ color: '#606060' }}> 7:</span>{"             "}<span style={{ color: '#0000ff' }}>int</span> edad = 0;</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum8" style={{ color: '#606060' }}> 8:</span>{"             "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Ingrese la edad: "</span>);</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum9" style={{ color: '#606060' }}> 9:</span>{"             "}edad = System.Convert.ToInt32(System.Console.ReadLine());</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum10" style={{ color: '#606060' }}> 10:</span>{"             "}<span style={{ color: '#0000ff' }}>if</span> (edad &gt;= 18)</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum11" style={{ color: '#606060' }}> 11:</span>{"             "}{"{"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum12" style={{ color: '#606060' }}> 12:</span>{"                 "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Es Mayor de Edad"</span>);</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum13" style={{ color: '#606060' }}> 13:</span>{"             "}{"}"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum14" style={{ color: '#606060' }}> 14:</span>{"             "}<span style={{ color: '#0000ff' }}>else</span></pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum15" style={{ color: '#606060' }}> 15:</span>{"             "}{"{"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum16" style={{ color: '#606060' }}> 16:</span>{"                 "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"No es mayor de edad"</span>);</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum17" style={{ color: '#606060' }}> 17:</span>{"             "}{"}"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum18" style={{ color: '#606060' }}> 18:</span>{"         "}{"}"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum19" style={{ color: '#606060' }}> 19:</span>{"     "}{"}"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum20" style={{ color: '#606060' }}> 20:</span></pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum21" style={{ color: '#606060' }}> 21:</span> {"}"}</pre>
                    </div>
                </div>
                <p><strong>Solución Optima</strong></p>
                <div id="codeSnippetWrapper">
                    <div id="codeSnippet" style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', padding: 0 }}>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum1" style={{ color: '#606060' }}> 1:</span> <span style={{ color: '#0000ff' }}>namespace</span> Ejemplos_MVA</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum2" style={{ color: '#606060' }}> 2:</span> {"{"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum3" style={{ color: '#606060' }}> 3:</span>{"     "}<span style={{ color: '#0000ff' }}>class</span> Program</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum4" style={{ color: '#606060' }}> 4:</span>{"     "}{"{"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum5" style={{ color: '#606060' }}> 5:</span>{"         "}<span style={{ color: '#0000ff' }}>static</span> <span style={{ color: '#0000ff' }}>void</span> Main(<span style={{ color: '#0000ff' }}>string</span>[] args)</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum6" style={{ color: '#606060' }}> 6:</span>{"         "}{"{"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum7" style={{ color: '#606060' }}> 7:</span>{"             "}<span style={{ color: '#0000ff' }}>int</span> edad = 0;</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum8" style={{ color: '#606060' }}> 8:</span>{"             "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Ingrese la edad: "</span>);</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum9" style={{ color: '#606060' }}> 9:</span>{"             "}edad = System.Convert.ToInt32(System.Console.ReadLine());</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum10" style={{ color: '#606060' }}> 10:</span>{"             "}<span style={{ color: '#0000ff' }}>if</span> (edad &gt;= 18)</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum11" style={{ color: '#606060' }}> 11:</span>{"             "}{"{"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum12" style={{ color: '#606060' }}> 12:</span>{"                 "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Es Mayor de Edad"</span>);</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum13" style={{ color: '#606060' }}> 13:</span>{"             "}{"}"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum14" style={{ color: '#606060' }}> 14:</span>{"             "}<span style={{ color: '#0000ff' }}>else</span> <span style={{ color: '#0000ff' }}>if</span> (edad &lt; 0)</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum15" style={{ color: '#606060' }}> 15:</span>{"             "}{"{"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum16" style={{ color: '#606060' }}> 16:</span>{"                 "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"No existe esa edad"</span>);</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum17" style={{ color: '#606060' }}> 17:</span>{"             "}{"}"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum18" style={{ color: '#606060' }}> 18:</span>{"             "}<span style={{ color: '#0000ff' }}>else</span></pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum19" style={{ color: '#606060' }}> 19:</span>{"             "}{"{"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum20" style={{ color: '#606060' }}> 20:</span>{"                 "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"No es mayor de edad"</span>);</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum21" style={{ color: '#606060' }}> 21:</span>{"             "}{"}"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum22" style={{ color: '#606060' }}> 22:</span>{"         "}{"}"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum23" style={{ color: '#606060' }}> 23:</span>{"     "}{"}"}</pre>
                        <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum24" style={{ color: '#606060' }}> 24:</span> {"}"}</pre>
                    </div>
                </div>
                <p><strong>Ahora veamos otro ejemplo:</strong></p>
                <p>Desarrolle una aplicación que nos permita saber lo siguiente, según la edad que se haya ingresado:</p>
                <ul>
                    <li>De 0 a 5 años –&gt; Niñez</li>
                    <li>De 6 a 12 años –&gt;&nbsp;Infancia</li>
                    <li>De 13 a 18 años –&gt; Adolescencia</li>
                    <li>De 19 a 28 años –&gt; Juventud</li>
                    <li>De 29 a 65 años -&gt; Adultez</li>
                    <li>De 66 a más –&gt; Adulto Mayor
                        <div id="codeSnippetWrapper">
                            <div id="codeSnippet" style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', padding: 0 }}>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum1" style={{ color: '#606060' }}> 1:</span> <span style={{ color: '#0000ff' }}>namespace</span> Ejemplos_MVA</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum2" style={{ color: '#606060' }}> 2:</span> {"{"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum3" style={{ color: '#606060' }}> 3:</span>{"     "}<span style={{ color: '#0000ff' }}>class</span> Program</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum4" style={{ color: '#606060' }}> 4:</span>{"     "}{"{"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum5" style={{ color: '#606060' }}> 5:</span>{"         "}<span style={{ color: '#0000ff' }}>static</span> <span style={{ color: '#0000ff' }}>void</span> Main(<span style={{ color: '#0000ff' }}>string</span>[] args)</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum6" style={{ color: '#606060' }}> 6:</span>{"         "}{"{"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum7" style={{ color: '#606060' }}> 7:</span>{"             "}<span style={{ color: '#0000ff' }}>int</span> edad = 0;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum8" style={{ color: '#606060' }}> 8:</span>{"             "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Ingrese la edad: "</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum9" style={{ color: '#606060' }}> 9:</span>{"             "}edad = System.Convert.ToInt32(System.Console.ReadLine());</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum10" style={{ color: '#606060' }}> 10:</span>{"             "}<span style={{ color: '#0000ff' }}>if</span> (edad &gt;= 0 &amp;&amp; edad&lt;=5)</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum11" style={{ color: '#606060' }}> 11:</span>{"             "}{"{"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum12" style={{ color: '#606060' }}> 12:</span>{"                 "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Infancia"</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum13" style={{ color: '#606060' }}> 13:</span>{"             "}{"}"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum14" style={{ color: '#606060' }}> 14:</span>{"             "}<span style={{ color: '#0000ff' }}>else</span> <span style={{ color: '#0000ff' }}>if</span> (edad &gt;= 6 &amp;&amp; edad&lt;=12)</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum15" style={{ color: '#606060' }}> 15:</span>{"             "}{"{"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum16" style={{ color: '#606060' }}> 16:</span>{"                 "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Niñez"</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum17" style={{ color: '#606060' }}> 17:</span>{"             "}{"}"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum18" style={{ color: '#606060' }}> 18:</span>{"             "}<span style={{ color: '#0000ff' }}>else</span> <span style={{ color: '#0000ff' }}>if</span> (edad &gt;= 13 &amp;&amp; edad &lt;= 18)</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum19" style={{ color: '#606060' }}> 19:</span>{"             "}{"{"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum20" style={{ color: '#606060' }}> 20:</span>{"                 "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Adolescencia"</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum21" style={{ color: '#606060' }}> 21:</span>{"             "}{"}"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum22" style={{ color: '#606060' }}> 22:</span>{"             "}<span style={{ color: '#0000ff' }}>else</span> <span style={{ color: '#0000ff' }}>if</span> (edad &gt;= 19 &amp;&amp; edad &lt;= 28)</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum23" style={{ color: '#606060' }}> 23:</span>{"             "}{"{"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum24" style={{ color: '#606060' }}> 24:</span>{"                 "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Juventud"</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum25" style={{ color: '#606060' }}> 25:</span>{"             "}{"}"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum26" style={{ color: '#606060' }}> 26:</span>{"             "}<span style={{ color: '#0000ff' }}>else</span> <span style={{ color: '#0000ff' }}>if</span> (edad &gt;= 29 &amp;&amp; edad &lt;= 65)</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum27" style={{ color: '#606060' }}> 27:</span>{"             "}{"{"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum28" style={{ color: '#606060' }}> 28:</span>{"                 "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Adultez"</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum29" style={{ color: '#606060' }}> 29:</span>{"             "}{"}"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum30" style={{ color: '#606060' }}> 30:</span>{"             "}<span style={{ color: '#0000ff' }}>else</span> <span style={{ color: '#0000ff' }}>if</span> (edad &gt;= 66)</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum31" style={{ color: '#606060' }}> 31:</span>{"             "}{"{"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum32" style={{ color: '#606060' }}> 32:</span>{"                 "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Adulto Mayor"</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum33" style={{ color: '#606060' }}> 33:</span>{"             "}{"}"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum34" style={{ color: '#606060' }}> 34:</span>{"             "}System.Console.Read();</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum35" style={{ color: '#606060' }}> 35:</span>{"         "}{"}"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum36" style={{ color: '#606060' }}> 36:</span>{"     "}{"}"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum37" style={{ color: '#606060' }}> 37:</span> {"}"}</pre>
                            </div>
                        </div>
                        <p>Bien ahora hablemos de otro tipo de sentencia:</p>
                        <p><strong>Switch – Case</strong></p>
                        <p>La instrucción switch es una instrucción de control que controla múltiples selecciones y enumeraciones pasando el control a una de las instrucciones case de su cuerpo, como se muestra en el ejemplo siguiente:</p>
                        <div id="codeSnippetWrapper">
                            <div id="codeSnippet" style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', padding: 0 }}>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum1" style={{ color: '#606060' }}> 1:</span> <span style={{ color: '#0000ff' }}>int</span> caseSwitch = 1;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum2" style={{ color: '#606060' }}> 2:</span> <span style={{ color: '#0000ff' }}>switch</span> (caseSwitch)</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum3" style={{ color: '#606060' }}> 3:</span> {"{"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum4" style={{ color: '#606060' }}> 4:</span>{"     "}<span style={{ color: '#0000ff' }}>case</span> 1:</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum5" style={{ color: '#606060' }}> 5:</span>{"         "}Console.WriteLine(<span style={{ color: '#006080' }}>"Caso 1"</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum6" style={{ color: '#606060' }}> 6:</span>{"         "}<span style={{ color: '#0000ff' }}>break</span>;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum7" style={{ color: '#606060' }}> 7:</span>{"     "}<span style={{ color: '#0000ff' }}>case</span> 2:</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum8" style={{ color: '#606060' }}> 8:</span>{"         "}Console.WriteLine(<span style={{ color: '#006080' }}>"Caso 2"</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum9" style={{ color: '#606060' }}> 9:</span>{"         "}<span style={{ color: '#0000ff' }}>break</span>;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum10" style={{ color: '#606060' }}> 10:</span>{"     "}<span style={{ color: '#0000ff' }}>default</span>:</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum11" style={{ color: '#606060' }}> 11:</span>{"         "}Console.WriteLine(<span style={{ color: '#006080' }}>"Caso por Defecto"</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum12" style={{ color: '#606060' }}> 12:</span>{"         "}<span style={{ color: '#0000ff' }}>break</span>;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum13" style={{ color: '#606060' }}> 13:</span> {"}"}</pre>
                            </div>
                        </div>
                        <p>Ahora veamos un ejemplo de este tipo de selección:</p>
                        <p>Desarrolle una aplicación que al ingresar un numero del 1 al 12, muestre su equivalente en los meses del año.</p>
                        <div id="codeSnippetWrapper">
                            <div id="codeSnippet" style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', padding: 0 }}>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum1" style={{ color: '#606060' }}> 1:</span> <span style={{ color: '#0000ff' }}>namespace</span> Ejemplos_MVA</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum2" style={{ color: '#606060' }}> 2:</span> {"{"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum3" style={{ color: '#606060' }}> 3:</span>{"     "}<span style={{ color: '#0000ff' }}>class</span> Program</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum4" style={{ color: '#606060' }}> 4:</span>{"     "}{"{"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum5" style={{ color: '#606060' }}> 5:</span>{"         "}<span style={{ color: '#0000ff' }}>static</span> <span style={{ color: '#0000ff' }}>void</span> Main(<span style={{ color: '#0000ff' }}>string</span>[] args)</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum6" style={{ color: '#606060' }}> 6:</span>{"         "}{"{"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum7" style={{ color: '#606060' }}> 7:</span>{"             "}<span style={{ color: '#0000ff' }}>int</span> mes = 0;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum8" style={{ color: '#606060' }}> 8:</span>{"             "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Ingrese el Mes: "</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum9" style={{ color: '#606060' }}> 9:</span>{"             "}mes = System.Convert.ToInt32(System.Console.ReadLine());</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum10" style={{ color: '#606060' }}> 10:</span>{"             "}<span style={{ color: '#0000ff' }}>switch</span> (mes)</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum11" style={{ color: '#606060' }}> 11:</span>{"             "}{"{"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum12" style={{ color: '#606060' }}> 12:</span>{"                 "}<span style={{ color: '#0000ff' }}>case</span> 1:</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum13" style={{ color: '#606060' }}> 13:</span>{"                     "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Enero"</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum14" style={{ color: '#606060' }}> 14:</span>{"                     "}<span style={{ color: '#0000ff' }}>break</span>;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum15" style={{ color: '#606060' }}> 15:</span>{"                 "}<span style={{ color: '#0000ff' }}>case</span> 2:</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum16" style={{ color: '#606060' }}> 16:</span>{"                     "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Febrero"</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum17" style={{ color: '#606060' }}> 17:</span>{"                     "}<span style={{ color: '#0000ff' }}>break</span>;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum18" style={{ color: '#606060' }}> 18:</span>{"                 "}<span style={{ color: '#0000ff' }}>case</span> 3:</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum19" style={{ color: '#606060' }}> 19:</span>{"                     "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Marzo"</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum20" style={{ color: '#606060' }}> 20:</span>{"                     "}<span style={{ color: '#0000ff' }}>break</span>;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum21" style={{ color: '#606060' }}> 21:</span>{"                 "}<span style={{ color: '#0000ff' }}>case</span> 4:</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum22" style={{ color: '#606060' }}> 22:</span>{"                     "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Abril"</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum23" style={{ color: '#606060' }}> 23:</span>{"                     "}<span style={{ color: '#0000ff' }}>break</span>;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum24" style={{ color: '#606060' }}> 24:</span>{"                 "}<span style={{ color: '#0000ff' }}>case</span> 5:</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum25" style={{ color: '#606060' }}> 25:</span>{"                     "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Mayo"</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum26" style={{ color: '#606060' }}> 26:</span>{"                     "}<span style={{ color: '#0000ff' }}>break</span>;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum27" style={{ color: '#606060' }}> 27:</span>{"                 "}<span style={{ color: '#0000ff' }}>case</span> 6:</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum28" style={{ color: '#606060' }}> 28:</span>{"                     "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Junio"</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum29" style={{ color: '#606060' }}> 29:</span>{"                     "}<span style={{ color: '#0000ff' }}>break</span>;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum30" style={{ color: '#606060' }}> 30:</span>{"                 "}<span style={{ color: '#0000ff' }}>case</span> 7:</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum31" style={{ color: '#606060' }}> 31:</span>{"                     "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Julio"</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum32" style={{ color: '#606060' }}> 32:</span>{"                     "}<span style={{ color: '#0000ff' }}>break</span>;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum33" style={{ color: '#606060' }}> 33:</span>{"                 "}<span style={{ color: '#0000ff' }}>case</span> 8:</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum34" style={{ color: '#606060' }}> 34:</span>{"                     "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Agosto"</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum35" style={{ color: '#606060' }}> 35:</span>{"                     "}<span style={{ color: '#0000ff' }}>break</span>;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum36" style={{ color: '#606060' }}> 36:</span>{"                 "}<span style={{ color: '#0000ff' }}>case</span> 9:</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum37" style={{ color: '#606060' }}> 37:</span>{"                     "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Septiembre"</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum38" style={{ color: '#606060' }}> 38:</span>{"                     "}<span style={{ color: '#0000ff' }}>break</span>;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum39" style={{ color: '#606060' }}> 39:</span>{"                 "}<span style={{ color: '#0000ff' }}>case</span> 10:</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum40" style={{ color: '#606060' }}> 40:</span>{"                     "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Octubre"</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum41" style={{ color: '#606060' }}> 41:</span>{"                     "}<span style={{ color: '#0000ff' }}>break</span>;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum42" style={{ color: '#606060' }}> 42:</span>{"                 "}<span style={{ color: '#0000ff' }}>case</span> 11:</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum43" style={{ color: '#606060' }}> 43:</span>{"                     "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Noviembre"</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum44" style={{ color: '#606060' }}> 44:</span>{"                     "}<span style={{ color: '#0000ff' }}>break</span>;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum45" style={{ color: '#606060' }}> 45:</span>{"                 "}<span style={{ color: '#0000ff' }}>case</span> 12:</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum46" style={{ color: '#606060' }}> 46:</span>{"                     "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Diciembre"</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum47" style={{ color: '#606060' }}> 47:</span>{"                     "}<span style={{ color: '#0000ff' }}>break</span>;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum48" style={{ color: '#606060' }}> 48:</span>{"                 "}<span style={{ color: '#0000ff' }}>default</span>:</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum49" style={{ color: '#606060' }}> 49:</span>{"                     "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"No haz ingresado un numero valido"</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum50" style={{ color: '#606060' }}> 50:</span>{"                     "}<span style={{ color: '#0000ff' }}>break</span>;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum51" style={{ color: '#606060' }}> 51:</span>{"             "}{"}"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum52" style={{ color: '#606060' }}> 52:</span>{"             "}System.Console.Read();</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum53" style={{ color: '#606060' }}> 53:</span>{"         "}{"}"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum54" style={{ color: '#606060' }}> 54:</span>{"     "}{"}"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum55" style={{ color: '#606060' }}> 55:</span> {"}"}</pre>
                            </div>
                        </div>
                        <p>Como se dan cuenta en dentro de cada uno de los <strong>CASE </strong>hay una sentencia<strong> break, </strong>esta es la encargada de indicarle al momento de la consulta que ya no busque mas; es decir finalizar el Switch.</p>
                        <p>Por otro lado la sentencia <strong>DEFAULT</strong>&nbsp; es la encargada de realizar acciones cuando el dato ingresado no corresponda a ninguna de las opciones marcadas con el <strong>CASE</strong>.</p>
                        <h3><strong>Estructuras Repetitivas:</strong></h3>
                        <p>Para repetir varias veces un proceso determinado haremos uso de los ciclos repetitivos, a los cuales se les conoce con el nombre de estructura repetitiva, estructura iterativa, lazo o bucle.</p>
                        <ul>
                            <li>Entrada Asegurada (while)</li>
                        </ul>
                    </li>
                    <li>Ciclo Controlado Por Contador (for)</li>
                    <li>Hacer Mientras (do.. while)<br />
                        <h4><strong>Entrada Asegurada (while)</strong></h4>
                        <p>Estos son mayormente cuando queremos repetir instrucciones un número indefinido de veces.</p>
                        <div id="codeSnippetWrapper">
                            <div id="codeSnippet" style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', padding: 0 }}>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum1" style={{ color: '#606060' }}> 1:</span> <span style={{ color: '#0000ff' }}>namespace</span> Ejemplos_MVA</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum2" style={{ color: '#606060' }}> 2:</span> {"{"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum3" style={{ color: '#606060' }}> 3:</span>{"     "}<span style={{ color: '#0000ff' }}>class</span> Program</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum4" style={{ color: '#606060' }}> 4:</span>{"     "}{"{"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum5" style={{ color: '#606060' }}> 5:</span>{"         "}<span style={{ color: '#0000ff' }}>static</span> <span style={{ color: '#0000ff' }}>void</span> Main(<span style={{ color: '#0000ff' }}>string</span>[] args)</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum6" style={{ color: '#606060' }}> 6:</span>{"         "}{"{"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum7" style={{ color: '#606060' }}> 7:</span>{"             "}<span style={{ color: '#0000ff' }}>int</span> x = 0;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum8" style={{ color: '#606060' }}> 8:</span>{"             "}<span style={{ color: '#0000ff' }}>while</span> (x&lt;=10)</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum9" style={{ color: '#606060' }}> 9:</span>{"             "}{"{"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum10" style={{ color: '#606060' }}> 10:</span>{"                 "}System.Console.WriteLine(<span style={{ color: '#006080' }}>"Hola Mundo V. "</span> + x.ToString());</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum11" style={{ color: '#606060' }}> 11:</span>{"                 "}x++;<span style={{ color: '#008000' }}>//Si no incrementamos la variable para que se cumpla la Condicion</span></pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum12" style={{ color: '#606060' }}> 12:</span>{"                 "}<span style={{ color: '#008000' }}>//El bucle seria un bucle infinito</span></pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum13" style={{ color: '#606060' }}> 13:</span>{"             "}{"}"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum14" style={{ color: '#606060' }}> 14:</span>{"             "}System.Console.Read();</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum15" style={{ color: '#606060' }}> 15:</span>{"         "}{"}"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum16" style={{ color: '#606060' }}> 16:</span>{"     "}{"}"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum17" style={{ color: '#606060' }}> 17:</span> {"}"}</pre>
                            </div>
                        </div>
                        <p>Bueno como leen en el comentario de color verde, sino tuviésemos el x++ como incrementador para que la condición se cumpla jamás se terminaría de ejecutar nuestra aplicación.</p>
                        <p><strong>Hacer Mientras (do.. while)</strong></p>
                        <p>Ahora hablemos de algo similar a la estructura anterior, pero pongamos un ejemplo:</p>
                        <p>Se requiere realizar una encuesta a una cantidad <strong>“x”</strong> de personas al respecto de si esta de acuerdo con lo hecho por Gobierno Actual, realice la aplicación que permita llevar dicha encuesta.<br />
                            Analicemos el Ejercicio:</p></li>
                    <li>
                        <ol>
                            <li>Se nos pide calcular una cantidad x de personas que vendrán a realizar la encuesta.</li>
                            <li>Debemos de hallar cuantas están de acuerdo y cuantos no.</li>
                            <li>Realicemos el Código:</li>
                        </ol>
                        <div id="codeSnippetWrapper">
                            <div id="codeSnippet" style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', padding: 0 }}>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum1" style={{ color: '#606060' }}> 1:</span> <span style={{ color: '#0000ff' }}>using</span> System;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum2" style={{ color: '#606060' }}> 2:</span></pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum3" style={{ color: '#606060' }}> 3:</span> <span style={{ color: '#0000ff' }}>namespace</span> Demo_EC</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum4" style={{ color: '#606060' }}> 4:</span> {"{"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum5" style={{ color: '#606060' }}> 5:</span>{"     "}<span style={{ color: '#0000ff' }}>class</span> Program</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum6" style={{ color: '#606060' }}> 6:</span>{"     "}{"{"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum7" style={{ color: '#606060' }}> 7:</span>{"         "}<span style={{ color: '#0000ff' }}>static</span> <span style={{ color: '#0000ff' }}>void</span> Main(<span style={{ color: '#0000ff' }}>string</span>[] args)</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum8" style={{ color: '#606060' }}> 8:</span>{"         "}{"{"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum9" style={{ color: '#606060' }}> 9:</span>{"             "}<span style={{ color: '#0000ff' }}>string</span> rpta = <span style={{ color: '#0000ff' }}>null</span>;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum10" style={{ color: '#606060' }}> 10:</span>{"             "}<span style={{ color: '#0000ff' }}>int</span> aprueba = 0, desaprueba = 0, total=0;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum11" style={{ color: '#606060' }}> 11:</span>{"             "}<span style={{ color: '#0000ff' }}>double</span> porcentajeAprueba, porcentajeDesaprueba;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum12" style={{ color: '#606060' }}> 12:</span>{"             "}<span style={{ color: '#0000ff' }}>do</span></pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum13" style={{ color: '#606060' }}> 13:</span>{"             "}{"{"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum14" style={{ color: '#606060' }}> 14:</span>{"                 "}Console.WriteLine(<span style={{ color: '#006080' }}>"¿Aprueba o Desaprueba la Gestion Presidencial hasta la Fecha? \n[1]-Si\n[2]-No"</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum15" style={{ color: '#606060' }}> 15:</span>{"                 "}rpta=Console.ReadLine();</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum16" style={{ color: '#606060' }}> 16:</span>{"                 "}<span style={{ color: '#0000ff' }}>if</span> (rpta == <span style={{ color: '#006080' }}>"1"</span>)</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum17" style={{ color: '#606060' }}> 17:</span>{"                 "}{"{"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum18" style={{ color: '#606060' }}> 18:</span>{"                     "}aprueba++;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum19" style={{ color: '#606060' }}> 19:</span>{"                 "}{"}"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum20" style={{ color: '#606060' }}> 20:</span>{"                 "}<span style={{ color: '#0000ff' }}>else</span> <span style={{ color: '#0000ff' }}>if</span> (rpta == <span style={{ color: '#006080' }}>"2"</span>)</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum21" style={{ color: '#606060' }}> 21:</span>{"                 "}{"{"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum22" style={{ color: '#606060' }}> 22:</span>{"                     "}desaprueba++;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum23" style={{ color: '#606060' }}> 23:</span>{"                 "}{"}"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum24" style={{ color: '#606060' }}> 24:</span>{"                 "}Console.WriteLine(<span style={{ color: '#006080' }}>"¿Desea seguir ingresando mas Opiniones? \n[S]-Si\n[N]-No"</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum25" style={{ color: '#606060' }}> 25:</span>{"                 "}rpta = Console.ReadLine();</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum26" style={{ color: '#606060' }}> 26:</span>{"             "}{"}"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum27" style={{ color: '#606060' }}> 27:</span>{"             "}<span style={{ color: '#0000ff' }}>while</span> (rpta.ToUpper() == <span style={{ color: '#006080' }}>"S"</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum28" style={{ color: '#606060' }}> 28:</span>{"             "}Console.Clear();</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum29" style={{ color: '#606060' }}> 29:</span>{"             "}total = aprueba + desaprueba;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum30" style={{ color: '#606060' }}> 30:</span>{"             "}porcentajeAprueba = (aprueba * 100) / total;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum31" style={{ color: '#606060' }}> 31:</span>{"             "}porcentajeDesaprueba = (desaprueba * 100) / total;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum32" style={{ color: '#606060' }}> 32:</span>{"             "}Console.WriteLine(<span style={{ color: '#006080' }}>"El total de encuestados es: "</span> + total + <span style={{ color: '#006080' }}>"\n"</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum33" style={{ color: '#606060' }}> 33:</span>{"             "}Console.WriteLine(<span style={{ color: '#006080' }}>"Aprueban: "</span> + porcentajeAprueba + <span style={{ color: '#006080' }}>"% \n"</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum34" style={{ color: '#606060' }}> 34:</span>{"             "}Console.WriteLine(<span style={{ color: '#006080' }}>"Desaprueban: "</span> + porcentajeDesaprueba + <span style={{ color: '#006080' }}>"% \n"</span>);</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum35" style={{ color: '#606060' }}> 35:</span>{"             "}Console.ReadKey();</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum36" style={{ color: '#606060' }}> 36:</span>{"         "}{"}"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum37" style={{ color: '#606060' }}> 37:</span>{"     "}{"}"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum38" style={{ color: '#606060' }}> 38:</span> {"}"}</pre>
                            </div>
                        </div>
                        <p>Bueno como vemos el código realizado aplica lo de x personas, nosotros decidimos cuando terminar la aplicación.</p></li>
                    <li>
                        <h4><strong>Ciclo Controlado Por Contador (for)</strong></h4>
                        <p>Este tipo de bucle o iteración es controlada pues tiene una condición de incremento o decremento, que pasamos a explicar:</p>
                        <p><a href="https://juvega.files.wordpress.com/2011/02/image8.png"><img style={{ display: 'block', float: 'none', marginLeft: 'auto', marginRight: 'auto', borderWidth: 0 }} title="image" src="https://juvega.files.wordpress.com/2011/02/image_thumb6.png?w=569&h=221" alt="image" width={569} height={221} border={0} /></a></p></li>
                    <li><strong>Inicialización de Variable: </strong>Esta parte de código es la que indica el valor inicial de nuestra variable, como se ve en el ejemplo inicializa desde cero .</li>
                    <li><strong>Limite de Variable: </strong>En esta línea indicamos que las acciones definidas dentro del ámbito de nuestra declaración se realizarán las veces indicadas como limite, en esta oportunidad 10.</li>
                    <li><strong>Incrementador ó Decrementador: </strong>Tal y como se vio en el capitulo anterior, tenemos los incrementadores y decrementadores en el caso explicito de C# se usa el ++ para indicar que se incrementa de 1 en 1 y el – para decrementar de 1 en 1. Pero en este caso nosotros podemos definir como queremos que se incremente nuestro bucle For; por ejemplo: i +=3, i=i+2.Veamos un ejemplo para ejecutar:
                        <div id="codeSnippetWrapper">
                            <div id="codeSnippet" style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', padding: 0 }}>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum1" style={{ color: '#606060' }}> 1:</span> <span style={{ color: '#0000ff' }}>using</span> System;</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum2" style={{ color: '#606060' }}> 2:</span></pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum3" style={{ color: '#606060' }}> 3:</span> <span style={{ color: '#0000ff' }}>namespace</span> Demo_EC</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum4" style={{ color: '#606060' }}> 4:</span> {"{"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum5" style={{ color: '#606060' }}> 5:</span>{"     "}<span style={{ color: '#0000ff' }}>class</span> Program</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum6" style={{ color: '#606060' }}> 6:</span>{"     "}{"{"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum7" style={{ color: '#606060' }}> 7:</span>{"         "}<span style={{ color: '#0000ff' }}>static</span> <span style={{ color: '#0000ff' }}>void</span> Main(<span style={{ color: '#0000ff' }}>string</span>[] args)</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum8" style={{ color: '#606060' }}> 8:</span>{"         "}{"{"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum9" style={{ color: '#606060' }}> 9:</span>{"             "}<span style={{ color: '#0000ff' }}>for</span> (<span style={{ color: '#0000ff' }}>int</span> i=0; i &lt;= 10; i++)</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum10" style={{ color: '#606060' }}> 10:</span>{"             "}{"{"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum11" style={{ color: '#606060' }}> 11:</span>{"                 "}Console.WriteLine(<span style={{ color: '#006080' }}>"Numero : "</span> + i.ToString());</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum12" style={{ color: '#606060' }}> 12:</span>{"             "}{"}"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum13" style={{ color: '#606060' }}> 13:</span>{"             "}Console.ReadKey();</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum14" style={{ color: '#606060' }}> 14:</span>{"         "}{"}"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: 'white', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum15" style={{ color: '#606060' }}> 15:</span>{"     "}{"}"}</pre>
                                <pre style={{ textAlign: 'left', lineHeight: '12pt', backgroundColor: '#f4f4f4', width: '100%', fontFamily: '"Courier New", courier, monospace', direction: 'ltr', color: 'black', fontSize: '8pt', overflow: 'visible', borderStyle: 'none', margin: 0, padding: 0 }}><span id="lnum16" style={{ color: '#606060' }}> 16:</span> {"}"}</pre>
                            </div>
                        </div>
                        <h4 />
                    </li>
                </ul>
                <div id="atatags-370373-6172ce2f4651a">
                </div>			<div id="atatags-26942-6172ce2f466b7" data-adtags-width={640} />
                <div id="jp-post-flair" className="sharedaddy sd-rating-enabled sd-like-enabled sd-sharing-enabled"><div className="sharedaddy sd-sharing-enabled"><div className="robots-nocontent sd-block sd-social sd-social-icon-text sd-sharing"><h3 className="sd-title">Share this:</h3><div className="sd-content"><ul data-sharing-events-added="true"><li className="share-twitter"><a rel="nofollow noopener noreferrer" data-shared="sharing-twitter-31" className="share-twitter sd-button share-icon" href="https://juvega.wordpress.com/estructuras-de-control/?share=twitter&nb=1" target="_blank" title="Haz clic para compartir en Twitter"><span>Twitter</span></a></li><li className="share-facebook"><a rel="nofollow noopener noreferrer" data-shared="sharing-facebook-31" className="share-facebook sd-button share-icon" href="https://juvega.wordpress.com/estructuras-de-control/?share=facebook&nb=1" target="_blank" title="Haz clic para compartir en Facebook"><span>Facebook</span></a></li><li className="share-end" /></ul></div></div></div><div className="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-loading" id="like-post-wrapper-8416812-31-6172ce2f48bd2" data-src="//widgets.wp.com/likes/index.html?ver=20210831#blog_id=8416812&post_id=31&origin=juvega.wordpress.com&obj_id=8416812-31-6172ce2f48bd2" data-name="like-post-frame-8416812-31-6172ce2f48bd2" data-title="Me gusta o Compartir"><h3 className="sd-title">Me gusta esto:</h3><div className="likes-widget-placeholder post-likes-widget-placeholder" style={{ height: '55px' }}><span className="button"><span>Me gusta</span></span> <span className="loading">Cargando...</span></div><iframe className="post-likes-widget jetpack-likes-widget" name="like-post-frame-8416812-31-6172ce2f48bd2" src="//widgets.wp.com/likes/index.html?ver=20210831#blog_id=8416812&post_id=31&origin=juvega.wordpress.com&obj_id=8416812-31-6172ce2f48bd2" height="55px" width="100%" frameBorder={0} title="Me gusta o Compartir" /><span className="sd-text-color" /><a className="sd-link-color" /></div></div>																	</div>{/* .entry-content */}
        </div>
        ,
        img: null
    }
];

export default data;