var OneLinks = new Array(3);//图片数组
OneLinks[0] = "images/1.png";//给图片数组赋值，即变换时的图像值
OneLinks[1] = "images/2.png";
OneLinks[2] = "images/3.png";
OneLinks[3] = "images/4.png";
OneLinks[4] = "images/5.jpg";
var id = function(el) {           
return document.getElementById(el);      
 };
c = id('photo-list');//由id得到photo-list元素
ul = id('scroll');//由id得到scroll元素
var i=0;
if(c){  marquee = function() {   
    var j=i%5;//以五个图片为例，循环   
    ul.getElementsByTagName('img')[0].src = OneLinks[j];//将每次即将变换的图像值赋值给图片元素的src 
     i++;
}; 
  speed = 4000;//变换的时间差，越大变换速度越慢
  var timer = setInterval(marquee, speed); 
}