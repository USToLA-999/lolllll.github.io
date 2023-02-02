const bn= document.getElementById('bn');
        let left = 40;
        bn.addEventListener('mouseover',function(){
            if(left == 20){
                left = 4;
            }
            else if(left=20){
                left=20;
                
            }
            
            this.style.left = left + '%';
        });
   
   
    document.getElementById('by').addEventListener('click',function(){
        alert('YAY THANKYOU LOVE YOU SO MUCH');
    })