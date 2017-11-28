(function(){
    //scene
    let scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2( 0xcccccc, 0.002 );

    //render
    let renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio( window.devicePixelRatio );
 
    document.body.appendChild(renderer.domElement);

    //camera
    const aspectRatio = window.innerWidth / window.innerHeight;
    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
    camera.position.z = 500;

    //controls
    controls = new THREE.OrbitControls( camera, renderer.domElement );
  
    // enable animation loop when using damping or autorotation
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
    controls.enableZoom = false;
        

         //cube map
 
         scene.background = new THREE.CubeTextureLoader()
         .setPath( 'public/' )
         .load( [
             'sea_ft.jpg',
             'sea_bk.jpg',
             'sea_up.jpg',//
             'sea_dn.jpg',//
             'sea_rt.jpg',
             'sea_lf.jpg'
           
         ] );

         
         var geometry = new THREE.Geometry();
            geometry.vertices.push(

                new THREE.Vector3(   5,   0,   0 ),
                new THREE.Vector3( - 5, - 2,   1 ),
                new THREE.Vector3( - 5,   0,   0 ),
                new THREE.Vector3( - 5, - 2, - 1 ),
            
                new THREE.Vector3(   0,   2, - 6 ),
                new THREE.Vector3(   0,   2,   6 ),
                new THREE.Vector3(   2,   0,   0 ),
                new THREE.Vector3( - 3,   0,   0 )
            );
         
         geometry.faces.push( 
            
             new THREE.Face3( 0, 2, 1 ),         
             new THREE.Face3( 4, 7, 6 ),
             new THREE.Face3( 5, 6, 7 )
            );
         
         geometry.computeBoundingSphere();

         var bird;
         var birds=[];
             
				for ( var i = 0; i < 1000; i ++ ) {
             bird = birds[ i ] = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { color:Math.random() * 0xffffff, side: THREE.DoubleSide } ) );
           bird.position.y=Math.random()*(500-0);
           bird.position.x=Math.random()*(500-0);
           bird.position.z=Math.random()*(500-0);
          
           scene.add( bird );
        }


        let loader = new THREE.TextureLoader();
         //Coco
    loader.load('public/coc.jpg', function(texture){
        let geometry = new THREE.SphereGeometry(20,30,80)
        let material = new THREE.MeshBasicMaterial({
            map:texture
        })
    mesh = new THREE.Mesh(geometry,material);
    mesh.position.y = 27;
    mesh.position.x = -15;
    scene.add(mesh);
    })
    //Coco
    loader.load('public/coc.jpg', function(texture){
        let geometry = new THREE.SphereGeometry(20,30,50)
        let material = new THREE.MeshBasicMaterial({
            map:texture
        })
    mesh = new THREE.Mesh(geometry,material);
    mesh.position.y = 27;
    mesh.position.x = 50;
    scene.add(mesh);
    })
    //Coco
    loader.load('public/coc.jpg', function(texture){
        let geometry = new THREE.SphereGeometry(20,30,70)
        let material = new THREE.MeshBasicMaterial({
            map:texture
        })
    mesh = new THREE.Mesh(geometry,material);
    mesh.position.y = 20;
    mesh.position.x = 20;
    scene.add(mesh);
    })
     //Tronco Palmera
    loader.load('public/Palm.jpg', function(texture){
        let geometry = new THREE.CylinderBufferGeometry(10,40,300,10)
        let material = new THREE.MeshBasicMaterial({
            map:texture
        })
        mesh = new THREE.Mesh(geometry,material);
        mesh.position.y = -130;
        mesh.position.x = 20;
        scene.add(mesh);
        })
     //Hojas Palmeras
        loader.load('public/hoja.jpg', function(texture){
            let geometry = new THREE.ConeGeometry(20,100,)
            let material = new THREE.MeshBasicMaterial({
                map:texture
            })
        mesh = new THREE.Mesh(geometry,material);
        mesh.position.y = 37;
        mesh.position.x = -25;
        mesh.rotation.z=1;
      
        scene.add(mesh);
        })
        loader.load('public/hoja.jpg', function(texture){
            let geometry = new THREE.ConeGeometry(20,100,)
            let material = new THREE.MeshBasicMaterial({
                map:texture
            })
        mesh = new THREE.Mesh(geometry,material);
        mesh.position.y = 45;
        mesh.position.x = 70;
        mesh.rotation.z=-1;
        scene.add(mesh);
        })
        loader.load('public/hoja.jpg', function(texture){
            let geometry = new THREE.ConeGeometry(20,100,)
            let material = new THREE.MeshBasicMaterial({
                map:texture
            })
        mesh = new THREE.Mesh(geometry,material);
        mesh.position.y = 55;
        mesh.position.x = -20;
        mesh.rotation.z=0.5;
        scene.add(mesh);
        })
        loader.load('public/hoja.jpg', function(texture){
            let geometry = new THREE.ConeGeometry(20,100,)
            let material = new THREE.MeshBasicMaterial({
                map:texture
            })
        mesh = new THREE.Mesh(geometry,material);
        mesh.position.y = 55;
        mesh.position.x = 50;
        mesh.rotation.z=-0.5;
        scene.add(mesh);
        })
        loader.load('public/hoja.jpg', function(texture){
            let geometry = new THREE.ConeGeometry(20,100,)
            let material = new THREE.MeshBasicMaterial({
                map:texture
            })
        mesh = new THREE.Mesh(geometry,material);
        mesh.position.y = 55;
        mesh.position.x = 20;
        scene.add(mesh);
        })
//montaña
         //textura
         var material = new THREE.MeshPhongMaterial({ map: THREE.ImageUtils.loadTexture('public/mon.jpg') });
         //cilindros
         var geometry = new THREE.CylinderGeometry( 30, 400, 570, 100 );
         var cylinder = new THREE.Mesh( geometry, material );
         //cilindros 2
         var geometry2 = new THREE.CylinderGeometry( 30, 260, 640, 10 );
         var cylinder2 = new THREE.Mesh( geometry2, material );
         //cilindros 3
         var geometry3 = new THREE.CylinderGeometry( 50, 300, 700, 19 );
         var cylinder3 = new THREE.Mesh( geometry3, material );
 
         cylinder.position.x = 200;
         cylinder.position.y = -100;
         cylinder.position.z = -400;
         
         cylinder2.position.x = 400;
         cylinder2.position.y = -100;
         cylinder2.position.z = -450;
 
         cylinder3.position.x = 600;
         cylinder3.position.y = -100;
         cylinder3.position.z = -400;

         scene.add(cylinder);
         scene.add(cylinder2);
         scene.add(cylinder3);
        
                 

        //isla
         loader.load('public/are.jpg', function(texture){
            let Geometry = new THREE.PlaneGeometry(2000,1500,8,8);
            for ( var i = 0; i < 20; i ++ ) {
            Geometry.vertices[i].x = Math.sin(-20-10)*Math.random(50-10)*50;
            Geometry.vertices[i].y = Math.sin(-20-10)*Math.random(50-10)*50;
            }
            let Material = new THREE.MeshPhongMaterial({
                map: texture,
                side: THREE.DoubleSide
                });
            let plane = new THREE.Mesh(Geometry,Material);
            plane.position.y = -300;
            plane.rotation.x=2;
            plane.rotation.z=2;
            scene.add(plane);
            });
         
         var ambientLight= new THREE.AmbientLight(0xFFFFFF,0.3);
         scene.add(ambientLight);


         function loop(){
            
            requestAnimationFrame(loop);
            for ( var i = 0; i < birds.length; i ++ ) {
                bird=birds[i];
                bird.position.x+=0.6;
            }

          renderer.render(scene, camera);
        }
    
        loop();

    })();