ig.module(
  'game.entities.jugador'
)
.requires(
  'impact.entity'
)
.defines(function() {

  EntityJugador = ig.Entity.extend({

  	//Pre-cargamos los sprites
  	animSheet: new ig.AnimationSheet( '/space/media/personajes.png',50 , 50 ),
  	
  	//Tamaño de la entidad
  	size: {x : 40 , y : 26 },

  	//Numero de pixeles que eliminamos de los bordes
  	offset: {x : 5, y : 12},

  	//Constructor
    init: function(x, y, settings) {
      this.parent(x, y, settings);

      //Deifnimos la animación
      this.addAnim( 'normal' , 9999999 , [6]);
      
    },

    update: function(){
    	this.parent();

    	//Movemos el personaje
    	if(ig.input.state('izquierda')){
    		this.vel.x = -100;
    	}
    	if(ig.input.state('derecha')){
    		this.vel.x = 100;
    	}

    	//Paramos el movimiento al soltar alguna tecla.
      	if(ig.input.released('izquierda') || ig.input.released('derecha')){
        	this.vel.x = 0;
      	}

    }

  });

});