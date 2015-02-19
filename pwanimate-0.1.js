/*
The MIT License (MIT)

Copyright (c) 2015 - Philipp Wittershagen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

/**
 * pw-animate-js-library: 
 */
var pwanimate = (new function() {
  
  /**
   * Creates a new animation-object
   * @class
   * @param {Object.<string, object>} settings
   */
  this.animation = function(settings) {
    
    /**
     * Creates a new frame-object
     * @class
     * @param {Object.<string, object>} frameSettings
     * @param {Object} animation
     */
    this.frame = function(frameSettings, animation) {
      var framesX = Math.floor(animation.width / animation.frameWidth);
      this.x = '-' + ((frameSettings.f % framesX) * animation.frameWidth) + 'px';
      this.y = '-' + (Math.floor(frameSettings.f / framesX) * animation.frameHeight) + 'px';
      this.timeout = frameSettings.t;
    };
    
    //
    
    this.currentFrame = 0;
    this.timer = 0;
    this.element = settings.element;
    this.image = settings.image;
    this.width = settings.width;
    this.height = settings.height;
    this.frameWidth = settings.frameWidth;
    this.frameHeight = settings.frameHeight;
    this.frames = (function(animation) {
      var array = [];
      settings.frames.forEach(function(frameSettings) {
        array.push(new animation.frame(frameSettings, animation));
      });
      return array;
    }(this));
    
    //    
    
    /**
     * Starts the animation
     */
    this.start = function() {
      var e = this.element;
      e.style.backgroundImage =  "url(" + this.image + ")";
      e.style.width = this.frameWidth + 'px';
      e.style.height = this.frameHeight + 'px';
      this.startFrame(0);
    };
    
    /**
     * Pauses the animation
     */
    this.pause = function() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = 0;
    };
    
    /**
     * Unpauses the animation
     */
    this.unpause = function() {
      if (!this.timer) {
        this.startFrame(this.currentFrame);
      }
    };
    
    /**
     * Set a certain frame, without changing the timer 
     *  -- call pause beforehand to use this in a sensible way
     * @param {Number} i - The number of the frame
     */
    this.setFrame = function(i) {
      this.currentFrame = i;
      this.element.style.backgroundPosition = this.frames[i].x + " " + this.frames[i].y;
    };
    
    /**
     * Set a certain frame, and start its timer 
     *  -- call pause before using this
     * @param {Number} i - The number of the frame
     */
    this.startFrame = function(i) {
      this.setFrame(i);
      var animationObject = this;
      this.timer = setTimeout(function() { animationObject.nextFrame(); }, this.frames[i].timeout);
    };
    
    /**
     * Proceed with the the next frame, and start its timer
     *  -- call pause before using this
     */
    this.nextFrame = function() {
      var wrap = function(i, length) {
        if (i === length) {
          return 0;
        } else {
          return i;
        }
      };
      this.startFrame(wrap(this.currentFrame + 1, this.frames.length));
    };
  };
  
  //
  
  /**
   * Creates a new animation-object, starts it and returns it
   * @param {Object.<string, object>} settings
   */
  this.animate = function(settings) {
    var animation = new this.animation(settings);
    animation.start();
    return animation;
  };
}());
