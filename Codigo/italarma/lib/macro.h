/*
Definicion de las macros utilizadas  en el programa arduino para hacer referencia
a estados del sistema, pines digitales, analogicos y PWM(modulacion de impulsos pro frecuencia),
mensajes del sistema.
*/

#ifndef __MACRO_H
#define __MACRO_H

// ESTADOS DEL SISTEMA DE ALARMAS
#define  DESACTIVADO  1000
#define  ACTIVADO  1001
#define  BATERIAOPTIMA  1002
#define  BATERIACRITICA  1003

//DEFINICION DE PINES DIGITALES
#define PIN   1
#define PINRX   2  //comunicacion bluetooth
#define PINTX   3  //comunicacion bluetooth
#define PINSAPERTURA0   4	//sensor de apertura para puerta principal
#define PINSAPERTURA1   5	//sensor de apertura. conexion en serie para el resto de las aperturas. 
#define PINPIR   6	// sensor de movimiento
#define PIN   7
#define PIN   8
#define PIN   9
#define PIN   10
#define PIN   11
#define PIN   12
#define PIN   13

// DEFINICION DE PINES ANALOGICOS NO ES NECESARIO. A0, A1, A2, A3, A4, A5.

//DEFINICION DE MENSAJES 
#define ACTIVARSYS S
#define DESACTIVARSYS s

#define ACTIVARSENSORMOVIMIENTO M
#define DESACTIVARSENSORMOVIMIENTO m

#define ACTIVARSENSORLUCES L
#define DESACTIVARSENSORLUCES l

#define ACTIVARSENSORGASES G
#define DESACTIVARSENSORGASES g

#define ACTIVARSENSORAPERTURA V
#define DESACTIVARSENSORAPERTURA v


#endif
