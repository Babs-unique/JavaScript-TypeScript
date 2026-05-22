// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export function Size(width=80, height=60){
  this.width = width,
  this.height = height
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
}

export function Position (x=0,y=0) {
  this.x = x,
  this.y = y 
}
Position.prototype.move = function (newX , newY) {
  this.x = newX,
  this.y = newY  
}
export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800,600);
    this.size = new Size();
    this.position = new Position();
  }
  resize(size){
  if (size.width < 1) {
    size.width = 1
  }
  if (size.height < 1) {
    size.height = 1
  }
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y

    if (size.width > maxWidth) {
       size.width = maxWidth
    }  
    if (size.height > maxHeight) {
      size.height = maxHeight
    }
    this.size = size
  }
   move(position){
     if(position.x < 0) {
       position.x = 0
     }
     if (position.y < 0) {
       position.y = 0
     }
     const maxPositionX = this.screenSize.width - this.size.width;
     const maxPositionY = this.screenSize.height - this.size.height;
     if (position.x > maxPositionX) {
       position.x = maxPositionX
     }
     if (position.y > maxPositionY) {
       position.y = maxPositionY
     }
     this.position = position
     }   
}

export function changeWindow(ProgramWindow) {
  ProgramWindow.size = new Size(400, 300);
  ProgramWindow.position = new Position(100, 150)

  return ProgramWindow;
}