var exercise = {};

// calculate distance between points
exercise.distance = function(p1,p2){
    return Math.sqrt(
        Math.pow((p2.x-p1.x), 2)+Math.pow((p2.y-p1.y), 2)
    ); 
    //return 'Error: 1st function not implemented';
    /*
    var dx = p2.x-p1.x;
    var dy = p2.y-p1.y
    return Math.sqrt(dx*dx+ dy*dy); 
    */     
};

// calculate distance between new point and existing
exercise.distances = function(newPoint,data){
    data.forEach(function(element){
        element.distance = exercise.distance(newPoint, element); 
        //console.log(element); 
    });
    return data;  
    //return 'Error: 2nd function not implemented';
}; 

// find k closest points
exercise.findClosest = function(k,data){
    data.sort(function(a,b){
        return a.distance - b.distance;
    })
    //return 'Error: 3rd function not implemented'; 
    return data.slice(0,k);    
};

module.exports = exercise;
