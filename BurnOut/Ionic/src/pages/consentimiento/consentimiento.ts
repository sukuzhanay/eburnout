import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { GlobalProvider } from '../../providers/global/global';


// Componente de tipo pagina @IonicPage
@IonicPage()
@Component({
  selector: 'page-consentimiento',
  templateUrl: 'consentimiento.html',
})

// Export va como modulo, parecido a Var global
export class ConsentimientoPage {
  mensaje:string = "";
  checkAcepto;

  // Este es el main
  constructor(public global: GlobalProvider, public NavControl:NavController) {
  // Main  
  }
  
// Cuando entras a la  pag / modulo y antes de cargarla. 
  ionViewWillEnter() {
    // metodo que vamos a usar para mostrar msg de texto enb panatalla
    this.ponerTextoConsentimiento();
  }
  // Solo estamos cargando la variable mensaje
  ponerTextoConsentimiento() {
    this.mensaje= 'El término «burnout» (o síndrome de quemarse por el trabajo) se define como la respuesta';
    this.mensaje += 'inadecuada al estrés emocional crónico, que resulta de una discrepancia entre los ideales';
    this.mensaje += 'individuales y la realidad de la vida ocupacional diaria, requiriéndose al menos seis meses';
    this.mensaje += 'de periodo des adaptativo. Involucra básicamente el agotamiento emocional, la';
    this.mensaje += 'deshumanización o despersonalización y la falta de realización personal en el trabajo.';
    this.mensaje += 'Como consecuencias del burnout aparece deterioro en la calidad del cuidado o el servicio';
    this.mensaje += 'provisto por el personal sanitario, el aumento de la rotación en los trabajos, el absentismo';
    this.mensaje += 'y la baja moral, así como disfunción personal, incluyendo agotamiento físico, insomnio,';
    this.mensaje += 'consumo de alcohol y drogas y problemas conyugales y familiares.';
    this.mensaje += 'En general el burnout aparece en individuos sin historia de trastornos psicológicos o';
    this.mensaje += 'psiquiátricos, se desarrolla gradualmente y no está presente cuando se inicia un nuevo';
    this.mensaje += 'empleo. El desarrollo del cuadro se relaciona con la sobrecarga del trabajo, pero el exceso';
    this.mensaje += 'de tarea no provoca sin más el síndrome, es más importante la desmotivación emocional';
    this.mensaje += 'y cognitiva por el abandono de intereses que habían sido importantes, por la discrepancia';
    this.mensaje += 'entre el esfuerzo y lo conseguido.';
    this.mensaje += 'Desde que se describiera en 1974, la presencia de burnout ha crecido exponencialmente';
    this.mensaje += 'dentro de la comunidad médica, llegando a alcanzar en las encuestas de la última década';
    this.mensaje += 'niveles alarmantes de síntomas de dicho cuadro. No podemos negar la coexistencia del';
    this.mensaje += 'mismo con el desempeño del trabajador de salud, como tampoco podemos negar la alta';
    this.mensaje += 'penetración de la tecnología móvil en el hacer profesional, dicha razón nos motiva a';
    this.mensaje += 'desarrollar herramientas y estrategias apoyándonos en la misma. Existen ya algunas';
    this.mensaje += 'aplicaciones tipo aplicación móvil que se muestran prometedoras en reducir el síndrome';
    this.mensaje += 'de burnout en personal sanitario.';
    this.mensaje += 'Se trata de un estudio longitudinal en el que se miden las puntuaciones en el';
    this.mensaje += 'Inventario de Burnout de Maslach mediante el uso de la Aplicación móvil diseñada para';
    this.mensaje += 'este estudio, en la que se darán una serie de indicaciones. Además de las indicaciones de';
    this.mensaje += 'la Aplicación móvil se registran datos sobre la actividad física con periodicidad semanal';
    this.mensaje += 'mediante una pulsera de actividad en un grupo y sin ella en otro grupo. Las puntuaciones';
    this.mensaje += 'del MBI se recogen mensualmente, para lo que la Aplicación móvil tiene una alarma';
    this.mensaje += 'recordatoria. Se mide semanalmente la puesta en marcha de alguna indicación y';
    this.mensaje += 'mensualmente las puntuaciones en el Maslach. Se incluye una pregunta directa sobre la';
    this.mensaje += 'utilidad de la aplicación y de las indicaciones, a responder después de cada una.';
    this.mensaje += 'Al final del estudio se hará un análisis agrupado de las respuestas a las posibles medidas';
    this.mensaje += 'que podría tomar la institución, según las respuestas libres de cada participante.';
    this.mensaje += 'Se incluyen médicos de urgencias y psiquiatras.';
    this.mensaje += 'Los datos de los participantes serán encriptados y se garantizará que el análisis de éstos';
    this.mensaje += 'será anónimo.';
    this.mensaje += 'En cualquier momento los participantes pueden abandonar el estudio, devolviendo la';
    this.mensaje += 'pulsera de actividad al investigador.';
    this.mensaje += 'El estudio no implica ningún riesgo para la salud física o mental de los participantes.';    
  }

  ToAccept(){
      if(this.checkAcepto){
        this.NavControl.setRoot("TabGeneralPage");
      }
  }

}
