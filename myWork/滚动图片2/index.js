var OneLinks = new Array(3);//ͼƬ����
OneLinks[0] = "images/1.png";//��ͼƬ���鸳ֵ�����任ʱ��ͼ��ֵ
OneLinks[1] = "images/2.png";
OneLinks[2] = "images/3.png";
OneLinks[3] = "images/4.png";
OneLinks[4] = "images/5.jpg";
var id = function(el) {           
return document.getElementById(el);      
 };
c = id('photo-list');//��id�õ�photo-listԪ��
ul = id('scroll');//��id�õ�scrollԪ��
var i=0;
if(c){  marquee = function() {   
    var j=i%5;//�����ͼƬΪ����ѭ��   
    ul.getElementsByTagName('img')[0].src = OneLinks[j];//��ÿ�μ����任��ͼ��ֵ��ֵ��ͼƬԪ�ص�src 
     i++;
}; 
  speed = 4000;//�任��ʱ��Խ��任�ٶ�Խ��
  var timer = setInterval(marquee, speed); 
}