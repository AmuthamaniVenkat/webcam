import { Component, OnInit } from '@angular/core';
import * as jQuery from 'jquery';
// import * as webcam from './jquery.webcam'

@Component({
  selector: 'app-cam',
  templateUrl: './cam.component.html',
  styleUrls: ['./cam.component.css']
})
export class CamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // webcam.width

 
    // jQuery("#webcam").webcam({

    //   width: 320,
    //   height: 240,
    //   mode: "callback",
    //   swffile: "jscam_canvas_only.swf", // canvas only doesn't implement a jpeg encoder, so the file is much smaller
    
    //   onTick: function(remain) {
    // debugger;
    //     if (0 == remain) {
    //       jQuery("#status").text("Cheese!");
    //     } else {
    //       jQuery("#status").text(remain + " seconds remaining...");
    //     }
    //   },
    
    //   onSave: function(data) {
    
    //     var col = data.split(";");
    //     // Work with the picture. Picture-data is encoded as an array of arrays... Not really nice, though =/
    //   },
    
    //   onCapture: function () {
    //     webcam.save();
    
    //      // Show a flash for example
    //   },
    
    //   debug: function (type, string) {
    //     debugger;
    //     // Write debug information to console.log() or a div, ...
    //   },
    
    //   onLoad: function () {
    //     // Page load
    //     debugger;
    //     var cams = webcam.getCameraList();
    //     for(var i in cams) {
    //       jQuery("#cams").append("<li>" + cams[i] + "</li>");
    //     }
    //   }
    // });
  }


}
