
const section = document.getElementById('summary')

let button = document.getElementById("button");

async function getData(){
    const response = await fetch('/data.json');
    const data = await response.json();
    loadSummary(data);
}

function loadSummary(obj){

    const h3 = document.createElement('h3');
    h3.textContent = 'Summary';
    section.appendChild(h3);

    for(const item of obj){
     
        let summaryDiv = document.createElement("div");
        summaryDiv.setAttribute("class", `summary-container ${item.category.toLowerCase()} `);
       
        let summaryIconDiv = document.createElement("div");
        summaryIconDiv.setAttribute("class", "summary-icon");

        let img1 = document.createElement("img");
        img1.setAttribute("src", item.icon);
        let para1 = document.createElement("p");
        para1.textContent = item.category;

        summaryIconDiv.appendChild(img1);
        summaryIconDiv.appendChild(para1);

        summaryDiv.appendChild(summaryIconDiv);

        let div2 = document.createElement("div");
        let span1 = document.createElement("span");
        span1.setAttribute("class", "result-score");
        span1.textContent = item.score;
        let span2 = document.createElement("span");
        span2.textContent = "/ 100";
        div2.appendChild(span1);
        div2.appendChild(span2)
        
        // para2.innerHTML = <span class="result-score">{item.score}</span>;
        // para2.textContent = " / 100";
        summaryDiv.appendChild(div2);
        section.appendChild(summaryDiv)

    }
    let button = document.createElement("button");
     button.setAttribute("type", "submit");
     button.setAttribute('id', 'button')
     button.textContent = "Continue";
     section.appendChild(button);
     
}

getData()


