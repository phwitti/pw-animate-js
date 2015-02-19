
var pwanimate = (new function() {
  this.animation = function(settings) {
    this.frame = function(framesettings) {
      this.x = '-' + framesettings.x;
      this.y = '-' + framesettings.y;
      this.timeout = framesettings.timeout;
    };
    
    this.currentframe = 0;
    this.timer = 0;
    this.element = settings.element;
    this.image = settings.image;
    this.width = settings.width;
    this.height = settings.height;
    this.frames = (function(Frame) {
      var array = [];
      settings.frames.forEach(function(frame) {
        array.push(new Frame(frame));
      });
      return array;
    }(this.frame));
    
    
    this.start = function() {
      var e = this.element;
      e.style.backgroundImage =  "url(" + this.image + ")";
      e.style.width = this.width;
      e.style.height = this.height;
      this.frame(0);
    };
    
    this.pause = function() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = 0;
    };
    
    this.unpause = function() {
      if (!this.timer) {
        this.frame(this.currentframe);
      }
    };
    
    this.setframe = function(i) {
      this.currentframe = i;
      this.element.style.backgroundPosition = this.frames[i].x + " " + this.frames[i].y;
    };
    
    this.frame = function(i) {
      this.setframe(i);
      var animation_object = this;
      this.timer = setTimeout(function() { animation_object.nextframe(); }, this.frames[i].timeout);
    };
    
    this.nextframe = function() {
      var wrap = function(i, length) {
        if (i === length) {
          return 0;
        } else {
          return i;
        }
      };
      this.frame(wrap(this.currentframe + 1, this.frames.length));
    };
  };
  
  this.position = function(settings) {
    this.frame = function(framesettings) {
      this.x = framesettings.x;
      this.y = framesettings.y;
      this.timeout = framesettings.timeout;
    };
    
    this.currentframe = 0;
    this.timer = 0;
    this.element = settings.element;
    this.frames = (function(Frame) {
      var array = [];
      settings.frames.forEach(function(frame) {
        array.push(new Frame(frame));
      });
      return array;
    }(this.frame));
    
    
    this.start = function() {
      this.frame(0);
    };
    
    this.pause = function() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = 0;
    };
    
    this.unpause = function() {
      if (!this.timer) {
        this.frame(this.currentframe);
      }
    };
    
    this.setframe = function(i) {
      this.currentframe = i;
      var e = this.element;
      e.style.left = this.frames[i].x;
      e.style.top = this.frames[i].y;
    };
    
    this.frame = function(i) {
      this.setframe(i);
      var animation_object = this;
      this.timer = setTimeout(function() { animation_object.nextframe(); }, this.frames[i].timeout);
    };
    
    this.nextframe = function() {
      var wrap = function(i, length) {
        if (i === length) {
          return 0;
        } else {
          return i;
        }
      };
      this.frame(wrap(this.currentframe + 1, this.frames.length));
    };
  };
  
  this.animations = [];
  
  this.animate = function(settings) {
    var animation = (settings.type === 'position') ? (new this.position(settings)) : (new this.animation(settings));
    this.animations.push(animation);
    animation.start();
    return animation;
  };
}());
