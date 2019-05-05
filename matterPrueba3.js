var myCanvas = document.getElementById('blue');



var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create engine
var engine = Engine.create(),
    world = engine.world;

// create renderer
var render = Render.create({
  canvas: myCanvas,
  engine: engine,
  options: {
    width: myCanvas.offsetWidth,
    height: myCanvas.offsetHeight,
    background: 'white',
    showAngleIndicator: false,
    wireframes: false
  }
});


engine.world.gravity.y = Math.random()*0.4-0.2;
engine.world.gravity.x = Math.random()*0.4-0.2;

  Render.run(render);

    // create runner
    var runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    var offset = 25,
        options = {
            isStatic: true,
            render: {
              fillStyle: 'transparent'
            }
        };

    world.bodies = [];

    var espesor = 280;

  World.add(world, [
        Bodies.rectangle(-espesor/2+20, myCanvas.offsetHeight/2, espesor, myCanvas.offsetHeight, options),
        Bodies.rectangle(myCanvas.offsetWidth+espesor/2-20, myCanvas.offsetHeight/2, espesor, myCanvas.offsetHeight, options),
        Bodies.rectangle(myCanvas.offsetWidth/2, -espesor/2+20, myCanvas.offsetWidth, espesor, options),
        Bodies.rectangle(myCanvas.offsetWidth/2, myCanvas.offsetHeight+espesor/2-20, myCanvas.offsetWidth, espesor, options),
    ]);

    /*
    var miles = Bodies.circle(1300, 380, 50, {
      restitution: 0.5,
      render: {
        sprite: {
          texture: 'tennis2.png'
        }
      }
    });
    */

    var date = Bodies.rectangle(223*2, 64*2, 421*2, 136, {
      restitution: 0.9,
      render: {
        fillStyle: '#EDC1DD',
        sprite: {
          texture: 'assets/nombre1.png'
        }
      }
    });

    var blue = Bodies.rectangle(498*2, 64*2, 101*2, 136, {
      restitution: 0.9,
      render: {
        fillStyle: '#EDC1DD',
        sprite: {
          texture: 'assets/nombre2.png'
        }
      }
    });

    var records = Bodies.rectangle(68*2, 180*2, 101*2, 136, {
      restitution: 0.5,
      render: {
        sprite: {
          texture: 'assets/nombre3.png'
        }
      }
    });

    var trump = Bodies.rectangle(281*2, 180*2, 280*2, 106, {
      restitution: 0.5,
      render: {
        fillStyle: '#EDC1DD',
        sprite: {
          texture: 'assets/nombre4.png'
        }
      }
    });

    World.add(world, [date, records, blue, trump]);

    var j = [20,80,-30,90,-360];
    var k = [20,0,60,50,0];
    var h = ['#FFB2B2','#ff7f7f','#FFB2B2','#FF6666','#FF1A1A','#EDC1DD'];

    /*
    function get_random_color() {
      function w() {
        var hex = Math.floor(Math.random()*256).toString(16);
        return ("0"+String(hex)).substr(-2); // pad with zero
      }
      return "#"+w()+w()+w();
    }
    */

    for (var i = 0; i < 5; i++) {
      var ball1 = Bodies.circle(400+(i*260)+k[i], 600+j[i], 80, {
        restitution: 0.5,
        render: {
          fillStyle: h[i]
          //fillStyle: get_random_color()
        }
      });
      World.add(world, [ball1]);
    }

    // World.add(world, stack);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.1,
                render: {
                    visible: false
                }
            }
        });


    World.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
        min: { x: 0, y: 0 },
        max: { x: myCanvas.offsetWidth, y: myCanvas.offsetHeight }
    });



var downloadBtn = document.getElementById('download');
