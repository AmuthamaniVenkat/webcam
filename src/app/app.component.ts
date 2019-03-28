import { Component ,OnInit} from '@angular/core';
import * as Webcam from './webcam';
import { } from '../assets/'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
   shutter = new Audio();
  
  constructor(){
   }
  ngOnInit(){
    this.shutter.autoplay = false;
   this.shutter.src = navigator.userAgent.match(/Firefox/) ? '../assets/shutter.ogg' : '../assets/shutter.mp3';
    debugger;
    //Webcam.set('swfURL', '/path/to/the/webcam.swf');
    Webcam.set({
      // live preview size
      width: 320,
      height: 240,
      // device capture size
      dest_width: 640,
      dest_height: 480,
      // final cropped size
      crop_width: 480,
      crop_height: 480,
      swfURL: '../assets/webcam.swf',
      // format and quality
      image_format: 'jpeg',
      jpeg_quality: 90,
      
      // flip horizontal (mirror mode)
      flip_horiz: true
    });
    Webcam.attach( '#my_camera' );
   
		
  }

   preview_snapshot() {
 
    // play sound effect
    try { this.shutter.currentTime = 0; } catch(e) {;} // fails in IE
    this.shutter.play();
    
    // freeze camera so user can preview current frame
    Webcam.freeze();
    
    // swap button sets
    document.getElementById('pre_take_buttons').style.display = 'none';
    document.getElementById('post_take_buttons').style.display = '';
  }
  
   cancel_preview() {
    // cancel preview freeze and return to live camera view
    Webcam.unfreeze();
    
    // swap buttons back to first set
    document.getElementById('pre_take_buttons').style.display = '';
    document.getElementById('post_take_buttons').style.display = 'none';
  }
  
   save_photo() {
    // actually snap photo (from preview freeze) and display it
    Webcam.snap( function(data_uri) {
      // display results in page
      document.getElementById('results').innerHTML = 
        '<h2>Here is your large, cropped image:</h2>' + 
        '<img src="'+data_uri+'"/><br/></br>' + 
        '<a href="'+data_uri+'" target="_blank">Open image in new window...</a>';
      
      // shut down camera, stop capturing
      Webcam.reset();
      
      // show results, hide photo booth
      document.getElementById('results').style.display = '';
      document.getElementById('my_photo_booth').style.display = 'none';
    } );
  }
}
