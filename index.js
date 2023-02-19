var beepBeep = document.createElement('audio');
beepBeep.setAttribute( 'src', './assets/images/horn.mp3'); 
beepBeep.loop=false;
beepBeep.play();



// class Car{
//     constructor(_color,_model,_year,_mile,_bodyImg,_x,_y){
//         this.color = _color;
//         this.model = _model;
//         this.mileage = _mile;
//         this.body = _bodyImg;
//         this.x = _x;
//         this.y = _y;
//     }
//     moveForwrd(){
//         this.x = this.x + 5;
//     }
// }
// const yellowCar = new Car("Yellow","Taxi","2020",100,"",5,5);
// console.log(yellowCar);