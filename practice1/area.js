
function areaSquare(num){
   return num * num;
}

function areaRectangle(l,b){
    return l*b;
} 

function areaCircle(radius){
    return Math.PI * (radius**2)
} 

module.exports = {areaSquare,areaRectangle,areaCircle}

