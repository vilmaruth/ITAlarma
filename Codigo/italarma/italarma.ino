/*
inicializacion de la variable necesarias

*/
#include <macro.h>
#include <SoftwareSerial.h>

char msj;          //variable que recibe los datos del bluetooth
int estadoSysAlarma;  // estado del sistema de alarma: ver <macro.h>

// estado de los distintos sensores
int estadoSensorMovimiento;
int estadoSensorLuces;
int estadoSensorAperturas;
int estadoSensorGases; 

//codigo de seguridad del sistema de alarma
int codigo;
// 
int tiempoDeEspera;
int crono=0;
// variable necesaria para la comunicacion bluetooth
SoftwareSerial blue(PINRX,PINTX);

//  configuracion inicial del arduino
void setup(){
    blue.begin(9600);
    estadoSysAlarma=DESACTIVADO;
    tiempoDeEspera=10000;//10 segundos, debe ser proporcional a la distancia del tablero a la puerta principal
}

// programa  principal
void loop(){
  
  
  if (estadoSysAlarma == ACTIVADO){//sistema de alarma activado tiene que controlar el estado de los sensores.
    // COMPROBAR ACTIVACION SENSOR DE MOVIMIENTO
    if (estadoSensorMovimiento){
    
    }
    // COMPROBAR ACTIVACION SENSOR DE GASES
    if (estadoSensorGases){}
    // COMPROBAR ACTIVACION APERTURA DE ABERTURAS
    if (estadoSensorAperturas){
      if (digitalRead(PINSAPERTURA0)==LOW){//La puerta principal se encuentra abierta
        //activar bocina.
        delay(1000);
        crono++;
        if (crono==tiempoDeEspera){
          //activar la bocina
        }
      }
      if (digitalRead(PINSAPERTURA1)==LOW){//existe alguna abertura abierta que corta el flujo de electricidad.
        //activar bocina.
      }
    }
    // ACTIVACION DE SENSOR DE LUZ
    if (estadoSensorLuces){
    }
  }
  if (estadoSysAlarma== DESACTIVADO){// Sistema desactivado, 
    //controlar estado de bateria
  }
  if(estadoSysAlarma==BATERIAOPTIMA){
  
  }
  if(estadoSysAlarma== BATERIACRITICA){
  
  }
  // REVISION DE LA BATERIA
  controlarEstadoBateria();  
  //SEÑAL BLUETOOTH. Procesamiento de mensajes.
  if( blue.available()){
    // Leer un byte y colocarlo en variable
    // los mensajes de entrada  pueden ser:
    // - activacion de sistema de alarmas
    // - desactivacion de sistema de alarmas
    msj = blue.read();
    switch(msj){
      case ACTIVARSYS:
        estadoSysAlarma= ACTIVADO;
        estadoSensorMovimiento=HIGH;
        estadoSensorLuces=HIGH;
        estadoSensorGases=HIGH;
        estadoSensorAperturas=HIGH;
      break;
      case DESACTIVARSYS:
        estadoSysAlarma= DESACTIVADO;
        estadoSensorMovimiento=LOW;
        estadoSensorLuces=LOW;
        estadoSensorGases=LOW;
        estadoSensorAperturas=LOW;
      break;
      case ACTIVARSENSORMOVIMIENTO:
        if (estadoSysAlarma==ACTIVADO){
          estdoSensorMovimiento=HIGH;
        }
      break;
      case DESACTIVARSENSORMOVIMIENTO:  
        if (estadoSysAlarma==ACTIVADO){
          estadoSensorMovimiento=LOW;
        }
      break;
      case ACTIVARSENSORLUCES:
        if (estadoSysAlarma==ACTIVADO){
          estadoSensorLuces=HIGH;
        }
      break;
      case DESACTIVARSENSORLUCES:
        if (estadoSysAlarma==ACTIVADO){
          estadoSensorLuces=LOW;
        }
      break;
      case ACTIVARSENSORGASES:
        if (estadoSysAlarma==ACTIVADO){
          estadoSensorGases=HIGH;
        }
      break;
      case DESACTIVARSENSORGASES: 
        if (estadoSysAlarma==ACTIVADO){
          estadoSensorGases=LOW;
        }
      break;
      case ACTIVARSENSORAPERTURA:
        if (estadoSysAlarma==ACTIVADO){
          estadoSensorAperturas=HIGH;
        }
      break;
      case DESACTIVARSENSORAPERTURA:
        if (estadoSysAlarma==ACTIVADO){
          estadoSensorAperturas=LOW;
        }
      break;
      default:
    }
    
  }
  // TABLERO. protocolo I2C
  // mensajes de entrada:
  // - activacion de sistema de alarmas
  // - desactivacion de sistema de alarmas
 
}//fin loop().


// REVISION DE LA BATERIA
  void controlarEstadoBateria(){
    
  }
// COMPROBAR ACTIVACION SENSOR DE MOVIMIENTO
// COMPROBAR ACTIVACION SENSOR DE GASES
// COMPROBAR ACTIVACION APERTURA DE ABERTURAS
  

