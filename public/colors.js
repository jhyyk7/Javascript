Body={
            
    setColor:function(color){
        $('body').css('color',color);
    },
    setBackgroundColor:function(color){
        $('body').css('backgroundColor',color);
    }
}
Line={
    setColor:function(color){
       $('a').css('color',color);
    }
}
Web={
    setColor:function(color){
        $('.web').css('borderColor', color);
    }
}

function night_dayHandler(self) {                   
    if(self.value=='night'){        
        Body.setBackgroundColor('black');
        Body.setColor('white');            
        Line.setColor('white');
        Web.setColor('white');
        self.value='day';
    }        
    else{
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Line.setColor('black');
        Web.setColor('black');
        self.value='night';                         
    }
   
}