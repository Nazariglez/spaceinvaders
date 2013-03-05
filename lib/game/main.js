ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',
	'game.entities.jugador'
)
.defines(function(){

	MyGame = ig.Game.extend({
		
		// Load a font
		font: new ig.Font( 'media/04b03.font.png' ),
		
		
		init: function() {

			//Tecla de disparo
			ig.input.bind( ig.KEY.SPACE , 'fuego' );

			//Teclas de movimiento
			ig.input.bind( ig.KEY.LEFT_ARROW , 'izquierda' );
			ig.input.bind( ig.KEY.RIGHT_ARROW , 'derecha' );

			//Tecla de reinicio
			ig.input.bind( ig.KEY.ENTER , 'reinicio' );

			//Creamos nuestro jugador
			ig.game.spawnEntity( EntityJugador, 300, 300, {});


		},
		
		update: function() {
			// Update all entities and backgroundMaps
			this.parent();
			
		},
		
		draw: function() {
			// Draw all entities and backgroundMaps
			this.parent();
			
			
			// Add your own drawing code here
			var x = ig.system.width/2,
				y = ig.system.height/2;
			
			this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
		}
	});


	// Ancho: 520, Alto: 600, Escala: 1
	ig.main( '#canvas', MyGame, 60, 520, 600, 1 );

});
