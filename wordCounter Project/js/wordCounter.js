class wordCounter {
    constructor() {
        this.text = null,
            this.rTime = null,
            this.sTime = null,
            this.count = () => {
                return {
                    
                    word: ()=>{
                    try {
                     return   this.text.match(/\w+/g).length;
                    } catch (error) {
                   return "0";
                    }
                    },
                    wChar: ()=>{
                        try {
                        return    this.text.match(/\w/g).length
                        } catch (error) {
                           return "0";
                        }
                    },
                    wsChar:()=>{
                        try {
                        return    this.text.match(/\W/g).length
                        } catch (error) {
                           return "0";
                        }
                    }, 
                    len:()=>{
                        try {
                        return     this.text.length
                        } catch (error) {
                         return "0";   
                        }
                    }
                    
                }
            },
            this.file = null,

            this.read = () => {
                return {

                    open: () => {

                        if (this.file !== null && this.file.files[0].type == "text/plain") {
                            return this.file.files[0].text(e => {
                                console.log(e);
                            }).then(e => {
                                this.fRead =e;
                                this.text=e;
                            }).catch(() => {
                                this.fRead = null;
                            });
                        }
                        else {
                            return this.fRead = "-ERR-";
                        }
                    }
                }
            },
            this.getData= async function ty(){
                 await n.read().open();
               let j =   await n.fRead;
                return(j);
               
               
               
               }
               
    }
}