
class Shape{
  constructor(){
    this.color = '';
  }

  setColor(color){
    this.color = (color);
  }
}

class Triangle extends Shape {
    render(){
      return `
          <polygon hight="100%" width="100%" points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }


  class Circle extends Shape {
    render(){
       return `<circle cx="150" cy="100" r="100" hight="100%" width="100%" fill="${this.color}" />`
    }


    }
  
  class Square extends Shape{
   render(){
    return `<rect width="300" height="300" fill="${this.color}" /> `;
   }
      
  }

  module.exports ={
    Circle,
    Triangle,
    Square
};