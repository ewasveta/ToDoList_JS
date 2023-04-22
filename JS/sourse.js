//localStorage.clear();
window.addEventListener('load', ()=>
{
    for(let i=0; i<localStorage.length; i++)
    {
        new TaskLI(localStorage.key(i));
    }
});

class TaskLI 
{
    constructor (descript)
    {
        this.descript = descript;      
 
        this.li = document.createElement("LI");
            this.chb = document.createElement("INPUT");
            this.chb.setAttribute("type", "checkbox");
            this.chb.addEventListener("click", ()=>
            {
                if(this.txt.className === "strikethrough") 
                {
                    this.txt.className = "";
                    this.trash.style = "color: darkcyan;";
                }
                else 
                {
                    this.txt.className = "strikethrough";
                    this.trash.style = "color: orangered;";
                }
            });
        this.li.appendChild(this.chb);    
            this.txt = document.createElement("INPUT");
            this.txt.setAttribute("type", "text");
            this.txt.value = this.descript;
        this.li.appendChild(this.txt);
            this.trash = Object.assign(document.createElement("i"), 
                       {className:"fa-regular fa-trash-can"});
            this.trash.addEventListener("click", ()=>
            {
                if( this.trash.style.color == "orangered")
                {
                    document.querySelector("#list").removeChild(this.li);

                    document.querySelector("#taskIn").value = "";
                    document.querySelector("#taskIn").placeholder = 
                        "type your Task here"; 

                    localStorage.removeItem(this.descript);  
                }          
            });
        this.li.appendChild(this.trash);     

        document.querySelector("#list").appendChild(this.li);

        document.querySelector("#taskIn").value = "";
        document.querySelector("#taskIn").placeholder = 
            "type your Task here";    
    }

    addToLocalStorage()
    {
        localStorage.setItem(this.descript, `${(new Date()).toLocaleString()}`);
    }
}

function addTask()
{
    let task = 
        new TaskLI( document.querySelector("#taskIn").value );
        
    task.addToLocalStorage();    
}
