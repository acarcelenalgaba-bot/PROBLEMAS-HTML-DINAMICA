const baseDatosProblemas = {
    "gravedad": [
        {
            titulo: "Problema 1: El peso y la estación MIR",
            enunciado: "La Tierra es un planeta cuya masa es de \\(\\ce{5,95 \\cdot 10^{24}} \\) kg y su radio medio 6371 km. Calcula el peso que tendría un hombre de masa 80 kg en los siguientes lugares de la Tierra: <br> a) Superficie terrestre a nivel del mar. <br> b) Subido a la cima del monte Everest, cuya altura es de 8848 m. <br> c) En la estación espacial internacional (MIR) cuando nos encontramos a la altura de 200 km. <br> d) Sabiendo que la masa del MIR son 129,7 toneladas, halla la velocidad orbital del MIR. <br> e) Desde el MIR observamos un cuerpo no identificado que se mueve con velocidad constante en el espacio. ¿Es necesario que exista una fuerza para que se mantenga este movimiento? Justifícalo. <br>Datos: &nbsp \\(\\ce{G = 6,67 \\cdot 10^{-11} N \\cdot m^2 \\cdot kg^{-2} } \\)",
            solucion: `
                <div class='paso'>
                    <strong>a) En la superficie:</strong><br>
                    Aplicamos la Ley de Gravitación Universal de Newton:  &nbsp \\( P = G \\cdot \\dfrac{M_T \\cdot m}{R_T^2} \\)<br>
                    \\[ P = 6,67 \\cdot 10^{-11} \\cdot \\frac{5,95 \\cdot 10^{24} \\cdot 80}{(6,371 \\cdot 10^6)^2} \\]<br>
                    <span class='resultado'>Resultado:  &nbsp P = 782 N</span>
                </div>
                <div class='paso'>
                    <strong>b) En el Everest:</strong><br>
                    Sumamos la altura al radio: &nbsp \\( r = R_T + h = 6371000 + 8848 = 6379848 \\text{ m}\\)<br>
                    \\[ P = 6,67 \\cdot 10^{-11} \\cdot \\frac{5,95 \\cdot 10^{24} \\cdot 80}{(6379848)^2} \\]<br>
                    <span class='resultado'>Resultado:  &nbsp P = 780 N</span>
                </div>
                <div class='paso'>
                    <strong>c) En la estación MIR (h = 200 km):</strong><br>
                    \\( r = 6371000 + 200000 = 6571000 \\text{ m}\\)<br>
                    \\[ P = 6,67 \\cdot 10^{-11} \\cdot \\frac{5,95 \\cdot 10^{24} \\cdot 80}{(6571000)^2} \\]<br>
                    <span class='resultado'>Resultado:  &nbsp P = 735 N</span>
                </div>
                <div class='paso'>
                    <strong>d) Velocidad orbital de la MIR:</strong><br>
                    Igualamos fuerza gravitatoria a fuerza centrípeta (\\(F_g = F_c\\)): &nbsp &nbsp &nbsp \\( G \\dfrac{M_T \\cdot m}{r^2} =  m \\cdot \\dfrac{v^2}{r} \\quad  \\rightarrow \\quad  G \\dfrac{M_T }{r} = v^2 \\) <br>
                    \\[ v = \\sqrt{\\frac{G \\cdot M_T}{r}} = \\sqrt{\\frac{6,67 \\cdot 10^{-11} \\cdot 5,95 \\cdot 10^{24}}{6571000}} \\]<br>
                    <span class='resultado'>Resultado:  &nbsp v = 7771,5 m/s</span>
                </div>
                <div class='paso'>
                    <strong>e) Cuerpo a velocidad constante:</strong><br>
                    <span class='comentario'>Según la Primera Ley de Newton, si un cuerpo se mueve con velocidad constante, la fuerza neta es cero. No es necesario aplicar fuerza para mantener el movimiento en el vacío del espacio.</span>
                </div>
            `
        },
        {
            titulo: "Problema 2: El carro de Selene (Tierra y Luna)",
            enunciado: "Los antiguos griegos consideraban la Luna como una Diosa. Selene es la conductora del carro de la la Luna: después de que Helios, el dios del Sol, termine su viaje a través del cielo, Selene comienza el suyo cuando la noche cae sobre la Tierra. La Luna orbita alrededor de la Tierra en órbitas prácticamente circulares. La distancia entre la Tierra y la Luna es de 384000 km. Conociendo las masas de la Tierra (\\( \\ce{M_T = 5,97 \\cdot 10^{24}}\\) kg) y de la Luna (\\( \\ce{M_L = 7,35 \\cdot 10^{22} } \\) kg), determina: <br> a) La fuerza gravitatoria entre la Tierra y la Luna. <br> b) La velocidad orbital de la Luna. <br> c) El punto de la línea que las une donde sería nula la fuerza neta sobre cualquier masa (despreciando las fuerzas gravitatorias provenientes de los demás cuerpos celestes).",
            solucion: `
                <div class='paso'>
                    <strong>Paso previo: ¡Cuidado con las unidades!</strong><br>
                    Antes de sustituir a lo loco, debemos asegurarnos de que todo está en el Sistema Internacional. Las masas ya están en kilogramos, pero la distancia nos la dan en kilómetros. ¡Trampa clásica!<br>
                    \\( d = 384.000 \\text{ km} = 384.000.000 \\text{ m} = 3,84 \\cdot 10^8 \\text{ m} \\)
                </div>
                <div class='paso'>
                    <strong>a) Fuerza gravitatoria entre la Tierra y la Luna:</strong><br>
                    Aplicamos la Ley de Gravitación Universal de Newton. Recuerda que esta fuerza es mutua: la Tierra tira de la Luna con exactamente la misma fuerza con la que la Luna tira de la Tierra (3ª Ley de Newton).<br>
                    \\[ F = G \\cdot \\frac{M_T \\cdot M_L}{d^2} \\]<br>
                    Sustituimos nuestros inmensos números (¡cuidado al usar la notación científica en la calculadora!):<br>
                    \\[ F = 6,67 \\cdot 10^{-11} \\cdot \\frac{5,97 \\cdot 10^{24} \\cdot 7,35 \\cdot 10^{22}}{(3,84 \\cdot 10^8)^2} = 6,67 \\cdot 10^{-11} \\cdot \\frac{4,38 \\cdot 10^{47}}{1,47 \\cdot 10^{17}} \\]<br>
                    <span class='resultado'>Resultado:  &nbsp \\( F \\approx 1,98 \\cdot 10^{20} \\text{ N} \\)</span>
                </div>
                <div class='paso'>
                    <strong>b) Velocidad orbital de la Luna:</strong><br>
                    ¿Por qué la Luna no se cae contra la Tierra si hay tanta fuerza atrayéndola? Porque está girando. Para mantener una órbita circular se necesita una fuerza centrípeta que actúe de "cuerda invisible", y en el espacio, la gravedad hace ese trabajo. Por tanto, igualamos la fuerza gravitatoria a la fuerza centrípeta (\\(F_g = F_c\\)):<br>
                    \\[ G \\cdot \\frac{M_T \\cdot M_L}{d^2} = M_L \\cdot \\frac{v^2}{d} \\]<br>
                    Fíjate que la masa de la Luna (\\(M_L\\)) y una de las distancias (\\(d\\)) se cancelan a ambos lados. Despejamos la velocidad:<br>
                    \\[ v = \\sqrt{G \\cdot \\frac{M_T}{d}} = \\sqrt{ 6,67 \\cdot 10^{-11} \\cdot \\frac{5,97 \\cdot 10^{24}}{3,84 \\cdot 10^8} } = \\sqrt{1036960} \\]<br>
                    <span class='resultado'>Resultado:  &nbsp \\( v \\approx 1018,3 \\text{ m/s} \\) (¡Más de 1 km por segundo!)</span>
                </div>
                <div class='paso'>
                    <strong>c) Punto de fuerza neta nula (El "tirón" equilibrado):</strong><br>
                    Buscamos un punto intermedio donde, si colocamos una nave espacial de masa \\(m\\), el tirón de la Tierra hacia un lado sea exactamente igual al tirón de la Luna hacia el otro. Si ese punto está a una distancia \\(x\\) de la Tierra, estará a una distancia \\(d - x\\) de la Luna.<br>
                    \\[ F_{Tierra} = F_{Luna} \\implies G \\cdot \\frac{M_T \\cdot m}{x^2} = G \\cdot \\frac{M_L \\cdot m}{(d-x)^2} \\]<br>
                    Las \\(G\\) y la masa de la nave (\\(m\\)) se cancelan. Nos queda:<br>
                    \\[ \\frac{M_T}{x^2} = \\frac{M_L}{(d-x)^2} \\]<br>
                    <em>*Truco:</em> ¡No desarrolles el cuadrado del denominador o te quedará una ecuación de segundo grado horrible! Como todo está al cuadrado, hacemos la raíz cuadrada en ambos lados de la igualdad:<br>
                    \\[ \\frac{\\sqrt{M_T}}{x} = \\frac{\\sqrt{M_L}}{d-x} \\]<br>
                    Sustituimos las masas y despejamos \\(x\\):<br>
                    \\[ \\frac{2,44 \\cdot 10^{12}}{x} = \\frac{2,71 \\cdot 10^{11}}{3,84 \\cdot 10^8 - x} \\implies 9,38 \\cdot 10^{20} - 2,44 \\cdot 10^{12} \\cdot  x = 2,71 \\cdot 10^{11} \\cdot  x \\]<br>
                    \\[ 9,38 \\cdot 10^{20} = 2,44 \\cdot 10^{12} \\cdot  x + 2,71 \\cdot 10^{11} \\cdot x \\implies  9,38 \\cdot 10^{20} = 2,711 \\cdot 10^{12} \\cdot  x \\]<br>
                    \\[ x = \\frac{9,38 \\cdot 10^{20}}{2,711 \\cdot 10^{12}} \\]<br>
                    <span class='resultado'>Resultado:  &nbsp \\( x \\approx 3,46 \\cdot 10^{8} \\text{ m} \\) (medido desde el centro de la Tierra)</span>
                </div>
            `
        },
        {
            titulo: "Problema 3: Asteroide en Júpiter",
            enunciado: `La palabra Júpiter proviene de la mitología romana, padre de dioses y hombres. Júpiter es el planeta más grande del Sistema Solar y posee 80 lunas. Considera los datos de los cuerpos celestes de la siguiente tabla y determina: <br>
            <table border="1" style="border-collapse: collapse; width: 100%; text-align: center; margin-bottom: 15px;">
                <tr style="background-color: #f2f2f2;">
                    <th>Cuerpo Celeste</th>
                    <th>Masa (kg)</th>
                    <th>Diámetro (km)</th>
                </tr>
                <tr>
                    <td><strong>Júpiter</strong></td>
                    <td>\\( 1,889 \\cdot 10^{27} \\)</td>
                    <td>\\(142984\\)</td>
                </tr>
                <tr>
                    <td><strong>Ganímedes</strong></td>
                    <td>\\( 1,482 \\cdot 10^{23} \\)</td>
                    <td>\\(5262\\)</td>
                </tr>
            </table> <br> a) El peso que tendría un asteroide de 100 kg en la superficie de Júpiter. <br> b) El peso que tendría un asteroide de 100 kg en la superficie de Ganímedes (la mayor luna de Júpiter) <br> c) Sabiendo que la velocidad orbital de Ganímedes es \\(1,18 \\cdot 10^{4}\\) m/s, obtén el radio orbital.<br> d) La distancia desde Ganímedes a la que debe colocarse el asteroide entre Júpiter y Ganímedes para que sea nula la fuerza gravitaroria sobre él (considerando nulas el resto de fuerzas gravitarorias) La distancia entre Júpiter y Ganímedes es de \\(1,2 \\cdot 10^6\\) m. <br>Datos: &nbsp \\(G = 6,67 \\cdot 10^{-11} N \\cdot m^2 \\cdot kg^{-2} \\)  `,
            solucion: `
                <div class='paso'>
                    <strong>a) Peso en Júpiter:</strong> <br>
                    El "peso" no es otra cosa que la fuerza de atracción gravitatoria que ejerce un planeta sobre un objeto en su superficie. Para ello, aplicamos directamente la Ley de Gravitación Universal de Newton, asumiendo que la distancia entre los centros de masa es el radio del planeta. Sustituimos nuestros datos: <br>
                    Radio = \\( \\ce{ \\dfrac{142984}{2} = 71492 \\ km = 71492000 \\ m } \\) <br>
                    \\[ P_J = G \\cdot \\frac{M_J \\cdot m}{R_J^2} = 6,67 \\cdot 10^{-11} \\cdot \\frac{1,889 \\cdot 10^{27} \\cdot 100 }{(71492000)^2} \\]<br>
                    <span class='resultado'>Resultado: &nbsp; P = 2465 N</span>
                </div>
                <div class='paso'>
                    <strong>b) Peso en Ganímedes:</strong><br>
                    Aplicamos exactamente la misma lógica matemática, pero cambiando al protagonista: ahora estamos en la superficie de la luna Ganímedes. <br>
                    \\[ P_G = G \\cdot \\frac{M_G \\cdot m}{R_G^2} \\]
                    Sustituimos:
                    Radio = \\(  \\dfrac{5262}{2} = 2631 \\ km = 2631000 \\ m \\) <br>
                    \\[ P_G = G \\cdot \\frac{M_G \\cdot m}{R_G^2} = 6,67 \\cdot 10^{-11} \\cdot \\frac{1,482 \\cdot 10^{23} \\cdot 100 }{(2631000)^2} \\]<br>
                    <span class='resultado'>Resultado: &nbsp; P = 177,5 N</span>
                </div>
                <div class='paso'>
                    <strong>c) Radio orbital:</strong> <br>
                    Para que un cuerpo (Ganímedes) se mantenga en órbita circular alrededor de otro (Júpiter), la fuerza gravitatoria que lo atrae debe actuar como fuerza centrípeta. Esta es la condición de equilibrio dinámico de las órbitas. F gravitatoria ​= F centrípeta​ <br>
                    \\[ G \\cdot \\frac{M_J \\cdot M_G}{r^2} =  M_G \\cdot \\frac{v^2}{r} \\] <br>
                    La masa de Ganímedes (\\(M_G\\)​) y uno de los radios (r) se cancelan en ambos lados de la ecuación. Nos queda: <br>
                    \\[ r = \\frac{G \\cdot M_J}{v^2} = \\frac{6,67 \\cdot 10^{-11} \\cdot 1,482 \\cdot 10^{23} }{(1,18 \\cdot 10^{4})^2} \\]<br>
                    <span class='resultado'>Resultado: &nbsp; r = 1,07 · 10⁹ m</span>
                </div>
                <div class='paso'>
                    <strong>d) Punto nulo desde Ganímedes:</strong><br>
                    <iframe src="simulador_jupiter.html" width="100%" height="620" style="border:1px solid #ddd; border-radius:8px; background:#fff;"></iframe>
                    Queremos colocar el asteroide en un punto entre Júpiter y Ganímedes donde las fuerzas de atracción se anulen. Es decir, Júpiter tira hacia la izquierda con la misma fuerza que Ganímedes tira hacia la derecha. <br> Llamamos x a la distancia desde el asteroide hasta Ganímedes. La distancia desde el asteroide hasta Júpiter será d−x. <br> 
                    Igualamos los módulos de ambas fuerzas gravitatorias:
                    \\[ G \\cdot \\frac{M_J \\cdot m}{(d - x)^2} =  G \\cdot \\frac{M_G \\cdot m}{x^2} \\] <br>
                    Simplificamos G y m en ambos lados:
                    \\[ \\frac{M_J}{(d - x)^2} =  \\frac{M_G}{x^2} \\] <br>
                    Truco de examen: Para evitar resolver una ecuación de segundo grado farragosa, aplicamos la raíz cuadrada a ambos lados de la igualdad: <br>
                    \\[ \\frac{\\sqrt{M_J}}{d - x} =  \\frac{\\sqrt{M_G}}{x} \\rightarrow x = \\frac{d \\cdot \\sqrt{M_G}}{\\sqrt{M_J} + \\sqrt{M_G}}  \\] <br> 
                    Sustituyendo datos: <br>
                    \\[ x = \\frac{1,26 \\cdot 10^6 \\cdot \\sqrt{1,482 \\cdot 10^{23}}}{\\sqrt{1,889 \\cdot 10^{27}} + \\sqrt{1,482 \\cdot 10^{23}}}  \\] <br> 
                    <span class='resultado'>Resultado: &nbsp; x = 10536 m</span>
                </div>
            `
        },
        {
            titulo: "Problema 4: Atracción Tierra-Sol",
            enunciado: "La Tierra soporta una fuerza de atracción por parte del Sol de \\(3,539 \\cdot 10^{22}\\) N y describe una órbita prácticamente circular alrededor del Sol de 149,6 millones de kilómetros de radio. Sabiendo que la masa de la Tierra es de \\(5,97 \\cdot 10^{24}\\) kg, determina: <br> a) La masa del Sol. <br> b) Justifica por qué la Tierra sobre el Sol y no al contrario, si ambos experimentan la misma fuerza. <br> c) Halla la velocidad orbital de la Tierra. <br> d) Obtén el punto entre la Tierra y el Sol donde sea nula la fuerza gravitatoria (despreciando el resto de fuerzas provenientes de otros cuerpos celestes)",
            solucion: `
                <div class='paso'>
                    <strong>a) Masa del Sol:</strong><br>
                    Sabemos que la fuerza con la que se atraen se calcula usando la Ley de Gravitación Universal:<br>
                    \\[ F = G \\frac{M_S \\cdot M_T}{ r^2} \\]<br>
                    Como nos dan la fuerza, solo tenemos que despejar la Masa del Sol (\\( M_S \\)​):<br>
                    \\[ M_S = \\frac{F \\cdot r^2}{G \\cdot M_T} \\]<br>
                    Sustituimos nuestros datos (cuidado con los cuadrados en la calculadora):<br>
                    \\[ M_S = \\frac{3,539 \\cdot 10^{22} \\cdot (1,496 \\cdot 10^{11})^2}{6,67 \\cdot 10^{-11} \\cdot 5,97 \\cdot 10^{24}} \\]<br>
                    <span class='resultado'>Resultado:  &nbsp \\( M_s = 1,989 \\cdot 10^{30} kg\\)</span>
                </div>
                <div class='paso'>
                    <strong>b) Justificación:</strong> <br> 
                    La Tercera Ley de Newton (Acción y Reacción) nos dice que la fuerza que hace el Sol sobre la Tierra es exactamente la misma que la que hace la Tierra sobre el Sol (\\(3,539 \\cdot 10^{22} N\\)). Ninguno tira más fuerte del otro. Entonces, ¿por qué se mueve la Tierra? Entra en juego la Segunda Ley de Newton de la Dinámica: \\( F = m \\cdot a\\). Si despejamos la aceleración: \\(a = \\dfrac {m}{F} \\)​.<br>
                    La aceleración que sufre la Tierra es: &nbsp  &nbsp  \\( a_T ​= \\dfrac {M_T}{​F} ​= \\dfrac {5,97 \\cdot 10^{24}}{3,539 \\cdot 10^{22}} ​\\approx 0,0059 \\\ m/s^2 \\) <br>
                    La aceleración que sufre el Sol es: &nbsp  &nbsp \\( a_S ​= \\dfrac {M_S}{​F} ​= \\dfrac {1,989 \\cdot 10^{30}}{3,539 \\cdot 10^{22}} ​\\approx 0,000000017 \\\ m/s^2 \\) <br>
                    Al tener el Sol una masa tan gigantesca en comparación con la Tierra, su inercia es inmensa. La misma fuerza produce una aceleración notable en la Tierra (obligándola a curvar su trayectoria en una órbita), mientras que la aceleración del Sol es prácticamente nula, por lo que apenas se mueve (en realidad hace un minúsculo "bamboleo" imperceptible).
                </div>
                <div class='paso'>
                    <strong>c) Velocidad orbital:</strong><br>
                    Para que la Tierra se mantenga en órbita, la fuerza de atracción gravitatoria actúa como la fuerza centrípeta (\\(F_c​ = m \\cdot \\dfrac {v^2}{r} \\)​). Podemos usar directamente el valor de la fuerza que ya nos da el enunciado para simplificar: &nbsp \\( F_{gravitatoria}​ = F_{centrípeta} \\)​<br>
                    \\[ F = M_T \\cdot \\frac{v^2}{r} \\]<br>
                    Despejamos la velocidad (v):
                    \\[ v^2 = \\frac {F \\cdot r}{M_T} \\rightarrow v = \\sqrt{\\frac {F \\cdot r}{M_T} } \\]<br>
                    Sustituimos:<br>
                    \\[ v = \\sqrt{\\frac {3,539 \\cdot 10^{22} \\cdot 1,496 \\cdot 10^{11}}{5,97 \\cdot 10^{24}} } \\]<br>
                    <span class='resultado'>Resultado:  &nbsp \\(\\ce{\\textrm{v} = 2,97 \\cdot 10^{4} m/s}\\)</span>
                </div>
                <div class='paso'>
                    <strong>d) Punto fuerza nula:</strong><br>
                    Llamaremos x a la distancia desde el satélite hasta la Tierra. Por tanto, la distancia al Sol será d−x.<br>
                    Igualamos fuerzas gravitatorias: <br>
                    \\[ G \\frac{M_T \\cdot m}{x^2} =  G \\frac{M_S \\cdot m}{(d - x)^2} \\] <br>
                    Simplificamos G y m, y aplicamos el "truco" de la raíz cuadrada en ambos lados:<br>
                    \\[ \\frac{M_T}{x^2} =  \\frac{M_S}{(d - x)^2} \\quad \\rightarrow \\quad \\frac{\\sqrt{M_T}}{x} =  \\frac{\\sqrt{M_S}}{d - x} \\] <br> 
                    Despejamos x:<br>
                     \\[ x = \\frac{d \\cdot \\sqrt{M_T}}{\\sqrt{M_S} + \\sqrt{M_T}}  \\]
                    Sustituyendo datos: <br>
                    \\[ x = \\frac{1,496 \\cdot 10^{11} \\cdot \\sqrt{5,97 \\cdot 10^{24}}}{\\sqrt{1,889 \\cdot 10^{30}} + \\sqrt{5,97 \\cdot 10^{24}}}  \\] <br> 
                    <span class='resultado'>Resultado:  &nbsp \\(\\ce{x = 2,58 \\cdot 10^{8} m}\\)</span>
                </div>
            `
        }
    ],
    "orbitas": [
        {
            titulo: "Problema 1: Lanzamiento de martillo",
            enunciado: "En los Juegos Olímpicos de Los Ángeles 1932, durante las competiciones de lanzamiento de martillo, al atleta irlandés Pat O’Callaghen se le escapó el martillo ligeramente antes de completar el giro, aterrizando en las gradas de espectadores. Afortunadamente, nadie resultó herido. La pelota de acero tiene una masa de 7,26 kg y da vueltas en un plano horizontal a una velocidad constante de 30 m/s. Sabiendo que la distancia del cable es de 1,22 metros, determina: <br> a) La tensión de la cuerda en cualquier punto de la circunferencia. <br>  b) La fuerza centrípeta que actúa a través de la cuerda.",
            solucion: `
                <div class='paso'>
                    <strong>a) Tensión de la cuerda:</strong><br>
                    En un movimiento circular en el plano horizontal, el cable es el único elemento que tira del martillo hacia el centro. Por tanto, la tensión (\\(T\\)) actúa íntegramente como fuerza centrípeta (\\(T = F_c\\)):
                    \\[ T = m \\cdot \\frac{v^2}{r} = 7,26 \\cdot \\frac{30^2}{1,22} = 7,26 \\cdot \\frac{900}{1,22} \\]<br>
                    <span class='resultado'>Resultado:  &nbsp \\( T = 5355,74 \\) N</span>
                </div>
                <div class='paso'>
                    <strong>b) Fuerza centrípeta que actúa a través de la cuerda:</strong><br>
                    Como hemos justificado en el apartado anterior, la fuerza centrípeta no es una fuerza independiente, sino el papel dinámico que asume la tensión de la cuerda en este instante.<br>
                    \\[ F_c = T \\]<br>
                    <span class='resultado'>Resultado:  &nbsp \\( F_c = 5355,74 \\) N</span>
                </div>
            `
        },
        {
            titulo: "Problema 2: Cubo de agua",
            enunciado: "Un experimento clásico para entender la fuerza centrípeta consiste en mover un cubo lleno de agua haciendo círculos en un plano vertical. El cubo de agua tiene una masa de 300 g, la longitud del brazo es de 70 cm y da 120 vueltas por minuto. Determina: <br> a) La tensión que soporta el asa del cubo cuando el cubo está en el punto más alto de la trayectoria. <br> b) La tensión que soporta el asa del cubo cuando el cubo está en el punto más bajo de la trayectoria. <br> c) Halla la velocidad mínima del agua para que no caiga en el punto más alto.",
            solucion: `
                <div class='paso'>
                    <strong>Paso previo: Unidades y fuerzas base:</strong><br>
                    Primero pasamos todos los datos al S.I.: masa \\( m = 0,3 \\) kg, radio o brazo \\( R = 0,7 \\) m. <br>
                    Convertimos la velocidad angular a radianes por segundo: \\( \\omega = 120 \\text{ rpm} \\cdot \\frac{2\\pi \\text{ rad}}{1 \\text{ rev}} \\cdot \\frac{1 \\text{ min}}{60 \\text{ s}} = 4\\pi \\approx 12,57 \\text{ rad/s} \\).<br>
                    Calculamos la velocidad tangencial: \\( v = \\omega \\cdot R = 12,57 \\cdot 0,7 \\approx 8,80 \\) m/s.<br>
                    Con esto, precalculamos las dos fuerzas clave del sistema:<br>
                    - El Peso: \\( P = m \\cdot g = 0,3 \\cdot 9,8 = 2,94 \\) N.<br>
                    - La Fuerza centrípeta necesaria: \\( F_c = m \\cdot \\frac{v^2}{R} = 0,3 \\cdot \\frac{8,80^2}{0,7} \\approx 33,19 \\) N.
                </div>
                <div class='paso'>
                    <strong>a) Tensión en el punto más alto:</strong><br>
                    En el punto más alto, tanto el peso (\\(P\\)) como la tensión de tu brazo (\\(T\\)) tiran del cubo hacia abajo (hacia el centro de rotación). Ambas suman para aportar la fuerza centrípeta: \\( T + P = F_c \\)<br>
                    \\[ T_{alta} = F_c - P = 33,19 - 2,94 \\]<br>
                    <span class='resultado'>Resultado:  &nbsp \\( T_{alta} = 30,25 \\) N</span>
                </div>
                <div class='paso'>
                    <strong>b) Tensión en el punto más bajo:</strong><br>
                    En el punto más bajo, la tensión tira hacia arriba (hacia el centro) pero el peso tira hacia abajo (hacia afuera). Aquí la tensión tiene que contrarrestar el peso y además proporcionar la fuerza centrípeta: \\( T - P = F_c \\)<br>
                    \\[ T_{baja} = F_c + P = 33,19 + 2,94 \\]<br>
                    <span class='resultado'>Resultado:  &nbsp \\( T_{baja} = 36,13 \\) N</span>
                </div>
                <div class='paso'>
                    <strong>c) Velocidad mínima para que el agua no caiga:</strong><br>
                    Para que el agua no se derrame en el punto más alto, su caída libre (el peso) debe ser exactamente igual a la fuerza centrípeta requerida para tomar la curva. En ese instante límite, la tensión es cero (\\( T = 0 \\)):<br>
                    \\[ P = F_c \\implies m \\cdot g = m \\cdot \\frac{v_{min}^2}{R} \\]<br>
                    Las masas se cancelan, y despejando la velocidad obtenemos:<br>
                    \\[ v_{min} = \\sqrt{g \\cdot R} = \\sqrt{9,8 \\cdot 0,7} \\]<br>
                    <span class='resultado'>Resultado:  &nbsp \\( v_{min} = 2,62 \\) m/s</span>
                </div>
            `
        },
        {
            titulo: "Problema 3: Coche Xiaomi",
            enunciado: "Un Xiaomi SU7 de 1900 kg de masa circula a 90 km/h y toma una curva que presenta un radio de curvatura de 100 m. Determina: <br> a) La dirección y el sentido de la fuerza de rozamiento que el asfalto ejerce sobre al automóvil durante el recorrido por la curva. <br> b) El valor de la fuerza de rozamiento. <br>  c) Analiza los factores que condicionan la velocidad máxima de un vehículo en una curva. <br> d) Sabiendo que el coeficiente máximo de rozamiento entre el neumático y el asfalto es μ = 0,8, halla la velocidad máxima con la que puede tomar la curva sin derrapar (Recuerda que el coeficiente de rozamiento puede oscilar entre 0 y el valor máximo. En el caso de un automóvil, si la velocidad no es muy elevada no se produce la fricción máxima, sino el rozamiento necesario para no derrapar).",
            solucion: `
                <div class='paso'>
                    <strong>Paso previo: Sistema Internacional:</strong><br>
                    Convertimos la velocidad a metros por segundo para poder trabajar correctamente con las fuerzas:<br>
                    \\[ v = 90 \\text{ km/h} \\cdot \\frac{1000 \\text{ m}}{1 \\text{ km}} \\cdot \\frac{1 \\text{ h}}{3600 \\text{ s}} = 25 \\text{ m/s} \\]
                </div>
                <div class='paso'>
                    <strong>a) Dirección y sentido de la fuerza de rozamiento:</strong><br>
                    Para que un vehículo no siga en línea recta por inercia y pueda trazar una curva, necesita una fuerza centrípeta. En una carretera horizontal, esta fuerza es proporcionada exclusivamente por el rozamiento estático de los neumáticos contra el asfalto.<br>
                    <span class='resultado'>Resultado:  &nbsp La dirección es radial (perpendicular a la velocidad del coche) y su sentido es hacia el centro de la curva.</span>
                </div>
                <div class='paso'>
                    <strong>b) Valor de la fuerza de rozamiento:</strong><br>
                    Como el rozamiento actúa como fuerza centrípeta (\\(F_r = F_c\\)), aplicamos la fórmula directamente:<br>
                    \\[ F_r = m \\cdot \\frac{v^2}{R} = 1900 \\cdot \\frac{25^2}{100} = 1900 \\cdot \\frac{625}{100} \\]<br>
                    <span class='resultado'>Resultado:  &nbsp \\( F_r = 11875 \\) N</span>
                </div>
                <div class='paso'>
                    <strong>c) Factores que condicionan la velocidad máxima:</strong><br>
                    Si igualamos la fuerza de rozamiento máxima (\\( F_{r,max} = \\mu \\cdot N = \\mu \\cdot m \\cdot g \\)) a la fuerza centrípeta, vemos qué ocurre:<br>
                    \\[ \\mu \\cdot m \\cdot g = m \\cdot \\frac{v_{max}^2}{R} \\implies v_{max} = \\sqrt{\\mu \\cdot g \\cdot R} \\]<br>
                    <span class='resultado'>Resultado:  &nbsp Al cancelarse la masa (m), la velocidad máxima depende SOLO del radio de la curva (\\(R\\)), de la gravedad (\\(g\\)) y del estado del asfalto/neumáticos (coeficiente \\(\\mu\\)). ¡Un camión y una moto tienen la misma velocidad límite para derrapar!</span>
                </div>
                <div class='paso'>
                    <strong>d) Velocidad máxima antes de derrapar (\\(\\mu = 0,8\\)):</strong><br>
                    Aplicamos la fórmula que acabamos de deducir en el apartado anterior para hallar el límite físico de la curva:<br>
                    \\[ v_{max} = \\sqrt{\\mu \\cdot g \\cdot R} = \\sqrt{0,8 \\cdot 9,8 \\cdot 100} = \\sqrt{784} \\]<br>
                    \\[ v_{max} = 28 \\text{ m/s} \\]<br>
                    <span class='resultado'>Resultado:  &nbsp \\( v_{max} = 28 \\text{ m/s} \\) (que equivalen a 100,8 km/h). Si entra a más de esa velocidad, se saldrá de la curva.</span>
                </div>
            `
        },        
        {
            titulo: "Problema 4: Ciclista en velódromo",
            enunciado: "Un ciclista toma la curva de un velódromo de 20 m de radio con una velocidad de 40 km/h. Suponiendo que el rozamiento entre las cuerdas y el suelo es despreciable, calcula el ángulo de peralte mínimo para que el ciclista no se salga de la pista.",
            solucion: `
                <div class='paso'>
                    <strong>Análisis de fuerzas en un peralte sin rozamiento:</strong><br>
                    La componente vertical de la Fuerza Normal (\\( N_y \\)) contrarresta el peso (\\( P \\)), mientras que la componente horizontal (\\( N_x \\)) actúa como fuerza centrípeta (\\( F_c \\)).<br>
                    - Eje vertical: \\( N \\cdot \\cos(\\alpha) = m \\cdot g \\)<br>
                    - Eje horizontal: \\( N \\cdot \\sin(\\alpha) = m \\cdot \\frac{v^2}{R} \\)
                </div>
                <div class='paso'>
                    <strong>Cálculo del ángulo de peralte (\\( \\alpha \\)):</strong><br>
                    \\[ \\tan(\\alpha) = \\frac{v^2}{R \\cdot g} = \\frac{11,11^2}{20 \\cdot 9,8} \\approx 0,63 \\implies \\alpha = 32,2^{\\circ} \\]
                    <span class='resultado'>Resultado:  &nbsp El ángulo de peralte mínimo es de aproximadamente 32,2º.</span>
                </div>
                
            `
        },
        {
            titulo: "Problema 5: Coche en curva peraltada",
            enunciado: "Un coche circula sobre una curva peraltada de 60 m de radio que presenta una inclinación de 5º. El coeficiente de rozamiento entre el neumático y el suelo es de 0,55. Determina: <br>  a) La velocidad máxima que puede llevar el vehículo en la curva. <br>  b) Discute la importancia del desgaste del estriado en el neumático.",
            solucion: `
                <div class='paso'>
                    <strong>a) Análisis de fuerzas y ecuaciones:</strong><br>
                    Las fuerzas que actúan sobre el coche son el peso \\(P = m \\cdot g\\), la fuerza normal \\(N\\) perpendicular al peralte, y la fuerza de rozamiento \\(f_r\\).<br>
                    Para calcular la velocidad máxima, asumimos que el vehículo está al límite de deslizar hacia el exterior de la curva, por lo que la fuerza de rozamiento apunta hacia el interior (hacia abajo del plano inclinado).<br>
                    Descomponemos las fuerzas en los ejes Y (vertical) y X (horizontal, apuntando hacia el centro de la curva):<br>
                    - <strong>Eje Y (Equilibrio vertical):</strong> \\(N\\cos\\theta - f_r\\sin\\theta - m \\cdot g = 0\\). Como el rozamiento es máximo, \\(f_r = \\mu \\cdot N\\), quedando \\(N(\\cos\\theta - \\mu\\sin\\theta) = m \\cdot g\\).<br>
                    - <strong>Eje X (Fuerza centrípeta):</strong> \\(N\\sin\\theta + f_r\\cos\\theta = m \\cdot \\frac{v^2}{R}\\). Sustituyendo el rozamiento, queda \\(N(\\sin\\theta + \\mu\\cos\\theta) = m \\cdot \\frac{v^2}{R}\\).
                </div>
                <div class='paso'>
                    <strong>Cálculo de la velocidad máxima:</strong><br>
                    Dividimos la ecuación del eje X entre la del eje Y. Fíjate que la masa (\\(m\\)) y la normal (\\(N\\)) se cancelan, demostrando que la velocidad máxima es independiente del peso del coche:<br>
                    \\[\\frac{\\sin\\theta + \\mu\\cos\\theta}{\\cos\\theta - \\mu\\sin\\theta} = \\frac{v^2}{R \\cdot g}\\]<br>
                    Dividiendo todo el lado izquierdo entre \\(\\cos\\theta\\) para simplificar (recordando que \\(\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}\\)), obtenemos la fórmula general:<br>
                    \\[v_{max} = \\sqrt{R \\cdot g \\cdot \\frac{\\tan\\theta + \\mu}{1 - \\mu\\tan\\theta}}\\]<br>
                    Sustituimos los datos del problema: \\(R = 60\\) m, \\(g = 9,8 \\text{ m/s}^2\\), \\(\\theta = 5^\\circ\\), \\(\\mu = 0,55\\):<br>
                    \\[v_{max} = \\sqrt{60 \\cdot 9,8 \\cdot \\frac{\\tan(5^\\circ) + 0,55}{1 - 0,55 \\cdot \\tan(5^\\circ)}} = \\sqrt{588 \\cdot \\frac{0,0875 + 0,55}{1 - 0,0481}} = \\sqrt{588 \\cdot 0,6697}\\]<br>
                    <span class='resultado'>Resultado:  &nbsp \\(v_{max} = 19,84 \\text{ m/s}\\) (aprox. 71,4 km/h)</span>
                </div>
                <div class='paso'>
                    <strong>b) Importancia del desgaste del estriado:</strong><br>
                    El estriado (los surcos o el dibujo) del neumático tiene la función vital de evacuar el agua, la tierra y otras impurezas de la calzada. Si el neumático está liso debido al desgaste, pierde por completo esta capacidad.<br>
                    En condiciones de lluvia o asfalto sucio, se forma una película entre la rueda y el suelo (fenómeno conocido como <em>aquaplaning</em>), lo que reduce drásticamente el coeficiente de rozamiento (\\(\\mu\\)).<br>
                    Si observamos la fórmula matemática que acabamos de deducir, al disminuir \\(\\mu\\) hacia cero, el numerador de la fracción cae drásticamente. Esto significa que la velocidad máxima segura para tomar la curva bajará de los 71 km/h a apenas unos 25 km/h. Por tanto, un estriado en buen estado es fundamental para mantener el coeficiente de rozamiento alto y evitar que el vehículo salga proyectado por la tangente de la curva.
                </div>
`
        },
        {
            titulo: "Problema 6: Moto de Cross",
            enunciado: "Una moto de Cross toma una curva peraltada con un ángulo de 37º a 54 km/h. El coeficiente entre la tierra y el neumático es de μ = 0,3. Determina: <br> a) El radio mínimo de la curva para que la moto no sufra un accidente. <br> b) Si el radio de la curva es R=10, ¿qué sucederá?",
            solucion: `
                <div class='paso'>
                    <strong>Paso previo: Cambio de unidades:</strong><br>
                    Lo primero, como siempre, es pasar los datos al Sistema Internacional para no tener problemas con la gravedad. Convertimos la velocidad de la moto:<br>
                    \\[ v = 54 \\text{ km/h} \\cdot \\frac{1000 \\text{ m}}{1 \\text{ km}} \\cdot \\frac{1 \\text{ h}}{3600 \\text{ s}} = 15 \\text{ m/s} \\]
                </div>
                <div class='paso'>
                    <strong>a) Radio mínimo de la curva:</strong><br>
                    Utilizamos el mismo análisis de fuerzas que en un coche sobre un peralte. Para que el motorista no derrape hacia el exterior, la fuerza de rozamiento (\\(f_r\\)) debe tirar de él hacia abajo del plano inclinado. La ecuación general que relaciona la velocidad, el radio, el ángulo del peralte y el rozamiento es:<br>
                    \\[ \\frac{v^2}{R \\cdot g} = \\frac{\\sin\\theta + \\mu\\cos\\theta}{\\cos\\theta - \\mu\\sin\\theta} = \\frac{\\tan\\theta + \\mu}{1 - \\mu\\tan\\theta} \\]<br>
                    En este caso, nuestra incógnita es el radio (\\(R\\)). Le damos la vuelta a la fracción y despejamos \\(R\\):<br>
                    \\[ R_{min} = \\frac{v^2}{g} \\cdot \\frac{1 - \\mu\\tan\\theta}{\\tan\\theta + \\mu} \\]<br>
                    Sustituimos los datos (\\(v = 15 \\text{ m/s}\\), \\(g = 9,8 \\text{ m/s}^2\\), \\(\\theta = 37^\\circ\\), \\(\\mu = 0,3\\)).<br>
                    \\[ R_{min} = \\frac{15^2}{9,8} \\cdot \\frac{1 - 0,3 \\cdot 0,75}{0,75 + 0,3} = \\frac{225}{9,8} \\cdot \\frac{1 - 0,225}{1,05} \\]<br>
                    \\[ R_{min} = 22,96 \\cdot \\frac{0,775}{1,05} = 22,96 \\cdot 0,738 \\]<br>
                    <span class='resultado'>Resultado:  &nbsp \\(R_{min} = 16,94 \\text{ m}\\)</span>
                </div>
                <div class='paso'>
                    <strong>b) ¿Qué sucederá si R = 10 m?</strong><br>
                    Acabamos de calcular que, para que las ruedas aguanten a 54 km/h en ese peralte, el motorista necesita trazar una curva de al menos 16,94 metros de radio (una curva relativamente abierta).<br>
                    Si la curva real del circuito tiene un radio de <strong>10 m</strong>, significa que es una curva demasiado cerrada para esa velocidad. La fuerza centrífuga (o inercia) superará la fuerza máxima de agarre que pueden proporcionar juntos el peralte y el rozamiento.<br>
                    <span class='resultado'>Resultado:  &nbsp La moto no podrá mantenerse en la trayectoria y derrapará hacia el exterior de la curva, sufriendo una caída.</span>
                </div>
            `
        },
        {
            titulo: "Problema 7: Rayo McQueen",
            enunciado: "Rayo McQueen está en la final de la Copa Pistón. Para ganar la carrera, debe optimizar la velocidad con la que toma la curva más peligrosa el circuito. Esta curva tiene un radio de 150 m y está peraltada 15◦ . Gracias a los neumáticos estriados de Luigi, el rozamiento entre el neumático y el asfalto es de 0,7. Determina la velocidad máxima en km/h con la que Rayo McQueen puede tomar la curva.",
            solucion: `
                <div class='paso'>
                    <strong>Paso 1: Análisis de la situación en la Copa Pistón:</strong><br>
                    Para que el Rayo McQueen tome la curva a la máxima velocidad posible sin derrapar hacia el muro exterior, la fuerza de rozamiento estático de sus neumáticos (gracias a Luigi) debe actuar hacia el interior del peralte.<br>
                    Partimos de la fórmula general que ya hemos deducido para peraltes con rozamiento:<br>
                    \\[ v_{max} = \\sqrt{R \\cdot g \\cdot \\frac{\\tan\\theta + \\mu}{1 - \\mu\\tan\\theta}} \\]
                </div>
                <div class='paso'>
                    <strong>Paso 2: Sustitución de datos y cálculo matemático:</strong><br>
                    Recopilamos los datos del circuito: radio \\(R = 150 \\text{ m}\\), gravedad \\(g = 9,8 \\text{ m/s}^2\\), ángulo \\(\\theta = 15^\\circ\\) y rozamiento \\(\\mu = 0,7\\).<br>
                    Primero calculamos el valor de la tangente para simplificar: \\(\\tan(15^\\circ) \\approx 0,268\\).<br>
                    Sustituimos en la ecuación:<br>
                    \\[ v_{max} = \\sqrt{150 \\cdot 9,8 \\cdot \\frac{0,268 + 0,7}{1 - 0,7 \\cdot 0,268}} = \\sqrt{1470 \\cdot \\frac{0,968}{1 - 0,1876}} \\]<br>
                    \\[ v_{max} = \\sqrt{1470 \\cdot \\frac{0,968}{0,8124}} = \\sqrt{1470 \\cdot 1,1915} = \\sqrt{1751,5} \\]<br>
                    \\[ v_{max} \\approx 41,85 \\text{ m/s} \\]
                </div>
                <div class='paso'>
                    <strong>Paso 3: Conversión a la unidad solicitada:</strong><br>
                    El problema nos pide específicamente la velocidad en km/h, así que aplicamos el factor de conversión (multiplicar por 3,6):<br>
                    \\[ v_{max \\text{ (km/h)}} = 41,85 \\text{ m/s} \\cdot 3,6 \\text{ km/h por m/s} = 150,66 \\text{ km/h} \\]<br>
                    <span class='resultado'>Resultado: &nbsp El Rayo McQueen puede tomar la curva peligrosa a una velocidad máxima de 150,66 km/h. ¡Si supera esa velocidad, acabará contra el muro!</span>
                </div>
            `
        }
    ],
    "electrica": [
        {
            titulo: "Problema 1: Fuerza en el deuterio",
            enunciado: "El deuterio es el isótopo del hidrógeno que contiene un neutrón. El agua pesada \\( \\ce{D2O} \\) se emplea en los reactores nucleares para ralentizar los neutrones y controlar su crecimiento. Sabiendo que la distancia entre el protón y el electrón es de 0,5 Å, determina: </br> a) La fuerza eléctrica existente entre el protón y el electrón. <br> b) La aceleración inicial del electrón. <br> c) La distancia a la que debe situarse el electrón para reducir la fuerza de atracción a la cuarta parte. <br> Datos. \\( \\ce{K = 9 \\cdot 10^9 N \\cdot m^2 \\cdot C^{−2} ; q_e = 1,602 \\cdot 10^{−19} C; q_p = 1,602 \\cdot 10^{−19} C; m_e = 9,1 \\cdot 10^{−31}  kg; 1 \\\ \\text{Å} = 1 \\cdot 10^{-10}  m} \\) ",
            solucion: `
                <div class='paso'>
                    <strong>Paso previo: Unidades al Sistema Internacional y análisis:</strong><br>
                    El núcleo del deuterio tiene un protón y un neutrón. Como el neutrón no tiene carga, la interacción eléctrica se produce exclusivamente entre el protón y el electrón.<br>
                    Antes de operar, debemos pasar la distancia (dada en Angstroms, Å) a metros:<br>
                    \\[ r = 0,5 \\text{ Å } \\cdot \\frac{10^{-10} \\text{ m}}{1 \\text{ Å }} = 0,5 \\cdot 10^{-10} \\text{ m} = 5 \\cdot 10^{-11} \\text{ m} \\]
                </div>
                <div class='paso'>
                    <strong>a) Fuerza eléctrica entre el protón y el electrón:</strong><br>
                    Aplicamos la Ley de Coulomb. Dado que queremos el módulo de la fuerza (la intensidad de la atracción), usamos los valores absolutos de las cargas:<br>
                    \\[ F = k \\cdot \\frac{|q_p \\cdot q_e|}{r^2} \\]<br>
                    Sustituimos los datos suministrados en el problema:<br>
                    \\[ F = 9 \\cdot 10^9 \\cdot \\frac{(1,602 \\cdot 10^{-19}) \\cdot (1,602 \\cdot 10^{-19})}{(0,5 \\cdot 10^{-10})^2} \\]<br>
                    \\[ F = 9 \\cdot 10^9 \\cdot \\frac{2,566 \\cdot 10^{-38}}{0,25 \\cdot 10^{-20}} = 9 \\cdot 10^9 \\cdot 10,264 \\cdot 10^{-18} \\]<br>
                    <span class='resultado'>Resultado:  &nbsp \\( F \\approx 9,24 \\cdot 10^{-8} \\text{ N} \\)</span>
                </div>
                <div class='paso'>
                    <strong>b) Aceleración inicial del electrón:</strong><br>
                    Para relacionar la fuerza eléctrica con el movimiento de la partícula, recurrimos a la Segunda Ley de Newton (\\( F = m \\cdot a \\)). Despejamos la aceleración usando la masa del electrón:<br>
                    \\[ a = \\frac{F}{m_e} = \\frac{9,24 \\cdot 10^{-8} \\text{ N}}{9,1 \\cdot 10^{-31} \\text{ kg}} \\]<br>
                    \\[ a \\approx 1,015 \\cdot 10^{23} \\text{ m/s}^2 \\]<br>
                    <em>*Nota: Esta aceleración es brutalmente inmensa, lo cual es típico en física de partículas debido a que su masa es increíblemente pequeña.</em><br>
                    <span class='resultado'>Resultado:  &nbsp \\( a \\approx 1,015 \\cdot 10^{23} \\text{ m/s}^2 \\)</span>
                </div>
                <div class='paso'>
                    <strong>c) Distancia para reducir la fuerza a la cuarta parte:</strong><br>
                    Este es un apartado de razonamiento matemático (ley de la inversa del cuadrado). La fuerza depende inversamente del cuadrado de la distancia (\\( F \\propto \\frac{1}{r^2} \\)).<br>
                    Si queremos que la nueva fuerza sea \\( \\frac{F}{4} \\), el denominador de la fracción debe multiplicarse por 4.<br>
                    Para que \\( r^2 \\) se multiplique por 4, la propia distancia \\( r \\) debe multiplicarse por 2 (ya que \\( 2^2 = 4 \\)).<br>
                    Por tanto, la nueva distancia debe ser el doble de la original:<br>
                    \\[ r' = 2 \\cdot r = 2 \\cdot 0,5 \\text{ Å} \\]<br>
                    <span class='resultado'>Resultado:  &nbsp \\( r' = 1,0 \\text{ Å} \\) (o \\( 10^{-10} \\text{ m} \\))</span>
                </div>
            `
        },
        {
            titulo: "Problema 2: Cargas en triángulo",
            enunciado: "Tres cargas eléctricas de 5 nC, dos positivas fijas y una negativa libre, se sitúan en los vértices de un triángulo equilátero de 60 cm de lado. Sabiendo que la masa de la carga negativa es de 5 g, determina: <br> a) En que dirección comienza a moverse. <br> b) ¿Qué movimiento realiza la carga libre a lo largo del tiempo? <br> c) Calcula la fuerza que experimenta la carga libre en el vértice del triángulo. <br> d) Obtén la aceleración en dicho vértice. <div style='text-align: center; margin-bottom: 20px;'> <img src='img/din_6.png' style='max-width: 80%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> <br> \\( \\ce{Datos: K = 9 \\cdot 10^9 N \\cdot m^2 \\cdot C^{−2}; 1 \\\ nC = 10^{-9} \\\ C } \\)",
            solucion: `
                <div class='paso'>
                    <strong>Paso previo: Unidades al Sistema Internacional:</strong><br>
                    Antes de empezar, pasamos todos los datos al S.I. para evitar errores con la constante de Coulomb (\\(k\\)):<br>
                    - Cargas: \\( q = 5 \\text{ nC} = 5 \\cdot 10^{-9} \\text{ C} \\)<br>
                    - Distancia: \\( L = 60 \\text{ cm} = 0,6 \\text{ m} \\)<br>
                    - Masa: \\( m = 5 \\text{ g} = 5 \\cdot 10^{-3} \\text{ kg} \\)
                </div>
                <div class='paso'>
                    <strong>a) Dirección en la que comienza a moverse:</strong><br>
                    La carga superior es negativa y las de la base son positivas, por lo que sufre una fuerza de atracción hacia cada una de ellas.<br>
                    Al ser un triángulo equilátero y tener las cargas de la base el mismo valor, el sistema es simétrico. Las componentes horizontales de estas dos fuerzas de atracción son iguales y de sentido contrario, por lo que se anulan entre sí.<br>
                    <span class='resultado'>Resultado: &nbsp Las componentes verticales se suman, apuntando hacia abajo. La carga libre comenzará a moverse en línea recta hacia abajo, siguiendo la mediatriz del lado que une las cargas fijas.</span>
                </div>
                <div class='paso'>
                    <strong>b) Movimiento a lo largo del tiempo:</strong><br>
                    Al moverse hacia abajo, pasará por la línea que une las cargas fijas. En ese punto, la fuerza neta se hace cero por un instante, pero la partícula lleva inercia (velocidad), así que lo cruzará.<br>
                    Una vez por debajo de las cargas positivas, estas la atraerán hacia arriba, frenándola hasta detenerla y volviendo a tirar de ella hacia el centro.<br>
                    <span class='resultado'>Resultado: &nbsp Realizará un movimiento oscilatorio continuo de arriba a abajo a lo largo del eje de simetría vertical (suponiendo que no hay rozamiento ni otras pérdidas de energía).</span>
                </div>
                <div class='paso'>
                    <strong>c) Fuerza que experimenta en el vértice:</strong><br>
                    Calculamos la fuerza de atracción (en módulo) que ejerce UNA de las cargas positivas sobre la negativa mediante la Ley de Coulomb:<br>
                    \\[ F_1 = k \\cdot \\frac{|q_1 \\cdot q_2|}{L^2} = 9 \\cdot 10^9 \\cdot \\frac{(5 \\cdot 10^{-9}) \\cdot (5 \\cdot 10^{-9})}{(0,6)^2} \\]<br>
                    \\[ F_1 = 9 \\cdot 10^9 \\cdot \\frac{25 \\cdot 10^{-18}}{0,36} = \\frac{225 \\cdot 10^{-9}}{0,36} = 6,25 \\cdot 10^{-7} \\text{ N} \\]<br>
                    Dado que el triángulo es equilátero, el ángulo que forma cada fuerza con el eje vertical (la bisectriz) es de \\(30^\\circ\\). La fuerza total neta será el doble de la componente vertical de \\(F_1\\):<br>
                    \\[ F_{total} = 2 \\cdot F_y = 2 \\cdot F_1 \\cdot \\cos(30^\\circ) = 2 \\cdot 6,25 \\cdot 10^{-7} \\cdot \\frac{\\sqrt{3}}{2} \\]<br>
                    <span class='resultado'>Resultado: &nbsp \\( F_{total} = 6,25 \\cdot \\sqrt{3} \\cdot 10^{-7} \\approx 1,08 \\cdot 10^{-6} \\text{ N} \\) (hacia abajo)</span>
                </div>
                <div class='paso'>
                    <strong>d) Aceleración en dicho vértice:</strong><br>
                    Para hallar la aceleración, simplemente aplicamos la Segunda Ley de Newton (\\( F = m \\cdot a \\)):<br>
                    \\[ a = \\frac{F_{total}}{m} = \\frac{1,0825 \\cdot 10^{-6} \\text{ N}}{5 \\cdot 10^{-3} \\text{ kg}} \\]<br>
                    <span class='resultado'>Resultado: &nbsp \\( a \\approx 2,165 \\cdot 10^{-4} \\text{ m/s}^2 \\) (hacia abajo)</span>
                </div>
            `
        },
        {
            titulo: "Problema 3: Radiación cósmica",
            enunciado: "La radiación cósmica tiene una influencia directa en nuestro planeta. La teoría más asentada sobre la formación de tormentas apunta a la radiación cósmica como origen de las mismas. En un laboratorio de nanotecnología, se investiga el comportamiento de partículas cargadas en dispositivos de detección de polvo cósmico. En un experimento, tres pequeñas esferas con carga están suspendidas en un campo eléctrico controlado según el siguiente esquema. Determina: <br> a) La fuerza que experimenta la carga 1. <br> b) La aceleración que experimenta la carga 1, cuya masa es de 10 g. <br> c) Indica qué bosones se intercambian en la interacción descrita. <div style='text-align: center; margin-bottom: 20px;'> <img src='img/din_7.png' style='max-width: 25%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div>  <br> \\( \\ce{Datos: K = 9 \\cdot 10^9 N \\cdot m^2 \\cdot C^{−2}; 1 \\\ \\mu \\text{C} = 10^{-6} \\\ \\text{C} }\\)",
            solucion: `
                <div class='paso'>
                    <strong>Paso 1: Análisis geométrico previo:</strong><br>
                    Observando el esquema, tenemos un sistema simétrico. La carga positiva \\(q_1\\) es atraída por las cargas negativas \\(q_2\\) y \\(q_3\\).<br>
                    Conocemos la distancia entre las cargas (la hipotenusa del triángulo formado, \\( r = 3,5 \\text{ m} \\)) y la altura vertical respecto al eje X (\\( y = 1,5 \\text{ m} \\)).<br>
                    Calculamos la distancia en el eje X (cateto contiguo) usando el Teorema de Pitágoras:<br>
                    \\[ x = \\sqrt{r^2 - y^2} = \\sqrt{3,5^2 - 1,5^2} = \\sqrt{12,25 - 2,25} = \\sqrt{10} \\approx 3,16 \\text{ m} \\]<br>
                    Con esto, extraemos el coseno del ángulo \\(\\alpha\\) (ángulo entre la fuerza y el eje X), que usaremos para proyectar los vectores:<br>
                    \\[ \\cos(\\alpha) = \\frac{\\text{cateto contiguo}}{\\text{hipotenusa}} = \\frac{\\sqrt{10}}{3,5} \\approx 0,9035 \\]
                </div>
                <div class='paso'>
                    <strong>a) Fuerza que experimenta la carga 1:</strong><br>
                    Primero, calculamos el módulo de la fuerza de atracción entre \\(q_1\\) y \\(q_2\\) (Ley de Coulomb). Al tener \\(q_3\\) la misma carga y estar a la misma distancia, la fuerza \\(F_{31}\\) será idéntica en módulo.<br>
                    Pasamos las cargas a Culombios: \\( 3  \\mu \\text{ C} = 3 \\cdot 10^{-6} \\text{ C} \\).<br>
                    \\[ F_{21} = k \\cdot \\frac{|q_1 \\cdot q_2|}{r^2} = 9 \\cdot 10^9 \\cdot \\frac{(3 \\cdot 10^{-6}) \\cdot (3 \\cdot 10^{-6})}{(3,5)^2} \\]<br>
                    \\[ F_{21} = 9 \\cdot 10^9 \\cdot \\frac{9 \\cdot 10^{-12}}{12,25} = \\frac{0,081}{12,25} \\approx 6,612 \\cdot 10^{-3} \\text{ N} \\]<br>
                    Por simetría, las componentes en el eje Y se anulan (una tira hacia arriba y otra hacia abajo con la misma intensidad). Las componentes en el eje X se suman:<br>
                    \\[ F_{total} = 2 \\cdot F_{21x} = 2 \\cdot F_{21} \\cdot \\cos(\\alpha) = 2 \\cdot (6,612 \\cdot 10^{-3}) \\cdot 0,9035 \\]<br>
                    <span class='resultado'>Resultado: &nbsp \\( F_{total} \\approx 1,195 \\cdot 10^{-2} \\text{ N} \\) (dirigida hacia la derecha, en el eje X positivo)</span>
                </div>
                <div class='paso'>
                    <strong>b) Aceleración que experimenta la carga 1:</strong><br>
                    Aplicamos la Segunda Ley de Newton. Pasamos la masa al Sistema Internacional: \\( m = 10 \\text{ g} = 0,01 \\text{ kg} \\).<br>
                    \\[ a = \\frac{F_{total}}{m} = \\frac{1,195 \\cdot 10^{-2} \\text{ N}}{0,01 \\text{ kg}} \\]<br>
                    <span class='resultado'>Resultado: &nbsp \\( a = 1,195 \\text{ m/s}^2 \\) (hacia la derecha)</span>
                </div>
                <div class='paso'>
                    <strong>c) Bosones que se intercambian:</strong><br>
                    Esta es una pregunta teórica pura del Modelo Estándar de la física de partículas. Las fuerzas eléctricas y magnéticas son manifestaciones de la interacción electromagnética.<br>
                    <span class='resultado'>Resultado: &nbsp La partícula mediadora (bosón de gauge) responsable de la interacción electromagnética es el <strong>fotón</strong>.</span>
                </div>
            `
        },
        {
            titulo: "Problema 4: 1-bromopropano",
            enunciado: "El 1-bromopropano es un disolvente empleado para limpiar las superficies de las pantallas OLEDs. Para formar el 1-bromopropano se lleva a cabo una reacción orgánica donde el ion bromuro \\( \\ce{Br^–} \\) ataca la carga positiva del carbocatión (propano). El ion bromuro se encuentra rodeado de 3 cargas positivas (carbocationes). En los siguientes esquemas se muestran tanto la reacción orgánica (1) como un diagrama de cargas (2). Determina: <br> a) La fuerza que experimenta la carga 1. <br> b) La fuerza que experimenta la carga 4. <br> c) La aceleración que experimenta la carga 1 (ion bromuro), cuya masa es de 1,33 · 10 – 22 g. <br> d) Teniendo en cuenta el diagrama de fuerzas, ¿a qué carbocatión crees que se unirá el bromuro? <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/din_8.png' style='max-width: 70%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div>  <br> \\( \\ce{Datos: K = 9 \\cdot 10^9 N \\cdot m^2 \\cdot C^{−2}; 1 \\text{ nm} = 1 \\cdot 10^{-9} \\text{ m}} \\)",
            solucion: `
                <div class='paso'>
                    <strong>Paso 1: Análisis geométrico y paso a unidades del S.I.:</strong><br>
                    Primero, pasamos todas las unidades al Sistema Internacional:<br>
                    - Cargas: \\( q_1 = -1 \\cdot 10^{-19} \\text{ C} \\), \\( q_2 = q_3 = q_4 = 0,8 \\cdot 10^{-19} \\text{ C} \\)<br>
                    - Distancias: \\( d_{12} = d_{13} = 2 \\text{ nm} = 2 \\cdot 10^{-9} \\text{ m} \\). La distancia vertical entre \\(q_2\\) y \\(q_4\\) es \\( 1 \\text{ nm} = 1 \\cdot 10^{-9} \\text{ m} \\).<br>
                    - Masa de \\(q_1\\): \\( m = 1,33 \\cdot 10^{-22} \\text{ g} = 1,33 \\cdot 10^{-25} \\text{ kg} \\).<br>
                    Necesitamos la distancia horizontal desde \\(q_1\\) hasta \\(q_4\\) (llamémosla \\(x\\)). Usamos el Teorema de Pitágoras en el triángulo formado por \\(q_1\\), \\(q_4\\) y \\(q_2\\):<br>
                    \\[ x^2 + (1 \\cdot 10^{-9})^2 = (2 \\cdot 10^{-9})^2 \\implies x^2 + 1 \\cdot 10^{-18} = 4 \\cdot 10^{-18} \\]<br>
                    \\[ x = \\sqrt{3 \\cdot 10^{-18}} = \\sqrt{3} \\cdot 10^{-9} \\text{ m} \\approx 1,732 \\cdot 10^{-9} \\text{ m} \\]<br>
                    Esta es la distancia \\(r_{14}\\). Además, el coseno del ángulo \\(\\alpha\\) que forma la fuerza de \\(q_2\\) con la horizontal es: \\( \\cos(\\alpha) = \\frac{cateto\\ contiguo}{hipotenusa} = \\frac{\\sqrt{3}}{2} \\).
                </div>
                <div class='paso'>
                    <strong>a) Fuerza que experimenta la carga 1 (ion bromuro):</strong><br>
                    Calculamos la fuerza atractiva que ejerce \\(q_2\\) sobre \\(q_1\\):<br>
                    \\[ F_{21} = k \\cdot \\frac{|q_1 \\cdot q_2|}{r_{12}^2} = 9 \\cdot 10^9 \\cdot \\frac{1 \\cdot 10^{-19} \\cdot 0,8 \\cdot 10^{-19}}{(2 \\cdot 10^{-9})^2} = 9 \\cdot 10^9 \\cdot \\frac{0,8 \\cdot 10^{-38}}{4 \\cdot 10^{-18}} = 1,8 \\cdot 10^{-11} \\text{ N} \\]<br>
                    Por simetría, la fuerza que ejerce \\(q_3\\) es igual: \\( F_{31} = 1,8 \\cdot 10^{-11} \\text{ N} \\).<br>
                    Las componentes Y se anulan. Las componentes X se suman: \\( F_{21x} + F_{31x} = 2 \\cdot F_{21} \\cdot \\cos(\\alpha) = 2 \\cdot 1,8 \\cdot 10^{-11} \\cdot \\frac{\\sqrt{3}}{2} \\approx 3,118 \\cdot 10^{-11} \\text{ N} \\).<br>
                    Calculamos la fuerza directa que ejerce el carbocatión central \\(q_4\\) (es puramente horizontal):<br>
                    \\[ F_{41} = k \\cdot \\frac{|q_1 \\cdot q_4|}{r_{14}^2} = 9 \\cdot 10^9 \\cdot \\frac{1 \\cdot 10^{-19} \\cdot 0,8 \\cdot 10^{-19}}{(\\sqrt{3} \\cdot 10^{-9})^2} = 9 \\cdot 10^9 \\cdot \\frac{0,8 \\cdot 10^{-38}}{3 \\cdot 10^{-18}} = 2,4 \\cdot 10^{-11} \\text{ N} \\]<br>
                    Sumamos todo el empuje horizontal:<br>
                    \\[ F_{total\_1} = 3,118 \\cdot 10^{-11} + 2,4 \\cdot 10^{-11} = 5,518 \\cdot 10^{-11} \\text{ N} \\]<br>
                    <span class='resultado'>Resultado: &nbsp \\( F_1 \\approx 5,52 \\cdot 10^{-11} \\text{ N} \\) (hacia la derecha)</span>
                </div>
                <div class='paso'>
                    <strong>b) Fuerza que experimenta la carga 4:</strong><br>
                    Sobre la carga \\(q_4\\) actúan tres fuerzas: la repulsión de \\(q_2\\) (hacia abajo), la repulsión de \\(q_3\\) (hacia arriba) y la atracción de \\(q_1\\) (hacia la izquierda).<br>
                    Por simetría pura, como \\(q_2 = q_3\\) y están a la misma distancia de \\(q_4\\) (1 nm), sus fuerzas de repulsión se cancelan perfectamente.<br>
                    La única fuerza neta que sobrevive es la atracción hacia el bromuro \\(q_1\\). Por la 3ª Ley de Newton (acción-reacción), si \\(q_4\\) atrae a \\(q_1\\) con \\(2,4 \\cdot 10^{-11} \\text{ N}\\), \\(q_1\\) atrae a \\(q_4\\) con exactamente la misma fuerza pero sentido opuesto.<br>
                    <span class='resultado'>Resultado: &nbsp \\( F_4 = 2,4 \\cdot 10^{-11} \\text{ N} \\) (hacia la izquierda)</span>
                </div>
                <div class='paso'>
                    <strong>c) Aceleración del ion bromuro (carga 1):</strong><br>
                    Aplicamos la Segunda Ley de Newton:\\( F = m \\cdot a \\):<br>
                    \\[ a = \\frac{F_{total\_1}}{m_1} = \\frac{5,518 \\cdot 10^{-11} \\text{ N}}{1,33 \\cdot 10^{-25} \\text{ kg}} \\]<br>
                    <span class='resultado'>Resultado: &nbsp \\( a \\approx 4,15 \\cdot 10^{14} \\text{ m/s}^2 \\) (hacia la derecha)</span>
                </div>
                <div class='paso'>
                    <strong>d) ¿A qué carbocatión se unirá?</strong><br>
                    Observando el diagrama de fuerzas del apartado "a", la fuerza resultante sobre el ion bromuro apunta de forma perfecta y exclusivamente en la horizontal hacia la derecha, ya que los tirones verticales hacia arriba y hacia abajo se han anulado.<br>
                    <span class='resultado'>Resultado: &nbsp El bromuro se unirá al carbocatión central (\\(q_4\\)), ya que la fuerza neta lo acelera en línea recta directa hacia él.</span>
                </div>
            `
        }
    ],
    "plano": [
        {
            titulo: "Problema 1: Descenso por la pirámide",
            enunciado: "Un paracaidista se desliza por una pirámide con una inclinación de 25° y un coeficiente de rozamiento cinético de \\( \\mu_c = 0,35 \\). Determina: <br> a) La aceleración con que desciende. <br> b) El tiempo que tarda en alcanzar los 20 m/s partiendo de 5 m/s. <br> c) Razona si varía el rozamiento con la posición.",
            solucion: `
                <div class='paso'>
                    <strong>Paso 1: Análisis de fuerzas y Diagrama de Cuerpo Libre (DCL):</strong><br>
                    Para resolver el problema, primero debemos identificar todas las fuerzas que actúan sobre el paracaidista y dibujarlas en un sistema de ejes de coordenadas, donde el eje X es paralelo al plano inclinado y el eje Y es perpendicular a él.<br>
                    Las fuerzas son: el Peso (\\( \\vec{P} = m \\cdot \\vec{g} \\)), la Normal (\\( \\vec{N} \\)) ejercida por la superficie de la pirámide, y la Fuerza de Rozamiento cinético (\\( \\vec{F}_R \\)) que se opone al movimiento.<br>
                    <br>
                    <div style='text-align: center; margin-bottom: 20px;'> <img src='img/pi_1.png' style='max-width: 90%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div>
                    <div style="text-align: center; margin: 20px 0;">
                        <p style="font-size: 0.9em; color: #666; font-style: italic;">Diagrama de Cuerpo Libre (DCL) para un objeto en un plano inclinado con rozamiento.</p>
                    </div>
                    <br>
                    Descomponemos el peso en sus componentes cartesianas:<br>
                    - Componente paralela al plano (responsable de la aceleración): \\( P_x = m \\cdot g \\cdot \\text{sen}(25^{\\circ}) \\)<br>
                    - Componente perpendicular al plano: \\( P_y = m \\cdot g \\cdot \\cos(25^{\\circ}) \\)<br>
                    Como no hay movimiento en el eje Y, la fuerza Normal es igual a la componente \\( P_y \\) del peso: \\( N = P_y \\).
                </div>

                <div class='paso'>
                    <strong>a) Cálculo de la aceleración:</strong><br>
                    Aplicamos la segunda ley de Newton (\\( \\sum \\vec{F} = m \\cdot \\vec{a} \\)) en el eje del movimiento (X):<br>
                    \\[ \\sum F_x = m \\cdot a \\implies P_x - F_R = m \\cdot a \\]<br>
                    Sabemos que la fuerza de rozamiento es \\( F_R = \\mu_c \\cdot N \\), y sustituyendo \\( N \\) por su valor:\\( F_R = \\mu_c \\cdot m \\cdot g \\cdot \\cos(25^{\\circ}) \\).<br>
                    Sustituimos las expresiones de las fuerzas en la ecuación de Newton:<br>
                    \\[ m \\cdot g \\cdot \\text{sen}(25^{\\circ}) - \\mu_c \\cdot (m \\cdot g \\cdot \\cos(25^{\\circ})) = m \\cdot a \\]<br>
                    Podemos simplificar la masa (\\( m \\)) en todos los términos (la aceleración no depende de la masa):<br>
                    \\[ g \\cdot \\text{sen}(25^{\\circ}) - \\mu_c \\cdot g \\cdot \\cos(25^{\\circ}) = a \\]<br>
                    Sacamos factor común \\( g \\) y calculamos:<br>
                    \\[ a = 9,8 \\cdot (\\text{sen}(25^{\\circ}) - 0,35 \\cdot \\cos(25^{\\circ})) = 1,033 \\text{ m/s}^2 \\]<br>
                    <span class='resultado'>Resultado: La aceleración de descenso es de \\( 1,033 \\text{ m/s}^2 \\).</span>
                </div>

                <div class='paso'>
                    <strong>b) Cálculo del tiempo para alcanzar la velocidad de 20 m/s:</strong><br>
                    Este es un problema de Movimiento Rectilíneo Uniformemente Acelerado (MRUA). Utilizamos la ecuación de la velocidad:<br>
                    \\[ v = v_0 + a \\cdot t \\]<br>
                    Datos conocidos: \\( v = 20 \\text{ m/s} \\), \\( v_0 = 5 \\text{ m/s} \\), \\( a = 1,033 \\text{ m/s}^2 \\).<br>
                    Despejamos el tiempo \\( t \\):<br>
                    \\[ t = \\frac{v - v_0}{a} \\]<br>
                    Sustituimos los valores:<br>
                    \\[ t = \\frac{20 - 5}{1,033} = \\frac{15}{1,033} \\approx 14,52 \\text{ s} \\]<br>
                    <span class='resultado'>Resultado: Tarda aproximadamente \\( 14,52 \\) segundos en alcanzar esa velocidad.</span>
                </div>

                <div class='paso'>
                    <strong>c) Razonamiento sobre la variación del rozamiento según la posición:</strong><br>
                    Analicemos la fórmula de la fuerza de rozamiento cinético que hemos utilizado: \\( F_r = \\mu_c \\cdot N \\). <br>
                    Esta fórmula nos dice que la magnitud de la fuerza de rozamiento depende únicamente de dos factores: el coeficiente de rozamiento cinético (\\( \\mu_c \\)), que es una propiedad de los materiales en contacto (la ropa del paracaidista y la superficie de la pirámide), y la fuerza Normal (\\( N \\)), que es la fuerza de compresión perpendicular entre las superficies.<br>
                    Como hemos visto en el Paso 1, la Normal depende exclusivamente del peso del paracaidista y del ángulo de inclinación de la pirámide (\\( N = m \\cdot g \\cdot \\cos(25^{\\circ}) \\)). Ninguno de estos factores cambia si el paracaidista adopta una posición diferente (tumbado, sentado, etc.).<br>
                    <span class='resultado'>Resultado: NO varía. Según las leyes clásicas del rozamiento, la fuerza de rozamiento es independiente del área de la superficie de contacto. Por lo tanto, independientemente de su posición, mientras la masa y las superficies sean las mismas, el rozamiento será constante.</span>
                </div>`
        },
        {
            titulo: "Problema 2: Antiguo Egipto",
            enunciado: "Un esclavo deja de empujar un bloque de piedra en una rampa con una inclinación de 20°. El coeficiente de rozamiento estático es \\( \\mu_e = 0,4 \\). <br> a) Justifica si el bloque descenderá por el plano. <br> b) Indica qué fuerza fundamental supone el rozamiento. ",
            solucion: `
                <div class='paso'>
                    <strong>Paso 1: Análisis de las fuerzas en reposo:</strong><br>
                    Para saber si el bloque desliza, debemos comparar la fuerza que tira de él hacia abajo (componente del peso paralela al plano) con la fuerza máxima que el rozamiento puede aguantar antes de que el bloque empiece a moverse.<br>
                    
                    <br>
                    - Fuerza que empuja hacia abajo (Peso tangencial): \\( P_x = m \\cdot g \\cdot \\text{sen}(20^{\\circ}) \\)<br>
                    - Fuerza Normal (presión contra el plano): \\( N = m \\cdot g \\cdot \\cos(20^{\\circ}) \\)<br>
                    - Fuerza de rozamiento estático máxima: \\( F_{e,max} = \\mu_e \\cdot N = \\mu_e \\cdot m \\cdot g \\cdot \\cos(20^{\\circ}) \\) <br> 
                    <br>
                    <div style='text-align: center; margin-bottom: 20px;'> 
                        <img src='img/pi_1.png' style='max-width: 90%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> 
                    </div>
                </div>

                <div class='paso'>
                    <strong>a) Justificación del movimiento:</strong><br>
                    El bloque descenderá solo si la fuerza a favor del movimiento (\\( P_x \\)) es mayor que la resistencia máxima del rozamiento (\\( F_{e,max} \\)). Comparamos ambas expresiones:<br>
                    \\[ ¿ m \\cdot g \\cdot \\text{sen}(20^{\\circ}) > \\mu_e \\cdot m \\cdot g \\cdot \\cos(20^{\\circ}) ? \\]<br>
                    Podemos simplificar \\( m \\cdot g \\) en ambos lados. La condición de movimiento se reduce a:<br>
                    \\[ \\text{sen}(20^{\\circ}) > \\mu_e \\cdot \\cos(20^{\\circ}) \\]<br>
                    Calculamos los valores:<br>
                    - Fuerza motriz proporcional: \\( \\text{sen}(20^{\\circ}) \\approx 0,342 \\)<br>
                    - Resistencia proporcional: \\( 0,4 \\cdot \\cos(20^{\\circ}) \\approx 0,4 \\cdot 0,940 = 0,376 \\)<br>
                    Como \\( 0,342 < 0,376 \\), la fuerza del peso no es suficiente para vencer el rozamiento estático.<br>
                    <span class='resultado'>Resultado: El bloque NO descenderá; se quedará quieto en la rampa.</span>
                </div>

                <div class='paso'>
                    <strong>b) ¿Qué fuerza fundamental supone el rozamiento?</strong><br>
                    A nivel microscópico, el rozamiento no es una fuerza "independiente", sino que tiene su origen en las interacciones entre los átomos y moléculas de las dos superficies en contacto (las irregularidades de la piedra y la rampa).<br>
                    Estas interacciones son de naturaleza eléctrica (atracciones y repulsiones entre electrones y núcleos de los materiales).<br>
                    <span class='resultado'>Resultado: El rozamiento es una manifestación de la <strong>fuerza electromagnética</strong>.</span>
                </div>`
        },
        {
            titulo: "Problema 3: Ascenso del esquiador en plano inclinado",
            enunciado: "Un esquiador de 80 kg entra en un plano inclinado de 25° a 20 m/s. El coeficiente de rozamiento es \\( \\mu = 0,1 \\). Determina: <br> a) La aceleración de frenado. <br> b) La velocidad tras recorrer 5 m de plano. <br> c) Si un gorro que se le cae deslizará ladera abajo.",
            solucion: `
                <div class='paso'>
                    <strong>Paso 1: Análisis de fuerzas en el ascenso:</strong><br>
                    Al subir, el esquiador lucha contra dos fuerzas que apuntan hacia abajo del plano:<br>
                    - Componente del peso paralela al plano: \\( P_x = m \\cdot g \\cdot \\text{sen}(25^{\\circ}) \\)<br>
                    - Fuerza de rozamiento: \\( F_r = \\mu \\cdot N = \\mu \\cdot m \\cdot g \\cdot \\cos(25^{\\circ}) \\)<br>
                    La sumatoria de fuerzas en el eje X (dirección del movimiento) es:<br>
                    \\[ \\sum F_x = -P_x - F_r = m \\cdot a \\]
                    
                </div>

                <div class='paso'>
                    <strong>a) Cálculo de la aceleración de frenado:</strong><br>
                    Sustituimos las expresiones de las fuerzas en la ecuación de Newton:<br>
                    \\[ -m \\cdot g \\cdot \\text{sen}(25^{\\circ}) - \\mu \\cdot m \\cdot g \\cdot \\cos(25^{\\circ}) = m \\cdot a \\]<br>
                    Simplificamos la masa (\\( m \\)) y calculamos:<br>
                    \\[ a = -g \\cdot (\\text{sen}(25^{\\circ}) + \\mu \\cdot \\cos(25^{\\circ})) \\]<br>
                    \\[ a = -9,8 \\cdot (0,4226 + 0,1 \\cdot 0,9063) = -9,8 \\cdot (0,4226 + 0,0906) \\]<br>
                    \\[ a = -9,8 \\cdot 0,5132 = -5,029 \\text{ m/s}^2 \\]<br>
                    <span class='resultado'>Resultado: La aceleración es de \\( -5,03 \\text{ m/s}^2 \\) (el signo negativo indica que está frenando).</span>
                </div>

                <div class='paso'>
                    <strong>b) Cálculo de la velocidad final tras 5 metros:</strong><br>
                    Usamos la ecuación cinemática que relaciona velocidades, aceleración y distancia sin necesidad del tiempo:<br>
                    \\[ v_f^2 = v_0^2 + 2 \\cdot a \\cdot \\Delta x \\]<br>
                    Datos: \\( v_0 = 20 \\text{ m/s} \\), \\( a = -5,03 \\text{ m/s}^2 \\), \\( \\Delta x = 5 \\text{ m} \\).<br>
                    \\[ v_f^2 = 20^2 + 2 \\cdot (-5,03) \\cdot 5 \\]<br>
                    \\[ v_f^2 = 400 - 50,3 = 349,7 \\]<br>
                    \\[ v_f = \\sqrt{349,7} \\approx 18,7 \\text{ m/s} \\]<br>
                    <span class='resultado'>Resultado: Sale del plano con una velocidad de \\( 18,7 \\text{ m/s} \\).</span>
                </div>

                <div class='paso'>
                    <strong>c) ¿Deslizará el gorro hacia abajo?</strong><br>
                    Para que el gorro deslice partiendo del reposo, la fuerza del peso hacia abajo (\\( P_x \\)) debe ser mayor que la fuerza de rozamiento estático máxima (\\( F_{e,max} \\)).<br>
                    Suponiendo que el gorro tiene el mismo coeficiente de rozamiento (\\( \\mu = 0,1 \\)):<br>
                    \\[ ¿ \\text{sen}(25^{\\circ}) > \\mu \\cdot \\cos(25^{\\circ}) ? \\]<br>
                    \\[ 0,4226 > 0,1 \\cdot 0,9063 \\implies 0,4226 > 0,0906 \\]<br>
                    Como la componente del peso es mucho mayor que la fuerza de rozamiento estático máxima:<br>
                    <span class='resultado'>Resultado: SÍ, el gorro deslizará y caerá plano abajo.</span>
                </div>`
        },        
        {
            titulo: "Problema 4: Máquina de Atwood",
            enunciado: "En una grúa cuelgan de una cuerda inextensible dos masas: \\( m_1 = 400 \\text{ g} \\) y \\( m_2 = 500 \\text{ g} \\). Determina: <br> a) Sentido del movimiento. <br> b) Tensión de la cuerda. <br> c) Aceleración del sistema. <br> d) Fuerza fundamental implicada y sus bosones.",
            solucion: `
                <div class='paso'>
                    <strong>Paso 1: Análisis de datos y conversión al S.I.:</strong><br>
                    Primero, pasamos las masas a kilogramos:<br>
                    - Masa 1: \\( m_1 = 400 \\text{ g} = 0,4 \\text{ kg} \\)<br>
                    - Masa 2: \\( m_2 = 500 \\text{ g} = 0,5 \\text{ kg} \\)<br>
                    - Gravedad: \\( g = 9,8 \\text{ m/s}^2 \\)<br>
                    Pesos respectivos:<br>
                    - \\( P_1 = 0,4 \\cdot 9,8 = 3,92 \\text{ N} \\)<br>
                    - \\( P_2 = 0,5 \\cdot 9,8 = 4,90 \\text{ N} \\)
                </div>

                <div class='paso'>
                    <strong>a) Indica en qué sentido se mueven las masas:</strong><br>
                    En una máquina de Atwood, el sistema se mueve siempre hacia el lado de la masa mayor debido a la diferencia de pesos.<br>
                    
                    <br>
                    <span class='resultado'>Resultado: La masa de 500 g (\\( m_2 \\)) descenderá, mientras que la masa de 400 g (\\( m_1 \\)) ascenderá.</span>
                </div>

                <div class='paso'>
                    <strong>c) ¿Con qué aceleración se moverán?</strong><br>
                    <em>(Resolvemos c antes que b por facilidad algebraica)</em>. Aplicamos la segunda ley de Newton al sistema completo. La fuerza neta es la diferencia de pesos:<br>
                    \\[ F_{neta} = m_{total} \\cdot a \\]<br>
                    \\[ P_2 - P_1 = (m_1 + m_2) \\cdot a \\]<br>
                    Sustituimos valores:<br>
                    \\[ 4,90 - 3,92 = (0,4 + 0,5) \\cdot a \\]<br>
                    \\[ 0,98 = 0,9 \\cdot a \\implies a = \\frac{0,98}{0,9} \\approx 1,089 \\text{ m/s}^2 \\]<br>
                    <span class='resultado'>Resultado: La aceleración es de \\( 1,09 \\text{ m/s}^2 \\).</span>
                </div>

                <div class='paso'>
                    <strong>b) ¿Cuál es la tensión de la cuerda?</strong><br>
                    Analizamos una de las masas por separado (por ejemplo, la masa \\( m_1 \\) que sube):<br>
                    \\[ T - P_1 = m_1 \\cdot a \\]<br>
                    \\[ T = P_1 + (m_1 \\cdot a) \\]<br>
                    \\[ T = 3,92 + (0,4 \\cdot 1,089) = 3,92 + 0,4356 \\]<br>
                    <span class='resultado'>Resultado: La tensión de la cuerda es de \\( 4,356 \\text{ N} \\).</span>
                </div>

                <div class='paso'>
                    <strong>d) Fuerza fundamental y bosones:</strong><br>
                    La tensión es una fuerza de contacto que surge de las interacciones moleculares dentro de la cuerda. Al igual que el rozamiento o la normal, su origen es la interacción entre cargas eléctricas.<br>
                    <span class='resultado'>Resultado: La fuerza fundamental es la <strong>electromagnética</strong> y sus bosones mediadores son los <strong>fotones</strong>.</span>
                </div>`
        },
        {
            titulo: "Problema 5: El gato y la lámpara",
            enunciado: "Una lámpara de 2 kg está sobre una mesa (\\( \\mu_c = 0,3 \\)) conectada por un cable a un gato de 3 kg que cuelga por el borde. Determina: <br> a) La aceleración del sistema. <br> b) La tensión de la cuerda. <br> c) La velocidad del gato a los 1,5 segundos. <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/pi_5.png' style='max-width: 20%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div>",
            solucion: `
                <div class='paso'>
                    <strong>Paso 1: Identificación de fuerzas y datos:</strong><br>
                    - Masa de la lámpara (sobre la mesa): \\( m_1 = 2 \\text{ kg} \\)<br>
                    - Masa del gato (colgando): \\( m_2 = 3 \\text{ kg} \\)<br>
                    - Coeficiente de rozamiento: \\( \\mu_c = 0,3 \\)<br>
                    - Gravedad: \\( g = 9,8 \\text{ m/s}^2 \\)<br>
                    <br>
                    Calculamos el Peso de la lámpara (\\( P_1 \\)), su Normal (\\( N \\)) y la Fuerza de rozamiento (\\( F_r \\)):<br>
                    \\[ P_1 = m_1 \\cdot g = 2 \\cdot 9,8 = 19,6 \\text{ N} \\]
                    \\[ N = P_1 = 19,6 \\text{ N} \\]
                    \\[ F_r = \\mu_c \\cdot N = 0,3 \\cdot 19,6 = 5,88 \\text{ N} \\]
                    Calculamos el Peso del gato (\\( P_2 \\)):<br>
                    \\[ P_2 = m_2 \\cdot g = 3 \\cdot 9,8 = 29,4 \\text{ N} \\]
                </div>

                

                <div class='paso'>
                    <strong>a) La aceleración con la que se mueven las masas:</strong><br>
                    Aplicamos la segunda ley de Newton al sistema completo. La fuerza que "tira" es el peso del gato (\\( P_2 \\)) y la que "frena" es el rozamiento de la lámpara (\\( F_r \\)):<br>
                    \\[ \\sum F = m_{total} \\cdot a \\]
                    \\[ P_2 - F_r = (m_1 + m_2) \\cdot a \\]
                    Sustituimos los valores:<br>
                    \\[ 29,4 - 5,88 = (2 + 3) \\cdot a \\]
                    \\[ 23,52 = 5 \\cdot a \\implies a = \\frac{23,52}{5} = 4,704 \\text{ m/s}^2 \\]
                    <span class='resultado'>Resultado: La aceleración es de \\( 4,70 \\text{ m/s}^2 \\).</span>
                </div>

                <div class='paso'>
                    <strong>b) La tensión de la cuerda:</strong><br>
                    Para hallar la tensión (\\( T \\)), analizamos una de las dos masas individualmente. Por ejemplo, la masa colgante (el gato):<br>
                    \\[ P_2 - T = m_2 \\cdot a \\]
                    \\[ T = P_2 - (m_2 \\cdot a) \\]
                    \\[ T = 29,4 - (3 \\cdot 4,704) \\]
                    \\[ T = 29,4 - 14,112 = 15,288 \\text{ N} \\]
                    <span class='resultado'>Resultado: La tensión del cable es de \\( 15,29 \\text{ N} \\).</span>
                </div>

                <div class='paso'>
                    <strong>c) La velocidad del gato pasado 1,5 segundos:</strong><br>
                    Suponiendo que el sistema parte del reposo (\\( v_0 = 0 \\)), aplicamos la fórmula del MRUA:<br>
                    \\[ v = v_0 + a \\cdot t \\]
                    \\[ v = 0 + (4,704 \\text{ m/s}^2 \\cdot 1,5 \\text{ s}) \\]
                    \\[ v = 7,056 \\text{ m/s} \\]
                    <span class='resultado'>Resultado: La velocidad tras 1,5 segundos es de \\( 7,06 \\text{ m/s} \\).</span>
                </div>`
        },
        {
            titulo: "Problema 6: Elevación de carga en plano inclinado",
            enunciado: "En construcción se emplea la polea fija para levantar cargas. En la edificación de un bloque de pisos turísticos se emplea un sistema de polea en un plano inclinado como en la figura. Sabiendo que el coeficiente de rozamiento cinético es \\( μ = 0,3 \\), determina: <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/pi_6.png' style='max-width: 40%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> <br> a) Razona por qué es útil una polea fija. <br> b) Indica en qué sentido se mueven las masas. <br> c) Calcula la aceleración del sistema. <br> d) Halla la tensión de la cuerda.",
            solucion: `
                <div class='paso'>
                    <strong>a) Utilidad de la polea fija:</strong><br>
                    La polea fija permite redirigir la fuerza de tensión. En este caso, permite que el peso de la masa colgante ayude a contrarrestar parte del peso de la masa grande en el plano, facilitando el control del movimiento o reduciendo el esfuerzo necesario si se quisiera subir la carga.
                </div>

                <div class='paso'>
                    <strong>b) Sentido del movimiento:</strong><br>
                    Comparamos las fuerzas enfrentadas en el eje del movimiento:<br>
                    - Componente del peso de \\( M \\) hacia abajo del plano: \\( P_{Mx} = M \\cdot g \\cdot \\text{sen}(30^{\\circ}) = 500 \\cdot 9,8 \\cdot 0,5 = 2450 \\text{ N} \\).<br>
                    - Peso de la masa colgante \\( m \\): \\( P_m = m \\cdot g = 100 \\cdot 9,8 = 980 \\text{ N} \\).<br>
                    Como \\( P_{Mx} (2450 \\text{ N}) > P_m (980 \\text{ N}) \\), el sistema se moverá hacia la izquierda:<br>
                    <span class='resultado'>Resultado: La masa \\( M \\) desciende por el plano inclinado y la masa \\( m \\) asciende verticalmente.</span>
                </div>

                <div class='paso'>
                    <strong>c) Cálculo de la aceleración del sistema:</strong><br>
                    Aplicamos la segunda ley de Newton. Al moverse el sistema hacia abajo del plano, el rozamiento (\\( F_r \\)) apunta hacia arriba de la rampa:<br>
                    \\[ \\sum F = (M + m) \\cdot a \\]\n            \\[ P_{Mx} - P_m - F_r = (M + m) \\cdot a \\]\n            Calculamos el rozamiento de la masa \\( M \\):<br>
                    \\[ F_r = \\mu \\cdot M \\cdot g \\cdot \\cos(30^{\\circ}) = 0,3 \\cdot 500 \\cdot 9,8 \\cdot 0,866 = 1273,02 \\text{ N} \\]\n            Sustituimos en la ecuación principal:<br>
                    \\[ 2450 - 980 - 1273,02 = (500 + 100) \\cdot a \\]\n            
                    \\[ 196,98 = 600 \\cdot a \\implies a = \\frac{196,98}{600} \\approx 0,328 \\text{ m/s}^2 \\]\n       
                    <span class='resultado'>Resultado: La aceleración del sistema es de \\( 0,33 \\text{ m/s}^2 \\).</span>
                </div>

                <div class='paso'>
                    <strong>d) Halla la tensión de la cuerda:</strong><br>
                    Analizamos la masa que cuelga (\\( m = 100 \\text{ kg} \\)). Como esta masa está subiendo:<br>
                    \\[ T - P_m = m \\cdot a \\]\n
                    \\[ T = P_m + (m \\cdot a) \\]\n      
                    \\[ T = 980 + (100 \\cdot 0,328) = 980 + 32,8 = 1012,8 \\text{ N} \\]\n            
                    <span class='resultado'>Resultado: La tensión de la cuerda es de \\( 1012,8 \\text{ N} \\).</span>
                </div>
        `
        },
        {
            titulo: "Problema 7: Muñeco lanzado",
            enunciado: "Una niña tira un muñeco de 1 kg hacia arriba a lo largo de una carretera inclinada 37º con una velocidad inicial de 9,8 m/s. Se observa que recorre una distancia de 6 m y después desliza hacia abajo hasta el punto de partida. Calcula: <br> a) El coeficiente de rozamiento. <br> b) La fuerza de rozamiento que actúa sobre el muñeco. <br> c) La velocidad con la que vuelve a su posición inicial el muñeco.",
            solucion: `
                <div class='paso'>
                    <strong>Paso 1: Análisis del ascenso para hallar la aceleración:</strong><br>
                    Sabemos que el muñeco recorre 6 m hasta detenerse (\\( v_f = 0 \\)). Usamos cinemática para hallar la aceleración de frenado (\\( a_a \\)):<br>
                    \\[ v_f^2 = v_0^2 + 2 \\cdot a_a \\cdot \\Delta x \\]
                    \\[ 0 = (9,8)^2 + 2 \\cdot a_a \\cdot 6 \\implies 0 = 96,04 + 12 \\cdot a_a \\]
                    \\[ a_a = -\\frac{96,04}{12} = -8,003 \\text{ m/s}^2 \\]
                </div>

                <div class='paso'>
                    <strong>a) El coeficiente de rozamiento (\\( \\mu \\)):</strong><br>
                    Durante el ascenso, tanto el peso tangencial como el rozamiento frenan al muñeco:<br>
                    \\[ \\sum F_x = m \\cdot a_a \\implies -m \\cdot g \\cdot \\text{sen}(37^{\\circ}) - \\mu \\cdot m \\cdot g \\cdot \\cos(37^{\\circ}) = m \\cdot a_a \\]<br>
                    Simplificamos la masa y despejamos \\( \\mu \\):<br>
                    \\[ -9,8 \\cdot 0,6018 - \\mu \\cdot 9,8 \\cdot 0,7986 = -8,003 \\]
                    \\[ -5,898 - 7,826 \\cdot \\mu = -8,003 \\]
                    \\[ 7,826 \\cdot \\mu = 2,105 \\implies \\mu = \\frac{2,105}{7,826} \\approx 0,269 \\]
                    <span class='resultado'>Resultado: El coeficiente de rozamiento es \\( \\mu \\approx 0,27 \\).</span>
                </div>

                <div class='paso'>
                    <strong>b) La fuerza de rozamiento (\\( F_r \\)):</strong><br>
                    La fuerza de rozamiento depende de la normal (\\( N = m \\cdot g \\cdot \\cos(37^{\\circ}) \\)):<br>
                    \\[ F_r = \\mu \\cdot m \\cdot g \\cdot \\cos(37^{\\circ}) \\]
                    \\[ F_r = 0,269 \\cdot 1 \\text{ kg} \\cdot 9,8 \\text{ m/s}^2 \\cdot 0,7986 \\]
                    <span class='resultado'>Resultado: \\( F_r \\approx 2,10 \\text{ N} \\).</span>
                </div>

                <div class='paso'>
                    <strong>c) Velocidad con la que vuelve a la posición inicial:</strong><br>
                    Ahora el muñeco baja. El peso tangencial tira de él, pero el rozamiento ahora apunta hacia arriba (oponiéndose a la bajada). Calculamos la nueva aceleración (\\( a_d \\)):<br>
                    \\[ m \\cdot a_d = m \\cdot g \\cdot \\text{sen}(37^{\\circ}) - F_r \\]
                    \\[ 1 \\cdot a_d = (1 \\cdot 9,8 \\cdot 0,6018) - 2,10 \\]
                    \\[ a_d = 5,898 - 2,10 = 3,798 \\text{ m/s}^2 \\]
                    Ahora calculamos la velocidad final tras recorrer los 6 m de bajada partiendo del reposo:<br>
                    \\[ v_f^2 = 0 + 2 \\cdot 3,798 \\cdot 6 = 45,576 \\]
                    \\[ v_f = \\sqrt{45,576} \\approx 6,75 \\text{ m/s} \\]
                    <span class='resultado'>Resultado: Vuelve con una velocidad de \\( 6,75 \\text{ m/s} \\).</span>
                </div>
        `
        },
        {
            titulo: "Problema 8: Chiquillo trineo",
            enunciado: "Un chiquillo se deja caer colina abajo con su trineo por la ladera de una montaña nevada que presenta una inclinación de 25º. Cuando desciende la montaña (el plano inclinado), ha recorrido 150 metros. Entonces atraviesa una capa de hielo horizontal antes de comenzar a subir una montaña nevada de 10º de inclinación. Sabiendo que existe coeficiente de rozamiento con la nieve (presente en ambos planos inclinados) y que este coeficiente es nulo con el hielo (plano horizontal), determina: <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/pi_8.png' style='max-width: 40%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> <br> a) El coeficiente de rozamiento con la nieve, sabiendo que llega a la capa de hielo con una velocidad de 20 m/s. <br> b) La velocidad con la que comienza a subir la segunda montaña de 10º de inclinación. <br> c) La distancia que recorre en la segunda montaña hasta frenarse.",
            solucion: `
                <div class='paso'>
                    <strong>a) Cálculo del coeficiente de rozamiento (\\( \\mu \\)):</strong><br>
                    Primero, necesitamos la aceleración de descenso (\\( a_1 \\)). Usamos los datos cinemáticos del primer tramo: parte del reposo (\\( v_0 = 0 \\)), alcanza \\( v_f = 20 \\text{ m/s} \\) y recorre \\( \\Delta x = 150 \\text{ m} \\).<br>
                    \\[ v_f^2 = v_0^2 + 2 \\cdot a_1 \\cdot \\Delta x \\implies 20^2 = 0 + 2 \\cdot a_1 \\cdot 150 \\]
                    \\[ 400 = 300 \\cdot a_1 \\implies a_1 = \\frac{400}{300} = 1,333 \\text{ m/s}^2 \\]
                    Aplicamos la segunda ley de Newton para el descenso (donde el peso tira y el rozamiento frena):<br>
                    \\[ m \\cdot g \\cdot \\text{sen}(25^{\\circ}) - \\mu \\cdot m \\cdot g \\cdot \\cos(25^{\\circ}) = m \\cdot a_1 \\]
                    Simplificamos la masa (\\( m \\)) y despejamos \\( \\mu \\):<br>
                    \\[ 9,8 \\cdot \\text{sen}(25^{\\circ}) - \\mu \\cdot 9,8 \\cdot \\cos(25^{\\circ}) = 1,333 \\]
                    \\[ 4,141 - 8,882 \\cdot \\mu = 1,333 \\implies 8,882 \\cdot\\mu = 2,808 \\implies  \\mu = \\frac {2,808}{8,882} \\approx 0,316 \\]
                    <span class='resultado'>Resultado: El coeficiente de rozamiento es \\( \\mu \\approx 0,316 \\).</span>
                </div>

                <div class='paso'>
                    <strong>b) Velocidad al comenzar el ascenso:</strong><br>
                    En el tramo horizontal de hielo, el enunciado indica que el rozamiento es nulo (\\( \\mu = 0 \\)). Al no haber fuerzas horizontales actuando sobre el trineo:<br>
                    \\[ \\sum F_x = 0 \\implies a = 0 \\implies v = \\text{constante} \\]
                    <span class='resultado'>Resultado: El trineo mantiene su velocidad, por lo que entra en la segunda montaña a \\( 20 \\text{ m/s} \\).</span>
                </div>

                <div class='paso'>
                    <strong>c) Distancia recorrida en la segunda montaña (10°):</strong><br>
                    En el ascenso, tanto la componente del peso como el rozamiento actúan en contra del movimiento. Calculamos la nueva aceleración de frenado (\\( a_2 \\)):<br>
                    \\[ a_2 = -g \\cdot (\\text{sen}(10^{\\circ}) + \\mu \\cdot \\cos(10^{\\circ})) \\]
                    \\[ a_2 = -9,8 \\cdot (0,1736 + 0,316 \\cdot 0,9848) = -9,8 \\cdot (0,1736 + 0,3112) \\]
                    \\[ a_2 = -9,8 \\cdot 0,4848 = -4,751 \\text{ m/s}^2 \\]
                    Finalmente, calculamos la distancia \\( \\Delta x_2 \\) hasta que se detiene (\\( v_f = 0 \\)):<br>
                    \\[ v_f^2 = v_0^2 + 2 \\cdot a_2 \\cdot \\Delta x_2 \\implies 0 = 20^2 + 2 \\cdot (-4,751) \\cdot \\Delta x_2 \\]
                    \\[ 400 = 9,502 \\cdot \\Delta x_2 \\implies \\Delta x_2 = \\frac{400}{9,502} \\approx 42,09 \\text{ m} \\]
                    <span class='resultado'>Resultado: El trineo recorre \\( 42,09 \\text{ metros} \\) por la segunda ladera antes de pararse.</span>
                </div>
            `
        },
        {
            titulo: "Problema 9: Polea 30° y 45°",
            enunciado: "Dado el siguiente sistema de cargas conectadas por una polea de cuerda inextensible, determina la aceleración del sistema y la tensión de la cuerda cuando: <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/pi_9.png' style='max-width: 40%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> <br>  a) No hay rozamiento. <br> b) El rozamiento cinético es \\( μ_c = 0,05 \\).",
            solucion: `
                <div class='paso'>
                    <strong>Paso 1: Análisis de las fuerzas tangenciales (pesos en X):</strong><br>
                    Calculamos la componente del peso que tira hacia cada lado:<br>
                    - Lado izquierdo (\\( m_1 \\)): \\( P_{1x} = m_1 \\cdot g \\cdot \\text{sen}(30^{\\circ}) = 100 \\cdot 9,8 \\cdot 0,5 = 490 \\text{ N} \\).<br>
                    - Lado derecho (\\( m_2 \\)): \\( P_{2x} = m_2 \\cdot g \\cdot \\text{sen}(45^{\\circ}) = 50 \\cdot 9,8 \\cdot 0,707 = 346,43 \\text{ N} \\).<br>
                    Como \\( P_{1x} > P_{2x} \\), el sistema tiende a moverse hacia la <strong>izquierda</strong>.
                </div>

                <div class='paso'>
                    <strong>a) Caso sin rozamiento (\\( \\mu = 0 \\)):</strong><br>
                    <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/pi_9a.png' style='max-width: 40%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> <br>
                    Aplicamos la segunda ley de Newton al sistema (Fuerza a favor - Fuerza en contra):<br>
                    \\[ P_{1x} - P_{2x} = (m_1 + m_2) \\cdot a \\]\n            
                    \\[ 490 - 346,43 = (100 + 50) \\cdot a \\]\n            
                    \\[ 143,57 = 150 \\cdot a \\implies a = \\frac{143,57}{150} \\approx 0,957 \\text{ m/s}^2 \\]\n            
                    Para la tensión, analizamos \\( m_2 \\) (que está subiendo por su plano):<br>
                    \\[ T - P_{2x} = m_2 \\cdot a \\implies T = 346,43 + (50 \\cdot 0,957) \\]\n            
                    <span class='resultado'>Resultado: \\( a = 0,96 \\text{ m/s}^2 \\) y \\( T = 394,28 \\text{ N} \\).</span>
                </div>

                <div class='paso'>
                    <strong>b) Caso con rozamiento (\\( \\mu_c = 0,05 \\)):</strong><br>
                    <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/pi_9b.png' style='max-width: 40%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> <br>
                    El rozamiento en ambos planos se opone al movimiento (apunta hacia la derecha):<br>
                    - \\( F_{r1} = \\mu_c \\cdot m_1 \\cdot g \\cdot \\cos(30^{\\circ}) = 0,05 \\cdot 100 \\cdot 9,8 \\cdot 0,866 = 42,43 \\text{ N} \\).<br>
                    - \\( F_{r2} = \\mu_c \\cdot m_2 \\cdot g \\cdot \\cos(45^{\\circ}) = 0,05 \\cdot 50 \\cdot 9,8 \\cdot 0,707 = 17,32 \\text{ N} \\).<br>
                    Nueva ecuación de movimiento:<br>
                    \\[ P_{1x} - P_{2x} - F_{r1} - F_{r2} = (m_1 + m_2) \\cdot a \\]\n            
                    \\[ 490 - 346,43 - 42,43 - 17,32 = 150 \\cdot a \\]\n            
                    \\[ 83,82 = 150 \\cdot a \\implies a = \\frac{83,82}{150} \\approx 0,559 \\text{ m/s}^2 \\]\n            
                    Calculamos la nueva tensión analizando de nuevo \\( m_2 \\):<br>
                    \\[ T - P_{2x} - F_{r2} = m_2 \\cdot a \\]\n            
                    \\[ T = 346,43 + 17,32 + (50 \\cdot 0,559) \\]\n            
                    <span class='resultado'>Resultado: \\( a = 0,56 \\text{ m/s}^2 \\) y \\( T = 391,70 \\text{ N} \\).</span>
                </div>
        `
        }    
    ],
    "equilibrio": [
        {
            titulo: "Problema 1: Apertura de puerta",
            enunciado: "Para abrir una puerta, tenemos que hacer una fuerza de 2 N a 40 cm de las bisagras. Calcula: <br> a) El momento de esta fuerza. <br> b) Averigua si aplicando una fuerza de 3 N a una distancia de 20 cm se abrirá o no la puerta.",
            solucion: `
                <div class='paso'>
                    <strong>Paso 1: Análisis físico y conversión de unidades:</strong><br>
                    El momento de una fuerza (o torque) es la magnitud que mide la capacidad de una fuerza para producir una rotación. Para trabajar en el Sistema Internacional (S.I.), primero convertimos las distancias de centímetros a metros:<br>
                    - Caso A: \\( F_1 = 2 \\text{ N} \\) y \\( d_1 = 40 \\text{ cm} = 0,4 \\text{ m} \\).<br>
                    - Caso B: \\( F_2 = 3 \\text{ N} \\) y \\( d_2 = 20 \\text{ cm} = 0,2 \\text{ m} \\).<br>
                    La fórmula fundamental es: \\( M = F \\cdot d \\).
                </div>

                <div class='paso'>
                    <strong>a) Cálculo del momento inicial</strong><br>
                    Calculamos el momento aplicado originalmente, que representa el esfuerzo de rotación necesario para abrir la puerta:<br>
                    \\[ M_1 = F_1 \\cdot d_1 = 2 \\text{ N} \\cdot 0,4 \\text{ m} = 0,8 \\text{ N} \\cdot \\text{m} \\]<br>
                    <span class='resultado'>Resultado: El momento de la fuerza es de \\( 0,8 \\text{ N} \\cdot \\text{m} \\).</span>
                </div>

                <div class='paso'>
                    <strong>b) Evaluación de la nueva fuerza </strong><br>
                    Calculamos el momento que se generaría en la segunda situación propuesta:<br>
                    \\[ M_2 = F_2 \\cdot d_2 = 3 \\text{ N} \\cdot 0,2 \\text{ m} = 0,6 \\text{ N} \\cdot \\text{m} \\]<br>
                    Para que la puerta se abra, el momento aplicado debe ser igual o mayor al momento inicial requerido (\\( M_1 \\)). Comparando ambos valores:<br>
                    \\[ 0,6 \\text{ N} \\cdot \\text{m} < 0,8 \\text{ N} \\cdot \\text{m} \\implies M_2 < M_1 \\]<br>
                    <span class='resultado'>Resultado: Debido a que el momento generado es menor, la puerta NO se abrirá.</span>
                </div>
                `
        },
        {
        titulo: "Problema 2: Par de fuerzas en un volante",
        enunciado: "Sobre la circunferencia de un volante de 30 cm de radio se aplican dos fuerzas paralelas iguales de 10 N en sentidos contrarios. Calcula: <br> a) ¿Cuánto vale la fuerza resultante? <br> b) ¿Cuánto vale el momento del par de fuerzas? <br> c) ¿Está el volante en equilibrio?",
        solucion: `
            <div class='paso'>
                <strong>Paso 1: Análisis de datos y conversión al S.I.:</strong><br>
                Identificamos los elementos del sistema. Al ser fuerzas paralelas, iguales y de sentido contrario, forman un par de fuerzas:<br>
                - Fuerzas: \\( F_1 = F_2 = 10 \\text{ N} \\)<br>
                - Radio del volante: \\( R = 30 \\text{ cm} = 0,3 \\text{ m} \\)<br>
                - Brazo del par (distancia entre fuerzas): \\( d = 2 \\cdot R = 0,6 \\text{ m} \\) (ya que las fuerzas se aplican en extremos opuestos de la circunferencia).
            </div>

            <div class='paso'>
                <strong>a) ¿Cuánto vale la fuerza resultante?</strong><br>
                La fuerza resultante (\\( F_R \\)) es la suma vectorial de las fuerzas. Al ser paralelas, de igual magnitud pero sentidos opuestos:<br>
                \\[ F_R = F_1 - F_2 = 10 \\text{ N} - 10 \\text{ N} = 0 \\text{ N} \\]<br>
                <span class='resultado'>Resultado: La fuerza resultante es \\( 0 \\text{ N} \\). Esto significa que el volante no se desplazará linealmente.</span>
            </div>

            <div class='paso'>
                <strong>b) ¿Cuánto vale el momento del par de fuerzas?</strong><br>
                El momento de un par de fuerzas (\\( M \\)) se calcula multiplicando una de las fuerzas por la distancia (brazo) que las separa:<br>
                \\[ M = F \\cdot d \\]<br>
                \\[ M = 10 \\text{ N} \\cdot 0,6 \\text{ m} = 6 \\text{ N} \\cdot \\text{m} \\]<br>
                <span class='resultado'>Resultado: El momento del par es \\( 6 \\text{ N} \\cdot \\text{m} \\).</span>
            </div>

            <div class='paso'>
                <strong>c) ¿Está el volante en equilibrio?</strong><br>
                Para que un cuerpo esté en equilibrio total, deben cumplirse dos condiciones:<br>
                1. Equilibrio de traslación: \\( \\sum F = 0 \\) (Se cumple).<br>
                2. Equilibrio de rotación: \\( \\sum M = 0 \\) (No se cumple, ya que existe un momento de \\( 6 \\text{ N} \\cdot \\text{m} \\)).<br>
                <span class='resultado'>Resultado: El volante NO está en equilibrio. Aunque no se desplace, el par de fuerzas provocará que el volante comience a rotar.</span>
            </div>`
        },
        {
            titulo: "Problema 3: Reparto de carga en una barra",
            enunciado: "Dos hombres transportan un peso de 2000 N en una barra de 6 metros de longitud (que se considera sin masa) cuyos extremos se apoyan en sus hombros. Si uno solo puede con 900 N, ¿en qué punto debe colocarse el peso?",
            solucion: `
                <div class='paso'>
                    <strong>Paso 1: Análisis de las fuerzas y distancias:</strong><br>
                    Llamaremos \\( H_1 \\) al hombre que carga menos y \\( H_2 \\) al que carga el resto. <br>
                    - Longitud total de la barra: \\( L = 6 \\text{ m} \\).<br>
                    - Fuerza del primer hombre (extremo izquierdo): \\( F_1 = 900 \\text{ N} \\).<br>
                    - Peso total a transportar: \\( P = 2000 \\text{ N} \\).<br>
                    - Fuerza del segundo hombre (extremo derecho): \\( F_2 = P - F_1 = 2000 \\text{ N} - 900 \\text{ N} = 1100 \\text{ N} \\).<br>
                    Llamaremos \\( x \\) a la distancia desde el hombre 1 (900 N) hasta el punto donde se cuelga el peso.
                </div>

                <div class='paso'>
                    <strong>Paso 2: Aplicación de la condición de equilibrio de rotación:</strong><br>
                    Para que la barra esté en equilibrio, elegimos el extremo del primer hombre como punto de giro. La suma de momentos respecto a ese punto debe ser cero:<br>
                    \\[ \\sum M = 0 \\]<br>
                    El peso \\( P \\) genera un giro en un sentido y la fuerza del segundo hombre \\( F_2 \\) en sentido contrario a la distancia total de la barra:<br>
                    \\[ P \\cdot x = F_2 \\cdot L \\]<br>
                    Sustituimos los valores conocidos:<br>
                    \\[ 2000 \\text{ N} \\cdot x = 1100 \\text{ N} \\cdot 6 \\text{ m} \\]
                </div>

                <div class='paso'>
                    <strong>Paso 3: Resolución de la incógnita:</strong><br>
                    Despejamos la distancia \\( x \\):<br>
                    \\[ x = \\frac{1100 \\cdot 6}{2000} \\]<br>
                    \\[ x = \\frac{6600}{2000} = 3,3 \\text{ m} \\]<br>
                    <span class='resultado'>Resultado: El peso debe colocarse a <strong>3,3 metros</strong> del hombre que soporta 900 N (o a 2,7 metros del hombre que soporta 1100 N).</span>
                </div>`
        },
        {
            titulo: "Problema 4: Equilibrio de palancas",
            enunciado: "Calcula el valor de la fuerza A o la distancia d en cada uno de los tres sistemas mostrados para que se mantenga el equilibrio (suponiendo barra sin peso). <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/eq_4.png' style='max-width: 90%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div>",
            solucion: `
                <div class='paso'>
                    <strong>Caso 1: Equilibrio con brazos iguales</strong><br>
                    <strong>Ecuación aplicada:</strong> \\( F_1 \\cdot d_1 = F_2 \\cdot d_2 \\)<br>
                    En este primer caso, observamos que el punto de apoyo está centrado respecto a las fuerzas, lo que significa que las distancias (brazos) son idénticas (\\( d_1 = d_2 = d \\)).<br>
                    Sustituyendo los valores:<br>
                    \\[ 5 \\text{ N} \\cdot d = A \\cdot d \\]<br>
                    Para que la igualdad se mantenga, si las distancias son iguales, las fuerzas también deben serlo. Al simplificar \\( d \\) en ambos lados:<br>
                    <span class='resultado'>Resultado: \\( A = 5 \\text{ N} \\)</span>
                </div>

                <div class='paso'>
                    <strong>Caso 2: Equilibrio con fuerzas distintas</strong><br>
                    <strong>Ecuación aplicada:</strong> \\( F_{izq} \\cdot d_{izq} = F_{der} \\cdot d_{der} \\)<br>
                    Aquí debemos hallar la distancia necesaria para que una fuerza mayor (15 N) equilibre a una menor (7,5 N).<br>
                    \\[ 7,5 \\text{ N} \\cdot 20 \\text{ cm} = 15 \\text{ N} \\cdot d \\]<br>
                    Despejamos la distancia \\( d \\):<br>
                    \\[ 150 \\text{ N} \\cdot \\text{cm} = 15 \\text{ N} \\cdot d \\implies d = \\frac{150}{15} \\]<br>
                    <span class='resultado'>Resultado: \\( d = 10 \\text{ cm} \\)</span>
                </div>

                <div class='paso'>
                    <strong>Caso 3: Equilibrio de múltiples momentos (Sumatorio)</strong><br>
                    <strong>Ecuación aplicada:</strong> \\(\\\ \\sum M_{izq} = \\sum M_{der} \\)<br>
                    Cuando hay varias fuerzas, la suma de los momentos que intentan girar la barra hacia la izquierda debe ser igual a la suma de los que intentan girarla hacia la derecha. <br>
                    *Importante:* Las distancias se miden siempre desde el punto de apoyo (triángulo amarillo).<br>
                    - Momento 1 (Izquierda): \\( A \\cdot (20 + 15) \\text{ cm} = A \\cdot 35 \\text{ cm} \\)<br>
                    - Momento 2 (Izquierda): \\( 4 \\text{ N} \\cdot 15 \\text{ cm} \\)<br>
                    - Momento 3 (Derecha): \\( 50 \\text{ N} \\cdot 10 \\text{ cm} \\)<br>
                    Planteamos la ecuación completa:<br>
                    \\[ (A \\cdot 35) + (4 \\cdot 15) = 50 \\cdot 10 \\]<br>
                    \\[ 35A + 60 = 500 \\implies 35 \\cdot  A = 440 \\]<br>
                    \\[ A = \\frac{440}{35} \\approx 12,571 \\text{ N} \\]<br>
                    <span class='resultado'>Resultado: \\( A \\approx 12,57 \\text{ N} \\)</span>
                </div>`
        },
        {
            titulo: "Problema 5: Equilibrio de esferas cargadas",
            enunciado: "Dos pequeñas esferas de masa \\( m = 1 \\text{ g} \\), y de cargas eléctricas opuestas, cuelgan de hilos de igual longitud. Debido a la atracción electrostática de \\( 5,67 \\cdot 10^{-3} \\text{ N} \\), forman un ángulo \\( \\alpha \\) con la vertical. Calcula la tensión del hilo y el valor del ángulo \\( \\alpha \\). <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/eq_5.png' style='max-width: 90%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> <br> ",
            solucion: `
                <div class='paso'>
                    <strong>Paso 1: Identificación de fuerzas y conversión al S.I.:</strong><br>
                    Sobre cada esfera actúan tres fuerzas: el peso (vertical hacia abajo), la tensión del hilo (en la dirección del hilo) y la fuerza electrostática (horizontal hacia la otra esfera).<br>
                    - Masa: \\( m = 1 \\text{ g} = 1 \\cdot 10^{-3} \\text{ kg} \\)<br>
                    - Fuerza electrostática: \\( F_e = 5,67 \\cdot 10^{-3} \\text{ N} \\)<br>
                    - Gravedad: \\( g = 9,8 \\text{ m/s}^2 \\)<br>
                    - Peso: \\( P = m \\cdot g = 1 \\cdot 10^{-3} \\text{ kg} \\cdot 9,8 \\text{ m/s}^2 = 9,8 \\cdot 10^{-3} \\text{ N} \\)
                </div>

                <div class='paso'>
                    <strong>Paso 2: Ecuaciones de equilibrio:</strong><br>
                    Descomponemos la tensión (\\( T \\)) en sus componentes horizontal (\\( T_x \\)) y vertical (\\( T_y \\)):<br>
                    - Eje horizontal (X): \\( T \\cdot \\text{sen}(\\alpha) = F_e \\)<br>
                    - Eje vertical (Y): \\( T \\cdot \\cos(\\alpha) = P \\)<br>
                    Dividiendo la primera ecuación entre la segunda, obtenemos la relación para el ángulo:<br>
                    \\[ \\tan(\\alpha) = \\frac{F_e}{P} \\]
                </div>

                <div class='paso'>
                    <strong>Paso 3: Cálculo del ángulo \\( \\alpha \\):</strong><br>
                    Sustituimos los valores de la fuerza y el peso:<br>
                    \\[ \\tan(\\alpha) = \\frac{5,67 \\cdot 10^{-3}}{9,8 \\cdot 10^{-3}} = 0,5785 \\]<br>
                    Aplicando la función arcotangente (\\( \\tan^{-1} \\)):<br>
                    \\[ \\alpha = \\text{arctan}(0,5785) \\approx 30^{\\circ} \\]<br>
                    <span class='resultado'>Resultado del ángulo: \\( \\alpha \\approx 30^{\\circ} \\)</span>
                </div>

                <div class='paso'>
                    <strong>Paso 4: Cálculo de la tensión del hilo:</strong><br>
                    Usamos la componente vertical para despejar \\( T \\):<br>
                    \\[ T = \\frac{P}{\\cos(\\alpha)} = \\frac{9,8 \\cdot 10^{-3}}{\\cos(30^{\\circ})} \\]<br>
                    \\[ T = \\frac{9,8 \\cdot 10^{-3}}{0,866} \\approx 11,31 \\cdot 10^{-3} \\text{ N} \\]<br>
                    <span class='resultado'>Resultado de la tensión: \\( T \\approx 1,13 \\cdot 10^{-2} \\text{ N} \\)</span>
                </div>`
        }
    ],
    "momento": [
        {
            titulo: "Problema 1: Pelota de tenis",
            enunciado: "Una pelota de tenis de 50 g llega a un jugador con una velocidad de 20 m/s. Después de ser golpeada con una fuerza de 200 N sale despedida con una velocidad doble en sentido opuesto. ¿Cuánto tiempo ha estado en contacto la pelota con la raqueta?",
            // solucion: `
            //     <div class='paso'>
            //         \\( F \\cdot \\Delta t = m(v_f - v_0) \\implies 200 \\cdot \\Delta t = 0,05(40 - (-20)) \\)<br>
            //         <span class='resultado'>t = 0,015 s</span>
            //     </div>
            // `
        },
        {
            titulo: "Problema 2: Tenista servicio",
            enunciado: "Algunos tenistas logran en sus servicios comunicar a la pelota velocidades de 200 km/h. Si la masa de la pelota es de 100 g y el impacto dura 0,15 s, ¿qué fuerza media ha actuado sobre la pelota?",
            // solucion: `
            //     <div class='paso'>
            //         \\( F \\cdot 0,15 = 0,100 \\cdot 55,5 \\implies F = 5,55 / 0,15 \\)<br>
            //         <span class='resultado'>F = 37,0 N</span>
            //     </div>
            // `
        },
        {
            titulo: "Problema 3: Pelota frontón",
            enunciado: "Una pelota de 160 g llega a la pared de un frontón con una velocidad de 50 m/s. Si permanece en contacto con la pared durante 0,2 s y sale rebotada en la misma dirección con igual velocidad, calcula: <br> a) El impulso de la pared sobre la pelota. <br> b) La fuerza media que opone la pared.",
            // solucion: `
            //     <div class='paso'>
            //         \\( I = m(v_f - v_0) = 0,16(50 - (-50)) = 16 \\text{ N·s} \\)<br>
            //         \\( F = I / t = 16 / 0,2 \\)<br>
            //         <span class='resultado'>F = 80 N</span>
            //     </div>
            // `
        },
        {
            titulo: "Problema 4: Futbolista",
            enunciado: "Un futbolista golpea un balón con una fuerza media de 400 N. El esférico sale lanzado formando un ángulo de 45º con la horizontal y vuelva a tocar tierra a una distancia de 35 m. ¿Cuánto tiempo ha durado el impacto entre el pie y el balón? <br> Dato: masa del balón = 250 g",
            // solucion: `
            //     <div class='paso'>
            //         Primero calculamos velocidad de salida por cinemática oblicua: \\( X_{max} = v^2 \\sin(2\\alpha)/g \\implies 35 = v^2 \\sin(90^\\circ)/9,8 \\implies v = 18,52 \\text{ m/s} \\)<br>
            //         \\( 400 \\cdot t = 0,250 \\cdot 18,52 \\)<br>
            //         <span class='resultado'>t = 0,011 s</span>
            //     </div>
            // `
        },
        {
            titulo: "Problema 5: Choque inelástico",
            enunciado: "Sobre un cuerpo en reposo de 25 kg de masa actúa, en un caso, una fuerza de 10 N durante 10 s, y en otro, una fuerza de 50 N durante 2 s. Calcula: <br> a) ¿En cuál de las dos situaciones se le comunica al cuerpo mayor velocidad? <br> b) ¿Cuánto valdrá dicha velocidad?",
            // solucion: `
            //     <div class='paso'>
            //         \\( m_1 v_1 + m_2 v_2 = (m_1+m_2)V_f \\implies 50(3) + 70(-2) = 120 V_f \\)<br>
            //         \\( 150 - 140 = 120 V_f \\)<br>
            //         <span class='resultado'>V = 0,083 m/s</span>
            //     </div>
            // `
        },
        {
            titulo: "Problema 6: Cambio en cuerpo",
            enunciado: "A un cuerpo de 10 kg de masa que se mueve con una velocidad de 1 m/s, se le impulsa en el sentido del movimiento con una fuerza de 5 N durante 2s. Determina la nueva velocidad del cuerpo.",
            // solucion: `
            //     <div class='paso'>
            //         \\( M(5) = (M/2)(2) + (M/2)v_2 \\implies 5 = 1 + 0,5 v_2 \\implies 4 = 0,5 v_2 \\)<br>
            //         <span class='resultado'>v2 = 8 m/s</span>
            //     </div>
            // `
        }
    ],
    "conservacion": [
        {
            titulo: "Problema 1: Bala en saco de arena",
            enunciado: "Una bala de 17 g de masa se lanza contra un saco de arena de 1500 g, quedándose incrustada en él. El conjunto bala-saco se mueve, tras el impacto, con una velocidad de 0,64 m/s. Determinar la velocidad de la bala antes del impacto, considerando despreciables los rozamientos.",
            // solucion: `
            //     <div class='paso'>
            //         \\( F \\cdot \\Delta t = m(v_f - v_0) \\implies 200 \\cdot \\Delta t = 0,05(40 - (-20)) \\)<br>
            //         <span class='resultado'>t = 0,015 s</span>
            //     </div>
            // `
        },
                {
            titulo: "Problema 2: Pez come",
            enunciado: "Un pez de 6 kg lleva una velocidad horizontal de 0,4 m/s cuando se traga otro pez de 250 g, que venía en la misma dirección y sentido contrario a una velocidad de 1,6 m/s. ¿Qué velocidad tendrá el pez después de haber comido?",
            // solucion: `
            //     <div class='paso'>
            //         \\( F \\cdot \\Delta t = m(v_f - v_0) \\implies 200 \\cdot \\Delta t = 0,05(40 - (-20)) \\)<br>
            //         <span class='resultado'>t = 0,015 s</span>
            //     </div>
            // `
        },
        {
            titulo: "Problema 3: Proyectil de cañon",
            enunciado: "Un vagón militar provisto de un cañón tiene una masa de 4000 kg y viaja a 72 km/h por una vía recta en terreno llano. En cierto momento, el cañón dispara un proyectil de 20 kg en la misma dirección y sentido de la marcha con una rapidez de 320 m/s respecto del suelo. Determinar la velocidad del vagón tras el disparo.",
            // solucion: `
            //     <div class='paso'>
            //         \\( F \\cdot \\Delta t = m(v_f - v_0) \\implies 200 \\cdot \\Delta t = 0,05(40 - (-20)) \\)<br>
            //         <span class='resultado'>t = 0,015 s</span>
            //     </div>
            // `
        },
        {
            titulo: "Problema 4: Colisión de carritos",
            enunciado: "Se desea medir la relación entre las masas de 2 carritos, A y B, que colisionan. Para ello, lanzamos el carrito A con una rapidez de 0,7 m/s contra el B, que está en reposo. Tras el impacto, A rebota con una rapidez de 0,3 m/s, mientras que B sale despedido a 0,5 m/s. ¿Cuál de las 2 masas es mayor y en qué proporción?",
            // solucion: `
            //     <div class='paso'>
            //         \\( F \\cdot \\Delta t = m(v_f - v_0) \\implies 200 \\cdot \\Delta t = 0,05(40 - (-20)) \\)<br>
            //         <span class='resultado'>t = 0,015 s</span>
            //     </div>
            // `
        },
        {
            titulo: "Problema 5: Patinadores unidos",
            enunciado: "Una patinadora de 50 kg que se mueve a 3 m/s se abraza a un patinador de 70 kg que se movía en sentido contrario a 2 m/s. Determinar la velocidad con que se mueven ambos después de unirse.",
            // solucion: `
            //     <div class='paso'>
            //         \\( F \\cdot \\Delta t = m(v_f - v_0) \\implies 200 \\cdot \\Delta t = 0,05(40 - (-20)) \\)<br>
            //         <span class='resultado'>t = 0,015 s</span>
            //     </div>
            // `
        },
        {
            titulo: "Problema 6: Cuerpo roto",
            enunciado: "Un cuerpo se mueve con una velocidad de 5 m/s. Si de golpe se rompe en 2 partes iguales, de manera que una de ellas se mueve con una velocidad de 2 m/s en la misma dirección y sentido que el cuerpo original, ¿cuál será la velocidad (módulo, dirección y sentido) de la otra parte?",
            // solucion: `
            //     <div class='paso'>
            //         \\( F \\cdot \\Delta t = m(v_f - v_0) \\implies 200 \\cdot \\Delta t = 0,05(40 - (-20)) \\)<br>
            //         <span class='resultado'>t = 0,015 s</span>
            //     </div>
            // `
        },
        {
            titulo: "Problema 7: Desintegración de partícula",
            enunciado: "Una partícula de 4 g de masa estalla desintegrándose en tres trozos de 2, 1 y 1 g respectivamente que salen despedidos en las direcciones indicadas en la figura. Determinar las velocidades de las dos masas de 1 g. <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/mom_7.png' style='max-width: 40%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div>",
            // solucion: `
            //     <div class='paso'>
            //         \\( F \\cdot \\Delta t = m(v_f - v_0) \\implies 200 \\cdot \\Delta t = 0,05(40 - (-20)) \\)<br>
            //         <span class='resultado'>t = 0,015 s</span>
            //     </div>
            // `
        }
    ]
};
