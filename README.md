# DPC-Web-App

Dies ist die Web-App des DPC-Projektes.

## Voraussetzungen

Folgendes muss installiert sein:

* NodeJS
* NPM (Node Paket Manager)

Unter  https://nodejs.org/en/download/ kann beides zusammen bezogen werden.

## Generelles:

* Der Server kann mit **npm start** gestartet werden. Eine Anpassung des Ports kann in der *config.js* stattfinden.
* Der Server läuft komplett In-Memory, so dass bei einem Neustart jegliche Informationen verloren gehen.
* Der Server ist nur sehr prototypisch implementiert. Dementsprechend sind nicht alle Endpunkte implementiert oder manche nur teilweise.
* Unter *api/originalApi.yaml* ist die API in der OpenApi Spezifikation zu sehen, welche z.B. mit https://editor.swagger.io/ visualisiert werden kann.
