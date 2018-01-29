# Web Anwendung Bilder Gallerie


## Userstory
Als Nutzer möchte ich alle Fotos als Vorschau in einer endlos scrollenden Liste (Raster) sehen. Es sollen maximal 5 Vorschaubilder in einer Reihe dargestellt werden. 
Alle Vorschaubilder sollen unabhängig von ihren Proportionen in gleicher Größe dargestellt werden und werden dementsprechend skaliert, zentriert und beschnitten.
Auf mobilen Geräten (Auflösung < 480px) sollen alle Bilder untereinander dargestellt werden.
Beim Klick auf ein Bild soll dieses in voller Größe als Overlay darstellt werden.
Beim erneuten Klick schließt sich das Overlay wieder.
Bilder Die beim initialen laden der Seite nicht sichtbar sind sollen erst geladen werden sobald diese sichtbar werden.

## Technologien/ Bibliotheken
NPM, Gulp, WebPack, Node, Express, Pug, Sass, Jquery, AMD


### Backend
* Bereitstellung der Webinhalte
* Scannen des Bildordners und Erstellen des Markups 
* automatisches Generieren von Vorschaubildern (Breite 480px)

### Frontend
* responsive layout
* lazy loading

## Aufgaben

* Ich möchste im Overlay zum nächsten und vorherigen Bild schalten können

* Das Laden der Bilder im Overlay soll verbessert werden (responsive Bilder mittels weiterer Bildgrößen im Backend oder eine Ladeanimation)

* Es soll ein zweiter Bildordner eingebunden werden. Ich möchste über eine Navigation im Header zwischen den Ordnern hin und her schalten können.

* Über einen Upload-Button möchte ich einzelne Bilder hochladen und dem Bildordner hinzufügen können.

* Ich möchte über einen Button im Header einzelne Bilder löschen können. 