let observer = new IntersectionObserver((entries,observer) => { //Her laver jeg intersection observer som skal se om et objekt er i viewporten
    for (const infobox1 of entries){
        if (infobox1.isIntersecting){
            hvemervitext.classList.add("tracking-in-contract-bck-bottom")
            infobox1text.classList.add("text-focus-in")
        } 
            
    };
    
    }, {threshold: 1}); // 1 = infobox1 skal være 100% i viewport for at tælle med
    
    //Hovedprogram
    const hvemervitext = document.getElementById("hvemervitext")
    const infobox1text = document.getElementById("infoboxtext1")
    const infobox1 = document.getElementById("hvemervi");
    observer.observe(infobox1);

    //Observer 2
    let observer2 = new IntersectionObserver((entries,observer) => {
        for (const infobox2 of entries){
            if (infobox2.isIntersecting){
                grethetext.classList.add("tracking-in-contract-bck-bottom")
                gretheinfotext.classList.add("text-focus-in")
                grethebillede.classList.add("swing-in-right-bck")
            } 
                
        };
        
        }, {threshold: 1});
        
       
        const grethetext = document.getElementById("grethetext")
        const gretheinfotext = document.getElementById("gretheinfotext")
        const grethebillede = document.getElementById("grethebillede")
        const infobox2 = document.getElementById("grethe");
        observer2.observe(infobox2);

        //Observer 3
        let observer3 = new IntersectionObserver((entries,observer) => {
            for (const infobox3 of entries){
                if (infobox3.isIntersecting){
                    hanstext.classList.add("tracking-in-contract-bck-bottom")
                    hansinfotext.classList.add("text-focus-in")
                    hansbillede.classList.add("swing-in-right-bck")
                } 
                    
            };
            
            }, {threshold: 1});
            
           
            const hanstext = document.getElementById("hanstext")
            const hansinfotext = document.getElementById("hansinfotext")
            const hansbillede = document.getElementById("hansbillede")
            const infobox3 = document.getElementById("hans");
            observer3.observe(infobox3);