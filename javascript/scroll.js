
        window.onload=function(){
            var doc=document,scrollToTop=doc.getElementById('scrollToTop'),timer;
            window.onscroll=function(){
                var top=doc.body.scrollTop;
                if(top>=500){
                    scrollToTop.style.display='block';
                }else{
                    scrollToTop.style.display='';
                }
            }
            scrollToTop.onclick=function(){
                var _top=doc.body.scrollTop,dir=10;
                timer=setInterval(function(){
                    dir=dir+10;
                    _dir=_top-dir;
                    document.body.scrollTop=_dir;
                    if(_dir<=0){
                        clearInterval(timer);
                    }
                },10);
            }
        }