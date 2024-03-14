document.querySelectorAll('img').forEach(img => {
    fetch(`https://api.moderatecontent.com/moderate/?key=232fab016369c0a78f449a173a5fd64b&url=` + img.src).then(res => { //Yeah my API key is exposed. It's a free key, you can steal it if you want I guess I'll just make another
        if (res.ok) {
            res.json().then(rating => {
                if (rating.predictions.adult > 1){
                    img.style.filter = 'blur(8px)'
                }
            })
        }
    })
    
  });
  
