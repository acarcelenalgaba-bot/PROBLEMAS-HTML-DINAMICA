const baseDatosProblemas = {
    "gravedad": [
        {
            titulo: "Problema 1: El peso y la estación MIR",
            enunciado: "La Tierra es un planeta cuya masa es de \\(\\ce{5,95 \\cdot 10^{24}} \\) kg y su radio medio 6371 km. Calcula el peso que tendría un hombre de masa 80 kg en los siguientes lugares de la Tierra: <br> a) Superficie terrestre a nivel del mar. <br> b) Subido a la cima del monte Everest, cuya altura es de 8848 m. <br> c) En la estación espacial internacional (MIR) cuando nos encontramos a la altura de 200 km. <br> d) Sabiendo que la masa del MIR son 129,7 toneladas, halla la velocidad orbital del MIR. <br> e) Desde el MIR observamos un cuerpo no identificado que se mueve con velocidad constante en el espacio. ¿Es necesario que exista una fuerza para que se mantenga este movimiento? Justifícalo.",
            solucion: `
                <div class='paso'>
                    <strong>a) En la superficie:</strong><br>
                    Aplicamos la Ley de Gravitación Universal de Newton:  &nbsp \\( P = G \\dfrac{M_T \\cdot m}{R_T^2} \\)<br>
                    \\[ P = 6,67 \\cdot 10^{-11} \\frac{5,95 \\cdot 10^{24} \\cdot 80}{(6,371 \\cdot 10^6)^2} \\]<br>
                    <span class='resultado'>Resultado:  &nbsp P = 782 N</span>
                </div>
                <div class='paso'>
                    <strong>b) En el Everest:</strong><br>
                    Sumamos la altura al radio: &nbsp \\( r = R_T + h = 6371000 + 8848 = 6379848 \\text{ m}\\)<br>
                    \\[ P = 6,67 \\cdot 10^{-11} \\frac{5,95 \\cdot 10^{24} \\cdot 80}{(6379848)^2} \\]<br>
                    <span class='resultado'>Resultado:  &nbsp P = 780 N</span>
                </div>
                <div class='paso'>
                    <strong>c) En la estación MIR (h = 200 km):</strong><br>
                    \\( r = 6371000 + 200000 = 6571000 \\text{ m}\\)<br>
                    \\[ P = 6,67 \\cdot 10^{-11} \\frac{5,95 \\cdot 10^{24} \\cdot 80}{(6571000)^2} \\]<br>
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
                    <strong>a) Fuerza gravitatoria:</strong><br>
                    Aplicamos la Ley de Gravitación Universal de Newton: 
                    \\[ F = G \\frac{M_T \\cdot M_L}{d^2} = 6,67 \\cdot 10^{-11} \\frac{5,97 \\cdot 10^{24} \\cdot 7,35 \\cdot 10^{22}}{(3,84 \\cdot 10^8)^2} \\]<br>
                    <span class='resultado'>Resultado:  &nbsp \\( F = 1,98 \\cdot 10^{20} \\) N</span>
                </div>
                <div class='paso'>
                    <strong>b) Velocidad orbital:</strong><br>
                    Igualamos fuerza gravitatoria a fuerza centrípeta (\\(F_g = F_c\\)):<br>
                    \\[ v = \\sqrt{G \\cdot \\frac {M_T}{d}} = \\sqrt{ 6,67 \\cdot 10^{-11} \\frac{5,97 \\cdot 10^{24} }{3,84 \\cdot 10^8} } \\]<br>
                    <span class='resultado'>Resultado:  &nbsp v = 1018 m/s</span>
                </div>
                <div class='paso'>
                    <strong>c) Punto de fuerza nula:</strong><br>
                    Igualamos atracciones y sacamos raíces:<br>
                    \\[ \\frac{\\sqrt{M_T}}{x} = \\frac{\\sqrt{M_L}}{d-x} \\]<br>
                    <span class='resultado'>Resultado:  &nbsp \\( x = 3,46 \\cdot 10^{8} \\) m (desde la Tierra)</span>
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
                    <th>Radio (km)</th>
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
                    \\[ P_J = G \\frac{M_J \\cdot m}{R_J^2} = 6,67 \\cdot 10^{-11} \\frac{1,889 \\cdot 10^{27} \\cdot 100 }{(71492000)^2} \\]<br>
                    <span class='resultado'>Resultado: &nbsp; P = 2465 N</span>
                </div>
                <div class='paso'>
                    <strong>b) Peso en Ganímedes:</strong><br>
                    Aplicamos exactamente la misma lógica matemática, pero cambiando al protagonista: ahora estamos en la superficie de la luna Ganímedes. <br>
                    \\[ P_G = G \\frac{M_G \\cdot m}{R_G^2} \\]
                    Sustituimos:
                    Radio = \\(  \\dfrac{5262}{2} = 2631 \\ km = 2631000 \\ m \\) <br>
                    \\[ P_G = G \\frac{M_G \\cdot m}{R_G^2} = 6,67 \\cdot 10^{-11} \\frac{1,482 \\cdot 10^{23} \\cdot 100 }{(2631000)^2} \\]<br>
                    <span class='resultado'>Resultado: &nbsp; P = 177,5 N</span>
                </div>
                <div class='paso'>
                    <strong>c) Radio orbital:</strong> <br>
                    Para que un cuerpo (Ganímedes) se mantenga en órbita circular alrededor de otro (Júpiter), la fuerza gravitatoria que lo atrae debe actuar como fuerza centrípeta. Esta es la condición de equilibrio dinámico de las órbitas. F gravitatoria ​= F centrípeta​ <br>
                    \\[ G \\frac{M_J \\cdot M_G}{r^2} =  M_G \\frac{v^2}{r} \\] <br>
                    La masa de Ganímedes (\\(M_G\\)​) y uno de los radios (r) se cancelan en ambos lados de la ecuación. Nos queda: <br>
                    \\[ r = \\frac{G \\cdot M_J}{v^2} = \\frac{6,67 \\cdot 10^{-11} \\cdot 1,482 \\cdot 10^{23} }{(1,18 \\cdot 10^{4})^2} \\]<br>
                    <span class='resultado'>Resultado: &nbsp; r = 1,07 · 10⁹ m</span>
                </div>
                <div class='paso'>
                    <strong>d) Punto nulo desde Ganímedes:</strong><br>
                    <iframe src="simulador_jupiter.html" width="100%" height="620" style="border:1px solid #ddd; border-radius:8px; background:#fff;"></iframe>
                    Queremos colocar el asteroide en un punto entre Júpiter y Ganímedes donde las fuerzas de atracción se anulen. Es decir, Júpiter tira hacia la izquierda con la misma fuerza que Ganímedes tira hacia la derecha. <br> Llamamos x a la distancia desde el asteroide hasta Ganímedes. La distancia desde el asteroide hasta Júpiter será d−x. <br> 
                    Igualamos los módulos de ambas fuerzas gravitatorias:
                    \\[ G \\frac{M_J \\cdot m}{(d - x)^2} =  G \\frac{M_G \\cdot m}{x^2} \\] <br>
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
                    <strong>a) Análisis de fuerzas en un peralte sin rozamiento:</strong><br>
                    La componente vertical de la Fuerza Normal (\\( N_y \\)) contrarresta el peso (\\( P \\)), mientras que la componente horizontal (\\( N_x \\)) actúa como fuerza centrípeta (\\( F_c \\)).<br>
                    - Eje vertical: \\( N \\cdot \\cos(\\alpha) = m \\cdot g \\)<br>
                    - Eje horizontal: \\( N \\cdot \\sin(\\alpha) = m \\cdot \\frac{v^2}{R} \\)
                </div>
                <div class='paso'>
                    <strong>b) Cálculo del ángulo de peralte (\\( \\alpha \\)):</strong><br>
                    \\[ \\tan(\\alpha) = \\frac{v^2}{R \\cdot g} = \\frac{11,11^2}{20 \\cdot 9,8} \\approx 0,63 \\implies \\alpha = 32,2^{\\circ} \\]
                </div>
                
                <div class='paso simulador-interactivo' style='margin-top: 10px; text-align: center; background: #f9f9f9; padding: 15px; border-radius: 8px;'>
                    <h4 style='margin-top: 0;'>Simulador Interactivo: Diagrama de Fuerzas</h4>
                    <canvas id="lienzoPeralte" width="800" height="500" style="background: white; border: 1px solid #ccc; border-radius: 8px; width: 100%; max-width: 600px;"></canvas>
                    
                    <div style="margin-top: 15px; text-align: left; display: inline-block; width: 100%; max-width: 400px;">
                        <label style="display: block; margin-bottom: 10px; font-weight: bold;">
                            Velocidad (m/s): <span id="valV">11.1</span>
                            <input type="range" id="vInput" min="5" max="30" step="0.1" value="11.1" style="width: 100%;">
                        </label>
                        <label style="display: block; margin-bottom: 10px; font-weight: bold;">
                            Radio (m): <span id="valR">20</span>
                            <input type="range" id="rInput" min="10" max="100" step="1" value="20" style="width: 100%;">
                        </label>
                        <div style="font-size: 1.2em; color: #d32f2f; font-weight: bold; text-align: center; margin-top: 15px;">
                            Ángulo ideal: <span id="valAngulo">32.2</span>°
                        </div>
                    </div>
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
            enunciado: "El deuterio es el isótopo del hidrógeno que contiene un neutrón. El agua pesada \\( \\ce{D2O} \\) se emplea en los reactores nucleares para ralentizar los neutrones y controlar su crecimiento. Sabiendo que la distancia entre el protón y el electrón es de 0,5 Å, determina: </br> a) La fuerza eléctrica existente entre el protón y el electrón. <br> b) La aceleración inicial del electrón. <br> c) La distancia a la que debe situarse el electrón para reducir la fuerza de atracción a la cuarta parte. <br> Datos. \\( \\ce{k = 9 \\cdot 10^9 N \\cdot m^2 \\cdot C^{−2} ; q_e = 1,602 \\cdot 10^{−19} C; q_p = 1,602 \\cdot 10^{−19} C; m_e = 9,1 \\cdot 10^{−31}  kg} \\) ",
            // solucion: `
            //     <div class='paso'>
            //         <strong>a)</strong> \\( F = K \\frac{q_p \\cdot q_e}{r^2} = 9 \\cdot 10^9 \\frac{(1,6 \\cdot 10^{-19})^2}{(0,5 \\cdot 10^{-10})^2} \\)<br>
            //         <span class='resultado'>Fuerza F = 9,24 · 10⁻⁸ N</span>
            //     </div>
            //     <div class='paso'>
            //         <strong>b)</strong> \\( a = F/m_e = 9,24 \\cdot 10^{-8} / 9,1 \\cdot 10^{-31} \\)<br>
            //         <span class='resultado'>a = 1,015 · 10²³ m/s²</span>
            //     </div>
            //     <div class='paso'>
            //         <strong>c)</strong> Al ser inversamente proporcional al cuadrado, la distancia debe ser el doble.<br>
            //         <span class='resultado'>r = 1 Å</span>
            //     </div>
            // `
        },
        {
            titulo: "Problema 2: Cargas en triángulo",
            enunciado: "Tres cargas eléctricas de 5 nC, dos positivas fijas y una negativa libre, se sitúan en los vértices de un triángulo equilátero de 60 cm de lado. Sabiendo que la masa de la carga negativa es de 5 g, determina: <br> a) En que dirección comienza a moverse. <br> b) ¿Qué movimiento realiza la carga libre a lo largo del tiempo? <br> c) Calcula la fuerza que experimenta la carga libre en el vértice del triángulo. <br> d) Obtén la aceleración en dicho vértice. <div style='text-align: center; margin-bottom: 20px;'> <img src='img/din_6.png' style='max-width: 80%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> <br> \\( \\ce{Datos: k = 9 \\cdot 10^9 N \\cdot m^2 \\cdot C^{−2}} \\)",
            // solucion: `
            //     <div class='paso'>
            //         <strong>a)</strong> Se mueve verticalmente hacia abajo atraída por las cargas positivas de la base.<br>
            //         <strong>c)</strong> Sumando vectorialmente las dos fuerzas atractivas proyectadas en el eje Y.<br>
            //         <span class='resultado'>F = 1,08 · 10⁻⁶ N</span><br>
            //         <strong>d)</strong> \\( a = F/m = 1,08 \\cdot 10^{-6} / 0,005 \\)<br>
            //         <span class='resultado'>a = 2,16 · 10⁻⁴ m/s²</span>
            //     </div>
            // `
        },
        {
            titulo: "Problema 3: Radiación cósmica",
            enunciado: "La radiación cósmica tiene una influencia directa en nuestro planeta. La teoría más asentada sobre la formación de tormentas apunta a la radiación cósmica como origen de las mismas. En un laboratorio de nanotecnología, se investiga el comportamiento de partículas cargadas en dispositivos de detección de polvo cósmico. En un experimento, tres pequeñas esferas con carga están suspendidas en un campo eléctrico controlado según el siguiente esquema. Determina: <br> a) La fuerza que experimenta la carga 1. <br> b) La aceleración que experimenta la carga 1, cuya masa es de 10 g. <br> c) Indica qué bosones se intercambian en la interacción descrita. <div style='text-align: center; margin-bottom: 20px;'> <img src='img/din_7.png' style='max-width: 25%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div>  <br> \\( \\ce{Datos: k = 9 \\cdot 10^9 N \\cdot m^2 \\cdot C^{−2}} \\)",
            // solucion: `
            //     <div class='paso'>
            //         <strong>a)</strong> Atraída por q2 y q3. \\( F_{total} = F_{12} + F_{13} = 0,036 + 0,009 \\)<br>
            //         <span class='resultado'>F = 0,045 N</span><br>
            //         <strong>b)</strong> \\( a = F/m = 0,045 / 0,010 \\)<br>
            //         <span class='resultado'>a = 4,5 m/s²</span><br>
            //         <strong>c)</strong> Interacción electromagnética.<br>
            //         <span class='resultado'>Bosones: Fotones</span>
            //     </div>
            // `
        },
        {
            titulo: "Problema 4: 1-bromopropano",
            enunciado: "El 1-bromopropano es un disolvente empleado para limpiar las superficies de las pantallas OLEDs. Para formar el 1-bromopropano se lleva a cabo una reacción orgánica donde el ion bromuro \\( \\ce{Br^–} \\) ataca la carga positiva del carbocatión (propano). El ion bromuro se encuentra rodeado de 3 cargas positivas (carbocationes). En los siguientes esquemas se muestran tanto la reacción orgánica (1) como un diagrama de cargas (2). Determina: <br> a) La fuerza que experimenta la carga 1. <br> b) La fuerza que experimenta la carga 4. <br> c) La aceleración que experimenta la carga 1 (ion bromuro), cuya masa es de 1,33 · 10 – 22 g. <br> d) Teniendo en cuenta el diagrama de fuerzas, ¿a qué carbocatión crees que se unirá el bromuro? <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/din_8.png' style='max-width: 70%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div>  <br> \\( \\ce{Datos: k = 9 \\cdot 10^9 N \\cdot m^2 \\cdot C^{−2}} \\)",
            // solucion: `
            //     <div class='paso'>
            //         <span class='comentario'>Se aplican las sumatorias de fuerza Coulombianas sobre las distintas distancias de los carbonos.</span><br>
            //         <span class='resultado'>a = 4,16 · 10¹⁴ m/s²</span>
            //     </div>
            // `
        }
    ],
    "plano": [
        {
            titulo: "Problema 1: Paracaidista pirámide",
            enunciado: "Un paracaidista que ha visitado las pirámides se deja deslizar por la pirámide para grabar con su GoPro. La pirámide tiene una inclinación de 25º y un coeficiente de rozamiento cinético de \\( \\ce{μ_c = 0,35} \\). Determina: <br> a) La aceleración con que desciende el paracaidista. <br> b) El tiempo que tarda en alcanzar los 20 m/s, considerando que parte de 5 m/s. <br> c) Razona si varía el rozamiento con la pirámide si el paracaidista desciende con una posición diferente.",
            // solucion: `
            //     <div class='paso'>
            //         \\( a = g(\\sin 25^\\circ - 0,35 \\cos 25^\\circ) = 1,03 \\text{ m/s}^2 \\)<br>
            //         \\( 20 = 5 + 1,03 \\cdot t \\implies t = 14,56 \\text{ s} \\)
            //     </div>
            // `
        },
        {
            titulo: "Problema 2: Antiguo Egipto",
            enunciado: "Los antiguos egipcios empleaban el plano inclinado para elevar los bloques de piedra ejerciendo fuerzas inferiores a sus pesos. Un esclavo que estaba construyendo la Gran Pirámide de Giza está tan cansado que deja de empujar su bloque de piedra. Sabiendo que la rampa tiene una inclinación de 20º sobre la horizontal y que el coeficiente de rozamiento estático entre el bloque y el plano es \\( \\ce{μ_e = 0,4} \\), determina: <br> a) Justifica si el bloque descenderá por el plano. <br> b) Indica qué fuerza fundamental supone el rozamiento.",
            // solucion: `
            //     <div class='paso'>
            //         \\( a = g(\\sin 25^\\circ - 0,35 \\cos 25^\\circ) = 1,03 \\text{ m/s}^2 \\)<br>
            //         \\( 20 = 5 + 1,03 \\cdot t \\implies t = 14,56 \\text{ s} \\)
            //     </div>
            // `
        },
        {
            titulo: "Problema 3: Esquiador en ladera",
            enunciado: "Un esquiador se deja caer por la ladera para coger velocidad suficiente y ascender por un plano inclinado de 25º. Entra en el plano inclinado con una velocidad de 20 m/s. El esquiador tiene una masa de 80 kg y el coeficiente de rozamiento entre los esquís y la nieve es de 0,1. Determina: <br> a) La aceleración con la que se frena el esquiador. <br> b) La velocidad con la que sale del plano, sabiendo que la longitud del plano inclinado es de 5 m. <br> c) Justo antes de hacer el salto, al esquiador se le cae un gorro en el plano inclinado de 25º. Determina si el gorro cae y desliza por el plano.",
            // solucion: `
            //     <div class='paso'>
            //         \\( a = g(\\sin 25^\\circ - 0,35 \\cos 25^\\circ) = 1,03 \\text{ m/s}^2 \\)<br>
            //         \\( 20 = 5 + 1,03 \\cdot t \\implies t = 14,56 \\text{ s} \\)
            //     </div>
            // `
        },        
        {
            titulo: "Problema 4: Máquina de Atwood",
            enunciado: "Una grúa funciona como la denominada máquina de Atwood. Sobre la polea de una grúa cuelgan de los extremos de una cuerda inextensible y de masa despreciable dos pesas: una de masa 400 g y otra de masa 500 g. Determina: <br> a) Indica en qué sentido se mueven las masas. <br> b) ¿Cuál es la tensión de la cuerda? <br> c) ¿Con que aceleración se moverán? <br> d) Indica la fuerza fundamental implicada en la fuerza tensión y nombra sus bosones.",
            // solucion: `
            //     <div class='paso'>
            //         Subiendo, gravedad y rozamiento frenan: \\( -mg\\sin 25^\\circ - \\mu mg\\cos 25^\\circ = ma \\)<br>
            //         \\( a = -9,8(0,422 + 0,1 \\cdot 0,906) = -5,03 \\text{ m/s}^2 \\)<br>
            //         \\( v_f^2 = 20^2 + 2(-5,03)(5) \\implies v_f = 18,7 \\text{ m/s} \\)
            //     </div>
            // `
        },
        {
            titulo: "Problema 5: Gato y lámpara",
            enunciado: "Un gato ha decidido jugar con el cable de la lámpara de la mesilla de noche. El cable pasa por la esquina pulida de la mesa, que actúa como una polea. La masa de la lámpara es de 2 kg y la del gato de 3 kg. Si el coeficiente de rozamiento cinético entre la mesa y la lámpara es de \\( \\ce{μ_c = 0,3} \\). Determina:  <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/pi_5.png' style='max-width: 20%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> <br> a) La aceleración con la que se mueven las masas. <br> b) La tensión de la cuerda. <br> c) La velocidad del gato pasado 1,5 segundos.",
            // solucion: `
            //     <div class='paso'>
            //         Ecuaciones: \\( P_{gato} - T = m_{gato} \\cdot a \\) y \\( T - F_{r(lamp)} = m_{lamp} \\cdot a \\)<br>
            //         \\( 3 \\cdot 9,8 - 0,3 \\cdot 2 \\cdot 9,8 = (3+2)a \\implies 29,4 - 5,88 = 5a \\implies a = 4,7 \\text{ m/s}^2 \\)<br>
            //         \\( T = 15,28 \\text{ N} \\) ; Velocidad: \\( v = 4,7 \\cdot 1,5 = 7,06 \\text{ m/s} \\)
            //     </div>
            // `
        },
        {
            titulo: "Problema 6: Trabajo en la construcción",
            enunciado: "En construcción se emplea la polea fija para levantar cargas. En la edificación de un bloque de pisos turísticos se emplea un sistema de polea en un plano inclinado como en la figura. Sabiendo que el coeficiente de rozamiento cinético es \\( μ = 0,3 \\), determina: <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/pi_6.png' style='max-width: 40%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> <br> a) Razona por qué es útil una polea fija. <br> b) Indica en qué sentido se mueven las masas. <br> c) Calcula la aceleración del sistema. <br> d) Halla la tensión de la cuerda.",
            // solucion: `
            //     <div class='paso'>
            //         Ecuación coche: \\( P_x - T - F_{r_c} = M \\cdot a \\)<br>
            //         Ecuación gemelos: \\( T - F_{r_g} = m \\cdot a \\)<br>
            //         Despejando el sistema conjunto se obtiene:<br>
            //         <span class='resultado'>a = 0,42 m/s² ; T = 651,6 N ; t = 6,9 s</span>
            //     </div>
            // `
        },
        {
            titulo: "Problema 7: Muñeco lanzado",
            enunciado: "Una niña tira un muñeco de 1 kg hacia arriba a lo largo de una carretera inclinada 37º con una velocidad inicial de 9,8 m/s. Se observa que recorre una distancia de 6 m y después desliza hacia abajo hasta el punto de partida. Calcula: <br> a) El coeficiente de rozamiento. <br> b) La fuerza de rozamiento que actúa sobre el muñeco. <br> c) La velocidad con la que vuelve a su posición inicial el muñeco.",
            // solucion: `
            //     <div class='paso'>
            //         Aceleración de bajada usando MRUA: \\( v^2 = v_0^2 + 2ax \\implies 20^2 = 0 + 2 \\cdot a \\cdot 150 \\implies a = 1,33 \\text{ m/s}^2 \\)<br>
            //         Dinámica: \\( g(\\sin 25^\\circ - \\mu \\cos 25^\\circ) = 1,33 \\implies \\mu = 0,316 \\)
            //     </div>
            // `
        },
        {
            titulo: "Problema 8: Chiquillo trineo",
            enunciado: "Un chiquillo se deja caer colina abajo con su trineo por la ladera de una montaña nevada que presenta una inclinación de 25º. Cuando desciende la montaña (el plano inclinado), ha recorrido 150 metros. Entonces atraviesa una capa de hielo horizontal antes de comenzar a subir una montaña nevada de 10º de inclinación. Sabiendo que existe coeficiente de rozamiento con la nieve (presente en ambos planos inclinados) y que este coeficiente es nulo con el hielo (plano horizontal), determina: <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/pi_8.png' style='max-width: 40%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> <br> a) El coeficiente de rozamiento con la nieve, sabiendo que llega a la capa de hielo con una velocidad de 20 m/s. <br> b) La velocidad con la que comienza a subir la segunda montaña de 10º de inclinación. <br> c) La distancia que recorre en la segunda montaña hasta frenarse.",
            // solucion: `
            //     <div class='paso'>
            //         a) \\( 100g\\sin 45^\\circ - 100g\\sin 30^\\circ = 200a \\implies a = 0,96 \\text{ m/s}^2 \\)<br>
            //         b) Con \\(\\mu=0,05\\) restando fuerzas de rozamiento en ambos lados:<br>
            //         <span class='resultado'>a = 0,56 m/s² ; T = 391,8 N</span>
            //     </div>
            // `
        },
        {
            titulo: "Problema 9: Polea 30° y 45°",
            enunciado: "Dado el siguiente sistema de cargas conectadas por una polea de cuerda inextensible, determina la aceleración del sistema y la tensión de la cuerda cuando: <br> <br> <div style='text-align: center; margin-bottom: 20px;'> <img src='img/pi_9.png' style='max-width: 40%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> <br>  a) No hay rozamiento. <br> b) El rozamiento cinético es \\( μ_c = 0,05 \\).",
            // solucion: `
            //     <div class='paso'>
            //         a) \\( 100g\\sin 45^\\circ - 100g\\sin 30^\\circ = 200a \\implies a = 0,96 \\text{ m/s}^2 \\)<br>
            //         b) Con \\(\\mu=0,05\\) restando fuerzas de rozamiento en ambos lados:<br>
            //         <span class='resultado'>a = 0,56 m/s² ; T = 391,8 N</span>
            //     </div>
            // `
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
