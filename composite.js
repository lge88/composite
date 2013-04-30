// Module implementation goes here:

/**
 * Modified from Three.js THREE.Object3D 
 */

// var idCount = 0;


function Composite () {

  // this.id = idCount ++;
  // this.name = '';

  this.parent = undefined;
  this.children = [];

  // this.visible = true;


};


Composite.prototype = {

  constructor: Composite,

  findRoot: function() {
    var root = this;

	while ( root.parent !== undefined ) {

	  root = root.parent;

	}
    return root;
  },

  add: function ( object ) {

	if ( object === this ) {

	  console.warn( 'Composite.add: An object can\'t be added as a child of itself.' );
	  return;

	}

	if ( object instanceof Composite ) {

	  if ( object.parent !== undefined ) {

		object.parent.remove( object );

	  }

	  object.parent = this;
	  this.children.push( object );

	}

  },

  remove: function ( object ) {

	var index = this.children.indexOf( object );

	if ( index !== - 1 ) {

	  object.parent = undefined;
	  this.children.splice( index, 1 );

	}

  },

  traverse: function ( callback ) {

	callback( this );

	for ( var i = 0, l = this.children.length; i < l; i ++ ) {

	  this.children[ i ].traverse( callback );

	}

  },

  getChildByName: function ( name, recursive ) {

	for ( var i = 0, l = this.children.length; i < l; i ++ ) {

	  var child = this.children[ i ];

	  if ( child.name === name ) {

		return child;

	  }

	  if ( recursive === true ) {

		child = child.getChildByName( name, recursive );

		if ( child !== undefined ) {

		  return child;

		}

	  }

	}

	return undefined;

  },

  getDescendants: function ( array ) {

	if ( array === undefined ) array = [];

	Array.prototype.push.apply( array, this.children );

	for ( var i = 0, l = this.children.length; i < l; i ++ ) {

	  this.children[ i ].getDescendants( array );

	}

	return array;

  },

  clone: function ( object ) {

	if ( object === undefined ) object = new Composite();

	// object.name = this.name;

	// object.visible = this.visible;

	for ( var i = 0; i < this.children.length; i ++ ) {

	  var child = this.children[ i ];
	  object.add( child.clone() );

	}

	return object;

  },



};

exports.Composite = Composite;
