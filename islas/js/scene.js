(function(){
    
        let scene = new THREE.Scene();
        const aspectRatio = window.innerWidth / window.innerHeight;
        let camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 100);
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
    
        camera.position.z = 60;
        camera.position.y = 10;    

        //textura
        var material = new THREE.MeshPhongMaterial({ map: THREE.ImageUtils.loadTexture('text.jpg') });
        //cilindros
        var geometry = new THREE.CylinderGeometry( 3, 8, 17, 10 );
        var cylinder = new THREE.Mesh( geometry, material );
        //cilindros 2
        var geometry2 = new THREE.CylinderGeometry( .7, 8, 17, 10 );
        var cylinder2 = new THREE.Mesh( geometry2, material );
        //cilindros 3
        var geometry3 = new THREE.CylinderGeometry( .9, 8, 30, 19 );
        var cylinder3 = new THREE.Mesh( geometry3, material );
        //esfera
        var geometry = new THREE.SphereBufferGeometry(100, 200, 200 );
        var sphere = new THREE.Mesh( geometry, material );

        cylinder.position.x = 29;
        cylinder.position.y = 1;
        cylinder.position.z = 20;
        
        cylinder2.position.x = 6;
        cylinder2.position.y = 4;
        cylinder2.position.z = 25;

        cylinder3.position.x = 19;
        cylinder3.position.y = 7;
        cylinder3.position.z = 20;

        sphere.position.x = -35;
        sphere.position.y = 0;  
        sphere.position.z = 14;   

        //Agua
		var geometry = new THREE.PlaneGeometry( 2000,2000,50,50);
		var material = new THREE.MeshBasicMaterial( {color: 0xd3e4ff, side: THREE.DoubleSide} );
		var plane = new THREE.Mesh( geometry, material );
        
        plane.position.x = 19;
        plane.position.y = -98;  
        plane.position.z = 20;  

        scene.background = new THREE.Color(0xeeeeee);
        scene.add(new THREE.AmbientLight(0x606060));
        scene.add( plane );
        scene.add(cylinder);
        scene.add(cylinder2);
        scene.add(cylinder3);
        scene.add(sphere);
                

        function loop(){
            requestAnimationFrame(loop);
            //torus.rotation.x += 0.01;
            renderer.render(scene, camera);
        }
    
        loop();
    
    })();