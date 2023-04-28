//localStorage.clear();
class GC
{
    destructTLI( taskLI )
    {
        taskLI = null;
    }
}
class TaskLI extends GC 
{
    constructor (descript)
    {
        super();
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

                    this.destructTLI(this);
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

window.addEventListener('load', ()=>
{
    for(let i=0; i<localStorage.length; i++)
    {
        new TaskLI(localStorage.key(i));
    }
});

function addTask()
{
    let descript = document.querySelector("#taskIn").value;

    if(descript)
    {
        let task = 
            new TaskLI( descript );
            
        task.addToLocalStorage();  
    }  
}

