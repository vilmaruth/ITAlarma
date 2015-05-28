/*
inicializacion de la variable necesarias

*/

#include <macro.h>

char rxchar;          //variable que recibe los datos del bluetooth
int estadoSysAlarma;  // estado del sistema de alarma: 0-DESACTIVADO, 1-ACTIVADO, 2-BATERIA, 3-BATERIA_CRITICA
int pinSensorApertura;//se debe controlar que esta HIGH al estar activada la alarma.

//  configurar el arduino
void setup(){
    Serial.begin(9600);
    estadoSysAlarma=0;
    pinMode(pinSensorApertura,INPUT);
}

// programa  principal
void loop(){
//  long pinSApertura=

  if (estadoSysAlarma == 1){//sistema de alarma activado tiene que controlar el estado de los sensores.
    // COMPROBAR ACTIVACION SENSOR DE MOVIMIENTO
    // COMPROBAR ACTIVACION SENSOR DE GASES
    
    // COMPROBAR ACTIVACION APERTURA DE ABERTURAS
    
    if (pinSensorApertura==LOW){//existe alguna abertura abierta que corta el flujo de electricidad.
      //activar alarma.
    }
  }
  if (estadoSysAlarma== 0){// Sistema desactivado, 
   //SEÑAL BLUETOOTH
    if( Serial.available() )// bluetooth
    {
      // Leer un byte y colocarlo en variable
      // los mensajes de entrada  pueden ser:
      // - activacion de sistema de alarmas
      // - desactivacion de sistema de alarmas
      // - activar sistema de alarma  por ambientes(sugeta a la cantidad de ambientes)
      // - desactivacion de sistema de alarma por ambientes(idem anterior)
       Serial.read();
    }
    // TABLERO. protocolo I2C
    
    // mensajes de entrada:
    // - activacion de sistema de alarmas
    // - desactivacion de sistema de alarmas
    //SENSOR DE LUCES
  }
  // REVISION DE LA BATERIA
  controlarEstadoBateria();  
}//fin loop().


// REVISION DE LA BATERIA
  void controlarEstadoBateria(){
    
  }
  
  boolean leer_voltios(int pinAnalog){
    float  voltios;
    voltios= (analogRead(pinAnalog))*(0,004887585533)*4.9000;
    return voltios<=6.60;
  }
    /*Para una referencia de 3.3 Voltios
    void leer_voltios()
    {
    float  voltios;
    voltios= (analogRead(A0))*0,003225806452*4.9000;
    if (voltios<=6.60){
      digitalWrite(5, HIGH);
    }
}*/

// COMPROBAR ACTIVACION SENSOR DE MOVIMIENTO
// COMPROBAR ACTIVACION SENSOR DE GASES
// COMPROBAR ACTIVACION APERTURA DE ABERTURAS
  
